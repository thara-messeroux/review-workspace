import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{T as E,S as A,D,P as F,C as R,a as T}from"./blocks-B1MI7l_n.js";import{C as N,c as W}from"./index-CkQiwGNr.js";import{P as b}from"./ProgressCard-BkH1g-92.js";import{o as r,p as a}from"./states-UEOExjgl.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-DXAvG7X9.js";import"./index-v1lYfxNf.js";import"./DocPage-Cvry0G_4.js";import"./Icon-DT3wV_QD.js";import"./iconGlyphs-DDQwSP8K.js";import"./workspaceTheme-Cn_UgpYr.js";const Q={title:"Workspace/ProgressCard",component:b,tags:["autodocs"],parameters:{docs:{page:()=>s.jsxs(s.Fragment,{children:[s.jsx(E,{}),s.jsx(A,{}),s.jsx(D,{}),s.jsx(F,{}),s.jsx(R,{}),s.jsx(N,{doc:W.ProgressCard,headingLevel:2}),s.jsx(T,{})]}),description:{component:["Two honest meters: what the machine has delivered, and what the analyst has decided.","","**Why two bars**","","A finished extraction must never read as a finished review. Each bar is a native progress element with its own accessible name."].join(`
`)}}}},t={args:a(r,"running")},o={args:a(r,"failed")},i={args:a(r,"complete")},p={args:a(r,"empty")},e={args:a(r,"running"),render:()=>s.jsx("div",{className:"sb-stack",children:r.map(n=>s.jsx(b,{...n.props},n.id))})};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: pick(progressCardStates, 'running')
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,l,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: pick(progressCardStates, 'failed')
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var C,S,h;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: pick(progressCardStates, 'complete')
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,j,y;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: pick(progressCardStates, 'empty')
}`,...(y=(j=p.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var f,k,v,w,P;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: pick(progressCardStates, 'running'),
  render: () => <div className="sb-stack">
      {progressCardStates.map(state => <ProgressCard key={state.id} {...state.props} />)}
    </div>
}`,...(v=(k=e.parameters)==null?void 0:k.docs)==null?void 0:v.source},description:{story:"Every state, from the same registry /system reads.",...(P=(w=e.parameters)==null?void 0:w.docs)==null?void 0:P.description}}};const U=["Running","Failed","Complete","Empty","AllStates"];export{e as AllStates,i as Complete,p as Empty,o as Failed,t as Running,U as __namedExportsOrder,Q as default};
