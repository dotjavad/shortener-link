(window["webpackJsonpshortener-link"]=window["webpackJsonpshortener-link"]||[]).push([[0],{142:function(e,t,a){e.exports=a(308)},147:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(8),o=a.n(l),c=(a(147),a(104)),i=a(76),u=(a(148),a(99)),s=a.n(u),m=a(53),h=a(310),d=a(312),p=a(313),E=a(77),w=a(311);var f=function(){var e=Object(n.useState)("CleanURI"),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(null),u=Object(i.a)(o,2),f=u[0],k=u[1],v=Object(n.useState)([]),b=Object(i.a)(v,2),g=b[0],y=b[1],I=m.a.Option;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{background:"#ECECEC",padding:"100px"}},r.a.createElement(h.a,{title:"Shorten your link",bordered:!1,style:{width:"50%",margin:"0 auto"}},r.a.createElement(d.a,{onSubmit:function(e){e.preventDefault();var t={};t.url=f,"Relink"===a&&s.a.post("https://rel.ink/api/links/",t).then((function(e){y([].concat(Object(c.a)(g),[{title:f,desc:"https://rel.ink/".concat(e.data.hashid)}]))})).catch((function(){throw new Error})),"CleanURI"===a&&s.a.post("https://cleanuri.com/api/v1/shorten",t).then((function(e){y([].concat(Object(c.a)(g),[{title:f,desc:e.data.result_url}]))})).catch((function(){throw new Error}))},className:"shorten-form"},r.a.createElement(d.a.Item,null,r.a.createElement(m.a,{onChange:function(e){l(e)},defaultValue:"CleanURI",style:{width:"50%"}},r.a.createElement(I,{value:"CleanURI"},"CleanURI"),r.a.createElement(I,{value:"Relink"},"Relink")),r.a.createElement(p.a,{onChange:function(e){k(e.target.value)},size:"large",placeholder:"Enter your link here"})),r.a.createElement(d.a.Item,null,r.a.createElement(E.a,{type:"primary",size:"large",htmlType:"submit"},"Shorten"))),r.a.createElement(w.a,{itemLayout:"horizontal",dataSource:g,renderItem:function(e){return r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Item.Meta,{title:e.title,description:r.a.createElement("a",{href:e.desc},e.desc)}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[142,1,2]]]);
//# sourceMappingURL=main.c64a0527.chunk.js.map