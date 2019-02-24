<template>
        <router-view></router-view>
</template>

<script>
    export default{
      name: 'APP'
    }
</script>


<style>
.body-content {
        padding: 20px 0px;
        overflow: hidden;
        }

.layui-input, .layui-select, .layui-textarea {
        font-size: 15px;
        height: 35px;
        line-height: 1.3;
        line-height: 35px\9;
        border-width: 1px;
        border-style: solid;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.075) inset;
}

.layui-tab-title .layui-this {
        color: #ff0000;
}


input::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #aab2bd;
        /* placeholder字体大小  */
        font-size: 13px;
}
</style>