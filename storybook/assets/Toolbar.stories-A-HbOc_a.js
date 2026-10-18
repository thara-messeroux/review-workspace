import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as b,S as v,D as f,P as j,C as w,a as y}from"./blocks-DLers9VV.js";import{C as S,c as T}from"./index-BzcST_NV.js";import{T as z}from"./Toolbar-CMu2dQ8Y.js";import{B as r}from"./Button-B_WwbxLw.js";import{I as o}from"./Icon-B0XNGALn.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-DzokLKBJ.js";import"./index-CynNmSm9.js";import"./DocPage-Cvry0G_4.js";const C=e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"tonal",size:"sm",children:"Start extraction"}),e.jsx(r,{variant:"outlined",size:"sm",children:"Retry from the failure"}),e.jsxs(r,{variant:"text",size:"sm",children:[e.jsx(o,{name:"search",size:"sm"})," Find a field"]}),e.jsxs(r,{variant:"text",size:"sm",children:[e.jsx(o,{name:"document",size:"sm"})," Source pages"]})]}),V={title:"Components/Toolbar",component:z,tags:["autodocs"],args:{label:"Review actions",children:C},parameters:{layout:"fullscreen",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{}),e.jsx(v,{}),e.jsx(f,{}),e.jsx(j,{}),e.jsx(w,{}),e.jsx(S,{doc:T.Toolbar,headingLevel:2}),e.jsx(y,{})]}),description:{component:["A labelled row of task actions.","","**Where this comes from**","","The strip every Fidelity screen carries under its app bar. Actions an analyst takes repeatedly belong in one fixed place, rather than scattered down the page next to whatever prompted them.","","**It wraps, it does not scroll**","","A horizontally scrolling toolbar hides actions behind a gesture, and an action that has scrolled out of sight is an action that is not there.","","**Not the primary action**","","The action that completes the review lives in `PageHeader`, where there is exactly one of it. This row is for the things done many times on the way there.","","**Keyboard and screen readers**","",'- `role="group"` with a required `label`, so the buttons are announced as belonging to something.',"- Every action stays in the tab order. No roving tabindex, which suits a handful of buttons better than a managed one."].join(`
`)}}},argTypes:{variant:{control:"radio"}}},t={args:{variant:"bar"}},s={args:{variant:"inline"}},a={args:{variant:"bar"},globals:{viewport:{value:"small"}}};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'bar'
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,m,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'inline'
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,h,g,u,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'bar'
  },
  globals: {
    viewport: {
      value: 'small'
    }
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:"At phone width the row wraps. Nothing is hidden and nothing scrolls.",...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};const _=["Bar","Inline","SmallViewport"];export{t as Bar,s as Inline,a as SmallViewport,_ as __namedExportsOrder,V as default};
