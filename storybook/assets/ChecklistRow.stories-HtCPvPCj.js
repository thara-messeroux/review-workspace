import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as A,S as D,D as E,P as N,C as L,a as T}from"./blocks-DLers9VV.js";import{C as O,c as P}from"./index-BzcST_NV.js";import{C as b}from"./ChecklistRow-1EsDCXMm.js";import{d as s,p as a}from"./states-Cnrww0m1.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-DzokLKBJ.js";import"./index-CynNmSm9.js";import"./DocPage-Cvry0G_4.js";import"./StatusIcon-Dd9-TSPJ.js";import"./Icon-B0XNGALn.js";import"./workspaceTheme-Cn_UgpYr.js";import"./StatusMarker-BsWhBjD1.js";const U={title:"Workspace/ChecklistRow",component:b,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx(D,{}),e.jsx(E,{}),e.jsx(N,{}),e.jsx(L,{}),e.jsx(O,{doc:P.ChecklistRow,headingLevel:2}),e.jsx(T,{})]}),description:{component:["One field in the review list: a status circle, the name, the value on the record, and the status word.","","**Keyboard**","","A native button. Enter and Space open the field. The selected row carries aria-current and a dark leading bar, so selection is a shape as well as a fill."].join(`
`)}}}},t={args:a(s,"arriving")},o={args:a(s,"needs-look")},c={args:a(s,"selected")},i={args:a(s,"decided")},r={args:a(s,"arriving"),render:()=>e.jsx("div",{className:"sb-stack",children:s.map(n=>e.jsx(b,{...n.props},n.id))})};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: pick(checklistRowStates, 'arriving')
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,g,k;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: pick(checklistRowStates, 'needs-look')
}`,...(k=(g=o.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var u,h,S;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: pick(checklistRowStates, 'selected')
}`,...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var w,v,x;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: pick(checklistRowStates, 'decided')
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,R,f,C,y;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: pick(checklistRowStates, 'arriving'),
  render: () => <div className="sb-stack">
      {checklistRowStates.map(state => <ChecklistRow key={state.id} {...state.props} />)}
    </div>
}`,...(f=(R=r.parameters)==null?void 0:R.docs)==null?void 0:f.source},description:{story:"Every state, from the same registry /system reads.",...(y=(C=r.parameters)==null?void 0:C.docs)==null?void 0:y.description}}};const V=["Arriving","NeedsLook","Selected","Decided","AllStates"];export{r as AllStates,t as Arriving,i as Decided,o as NeedsLook,c as Selected,V as __namedExportsOrder,U as default};
