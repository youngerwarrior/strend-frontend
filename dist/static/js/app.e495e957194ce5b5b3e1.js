webpackJsonp([1],{"1zmF":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={name:"SHead",data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[e("el-col",{attrs:{span:2}},[e("div",{staticClass:"grid-content bg-purple"},[e("router-link",{attrs:{to:"/stock"}},[this._v("股票")])],1)]),this._v(" "),e("el-col",{attrs:{span:2}},[e("div",{staticClass:"grid-content bg-purple"},[e("router-link",{attrs:{to:"/cbond"}},[this._v("债券")])],1)]),this._v(" "),e("el-col",{attrs:{span:2}},[e("div",{staticClass:"grid-content bg-purple"},[e("router-link",{attrs:{to:"/trader"}},[this._v("交易者")])],1)]),this._v(" "),e("el-col",{attrs:{span:2}},[e("div",{staticClass:"grid-content bg-purple"},[e("router-link",{attrs:{to:"/forum"}},[this._v("讨论区")])],1)])],1)},staticRenderFns:[]};var o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    footer\n")])},staticRenderFns:[]},s={name:"App",components:{"s-head":n("VU/8")(i,r,!1,function(t){n("mEFr")},null,null).exports,"s-foot":n("VU/8")(null,o,!1,null,null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-container",[e("el-header",[e("s-head")],1),this._v(" "),e("el-main",[e("router-view")],1),this._v(" "),e("el-footer",[e("s-foot")],1)],1)],1)},staticRenderFns:[]};var c=n("VU/8")(s,l,!1,function(t){n("NyjU")},null,null).exports,d=n("/ocq"),u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    cbond\n")])},staticRenderFns:[]},p=n("VU/8")(null,u,!1,null,null,null).exports,h={data:function(){return{indexData:{indexCode:[{ts_code:"399006.SZ",name:"创业板指"},{ts_code:"000001.SH",name:"上证综指"},{ts_code:"399001.SZ",name:"深证成指"}],dateStart:"20180101"},indexList:"",eOption:{title:{text:"阶段指数行情对比"},legend:{show:!0},tooltip:{},xAxis:{data:[]},yAxis:{min:0,max:2,interval:.05},series:[]}}},created:function(){var t=this;this.axios.get("/api/index/?fun_one=1").then(function(e){t.indexData.indexCode=e.data.results,console.log(e.data.results)}).catch(function(t){console.log(t)})},computed:{indexApi:function(){var t=this.indexData.dateStart;return this.indexData.indexCode.map(function(e){return"/api/kdata/index/"+e.ts_code+"/"+t})}},watch:{indexData:{handler:function(){this.getKdata()},deep:!0},eOption:{handler:function(){this.drawEchart()},deep:!0}},methods:{getKdata:function(){var t=this;console.log("getKdata");var e=function(e){t.axios.get(t.indexApi[e]).then(function(n){var a=t.indexData.indexCode[e].name,i=n.data.close,r=i[0];i=i.map(function(t){return t/r}),t.eOption.series.push({name:a,type:"line",data:i}),t.eOption.xAxis.data=n.data.date}).catch(function(t){return console.log(t)})};for(var n in this.indexApi)e(n)},drawEchart:function(){console.log("drawEchart"),n("XLwt").init(document.getElementById("echart")).setOption(this.eOption)}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"1000px",height:"700px"},attrs:{id:"echart"}}),t._v(" "),t._e(),t._v(" "),t._e()])},staticRenderFns:[]},v=n("VU/8")(h,f,!1,null,null,null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    forum\n")])},staticRenderFns:[]},m=n("VU/8")(null,_,!1,null,null,null).exports,x={created:function(){var t=this;this.axios.get("/api/repurchase").then(function(e){t.repurchase=e.data.results,t.next_page=e.data.next.replace("http://148.70.239.118:8088","")}).catch(function(t){console.log(t)})},data:function(){return{auto_load:!0,loading:!1,next_page:"",repurchase:[]}},computed:{noMore:function(){return!this.next_page}},methods:{load:function(){var t=this;this.loading=!0,this.axios.get(this.next_page).then(function(e){t.repurchase=t.repurchase.concat(e.data.results),t.next_page=e.data.next.replace("http://148.70.239.118:8088",""),console.log(2)}).catch(function(t){console.log(t)}),this.loading=!1}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"infinite-list-wrapper",staticStyle:{overflow:"auto"}},[n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"list",attrs:{"infinite-scroll-disabled":"auto_load"}},t._l(t.repurchase,function(e){return n("li",{staticClass:"list-item"},[t._v("\n      报告日期："+t._s(e.ann_date)+" | 公司名称："+t._s(e.ts_code)+" | 回购数量："+t._s(e.vol)+" | 回购总额："+t._s(e.amount)+"\n    ")])}),0),t._v(" "),t.loading?n("p",[t._v("加载中...")]):t._e(),t._v(" "),t.noMore?n("p",[t._v("没有更多了")]):t._e()])},staticRenderFns:[]};var w=n("VU/8")(x,g,!1,function(t){n("ubix")},null,null).exports;a.default.use(d.a);var b=new d.a({routes:[{path:"/cbond",name:"cbond",component:p},{path:"/stock",name:"stock",component:v},{path:"/forum",name:"forum",component:m},{path:"/trader",name:"trader",component:w}]}),E=n("zL8q"),C=n.n(E),F=(n("1zmF"),n("mtWM")),y=n.n(F),U=n("Rf8U"),k=n.n(U),A=n("XLwt"),S=n.n(A);a.default.config.productionTip=!1,a.default.use(C.a),a.default.use(k.a,y.a),a.default.prototype.$echarts=S.a,new a.default({el:"#app",router:b,components:{App:c},template:"<App/>"})},NyjU:function(t,e){},mEFr:function(t,e){},ubix:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e495e957194ce5b5b3e1.js.map