webpackJsonp([7],{KFdb:function(t,e){},KR8f:function(t,e,a){"use strict";function r(t,e){e||(e="-");var a=t.split(e),r=parseInt(a[0]),o=void 0;o=0==a[1].indexOf("0")?parseInt(a[1].substring(1)):parseInt(a[1]);var s=parseInt(a[2]);return new Date(r,o-1,s)}Object.defineProperty(e,"__esModule",{value:!0});var o={columns:["date","orderCount","orderAmount"],rows:[{date:"2018-11-01",orderCount:10,orderAmount:1093},{date:"2018-11-02",orderCount:20,orderAmount:2230},{date:"2018-11-03",orderCount:33,orderAmount:3623},{date:"2018-11-04",orderCount:50,orderAmount:6423},{date:"2018-11-05",orderCount:80,orderAmount:8492},{date:"2018-11-06",orderCount:60,orderAmount:6293},{date:"2018-11-07",orderCount:20,orderAmount:2293},{date:"2018-11-08",orderCount:60,orderAmount:6293},{date:"2018-11-09",orderCount:50,orderAmount:5293},{date:"2018-11-10",orderCount:30,orderAmount:3293},{date:"2018-11-11",orderCount:20,orderAmount:2293},{date:"2018-11-12",orderCount:80,orderAmount:8293},{date:"2018-11-13",orderCount:100,orderAmount:10293},{date:"2018-11-14",orderCount:10,orderAmount:1293},{date:"2018-11-15",orderCount:40,orderAmount:4293}]},s={name:"home",data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setFullYear(2018),a.setMonth(10),a.setDate(1),e.setTime(a.getTime()+6048e5),t.$emit("pick",[a,e])}},{text:"最近一月",onClick:function(t){var e=new Date,a=new Date;a.setFullYear(2018),a.setMonth(10),a.setDate(1),e.setTime(a.getTime()+2592e6),t.$emit("pick",[a,e])}}]},orderCountDate:"",chartSettings:{xAxisType:"time",area:!0,axisSite:{right:["orderAmount"]},labelMap:{orderCount:"订单数量",orderAmount:"订单金额"}},chartData:{columns:[],rows:[]},loading:!1,dataEmpty:!1}},created:function(){this.initOrderCountDate(),this.getData()},methods:{handleDateChange:function(){this.getData()},initOrderCountDate:function(){var t=new Date;t.setFullYear(2018),t.setMonth(10),t.setDate(1);var e=new Date;e.setTime(t.getTime()+6048e5),this.orderCountDate=[t,e]},getData:function(){var t=this;setTimeout(function(){t.chartData={columns:["date","orderCount","orderAmount"],rows:[]};for(var e=0;e<o.rows.length;e++){var a=o.rows[e],s=r(a.date),n=t.orderCountDate[0],i=t.orderCountDate[1];s.getTime()>=n.getTime()&&s.getTime()<=i.getTime()&&t.chartData.rows.push(a)}t.dataEmpty=!1,t.loading=!1},1e3)}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"out-border"},[a("div",{staticClass:"layout-title"},[t._v("藏品总览")]),t._v(" "),a("div",{staticStyle:{padding:"40px"}},[a("el-row",[a("el-col",{staticClass:"color-danger overview-item-value",attrs:{span:6}},[t._v("100")]),t._v(" "),a("el-col",{staticClass:"color-danger overview-item-value",attrs:{span:6}},[t._v("400")]),t._v(" "),a("el-col",{staticClass:"color-danger overview-item-value",attrs:{span:6}},[t._v("50")]),t._v(" "),a("el-col",{staticClass:"color-danger overview-item-value",attrs:{span:6}},[t._v("500")])],1),t._v(" "),a("el-row",{staticClass:"font-medium"},[a("el-col",{staticClass:"overview-item-title",attrs:{span:6}},[t._v("展出中")]),t._v(" "),a("el-col",{staticClass:"overview-item-title",attrs:{span:6}},[t._v("库存")]),t._v(" "),a("el-col",{staticClass:"overview-item-title",attrs:{span:6}},[t._v("维护中")]),t._v(" "),a("el-col",{staticClass:"overview-item-title",attrs:{span:6}},[t._v("全部藏品")])],1)],1)]),t._v(" "),a("div",{staticClass:"un-handle-layout"},[a("div",{staticClass:"layout-title"},[t._v("待处理事务")]),t._v(" "),a("div",{staticClass:"un-handle-content"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"un-handle-item"},[a("span",{staticClass:"font-medium"},[t._v("近期需要维护")]),t._v(" "),a("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[a("a",[a("strong",[a("u",[t._v("5")])])])])])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"un-handle-item"},[a("span",{staticClass:"font-medium"},[t._v("电池需要更换")]),t._v(" "),a("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[a("a",[a("strong",[a("u",[t._v("15")])])])])])])],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"un-handle-item"},[a("span",{staticClass:"font-medium"},[t._v("即将开始的展览")]),t._v(" "),a("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[a("a",[a("strong",[a("u",[t._v("10")])])])])])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"un-handle-item"},[a("span",{staticClass:"font-medium"},[t._v("即将结束的展览")]),t._v(" "),a("span",{staticClass:"color-danger",staticStyle:{float:"right"}},[a("a",[a("strong",[a("u",[t._v("20")])])])])])])],1)],1)])])},staticRenderFns:[]};var i=a("VU/8")(s,n,!1,function(t){a("KFdb")},"data-v-d4711bec",null);e.default=i.exports}});