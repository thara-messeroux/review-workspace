import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as k,S as A,D as F,P as G,C as P,a as D}from"./blocks-CTqxKTuL.js";import{C as E,c as N}from"./index-BO70gx9-.js";import{G as O}from"./Grid-CLmUmzyU.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-Dk45V63F.js";import"./index-n5eOZfwQ.js";import"./DocPage-Cvry0G_4.js";const t=C=>C.map(i=>e.jsx("span",{className:"sb-block",children:i},i)),H={title:"Components/Grid",component:O,tags:["autodocs"],args:{children:t(["One","Two","Three","Four"])},parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsx(A,{}),e.jsx(F,{}),e.jsx(G,{}),e.jsx(P,{}),e.jsx(E,{doc:N.Grid,headingLevel:2}),e.jsx(D,{})]}),description:{component:["The three column compositions this product uses.","","**Why three and not twelve**","","A twelve column system would let a screen be laid out a thousand ways, which is the same as having no system. These three are the ones the design system names.","","**The fold is decided here**","","`sidebar` is one column until 64rem. `pair` is one column until 48rem. `auto` fits as many equal columns as the width allows. None of it is discovered at the width where it breaks.","","**The overflow this prevents**","","A grid child defaults to `min-width: auto`, so it refuses to shrink below its own content and pushes the row wider than the page. Every composition here clamps it. That bug has reached 390px twice."].join(`
`)}}},argTypes:{layout:{control:"radio"}}},a={args:{layout:"auto"}},s={args:{layout:"sidebar",children:t(["Sidebar","The fields being reviewed"])}},r={args:{layout:"pair",children:t(["21,500 long-term only","24,750 including current"])}},o={args:{layout:"sidebar",children:t(["Sidebar","Fields"])},globals:{viewport:{value:"small"}}};var n,d,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    layout: 'auto'
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,p,h,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    layout: 'sidebar',
    children: cells(['Sidebar', 'The fields being reviewed'])
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"The review screen: a sidebar beside the work.",...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.description}}};var g,w,b,y,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    layout: 'pair',
    children: cells(['21,500 long-term only', '24,750 including current'])
  }
}`,...(b=(w=r.parameters)==null?void 0:w.docs)==null?void 0:b.source},description:{story:"Two readings of the same field, side by side.",...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var S,v,T,x,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    layout: 'sidebar',
    children: cells(['Sidebar', 'Fields'])
  },
  globals: {
    viewport: {
      value: 'small'
    }
  }
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source},description:{story:"The fold, at the width where it happens.",...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.description}}};const I=["Auto","Sidebar","Pair","SmallViewport"];export{a as Auto,r as Pair,s as Sidebar,o as SmallViewport,I as __namedExportsOrder,H as default};
