(this["webpackJsonpreact-project-2"]=this["webpackJsonpreact-project-2"]||[]).push([[0],{32:function(e,c,t){},33:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(1),n=t(18),i=t.n(n),r=t(2),l=(t(26),t(27),t(4)),o=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{id:"header",className:" align-items-center",children:Object(a.jsx)("div",{className:"container-fluid ",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-10 mx-auto",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column",children:[Object(a.jsxs)("h1",{children:[e.name,Object(a.jsx)("strong",{className:"brand-name",children:" Foodie"})]}),Object(a.jsx)("h5",{className:"",children:e.description}),Object(a.jsx)("div",{className:"mt-3",children:Object(a.jsx)(l.b,{to:e.visit,className:"btn-get-started",children:e.btname})})]}),Object(a.jsx)("div",{className:"col-lg-6 order-1 order-lg-2 header-img",children:Object(a.jsx)("img",{src:e.imgsrc,className:"img-fluid animated ",alt:"Common img"})})]})})})})})})},m=t.p+"static/media/img3.ab44028c.jpg",j=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(o,{name:"Eat Health and Fresh Food",imgsrc:m,visit:"/service",btname:"Order Now",description:"We Deliver Fast and Fresh food at Home"})})},d=t.p+"static/media/home.123713de.gif",b=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(o,{name:"We are here to serve best food",imgsrc:d,visit:"/contact",btname:"Contact Us",description:"Add Desciption"})})},x=t.p+"static/media/img2.f7b7316d.png",h=[{imgsrc:x,title:"Menu1",price:"100",menudescription:"menu 1 Description"},{imgsrc:x,title:"Menu2",price:"100",menudescription:"menu 2 Description"},{imgsrc:x,title:"Menu3",price:"100",menudescription:"menu 3 Description"},{imgsrc:x,title:"Menu4",price:"100",menudescription:"menu 4 Description"},{imgsrc:x,title:"Menu5",price:"100",menudescription:"menu 5 Description"},{imgsrc:x,title:"Menu6",price:"100",menudescription:"menu 6 Description"}],u=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"col-md-4 col-10 mx-auto",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:e.imgsrc,class:"card-img-top card-img-border",alt:"{props.title}"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("div",{class:"container",children:Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col-sm",children:Object(a.jsxs)("h5",{className:"card-title font-weight-bold ",children:[e.title," "]})}),Object(a.jsx)("div",{class:"col-sm",children:Object(a.jsxs)("h5",{className:"card-title font-weight-bold ",children:["Price : ",e.price,"rs"]})})]})}),Object(a.jsx)("p",{className:"card-text",children:e.menudescription}),Object(a.jsx)("div",{class:"container",children:Object(a.jsx)("div",{class:"row",children:Object(a.jsx)("div",{class:"col-sm",children:Object(a.jsx)(l.b,{to:"#",className:"btn btn-primary text-left-margin",children:"Add To Cart"})})})})]})]})})})},O=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"my-4 ",children:Object(a.jsx)("h1",{className:"text-center",children:"Menu"})}),Object(a.jsx)("div",{className:"container-fluid mb-5",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-10 mx-auto",children:Object(a.jsx)("div",{className:"row gy-4 mt-5 mb-5",children:h.map((function(e,c){return Object(a.jsx)(u,{Key:c,imgsrc:e.imgsrc,title:e.title,price:e.price,menudescription:e.menudescription})}))})})})})]})},p=t(10),v=t(15),g=t(20),N=function(){var e=Object(s.useState)({fullname:"",phone:"",email:"",message:""}),c=Object(g.a)(e,2),t=c[0],n=c[1],i=function(e){var c=e.target,t=c.name,a=c.value;n((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(p.a)({},t,a))}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"my-5",children:Object(a.jsx)("h1",{className:"text-center",children:"Contact US"})}),Object(a.jsx)("div",{className:"container contact_div",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-6 col-10 mx-auto",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert("My name is ".concat(t.fullname,". My Mobile number is  ").concat(t.phone," and email is ").concat(t.email," message ").concat(t.message))},children:[Object(a.jsxs)("div",{class:"mb-3",children:[Object(a.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Full Name"}),Object(a.jsx)("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",name:"fullname",value:t.fullname,onChange:i,placeholder:"Enter Your Name"})]}),Object(a.jsxs)("div",{class:"mb-3",children:[Object(a.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Phone Number"}),Object(a.jsx)("input",{type:"number",class:"form-control",id:"exampleFormControlInput1",name:"phone",value:t.phone,onChange:i,placeholder:"mobile number"})]}),Object(a.jsxs)("div",{class:"mb-3",children:[Object(a.jsx)("label",{for:"exampleFormControlInput1",class:"form-label",children:"Email address"}),Object(a.jsx)("input",{type:"email",class:"form-control",id:"exampleFormControlInput1",name:"email",value:t.email,onChange:i,placeholder:"name@example.com"})]}),Object(a.jsxs)("div",{class:"mb-3",children:[Object(a.jsx)("label",{for:"exampleFormControlTextarea1",class:"form-label",children:"Message"}),Object(a.jsx)("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3",name:"message",value:t.message,onChange:i})]}),Object(a.jsx)("div",{class:"col-12",children:Object(a.jsx)("button",{class:"btn btn-primary",type:"submit",children:"Submit form"})})]})})})})]})},f=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container-fluid nav_bg",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-10 mx-auto",children:Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Foodie"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(a.jsxs)("ul",{className:"navbar-nav ml-auto mb-2 mb-lg-0",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{exact:!0,activeClassName:"menu_active",className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{exact:!0,activeClassName:"menu_active",className:"nav-link",to:"/service",children:"Menu"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{exact:!0,activeClassName:"menu_active",className:"nav-link",to:"/about",children:"About"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{exact:!0,activeClassName:"menu_active",className:"nav-link",to:"/contact",children:"Contact"})})]})})]})})})})})})},F=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("footer",{className:"w-100 bg-light text-center",children:Object(a.jsx)("p",{children:"@2020 Foodie. All Right Reserved "})})})},C=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{}),Object(a.jsxs)(r.d,{children:[Object(a.jsx)(r.b,{exact:!0,path:"/",component:j}),Object(a.jsx)(r.b,{exact:!0,path:"/about",component:b}),Object(a.jsx)(r.b,{exact:!0,path:"/service",component:O}),Object(a.jsx)(r.b,{exact:!0,path:"/contact",component:N}),Object(a.jsx)(r.a,{to:"/"}),Object(a.jsx)(j,{})]}),Object(a.jsx)(F,{})]})};t(32);i.a.render(Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(C,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.50c47645.chunk.js.map