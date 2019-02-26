import Vue from 'vue';
import qs from 'qs'
import axios from 'axios'

Vue.prototype.$axios = axios;

/**
 * 真正的请求
 * @param url 请求地址
 * @param options 请求参数
 * @param method 请求方式
 * @param header 头文件
 */

export function commonFetcdh(url, options, header='', method = 'GET') {
    let initObj = {};
    if (method === 'GET') { // 如果是GET请求，拼接url
        url += '?' + searchStr;
        initObj = {
            method: method,
        }
    } else {
        initObj = {
            method: method,
            headers: header,
            body: options
        }
    }
    fetch(url, initObj).then((res) => {
        return res.json()
    }).then((res) => {
        return res
    })
}







/**
 * 是否为数字
 */
export const isIntNum = function(val){
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)){
        return true;
    }else{
        return false;
    }
}

//日期格式转换
export function formatDate (date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};


export function syntaxHighlight(jsonString) {
    try {
        let obj = JSON.parse(jsonString);
        return syntaxHighlight(JSON.stringify(obj, undefined, 2));
        // return JSON.stringify(obj, null, 2);
    } catch (ex) {
        return jsonString;
    }
};
function padLeftZero (str) {
    return ('00' + str).substr(str.length);
};
