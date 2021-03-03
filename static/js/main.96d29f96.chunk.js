(this.webpackJsonpviz=this.webpackJsonpviz||[]).push([[0],{20:function(e,n,i){},21:function(e,n,i){},30:function(e,n,i){"use strict";i.r(n);var s=i(0),r=i.n(s),c=i(10),a=i.n(c),t=(i(20),i(2)),h=(i(21),i(8)),o=i.n(h),l=i(11),u=i(9),d=i(1),A=function(e){var n=Object(s.useState)("ribbon"),i=Object(t.a)(n,2),r=i[0],c=i[1],a=Object(s.useState)(null),h=Object(t.a)(a,2),A=h[0],B=h[1],b=Object(s.useRef)("structureId"),j=Object(s.useState)(null),f=Object(t.a)(j,2),v=f[0],O=f[1];Object(s.useEffect)((function(){var e=u.createViewer(b.current,{backgroundColor:"#282c34"});null!=e?O(e):alert("Failed to initialize viewer")}),[b]),Object(s.useEffect)((function(){e.clicked&&B(e.clicked)}),[e.clicked]),Object(s.useEffect)((function(){null!==v&&null!=A&&("A"===A.chain&&e.clickCallback(e.chain1_sequence.residues[A.resi]),"B"===A.chain&&e.clickCallback(e.chain2_sequence.residues[A.resi]),v.zoomTo({resi:A.resi},1e3))}),[A]),Object(s.useEffect)((function(){(function(){var n=Object(l.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==v){n.next=6;break}return n.next=3,u.download("pdb:".concat(e.pdb),v,{});case 3:v.setClickable({},!0,(function(e,n,i,s){B(e)})),v.setStyle({},{cartoon:{color:"spectrum",arrows:!0}}),v.render();case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[v,e.pdb]);return Object(s.useEffect)((function(){null!==v&&("surface"===r?(v.setStyle({},{sphere:{radius:3}}),v.render()):"ribbon"===r&&(v.setStyle({},{cartoon:{color:"spectrum",arrows:!0}}),v.render()))}),[v,r]),Object(d.jsxs)("div",{style:{borderColor:"white",borderStyle:"solid",borderWidth:3,display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center",padding:8,minWidth:500},children:[Object(d.jsxs)("p",{children:["Fel d 1 | pdb: ",e.pdb]}),Object(d.jsx)("div",{id:b.current,style:{width:400,height:400,position:"relative",alignSelf:"center"}}),Object(d.jsxs)("p",{children:[" Clicked index: ",null===A||void 0===A?void 0:A.resi]}),Object(d.jsxs)("p",{children:[" Clicked residue: ",null===A||void 0===A?void 0:A.resn]}),Object(d.jsxs)("p",{children:[" Clicked chain: ","A"==(null===A||void 0===A?void 0:A.chain)?"1":"2"]}),Object(d.jsx)("input",{value:"toggle surface/ribbon",type:"button",onClick:function(){c("surface"===r?"ribbon":"surface")}})]})},B=function(e){var n=Object(s.useState)(null),i=Object(t.a)(n,2),r=i[0],c=i[1],a=Object(s.useState)(null),h=Object(t.a)(a,2),o=h[0],l=h[1];Object(s.useEffect)((function(){e.clicked&&c(e.clicked)}),[e.clicked]);return Object(d.jsxs)("div",{style:{borderColor:"white",borderStyle:"solid",borderWidth:3},children:[Object(d.jsx)("h3",{children:e.title}),function(n){var i=function(n,i){return function(){c(n),e.clickCallback(n),l(i?i.stats.join("\n"):null)}};return Object(d.jsx)("div",{style:{wordWrap:"break-word",maxWidth:800},children:n.residues.map((function(n){var s=(null===r||void 0===r?void 0:r.resi)==n.resi,c=s?"red":"white",a=s?"red":"white",t=function(n){var i=new Set;return e.sequence.variants.forEach((function(e){e.region.indices.includes(n.resi)&&i.add(e)})),Array.from(i)}(n),h=t.map((function(e){return e.variant_type}));s||(h.includes("domestic")&&(a="green"),h.includes("exotic")&&(a="orange"),h.includes("domestic")&&h.includes("exotic")&&(c="green",a="orange"));var o,l=(o=n,e.sequence.conservedRegions.some((function(e){return function(e,n){return n.indices.includes(e.resi)}(o,e)}))?"underline":"");return Object(d.jsx)("span",{style:{cursor:"pointer",fontFamily:"monospace",fontSize:32,textDecoration:l,background:"-webkit-linear-gradient(".concat(c,", ").concat(a,")"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},onClick:i(n,t.values().next().value),children:n.resn},n.resi+c)}))})}(e.sequence),Object(d.jsx)("div",{children:o&&o})]})},b={residues:[{resn:"M",resi:0,chain:"A"},{resn:"K",resi:1,chain:"A"},{resn:"G",resi:2,chain:"A"},{resn:"A",resi:3,chain:"A"},{resn:"R",resi:4,chain:"A"},{resn:"V",resi:5,chain:"A"},{resn:"L",resi:6,chain:"A"},{resn:"V",resi:7,chain:"A"},{resn:"L",resi:8,chain:"A"},{resn:"L",resi:9,chain:"A"},{resn:"W",resi:10,chain:"A"},{resn:"A",resi:11,chain:"A"},{resn:"A",resi:12,chain:"A"},{resn:"L",resi:13,chain:"A"},{resn:"L",resi:14,chain:"A"},{resn:"L",resi:15,chain:"A"},{resn:"I",resi:16,chain:"A"},{resn:"W",resi:17,chain:"A"},{resn:"G",resi:18,chain:"A"},{resn:"G",resi:19,chain:"A"},{resn:"N",resi:20,chain:"A"},{resn:"C",resi:21,chain:"A"},{resn:"E",resi:22,chain:"A"},{resn:"I",resi:23,chain:"A"},{resn:"C",resi:24,chain:"A"},{resn:"P",resi:25,chain:"A"},{resn:"A",resi:26,chain:"A"},{resn:"V",resi:27,chain:"A"},{resn:"K",resi:28,chain:"A"},{resn:"R",resi:29,chain:"A"},{resn:"D",resi:30,chain:"A"},{resn:"V",resi:31,chain:"A"},{resn:"D",resi:32,chain:"A"},{resn:"L",resi:33,chain:"A"},{resn:"F",resi:34,chain:"A"},{resn:"L",resi:35,chain:"A"},{resn:"T",resi:36,chain:"A"},{resn:"G",resi:37,chain:"A"},{resn:"T",resi:38,chain:"A"},{resn:"P",resi:39,chain:"A"},{resn:"D",resi:40,chain:"A"},{resn:"E",resi:41,chain:"A"},{resn:"Y",resi:42,chain:"A"},{resn:"V",resi:43,chain:"A"},{resn:"E",resi:44,chain:"A"},{resn:"Q",resi:45,chain:"A"},{resn:"V",resi:46,chain:"A"},{resn:"A",resi:47,chain:"A"},{resn:"Q",resi:48,chain:"A"},{resn:"Y",resi:49,chain:"A"},{resn:"K",resi:50,chain:"A"},{resn:"A",resi:51,chain:"A"},{resn:"L",resi:52,chain:"A"},{resn:"P",resi:53,chain:"A"},{resn:"V",resi:54,chain:"A"},{resn:"V",resi:55,chain:"A"},{resn:"L",resi:56,chain:"A"},{resn:"E",resi:57,chain:"A"},{resn:"N",resi:58,chain:"A"},{resn:"A",resi:59,chain:"A"},{resn:"R",resi:60,chain:"A"},{resn:"I",resi:61,chain:"A"}],variants:[{region:{indices:[0,1,2,3],residues:[{resi:0,resn:"TYR",chain:"A"},{resi:1,resn:"TYR",chain:"A"},{resi:2,resn:"TYR",chain:"A"},{resi:3,resn:"TYR",chain:"A"}]},stats:["stats","stat1","stat2","stat3"],variant_type:"domestic"},{region:{indices:[10,11,12,13],residues:[{resi:10,resn:"TYR",chain:"A"},{resi:11,resn:"TYR",chain:"A"},{resi:12,resn:"TYR",chain:"A"},{resi:13,resn:"TYR",chain:"A"}]},stats:["stats","stat1","stat2","stat3"],variant_type:"exotic"},{region:{indices:[20,21,22,23],residues:[{resi:20,resn:"TYR",chain:"A"},{resi:21,resn:"TYR",chain:"A"},{resi:22,resn:"TYR",chain:"A"},{resi:23,resn:"TYR",chain:"A"}]},stats:["stats","stat1","stat2","stat3"],variant_type:"domestic"},{region:{indices:[20,21,22,23],residues:[{resi:20,resn:"TYR",chain:"A"},{resi:21,resn:"TYR",chain:"A"},{resi:22,resn:"TYR",chain:"A"},{resi:23,resn:"TYR",chain:"A"}]},stats:["stats","stat1","stat2","stat3"],variant_type:"exotic"}],conservedRegions:[{indices:[7,8,9,10,11,12,13],residues:[{resn:"V",resi:7,chain:"A"},{resn:"L",resi:8,chain:"A"},{resn:"L",resi:9,chain:"A"},{resn:"W",resi:10,chain:"A"},{resn:"A",resi:11,chain:"A"},{resn:"A",resi:12,chain:"A"},{resn:"L",resi:13,chain:"A"}]}]},j={residues:[{resn:"V",resi:0,chain:"B"},{resn:"E",resi:1,chain:"B"},{resn:"Q",resi:2,chain:"B"},{resn:"V",resi:3,chain:"B"},{resn:"B",resi:4,chain:"B"},{resn:"Q",resi:5,chain:"B"},{resn:"Y",resi:6,chain:"B"},{resn:"K",resi:7,chain:"B"},{resn:"B",resi:8,chain:"B"},{resn:"L",resi:9,chain:"B"},{resn:"P",resi:10,chain:"B"},{resn:"V",resi:11,chain:"B"},{resn:"V",resi:12,chain:"B"},{resn:"L",resi:13,chain:"B"},{resn:"E",resi:14,chain:"B"},{resn:"N",resi:15,chain:"B"},{resn:"B",resi:16,chain:"B"},{resn:"R",resi:17,chain:"B"},{resn:"I",resi:18,chain:"B"},{resn:"M",resi:19,chain:"B"},{resn:"K",resi:20,chain:"B"},{resn:"G",resi:21,chain:"B"},{resn:"B",resi:22,chain:"B"},{resn:"R",resi:23,chain:"B"},{resn:"V",resi:24,chain:"B"},{resn:"L",resi:25,chain:"B"},{resn:"V",resi:26,chain:"B"},{resn:"L",resi:27,chain:"B"},{resn:"L",resi:28,chain:"B"},{resn:"W",resi:29,chain:"B"},{resn:"B",resi:30,chain:"B"},{resn:"B",resi:31,chain:"B"},{resn:"L",resi:32,chain:"B"},{resn:"L",resi:33,chain:"B"},{resn:"L",resi:34,chain:"B"},{resn:"I",resi:35,chain:"B"},{resn:"W",resi:36,chain:"B"},{resn:"G",resi:37,chain:"B"},{resn:"G",resi:38,chain:"B"},{resn:"N",resi:39,chain:"B"},{resn:"C",resi:40,chain:"B"},{resn:"E",resi:41,chain:"B"},{resn:"I",resi:42,chain:"B"},{resn:"C",resi:43,chain:"B"},{resn:"P",resi:44,chain:"B"},{resn:"B",resi:45,chain:"B"},{resn:"V",resi:46,chain:"B"},{resn:"K",resi:47,chain:"B"},{resn:"R",resi:48,chain:"B"},{resn:"D",resi:49,chain:"B"},{resn:"V",resi:50,chain:"B"},{resn:"D",resi:51,chain:"B"},{resn:"L",resi:52,chain:"B"},{resn:"F",resi:53,chain:"B"},{resn:"L",resi:54,chain:"B"},{resn:"T",resi:55,chain:"B"},{resn:"G",resi:56,chain:"B"},{resn:"T",resi:57,chain:"B"},{resn:"P",resi:58,chain:"B"},{resn:"D",resi:59,chain:"B"},{resn:"E",resi:60,chain:"B"},{resn:"Y",resi:61,chain:"B"}],variants:[{region:{indices:[0,1,2,3],residues:[{resi:0,resn:"TYR",chain:"B"},{resi:1,resn:"TYR",chain:"B"},{resi:2,resn:"TYR",chain:"B"},{resi:3,resn:"TYR",chain:"B"}]},stats:["stats","stat1","stat2","stat3"],variant_type:"domestic"},{region:{indices:[10,11,12,13],residues:[{resi:10,resn:"TYR",chain:"B"},{resi:11,resn:"TYR",chain:"B"},{resi:12,resn:"TYR",chain:"B"},{resi:13,resn:"TYR",chain:"B"}]},stats:["stats","stat1","stat2","stat3"],variant_type:"exotic"},{region:{indices:[20,21,22,23],residues:[{resi:20,resn:"TYR",chain:"B"},{resi:21,resn:"TYR",chain:"B"},{resi:22,resn:"TYR",chain:"B"},{resi:23,resn:"TYR",chain:"B"}]},stats:["stats","stat1","stat2","stat3"],variant_type:"domestic"},{region:{indices:[20,21,22,23],residues:[{resi:20,resn:"TYR",chain:"B"},{resi:21,resn:"TYR",chain:"B"},{resi:22,resn:"TYR",chain:"B"},{resi:23,resn:"TYR",chain:"B"}]},stats:["stats","stat1","stat2","stat3"],variant_type:"exotic"}],conservedRegions:[{indices:[7,8,9,10,11,12,13],residues:[{resn:"V",resi:7,chain:"B"},{resn:"L",resi:8,chain:"B"},{resn:"L",resi:9,chain:"B"},{resn:"W",resi:10,chain:"B"},{resn:"B",resi:11,chain:"B"},{resn:"B",resi:12,chain:"B"},{resn:"L",resi:13,chain:"B"}]}]},f=i(32),v=i(33),O=i(34),p=i(12),x=i(13),R=i(15),k=i(14),T=function(e){Object(R.a)(i,e);var n=Object(k.a)(i);function i(e){var s;return Object(p.a)(this,i),(s=n.call(this,e)).state={hasError:!1,error:null},s}return Object(x.a)(i,[{key:"componentDidCatch",value:function(e,n){console.log(e,n)}},{key:"render",value:function(){var e;return this.state.hasError?Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Something went wrong."}),Object(d.jsx)("p",{children:null===(e=this.state.error)||void 0===e?void 0:e.message})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),i}(r.a.Component),g=(i(29),function(){var e=Object(s.useState)(null),n=Object(t.a)(e,2),i=n[0],r=n[1],c=Object(s.useState)(null),a=Object(t.a)(c,2),h=a[0],o=a[1],l=Object(s.useState)(null),u=Object(t.a)(l,2),p=u[0],x=u[1],R=function(e){x(e),"A"==e.chain?(r(e),o(null)):(r(null),o(e))};return Object(d.jsx)(f.a,{className:"App",children:Object(d.jsxs)(v.a,{children:[Object(d.jsx)(O.a,{sm:12,lg:6,children:Object(d.jsx)(T,{children:Object(d.jsx)(A,{pdb:"2EJN",clickCallback:R,clicked:p,chain1_sequence:b,chain2_sequence:j})})}),Object(d.jsxs)(O.a,{sm:12,lg:6,children:[Object(d.jsx)(T,{children:Object(d.jsx)(B,{title:"Chain 1",sequence:b,clickCallback:R,clicked:i})}),Object(d.jsx)(T,{children:Object(d.jsx)(B,{title:"Chain 2",sequence:j,clickCallback:R,clicked:h})})]})]})})}),Y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,35)).then((function(n){var i=n.getCLS,s=n.getFID,r=n.getFCP,c=n.getLCP,a=n.getTTFB;i(e),s(e),r(e),c(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),Y()}},[[30,1,2]]]);
//# sourceMappingURL=main.96d29f96.chunk.js.map