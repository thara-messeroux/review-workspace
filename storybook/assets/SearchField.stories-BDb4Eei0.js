import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as E,S as A,D as N,P as O,C as M,a as P}from"./blocks-K2gf8mB6.js";import{C as V,c as W}from"./index-CkQiwGNr.js";import{S as _}from"./SearchField-GWx8urJr.js";import{p as s,u as a}from"./states-Bct9GgRd.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BmOWmpzr.js";import"./index-h-tAcOBk.js";import"./DocPage-Cvry0G_4.js";import"./Icon-BjzFe5Z-.js";import"./IconButton-BMt3PVrl.js";const U={title:"Components/SearchField",component:_,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(A,{}),e.jsx(N,{}),e.jsx(O,{}),e.jsx(M,{}),e.jsx(V,{doc:W.SearchField,headingLevel:2}),e.jsx(P,{})]}),description:{component:["A search input, optionally collapsed to an icon until it is needed.","","**Built on the native element**","","`input type=\"search\"` gives the right mobile keyboard, the browser's history and the correct semantics. The clear button is rendered here because the engine's own one is invisible in several browsers.","","**Not for this product's review screen**","","Ten fields in payload order do not need searching. `FieldFilter` answers the question an analyst actually has, which is which fields were flagged. This component is in the system because a system should document it, and its spec says so plainly.","","**Keyboard and screen readers**","","- A real `<label>`, visually hidden but present. A placeholder is never the name: it vanishes on the first keystroke.","- Escape clears the field, and collapses it and returns focus to the trigger when `collapsible`.",'- `resultCount` is an `<output>` with `aria-live="polite"`, so a changing count never interrupts typing.'].join(`
`)}}}},t={args:s(a,"open")},r={args:s(a,"collapsible")},o={args:s(a,"with-count")},i={args:s(a,"no-matches")},n={args:s(a,"disabled")},c={args:s(a,"open"),globals:{viewport:{value:"small"}}};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: pick(searchFieldStates, 'open')
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,h,u,g,S;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: pick(searchFieldStates, 'collapsible')
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:"Click it. Escape collapses it again and focus returns to the icon.",...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.description}}};var b,y,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: pick(searchFieldStates, 'with-count')
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var v,f,F;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: pick(searchFieldStates, 'no-matches')
}`,...(F=(f=i.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var x,C,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: pick(searchFieldStates, 'disabled')
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var k,D,T;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: pick(searchFieldStates, 'open'),
  globals: {
    viewport: {
      value: 'small'
    }
  }
}`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const X=["Open","Collapsed","WithCount","NoMatches","Disabled","SmallViewport"];export{r as Collapsed,n as Disabled,i as NoMatches,t as Open,c as SmallViewport,o as WithCount,X as __namedExportsOrder,U as default};
