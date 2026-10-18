import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{T as z,S as L,D as _,P as q,C as F,a as H}from"./blocks-PZ1Cp92e.js";import{C as K,c as R}from"./index-BsdewzkH.js";import{I as P}from"./IconButton-B3Lny0MG.js";import{j as e,p as a}from"./states-COYsrw-2.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-CFLmwJYW.js";import"./index-a7mRGDUe.js";import"./DocPage-Cvry0G_4.js";import"./Icon-DZzcVfFY.js";const $={title:"Components/IconButton",component:P,tags:["autodocs"],parameters:{docs:{page:()=>s.jsxs(s.Fragment,{children:[s.jsx(z,{}),s.jsx(L,{}),s.jsx(_,{}),s.jsx(q,{}),s.jsx(F,{}),s.jsx(K,{doc:R.IconButton,headingLevel:2}),s.jsx(H,{})]}),description:{component:["An icon on its own, as a real button.","","**Why this exists**","","`Icon` is presentational and cannot be clicked. An icon wired up by hand arrives as a `div` with an `onClick`: no focus ring, no keyboard, no accessible name, and a hit target the size of the glyph. All four are handled here once.","","**label is required**","",'Not optional. An icon-only control without a name is announced as "button" and nothing else.',"","**Keyboard and screen readers**","","- A native `<button>`, so Enter and Space activate it with no help.","- `pressed` sets `aria-pressed` **and** fills the glyph, so a toggle is a shape as well as a colour.","- `loading` sets `aria-busy` and stays focusable, so the keyboard position holds.","- On a coarse pointer the target grows to 2.75rem while the glyph stays the same size."].join(`
`)}}},argTypes:{variant:{control:"radio"},size:{control:"radio"}}},r={args:a(e,"standard")},t={args:a(e,"tonal")},n={args:a(e,"outlined")},c={args:a(e,"pressed")},i={args:a(e,"loading")},d={args:a(e,"disabled")},o={args:a(e,"standard"),render:()=>s.jsx("div",{className:"sb-row",children:e.map(p=>s.jsxs("span",{className:"sb-icon-cell",children:[s.jsx(P,{...p.props}),s.jsx("code",{children:p.label})]},p.id))})};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: pick(iconButtonStates, 'standard')
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: pick(iconButtonStates, 'tonal')
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,y,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: pick(iconButtonStates, 'outlined')
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var j,k,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: pick(iconButtonStates, 'pressed')
}`,...(B=(k=c.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var f,v,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: pick(iconButtonStates, 'loading')
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var A,C,I;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: pick(iconButtonStates, 'disabled')
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var D,N,T,E,O;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: pick(iconButtonStates, 'standard'),
  render: () => <div className="sb-row">
      {iconButtonStates.map(state => <span key={state.id} className="sb-icon-cell">
          <IconButton {...state.props} />
          <code>{state.label}</code>
        </span>)}
    </div>
}`,...(T=(N=o.parameters)==null?void 0:N.docs)==null?void 0:T.source},description:{story:"Every state. Hover and focus each one to see the state layer.",...(O=(E=o.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};const ss=["Standard","Tonal","Outlined","Pressed","Loading","Disabled","AllStates"];export{o as AllStates,d as Disabled,i as Loading,n as Outlined,c as Pressed,r as Standard,t as Tonal,ss as __namedExportsOrder,$ as default};
