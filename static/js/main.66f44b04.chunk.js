(this["webpackJsonphw10-1-edit"]=this["webpackJsonphw10-1-edit"]||[]).push([[0],{22:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(6),a=t.n(r),i=(t(22),t(2)),o="ADD_SERVICE",u="REMOVE_SERVICE",l="EDIT_SERVICE",s="CANCEL_SERVICE",j="CHANGE_SERVICE_FIELD",d=function(e,n){return{type:j,payload:{name:e,value:n}}},b=function(e,n,t){return{type:o,payload:{id:e,name:n,price:t}}},p=function(e){return{type:u,payload:{id:e}}},O=function(){return{type:s}},h=function(e,n,t){return{type:l,payload:{id:e,name:n,price:t}}},v=t(1);var m=function(){var e=Object(i.d)((function(e){return e.serviceAdd})),n=Object(i.c)(),t=Object(c.useCallback)((function(e){var t=e.target,c=t.name,r=t.value;n(d(c,r))}),[n]),r=Object(c.useCallback)((function(t){t.preventDefault(),n(b(e.id,e.name,e.price))}),[n,e.id,e.name,e.price]),a=Object(c.useCallback)((function(e){e.preventDefault(),n(O())}),[n]);return Object(v.jsxs)("form",{onSubmit:r,children:[Object(v.jsx)("input",{name:"name",onChange:t,value:e.name}),Object(v.jsx)("input",{name:"price",onChange:t,value:e.price}),Object(v.jsx)("button",{type:"submit",children:"Save"}),Object(v.jsx)("button",{onClick:a,children:"Cancel"})]})};var f=function(){var e=Object(i.d)((function(e){return e.serviceList})),n=Object(i.c)(),t=Object(c.useCallback)((function(e){n(p(e))}),[n]),r=Object(c.useCallback)((function(e,t,c){n(h(e,t,c))}),[n]);return Object(v.jsx)("ul",{children:e.map((function(e){return Object(v.jsxs)("li",{children:[e.name," ",e.price,Object(v.jsx)("button",{onClick:function(){return r(e.id,e.name,e.price)},children:Object(v.jsx)("i",{className:"edit icon"})}),Object(v.jsx)("button",{onClick:function(){return t(e.id)},children:Object(v.jsx)("i",{className:"trash alternate icon"})})]},e.id)}))})},C=t(7),x=t(8),E=t(11),y=t(10),g=function(e){Object(E.a)(t,e);var n=Object(y.a)(t);function t(){var e;Object(C.a)(this,t);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).handleChange=function(n){var t=n.target,c=t.name,r=t.value;e.props.onChange(c,r)},e.handleSubmit=function(n){n.preventDefault(),e.props.onSave(e.props.item.id,e.props.item.name,e.props.item.price)},e.handleCancel=function(n){n.preventDefault(),e.props.onCancel()},e}return Object(x.a)(t,[{key:"render",value:function(){var e=this.props.item;return e?Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsx)("input",{name:"name",onChange:this.handleChange,value:e.name}),Object(v.jsx)("input",{name:"price",onChange:this.handleChange,value:e.price}),Object(v.jsx)("button",{type:"submit",children:"Save"}),Object(v.jsx)("button",{onClick:this.handleCancel,children:"Cancel"})]}):null}}]),t}(c.Component),S=Object(i.b)((function(e){return{item:e.serviceAdd}}),(function(e,n){return{onChange:function(n,t){return e(d(n,t))},onSave:function(n,t,c){return e(b(n,t,c))},onCancel:function(){return e(O())}}}))(g),w=function(e){Object(E.a)(t,e);var n=Object(y.a)(t);function t(){var e;Object(C.a)(this,t);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).handleRemove=function(n){e.props.removeService(n)},e.handleEdit=function(n,t,c){e.props.editService(n,t,c)},e}return Object(x.a)(t,[{key:"render",value:function(){var e=this,n=this.props.items;return Object(v.jsx)("ul",{children:n&&n.map((function(n){return Object(v.jsxs)("li",{children:[n.name," ",n.price,Object(v.jsx)("button",{onClick:function(){return e.handleEdit(n.id,n.name,n.price)},children:Object(v.jsx)("i",{className:"edit icon"})}),Object(v.jsx)("button",{onClick:function(){return e.handleRemove(n.id)},children:Object(v.jsx)("i",{className:"trash alternate icon"})})]},n.id)}))})}}]),t}(c.Component),_=Object(i.b)((function(e){return{items:e.serviceList}}),(function(e,n){return{editService:function(n,t,c){return e(h(n,t,c))},removeService:function(n){return e(p(n))}}}))(w);var k=function(){return Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(m,{}),Object(v.jsx)(f,{}),Object(v.jsx)("hr",{}),Object(v.jsx)(S,{}),Object(v.jsx)(_,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=t(5),N=t(17),I=t(4),R=[{id:Object(I.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0441\u0442\u0435\u043a\u043b\u0430",price:21e3},{id:Object(I.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0434\u0438\u0441\u043f\u043b\u0435\u044f",price:25e3},{id:Object(I.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0430\u043a\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0430",price:4e3},{id:Object(I.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\u0430",price:2500}];var A=t(9),V=t(3),L={id:null,name:"",price:""};var T=Object(D.b)({serviceList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o:var t=n.payload,c=t.name,r=t.price;return[].concat(Object(N.a)(e),[{id:Object(I.a)(),name:c,price:Number(r)}]);case u:var a=n.payload.id;return e.filter((function(e){return e.id!==a}));default:return e}},serviceAdd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case j:var t=n.payload,c=t.name,r=t.value;return Object(V.a)(Object(V.a)({},e),{},Object(A.a)({},c,r));case o:case s:return Object(V.a)({},L);case l:var a=n.payload,i=a.id,d=a.name,b=a.price;return Object(V.a)(Object(V.a)({},e),{},{id:i,name:d,price:b});case u:var p=n.payload.id;return e.id===p?Object(V.a)({},L):e;default:return e}}}),X=Object(D.c)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(v.jsx)(i.a,{store:X,children:Object(v.jsx)(k,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.66f44b04.chunk.js.map