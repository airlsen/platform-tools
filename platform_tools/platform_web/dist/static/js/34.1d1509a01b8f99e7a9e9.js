webpackJsonp([34],{592:function(t,e,o){var n=o(9)(o(671),o(752),null,null,null);n.options.__file="D:\\workspace-python\\platform-tools\\platform_vue\\src\\views\\components\\Modal.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},671:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{modal1:!1}},methods:{ok:function(){this.modal1=!1,this.$Message.info("点击了确定")},cancel:function(){this.$Message.info("点击了取消")}}}},752:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Button",{attrs:{type:"primary"},on:{click:function(e){t.modal1=!0}}},[t._v("显示对话框")]),t._v(" "),o("Modal",{attrs:{title:"普通的Modal对话框标题"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[o("input",{staticClass:"layui-input",attrs:{type:"text",autocomplete:"off"}}),t._v(" "),o("input",{staticClass:"layui-input",attrs:{type:"text",autocomplete:"off"}}),t._v(" "),o("input",{staticClass:"layui-input",attrs:{type:"text",autocomplete:"off"}})])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});
//# sourceMappingURL=34.1d1509a01b8f99e7a9e9.js.map