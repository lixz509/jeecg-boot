(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9bb1"],{"8f7d":function(t,e,a){"use strict";a.r(e);var l,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("j-vxe-table",{staticStyle:{"margin-bottom":"8px"},attrs:{toolbar:"","row-number":"","row-selection":"","click-select-row":"","highlight-current-row":"","radio-config":{highlight:!1},"checkbox-config":{highlight:!1},height:340,loading:t.table1.loading,columns:t.table1.columns,dataSource:t.table1.dataSource,pagination:t.table1.pagination},on:{pageChange:t.handleTable1PageChange,selectRowChange:t.handleTable1SelectRowChange}}),a("j-vxe-table",{attrs:{toolbar:"","row-number":"","row-selection":"","click-select-row":"",height:350,loading:t.table2.loading,columns:t.table2.columns,dataSource:t.table2.dataSource,pagination:t.table2.pagination},on:{pageChange:t.handleTable2PageChange}})],1),a("a-col",{attrs:{span:12}},[a("j-vxe-table",{staticStyle:{margin:"40px 0 8px"},attrs:{"row-number":"","row-selection":"","click-select-row":"","highlight-current-row":"","radio-config":{highlight:!1},"checkbox-config":{highlight:!1},height:340,columns:t.table1.columns,dataSource:t.table1.selectedRows},on:{selectRowChange:t.handleTable3SelectRowChange}}),a("j-vxe-table",{staticStyle:{margin:"48px 0 0"},attrs:{toolbar:"","row-number":"","row-selection":"","click-select-row":"",height:350,loading:t.table4.loading,columns:t.table4.columns,dataSource:t.table4.dataSource,pagination:t.table4.pagination}})],1)],1)],1)},n=[],o=a("0fea"),s=a("2475");function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c={name:"Template4",data:function(){return{table1:{loading:!1,pagination:{current:1,pageSize:200,pageSizeOptions:["10","20","30","100","200"],total:0},lastRow:null,selectedRows:[],dataSource:[],columns:[{key:"num",title:"序号",width:"80px"},{key:"ship_name",title:"船名",width:"180px",type:s["b"].input},{key:"call",title:"呼叫",width:"80px",type:s["b"].input},{key:"len",title:"长",width:"80px",type:s["b"].input},{key:"ton",title:"吨",width:"120px",type:s["b"].input},{key:"payer",title:"付款方",width:"120px",type:s["b"].input},{key:"count",title:"数",width:"40px"},{key:"company",title:"公司",minWidth:"180px",type:s["b"].input},{key:"trend",title:"动向",width:"120px",type:s["b"].input}]},table2:{loading:!1,pagination:{current:1,pageSize:200,pageSizeOptions:["100","200"],total:0},selectedRows:[],dataSource:[],columns:[{key:"dd_num",title:"调度序号",width:"120px"},{key:"tug",title:"拖轮",width:"180px",type:s["b"].input},{key:"work_start_time",title:"作业开始时间",width:"180px",type:s["b"].input},{key:"work_stop_time",title:"作业结束时间",width:"180px",type:s["b"].input},{key:"type",title:"船舶分类",width:"120px",type:s["b"].input},{key:"port_area",title:"所属港区",width:"120px",type:s["b"].input}]},table3:{lastRow:null,selectedRows:[]},table4:{loading:!1,pagination:{current:1,pageSize:200,pageSizeOptions:["100","200"],total:0},selectedRows:[],dataSource:[],columns:[{key:"dd_num",title:"调度序号",width:"120px"},{key:"tug",title:"拖轮",width:"180px",type:s["b"].input},{key:"work_start_time",title:"作业开始时间",width:"180px",type:s["b"].input},{key:"work_stop_time",title:"作业结束时间",width:"180px",type:s["b"].input},{key:"type",title:"船舶分类",width:"120px",type:s["b"].input},{key:"port_area",title:"所属港区",width:"120px",type:s["b"].input}]},url:{getData:"/mock/vxe/getData"}}},watch:(l={},r(l,"table1.lastRow",(function(){this.loadTable2Data()})),r(l,"table3.lastRow",(function(){this.loadTable4Data()})),l),created:function(){this.loadTable1Data()},methods:{loadTable1Data:function(){var t=this,e={pageNo:this.table1.pagination.current,pageSize:this.table1.pagination.pageSize};this.table1.loading=!0,Object(o["c"])(this.url.getData,e).then((function(e){e.success?(t.table1.pagination.total=e.result.total,t.table1.dataSource=e.result.records,t.table1.selectedRows=[]):t.$error({title:"主表查询失败",content:e.message})})).finally((function(){t.table1.loading=!1}))},handleTable1PageChange:function(t){this.table1.pagination.current=t.current,this.table1.pagination.pageSize=t.pageSize,this.loadTable1Data()},handleTable1SelectRowChange:function(t){this.handleTableSelectRowChange(this.table1,t)},loadTable2Data:function(){var t=this,e=this.table1.selectedRows;if(!e||0===e.length)return this.table2.pagination.total=0,this.table2.dataSource=[],void(this.table2.selectedRows=[]);null==this.table1.lastRow&&(this.table1.lastRow=e[e.length-1]);var a={parentId:this.table1.lastRow.id,pageNo:this.table2.pagination.current,pageSize:this.table2.pagination.pageSize};this.table2.loading=!0,Object(o["c"])(this.url.getData,a).then((function(e){e.success?(t.table2.pagination.total=e.result.total,t.table2.dataSource=e.result.records,t.table2.selectedRows=[]):t.$error({title:"子表查询失败",content:e.message})})).finally((function(){t.table2.loading=!1}))},handleTable2PageChange:function(t){this.table2.pagination.current=t.current,this.table2.pagination.pageSize=t.pageSize,this.loadTable2Data()},handleTable3SelectRowChange:function(t){this.handleTableSelectRowChange(this.table3,t)},loadTable4Data:function(){var t=this,e=this.table3.selectedRows;if(!e||0===e.length)return this.table4.pagination.total=0,this.table4.dataSource=[],void(this.table4.selectedRows=[]);null==this.table3.lastRow&&(this.table3.lastRow=e[e.length-1]);var a={parentId:this.table3.lastRow.id,pageNo:this.table4.pagination.current,pageSize:this.table4.pagination.pageSize};this.table4.loading=!0,Object(o["c"])(this.url.getData,a).then((function(e){e.success?(t.table4.pagination.total=e.result.total,t.table4.dataSource=e.result.records,t.table4.selectedRows=[]):t.$error({title:"子表查询失败",content:e.message})})).finally((function(){t.table4.loading=!1}))},handleTable4PageChange:function(t){this.table4.pagination.current=t.current,this.table4.pagination.pageSize=t.pageSize,this.loadTable4Data()},handleTableSelectRowChange:function(t,e){var a=e.row,l=e.action,i=e.selectedRows,n=e.$table,o=i[i.length-1];"selected"===l?t.lastRow=a:"selected-all"===l?0===i.length?t.lastRow=null:t.lastRow||(t.lastRow=o):"unselected"===l&&a===t.lastRow&&(t.lastRow=o),n.setCurrentRow(t.lastRow),t.selectedRows=i}}},h=c,p=a("2877"),b=Object(p["a"])(h,i,n,!1,null,"a2d232f2",null);e["default"]=b.exports}}]);