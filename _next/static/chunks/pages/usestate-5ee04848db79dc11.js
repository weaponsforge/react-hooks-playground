(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[448],{6343:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/usestate",function(){return t(7706)}])},8312:function(n,e,t){"use strict";t.d(e,{Z:function(){return x}});var r=t(5893),s=t(5697),i=t.n(s),d=t(9008),o=t.n(d);function c(){return(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"React Hooks Playground"}),(0,r.jsx)("meta",{name:"description",content:"React Hooks Playground"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}function l(n){let{children:e}=n;return(0,r.jsxs)("div",{style:{height:"100vh",width:"100%"},children:[(0,r.jsx)(c,{}),e]})}l.propTypes={children:i().node};var x=l},5205:function(n,e,t){"use strict";var r=t(5893),s=t(5697),i=t.n(s),d=t(6442),o=t.n(d);function c(n){let{children:e}=n;return(0,r.jsx)("div",{className:o().card,children:e})}c.propTypes={children:i().node},e.Z=c},7706:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var r=t(5893),s=t(7294),i=t(5205),d=t(8312),o=t(5697),c=t.n(o);function l(n){let{todos:e,deleteTodo:t}=n;return(0,r.jsx)("ul",{style:{marginTop:"24px"},children:e.map((n,e)=>(0,r.jsxs)("li",{children:[(0,r.jsxs)("span",{children:["id: ",n.id,", ",n.text]}),(0,r.jsx)("span",{children:(0,r.jsx)("button",{onClick:()=>t(n.id),children:"[ x ]"})})]},e))})}l.propTypes={todos:c().array,deleteTodo:c().func};var x=function(){let[n,e]=(0,s.useState)([]),t=()=>{let t=[...n];t.push({id:Math.random().toString(36).substring(2,8),text:"Hi, wooorld!!"}),e(t)},i=t=>{let r=n.filter(n=>n.id!==t);e(r)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:t,children:"Create Todo"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("ul",{style:{marginTop:"24px"},children:n.map((n,e)=>(0,r.jsxs)("li",{children:[(0,r.jsxs)("span",{children:["id: ",n.id,", ",n.text]}),(0,r.jsx)("span",{children:(0,r.jsx)("button",{onClick:()=>i(n.id),children:"[ x ]"})})]},e))})]})},a=function(){let[n,e]=(0,s.useState)([]),t=()=>{let t=[...n];t.push({id:Math.random().toString(36).substring(2,8),text:"Hello, wooorld!!"}),e(t)},o=t=>{let r=n.filter(n=>n.id!==t);e(r)};return(0,r.jsxs)(d.Z,{children:[(0,r.jsx)("h2",{children:"useState"}),(0,r.jsx)("p",{children:" Testing page re-renders and local state set by useState rendering from inside a deeply-nested component."}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{onClick:t,children:"Create Todo"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"ToDo list state passed from props"}),(0,r.jsx)("br",{}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(l,{todos:n,addTodo:t,deleteTodo:o})})})})})})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"ToDo list state isolated on an inner component"}),(0,r.jsx)("br",{}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsx)(x,{})})})})})})})]})},u=function(){return(0,r.jsx)(a,{})}},6442:function(n){n.exports={card:"Card_card__FECKw"}},9008:function(n,e,t){n.exports=t(2636)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=6343)}),_N_E=n.O()}]);