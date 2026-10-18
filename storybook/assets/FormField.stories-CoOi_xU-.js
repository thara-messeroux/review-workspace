import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as _}from"./FormField-DW4Qs65V.js";import{h as r,p as t}from"./states-ChFjG1QF.js";import{T as H,S as K,D as L,P as O,C as R,a as U}from"./blocks-DTJFnQfX.js";import{C as q,c as z}from"./index-BzcST_NV.js";import"./iframe-D2sWvbYy.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CDXFQQnW.js";import"./index-BYEkkknc.js";import"./DocPage-Cvry0G_4.js";const re={title:"Components/Input",component:_,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(H,{}),e.jsx(K,{}),e.jsx(L,{}),e.jsx(O,{}),e.jsx(R,{}),e.jsx(q,{doc:z.FormField,headingLevel:2}),e.jsx(U,{})]}),description:{component:["A single text input with its label, guidance and validation message.","","**When to use**","","- Whenever an analyst corrects a value the model produced.","- Pass `originalValue` every time. The model’s figure stays visible underneath, so an edit never silently erases what the extraction claimed. That record is what makes the correction auditable later.","- Use `suffix` to carry the unit. In this document every amount is in thousands, and a number without its scale is a number waiting to be misread.","","**States**","","Default, edited, error, disabled and empty. Edited is styled from the tertiary role, the same hue used everywhere else in this system to mean a human did it.","","**Keyboard and screen readers**","","- A real `<label>` tied to the input by `htmlFor`, so clicking the label focuses the field.","- Help text, the original-value note and the error are all linked by `aria-describedby`, so they are read with the field rather than lost.",'- An error sets `aria-invalid` and is announced through `role="alert"`.',"- Focus is shown on the wrapper, and the inner input suppresses its own ring, so there is one focus indicator rather than two.","- Values use tabular digits, so figures line up column to column."].join(`
`)}}},argTypes:{label:{control:"text"},value:{control:"text"},suffix:{control:"text"},help:{control:"text"},error:{control:"text"},disabled:{control:"boolean"}}},o={args:t(r,"default")},s={args:t(r,"edited"),parameters:{docs:{description:{story:"The model value stays on screen. An edit is a disagreement on the record, not a deletion."}}}},i={args:t(r,"error")},a={args:t(r,"disabled")},n={args:t(r,"empty")},d={args:t(r,"default"),render:()=>e.jsx("div",{className:"sb-stack",children:r.map(l=>e.jsx(_,{...l.props},l.id))})},c={args:t(r,"edited"),globals:{viewport:{value:"small"}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: pick(formFieldStates, 'default')
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,f,y,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: pick(formFieldStates, 'edited'),
  parameters: {
    docs: {
      description: {
        story: 'The model value stays on screen. An edit is a disagreement on the record, not a deletion.'
      }
    }
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:"Net income, corrected from the model's 2,310 to the document's 1,904.",...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var S,x,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: pick(formFieldStates, 'error')
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var F,w,k,j,E;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: pick(formFieldStates, 'disabled')
}`,...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:"A derived figure cannot be typed over while its own inputs are unsettled.",...(E=(j=a.parameters)==null?void 0:j.docs)==null?void 0:E.description}}};var A,D,T;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: pick(formFieldStates, 'empty')
}`,...(T=(D=n.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var C,V,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: pick(formFieldStates, 'default'),
  render: () => <div className="sb-stack">
      {formFieldStates.map(state => <FormField key={state.id} {...state.props} />)}
    </div>
}`,...(N=(V=d.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var P,I,W;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: pick(formFieldStates, 'edited'),
  globals: {
    viewport: {
      value: 'small'
    }
  }
}`,...(W=(I=c.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const te=["Default","Edited","Error","Disabled","Empty","AllStates","SmallViewport"];export{d as AllStates,o as Default,a as Disabled,s as Edited,n as Empty,i as Error,c as SmallViewport,te as __namedExportsOrder,re as default};
