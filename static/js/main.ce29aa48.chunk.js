(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={form:"ContactForm_form__YrcwH",label:"ContactForm_label__1cCmR",input:"ContactForm_input__2QmHF",button:"ContactForm_button__YYnAy"}},,,,,,,,,,,function(t,e,n){t.exports={ul:"ContactList_ul__YXreg",liItem:"ContactList_liItem__3HhEM",btnRemove:"ContactList_btnRemove__w8l_L"}},function(t,e,n){t.exports={interfaceBox:"App_interfaceBox__Djhow",titleApp:"App_titleApp__CaNdP",titleContacts:"App_titleContacts__3cBL8"}},,,function(t,e,n){t.exports={filterBox:"Filter_filterBox__ntwBf",inputFilter:"Filter_inputFilter__Ad9cj"}},,function(t,e,n){t.exports={enter:"fadeContacts_enter__3GaB3",enterActive:"fadeContacts_enterActive__AzRo2",exit:"fadeContacts_exit__tqkRd",exitActive:"fadeContacts_exitActive__3pMQA"}},function(t,e,n){t.exports={notification:"Notification_notification__13YAo"}},,,,function(t,e,n){t.exports=n(33)},,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(5),i=n.n(c),r=n(2),s=n(20),l=n(15),m=n(7),u=n(8),f=n(11),p=n(10),d=n(36),h=n(35),b=n(1),_=n.n(b),C={name:"",number:""},v=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state=C,t.resetState=function(){t.setState(C)},t.handleChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(r.a)({},a,o))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,o=n.number;if(a&&o){var c={name:a,number:o};t.props.onAddContact(c),t.resetState()}},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:_.a.form,onSubmit:this.handleSubmit},o.a.createElement("label",{className:_.a.label},"Name",o.a.createElement("input",{className:_.a.input,type:"text",placeholder:"\u0421ontact name",name:"name",value:e,onChange:this.handleChange})),o.a.createElement("label",{className:_.a.label},"Number",o.a.createElement("input",{className:_.a.input,type:"number",placeholder:"\u0421ontact number",name:"number",value:n,onChange:this.handleChange})),o.a.createElement("button",{className:_.a.button,type:"submit"},"Add contact")))}}]),n}(a.Component),g=n(16),E=n.n(g),N=function(t){var e=t.filter,n=t.onChange;return o.a.createElement("div",{className:E.a.filterBox},o.a.createElement("p",null,"Find contacts by name"),o.a.createElement("input",{className:E.a.inputFilter,type:"text",placeholder:"Filter",name:"filter",value:e,onChange:n}))},S=n(37),A=n(12),x=n.n(A),w=n(18),y=n.n(w),F=function(t){var e=t.isShowContacts,n=t.contacts,a=t.onRemoveContact;return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.a,{in:e.toString(),component:"ul",className:x.a.ul},n.map((function(t){var e=t.id,n=t.name,c=t.number;return o.a.createElement(h.a,{key:e,timeout:250,classNames:y.a},o.a.createElement("li",{className:x.a.liItem},o.a.createElement("p",null,n,": ",c),o.a.createElement("button",{className:x.a.btnRemove,type:"button",onClick:function(){return a(e)}},"Delete")))}))),!e&&o.a.createElement("p",null,"No contacts in data :("))},O=n(19),j=n.n(O);function k(t){var e=t.contact,n=t.onClick;return o.a.createElement("div",{onClick:n,className:j.a.notification},e&&"".concat(e," is already in contacts"),!e&&"Close")}var R=n(13),B=n.n(R),I=(n(30),{name:"",timerId:null,isShowMessage:!1}),L=function(t){Object(f.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",message:{name:"",timerId:null,isShowMessage:!1}},t.handleAddContact=function(e){var n=e.name,a=e.number;t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?function(){var e=setTimeout((function(){return t.setState({message:Object(l.a)({},I)})}),5e3);t.setState({message:{name:n.toUpperCase(),timerId:e,isShowMessage:!0}})}():t.setState((function(t){return{contacts:[{name:n,number:a,id:Object(d.a)()}].concat(Object(s.a)(t.contacts))}}))},t.handleRemoveContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilter=function(e){var n=e.target,a=n.value,o=n.name;t.setState(Object(r.a)({},o,a))},t.getFilterContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.handleNotification=function(){var e=t.state.message.timerId;clearTimeout(e),t.setState({message:Object(l.a)({},I)})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=t.message,c=e.length>1,i=e.length>0,r=this.getFilterContacts(),s=a.isShowMessage,l=a.name;return o.a.createElement("div",{className:B.a.interfaceBox},o.a.createElement(h.a,{in:!0,appear:!0,timeout:500,classNames:"title"},o.a.createElement("h1",{className:B.a.titleApp},"Phonebook")),o.a.createElement(h.a,{in:s,timeout:250,classNames:"notification",unmountOnExit:!0},o.a.createElement(k,{contact:l,onClick:this.handleNotification})),o.a.createElement(v,{onAddContact:this.handleAddContact}),o.a.createElement("h2",{className:B.a.titleContacts},"Contacts"),o.a.createElement(h.a,{in:c,timeout:250,classNames:"filter",unmountOnExit:!0},o.a.createElement(N,{filter:n,onChange:this.handleFilter})),o.a.createElement(F,{isShowContacts:i,contacts:r,onRemoveContact:this.handleRemoveContact}))}}]),n}(a.Component);n(31),n(32);i.a.render(o.a.createElement(L,null),document.querySelector("#root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.ce29aa48.chunk.js.map