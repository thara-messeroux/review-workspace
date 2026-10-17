import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T,S as E,D as I,P as k,C as D,a as R}from"./blocks-DMTn42y5.js";import{C as z,c as F}from"./index-BO70gx9-.js";import{M as L}from"./Menu-D7rAoSSX.js";import{I as o}from"./Icon-DGEnAJ9o.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-CQQjaxCC.js";import"./index-D9EliS6m.js";import"./DocPage-Cvry0G_4.js";const W=e.jsxs(e.Fragment,{children:[e.jsxs("a",{href:"#review","aria-current":"page",children:[e.jsx(o,{name:"document",size:"sm"})," Review"]}),e.jsxs("a",{href:"#system",children:[e.jsx(o,{name:"check",size:"sm"})," Design system"]})]}),M=e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",children:[e.jsx(o,{name:"edit",size:"sm"})," Edit this value"]}),e.jsxs("button",{type:"button",children:[e.jsx(o,{name:"arrow-right",size:"sm"})," Open source pages"]}),e.jsxs("button",{type:"button",children:[e.jsx(o,{name:"close",size:"sm"})," Reject the extraction"]})]}),K={title:"Components/Menu",component:L,tags:["autodocs"],args:{label:"Main menu",children:W},parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsx(E,{}),e.jsx(I,{}),e.jsx(k,{}),e.jsx(D,{}),e.jsx(z,{doc:F.Menu,headingLevel:2}),e.jsx(R,{})]}),description:{component:["A trigger that discloses a panel of links or actions.","","**A disclosure, not an ARIA menu**","","Built on `details` and `summary`, which already give a toggling button, a panel tied to it, and the open state exposed to assistive technology with no ARIA at all.","","The ARIA `menu` pattern captures the arrow keys and takes items out of the tab order. That is correct for an application menu bar and wrong for a short list of destinations, so it is deliberately not used here.","","**What is added on top**","","Escape closes it and returns focus to the trigger. A pointer down outside closes it. `details` has neither, and every hand-rolled version forgets both.","","**Not in this product's app bar**","","Two destinations do not need a disclosure. A button that opens a list of two hides navigation behind an extra interaction for no gain, so the AppBar shows both links instead. The component exists because a design system should document it."].join(`
`)}}},argTypes:{align:{control:"radio"}}},t={args:{label:"Document",icon:"document"}},n={args:{label:"Main menu",icon:"menu",iconOnly:!0}},r={args:{label:"More actions",icon:"more",iconOnly:!0,children:M}},s={args:{label:"Account",icon:"more",align:"end",children:M},decorators:[C=>e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(C,{})})]},a={args:{label:"Main menu",icon:"menu",iconOnly:!0},globals:{viewport:{value:"small"}}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Document',
    icon: 'document'
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,p,u,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Main menu',
    icon: 'menu',
    iconOnly: true
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"The hamburger. Click it, then press Escape.",...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var g,x,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'More actions',
    icon: 'more',
    iconOnly: true,
    children: actions
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,j,f,v,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Account',
    icon: 'more',
    align: 'end',
    children: actions
  },
  decorators: [Story => <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
        <Story />
      </div>]
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source},description:{story:"Anchored to the trailing edge, so the panel stays on screen.",...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var A,S,O;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Main menu',
    icon: 'menu',
    iconOnly: true
  },
  globals: {
    viewport: {
      value: 'small'
    }
  }
}`,...(O=(S=a.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const Q=["WithLabel","IconOnly","Overflow","EndAligned","SmallViewport"];export{s as EndAligned,n as IconOnly,r as Overflow,a as SmallViewport,t as WithLabel,Q as __namedExportsOrder,K as default};
