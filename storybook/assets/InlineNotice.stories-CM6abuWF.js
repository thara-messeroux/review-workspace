import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as R}from"./InlineNotice-CvrtZRhN.js";import{n as t,p as o}from"./states-DnbvfPut.js";import{T as V,S as W,D as _,P as q,C as B,a as K}from"./blocks-bh2-Rlt6.js";import{C as L,c as O}from"./index-eSuxGF3G.js";import"./Icon-D_Yz9bko.js";import"./iframe-BUFzX5Bd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-FfqcYz.js";import"./DocPage-Cvry0G_4.js";const $={title:"Components/Alert",component:R,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(V,{}),e.jsx(W,{}),e.jsx(_,{}),e.jsx(q,{}),e.jsx(B,{}),e.jsx(L,{doc:O.InlineNotice,headingLevel:2}),e.jsx(K,{})]}),description:{component:["A message attached to the thing it is about.","","**When to use**","","- Beside the field, section or value the message concerns, never floating elsewhere.","- For something the analyst has to act on or weigh, not for confirmation of something they just did.","","**Why it is not a toast**","","Review work is slow and interruptible. An analyst may leave a half-finished extraction to answer the phone. Nothing important is allowed to time out, so this component stays on the page until the condition that produced it is resolved.","","**Keyboard and screen readers**","","- Static by default, which is correct for a message present at load.",'- Set `live` for a notice that appears after load. `problem` then uses `role="alert"` and interrupts; the other tones use `role="status"` and wait for a pause.',"- Do not set `live` on more than a couple of notices at once. A screen reader queue of ten alerts is the same failure as ten red boxes on screen."].join(`
`)}}},argTypes:{tone:{control:"select"},live:{control:"boolean"},title:{control:"text"}}},s={args:o(t,"info")},r={args:o(t,"attention")},a={args:o(t,"problem")},n={args:o(t,"verified")},i={args:o(t,"info"),render:()=>e.jsx("div",{className:"sb-stack",children:t.map(p=>e.jsx(R,{...p.props},p.id))})},c={args:o(t,"problem"),globals:{viewport:{value:"small"}}};var m,l,d,u,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: pick(noticeStates, 'info')
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"The units problem. Every figure in this document is in thousands.",...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var g,f,S,v,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: pick(noticeStates, 'attention')
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source},description:{story:"The covenant summary cites a heading, not a claim.",...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};var x,y,j,w,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: pick(noticeStates, 'problem')
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source},description:{story:"Net income, reported as 2,310 with no source. Page 3 says 1,904.",...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var A,C,N;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: pick(noticeStates, 'verified')
}`,...(N=(C=n.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var T,I,P;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: pick(noticeStates, 'info'),
  render: () => <div className="sb-stack">
      {noticeStates.map(state => <InlineNotice key={state.id} {...state.props} />)}
    </div>
}`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var D,E,F;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: pick(noticeStates, 'problem'),
  globals: {
    viewport: {
      value: 'small'
    }
  }
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const ee=["Info","Attention","Problem","Confirmed","AllTones","SmallViewport"];export{i as AllTones,r as Attention,n as Confirmed,s as Info,a as Problem,c as SmallViewport,ee as __namedExportsOrder,$ as default};
