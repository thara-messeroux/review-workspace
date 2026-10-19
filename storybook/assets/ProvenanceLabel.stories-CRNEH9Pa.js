import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as C,S as P,D,P as E,C as T,a as N}from"./blocks-K2gf8mB6.js";import{C as O,c as _}from"./index-CkQiwGNr.js";import{P as A}from"./ProvenanceLabel-5OWKdPyu.js";import{p as r,q as a}from"./states-Bct9GgRd.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-BmOWmpzr.js";import"./index-h-tAcOBk.js";import"./DocPage-Cvry0G_4.js";import"./Icon-BjzFe5Z-.js";import"./workspaceTheme-Cn_UgpYr.js";const M={title:"Workspace/ProvenanceLabel",component:A,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{}),e.jsx(P,{}),e.jsx(D,{}),e.jsx(E,{}),e.jsx(T,{}),e.jsx(O,{doc:_.ProvenanceLabel,headingLevel:2}),e.jsx(N,{})]}),description:{component:["Says whose claim follows: the AI’s, the document’s, or the analyst’s. One shape for all three, so the distinction is learned once.","","**A label, not a badge**","","A glyph and a word in the class colour, with no fill behind it. The word is always written, so the kind never depends on colour."].join(`
`)}}}},o={args:r(a,"ai")},t={args:r(a,"source")},c={args:r(a,"calculated")},n={args:r(a,"analyst")},s={args:r(a,"ai"),render:()=>e.jsx("div",{className:"sb-row",children:a.map(i=>e.jsx(A,{...i.props},i.id))})};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: pick(provenanceLabelStates, 'ai')
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,u,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: pick(provenanceLabelStates, 'source')
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var S,b,h;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: pick(provenanceLabelStates, 'calculated')
}`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,x,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: pick(provenanceLabelStates, 'analyst')
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,L,f,k,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: pick(provenanceLabelStates, 'ai'),
  render: () => <div className="sb-row">
      {provenanceLabelStates.map(state => <ProvenanceLabel key={state.id} {...state.props} />)}
    </div>
}`,...(f=(L=s.parameters)==null?void 0:L.docs)==null?void 0:f.source},description:{story:"Every state, from the same registry /system reads.",...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.description}}};const Q=["Ai","Source","Calculated","Analyst","AllStates"];export{o as Ai,s as AllStates,n as Analyst,c as Calculated,t as Source,Q as __namedExportsOrder,M as default};
