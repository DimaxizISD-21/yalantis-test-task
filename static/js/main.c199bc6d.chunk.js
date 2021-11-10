(this["webpackJsonpyalantis-test-task"]=this["webpackJsonpyalantis-test-task"]||[]).push([[0],{62:function(e,t,a){"use strict";a.r(t);var n,r=a(11),s=a(5),c=a(8),i=a(14),o=a.n(i),l=a(26),p=a(27),d=a(28),m=a.n(d),j=new function e(){Object(p.a)(this,e),this.getEmployees=function(){return m.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return e.data}))}},b=Object(c.b)("employees/getEmployees",Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.getEmployees(),e.next=3,t;case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))),y=Object(c.c)({name:"employees",initialState:{employees:[],selectedEmployees:[],error:"",status:""},reducers:{addEmployee:function(e,t){e.selectedEmployees.push(t.payload),localStorage.setItem("selectedEmployees",JSON.stringify(e.selectedEmployees))},removeEmployee:function(e,t){e.selectedEmployees=e.selectedEmployees.filter((function(e){return!e.id.includes(t.payload)})),localStorage.setItem("selectedEmployees",JSON.stringify(e.selectedEmployees))}},extraReducers:function(e){e.addCase(b.pending,(function(e){e.status="loading"})),e.addCase(b.fulfilled,(function(e,t){var a=t.payload;e.status="resolved",e.employees=a,e.selectedEmployees=JSON.parse(localStorage.getItem("selectedEmployees")||"[]")})),e.addCase(b.rejected,(function(e){e.status="rejected",e.error="Failed load data"}))}}),u=y.actions,O=u.addEmployee,f=u.removeEmployee,h=y.reducer,x=Object(c.a)({reducer:{employees:h}}),v=a(2),g=a(3),E=Object(g.a)(n||(n=Object(v.a)(['\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \n      -apple-system,BlinkMacSystemFont,\n      "Segoe UI",\n      "Roboto", \n      sans-serif;\n  }\n'])));E.displayName="GlobalStyles";var N,S,I,M,k,B,L,W=a(0),w=function(){return Object(s.b)()},C=s.c,F=a(32),J=g.b.div(N||(N=Object(v.a)([""])));J.displayName="EmployeeItemWrapper";var Y=Object(g.b)("h3")(S||(S=Object(v.a)(["\n  color: ",";\n"])),(function(e){return e.active?"#0d6efd;":"#000;"}));Y.displayName="EmployeeName";var T=g.b.div(I||(I=Object(v.a)([""])));T.displayName="EmployeeBtnGroup";var A=g.b.div(M||(M=Object(v.a)([""])));A.displayName="EmployeeNotActiveWrapper";var G=g.b.div(k||(k=Object(v.a)([""])));G.displayName="EmployeeActiveWrapper";var R=g.b.input(B||(B=Object(v.a)(["\n  cursor: pointer;\n"])));R.displayName="EmployeeInput";var z=g.b.label(L||(L=Object(v.a)(["\n  margin-left: 10px;\n  cursor: pointer;\n"])));z.displayName="EmployeeLabel";var D,U=a(1),H=function(e){var t=e.employee,a=Object(W.useState)(!1),n=Object(F.a)(a,2),r=n[0],s=n[1],c=w(),i=function(e){s(!r),r?(c(f(t.id)),localStorage.setItem(t.id,e.target.value)):(c(O(t)),localStorage.setItem(t.id,e.target.value))};return Object(W.useEffect)((function(){var e=localStorage.getItem("".concat(t.id));e&&s(JSON.parse(e))}),[t.id]),Object(U.jsxs)(J,{children:[Object(U.jsxs)(Y,{active:r,children:[t.firstName," ",t.lastName]}),Object(U.jsxs)(T,{children:[Object(U.jsxs)(A,{children:[Object(U.jsx)(R,{type:"radio",id:"".concat(t.id,"-not-active"),name:t.firstName,value:"false",checked:!r,onChange:i}),Object(U.jsx)(z,{htmlFor:"".concat(t.id,"-not-active"),children:"not active"})]}),Object(U.jsxs)(G,{children:[Object(U.jsx)(R,{type:"radio",id:"".concat(t.id,"-active"),name:t.firstName,value:"true",checked:r,onChange:i}),Object(U.jsx)(z,{htmlFor:"".concat(t.id,"-active"),children:"active"})]})]})]})},K=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],P=g.b.div(D||(D=Object(v.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 200px);\n  gap: 1rem;\n  border-right: 2px solid #000;\n  justify-content: center;\n"])));P.displayName="EmployeesListWrapper";var Q,V=function(e){var t=e.char,a=e.employees;return Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{children:t}),a.length>0?a.map((function(e){return Object(U.jsx)(H,{employee:e},e.id)})):"No employees"]})},X=function(e){var t=e.employees;return Object(U.jsx)(U.Fragment,{children:K.map((function(e,a){return Object(U.jsx)(V,{char:e,employees:t.filter((function(t){return t.firstName[0]===e}))},a)}))})},Z=function(e){var t=e.employees;return Object(U.jsx)(P,{children:Object(U.jsx)(X,{employees:t})})},q=a(7),$=a.n(q),_=g.b.li(Q||(Q=Object(v.a)(["\n  margin: 5px 0;\n  font-weight: 700;\n  font-size: 17px;\n"])));_.displayName="BirthdayItemWrapper";var ee,te,ae=function(e){var t=e.employee,a="".concat(t.firstName," ").concat(t.lastName),n="".concat($()(t.dob).format("D MMMM, YYYY")," year");return Object(U.jsxs)(_,{children:[a," - ",n]})},ne=g.b.div(ee||(ee=Object(v.a)(["\n  display: grid;\n  grid-template-rows: repeat(1, 1fr);\n  gap: 1rem;\n  border-top: 2px solid #000;\n  margin: 0 70px;\n  padding: 15px 0;\n"])));ne.displayName="BirthdayListWrapper";var re=g.b.h3(te||(te=Object(v.a)([""])));re.displayName="BirthdayListTitle";var se,ce=function(e){var t=e.month,a=e.employees.sort((function(e,t){return e.lastName.localeCompare(t.lastName)}));return Object(U.jsxs)("div",{children:[Object(U.jsx)("h2",{children:t}),a.length>0?a.map((function(e){return Object(U.jsx)(ae,{employee:e},e.id)})):"No employees"]})},ie=function(e){var t=e.employees,a=$.a.months(),n=$()().month(),r=a.concat(a.slice(0,n)).slice(-12);return Object(U.jsx)(U.Fragment,{children:r.map((function(e,a){return Object(U.jsx)(ce,{month:e,employees:t.filter((function(t){return $()(t.dob).format("MMMM")===e}))},a)}))})},oe=function(e){var t=e.selectedEmployees;return Object(U.jsx)(ne,{children:t.length>0?Object(U.jsx)(ie,{employees:t}):Object(U.jsx)(re,{children:"Employees List is empty"})})},le=g.b.h2(se||(se=Object(v.a)(["\n  text-align: center;\n  margin-top: 20px;\n"])));le.displayName="LoaderText";var pe,de=function(){return Object(U.jsx)(le,{children:"Loading..."})},me=g.b.h2(pe||(pe=Object(v.a)(["\n  text-align: center;\n  margin-top: 20px;\n"])));me.displayName="ErrorMessage";var je,be,ye,ue,Oe=function(e){var t=e.message;return Object(U.jsx)(me,{children:t})},fe=g.b.div(je||(je=Object(v.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 0 30px;\n  margin: 50px 0;\n"])));fe.displayName="EmployeesWrapper";var he=g.b.div(be||(be=Object(v.a)([""])));he.displayName="EmployeesBox",g.b.div(ye||(ye=Object(v.a)([""]))).displayName="EmployeesBirthday";var xe=g.b.h2(ue||(ue=Object(v.a)(["\n  text-align: center;\n  margin-bottom: 25px;\n"])));xe.displayName="EmployeesTitle";var ve=function(){var e=w(),t=C((function(e){return e.employees})),a=t.status,n=t.error,r=t.employees,s=t.selectedEmployees;return Object(W.useEffect)((function(){e(b())}),[e]),"loading"===a?Object(U.jsx)(de,{}):n?Object(U.jsx)(Oe,{message:n}):Object(U.jsxs)(fe,{children:[Object(U.jsxs)(he,{children:[Object(U.jsx)(xe,{children:"Employees"}),Object(U.jsx)(Z,{employees:r})]}),Object(U.jsxs)(he,{children:[Object(U.jsx)(xe,{children:"Employees birthday"}),Object(U.jsx)(oe,{selectedEmployees:s})]})]})};Object(r.render)(Object(U.jsxs)(s.a,{store:x,children:[Object(U.jsx)(E,{}),Object(U.jsx)(ve,{})]}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.c199bc6d.chunk.js.map