import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as V}from"./ReviewProgress-mBDbrZfk.js";import{r,p as s}from"./states-Bct9GgRd.js";import{T as _,S as K,D as L,P as W,C as q,a as z}from"./blocks-K2gf8mB6.js";import{C as B,c as G}from"./index-CkQiwGNr.js";import"./iframe-BmOWmpzr.js";import"./preload-helper-Dp1pzeXC.js";import"./Progress-DLQ8YmYX.js";import"./Icon-BjzFe5Z-.js";import"./index-h-tAcOBk.js";import"./DocPage-Cvry0G_4.js";const se={title:"Review Patterns/ReviewProgress",component:V,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(_,{}),e.jsx(K,{}),e.jsx(L,{}),e.jsx(W,{}),e.jsx(q,{}),e.jsx(B,{doc:G.ReviewProgress,headingLevel:2}),e.jsx(z,{})]}),description:{component:["Reports how far the extraction got, and separately how far the analyst got.","","**The rule this component exists to enforce**","","Two counts, never merged into one.","","- `arrived` is how much the machine has done.","- `reviewed` is how much a person has done.","","Only the human count gets a bar. The machine count is reported as a sentence, so the two can never be mistaken for one another at a glance. A single combined bar would let a finished extraction read as a finished review, which is the precise confusion this screen exists to prevent.","","**When to use**","","- Once, at the top of the review screen.","- The outstanding-count line stays visible until every field has a decision, and the approve action stays disabled while it does.","","**Keyboard and screen readers**","","- Composed from `Progress`, so the bar is the native `<progress>` element with a real label.",'- The phase sentence uses `role="status"`, so a change is announced at the next pause rather than interrupting.',"- A failed job names how many fields never arrived, because a missing field is a gap in the data rather than an empty value in the document."].join(`
`)}}},argTypes:{total:{control:{type:"number"}},arrived:{control:{type:"number"}},reviewed:{control:{type:"number"}},phase:{control:"select"}}},o={args:s(r,"idle")},a={args:s(r,"streaming")},i={args:s(r,"partial-review")},t={args:s(r,"failed")},n={args:s(r,"complete")},c={args:s(r,"idle"),render:()=>e.jsx("div",{className:"sb-stack",children:r.map(d=>e.jsx(V,{...d.props},d.id))})},p={args:s(r,"failed"),globals:{viewport:{value:"small"}}};var l,m,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: pick(progressStates, 'idle')
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,h,v,w,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: pick(progressStates, 'streaming')
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"Four fields in, none reviewed. The two counts are visibly different things.",...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.description}}};var f,y,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: pick(progressStates, 'partial-review')
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,j,k,P,R;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: pick(progressStates, 'failed')
}`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source},description:{story:"Seven arrived, three never will.",...(R=(P=t.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var T,C,F;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: pick(progressStates, 'complete')
}`,...(F=(C=n.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var A,D,O;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: pick(progressStates, 'idle'),
  render: () => <div className="sb-stack">
      {progressStates.map(state => <ReviewProgress key={state.id} {...state.props} />)}
    </div>
}`,...(O=(D=c.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var E,I,N;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: pick(progressStates, 'failed'),
  globals: {
    viewport: {
      value: 'small'
    }
  }
}`,...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const ae=["Idle","Streaming","PartlyReviewed","FailedPartway","FullyReviewed","AllStates","SmallViewport"];export{c as AllStates,t as FailedPartway,n as FullyReviewed,o as Idle,i as PartlyReviewed,p as SmallViewport,a as Streaming,ae as __namedExportsOrder,se as default};
