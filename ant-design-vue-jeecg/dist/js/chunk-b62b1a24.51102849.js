(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b62b1a24","chunk-162dbbed","chunk-2d0df437","chunk-2d0df437"],{"1bff":function(e,a,t){},3351:function(e,a,t){"use strict";var r=t("1bff"),l=t.n(r);l.a},"88bc":function(e,a,t){(function(a){var t=1/0,r=9007199254740991,l="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",i="object"==typeof a&&a&&a.Object===Object&&a,c="object"==typeof self&&self&&self.Object===Object&&self,d=i||c||Function("return this")();function u(e,a,t){switch(t.length){case 0:return e.call(a);case 1:return e.call(a,t[0]);case 2:return e.call(a,t[0],t[1]);case 3:return e.call(a,t[0],t[1],t[2])}return e.apply(a,t)}function m(e,a){var t=-1,r=e?e.length:0,l=Array(r);while(++t<r)l[t]=a(e[t],t,e);return l}function p(e,a){var t=-1,r=a.length,l=e.length;while(++t<r)e[l+t]=a[t];return e}var b=Object.prototype,f=b.hasOwnProperty,v=b.toString,h=d.Symbol,y=b.propertyIsEnumerable,g=h?h.isConcatSpreadable:void 0,w=Math.max;function C(e,a,t,r,l){var n=-1,o=e.length;t||(t=j),l||(l=[]);while(++n<o){var s=e[n];a>0&&t(s)?a>1?C(s,a-1,t,r,l):p(l,s):r||(l[l.length]=s)}return l}function x(e,a){return e=Object(e),k(e,a,(function(a,t){return t in e}))}function k(e,a,t){var r=-1,l=a.length,n={};while(++r<l){var o=a[r],s=e[o];t(s,o)&&(n[o]=s)}return n}function S(e,a){return a=w(void 0===a?e.length-1:a,0),function(){var t=arguments,r=-1,l=w(t.length-a,0),n=Array(l);while(++r<l)n[r]=t[a+r];r=-1;var o=Array(a+1);while(++r<a)o[r]=t[r];return o[a]=n,u(e,this,o)}}function j(e){return R(e)||_(e)||!!(g&&e&&e[g])}function U(e){if("string"==typeof e||F(e))return e;var a=e+"";return"0"==a&&1/e==-t?"-0":a}function _(e){return O(e)&&f.call(e,"callee")&&(!y.call(e,"callee")||v.call(e)==l)}var R=Array.isArray;function D(e){return null!=e&&q(e.length)&&!T(e)}function O(e){return E(e)&&D(e)}function T(e){var a=N(e)?v.call(e):"";return a==n||a==o}function q(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function N(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}function E(e){return!!e&&"object"==typeof e}function F(e){return"symbol"==typeof e||E(e)&&v.call(e)==s}var $=S((function(e,a){return null==e?{}:x(e,m(C(a,1),U))}));e.exports=$}).call(this,t("c8ba"))},d57c:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据源编码"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",e.validatorRules.code],expression:"['code', validatorRules.code]"}],attrs:{placeholder:"请输入数据源编码",disabled:!!e.model.id}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据源名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",e.validatorRules.name],expression:"['name', validatorRules.name]"}],attrs:{placeholder:"请输入数据源名称"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据库类型"}},[t("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbType",e.validatorRules.dbType],expression:"['dbType', validatorRules.dbType]"}],attrs:{placeholder:"请选择数据库类型","dict-code":"database_type",triggerChange:""},on:{change:e.handleDbTypeChange}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"驱动类"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbDriver",e.validatorRules.dbDriver],expression:"['dbDriver', validatorRules.dbDriver]"}],attrs:{placeholder:"请输入驱动类"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据源地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbUrl",e.validatorRules.dbUrl],expression:"['dbUrl', validatorRules.dbUrl]"}],attrs:{placeholder:"请输入数据源地址"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"数据库名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbName",e.validatorRules.dbName],expression:"['dbName', validatorRules.dbName]"}],attrs:{placeholder:"请输入数据库名称"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"用户名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbUsername",e.validatorRules.dbUsername],expression:"['dbUsername', validatorRules.dbUsername]"}],attrs:{placeholder:"请输入用户名"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"密码"}},[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:21}},[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["dbPassword",e.validatorRules.dbPassword],expression:"['dbPassword', validatorRules.dbPassword]"}],attrs:{placeholder:"请输入密码"}})],1),t("a-col",{attrs:{span:3}},[t("a-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"small"},on:{click:e.handleTest}},[e._v("测试")])],1)],1)],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark",{}],expression:"['remark', {}]"}],attrs:{placeholder:"请输入备注"}})],1)],1)],1)],1)},l=[],n=t("88bc"),o=t.n(n),s=t("0fea"),i=t("ca00"),c={name:"SysDataSourceModal",components:{},data:function(){var e=this;return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{code:{validateFirst:!0,rules:[{required:!0,message:"请输入数据源编码!"},{validator:function(a,t,r){var l=/^[a-z|A-Z][a-z|A-Z\d_-]{0,}$/;l.test(t)?Object(i["q"])("sys_data_source","code",t,e.model.id,r):r("编码必须以字母开头，可包含数字、下划线、横杠")}}]},name:{rules:[{required:!0,message:"请输入数据源名称!"}]},dbType:{rules:[{required:!0,message:"请选择数据库类型!"}]},dbDriver:{rules:[{required:!0,message:"请输入驱动类!"}]},dbUrl:{rules:[{required:!0,message:"请输入数据源地址!"}]},dbName:{rules:[{required:!0,message:"请输入数据库名称!"}]},dbUsername:{rules:[{required:!0,message:"请输入用户名!"}]},dbPassword:{rules:[{required:!0,message:"请输入密码!"}]}},url:{add:"/sys/dataSource/add",edit:"/sys/dataSource/edit"},dbDriverMap:{1:{dbDriver:"com.mysql.jdbc.Driver"},2:{dbDriver:"oracle.jdbc.OracleDriver"},3:{dbDriver:"com.microsoft.sqlserver.jdbc.SQLServerDriver"}},dbUrlMap:{1:{dbUrl:"jdbc:mysql://127.0.0.1:3306/jeecg-boot?characterEncoding=UTF-8&useUnicode=true&useSSL=false"},2:{dbUrl:"jdbc:oracle:thin:@127.0.0.1:1521:ORCL"},3:{dbUrl:"jdbc:sqlserver://127.0.0.1:1433;SelectMethod=cursor;DatabaseName=jeecgboot"}}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var a=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){a.form.setFieldsValue(o()(a.model,"code","name","remark","dbType","dbDriver","dbUrl","dbName","dbUsername","dbPassword"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this;this.form.validateFields((function(a,t){if(!a){e.confirmLoading=!0;var r=Object.assign(e.model,t),l=e.url.add,n="post";e.model.id&&(l=e.url.edit,n="put",r["code"]=void 0),Object(s["h"])(l,r,n).then((function(a){a.success?(e.$message.success(a.message),e.$emit("ok"),e.close()):e.$message.warning(a.message)})).finally((function(){e.confirmLoading=!1}))}}))},handleCancel:function(){this.close()},handleTest:function(){var e=this,a=["dbType","dbDriver","dbUrl","dbName","dbUsername","dbPassword"],t=this.form.getFieldsValue(a),r={};a.forEach((function(e){return r[e]={value:t[e],errors:null}})),this.form.setFields(r),this.$nextTick((function(){e.form.validateFields(a,(function(a,r){if(!a){var l=e.$message.loading("连接中……",0);Object(s["i"])("/online/cgreport/api/testConnection",t).then((function(a){if(!a.success)throw new Error(a.message);e.$message.success("连接成功")})).catch((function(a){e.$warning({title:"连接失败",content:a.message||a})})).finally((function(){return l()}))}}))}))},handleDbTypeChange:function(e){var a=this.dbDriverMap[e],t=this.dbUrlMap[e];a&&this.form.setFieldsValue(a),t&&this.form.setFieldsValue(t)}}},d=c,u=t("2877"),m=Object(u["a"])(d,r,l,!1,null,"7fce3db6",null);a["default"]=m.exports},fad2:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-card",{attrs:{bordered:!1}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.searchQuery(a)}}},[t("a-row",{attrs:{gutter:24}},[t("a-col",{attrs:{md:6,sm:8}},[t("a-form-item",{attrs:{label:"数据源名称"}},[t("a-input",{attrs:{placeholder:"请输入数据源名称"},model:{value:e.queryParam.name,callback:function(a){e.$set(e.queryParam,"name",a)},expression:"queryParam.name"}})],1)],1),t("a-col",{attrs:{md:6,sm:8}},[t("a-form-item",{attrs:{label:"数据库类型"}},[t("j-dict-select-tag",{attrs:{placeholder:"请选择数据库类型","dict-code":"database_type"},model:{value:e.queryParam.dbType,callback:function(a){e.$set(e.queryParam,"dbType",a)},expression:"queryParam.dbType"}})],1)],1),t("a-col",{attrs:{md:6,sm:8}},[t("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[t("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),t("div",{staticClass:"table-operator"},[t("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),t("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(a){return e.handleExportXls("多数据源管理")}}},[e._v("导出")]),t("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[t("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?t("a-dropdown",[t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",{key:"1",on:{click:e.batchDel}},[t("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),t("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),t("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),t("div",[t("a-alert",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"info",showIcon:""}},[t("template",{slot:"message"},[t("span",[e._v("已选择")]),t("a",{staticStyle:{"font-weight":"600",padding:"0 4px"}},[e._v(e._s(e.selectedRowKeys.length))]),t("span",[e._v("项")]),t("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])])],2),t("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(a,r){return t("span",{},[t("a",{on:{click:function(a){return e.handleEdit(r)}}},[e._v("编辑")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-dropdown",[t("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),t("a-icon",{attrs:{type:"down"}})],1),t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",[t("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[t("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),t("sys-data-source-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},l=[],n=t("d579"),o=t("b65a"),s=t("d57c"),i={name:"SysDataSourceList",mixins:[o["a"]],components:{JEllipsis:n["default"],SysDataSourceModal:s["default"]},data:function(){var e=this.$createElement,a=function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return e("j-ellipsis",{attrs:{value:a,length:t}})};return{description:"多数据源管理管理页面",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,a,t){return t+1}},{title:"数据源编码",align:"center",dataIndex:"code"},{title:"数据源名称",align:"center",dataIndex:"name"},{title:"数据库类型",align:"center",dataIndex:"dbType_dictText"},{title:"驱动类",align:"center",dataIndex:"dbDriver",customRender:function(e){return a(e)}},{title:"数据源地址",align:"center",dataIndex:"dbUrl",customRender:function(e){return a(e)}},{title:"数据库名称",align:"center",dataIndex:"dbName"},{title:"用户名",align:"center",dataIndex:"dbUsername"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/sys/dataSource/list",delete:"/sys/dataSource/delete",deleteBatch:"/sys/dataSource/deleteBatch",exportXlsUrl:"sys/dataSource/exportXls",importExcelUrl:"sys/dataSource/importExcel"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{}},c=i,d=(t("3351"),t("2877")),u=Object(d["a"])(c,r,l,!1,null,"617787a4",null);a["default"]=u.exports}}]);