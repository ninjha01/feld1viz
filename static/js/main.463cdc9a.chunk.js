(this.webpackJsonpviz=this.webpackJsonpviz||[]).push([[0],{22:function(e,i,s){},23:function(e,i,s){},32:function(e,i,s){"use strict";s.r(i);var t=s(0),n=s.n(t),r=s(11),a=s.n(r),c=(s(22),s(4)),o=(s(23),s(35)),d=s(36),h=s(37),l=s(12),u=s(13),b=s(17),A=s(15),f=s(1),j=function(e){Object(b.a)(s,e);var i=Object(A.a)(s);function s(e){var t;return Object(l.a)(this,s),(t=i.call(this,e)).state={hasError:!1,error:null},t}return Object(u.a)(s,[{key:"componentDidCatch",value:function(e,i){console.log(e,i)}},{key:"render",value:function(){var e;return this.state.hasError?Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Something went wrong."}),Object(f.jsx)("p",{children:null===(e=this.state.error)||void 0===e?void 0:e.message})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),s}(n.a.Component),m=(s(25),s(8)),B=s.n(m),v=s(14),y=s(9),p=s(16),w="#17a2b8",g="red",O="white",S="#e9c46a",x="#f4a261",_="#282c34",N={cartoon:{colorscheme:"shapely"}},L={sphere:{radius:1,colorscheme:"shapely"}},E=function(e){var i=Object(t.useState)("ribbon"),s=Object(c.a)(i,2),n=s[0],r=s[1],a=Object(t.useState)(null),o=Object(c.a)(a,2),d=o[0],h=o[1],l=Object(t.useState)([]),u=Object(c.a)(l,2),b=u[0],A=u[1],j=Object(t.useRef)("structureId"),m=Object(t.useState)(null),w=Object(c.a)(m,2),O=w[0],S=w[1];Object(t.useEffect)((function(){var e={backgroundColor:_},i=y.createViewer(j.current,e);null!=i?S(i):alert("Failed to initialize viewer")}),[j]),Object(t.useEffect)((function(){e.clicked&&h(e.clicked)}),[e.clicked]),Object(t.useEffect)((function(){if(null!==O&&null!=d){var e=d;b&&(b.forEach((function(e){console.log("removing",e),O.removeLabel(e)})),O.render()),console.log("adding label");var i=[{title:e.resn,style:{position:{x:e.x,y:e.y,z:e.z},backgroundColor:g,backgroundOpacity:1}}];A(i.map((function(e){return O.addLabel(e.title,e.style)}))),O.render()}}),[e.clickCallback,d,O]),Object(t.useEffect)((function(){(function(){var i=Object(v.a)(B.a.mark((function i(){return B.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(null==O){i.next=6;break}return i.next=3,y.download("pdb:".concat(e.pdb),O,{});case 3:O.setClickable({},!0,(function(e,i,s,t){h(e)})),O.setStyle({},N),O.render();case 6:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}})()()}),[O,e.pdb]);return Object(t.useEffect)((function(){null!==O&&("surface"===n?(O.setStyle({},L),O.render()):"ribbon"===n&&(O.setStyle({},N),O.render()))}),[O,n]),Object(f.jsxs)("div",{style:{borderColor:"white",borderStyle:"solid",borderWidth:3,borderRadius:12,display:"flex",flexDirection:"column",padding:8,position:"relative",margin:16},children:[Object(f.jsxs)("p",{children:["Fel d 1 | pdb: ",e.pdb]}),Object(f.jsx)("div",{id:j.current,style:{minWidth:"40vw",minHeight:"40vw",position:"relative",alignSelf:"center"}}),Object(f.jsx)(p.a,{style:{margin:16},variant:"secondary",onClick:function(){r("surface"===n?"ribbon":"surface")},children:"toggle surface/ribbon"})]})},C=s(33),k=s(34),V=function(e){var i=Object(t.useState)(null),s=Object(c.a)(i,2),n=s[0],r=s[1],a=Object(t.useState)(null),o=Object(c.a)(a,2),d=o[0],h=o[1],l=Object(t.useState)(void 0),u=Object(c.a)(l,2),b=u[0],A=u[1],j=Object(t.useState)("domestic"),m=Object(c.a)(j,2),B=m[0],v=m[1];return Object(f.jsxs)("div",{style:{borderColor:O,borderStyle:"solid",borderWidth:3,borderRadius:12,paddingTop:8},children:[Object(f.jsx)("h3",{children:e.title}),Object(f.jsxs)(C.a,{toggle:!0,size:"sm",children:[Object(f.jsx)(k.a,{type:"radio",variant:"outline-info",name:"radio",value:"domestic",checked:"domestic"===B,onChange:function(e){return v("domestic")},children:"Domestic"}),Object(f.jsx)(k.a,{type:"radio",variant:"outline-info",name:"radio",value:"exotic",checked:"exotic"===B,onChange:function(e){return v("exotic")},children:"Exotic"})]}),function(i){var s=function(e,s){return function(){if(r(e),i&&s){var t=s.correlated_ids.map((function(t){var n,r=null===(n=i.variants.find((function(e){return e.id===t})))||void 0===n?void 0:n.indices;return r||(console.log("Couldn't find correlated indices for",e,s),[])})).flat();A(t)}else A(void 0);h(s?s.stats:null)}},t=function(i){var t=function(i){var s=new Set;return e.sequence.variants.forEach((function(e){B===e.variant_type&&e.indices.includes(i.resi)&&s.add(e)})),Array.from(s)}(i),r=function(e,i,s){if(s.includes(e.resi))return S;var t=(null===n||void 0===n?void 0:n.resi)===e.resi,r=t?g:O,a=i.map((function(e){return e.variant_type}));return t||a.includes("domestic")&&(r=w),r}(i,t,b||[]),a=t.values().next().value;return Object(f.jsx)("span",{style:{cursor:"pointer",fontFamily:"monospace",fontSize:"calc(10px + 2vmin)",background:"-webkit-linear-gradient(".concat(r,", ").concat(r,")"),WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textDecoration:e.cutsites.indices.includes(i.resi)?"underline dotted ".concat(x):"initial"},onClick:s(i,a),children:i.resn},i.resi+r)};return Object(f.jsx)("div",{style:{wordWrap:"break-word",margin:16,textAlign:"left"},children:i.residues.map((function(e){return t(e)}))})}(e.sequence),Object(f.jsx)("div",{style:{display:"inline-block"},children:function(){var e={backgroundColor:_,borderColor:w,borderStyle:"dotted",color:O,borderRadius:12,padding:8,marginBottom:16,fontSize:"calc(10px + 0.5vmin)",textAlign:"left",minWidth:600};if(d)return Object(f.jsxs)("div",{style:e,className:"FadeIn",children:[Object(f.jsx)("div",{style:{textAlign:"center"},children:Object(f.jsx)("h4",{children:"Variant Info"})}),Object(f.jsx)("ul",{children:d.map((function(e){return Object(f.jsx)("li",{children:e})}))})]})}()})]})},P=function(){return Object(f.jsxs)("div",{style:{borderColor:O,borderStyle:"dashed",borderWidth:3,borderRadius:12,display:"flex",flexDirection:"column",padding:8,position:"relative",margin:16,fontSize:"calc(10px + 1vmin)"},children:[Object(f.jsx)("h3",{children:"Legend"}),Object(f.jsxs)("div",{style:{textAlign:"left",padding:8},children:[Object(f.jsxs)("p",{children:["Variants are in ",Object(f.jsx)("span",{style:{color:w},children:" blue "}),". Use the toggle to switch between Domestic and Exotic Variants."]}),Object(f.jsxs)("p",{children:["Click on a variant to show stats. Correlated variants are shown in ",Object(f.jsx)("span",{style:{color:S},children:" yellow "})]}),Object(f.jsxs)("p",{children:["CRISPR Cut sites are underlined in ",Object(f.jsx)("span",{style:{color:x},children:" orange "})]})]})]})},R={residues:[{resi:0,resn:"M",chain:"A"},{resi:1,resn:"K",chain:"A"},{resi:2,resn:"G",chain:"A"},{resi:3,resn:"A",chain:"A"},{resi:4,resn:"R",chain:"A"},{resi:5,resn:"V",chain:"A"},{resi:6,resn:"L",chain:"A"},{resi:7,resn:"V",chain:"A"},{resi:8,resn:"L",chain:"A"},{resi:9,resn:"L",chain:"A"},{resi:10,resn:"W",chain:"A"},{resi:11,resn:"A",chain:"A"},{resi:12,resn:"A",chain:"A"},{resi:13,resn:"L",chain:"A"},{resi:14,resn:"L",chain:"A"},{resi:15,resn:"L",chain:"A"},{resi:16,resn:"I",chain:"A"},{resi:17,resn:"W",chain:"A"},{resi:18,resn:"G",chain:"A"},{resi:19,resn:"G",chain:"A"},{resi:20,resn:"N",chain:"A"},{resi:21,resn:"C",chain:"A"},{resi:22,resn:"E",chain:"A"},{resi:23,resn:"I",chain:"A"},{resi:24,resn:"C",chain:"A"},{resi:25,resn:"P",chain:"A"},{resi:26,resn:"A",chain:"A"},{resi:27,resn:"V",chain:"A"},{resi:28,resn:"K",chain:"A"},{resi:29,resn:"R",chain:"A"},{resi:30,resn:"D",chain:"A"},{resi:31,resn:"V",chain:"A"},{resi:32,resn:"D",chain:"A"},{resi:33,resn:"L",chain:"A"},{resi:34,resn:"F",chain:"A"},{resi:35,resn:"L",chain:"A"},{resi:36,resn:"T",chain:"A"},{resi:37,resn:"G",chain:"A"},{resi:38,resn:"T",chain:"A"},{resi:39,resn:"P",chain:"A"},{resi:40,resn:"D",chain:"A"},{resi:41,resn:"E",chain:"A"},{resi:42,resn:"Y",chain:"A"},{resi:43,resn:"V",chain:"A"},{resi:44,resn:"E",chain:"A"},{resi:45,resn:"Q",chain:"A"},{resi:46,resn:"V",chain:"A"},{resi:47,resn:"A",chain:"A"},{resi:48,resn:"Q",chain:"A"},{resi:49,resn:"Y",chain:"A"},{resi:50,resn:"K",chain:"A"},{resi:51,resn:"A",chain:"A"},{resi:52,resn:"L",chain:"A"},{resi:53,resn:"P",chain:"A"},{resi:54,resn:"V",chain:"A"},{resi:55,resn:"V",chain:"A"},{resi:56,resn:"L",chain:"A"},{resi:57,resn:"E",chain:"A"},{resi:58,resn:"N",chain:"A"},{resi:59,resn:"A",chain:"A"},{resi:60,resn:"R",chain:"A"},{resi:61,resn:"I",chain:"A"},{resi:62,resn:"L",chain:"A"},{resi:63,resn:"K",chain:"A"},{resi:64,resn:"N",chain:"A"},{resi:65,resn:"C",chain:"A"},{resi:66,resn:"V",chain:"A"},{resi:67,resn:"D",chain:"A"},{resi:68,resn:"A",chain:"A"},{resi:69,resn:"K",chain:"A"},{resi:70,resn:"M",chain:"A"},{resi:71,resn:"T",chain:"A"},{resi:72,resn:"E",chain:"A"},{resi:73,resn:"E",chain:"A"},{resi:74,resn:"D",chain:"A"},{resi:75,resn:"K",chain:"A"},{resi:76,resn:"E",chain:"A"},{resi:77,resn:"N",chain:"A"},{resi:78,resn:"A",chain:"A"},{resi:79,resn:"L",chain:"A"},{resi:80,resn:"S",chain:"A"},{resi:81,resn:"L",chain:"A"},{resi:82,resn:"L",chain:"A"},{resi:83,resn:"D",chain:"A"},{resi:84,resn:"K",chain:"A"},{resi:85,resn:"I",chain:"A"},{resi:86,resn:"Y",chain:"A"},{resi:87,resn:"T",chain:"A"},{resi:88,resn:"S",chain:"A"},{resi:89,resn:"P",chain:"A"},{resi:90,resn:"L",chain:"A"},{resi:91,resn:"C",chain:"A"}],variants:[{id:0,indices:[4],stats:["SNP: R/C","20.0% of cats (50 total)","10 cats with ambiguity R/C"],variant_type:"domestic",correlated_ids:[1,4,8]},{id:1,indices:[17],stats:["SNP: W/S","24.0% of cats (50 total)","10 cats with ambiguity W/S","2 cats with substitution S"],variant_type:"domestic",correlated_ids:[]},{id:2,indices:[36],stats:["Rare Mutation: T/M","2.0% of cats (50 total)","1 cats with rare mutation M"],variant_type:"domestic",correlated_ids:[]},{id:3,indices:[41],stats:["Rare Mutation: E/K","2.0% of cats (50 total)","1 cats with rare mutation K"],variant_type:"domestic",correlated_ids:[]},{id:4,indices:[50],stats:["SNP: K/N","28.0% of cats (50 total)","11 cats with ambiguity K/N","3 cats with substitution N"],variant_type:"domestic",correlated_ids:[]},{id:5,indices:[52],stats:["Rare Mutation: L/R","2.0% of cats (50 total)","1 cats with rare mutation L/R"],variant_type:"domestic",correlated_ids:[]},{id:6,indices:[57],stats:["Rare Mutation: E/A","2.0% of cats (50 total)","1 cats with rare mutation A"],variant_type:"domestic",correlated_ids:[]},{id:7,indices:[61],stats:["Rare Mutation: I/N","2.0% of cats (50 total)","1 cats with rare mutation N"],variant_type:"domestic",correlated_ids:[]},{id:8,indices:[81],stats:["Rare Mutation: L/V","26.0% of cats (50 total)","12 cats with rare mutation L/V","1 cats with substitution V"],variant_type:"domestic",correlated_ids:[]},{id:9,indices:[88],stats:["Rare Mutation: S/N","2.0% of cats (50 total)","1 cats with rare mutation N"],variant_type:"domestic",correlated_ids:[]}],conservedRegions:[]},T={residues:[{resi:0,resn:"M",chain:"B"},{resi:1,resn:"R",chain:"B"},{resi:2,resn:"G",chain:"B"},{resi:3,resn:"A",chain:"B"},{resi:4,resn:"L",chain:"B"},{resi:5,resn:"L",chain:"B"},{resi:6,resn:"V",chain:"B"},{resi:7,resn:"L",chain:"B"},{resi:8,resn:"A",chain:"B"},{resi:9,resn:"L",chain:"B"},{resi:10,resn:"L",chain:"B"},{resi:11,resn:"V",chain:"B"},{resi:12,resn:"T",chain:"B"},{resi:13,resn:"Q",chain:"B"},{resi:14,resn:"A",chain:"B"},{resi:15,resn:"L",chain:"B"},{resi:16,resn:"G",chain:"B"},{resi:17,resn:"V",chain:"B"},{resi:18,resn:"K",chain:"B"},{resi:19,resn:"M",chain:"B"},{resi:20,resn:"A",chain:"B"},{resi:21,resn:"E",chain:"B"},{resi:22,resn:"T",chain:"B"},{resi:23,resn:"C",chain:"B"},{resi:24,resn:"P",chain:"B"},{resi:25,resn:"I",chain:"B"},{resi:26,resn:"F",chain:"B"},{resi:27,resn:"Y",chain:"B"},{resi:28,resn:"D",chain:"B"},{resi:29,resn:"V",chain:"B"},{resi:30,resn:"F",chain:"B"},{resi:31,resn:"F",chain:"B"},{resi:32,resn:"A",chain:"B"},{resi:33,resn:"V",chain:"B"},{resi:34,resn:"A",chain:"B"},{resi:35,resn:"N",chain:"B"},{resi:36,resn:"G",chain:"B"},{resi:37,resn:"N",chain:"B"},{resi:38,resn:"E",chain:"B"},{resi:39,resn:"L",chain:"B"},{resi:40,resn:"L",chain:"B"},{resi:41,resn:"L",chain:"B"},{resi:42,resn:"D",chain:"B"},{resi:43,resn:"L",chain:"B"},{resi:44,resn:"S",chain:"B"},{resi:45,resn:"L",chain:"B"},{resi:46,resn:"T",chain:"B"},{resi:47,resn:"K",chain:"B"},{resi:48,resn:"V",chain:"B"},{resi:49,resn:"N",chain:"B"},{resi:50,resn:"A",chain:"B"},{resi:51,resn:"T",chain:"B"},{resi:52,resn:"E",chain:"B"},{resi:53,resn:"P",chain:"B"},{resi:54,resn:"E",chain:"B"},{resi:55,resn:"R",chain:"B"},{resi:56,resn:"T",chain:"B"},{resi:57,resn:"A",chain:"B"},{resi:58,resn:"M",chain:"B"},{resi:59,resn:"K",chain:"B"},{resi:60,resn:"K",chain:"B"},{resi:61,resn:"I",chain:"B"},{resi:62,resn:"Q",chain:"B"},{resi:63,resn:"D",chain:"B"},{resi:64,resn:"C",chain:"B"},{resi:65,resn:"Y",chain:"B"},{resi:66,resn:"V",chain:"B"},{resi:67,resn:"E",chain:"B"},{resi:68,resn:"N",chain:"B"},{resi:69,resn:"G",chain:"B"},{resi:70,resn:"L",chain:"B"},{resi:71,resn:"I",chain:"B"},{resi:72,resn:"S",chain:"B"},{resi:73,resn:"R",chain:"B"},{resi:74,resn:"V",chain:"B"},{resi:75,resn:"L",chain:"B"},{resi:76,resn:"D",chain:"B"},{resi:77,resn:"G",chain:"B"},{resi:78,resn:"L",chain:"B"},{resi:79,resn:"V",chain:"B"},{resi:80,resn:"M",chain:"B"},{resi:81,resn:"T",chain:"B"},{resi:82,resn:"T",chain:"B"},{resi:83,resn:"I",chain:"B"},{resi:84,resn:"S",chain:"B"},{resi:85,resn:"S",chain:"B"},{resi:86,resn:"S",chain:"B"},{resi:87,resn:"K",chain:"B"},{resi:88,resn:"D",chain:"B"},{resi:89,resn:"C",chain:"B"},{resi:90,resn:"M",chain:"B"},{resi:91,resn:"G",chain:"B"},{resi:92,resn:"E",chain:"B"},{resi:93,resn:"A",chain:"B"},{resi:94,resn:"V",chain:"B"},{resi:95,resn:"Q",chain:"B"},{resi:96,resn:"N",chain:"B"},{resi:97,resn:"T",chain:"B"},{resi:98,resn:"V",chain:"B"},{resi:99,resn:"E",chain:"B"},{resi:100,resn:"D",chain:"B"},{resi:101,resn:"L",chain:"B"},{resi:102,resn:"K",chain:"B"},{resi:103,resn:"L",chain:"B"},{resi:104,resn:"N",chain:"B"},{resi:105,resn:"T",chain:"B"},{resi:106,resn:"L",chain:"B"},{resi:107,resn:"G",chain:"B"},{resi:108,resn:"R",chain:"B"}],variants:[{id:0,indices:[14],stats:["SNP: A/E","44.0% of cats (50 total)","13 cats with ambiguity A/E","9 cats with substitution E"],variant_type:"domestic",correlated_ids:[]},{id:1,indices:[28],stats:["SNP: D/E","12.0% of cats (50 total)","6 cats with ambiguity D/E"],variant_type:"domestic",correlated_ids:[2,3]},{id:2,indices:[31],stats:["MNP: F/T/S/I","34.0% of cats (50 total)","8 cats with substitution T","8 cats with  F/T/S/I","1 cats with rare mutation T/S"],variant_type:"domestic",correlated_ids:[3]},{id:3,indices:[35],stats:["SNP: N/S","34.0% of cats (50 total)","8 cats with substitution S","9 cats with ambiguity N/S"],variant_type:"domestic",correlated_ids:[2]},{id:4,indices:[37],stats:["SNP: N/D","14.0% of cats (50 total)","4 cats with ambiguity N/D","3 cats with substitution D"],variant_type:"domestic",correlated_ids:[2,3]},{id:5,indices:[43],stats:["SNP: L/F/S","20.0% of cats (50 total)","10 cats with ambiguity L/F/S"],variant_type:"domestic",correlated_ids:[9]},{id:6,indices:[71],stats:["SNP: I/L/V","86.0% of cats (50 total)","12 cats with ambiguity I/V","8 cats with substitution V","8 cats with ambiguity I/L","13 cats with ambiguity V/L","2 cats with substitution L"],variant_type:"domestic",correlated_ids:[]},{id:7,indices:[73],stats:["SNP: R/K","66.0% of cats (50 total)","25 cats with ambiguity R/K","8 cats with substitution K"],variant_type:"domestic",correlated_ids:[8]},{id:8,indices:[74],stats:["SNP: V/F/A/S","66.0% of cats (50 total)","11 cats with ambiguity V/F","4 cats with ambiguity V/F/A/S","14 cats with ambiguity V/A","4 cats with substitution F"],variant_type:"domestic",correlated_ids:[7]},{id:9,indices:[77],stats:["SNP: G/A/T/R","36.0% of cats (50 total)","16 cats with ambiguity G/A/T/R","2 cats with ambiguity G/A"],variant_type:"domestic",correlated_ids:[7,8]},{id:10,indices:[81],stats:["SNP: T/I","64.0% of cats (50 total)","23 cats with substitution I","9 cats with ambiguity T/I"],variant_type:"domestic",correlated_ids:[11,12,13,14,15,16,17]},{id:11,indices:[82],stats:["SNP: T/A","42.0% of cats (50 total)","18 cats with substitution A","3 cats with ambiguity T/A"],variant_type:"domestic",correlated_ids:[10,12,13,14,15,16,17]},{id:12,indices:[83],stats:["SNP: I/-","42.0% of cats (50 total)","21 cats with abscence"],variant_type:"domestic",correlated_ids:[10,11,13,14,15,16,17]},{id:13,indices:[84],stats:["SNP: S/-","42.0% of cats (50 total)","21 cats with substitution -"],variant_type:"domestic",correlated_ids:[10,11,12,14,15,16,17]},{id:14,indices:[85],stats:["SNP: S/-","42.0% of cats (50 total)","21 cats with substitution -"],variant_type:"domestic",correlated_ids:[10,11,12,13,15,16,17]},{id:15,indices:[86],stats:["SNP: S/N","42.0% of cats (50 total)","21 cats with substitution N"],variant_type:"domestic",correlated_ids:[10,11,12,13,14,16,17]},{id:16,indices:[87],stats:["SNP: V","40.0% of cats (50 total)","13 cats with substitution V","5 cats with substitution E","2 cats with ambiguity E/V"],variant_type:"domestic",correlated_ids:[10,11,12,13,14,15,17]},{id:17,indices:[88],stats:["SNP: Y","14.0% of cats (50 total)","2 cats with ambiguity D/Y","5 cats with substitution Y"],variant_type:"domestic",correlated_ids:[10,11,12,13,14,15,16]},{id:18,indices:[90],stats:["SNP: M/T","30.0% of cats (50 total)","9 cats with ambiguity M/T","6 cats with substitution T"],variant_type:"domestic",correlated_ids:[0]},{id:19,indices:[95],stats:["SNP: Q/E","34.0% of cats (50 total)","4 cats with ambiguity Q/E","13 cats with substitution E"],variant_type:"domestic",correlated_ids:[20]},{id:20,indices:[104],stats:["SNP: N/K","34.0% of cats (50 total)","4 cats with ambiguity N/K","13 cats with substitution K"],variant_type:"domestic",correlated_ids:[19]}],conservedRegions:[]},D=function(){var e=Object(t.useState)(null),i=Object(c.a)(e,2),s=i[0],n=i[1],r=Object(t.useState)(null),a=Object(c.a)(r,2),l=a[0],u=a[1],b=Object(t.useState)(null),A=Object(c.a)(b,2),m=A[0],B=A[1],v=function(e){B(e),function(e,i){if(!e)throw new Error(i||"Assertion failed")}(null!=e,"Selection is null"),"A"===e.chain?(n(e),u(null)):(n(null),u(e))};return Object(f.jsx)(o.a,{className:"App",children:Object(f.jsxs)(d.a,{style:{width:"100vw",alignSelf:"center"},className:"align-items-center",children:[Object(f.jsx)(h.a,{sm:12,lg:6,children:Object(f.jsx)(j,{children:Object(f.jsx)(E,{pdb:"2EJN",clickCallback:v,clicked:m,chain1_sequence:R,chain2_sequence:T})})}),Object(f.jsxs)(h.a,{sm:12,lg:6,children:[Object(f.jsx)(j,{children:Object(f.jsx)(P,{})}),Object(f.jsx)(j,{children:Object(f.jsx)(V,{title:"Chain 1",sequence:R,clickCallback:v,clicked:s,cutsites:{indices:[20,21,26,27,28,45]}})}),Object(f.jsx)("br",{}),Object(f.jsx)(j,{children:Object(f.jsx)(V,{title:"Chain 2",sequence:T,clickCallback:v,clicked:l,cutsites:{indices:[0,1,9]}})})]})]})})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(i){var s=i.getCLS,t=i.getFID,n=i.getFCP,r=i.getLCP,a=i.getTTFB;s(e),t(e),n(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(D,{})}),document.getElementById("root")),I()}},[[32,1,2]]]);
//# sourceMappingURL=main.463cdc9a.chunk.js.map