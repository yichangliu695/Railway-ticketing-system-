webpackJsonp([18],{224:function(e,r,s){s(279);var t=s(92)(s(251),s(300),"data-v-1362f4d0",null);e.exports=t.exports},251:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=s(57),a=s.n(t),o=s(56),n=s.n(o),i=s(93);s(94),s(96);r.default={data:function(){return{registerForm:{user_phone_number:"",user_password:"",user_password_2:"",user_real_name:"",user_email:"",user_id_number:"",user_type:"",user_gender:"",user_address:""},rules:{user_phone_number:[{required:!1,message:"请输入用户名",trigger:"blur"}],user_password:[{required:!1,message:"请输入密码",trigger:"blur"}],user_password_2:[{required:!1,message:"请再次输入密码",trigger:"blur"}],user_real_name:[{required:!1,message:"请输入真实姓名",trigger:"blur"}],user_email:[{required:!1,message:"请输入邮箱",trigger:"blur"}],user_id_number:[{required:!1,message:"请输入身份证号",trigger:"blur"}],user_type:[{required:!1,message:"请输入用户类型（成人/学生）",trigger:"blur"}],user_gender:[{required:!1,message:"请输入性别",trigger:"blur"}],user_address:[{required:!1,message:"请输入地址",trigger:"blur"}]},showLogin:!0}},computed:{},methods:{submitForm:function(e){var r=this;return n()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r.$refs[e].validate(function(){var e=n()(a.a.mark(function e(t){var o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,s.i(i.F)({user_phone_number:r.registerForm.user_phone_number,user_password:r.registerForm.user_password,user_password_2:r.registerForm.user_password_2,user_real_name:r.registerForm.user_real_name,user_email:r.registerForm.user_email,user_id_number:r.registerForm.user_id_number,user_type:r.registerForm.user_type,user_gender:r.registerForm.user_gender,user_address:r.registerForm.user_address});case 3:o=e.sent,1==o.status?(r.$message({type:"success",message:"注册成功"}),r.$router.push("/")):403==o.status?r.$message({type:"success",message:o.success}):404==o.status?r.$message({type:"success",message:o.success}):405==o.status&&r.$message({type:"success",message:o.success}),e.next=9;break;case 7:return r.$notify.error({title:"错误",message:"请输入正确的用户名密码",offset:100}),e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,r)}));return function(r){return e.apply(this,arguments)}}());case 1:case"end":return t.stop()}},t,r)}))()}},watch:{}}},258:function(e,r,s){r=e.exports=s(203)(!1),r.push([e.i,".allcover[data-v-1362f4d0]{position:absolute;top:0;right:0}.ctt[data-v-1362f4d0]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.tb[data-v-1362f4d0]{position:absolute;top:50%;transform:translateY(-50%)}.lr[data-v-1362f4d0]{position:absolute;left:50%;transform:translateX(-50%)}.login_page[data-v-1362f4d0]{background-color:#243654}.manage_tip[data-v-1362f4d0]{position:absolute;width:100%;top:-100px;left:0}.manage_tip p[data-v-1362f4d0]{font-size:34px;color:#fff}.form_contianer[data-v-1362f4d0]{width:320px;height:auto;position:absolute;top:50%;left:50%;margin-top:-162px;margin-left:-160px;padding:25px;border-radius:5px;text-align:center;background-color:#fff}.form_contianer .submit_btn[data-v-1362f4d0]{width:100%;font-size:16px}.tip[data-v-1362f4d0]{font-size:12px;color:red}.form-fade-enter-active[data-v-1362f4d0],.form-fade-leave-active[data-v-1362f4d0]{transition:all 1s}.form-fade-enter[data-v-1362f4d0],.form-fade-leave-active[data-v-1362f4d0]{transform:translate3d(0,-50px,0);opacity:0}.el-row[data-v-1362f4d0]:last-child{margin-bottom:0}.el-col[data-v-1362f4d0]{border-radius:4px}",""])},279:function(e,r,s){var t=s(258);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s(204)("978eb832",t,!0)},300:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"login_page fillcontain"},[s("meta",{attrs:{"http-equiv":"Cache-Control",content:"no-cache,no-store,must-revlidate"}}),e._v(" "),s("meta",{attrs:{"http-equiv":"Expires",content:"O"}}),e._v(" "),s("meta",{attrs:{"http-equiv":"Pragma",content:"no-cache"}}),e._v(" "),s("transition",{attrs:{name:"form-fade",mode:"in-out"}},[s("section",{directives:[{name:"show",rawName:"v-show",value:e.showLogin,expression:"showLogin"}],staticClass:"form_contianer",staticStyle:{"background-color":"#243654"}},[s("div",{staticClass:"manage_tip"},[s("p",[e._v("注册界面")])]),e._v(" "),s("el-form",{ref:"registerForm",staticStyle:{"background-color":"#243654"},attrs:{model:e.registerForm,rules:e.rules}},[s("el-form-item",{attrs:{prop:"user_phone_number"}},[s("el-input",{attrs:{placeholder:"用户名"},model:{value:e.registerForm.user_phone_number,callback:function(r){e.$set(e.registerForm,"user_phone_number",r)},expression:"registerForm.user_phone_number"}},[s("span",[e._v("dsfsf")])])],1),e._v(" "),s("el-form-item",{attrs:{prop:"user_password"}},[s("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.registerForm.user_password,callback:function(r){e.$set(e.registerForm,"user_password",r)},expression:"registerForm.user_password"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"user_password_2"}},[s("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:e.registerForm.user_password_2,callback:function(r){e.$set(e.registerForm,"user_password_2",r)},expression:"registerForm.user_password_2"}})],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"user_real_name"}},[s("el-input",{attrs:{placeholder:"真实姓名"},model:{value:e.registerForm.user_real_name,callback:function(r){e.$set(e.registerForm,"user_real_name",r)},expression:"registerForm.user_real_name"}},[s("span",[e._v("dsfsf")])])],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"user_email"}},[s("el-input",{attrs:{placeholder:"邮箱"},model:{value:e.registerForm.user_email,callback:function(r){e.$set(e.registerForm,"user_email",r)},expression:"registerForm.user_email"}},[s("span",[e._v("dsfsf")])])],1)],1)],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"user_id_number"}},[s("el-input",{attrs:{placeholder:"身份证号"},model:{value:e.registerForm.user_id_number,callback:function(r){e.$set(e.registerForm,"user_id_number",r)},expression:"registerForm.user_id_number"}},[s("span",[e._v("dsfsf")])])],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"user_type"}},[s("el-input",{attrs:{placeholder:"用户类型(成人/学生)"},model:{value:e.registerForm.user_type,callback:function(r){e.$set(e.registerForm,"user_type",r)},expression:"registerForm.user_type"}},[s("span",[e._v("dsfsf")])])],1)],1)],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"user_gender"}},[s("el-input",{attrs:{placeholder:"性别"},model:{value:e.registerForm.user_gender,callback:function(r){e.$set(e.registerForm,"user_gender",r)},expression:"registerForm.user_gender"}},[s("span",[e._v("dsfsf")])])],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"user_address"}},[s("el-input",{attrs:{placeholder:"地址"},model:{value:e.registerForm.user_address,callback:function(r){e.$set(e.registerForm,"user_address",r)},expression:"registerForm.user_address"}},[s("span",[e._v("dsfsf")])])],1)],1)],1),e._v(" "),s("el-form-item",[s("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(r){return e.submitForm("registerForm")}}},[e._v("注册")])],1)],1)],1)])],1)},staticRenderFns:[]}}});