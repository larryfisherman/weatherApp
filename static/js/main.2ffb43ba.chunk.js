(this.webpackJsonpweatherapp2=this.webpackJsonpweatherapp2||[]).push([[0],[,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),n=t(4),r=t.n(n),i=(t(9),t(2)),d=(t(10),t(11),t(0)),j="5460cb53463514612fab001d3067fc4e",u="https://api.openweathermap.org/data/2.5/",l=function(e){var s=e.shareApi,t=e.shareToggleClass,a=Object(c.useState)(!1),n=Object(i.a)(a,2),r=n[0],l=n[1],h=Object(c.useState)(""),o=Object(i.a)(h,2),b=o[0],p=o[1],O=Object(c.useState)({}),m=Object(i.a)(O,2),x=(m[0],m[1]);return Object(d.jsx)("input",{type:"text",placeholder:"Search..",className:r?"Active":"unActive",onChange:function(e){return p(e.target.value)},value:b,onKeyPress:function(e){"Enter"===e.key&&(l(!0),fetch("".concat(u,"weather?q=").concat(b,"&units=metric&APPID=").concat(j)).then((function(e){return e.json()})).then((function(e){x(e);var c=e.main.temp_min,a=e.main.temp_max,n=e.name,i=new Date(1e3*e.sys.sunrise).toISOString().substr(11,8),d=new Date(1e3*e.sys.sunset).toISOString().substr(11,8),j=e.sys.country,u=e.wind.speed,l=e.main.pressure;s({tempMax:a,location:n,tempMin:c,sunrise:i,sunset:d,wind:u,country:j,pressure:l}),t({toggleClass:r})})))}})},h=(t(13),function(e){var s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),c=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],a=e.getFullYear();return"".concat(s," ").concat(t," ").concat(c," ").concat(a)}),o=function(e){var s=e.result;return Object(d.jsxs)("div",{className:"locationTemp",children:[Object(d.jsx)("span",{children:s.location}),Object(d.jsx)("span",{children:h(new Date)})]})},b=(t(14),function(){return Object(d.jsxs)("div",{className:"weekDays",children:[Object(d.jsx)("div",{className:"monday",children:" Monday "}),Object(d.jsx)("div",{className:"tuesday",children:"Tuesday"}),Object(d.jsx)("div",{className:"wednesday",children:"Wednesday"}),Object(d.jsx)("div",{className:"thursday",children:"Thursday"}),Object(d.jsx)("div",{className:"friday",children:"Friday"}),Object(d.jsx)("div",{className:"saturday",children:"Saturday"}),Object(d.jsx)("div",{className:"sunday",children:"Sunday"})]})}),p=(t(15),function(e){var s=e.result,t=(e.shareToggleClass,Object(c.useState)(!1)),a=Object(i.a)(t,2);a[0],a[1];return Object(d.jsxs)("div",{className:"additionalInfo",children:[Object(d.jsxs)("div",{className:"maxTemp",children:[Object(d.jsxs)("p",{children:[Math.floor(s.tempMax),"\xb0C"]}),Object(d.jsx)("p",{children:"Temp. max."})]}),Object(d.jsxs)("div",{className:"wind",children:[Object(d.jsxs)("p",{children:[s.wind," mph"]}),Object(d.jsx)("p",{children:"Wind"})]}),Object(d.jsxs)("div",{className:"sunrise",children:[Object(d.jsx)("p",{children:s.sunrise}),Object(d.jsx)("p",{children:"Sunrise"})]}),Object(d.jsxs)("div",{className:"lowestTemp",children:[Object(d.jsxs)("p",{children:[Math.floor(s.tempMin),"\xb0C"]}),Object(d.jsx)("p",{children:"Temp. min."})]}),Object(d.jsxs)("div",{className:"pressure",children:[Object(d.jsxs)("p",{children:[s.pressure," hPa"]}),Object(d.jsx)("p",{children:"Pressure"})]}),Object(d.jsxs)("div",{className:"sunset",children:[Object(d.jsx)("p",{children:s.sunset}),Object(d.jsx)("p",{children:"Sunset"})]})]})}),O=function(){var e=Object(c.useState)({}),s=Object(i.a)(e,2),t=s[0],a=s[1],n=Object(c.useState)(!1),r=Object(i.a)(n,2),j=r[0],u=r[1],h=function(e){u(e)};return Object(d.jsxs)("div",{className:j?"activeApp":"unActiveApp",children:[Object(d.jsxs)("div",{className:j?"activeHeader":"unActiveHeader",children:[Object(d.jsx)("h1",{className:j?"active":"unActive",children:" Weather App "}),Object(d.jsx)(l,{shareApi:function(e){a(e)},shareToggleClass:h})]}),Object(d.jsxs)("div",{className:j?"activeMain":"unActiveMain",children:[Object(d.jsx)(o,{result:t}),Object(d.jsx)(p,{result:t,shareToggleClass:h}),Object(d.jsx)(b,{result:t})]})]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.2ffb43ba.chunk.js.map