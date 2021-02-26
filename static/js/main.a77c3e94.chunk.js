(this.webpackJsonpviz=this.webpackJsonpviz||[]).push([[0],{12:function(e,n,i){},13:function(e,n,i){},21:function(e,n,i){"use strict";i.r(n);var r=i(1),s=i.n(r),c=i(6),a=i.n(c),t=(i(12),i(2)),h=(i(13),i(4)),A=i.n(h),l=i(7),u=i(5),d=i(0),o=function(e){var n=Object(r.useState)("surface"),i=Object(t.a)(n,2),s=i[0],c=i[1],a=Object(r.useState)(null),h=Object(t.a)(a,2),o=h[0],b=h[1],j=Object(r.useRef)("structureId"),f=Object(r.useState)(null),O=Object(t.a)(f,2),p=O[0],k=O[1];Object(r.useEffect)((function(){var e=u.createViewer(j.current,{backgroundColor:"#282c34"});null!=e?k(e):alert("Failed to initialize viewer")}),[j]),Object(r.useEffect)((function(){return b(e.clicked)}),[e.clicked]),Object(r.useEffect)((function(){null!==p&&null!=o&&(e.clickCallback(o),p.zoomTo({resi:o.resi,resn:o.resn,chain:o.chain},1e3))}),[o]),Object(r.useEffect)((function(){(function(){var e=Object(l.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==p){e.next=6;break}return e.next=3,u.download("pdb:1pu0",p,{});case 3:p.setClickable({},!0,(function(e,n,i,r){b(e)})),p.setStyle({},{sphere:{radius:3}}),p.render();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]);return Object(r.useEffect)((function(){null!==p&&("surface"===s?(p.setStyle({},{sphere:{radius:3}}),p.render()):"ribbon"===s&&(p.setStyle({},{cartoon:{color:"spectrum",arrows:!0}}),p.render()))}),[p,s]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"STRUCTURE"}),Object(d.jsxs)("p",{children:["PDB: ",e.pdb]}),Object(d.jsx)("div",{id:j.current,style:{width:500,height:400,position:"relative"}}),Object(d.jsxs)("p",{children:[" Clicked index: ",null===o||void 0===o?void 0:o.resi]}),Object(d.jsxs)("p",{children:[" Clicked residue: ",null===o||void 0===o?void 0:o.resn]}),Object(d.jsxs)("p",{children:[" Clicked chain: ",null===o||void 0===o?void 0:o.chain]}),Object(d.jsx)("input",{value:"toggle surface/ribbon",type:"button",onClick:function(){c("surface"===s?"ribbon":"surface")}})]})},b=function(e){var n=Object(r.useState)(null),i=Object(t.a)(n,2),s=i[0],c=i[1];Object(r.useEffect)((function(){null!==e.clicked&&(c(e.clicked),console.log("in structure, You clicked residue ",e.clicked.resn,"at index",e.clicked.resi))}),[e.clicked]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Sequence"}),function(n){var i=function(n){return function(){c(n),console.log("You clicked residue",n.resn,"at index",n.resi),e.clickCallback(n)}};return Object(d.jsx)("div",{style:{wordWrap:"break-word",width:300},children:n.residues.map((function(e){return Object(d.jsx)("span",{style:{cursor:"pointer",fontSize:32},onClick:i(e),children:e.resn})}))})}(e.sequence),Object(d.jsxs)("p",{children:[" Clicked residue: ",null===s||void 0===s?void 0:s.resn]}),Object(d.jsxs)("p",{children:[" Clicked index: ",null===s||void 0===s?void 0:s.resi]})]})},j={residues:[{resn:"M",resi:0,chain:"A"},{resn:"K",resi:1,chain:"A"},{resn:"G",resi:2,chain:"A"},{resn:"A",resi:3,chain:"A"},{resn:"R",resi:4,chain:"A"},{resn:"V",resi:5,chain:"A"},{resn:"L",resi:6,chain:"A"},{resn:"V",resi:7,chain:"A"},{resn:"L",resi:8,chain:"A"},{resn:"L",resi:9,chain:"A"},{resn:"W",resi:10,chain:"A"},{resn:"A",resi:11,chain:"A"},{resn:"A",resi:12,chain:"A"},{resn:"L",resi:13,chain:"A"},{resn:"L",resi:14,chain:"A"},{resn:"L",resi:15,chain:"A"},{resn:"I",resi:16,chain:"A"},{resn:"W",resi:17,chain:"A"},{resn:"G",resi:18,chain:"A"},{resn:"G",resi:19,chain:"A"},{resn:"N",resi:20,chain:"A"},{resn:"C",resi:21,chain:"A"},{resn:"E",resi:22,chain:"A"},{resn:"I",resi:23,chain:"A"},{resn:"C",resi:24,chain:"A"},{resn:"P",resi:25,chain:"A"},{resn:"A",resi:26,chain:"A"},{resn:"V",resi:27,chain:"A"},{resn:"K",resi:28,chain:"A"},{resn:"R",resi:29,chain:"A"},{resn:"D",resi:30,chain:"A"},{resn:"V",resi:31,chain:"A"},{resn:"D",resi:32,chain:"A"},{resn:"L",resi:33,chain:"A"},{resn:"F",resi:34,chain:"A"},{resn:"L",resi:35,chain:"A"},{resn:"T",resi:36,chain:"A"},{resn:"G",resi:37,chain:"A"},{resn:"T",resi:38,chain:"A"},{resn:"P",resi:39,chain:"A"},{resn:"D",resi:40,chain:"A"},{resn:"E",resi:41,chain:"A"},{resn:"Y",resi:42,chain:"A"},{resn:"V",resi:43,chain:"A"},{resn:"E",resi:44,chain:"A"},{resn:"Q",resi:45,chain:"A"},{resn:"V",resi:46,chain:"A"},{resn:"A",resi:47,chain:"A"},{resn:"Q",resi:48,chain:"A"},{resn:"Y",resi:49,chain:"A"},{resn:"K",resi:50,chain:"A"},{resn:"A",resi:51,chain:"A"},{resn:"L",resi:52,chain:"A"},{resn:"P",resi:53,chain:"A"},{resn:"V",resi:54,chain:"A"},{resn:"V",resi:55,chain:"A"},{resn:"L",resi:56,chain:"A"},{resn:"E",resi:57,chain:"A"},{resn:"N",resi:58,chain:"A"},{resn:"A",resi:59,chain:"A"},{resn:"R",resi:60,chain:"A"},{resn:"I",resi:61,chain:"A"},{resn:"L",resi:62,chain:"A"},{resn:"K",resi:63,chain:"A"},{resn:"N",resi:64,chain:"A"},{resn:"C",resi:65,chain:"A"},{resn:"V",resi:66,chain:"A"},{resn:"D",resi:67,chain:"A"},{resn:"A",resi:68,chain:"A"},{resn:"K",resi:69,chain:"A"},{resn:"M",resi:70,chain:"A"},{resn:"T",resi:71,chain:"A"},{resn:"E",resi:72,chain:"A"},{resn:"E",resi:73,chain:"A"},{resn:"D",resi:74,chain:"A"},{resn:"K",resi:75,chain:"A"},{resn:"E",resi:76,chain:"A"},{resn:"N",resi:77,chain:"A"},{resn:"A",resi:78,chain:"A"},{resn:"L",resi:79,chain:"A"},{resn:"S",resi:80,chain:"A"},{resn:"L",resi:81,chain:"A"},{resn:"L",resi:82,chain:"A"},{resn:"D",resi:83,chain:"A"},{resn:"K",resi:84,chain:"A"},{resn:"I",resi:85,chain:"A"},{resn:"Y",resi:86,chain:"A"},{resn:"T",resi:87,chain:"A"},{resn:"S",resi:88,chain:"A"},{resn:"P",resi:89,chain:"A"},{resn:"L",resi:90,chain:"A"},{resn:"C",resi:91,chain:"A"}],variants:[{region:{indices:[0,1,2,3],residues:[{resi:0,resn:"TYR",chain:"A"},{resi:0,resn:"TYR",chain:"A"},{resi:0,resn:"TYR",chain:"A"},{resi:0,resn:"TYR",chain:"A"}]},stats:["stats"],variant_type:"domestic"}],conservedRegions:[]},f=function(){var e=Object(r.useState)(null),n=Object(t.a)(e,2),i=n[0],s=n[1],c=function(e){s(e)};return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("h1",{children:" Fel d 1 Viz"}),Object(d.jsx)(o,{pdb:"1PUO",clickCallback:c,clicked:i}),Object(d.jsx)(b,{sequence:j,clickCallback:c,clicked:i})]})})},O=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,22)).then((function(n){var i=n.getCLS,r=n.getFID,s=n.getFCP,c=n.getLCP,a=n.getTTFB;i(e),r(e),s(e),c(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),O()}},[[21,1,2]]]);
//# sourceMappingURL=main.a77c3e94.chunk.js.map