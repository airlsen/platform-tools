
from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url('demo', views.demo, name='demo'),
    # ex: /polls/5/
    url(r'^(?P<question_id>[0-9]+)/$', views.detail, name='detail'),
    # ex: /polls/5/results/
    url(r'^(?P<question_id>[0-9]+)/results/$', views.results, name='results'),
    # ex: /polls/5/vote/
    url(r'^(?P<question_id>[0-9]+)/vote/$', views.vote, name='vote'),
    url('^test_api', views.test_api, name='test_api'),

    url(r'add_book$', views.add_book, ),
    url(r'show_books$', views.show_books, ),
    url(r'getlink$', views.get, ),
]