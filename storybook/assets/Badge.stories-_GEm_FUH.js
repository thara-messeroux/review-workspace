import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as O}from"./Badge-DmcHl47n.js";import{p as s,b as a}from"./states-DnbvfPut.js";import{T as H,S as J,D as M,P as Q,C as V,a as X}from"./blocks-bh2-Rlt6.js";import{C as Y,c as Z}from"./index-eSuxGF3G.js";import"./Icon-D_Yz9bko.js";import"./iframe-BUFzX5Bd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-FfqcYz.js";import"./DocPage-Cvry0G_4.js";const de={title:"Components/Badge",component:O,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(H,{}),e.jsx(J,{}),e.jsx(M,{}),e.jsx(Q,{}),e.jsx(V,{}),e.jsx(Y,{doc:Z.Badge,headingLevel:2}),e.jsx(X,{})]}),description:{component:["A small, non-interactive label that carries a status or a category next to the thing it describes.","","**When to use**","","- Next to a value, a row or a heading, to say what state it is in.","- Never on its own as the only explanation of something.","- For review status specifically, use `ReviewStatusBadge`, which maps a domain status onto this component. Do not hand-pick a tone for a review status.","","**Tones**","","Tones are named for the role they map to, not for a hue, so changing what `success` looks like is a token change rather than a component change. Every tone pairs a container fill with its own `on-` text colour, so no combination can fall below contrast.","","**Keyboard and screen readers**","","- Not focusable and not interactive, which is correct: it is a label, not a control.","- The glyph is `aria-hidden`, because the text already says the same thing. Its job is to make the badge readable in greyscale and with colour vision deficiency.","- Never rely on the tone alone to carry meaning. Pass text that stands on its own."].join(`
`)}}},argTypes:{tone:{control:"select"},size:{control:"radio"},dashed:{control:"boolean"},glyph:{control:"text"}}},r={args:s(a,"neutral")},t={args:s(a,"info")},o={args:s(a,"success")},n={args:s(a,"warning")},c={args:s(a,"danger")},i={args:s(a,"accent")},d={args:s(a,"outline"),parameters:{docs:{description:{story:'A dashed outline reads as an open question rather than a settled result. Used for "not found", where the model finding nothing settles nothing.'}}}},p={args:s(a,"with-glyph")},l={args:s(a,"small")},m={args:s(a,"neutral"),render:()=>e.jsx("div",{className:"sb-row",children:a.map(g=>e.jsx(O,{...g.props},g.id))})};var u,h,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: pick(badgeToneStates, 'neutral')
}`,...(S=(h=r.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,f,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: pick(badgeToneStates, 'info')
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,x,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: pick(badgeToneStates, 'success')
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var k,j,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: pick(badgeToneStates, 'warning')
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var D,N,A;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: pick(badgeToneStates, 'danger')
}`,...(A=(N=c.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var B,C,W;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: pick(badgeToneStates, 'accent')
}`,...(W=(C=i.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var E,I,P;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: pick(badgeToneStates, 'outline'),
  parameters: {
    docs: {
      description: {
        story: 'A dashed outline reads as an open question rather than a settled result. Used for "not found", where the model finding nothing settles nothing.'
      }
    }
  }
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var q,F,G;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: pick(badgeToneStates, 'with-glyph')
}`,...(G=(F=p.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var R,U,_;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: pick(badgeToneStates, 'small')
}`,...(_=(U=l.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var z,K,L;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: pick(badgeToneStates, 'neutral'),
  render: () => <div className="sb-row">
      {badgeToneStates.map(state => <Badge key={state.id} {...state.props} />)}
    </div>
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const pe=["Neutral","Info","Success","Warning","Danger","Accent","Dashed","WithGlyph","Small","AllTones"];export{i as Accent,m as AllTones,c as Danger,d as Dashed,t as Info,r as Neutral,l as Small,o as Success,n as Warning,p as WithGlyph,pe as __namedExportsOrder,de as default};
