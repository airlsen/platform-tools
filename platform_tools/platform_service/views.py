# __author__ = 'asen'
# coding=utf-8

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from platform_service.models import Book
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.core import serializers
import json
import requests  # 爬虫专用库
import re
import urllib.request

def index(request):
    return render(request, 'index.html')


def demo(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)


@csrf_exempt
def test_api(request):
    return JsonResponse({"result": 0, "msg": "执行成功"})


# Create your views here.
@require_http_methods(["GET"])
def add_book(request):
    response = {}
    try:
        book = Book(book_name=request.GET.get('book_name'))
        book.save()
        response['msg'] = 'success'
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)


@require_http_methods(["GET"])
def show_books(request):
    response = {}
    try:
        books = Book.objects.filter()
        response['list'] = json.loads(serializers.serialize("json", books))
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)

@require_http_methods(["GET"])
def add_book(request):
    response = {}
    try:
        response['msg'] = 'success'
        response['error_num'] = 0
    except Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)

@require_http_methods(["GET"])
def get(request):
    response = {}
    try:
        url = request.GET.get('url')

        response['data'] = (getlink(url), getlinkstatus(url))
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception as e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)




def getlink(url):
    try:
        headers = ("User-Agent",
                   "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36")
        opener = urllib.request.build_opener()
        opener.addheaders = [headers]
        urllib.request.install_opener(opener)
        file = urllib.request.urlopen(url, timeout=3).read()
        file = file.decode('utf-8')
        pattern = '(https?://[^\s)";]+(\.(\w|/)*))'
        link = re.compile(pattern).findall(file)
        # 去重
        link = list(set(link))
        # print(link)
        return link
    except Exception as e:
        print(e)


def getlinkone():
    n = 0
    print(n)
    n = n + 1
    pass


def getlinkstatus(url):
    r = requests.get(url, timeout=5)  # 从requests.get()中返回过来的Response对象赋予到r
    # if r.status_code == 200:  # 测试是否成功
    #     print("ok")
    r.encoding = "UTF-8"  # 把编码格式换成UTF-8，时text文本能够读懂
    # print(r.text)
    return r.status_code, r.elapsed.total_seconds()