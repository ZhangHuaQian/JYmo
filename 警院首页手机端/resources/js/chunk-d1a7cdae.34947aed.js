(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1a7cdae"],{3949:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-container"},[a("el-row",{staticClass:"list"},[a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{staticClass:"list-title",attrs:{label:"党政群团机构",name:"first"}},[a("el-row",t._l(t.list,(function(e,i){return i<17?a("el-col",{key:i,staticStyle:{height:"10vw",background:"#E0EAF5","margin-bottom":"2vw"},attrs:{span:7,offset:1}},[a("div",{staticStyle:{"font-size":"0.75rem",color:"#347ADA","line-height":"10vw",margin:"0 auto","text-align":"center"},on:{click:function(a){return t.toNewpage(e.id)}}},[t._v(t._s(e.name))])]):t._e()})),1)],1)],1),a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{staticClass:"list-title",attrs:{label:"教学机构",name:"first"}},[a("el-row",t._l(t.list,(function(e,i){return i<32&&i>16?a("el-col",{key:i,staticStyle:{height:"10vw",background:"#E0EAF5","margin-bottom":"2vw"},attrs:{span:7,offset:1}},[a("div",{staticStyle:{"font-size":"0.75rem",color:"#347ADA","line-height":"10vw",margin:"0 auto","text-align":"center"},on:{click:function(a){return t.toNewpages(e.id)}}},[t._v(t._s(e.name))])]):t._e()})),1)],1)],1),a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{staticClass:"list-title",attrs:{label:"教辅机构",name:"first"}},[a("el-row",t._l(t.list,(function(e,i){return i<37&&i>31?a("el-col",{key:i,staticStyle:{height:"10vw",background:"#E0EAF5","margin-bottom":"2vw"},attrs:{span:7,offset:1}},[a("div",{staticStyle:{"font-size":"0.75rem",color:"#347ADA","line-height":"10vw",margin:"0 auto","text-align":"center"},on:{click:function(a){return t.toNewpage(e.id)}}},[t._v(t._s(e.name))])]):t._e()})),1)],1)],1),a("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{staticClass:"list-title",attrs:{label:"科研机构",name:"first"}},[a("el-row",t._l(t.list,(function(e,i){return i>36?a("el-col",{key:i,staticStyle:{height:"10vw",background:"#E0EAF5","margin-bottom":"2vw"},attrs:{span:7,offset:1}},[a("div",{staticStyle:{"font-size":"0.75rem",color:"#347ADA","line-height":"10vw",margin:"0 auto","text-align":"center"},on:{click:function(a){return t.toNewpages(e.id)}}},[t._v(t._s(e.name))])]):t._e()})),1)],1)],1)],1)],1)},n=[],s=a("22bb"),l={data:function(){return{list:[],activeName:"first"}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.axios.post(s["a"]+"/unauth/site/selectAll").then((function(e){t.list=e.data.data}))},toNewpage:function(t){this.$router.push({path:"/departmentHome",query:{id:t}})},toNewpages:function(t){this.$router.push({path:"/rAcademy",query:{id:t}})}}},c=l,o=(a("4e3d"),a("2877")),r=Object(o["a"])(c,i,n,!1,null,"031685d1",null);e["default"]=r.exports},"4c64":function(t,e,a){},"4e3d":function(t,e,a){"use strict";var i=a("4c64"),n=a.n(i);n.a}}]);