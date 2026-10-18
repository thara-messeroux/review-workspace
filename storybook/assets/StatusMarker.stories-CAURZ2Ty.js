import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as N,S as A,D,P as R,C as T,a as E}from"./blocks-CTqxKTuL.js";import{C as L,c as P}from"./index-BO70gx9-.js";import{S as C}from"./StatusMarker-Bi6xHa6p.js";import{v as s,p as a}from"./states-CPmU5Uv3.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-Dk45V63F.js";import"./index-n5eOZfwQ.js";import"./DocPage-Cvry0G_4.js";import"./Icon-DGEnAJ9o.js";import"./workspaceTheme-Cn_UgpYr.js";const K={title:"Workspace/StatusMarker",component:C,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(A,{}),e.jsx(D,{}),e.jsx(R,{}),e.jsx(T,{}),e.jsx(L,{doc:P.StatusMarker,headingLevel:2}),e.jsx(E,{})]}),description:{component:["The circle beside a field: empty until a person acts, filled once they have. A machine never fills it.","","**Colour repeats a word**","","The marker is hidden from assistive technology beside its status word. Standing alone, it takes a spoken label."].join(`
`)}}}},t={args:a(s,"not-reviewed")},o={args:a(s,"needs-look")},i={args:a(s,"decided")},c={args:a(s,"review-again")},r={args:a(s,"not-reviewed"),render:()=>e.jsx("div",{className:"sb-row",children:s.map(n=>e.jsx(C,{...n.props},n.id))})};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: pick(statusMarkerStates, 'not-reviewed')
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: pick(statusMarkerStates, 'needs-look')
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var k,S,v;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: pick(statusMarkerStates, 'decided')
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var w,x,j;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: pick(statusMarkerStates, 'review-again')
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var f,h,M,y,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: pick(statusMarkerStates, 'not-reviewed'),
  render: () => <div className="sb-row">
      {statusMarkerStates.map(state => <StatusMarker key={state.id} {...state.props} />)}
    </div>
}`,...(M=(h=r.parameters)==null?void 0:h.docs)==null?void 0:M.source},description:{story:"Every state, from the same registry /system reads.",...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};const Q=["NotReviewed","NeedsLook","Decided","ReviewAgain","AllStates"];export{r as AllStates,i as Decided,o as NeedsLook,t as NotReviewed,c as ReviewAgain,Q as __namedExportsOrder,K as default};
