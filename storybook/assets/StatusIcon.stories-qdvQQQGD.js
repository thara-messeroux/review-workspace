import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as E,S as T,D as O,P,C as V,a as _}from"./blocks-BB_a6heV.js";import{C as F,c as L}from"./index-v6TKao5o.js";import{S as A}from"./StatusIcon-Pp5MyYA7.js";import{v as s,p as r}from"./states-FO9ywTJh.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-DTMqHnZw.js";import"./index-Cz_P9EH-.js";import"./DocPage-Cvry0G_4.js";import"./Icon-BvUu3QNv.js";import"./workspaceTheme-Cn_UgpYr.js";const X={title:"Workspace/StatusIcon",component:A,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(T,{}),e.jsx(O,{}),e.jsx(P,{}),e.jsx(V,{}),e.jsx(F,{doc:L.StatusIcon,headingLevel:2}),e.jsx(_,{})]}),description:{component:["The status glyph beside a field in a dense list. Routine states are a bare line icon; only attention and failure take a soft tint.","","**One shape per status**","","Missing evidence, a definition conflict, a pending review and a failed extraction each have their own glyph, and each repeats a status word beside it."].join(`
`)}}}},a={args:r(s,"needs-verification")},o={args:r(s,"definitions-differ")},i={args:r(s,"not-reviewed")},n={args:r(s,"reviewed")},c={args:r(s,"did-not-arrive")},t={args:r(s,"not-reviewed"),render:()=>e.jsx("div",{className:"sb-row",children:s.map(d=>e.jsx(A,{...d.props},d.id))})};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: pick(statusIconStates, 'needs-verification')
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,l,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: pick(statusIconStates, 'definitions-differ')
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var v,S,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: pick(statusIconStates, 'not-reviewed')
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var x,j,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: pick(statusIconStates, 'reviewed')
}`,...(h=(j=n.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var I,k,y;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: pick(statusIconStates, 'did-not-arrive')
}`,...(y=(k=c.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var D,N,b,R,C;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: pick(statusIconStates, 'not-reviewed'),
  render: () => <div className="sb-row">
      {statusIconStates.map(state => <StatusIcon key={state.id} {...state.props} />)}
    </div>
}`,...(b=(N=t.parameters)==null?void 0:N.docs)==null?void 0:b.source},description:{story:"Every state, from the same registry /system reads.",...(C=(R=t.parameters)==null?void 0:R.docs)==null?void 0:C.description}}};const Y=["NeedsVerification","DefinitionsDiffer","NotReviewed","Reviewed","DidNotArrive","AllStates"];export{t as AllStates,o as DefinitionsDiffer,c as DidNotArrive,a as NeedsVerification,i as NotReviewed,n as Reviewed,Y as __namedExportsOrder,X as default};
