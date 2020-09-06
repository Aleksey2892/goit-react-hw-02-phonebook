(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(n,t,e){n.exports=e(26)},25:function(n,t,e){},26:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(12),c=e.n(o),i=e(3),l=e(16),u=e(4),m=e(5),s=e(8),d=e(7),p=e(1),f=e(2);function b(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return b=function(){return n},n}function h(){var n=Object(p.a)(["\n  margin-bottom: 20px;\n  text-align: center;\n\n  &::placeholder {\n    font-size: 14px;\n  }\n"]);return h=function(){return n},n}function v(){var n=Object(p.a)(["\n  margin-bottom: 5px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return v=function(){return n},n}function g(){var n=Object(p.a)(["\n  padding-left: 20px;\n"]);return g=function(){return n},n}function x(){var n=Object(p.a)(["\n  min-width: 60px;\n  margin-left: 10px;\n  background: transparent;\n  cursor: pointer;\n  border: 2px solid palevioletred;\n  border-radius: 3px;\n  font-size: 14px;\n  color: palevioletred;\n  outline: none;\n  transition: all 0.2s;\n\n  &:hover {\n    background-color: palevioletred;\n    color: white;\n  }\n"]);return x=function(){return n},n}function C(){var n=Object(p.a)(["\n  width: 150px;\n  display: block;\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 14px;\n  transition: all, 0.2s;\n  outline: none;\n\n  &:hover {\n    background-color: palevioletred;\n    color: white;\n  }\n"]);return C=function(){return n},n}function O(){var n=Object(p.a)(["\n  margin-bottom: 20px;\n  padding: 10px;\n  max-width: 500px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  border: 1px solid;\n"]);return O=function(){return n},n}var j={Form:f.a.form(O()),Button:f.a.button(C()),BtnRemove:f.a.button(x()),Ul:f.a.ul(g()),liItem:f.a.li(v()),Input:f.a.input(h()),Label:f.a.label(b())},E={name:"",number:""},w=function(n){Object(s.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))).state=E,n.resetState=function(){n.setState(E)},n.handleChange=function(t){var e=t.target,a=e.name,r=e.value;n.setState(Object(i.a)({},a,r))},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,r=e.number;if(a&&r){var o={name:a,number:r};n.props.onAddContact(o),n.resetState()}},n}return Object(m.a)(e,[{key:"render",value:function(){var n=this.state,t=n.name,e=n.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.Form,{onSubmit:this.handleSubmit},r.a.createElement(j.Label,null,"Name",r.a.createElement(j.Input,{type:"text",placeholder:"\u0421ontact name",name:"name",value:t,onChange:this.handleChange})),r.a.createElement(j.Label,null,"Number",r.a.createElement(j.Input,{type:"number",placeholder:"\u0421ontact number",name:"number",value:e,onChange:this.handleChange})),r.a.createElement(j.Button,{type:"submit"},"Add contact")))}}]),e}(a.Component);function y(){var n=Object(p.a)(["\n  margin-bottom: 20px;\n  text-align: center;\n\n  &::placeholder {\n    font-size: 14px;\n  }\n"]);return y=function(){return n},n}var S=f.a.input(y()),k=function(n){var t=n.filter,e=n.onChange;return r.a.createElement("div",null,r.a.createElement("p",null,"Find contacts by name"),r.a.createElement(S,{type:"text",placeholder:"Filter",name:"filter",value:t,onChange:e}))},F=function(n){var t=n.isShowContacts,e=n.contacts,a=n.onRemoveContact;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(j.Ul,null,e.map((function(n){var t=n.id,e=n.name,o=n.number;return r.a.createElement(j.liItem,{key:t},e,": ",o,r.a.createElement(j.BtnRemove,{type:"button",onClick:function(){return a(t)}},"Delete"))}))):r.a.createElement("p",null,"No contacts in data :("))},A=e(28);function I(){var n=Object(p.a)([""]);return I=function(){return n},n}function L(){var n=Object(p.a)(["\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: bold;\n"]);return L=function(){return n},n}function R(){var n=Object(p.a)(["\n  margin: 0 auto;\n  padding: 10px 10px;\n  max-width: 500px;\n"]);return R=function(){return n},n}var z=f.a.div(R()),N=f.a.h1(L()),B=Object(f.a)(N)(I()),D=function(n){Object(s.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.handleAddContact=function(t){var e=t.name,a=t.number;n.state.contacts.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e.toUpperCase()," is already in contacts")):n.setState((function(n){return{contacts:[].concat(Object(l.a)(n.contacts),[{name:e,number:a,id:Object(A.a)()}])}}))},n.handleRemoveContact=function(t){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==t}))}}))},n.handleFilter=function(t){var e=t.target,a=e.value,r=e.name;n.setState(Object(i.a)({},r,a))},n.getFilterContacts=function(){var t=n.state,e=t.contacts,a=t.filter;return e.filter((function(n){return n.name.toLowerCase().includes(a.toLowerCase())}))},n}return Object(m.a)(e,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts");n&&this.setState({contacts:JSON.parse(n)})}},{key:"componentDidUpdate",value:function(n,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var n=this.state,t=n.contacts,e=n.filter,a=t.length>1,o=t.length>0,c=this.getFilterContacts();return r.a.createElement(z,null,r.a.createElement(N,null,"Phonebook"),r.a.createElement(w,{onAddContact:this.handleAddContact}),r.a.createElement(B,null,"Contacts"),a&&r.a.createElement(k,{filter:e,onChange:this.handleFilter}),r.a.createElement(F,{isShowContacts:o,contacts:c,onRemoveContact:this.handleRemoveContact}))}}]),e}(a.Component);e(24),e(25);c.a.render(r.a.createElement(D,null),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.52b99493.chunk.js.map