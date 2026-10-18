import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as E,S as T,D as F,P as L,C as O,a as P}from"./blocks-DErN8iyn.js";import{C as V,c as _}from"./index-Sx3XmE5z.js";import{S as R}from"./StatusIcon-D0VoE8sP.js";import{v as s,p as r}from"./states-BckLFzd8.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-DnalP7Lt.js";import"./index-CxcfZQJ_.js";import"./DocPage-Cvry0G_4.js";import"./Icon-cry8kyEW.js";import"./workspaceTheme-Cn_UgpYr.js";const X={title:"Workspace/StatusIcon",component:R,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(T,{}),e.jsx(F,{}),e.jsx(L,{}),e.jsx(O,{}),e.jsx(V,{doc:_.StatusIcon,headingLevel:2}),e.jsx(P,{})]}),description:{component:["The status glyph beside a field in a dense list. A Lucide outline in every state, with no box behind it. Neutral by default; teal when reviewed, red when the extraction failed, amber only for Flagged and a figure to recalculate.","","**One shape per status**","","Missing evidence, a definition conflict, a pending review and a failed extraction each have their own glyph, and each repeats a status word beside it."].join(`
`)}}}},a={args:r(s,"needs-verification")},o={args:r(s,"definitions-differ")},i={args:r(s,"not-reviewed")},n={args:r(s,"reviewed")},c={args:r(s,"did-not-arrive")},t={args:r(s,"not-reviewed"),render:()=>e.jsx("div",{className:"sb-row",children:s.map(d=>e.jsx(R,{...d.props},d.id))})};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: pick(statusIconStates, 'needs-verification')
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,f,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: pick(statusIconStates, 'definitions-differ')
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,S,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: pick(statusIconStates, 'not-reviewed')
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var h,x,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: pick(statusIconStates, 'reviewed')
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var I,y,b;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: pick(statusIconStates, 'did-not-arrive')
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var k,D,N,A,C;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: pick(statusIconStates, 'not-reviewed'),
  render: () => <div className="sb-row">
      {statusIconStates.map(state => <StatusIcon key={state.id} {...state.props} />)}
    </div>
}`,...(N=(D=t.parameters)==null?void 0:D.docs)==null?void 0:N.source},description:{story:"Every state, from the same registry /system reads.",...(C=(A=t.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};const Y=["NeedsVerification","DefinitionsDiffer","NotReviewed","Reviewed","DidNotArrive","AllStates"];export{t as AllStates,o as DefinitionsDiffer,c as DidNotArrive,a as NeedsVerification,i as NotReviewed,n as Reviewed,Y as __namedExportsOrder,X as default};
