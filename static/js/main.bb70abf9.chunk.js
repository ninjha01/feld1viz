(this.webpackJsonpviz=this.webpackJsonpviz||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(6),s=n.n(i),u=(n(12),n(13),n(4)),a=n.n(u),o=n(7),b=n(2),j=n(5),l=n(0),d=function(e){var t=Object(c.useState)("surface"),n=Object(b.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)("None"),u=Object(b.a)(s,2),d=u[0],f=u[1],O=Object(c.useState)("None"),h=Object(b.a)(O,2),p=h[0],x=h[1],v=Object(c.useRef)("structureId"),S=Object(c.useState)(null),g=Object(b.a)(S,2),k=g[0],w=g[1];Object(c.useEffect)((function(){var e=j.createViewer(v.current,{backgroundColor:"#282c34"});null!=e?w(e):alert("Failed to initialize viewer")}),[v]),Object(c.useEffect)((function(){(function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==k){e.next=6;break}return e.next=3,j.download("pdb:1pu0",k,{});case 3:k.setClickable({},!0,(function(e,t,n,c){f(e.resi),x(e.resn),t.zoomTo({resi:[e.resi-5,e.resi,e.resi+5]},1e3)})),k.setStyle({},{sphere:{radius:3}}),k.render();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[k]);return Object(c.useEffect)((function(){null!==k&&("surface"===r?(k.setStyle({},{sphere:{radius:3}}),k.render()):"ribbon"===r&&(k.setStyle({},{cartoon:{color:"spectrum",arrows:!0}}),k.render()))}),[k,r]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"STRUCTURE"}),Object(l.jsx)("p",{children:e.pdb}),Object(l.jsx)("div",{id:v.current,style:{width:500,height:400,position:"relative"}}),Object(l.jsxs)("p",{children:[" Clicked index: ",d]}),Object(l.jsxs)("p",{children:[" Clicked residue: ",p]}),Object(l.jsx)("input",{value:"toggle surface/ribbon",type:"button",onClick:function(){i("surface"===r?"ribbon":"surface")}})]})},f=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Sequence"})})},O=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("h1",{children:" Fel d 1 Viz"}),Object(l.jsx)(d,{pdb:"1PUO"}),Object(l.jsx)(f,{})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),h()}},[[21,1,2]]]);
//# sourceMappingURL=main.bb70abf9.chunk.js.map