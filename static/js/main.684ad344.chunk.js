(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(21)},21:function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"inc",function(){return d}),t.d(a,"dec",function(){return f}),t.d(a,"rnd",function(){return m});var r=t(0),c=t.n(r),u=t(10),l=t.n(u),o=t(4),i=t(3),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INC":return e+1;case"DEC":return e-1;case"RND":return e+n.payload;default:return e}},d=function(){return{type:"INC"}},f=function(){return{type:"DEC"}},m=function(){return{type:"RND",payload:Math.floor(10*Math.random())}},b=Object(o.b)(function(e){return{cnt:e}},a)(function(e){var n=e.cnt,t=e.dec,a=e.inc,r=e.rnd;return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{id:"cnt"},n),c.a.createElement("div",null,c.a.createElement("button",{id:"dec",className:"btn btn-danger btn-lg fa fa-minus",onClick:t}),c.a.createElement("button",{id:"inc",className:"btn btn-success btn-lg fa fa-plus",onClick:a}),c.a.createElement("button",{id:"rnd",className:"btn btn-outline-info btn-lg",onClick:r},c.a.createElement("i",{className:"fa fa-plus"}),c.a.createElement("i",{className:"fa fa-question"}))))}),p=function(){return c.a.createElement(b,null)},E=Object(i.b)(s);l.a.render(c.a.createElement(o.a,{store:E},c.a.createElement(p,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.684ad344.chunk.js.map