(this["webpackJsonpreact-app-lucidity"]=this["webpackJsonpreact-app-lucidity"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),s=n.n(i),r=(n(95),n(57)),o=n(20),l=n(159),j=n(154),d=n(2);function u(e){return Object(d.jsx)("img",{alt:"cat",src:e.src,width:"100%",height:"250",style:{borderTopRightRadius:5,borderTopLeftRadius:5}})}var b=function(e){try{if(e)return(e="string"!==typeof e?e.toString():e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}catch(t){console.log(t)}};function h(e,t){return e.sort((function(e,n){var a=e[t],c=n[t];return a<c?-1:a>c?1:0}))}var p=n(158),m=n(171);function g(e){var t=f();return Object(d.jsx)("div",{className:t.root,children:Object(d.jsxs)(j.a,{elevation:3,className:t.paper,children:[Object(d.jsx)("div",{children:Object(d.jsx)(u,{src:"https://www.ulcdn.net/assets/spree/frontend/icons/loader-f40db8b3a97fef2e139c0fa9b0de17fc.gif"===e.image?"https://i0.wp.com/www.omantripper.com/wp-content/plugins/penci-portfolio//images/no-thumbnail.jpg":e.image})}),Object(d.jsxs)("div",{className:t.infoSection,children:[Object(d.jsxs)("span",{className:t.cardDescription,children:[Object(d.jsx)("span",{className:t.descriptionTitle,children:e.title||"Title"}),Object(d.jsxs)("span",{className:t.descriptionSubTitle,children:["(",e.subTitle||"Sub Title",")"]}),Object(d.jsxs)("span",{className:t.descriptionPrice,children:["\u20b9",b(e.price)||b("5000")]}),Object(d.jsxs)("span",{className:t.descriptionNote,children:[" ","| EMI @ ",b(e.subNote)||"NA","/Month"]}),Object(d.jsx)("br",{}),Object(d.jsx)(m.a,{name:"read-only",value:e.rating/2,readOnly:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{children:[Object(d.jsx)(p.a,{variant:"outlined",color:"secondary",fullWidth:!0,style:{marginBottom:3},children:"Add to compare"}),Object(d.jsx)(p.a,{variant:"contained",color:"secondary",fullWidth:!0,children:"View All Options"})]})]})]})})}var f=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(2)}},paper:{width:300,height:"auto"},cardDescription:{textAlign:"center",display:"block"},descriptionTitle:{display:"block"},descriptionSubTitle:{display:"block",color:"#888",fontSize:10},descriptionNote:{color:"#888"},infoSection:{padding:5}}})),x=n(160),O=n(167),y=n(170),v=n(163),w=n(169);function N(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{width:"100%",src:e.image,alt:"ad_image"}),Object(d.jsx)("p",{style:{fontSize:15,color:"#999",textAlign:"center"},children:e.description})]})}var S=n(166),C=n(172),I=n(168),k=n(164),T=n(71),D=n.n(T),L=n(72),B=n.n(L),A=n(73),R=n.n(A),V=n(74),W=n.n(V);function _(e){var t=P();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(x.a,{container:!0,spacing:0,children:[Object(d.jsx)(x.a,{item:!0,xs:12,sm:12,md:5,lg:3,className:t.mainLogo,children:Object(d.jsx)("img",{alt:"main_logo",src:"https://raw.githubusercontent.com/seanjin17/lucidity-coding1/main/public/logo_main.png",width:"200px"})}),Object(d.jsx)(x.a,{item:!0,xs:12,sm:6,md:4,lg:6,className:t.searchbar,children:Object(d.jsx)(C.a,{onChange:e.searchByName,fullWidth:!0,label:"Search"})}),Object(d.jsxs)(x.a,{item:!0,xs:12,sm:6,md:3,lg:3,className:t.headerIcons,children:[Object(d.jsx)(D.a,{className:"headerIcon"}),Object(d.jsx)(B.a,{className:"headerIcon"}),Object(d.jsx)(R.a,{className:"headerIcon"}),Object(d.jsx)(W.a,{className:"headerIcon"})]})]}),Object(d.jsx)("div",{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(I.a,{value:e.tabValue,onChange:e.handleTabChange,indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"on",children:e.navigationBarData.map((function(e){return Object(d.jsx)(k.a,{label:e})}))})})}),Object(d.jsxs)("div",{className:t.sectionInfo,children:[Object(d.jsx)("h1",{children:e.navigationBarData[e.tabValue]}),Object(d.jsxs)("p",{children:["Displaying"," ",e.productsData[e.navigationBarData[e.tabValue]].length," ","products"]})]})]})}var P=Object(l.a)((function(e){return{mainLogo:{display:"flex",justifyContent:"center"},searchBar:{display:"flex",justifyContent:"center",padding:20,margin:"10",cursor:"pointer"},headerIcons:{display:"flex",justifyContent:"space-around",padding:20,margin:"10",cursor:"pointer"},sectionInfo:{textAlign:"center"}}})),F=n(75),z=n.n(F).a.create({baseURL:"https://run.mocky.io/v3/",timeout:6e4,headers:{"Content-Type":"application/json"}}),U=n(50),E=n(165),H=Object(l.a)((function(e){return{root:{position:"relative"},bottom:{color:e.palette.grey["light"===e.palette.type?200:700]},top:{color:"#1a90ff",animationDuration:"550ms",position:"absolute",left:0},circle:{strokeLinecap:"round"}}}));function M(e){var t=H(),n=e.size||25,a=e.thickness||2;return Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsxs)("div",{className:t.root,children:[Object(d.jsx)(E.a,Object(U.a)(Object(U.a)({variant:"determinate",className:t.bottom,size:n,thickness:a},e),{},{value:100})),Object(d.jsx)(E.a,Object(U.a)({variant:"indeterminate",disableShrink:!0,className:t.top,classes:{circle:t.circle},size:n,thickness:a},e))]})})}function q(e){return Object(d.jsxs)("div",{className:"fadeInUp",children:[Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:20},children:Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/seanjin17/lucidity-coding1/main/public/logo_main.png",alt:"mainlogo"})}),Object(d.jsx)(M,{}),Object(d.jsx)("p",{style:{textAlign:"center"},children:e.message||"Loading"})]})}function J(e){return Object(d.jsxs)("div",{className:"fadeInUp",children:[Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:20},children:Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/seanjin17/lucidity-coding1/main/public/logo_main.png",alt:"mainlogo"})})," ",Object(d.jsxs)("div",{style:{textAlign:"center"},children:[Object(d.jsx)("h2",{children:"Oops! Something went wrong"}),Object(d.jsx)("p",{style:{color:"#cc0c0c",fontSize:"medium"},children:e.error})]})]})}n(119);var G=function(){var e=c.a.useState(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],i=c.a.useState(!1),s=Object(o.a)(i,2),l=s[0],j=s[1],u=c.a.useState([]),b=Object(o.a)(u,2),p=b[0],m=b[1],f=c.a.useState(),C=Object(o.a)(f,2),I=C[0],k=C[1],T=c.a.useState([]),D=Object(o.a)(T,2),L=D[0],B=D[1],A=c.a.useState(0),R=Object(o.a)(A,2),V=R[0],W=R[1],P=c.a.useState(!1),F=Object(o.a)(P,2),U=F[0],E=F[1],H=c.a.useState(0),M=Object(o.a)(H,2),G=M[0],K=M[1];return c.a.useEffect((function(){z({method:"post",headers:"",url:"2f721130-6c45-4937-aa1f-2e60d91db130",data:{}}).then((function(e){return e.data})).catch((function(e){throw e})).then((function(e){var t=Object.keys(e);m(t),k(e),B(e[t[V]])})).catch((function(e){return j(e.message||e)})).finally((function(){a(!1)}))}),[a,B,k,m,W]),n?Object(d.jsx)(q,{}):l?Object(d.jsx)(J,{error:l}):Object(d.jsxs)(S.a,{maxWidth:"lg",children:[Object(d.jsx)(_,{searchByName:function(e){e.target.value||B(I[p[V]]),B(p.reduce((function(t,n){var a=I[n].reduce((function(t,n){return n.Name.toLowerCase().includes(e.target.value.toLowerCase())&&t.push(n),t}),[]);return console.log(t),t=[].concat(Object(r.a)(t),Object(r.a)(a))}),[]))},navigationBarData:p,productsData:I,currentViewItems:L,setCurrentViewItems:B,tabValue:V,setTabValue:W,handleTabChange:function(e,t){W(t),K(0),E(!0),setTimeout((function(){B(I[p[t]]),E(!1)}),1e3)}}),Object(d.jsx)("div",{className:"fadeInUp",children:Object(d.jsx)(N,{image:"https://www.ulcdn.net/media/collections/listing/Safe_Delivery_Ver3_Dlp.jpg?1618831957",description:"Everyone wants one, but only a few can pull it off. It\u2019s not even a question of price, as our recliner designs suit a wide range of budgets. It\u2019s just that creating a business class look in the living room is not everyone\u2019s cup of tea"})}),Object(d.jsx)(x.a,{container:!0,spacing:3,style:{display:"flex",justifyContent:"flex-end"},className:"fadeInUp",children:Object(d.jsx)(x.a,{item:!0,children:Object(d.jsxs)(v.a,{style:{width:180},children:[Object(d.jsx)(w.a,{id:"demo-simple-select-label",children:"Sort By"}),Object(d.jsxs)(O.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:G,onChange:function(e){K(e.target.value),function(e){var t=L;switch(e){case 0:B(I[p[V]]);break;case 1:(t=h(L,"Price")).splice(0,1,t.pop()),B(t);break;case 2:(t=h(L,"Price")).reverse(),t.push(t.shift()),B(t);break;case 3:t=h(L,"Rating"),B(t);break;case 4:(t=h(L,"Rating")).reverse(),B(t);break;default:;}}(e.target.value)},fullWidth:!0,children:[Object(d.jsx)(y.a,{value:0,children:"None"}),Object(d.jsx)(y.a,{value:1,children:"Price - Low to High"}),Object(d.jsx)(y.a,{value:2,children:"Price - High to Low"}),Object(d.jsx)(y.a,{value:3,children:"Rating - Low to High"}),Object(d.jsx)(y.a,{value:4,children:"Rating - High to Low"})]})]})})}),U?Object(d.jsx)(q,{}):Object(d.jsx)("div",{container:!0,spacing:2,className:"fadeInUp",style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:L.map((function(e){return Object(d.jsx)("div",{item:!0,xs:12,sm:6,md:4,lg:3,xl:2,children:Object(d.jsx)(g,{title:e.Name,subTitle:e.Description,price:e.Price,subNote:e.Emi,image:e.Image,rating:e.Rating})})}))})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))},Q=n(76),X=n(77),Y=n(79),Z=n(78),$=function(e){Object(Y.a)(n,e);var t=Object(Z.a)(n);function n(e){var a;return Object(Q.a)(this,n),(a=t.call(this,e)).state={error:null,errorInfo:null},a}return Object(X.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:20},children:Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/seanjin17/lucidity-coding1/main/public/logo_main.png",alt:"mainlogo"})}),Object(d.jsx)("h2",{style:{textAlign:"center"},children:"Oops! Something Went Wrong"}),Object(d.jsxs)("p",{style:{textAlign:"center"},children:["If you are facing the issue frequently, Contact"," ",Object(d.jsx)("a",{href:"mailto:support@mycompany.com",children:"MyCompany Support"})," with the error message"]}),Object(d.jsxs)("details",{style:{whiteSpace:"pre-wrap",textAlign:"center"},children:[this.state.error&&this.state.error.toString(),Object(d.jsx)("br",{}),this.state.errorInfo.componentStack]})]}):this.props.children}}]),n}(c.a.Component);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)($,{children:Object(d.jsx)(G,{})})}),document.getElementById("root")),K()},95:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.8ed65c43.chunk.js.map