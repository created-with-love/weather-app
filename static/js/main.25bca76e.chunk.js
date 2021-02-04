(this["webpackJsonpreact-typescript-template"]=this["webpackJsonpreact-typescript-template"]||[]).push([[0],{26:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(5),r=a.n(n),i=a(2),l=(a(26),a(15)),d=a(10),j=a.n(d),o=a(12),h="GET_WEATHER",m="SET_LOADING",b="SET_ERROR",u="SET_ALERT",p=function(e){return{type:u,payload:e}},x=a(0),O=function(e){var t=e.title,a=Object(c.useState)(""),s=Object(l.a)(a,2),n=s[0],r=s[1],d=Object(i.b)();return Object(x.jsx)("div",{className:"hero is-light has-text-centered",children:Object(x.jsx)("div",{className:"hero-body",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{className:"title",children:t}),Object(x.jsxs)("form",{className:"py-5",onSubmit:function(e){if(e.preventDefault(),""===n.trim())return d(p("City is required!"));d({type:m}),d(function(e){return function(){var t=Object(o.a)(j.a.mark((function t(a){var c,s,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("bea584add64b7aea06bbfc2e6846a522;"));case 3:if((c=t.sent).ok){t.next=9;break}return t.next=7,c.json();case 7:throw s=t.sent,new Error(s.message);case 9:return t.next=11,c.json();case 11:n=t.sent,a({type:h,payload:n}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),a({type:b,payload:t.t0.message});case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()}(n)),r("")},children:[Object(x.jsx)("input",{type:"text",className:"input has-text-centered mb2",placeholder:"Enter city name",value:n,onChange:function(e){r(e.target.value)},style:{maxWidth:300}}),Object(x.jsx)("button",{className:"button is-primary is-fullwidth",style:{maxWidth:300,margin:"0 auto"},children:"Search"})]})]})})})},v=function(e){var t=e.message,a=e.onClose;return Object(x.jsxs)("div",{className:"modal is-active has-text-centered",children:[Object(x.jsx)("div",{className:"modal-background",onClick:a}),Object(x.jsxs)("div",{className:"modal-card",children:[Object(x.jsx)("header",{className:"modal-card-head has-background-danger",children:Object(x.jsx)("p",{className:"modal-card-title has-text-white",children:t})}),Object(x.jsx)("footer",{className:"modal-card-foot",style:{justifyContent:"center"},children:Object(x.jsx)("button",{className:"button",onClick:a,children:"Close"})})]})]})},g=function(e){var t=e.data,a=(1.8*t.main.temp-459.67).toFixed(1),c=(t.main.temp-273.15).toFixed(1);return Object(x.jsx)("section",{className:"section",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("h1",{className:"title has-text-centered",style:{marginBottom:50},children:[t.name," - ",t.sys.country]}),Object(x.jsxs)("div",{className:"level",style:{alignItems:"flex-start"},children:[Object(x.jsx)("div",{className:"level-item has-text-centered",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"heading",children:t.weather[0].description}),Object(x.jsx)("p",{className:"title",children:Object(x.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,".png"),alt:""})})]})}),Object(x.jsx)("div",{className:"level-item has-text-centered",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"heading",children:"temp"}),Object(x.jsxs)("div",{className:"title",children:[Object(x.jsxs)("p",{className:"mb-2",children:[t.main.temp,"K"]}),Object(x.jsxs)("p",{className:"mb-2",children:[a,Object(x.jsx)("sup",{children:"\u2109"})]}),Object(x.jsxs)("p",{children:[c,Object(x.jsx)("sup",{children:"\u2103"})]})]})]})}),Object(x.jsx)("div",{className:"level-item has-text-centered",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"heading",children:"humidity"}),Object(x.jsx)("p",{className:"title",children:t.main.humidity})]})}),Object(x.jsx)("div",{className:"level-item has-text-centered",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"heading",children:"pressure"}),Object(x.jsx)("p",{className:"title",children:t.main.pressure})]})}),Object(x.jsx)("div",{className:"level-item has-text-centered",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"heading",children:"wind"}),Object(x.jsxs)("p",{className:"title",children:[t.wind.speed," m/s"]})]})})]})]})})},N=function(e){return e.weather.data},y=function(e){return e.weather.loading},f=function(e){return e.weather.error},w=function(e){return e.alert.message},E=function(){var e=Object(i.b)(),t=Object(i.c)(N),a=Object(i.c)(y),c=Object(i.c)(f),s=Object(i.c)(w);return Object(x.jsxs)("div",{className:"has-text-centered",children:[Object(x.jsx)(O,{title:"Enter city name and press search button"}),a?Object(x.jsx)("h2",{className:"is-size-3 py2",children:"Loading..."}):t&&Object(x.jsx)(g,{data:t}),s&&Object(x.jsx)(v,{message:s,onClose:function(){return e(p(s))}}),c&&Object(x.jsx)(v,{message:c,onClose:function(){return e({type:b,payload:""})}})]})},k=a(3),C=a(13),S=a(14),T=a(4),R={data:null,loading:!1,error:""},W={message:""},_=Object(k.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{data:t.payload,loading:!1,error:""};case m:return Object(T.a)(Object(T.a)({},e),{},{loading:!0});case b:return Object(T.a)(Object(T.a)({},e),{},{error:t.payload,loading:!1});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{message:t.payload};default:return e}}}),A=Object(k.createStore)(_,Object(C.composeWithDevTools)(Object(k.applyMiddleware)(S.a)));a(29);r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(i.a,{store:A,children:Object(x.jsx)(E,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.25bca76e.chunk.js.map