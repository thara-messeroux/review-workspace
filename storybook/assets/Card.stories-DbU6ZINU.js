import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as A,S as D,D as F,P as R,C as E,a as P}from"./blocks-K2gf8mB6.js";import{C as _,c as H}from"./index-CkQiwGNr.js";import{C as r}from"./Card-BUmOLbgS.js";import{S as k}from"./Stack-DKUl758P.js";import{T as d}from"./Text-CpvSg0LR.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BmOWmpzr.js";import"./index-h-tAcOBk.js";import"./DocPage-Cvry0G_4.js";const a=e.jsxs(k,{gap:1,children:[e.jsx(d,{variant:"label",tone:"secondary",children:"Total debt"}),e.jsx(d,{variant:"figure",children:"21,500 thousand USD"})]}),M={title:"Components/Card",component:r,tags:["autodocs"],args:{children:a},parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx(D,{}),e.jsx(F,{}),e.jsx(R,{}),e.jsx(E,{}),e.jsx(_,{doc:H.Card,headingLevel:2}),e.jsx(P,{})]}),description:{component:["A bounded surface, with no opinion about what goes inside it.","","**How it relates to FieldCard**","","`FieldCard` is this plus everything a field review needs: a status rule, evidence, a confidence readout and a decision. That is why `FieldCard` is a review pattern and this one is a component.","","**Depth comes from the surface ladder**","","`surface` steps through the ladder in the token layer. `raised` adds one step of shadow and means above the page, not important.","","**The accent rule**","","`accent` takes a colour token name, not a colour. A card therefore cannot introduce a hue the system has not already chosen. Status reads down a long column far better from a left rule than from a badge."].join(`
`)}}},argTypes:{surface:{control:"radio"},padding:{control:"radio"}}},o={args:{surface:"surface"}},t={args:{surface:"container",bordered:!1}},c={args:{surface:"surface",raised:!0}},s={args:{surface:"surface",accent:"--color-status-conflict-outline"}},n={args:{surface:"surface"},render:()=>e.jsxs(k,{gap:4,children:[e.jsx(r,{surface:"surface",children:a}),e.jsx(r,{surface:"container",bordered:!1,children:a}),e.jsx(r,{surface:"container-low",bordered:!1,children:a}),e.jsx(r,{surface:"surface",raised:!0,children:a}),e.jsx(r,{surface:"surface",accent:"--color-status-conflict-outline",children:a})]})};var i,u,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    surface: 'surface'
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var f,p,m;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    surface: 'container',
    bordered: false
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,g,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    surface: 'surface',
    raised: true
  }
}`,...(C=(g=c.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var x,j,S,b,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    surface: 'surface',
    accent: '--color-status-conflict-outline'
  }
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source},description:{story:"Status down the leading edge, from a token rather than a colour.",...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};var y,v,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    surface: 'surface'
  },
  render: () => <Stack gap={4}>
      <Card surface="surface">{contents}</Card>
      <Card surface="container" bordered={false}>
        {contents}
      </Card>
      <Card surface="container-low" bordered={false}>
        {contents}
      </Card>
      <Card surface="surface" raised>
        {contents}
      </Card>
      <Card surface="surface" accent="--color-status-conflict-outline">
        {contents}
      </Card>
    </Stack>
}`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const N=["Surface","Container","Raised","Accented","AllSurfaces"];export{s as Accented,n as AllSurfaces,t as Container,c as Raised,o as Surface,N as __namedExportsOrder,M as default};
