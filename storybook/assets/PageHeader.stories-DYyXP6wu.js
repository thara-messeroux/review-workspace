import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as H,S as P,D as b,P as C,C as R,a as T}from"./blocks-BJNs0V3k.js";import{C as W,c as F}from"./index-CkQiwGNr.js";import{P as O}from"./PageHeader-BcEN83SP.js";import{B as c}from"./Button-B_WwbxLw.js";import{R as D}from"./ReviewStatusBadge-CWpnoox2.js";import{p as a,k as r}from"./states-M7IUyV34.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-DKldhKtJ.js";import"./index-C9WTKRXB.js";import"./DocPage-Cvry0G_4.js";import"./Badge-DmcHl47n.js";import"./iconGlyphs-BoKXMgTm.js";const U={title:"Components/PageHeader",component:O,tags:["autodocs"],parameters:{layout:"padded",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(H,{}),e.jsx(P,{}),e.jsx(b,{}),e.jsx(C,{}),e.jsx(R,{}),e.jsx(W,{doc:F.PageHeader,headingLevel:2}),e.jsx(T,{})]}),description:{component:["Title, one line of purpose, and the actions for the whole screen.","","**Why this exists**","","Every screen in a financial product opens the same way. Writing that opening as one-off CSS in each route is how two screens end up with different heading sizes and the primary action in different corners.","","**Actions never collapse**","","On a narrow screen they wrap under the title rather than folding into a menu. The action that completes the review is not something an analyst should have to go looking for.","","**Keyboard and screen readers**","","- Renders a real heading, so the page has exactly one `h1` and a correct outline.","- `headingLevel` sets the level the document needs, never the size the title should look.","- The title wraps anywhere, because a borrower name has no spaces to break on."].join(`
`)}}}},s={args:a(r,"full")},o={args:a(r,"minimal")},n={args:a(r,"nested")},t={args:{...a(r,"full"),status:e.jsx(D,{status:"conflict"}),actions:e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"outlined",children:"Retry extraction"}),e.jsx(c,{variant:"filled",children:"Approve extraction"})]})}},i={args:{...a(r,"full"),actions:e.jsx(c,{variant:"filled",children:"Approve extraction"})},globals:{viewport:{value:"small"}}};var p,l,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: pick(pageHeaderStates, 'full')
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,u,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: pick(pageHeaderStates, 'minimal')
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: pick(pageHeaderStates, 'nested')
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,S,w,j,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...pick(pageHeaderStates, 'full'),
    status: <ReviewStatusBadge status="conflict" />,
    actions: <>
        <Button variant="outlined">Retry extraction</Button>
        <Button variant="filled">Approve extraction</Button>
      </>
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"With the one action that completes the review, and the document's status.",...(y=(j=t.parameters)==null?void 0:j.docs)==null?void 0:y.description}}};var k,B,A;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...pick(pageHeaderStates, 'full'),
    actions: <Button variant="filled">Approve extraction</Button>
  },
  globals: {
    viewport: {
      value: 'small'
    }
  }
}`,...(A=(B=i.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const X=["Full","TitleOnly","InsideAPage","WithActions","SmallViewport"];export{s as Full,n as InsideAPage,i as SmallViewport,o as TitleOnly,t as WithActions,X as __namedExportsOrder,U as default};
