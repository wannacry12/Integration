(this["webpackJsonpelective-management"]=this["webpackJsonpelective-management"]||[]).push([[0],{109:function(e,t){},111:function(e,t){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(28),r=a.n(c),s=(a(76),a(8)),o=(a(77),a(22)),m=a(15),i=a(16),u=a(18),E=a(17),d=a(6),p=a(19),h=a(23),g=a.n(h),b=(a(94),a(122)),f=a(123),v=a(124),y=a(125),O=a(126),N=a(127),S=a(128),j=a(129),C=a(130),x=a(63),k=a(131),w=a(132),R=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(E.a)(t).call(this,e))).state={user_name:"",password:"",errmsg:null},a.onSubmit=a.onSubmit.bind(Object(d.a)(a)),a.onChange=a.onChange.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"UNSAFE_componentWillMount",value:function(){}},{key:"onSubmit",value:function(e){var t=this;"admin"===this.state.user_name&&"admin"===this.state.password?(localStorage.setItem("uid",this.state.user_name),localStorage.setItem("perm","admin"),this.props.history.push("/admin"),this.props.setPerm("admin"),this.props.setName("admin")):g.a.post("/Login",{rollno:this.state.user_name,pass:this.state.password}).then((function(e){console.log(e),"NO SUCH ROLL NUMBER EXISTS"===e.data?t.setState({errmsg:"No Such Roll Number Exists",user_name:"",password:""}):"WRONG PASSWORD"===e.data?t.setState({errmsg:"Wrong Password Try Again",password:""}):(t.props.setStuData(e.data),localStorage.setItem("uid",e.data.name),localStorage.setItem("perm","student"),t.props.setPerm("student"),t.props.setName(t.state.user_name),t.props.history.push("/student"))})),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"app flex-row align-items-center"},l.a.createElement(b.a,null,l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(v.a,{md:"8"},l.a.createElement(y.a,null,l.a.createElement(O.a,{className:"p-4"},l.a.createElement(N.a,null,l.a.createElement(S.a,{onSubmit:this.onSubmit},l.a.createElement("h1",null,"Login"),l.a.createElement("p",{className:"text-muted"},"Sign In to your account"),l.a.createElement(j.a,{className:"mb-3"},l.a.createElement(C.a,{addonType:"prepend"},l.a.createElement(x.a,null,l.a.createElement("i",{className:"icon-user"}))),l.a.createElement(k.a,{name:"user_name",type:"text",placeholder:"RollNo",autoComplete:"username",value:this.state.user_name,onChange:this.onChange})),l.a.createElement(j.a,{className:"mb-4"},l.a.createElement(C.a,{addonType:"prepend"},l.a.createElement(x.a,null,l.a.createElement("i",{className:"icon-lock"}))),l.a.createElement(k.a,{name:"password",type:"password",placeholder:"Password",autoComplete:"current-password",value:this.state.password,onChange:this.onChange})),l.a.createElement(f.a,null,l.a.createElement(v.a,{xs:"6"},l.a.createElement(w.a,{color:"primary",className:"px-4",disabled:0===this.state.user_name.length||0===this.state.password.length},"Login")),l.a.createElement(v.a,{xs:"6",className:"text-right"},l.a.createElement(w.a,{color:"link",className:"px-0"},"Forgot password?")))))),l.a.createElement(O.a,{className:"signc",style:{width:"44%"}},l.a.createElement(N.a,{className:"text-center"},l.a.createElement("div",null,l.a.createElement("h2",null," ",this.state.errmsg?this.state.errmsg:"Welcome")))))))))}}]),t}(n.Component),_=a(13),P=a(24),D=a(133),L=a(134),T=a(135),U=a(136),I=a(137),M=a(138),z=a(139),A=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(E.a)(t).call(this,e))).toggle=a.toggle.bind(Object(d.a)(a)),a.toggleNavbar=a.toggleNavbar.bind(Object(d.a)(a)),a.state={isOpen:!1,collapsed:!0},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(D.a,{color:"#ffffff",light:!0,expand:"md",className:"Navbar"},l.a.createElement(L.a,{style:{color:"#fff"}},"Elective Management System"),l.a.createElement(T.a,{onClick:this.toggle}),l.a.createElement(U.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(I.a,{className:"ml-auto",navbar:!0},l.a.createElement(M.a,null,l.a.createElement(z.a,{href:"/login",style:{color:"#fff"}},"login"))))))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(E.a)(t).call(this,e))).toggle=a.toggle.bind(Object(d.a)(a)),a.toggleNavbar=a.toggleNavbar.bind(Object(d.a)(a)),a.state={isOpen:!1,collapsed:!0},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(D.a,{color:"#ffffff",light:!0,expand:"md",className:"Navbar"},l.a.createElement(L.a,{style:{color:"#fff"}},"Elective Management System"),l.a.createElement(T.a,{onClick:this.toggle}),l.a.createElement(U.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(I.a,{className:"ml-auto",navbar:!0},l.a.createElement(M.a,null,l.a.createElement(z.a,{style:{color:"#fff"},href:"/logout",onClick:localStorage.clear()},"logout"))))))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(E.a)(t).call(this,e))).toggle=a.toggle.bind(Object(d.a)(a)),a.toggleNavbar=a.toggleNavbar.bind(Object(d.a)(a)),a.state={isOpen:!1,collapsed:!0},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(D.a,{color:"#ffffff",light:!0,expand:"md",className:"Navbar"},l.a.createElement(L.a,{style:{color:"#fff"}},"Elective Management System"),l.a.createElement(T.a,{onClick:this.toggle}),l.a.createElement(U.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(I.a,{className:"ml-auto",navbar:!0},l.a.createElement(M.a,null,l.a.createElement(z.a,{style:{color:"#fff"},href:"/logout",onClick:localStorage.clear()},"logout"),l.a.createElement(z.a,{style:{color:"#fff"},href:"",onClick:localStorage.clear()},"profile"))))))}}]),t}(n.Component),Y=a(39),B=a.n(Y),F=a(64),J=function(){var e=Object(F.a)(B.a.mark((function e(t,a){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.a.post("/Register",{name:t.name,rollno:t.rollno,pass:t.pass,sec:t.sec,sem:t.sem}).then((function(e){!0===e.data?(console.log("Registered"+t.name+" "+t.rollno),a("Registered"+t.name+" "+t.rollno)):!1===e.data&&(console.log("Unable to register User already exists"),a("User "+t.name+" with "+t.rollno+" already exists"))})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),$=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(E.a)(t).call(this,e))).state={name:"",rollno:"",pass:"",sec:"",sem:"",msg:""},a.sendmessage=a.sendmessage.bind(Object(d.a)(a)),a.setmessage=a.setmessage.bind(Object(d.a)(a)),a.onChange=a.onChange.bind(Object(d.a)(a)),a.onSubmit=a.onSubmit.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"sendmessage",value:function(e){console.log(e),this.setState({msg:e})}},{key:"setmessage",value:function(){return this.state.msg?l.a.createElement(x.a,null,this.state.msg):void 0}},{key:"onSubmit",value:function(e){var t={name:this.state.name,rollno:this.state.rollno,pass:this.state.pass,sec:this.state.sec,sem:this.state.sem};console.log(t),J(t,this.sendmessage),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{className:"app flex-row align-items-center"},l.a.createElement(b.a,null,l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(v.a,{md:"9",lg:"7",xl:"6"},l.a.createElement(O.a,{className:"mx-4"},l.a.createElement(N.a,{className:"p-4"},l.a.createElement(S.a,{onSubmit:this.onSubmit},l.a.createElement("h1",null,"Register"),l.a.createElement("p",{className:"text-muted"},"Create student account"),l.a.createElement(j.a,{className:"mb-3"},l.a.createElement(C.a,{addonType:"prepend"},l.a.createElement(x.a,null,"Name")),l.a.createElement(k.a,{type:"text",placeholder:"Student Name",autoComplete:"username",name:"name",value:this.state.name,onChange:this.onChange})),l.a.createElement(j.a,{className:"mb-3"},l.a.createElement(C.a,{addonType:"prepend"},l.a.createElement(x.a,null,"Reg.No")),l.a.createElement(k.a,{type:"text",placeholder:"Registration Number",autoComplete:"Registration Number",name:"rollno",value:this.state.rollno,onChange:this.onChange})),l.a.createElement(j.a,{className:"mb-3"},l.a.createElement(C.a,{addonType:"prepend"},l.a.createElement(x.a,null,"Password")),l.a.createElement(k.a,{type:"password",placeholder:"Password",autoComplete:"new-password",name:"pass",value:this.state.pass,onChange:this.onChange})),l.a.createElement(j.a,{className:"mb-4"},l.a.createElement(C.a,{addonType:"prepend"},l.a.createElement(x.a,null,"Section")),l.a.createElement(k.a,{type:"Text",placeholder:"Section",autoComplete:"section",maxLength:"1",name:"sec",pattern:"^[a-zA-Z]+$",value:this.state.sec,onChange:this.onChange})),l.a.createElement(j.a,{className:"mb-4"},l.a.createElement(C.a,{addonType:"prepend"},l.a.createElement(x.a,null,"Semester")),l.a.createElement(k.a,{type:"Number",placeholder:"Semester",autoComplete:"Semester",maxLength:"1",min:"1",max:"8",name:"sem",value:this.state.sem,onChange:this.onChange})),l.a.createElement(w.a,{color:"success",type:"submit",block:!0,disabled:0===this.state.name.length||0===this.state.rollno.length||0===this.state.pass.length||0===this.state.sec.length||0===this.state.sem.length},"Create Account"))))),this.setmessage())))}}]),t}(n.Component),G=a(140),V=a(141),X=a(142),Z=a(65),q=a.n(Z),K={margin:"5%"},Q=function(e){return l.a.createElement(b.a,{style:K},l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(v.a,{md:"4"},l.a.createElement(O.a,null,l.a.createElement(G.a,{src:q.a,alt:"Card image cap"}))),l.a.createElement(v.a,{md:"6",className:"text-center"},l.a.createElement(O.a,null,l.a.createElement(V.a,{tag:"h4"},"Details :"),l.a.createElement(N.a,null,l.a.createElement(X.a,null,"Name :",e.studata.name),l.a.createElement(X.a,null,"Roll.No: ",e.studata.rollno),l.a.createElement(X.a,null,"Section:",e.studata.section),l.a.createElement(X.a,null,"Semester:",e.studata.semester),l.a.createElement(X.a,null,"Department:",e.studata.rollno.match(/\D\D\D/g)[0].toUpperCase()))))),l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(v.a,{md:"4",sm:{size:6,order:2,offset:1}},l.a.createElement(O.a,null,l.a.createElement(V.a,{className:"text-center",tag:"h4"},"Selected Electives"),l.a.createElement(N.a,{className:"text-center"},l.a.createElement(X.a,null,"electives list placeholder"),l.a.createElement(w.a,null,"Change electives")))),l.a.createElement(v.a,{md:"4",sm:{size:6,order:2,offset:1}},l.a.createElement(O.a,null,l.a.createElement(V.a,{className:"text-center",tag:"h4"},"Electives deadline"),l.a.createElement(N.a,{className:"text-center"},l.a.createElement(X.a,null,"Date placeholder."),l.a.createElement(_.b,{to:"/list_electives"},l.a.createElement(w.a,null,"Select Electives")))))))},ee=a(151),te=a(144),ae=a(145),ne=a(146),le=a(147),ce=a(148),re=a(149),se=a(68),oe=a(143),me=a(69),ie=function(e){var t=e.buttonLabel,a=e.className,c=l.a.createRef(),r=Object(n.useState)(!1),o=Object(s.a)(r,2),m=o[0],i=o[1],u=Object(n.useState)(!1),E=Object(s.a)(u,2),d=E[0],p=E[1],h=Object(n.useState)(null),b=Object(s.a)(h,2),f=b[0],v=b[1],y=Object(n.useState)(null),O=Object(s.a)(y,2),N=O[0],j=O[1],C=Object(n.useState)(null),x=Object(s.a)(C,2),R=x[0],_=x[1],P=Object(n.useState)(null),D=Object(s.a)(P,2),L=D[0],T=D[1],U=Object(n.useState)(null),I=Object(s.a)(U,2),M=I[0],z=I[1],A=function(){return i(!m)},W=function(e){switch(e.target.name){case"semester":v(e.target.value);break;case"Capacity":j(e.target.value);break;case"option":z(e.target.value);break;case"course":T(e.target.value);break;case"course_code":_(e.target.value)}},H=function(e){var t;console.log(d),d?(t=d,g.a.post("/addElectives",{data:t}).then((function(e){Object(oe.a)("uploaded sucessfully"),console.log("uploaded sucessfully")}))):function(e){g.a.post("/addOneElective",Object(se.a)({},e)).then((function(e){Object(oe.a)("uploaded sucessfully"),console.log("uploaded sucessfully")}))}({sem:f,course_code:R,course:L,department:M}),e.preventDefault(),A()};return l.a.createElement("div",null,l.a.createElement(w.a,{onClick:A},t),l.a.createElement(ee.a,{isOpen:m,toggle:A,className:a},l.a.createElement(te.a,{toggle:A},"Upload Electives"),l.a.createElement(ae.a,null,l.a.createElement(S.a,{onSubmit:H},l.a.createElement(ne.a,null,l.a.createElement(le.a,{for:"Select Semester"},"Select Semester"),l.a.createElement(k.a,{type:"select",name:"semester",id:"Semester Select",value:f,onChange:W},l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"))),l.a.createElement(ne.a,null,l.a.createElement(le.a,{for:"Select capacity"},"Enter Capacity "),l.a.createElement(k.a,{type:"number",min:"0",max:"70",name:"Capacity",value:N,onChange:W,id:"Semester Select"})),l.a.createElement(ne.a,null,l.a.createElement(le.a,{for:"exampleText"},"Elective Course Code"),l.a.createElement(k.a,{type:"text",name:"course_code",id:"exampleText",value:R,onChange:W}),l.a.createElement(ce.a,{color:"muted"},"Elective course Code.")),l.a.createElement(ne.a,null,l.a.createElement(le.a,{for:"exampleText"},"Elective Course Title"),l.a.createElement(k.a,{type:"text",name:"course",id:"exampleText",value:L,onChange:W}),l.a.createElement(ce.a,{color:"muted"},"Elective course Title")),l.a.createElement(ne.a,null,l.a.createElement(le.a,{for:"electivefile"},"File"),l.a.createElement(me.a,{onFileLoaded:function(e){console.log("--------------------------------------------------"),console.log(e),p(e),console.log("--------------------------------------------------")},inputRef:c,onError:function(e,t,a,n){console.log(e)},configOptions:{header:!0}}),l.a.createElement(ce.a,{color:"muted"},"Upload the electives file.")),l.a.createElement(ne.a,{tag:"fieldset",name:"Department"},l.a.createElement("legend",null,"Select Department"),l.a.createElement(ne.a,{check:!0},l.a.createElement(le.a,{check:!0},l.a.createElement(k.a,{type:"radio",name:"option"}),"MECH")),l.a.createElement(ne.a,{check:!0},l.a.createElement(le.a,{check:!0},l.a.createElement(k.a,{type:"radio",name:"option",value:"CSE",onChange:W}),"CSE")),l.a.createElement(ne.a,{check:!0},l.a.createElement(le.a,{check:!0},l.a.createElement(k.a,{type:"radio",name:"option",value:"CHEM",onChange:W})," ","CHEM")),l.a.createElement(ne.a,{check:!0},l.a.createElement(le.a,{check:!0},l.a.createElement(k.a,{type:"radio",name:"option",value:"EEE",onChange:W})," ","EEE")),l.a.createElement(ne.a,{check:!0},l.a.createElement(le.a,{check:!0},l.a.createElement(k.a,{type:"radio",name:"option",value:"ECE",onChange:W})," ","ECE"))))),l.a.createElement(re.a,null,l.a.createElement(w.a,{color:"primary",type:"submit",onClick:H},"Submit"),l.a.createElement(w.a,{color:"secondary",onClick:A},"Cancel"))))},ue={margin:"5%"},Ee=function(e){return l.a.createElement(b.a,{style:ue},l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(v.a,{md:"4",sm:{size:6,order:2,offset:1}},l.a.createElement(O.a,null,l.a.createElement(V.a,{className:"text-center",tag:"h4"},"Upload elective lists"),l.a.createElement(N.a,{className:"text-center"},l.a.createElement(X.a,null,"electives list placeholder"),l.a.createElement(ie,{buttonLabel:"upload electives list "})))),l.a.createElement(v.a,{md:"4",sm:{size:6,order:2,offset:1}},l.a.createElement(O.a,null,l.a.createElement(V.a,{className:"text-center",tag:"h4"},"Register Users"),l.a.createElement(N.a,{className:"text-center"},l.a.createElement(_.b,{to:"/register"},l.a.createElement(w.a,null,"Register Students "))),l.a.createElement(N.a,{className:"text-center"},l.a.createElement(w.a,null,"Register Teachers"))))))},de=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"message"},l.a.createElement("h1",null,"403 - You Shall Not Pass"),l.a.createElement("p",null,"You haven't been authenticated yet !!!",l.a.createElement("br",null),"Maybe you have a typo in the url? Or you meant to go to a different location? Like...Login?")),l.a.createElement("p",null,l.a.createElement(_.b,{to:"/"},"Back to Home"))))},pe=a(32),he=function(e){var t=e.component,a=e.user,n=Object(pe.a)(e,["component","user"]);return l.a.createElement(P.b,Object.assign({},n,{render:function(e){return"admin"===a?l.a.createElement(t,Object.assign({},n,e)):l.a.createElement(P.a,{to:{pathname:"/Unauthorized",state:{from:e.location}}})}}))},ge=function(e){var t=e.component,a=e.studata,n=Object(pe.a)(e,["component","studata"]);return l.a.createElement(P.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(t,Object.assign({},n,e,{studata:a})):l.a.createElement(P.a,{to:{pathname:"/Unauthorized",state:{from:e.location}}})}}))},be=(a(62),function(){return l.a.createElement("div",{className:"home"},l.a.createElement("table",{align:"center"},l.a.createElement("tr",null,l.a.createElement("td",{className:"title"},l.a.createElement("p",null,"Elective Management System")),l.a.createElement("td",{className:"instructions"},l.a.createElement("h1",null,"Instructions"),l.a.createElement("p",null,"The View Electives tab will allow you to view all the available electives for the respective semester and department"),l.a.createElement("p",null,"You will be allowed to choose any three electives as your top three preference"),l.a.createElement("p",null,"You will be allowed to change preferences only one more time"),l.a.createElement("p",null,"After a particular deadline, you will not be allowed to change your preference")))))}),fe=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("table",{align:"center"},l.a.createElement("tr",null,l.a.createElement("td",{className:"title"},l.a.createElement("p",null,"Elective Management System")),l.a.createElement("td",{className:"instructions"},l.a.createElement("h1",null),l.a.createElement("h4",null,"You have been successfully logged out.")))))},ve=a(150),ye=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){!function(e,t,a){g.a.post("/student/viewElectives",{department:e,sem:t}).then((function(e){a(e.data),console.log(e)}))}(e.studata.rollno.match(/\D\D\D/g)[0].toUpperCase(),e.studata.semester,r)}),[e.studata.rollno,e.studata.semester,r]);var o=function(){return c.map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,e.course_code),l.a.createElement("td",null,e.course_name))}))};return l.a.createElement("div",{className:"table"},l.a.createElement(ve.a,{striped:!0,bordered:!0,hover:!0,className:"table-striped table-light"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Preference 1")),l.a.createElement("tr",null,l.a.createElement("th",null,"course_code "),l.a.createElement("th",null,"course "))),c?l.a.createElement("tbody",null,o()):l.a.createElement("h1",null," fetching please wait.....")),l.a.createElement(ve.a,{striped:!0,bordered:!0,hover:!0,className:"table-striped table-light"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Preference 2")),l.a.createElement("tr",null,l.a.createElement("th",null,"course_code "),l.a.createElement("th",null,"course "))),c?l.a.createElement("tbody",null,o()):l.a.createElement("h1",null," fetching please wait.....")),l.a.createElement(ve.a,{striped:!0,bordered:!0,hover:!0,className:"table-striped table-light"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Preference 3")),l.a.createElement("tr",null,l.a.createElement("th",null,"course_code "),l.a.createElement("th",null,"course "))),c?l.a.createElement("tbody",null,o()):l.a.createElement("h1",null," fetching please wait.....")))};var Oe=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),o=Object(s.a)(r,2),m=o[0],i=o[1],u=Object(n.useState)(null),E=Object(s.a)(u,2),d=(E[0],E[1]),p=function(){localStorage.clear()};return l.a.createElement(_.a,null,"admin"===a?l.a.createElement(W,null):"student"===a?l.a.createElement(H,null):l.a.createElement(A,null),l.a.createElement(P.d,null,l.a.createElement(P.b,{exact:!0,path:"/",name:"home page",render:function(e){return l.a.createElement(be,e)}}),l.a.createElement(P.b,{exact:!0,path:"/logout",name:"Lgout page",render:function(e){return l.a.createElement(fe,e)}}),l.a.createElement(ge,{exact:!0,path:"/student",name:" Student Profile Page",component:Q,studata:m,handleLogout:p,user:m}),l.a.createElement(he,{exact:!0,path:"/admin",name:" Admin Page",component:Ee,handleLogout:p,user:localStorage.getItem("uid")}),l.a.createElement(P.b,{exact:!0,path:"/login",name:"Login Page",setPerm:c,setName:d,setStuData:i,render:function(e){return l.a.createElement(R,Object.assign({},e,{setPerm:c,setStuData:i,setName:d}))}}),l.a.createElement(he,{exact:!0,path:"/register",name:" Registeration Page",component:$,handleLogout:p,user:localStorage.getItem("uid")}),l.a.createElement(ge,{exact:!0,path:"/list_electives",name:"Elective listing Page",component:ye,handleLogout:p,studata:m}),console.log(localStorage.getItem("uid")),l.a.createElement(P.b,{exact:!0,path:"/Unauthorized",component:de})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},62:function(e,t,a){},65:function(e,t,a){e.exports=a.p+"static/media/student.d424b860.jpeg"},71:function(e,t,a){e.exports=a(121)},76:function(e,t,a){},77:function(e,t,a){},94:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.72d688db.chunk.js.map