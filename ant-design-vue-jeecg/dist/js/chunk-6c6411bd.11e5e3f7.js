(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c6411bd","chunk-2d0df437","chunk-2d0df437"],{"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,i="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",l="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")();function u(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,a=e?e.length:0,i=Array(a);while(++r<a)i[r]=t(e[r],r,e);return i}function f(e,t){var r=-1,a=t.length,i=e.length;while(++r<a)e[i+r]=t[r];return e}var h=Object.prototype,b=h.hasOwnProperty,p=h.toString,v=d.Symbol,g=h.propertyIsEnumerable,w=v?v.isConcatSpreadable:void 0,C=Math.max;function y(e,t,r,a,i){var n=-1,o=e.length;r||(r=x),i||(i=[]);while(++n<o){var l=e[n];t>0&&r(l)?t>1?y(l,t-1,r,a,i):f(i,l):a||(i[i.length]=l)}return i}function k(e,t){return e=Object(e),j(e,t,(function(t,r){return r in e}))}function j(e,t,r){var a=-1,i=t.length,n={};while(++a<i){var o=t[a],l=e[o];r(l,o)&&(n[o]=l)}return n}function O(e,t){return t=C(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,i=C(r.length-t,0),n=Array(i);while(++a<i)n[a]=r[t+a];a=-1;var o=Array(t+1);while(++a<t)o[a]=r[a];return o[t]=n,u(e,this,o)}}function x(e){return S(e)||F(e)||!!(w&&e&&e[w])}function I(e){if("string"==typeof e||N(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function F(e){return $(e)&&b.call(e,"callee")&&(!g.call(e,"callee")||p.call(e)==i)}var S=Array.isArray;function T(e){return null!=e&&D(e.length)&&!A(e)}function $(e){return B(e)&&T(e)}function A(e){var t=L(e)?p.call(e):"";return t==n||t==o}function D(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function L(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function B(e){return!!e&&"object"==typeof e}function N(e){return"symbol"==typeof e||B(e)&&p.call(e)==l}var q=O((function(e,t){return null==e?{}:k(e,m(y(t,1),I))}));e.exports=q}).call(this,r("c8ba"))},aa8e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,okButtonProps:{props:{disabled:e.disableSubmit}},confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"航班号",hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ticketCode",{rules:[{required:!0,message:"请输入航班号!"}]}],expression:"['ticketCode', {rules:[{ required: true,message: '请输入航班号!'}]}]"}],attrs:{placeholder:"请输入航班号",readOnly:e.disableSubmit}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"航班时间",hasFeedback:""}},[r("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["tickectDate",{rules:[{required:!0,message:"请输入航班号!"}]}],expression:"['tickectDate',{rules:[{ required: true,message: '请输入航班号!'}]}]"}],attrs:{"trigger-change":!0}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号码",hidden:e.hiding,hasFeedback:""},model:{value:this.orderId,callback:function(t){e.$set(this,"orderId",t)},expression:"this.orderId"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderId",{}],expression:"[ 'orderId', {}]"}],attrs:{disabled:"disabled"}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"创建人",hidden:e.hiding,hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["createBy",{}],expression:"[ 'createBy', {}]"}],attrs:{readOnly:e.disableSubmit}})],1),r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"创建时间",hidden:e.hiding,hasFeedback:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["createTime",{}],expression:"[ 'createTime', {}]"}],attrs:{readOnly:e.disableSubmit}})],1)],1)],1)],1)},i=[],n=r("0fea"),o=r("88bc"),l=r.n(o),s=r("c1df"),c=r.n(s),d=r("2dab"),u={components:{JDate:d["default"]},name:"JeecgOrderTicketModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},moment:c.a,format:"YYYY-MM-DD HH:mm:ss",disableSubmit:!1,orderId:"",hiding:!1,confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/order/addTicket",edit:"/test/order/editTicket"}}},created:function(){},methods:{add:function(e){e?this.edit({orderId:e},""):this.$message.warning("请选择一条航班数据")},detail:function(e){this.edit(e,"d")},edit:function(e,t){var r=this;"e"==t?(this.hiding=!1,this.disableSubmit=!1):"d"==t?(this.hiding=!1,this.disableSubmit=!0):(this.hiding=!0,this.disableSubmit=!1),this.form.resetFields(),this.orderId=e.orderId,this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){r.form.setFieldsValue(l()(r.model,"ticketCode","tickectDate","orderId","createBy","createTime","updateBy","updateTime"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,a){if(!r){t.confirmLoading=!0;var i="",o="";e.model.id?(i+=e.url.edit,o="put"):(i+=e.url.add,o="post");var l=Object.assign(e.model,a);l.mainId=e.orderId,Object(n["h"])(i,l,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}},m=u,f=r("2877"),h=Object(f["a"])(m,a,i,!1,null,"6f93af9c",null);t["default"]=h.exports}}]);