(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={contactsForm:"ContactsForm_contactsForm__DtyLu",formLabel:"ContactsForm_formLabel__3y6pF"}},34:function(t,e,n){t.exports={contactItem:"ContactList_contactItem__3XEOO"}},40:function(t,e,n){},41:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(16),o=n.n(r),s=(n(40),n(8)),u=n(9),i=n(11),b=n(10),l=(n(41),n(3)),j=n(6),f=n(7),d=n.n(f),O=n(19),h=n(13),p=n.n(h),m=n(2),C=Object(m.b)("contacts/fetchContactsRequest"),v=Object(m.b)("contacts/fetchContactsSuccess"),x=Object(m.b)("contacts/fetchContactsError"),g=Object(m.b)("contacts/addContactRequest"),y=Object(m.b)("contacts/addContactSuccess"),L=Object(m.b)("contacts/addContactError"),k=Object(m.b)("contacts/deleteContactRequest"),w=Object(m.b)("contacts/deleteContactSuccess"),F=Object(m.b)("contacts/deleteContactError"),S=Object(m.b)("contact/changeFilter");p.a.defaults.baseURL="http://localhost:4040";var _,N,D={addContact:function(t,e){return function(){var n=Object(O.a)(d.a.mark((function n(c){var a,r,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={name:t,number:e},c(g()),n.prev=2,n.next=5,p.a.post("/contacts",a);case 5:r=n.sent,o=r.data,c(y(o)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),c(L(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(O.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(k()),e.prev=1,e.next=4,p.a.delete("/contacts/".concat(t));case 4:n(w(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(F(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},fetchContacts:function(){return function(){var t=Object(O.a)(d.a.mark((function t(e){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(C()),t.prev=1,t.next=4,p.a.get("/contacts");case 4:n=t.sent,c=n.data,e(v(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(x(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}},E=n(17),A=function(t){return t.contacts.filter},I=function(t){return t.contacts.contacts},R={getLoading:function(t){return t.contacts.loading},getFilter:A,getVisibleContacts:Object(E.a)([I,A],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLocaleLowerCase())}))})),getAllContacts:I},q=n(18),J=n(5),M=Object(m.c)([],(_={},Object(l.a)(_,v,(function(t,e){return e.payload})),Object(l.a)(_,y,(function(t,e){var n=e.payload;return[].concat(Object(q.a)(t),[n])})),Object(l.a)(_,w,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),_)),P=Object(m.c)("",Object(l.a)({},S,(function(t,e){return e.payload}))),T=Object(m.c)(!1,(N={},Object(l.a)(N,C,(function(){return!0})),Object(l.a)(N,v,(function(){return!1})),Object(l.a)(N,x,(function(){return!1})),Object(l.a)(N,g,(function(){return!0})),Object(l.a)(N,y,(function(){return!1})),Object(l.a)(N,L,(function(){return!1})),Object(l.a)(N,k,(function(){return!0})),Object(l.a)(N,w,(function(){return!1})),Object(l.a)(N,F,(function(){return!1})),N)),V=(Object(m.c)(null,{}),Object(J.c)({contacts:M,filter:P,loading:T})),B=n(14),U=n.n(B),X=n(12),z=n.n(X),G=n(1),H=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(l.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number,r=t.props,o=r.contacts,s=r.addContact;c&&(o.some((function(t){return t.name.toLowerCase()===c.toLowerCase()}))?alert("".concat(c," is already in contacts")):(s(c,a),t.reset()))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(G.jsxs)("form",{onSubmit:this.handleSubmit,className:z.a.contactsForm,children:[Object(G.jsx)("label",{htmlFor:U.a.generate(),className:z.a.formLabel,children:"Name"}),Object(G.jsx)("input",{className:z.a.formLabel,id:U.a.generate(),type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(G.jsx)("label",{htmlFor:U.a.generate(),className:z.a.formLabel,children:"Number"}),Object(G.jsx)("input",{className:z.a.formLabel,id:U.a.generate(),type:"tel",name:"number",value:this.state.number,onChange:this.handleChange}),Object(G.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),K={addContact:D.addContact},Q=Object(j.b)((function(t){return{contacts:R.getAllContacts(t)}}),K)(H),W=n(34),Y=n.n(W),Z=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onDeleteContact;return console.log(e),Object(G.jsx)(G.Fragment,{children:Object(G.jsx)("ul",{children:e&&e.map((function(t){var e=t.name,c=t.id,a=t.number;return Object(G.jsxs)("li",{className:Y.a.contactItem,children:[Object(G.jsxs)("p",{children:[Object(G.jsxs)("span",{children:[e,":"]})," ",a]}),Object(G.jsx)("button",{type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})})}}]),n}(c.Component),$=Object(j.b)((function(t){return{contacts:R.getVisibleContacts(t),isLoadingContacts:R.getLoading(t)}}),(function(t){return{onDeleteContact:function(e){return t(D.deleteContact(e))},fetchContacts:function(){return t(D.fetchContacts())}}}))(Z),tt=function(t){var e=t.value,n=t.onChange;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("p",{children:"Find contacts by name"}),Object(G.jsx)("label",{htmlFor:"",children:Object(G.jsx)("input",{type:"text",value:e,onChange:n})})]})};tt.defaultProps={value:""};var et=Object(j.b)((function(t){return{value:R.getFilter(t)}}),(function(t){return{onChange:function(e){return t(S(e.target.value))}}}))(tt),nt=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("h1",{children:"Phonebook"}),Object(G.jsx)(Q,{}),Object(G.jsx)("h2",{children:"Contacts"}),Object(G.jsx)(et,{}),Object(G.jsx)($,{})]})}}]),n}(c.Component),ct=n(35),at=n.n(ct),rt=[].concat(Object(q.a)(Object(m.d)()),[at.a]),ot=Object(m.a)({reducer:{contacts:V},middleware:rt,devTools:!1});n(75);o.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(j.a,{store:ot,children:Object(G.jsx)(nt,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.ba1fc780.chunk.js.map