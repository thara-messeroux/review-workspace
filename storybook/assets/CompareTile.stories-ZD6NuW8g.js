import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as b,S as D,D as N,P as E,C as I,a as M}from"./blocks-B1MI7l_n.js";import{C as O,c as P}from"./index-CkQiwGNr.js";import{C as A}from"./CompareTile-guTbFH4A.js";import{p as a,e as s}from"./states-UEOExjgl.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-DXAvG7X9.js";import"./index-v1lYfxNf.js";import"./DocPage-Cvry0G_4.js";import"./ProvenanceLabel-ES3448dV.js";import"./Icon-DT3wV_QD.js";import"./iconGlyphs-DDQwSP8K.js";import"./workspaceTheme-Cn_UgpYr.js";const Q={title:"Workspace/CompareTile",component:A,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(b,{}),e.jsx(D,{}),e.jsx(N,{}),e.jsx(E,{}),e.jsx(I,{}),e.jsx(O,{doc:P.CompareTile,headingLevel:2}),e.jsx(M,{})]}),description:{component:["One side of a comparison. Two tiles side by side show the AI’s answer and the document’s in the same shape.","","**Never a verdict**","","Neither tile is coloured as right or wrong. The AI takes a blue edge, the document a dark edge on paper, a calculation a grey edge: who is speaking, not who is correct."].join(`
`)}}}},o={args:a(s,"ai-uncited")},t={args:a(s,"document")},i={args:a(s,"calculated")},c={args:a(s,"missing")},r={args:a(s,"ai-uncited"),render:()=>e.jsx("div",{className:"sb-row",children:s.map(p=>e.jsx(A,{...p.props},p.id))})};var m,n,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: pick(compareTileStates, 'ai-uncited')
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var l,u,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: pick(compareTileStates, 'document')
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var S,h,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: pick(compareTileStates, 'calculated')
}`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var x,j,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: pick(compareTileStates, 'missing')
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var k,f,w,y,v;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: pick(compareTileStates, 'ai-uncited'),
  render: () => <div className="sb-row">
      {compareTileStates.map(state => <CompareTile key={state.id} {...state.props} />)}
    </div>
}`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source},description:{story:"Every state, from the same registry /system reads.",...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.description}}};const V=["AiUncited","Document","Calculated","Missing","AllStates"];export{o as AiUncited,r as AllStates,i as Calculated,t as Document,c as Missing,V as __namedExportsOrder,Q as default};
