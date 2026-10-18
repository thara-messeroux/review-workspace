import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as z,S as E,D as F,P as A,C as D,a as B}from"./blocks-CT8-rhgS.js";import{C as H,c as N}from"./index-Bj5_oxNd.js";import{T as p}from"./Text-CpvSg0LR.js";import{p as r,x as s}from"./states-FO9ywTJh.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-DKjwjcR7.js";import"./index-Dg7A0w6C.js";import"./DocPage-Cvry0G_4.js";import"./Icon-BvUu3QNv.js";const J={title:"Components/Text",component:p,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsx(E,{}),e.jsx(F,{}),e.jsx(A,{}),e.jsx(D,{}),e.jsx(H,{doc:N.Text,headingLevel:2}),e.jsx(B,{})]}),description:{component:["The type scale as a component, with element and size kept separate.","","**Why this exists**","","A documented scale asks people to follow it. A component makes following it the only option, which matters most for whatever writes the markup next: a generated screen cannot invent a font size it has no name for.","","**Element and size are different questions**","","`as` sets the element, `variant` sets the size. A heading that needs to look small is still a heading, and the outline a screen reader builds comes from `as`.","","**Figures**","","The `figure` variants set tabular, lining digits for you. Every figure on this screen still has to carry its scale, because this document is in thousands."].join(`
`)}}},argTypes:{variant:{control:"select"},tone:{control:"radio"}}},o={args:r(s,"body")},n={args:r(s,"headline")},i={args:r(s,"figure")},c={args:r(s,"caption")},a={args:r(s,"body"),render:()=>e.jsx("div",{className:"sb-stack",children:s.map(t=>e.jsxs("div",{children:[e.jsx(p,{...t.props}),e.jsxs(p,{variant:"caption",tone:"secondary",children:[t.label,t.note?`. ${t.note}`:""]})]},t.id))})};var d,m,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: pick(textStates, 'body')
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,g,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: pick(textStates, 'headline')
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,f,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: pick(textStates, 'figure')
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,j,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: pick(textStates, 'caption')
}`,...(v=(j=c.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var k,T,b,w,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: pick(textStates, 'body'),
  render: () => <div className="sb-stack">
      {textStates.map(state => <div key={state.id}>
          <Text {...state.props} />
          <Text variant="caption" tone="secondary">
            {state.label}
            {state.note ? \`. \${state.note}\` : ''}
          </Text>
        </div>)}
    </div>
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source},description:{story:"The whole scale, in the order it steps down.",...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};const K=["Body","Headline","Figure","Caption","Scale"];export{o as Body,c as Caption,i as Figure,n as Headline,a as Scale,K as __namedExportsOrder,J as default};
