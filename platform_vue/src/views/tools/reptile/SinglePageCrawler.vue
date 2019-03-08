<template>
    <div class="container navigation">
        <div class="row">
            <div class="col nav">
                <ul class="pc-nav">
                    <li><a href="//www.runoob.com/">首页</a></li>
                    <li><a href="/html/html-tutorial.html">HTML</a></li>
                    <li><a href="/css/css-tutorial.html">CSS</a></li>
                    <li><a href="/js/js-tutorial.html">JavaScript</a></li>
                    <li><a href="/jquery/jquery-tutorial.html">jQuery</a></li>
                    <li><a href="/bootstrap/bootstrap-tutorial.html">Bootstrap</a></li>
                    <li><a href="/sql/sql-tutorial.html">SQL</a></li>
                    <li><a href="/mysql/mysql-tutorial.html">MySQL</a></li>
                    <li><a href="/php/php-tutorial.html">PHP</a></li>
                    <li><a href="/python/python-tutorial.html">Python2</a></li>
                    <li><a href="/python3/python3-tutorial.html">Python3</a></li>
                    <li><a href="/cprogramming/c-tutorial.html">C</a></li>
                    <li><a href="/cplusplus/cpp-tutorial.html">C++</a></li>
                    <li><a href="/csharp/csharp-tutorial.html">C#</a></li>
                    <li><a href="/java/java-tutorial.html">Java</a></li>
                    <li><a href="/browser-history">本地书签</a></li>

                    <!--
                    <li><a href="javascript:;" class="runoob-pop">登录</a></li>
                    -->
                </ul>

            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "SinglePageCrawler"
    }
</script>



<style scoped>

    .navigation {
        background: #96b97d;
    }
    .container {
        padding-left: 10px;
        padding-right: 10px;
    }

    .row {
        width: 100%;
        max-width: 1260px;
        min-width: 755px;
        margin: 0 auto;
        overflow: hidden;
    }

    .nav {
        text-transform: uppercase;
    }


    .nav ul, .nav-sub ul {
        list-style: none;
        white-space: nowrap;
    }
    a, abbr, address, blockquote, body, caption, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, html, iframe, img, ins, label, legend, li, object, ol, p, pre, q, small, span, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, ul {
        border: 0;
        margin: 0;
        padding: 0;
    }

</style>