(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{84:function(t,e,a){},92:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),c=a(58),i=(a(84),a(17)),r=a(43),o=a(44),d=a(29),l=a(66),j=a(65),b=a(129),u=a(63),h=a.n(u),O=a(2);function x(t){var e=t.tasks;return Object(O.jsx)("div",{className:"List",children:Object(O.jsxs)("p",{children:[Object(O.jsx)(b.a,{className:"inputbox",variant:"standard",color:"secondary",id:e.key,value:e.text,onChange:function(a){t.setUpdate(a.target.value,e.key)}}),Object(O.jsx)(h.a,{className:"deletebutton",onClick:function(){return t.delete(e.key)}})]})})}function v(t){var e=t.tasks.map((function(e){return Object(O.jsx)("div",{className:"list",children:Object(O.jsx)("p",{children:Object(O.jsx)(x,{date:t.date,tasks:e,delete:t.deleteItem,setUpdate:t.setUpdate})})},e.key)}));return Object(O.jsx)("div",{children:e})}var k=a(132),m=a(131),y=a(64),p=a.n(y),f=function(t){Object(l.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(r.a)(this,a),(s=e.call(this,t)).state={date:(new Date).toLocaleString(),array:[],task:{text:"",key:""}},s.onChange=s.onChange.bind(Object(d.a)(s)),s.onSubmit=s.onSubmit.bind(Object(d.a)(s)),s.onDelete=s.onDelete.bind(Object(d.a)(s)),s.setUpdate=s.setUpdate.bind(Object(d.a)(s)),s}return Object(o.a)(a,[{key:"onChange",value:function(t){this.setState({name:t.target.value,task:{text:t.target.value,key:Date.now()}})}},{key:"onSubmit",value:function(t){t.preventDefault();var e=this.state.task;if(""!==e.text){var a=[].concat(Object(i.a)(this.state.array),[e]);this.setState({array:a,task:{text:"",key:""}})}}},{key:"setUpdate",value:function(t,e){var a=this.state.array;a.map((function(a){a.key===e&&(a.text=t)})),this.setState({array:a})}},{key:"onDelete",value:function(t){var e=this.state.array.filter((function(e){return e.key!==t}));this.setState({array:e})}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(k.a,{children:Object(O.jsxs)(m.a,{className:"todolist",elevation:6,children:[Object(O.jsx)("h1",{className:"title",children:"Let's get this done!"}),Object(O.jsxs)("form",{id:"to-do-form",onSubmit:this.onSubmit,children:[Object(O.jsx)(b.a,{className:"inputbox",label:"Enter Task Here",variant:"standard",color:"secondary",value:this.state.task.text,onChange:this.onChange}),Object(O.jsx)("button",{className:"addbutton",children:Object(O.jsx)(p.a,{})})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"itemlist",children:Object(O.jsx)(v,{tasks:this.state.array,deleteItem:this.onDelete,setUpdate:this.setUpdate,date:this.state.date})})]})})})}}]),a}(n.a.Component);function g(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(f,{})})}var S=document.getElementById("root");Object(c.createRoot)(S).render(Object(O.jsx)(s.StrictMode,{children:Object(O.jsx)(g,{})}))}},[[92,1,2]]]);
//# sourceMappingURL=main.72e701d6.chunk.js.map