import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as ee}from"./ReviewStatusBadge-CWpnoox2.js";import{r as se}from"./states-FO9ywTJh.js";import{T as te,S as ae,D as re,P as oe,C as ne,a as ie}from"./blocks-CT8-rhgS.js";import{C as ce,c as de}from"./index-Bj5_oxNd.js";import"./Badge-DmcHl47n.js";import"./Icon-BvUu3QNv.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-DKjwjcR7.js";import"./index-Dg7A0w6C.js";import"./DocPage-Cvry0G_4.js";const xe={title:"Review Patterns/ReviewStatusBadge",component:ee,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(te,{}),e.jsx(ae,{}),e.jsx(re,{}),e.jsx(oe,{}),e.jsx(ne,{}),e.jsx(ce,{doc:de.ReviewStatusBadge,headingLevel:2}),e.jsx(ie,{})]}),description:{component:["Says where one extracted field stands in the review.","","**When to use**","","- On every field, always. A field with no badge is a field whose state the analyst has to work out.","- This component owns the mapping from a domain status to a tone, a glyph and a form of words, and owns nothing else. Its appearance all comes from `Badge`, so there is one badge in this system rather than two that drift.","","**What is deliberately missing**","","There is no status a model can put a field into. `Accepted` and `Edited` exist only because a person acted. Nothing in this interface reaches a verified state on confidence alone, because in this document the 0.97 field is wrong and the 0.41 field is right.","","`Not found` is dashed rather than solid, because the model finding nothing settles nothing.","","**Keyboard and screen readers**","","- Not interactive. The badge reports state; the buttons beside it change state.","- Each status carries a glyph as well as a colour, so it survives greyscale printing and colour vision deficiency.","- The wording stands alone, so a screen reader user gets the same information as a sighted one without hearing a colour name."].join(`
`)}}},argTypes:{status:{control:"select"},size:{control:"radio"},label:{control:"text"}}},o={args:{status:"unreviewed"}},n={args:{status:"accepted"}},i={args:{status:"edited"}},c={args:{status:"rejected"}},s={args:{status:"needs-evidence"}},t={args:{status:"conflict"}},a={args:{status:"missing"}},r={args:{status:"unsupported"}},d={args:{status:"failed"}},p={args:{status:"arriving"}},u={args:{status:"unreviewed"},render:()=>e.jsx("div",{className:"sb-row",children:se.map(m=>e.jsx(ee,{...m.props},m.id))})};var g,l,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: 'unreviewed'
  }
}`,...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var f,v,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: 'accepted'
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,b,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: 'edited'
  }
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,j,N;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: 'rejected'
  }
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var R,E,A,C,T;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    status: 'needs-evidence'
  }
}`,...(A=(E=s.parameters)==null?void 0:E.docs)==null?void 0:A.source},description:{story:"Net income: value 2,310, confidence 0.88, and `source: null`.",...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};var B,D,F,P,k;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    status: 'conflict'
  }
}`,...(F=(D=t.parameters)==null?void 0:D.docs)==null?void 0:F.source},description:{story:"Total debt: 21,500 and 24,750 are both in the document.",...(k=(P=t.parameters)==null?void 0:P.docs)==null?void 0:k.description}}};var O,W,_,z,G;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    status: 'missing'
  }
}`,...(_=(W=a.parameters)==null?void 0:W.docs)==null?void 0:_.source},description:{story:"Guarantor: the model found nothing, which is not the same as there being nothing.",...(G=(z=a.parameters)==null?void 0:z.docs)==null?void 0:G.description}}};var I,K,L,q,H;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: 'unsupported'
  }
}`,...(L=(K=r.parameters)==null?void 0:K.docs)==null?void 0:L.source},description:{story:"A citation exists, but it does not support the claim.",...(H=(q=r.parameters)==null?void 0:q.docs)==null?void 0:H.description}}};var J,M,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    status: 'failed'
  }
}`,...(Q=(M=d.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,V,X;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    status: 'arriving'
  }
}`,...(X=(V=p.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    status: 'unreviewed'
  },
  render: () => <div className="sb-row">
      {badgeStates.map(state => <ReviewStatusBadge key={state.id} {...state.props} />)}
    </div>
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const ye=["NotReviewed","Accepted","Edited","Rejected","NoSourceCited","Conflicting","NotFound","EvidenceDoesNotSupport","ExtractionFailed","Arriving","AllStates"];export{n as Accepted,u as AllStates,p as Arriving,t as Conflicting,i as Edited,r as EvidenceDoesNotSupport,d as ExtractionFailed,s as NoSourceCited,a as NotFound,o as NotReviewed,c as Rejected,ye as __namedExportsOrder,xe as default};
