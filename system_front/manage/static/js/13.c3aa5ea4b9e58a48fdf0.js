webpackJsonp([13],{209:function(t,e,a){a(295);var r=a(92)(a(236),a(316),null,null);t.exports=r.exports},227:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(57),n=a.n(r),s=a(56),o=a.n(s),l=a(58),i=a.n(l),c=a(93),p=(a(95),a(94));e.default={data:function(){return{url:"https://40964096.xyz/xiaojiejie.jpg"}},created:function(){this.adminInfo.id||this.getAdminData()},computed:i()({},a.i(p.b)(["adminInfo"])),methods:i()({},a.i(p.c)(["getAdminData"]),{handleCommand:function(t){var e=this;return o()(n.a.mark(function r(){var s;return n.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("home"!=t){r.next=4;break}e.$router.push("/manage"),r.next=9;break;case 4:if("signout"!=t){r.next=9;break}return r.next=7,a.i(c.k)();case 7:s=r.sent,1==s.status?(e.$message({type:"success",message:"退出成功"}),e.$router.push("/")):e.$message({type:"error",message:s.message});case 9:case"end":return r.stop()}},r,e)}))()}})}},228:function(t,e,a){e=t.exports=a(203)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#eff2f7;height:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},229:function(t,e,a){var r=a(228);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(204)("1a5dfe8b",r,!0)},230:function(t,e,a){a(229);var r=a(92)(a(227),a(231),null,null);t.exports=r.exports},231:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header_container"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/manage"}}},[t._v("首页")]),t._v(" "),t._l(t.$route.meta,function(e,r){return a("el-breadcrumb-item",{key:r},[t._v(t._s(e))])})],2),t._v(" "),a("el-dropdown",{attrs:{"menu-align":"start"},on:{command:t.handleCommand}},[a("img",{staticClass:"avator",attrs:{src:t.url}}),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"home"}},[t._v("首页")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"signout"}},[t._v("退出")])],1)],1)],1)},staticRenderFns:[]}},236:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(57),n=a.n(r),s=a(56),o=a.n(s),l=a(230),i=a.n(l),c=a(93),p=a(96);e.default={data:function(){return{tableData:[{order_id:"01",passenger_real_name:"02",train_number:"03",start_station_name:"04",end_station_name:"05",carriage_no:"06",seat_type:"07",seat_no:"08",start_date:"08",start_time:"09",order_status:"10",passenger_phone_number:"11",passenger_id_number:"12",order_money:"12"}],currentRow:null,offset:0,limit:10,count:0,currentPage:1,dialogTableVisible:!1,order_list:"",url2:"https://40964096.xyz/zhifubao.jpg",url1:"https://40964096.xyz/weixin.jpg"}},created:function(){this.initData()},components:{headTop:i.a},methods:{initData:function(){var t=this;return o()(n.a.mark(function e(){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.i(c.l)({token:a.i(p.a)("token")});case 3:r=e.sent,1==r.status?(t.tableData=[],t.tableData=r.getAllOrderListList,t.count=r.getAllOrderListList.length,t.getLists()):t.$message({type:"error",message:"获取订单信息失败"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("获取数据失败",e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.currentPage=t,this.offset=(t-1)*this.limit,this.getLists()},getLists:function(){var t=this;return o()(n.a.mark(function e(){var r,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.i(c.l)({token:a.i(p.a)("token")});case 3:if(r=e.sent,1!=r.status){e.next=10;break}for(console.log("getLists"),t.tableData=[],s=t.offset;s<t.offset+t.limit;s++)s<t.offset+r.getAllOrderListList.length&&(t.tableData.push(r.getAllOrderListList[s]),console.log(r.getAllOrderListList[s]));e.next=11;break;case 10:throw new Error("获取数据失败");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("获取数据失败",e.t0);case 16:case"end":return e.stop()}},e,t,[[0,13]])}))()},handlePay:function(t){this.dialogTableVisible=!0,this.order_list=t+","},handlepaysuccess:function(){var t=this;return o()(n.a.mark(function e(){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.order_list),e.next=3,a.i(c.j)({token:a.i(p.a)("token"),order_list:t.order_list});case 3:r=e.sent,1==r.status?t.$message({type:"success",message:"订单"+t.order_list+"支付成功"}):t.$message({type:"error",message:"订单"+t.order_list+"支付失败"});case 5:case"end":return e.stop()}},e,t)}))()}}}},274:function(t,e,a){e=t.exports=a(203)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.demo-table-expand{font-size:0}.demo-table-expand label{width:90px;color:#99a9bf}.demo-table-expand .el-form-item{margin-right:0;margin-bottom:0;width:50%}.table_container{padding:20px}.Pagination{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;margin-top:8px}.avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#20a0ff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:120px;height:120px;line-height:120px;text-align:center}.avatar{width:120px;height:120px;display:block}",""])},295:function(t,e,a){var r=a(274);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(204)("20423f6b",r,!0)},316:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fillcontain"},[a("meta",{attrs:{"http-equiv":"Cache-Control",content:"no-cache,no-store,must-revlidate"}}),t._v(" "),a("meta",{attrs:{"http-equiv":"Expires",content:"O"}}),t._v(" "),a("meta",{attrs:{"http-equiv":"Pragma",content:"no-cache"}}),t._v(" "),a("head-top"),t._v(" "),a("div",{staticClass:"table_container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"乘客姓名"}},[a("span",[t._v(t._s(e.row.passenger_real_name))])]),t._v(" "),a("el-form-item",{attrs:{label:"乘客电话"}},[a("span",[t._v(t._s(e.row.passenger_phone_number))])]),t._v(" "),a("el-form-item",{attrs:{label:"乘客身份证"}},[a("span",[t._v(t._s(e.row.passenger_id_number))])]),t._v(" "),a("el-form-item",{attrs:{label:"订单金额"}},[a("span",[t._v(t._s(e.row.order_money))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"订单号",prop:"order_id"}}),t._v(" "),a("el-table-column",{attrs:{label:"乘客姓名",prop:"passenger_real_name"}}),t._v(" "),a("el-table-column",{attrs:{label:"车次",prop:"train_number"}}),t._v(" "),a("el-table-column",{attrs:{label:"出发站",prop:"start_station_name"}}),t._v(" "),a("el-table-column",{attrs:{label:"到达站",prop:"end_station_name"}}),t._v(" "),a("el-table-column",{attrs:{label:"车厢号",prop:"carriage_no"}}),t._v(" "),a("el-table-column",{attrs:{label:"座位类型",prop:"seat_type"}}),t._v(" "),a("el-table-column",{attrs:{label:"座位号",prop:"seat_no"}}),t._v(" "),a("el-table-column",{attrs:{label:"开车日期",prop:"start_date"}}),t._v(" "),a("el-table-column",{attrs:{label:"开车时间",prop:"start_time"}}),t._v(" "),a("el-table-column",{attrs:{label:"订单状态",prop:"order_status"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return t.handlePay(e.row.order_id)}}},[t._v("支付")])]}}])})],1),t._v(" "),a("el-dialog",{staticStyle:{width:"1500px"},attrs:{title:"支付",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("div",{staticClass:"block"},[a("el-image",{staticStyle:{width:"300px",height:"500px"},attrs:{src:t.url2,fit:t.fit}})],1)])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("div",{staticClass:"block"},[a("el-image",{staticStyle:{width:"300px",height:"500px"},attrs:{src:t.url1,fit:t.fit}})],1)])])],1),t._v(" "),a("el-button",{staticStyle:{"margin-left":"300px"},attrs:{size:"mini",type:"success"},on:{click:function(e){return t.handlepaysuccess()}}},[t._v("支付成功")])],1),t._v(" "),a("div",{staticClass:"Pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":20,layout:"total, prev, pager, next",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]}}});