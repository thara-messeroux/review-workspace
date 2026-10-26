import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as s}from"./Button-B_WwbxLw.js";import{c as t,p as a}from"./states-UEOExjgl.js";import{T as J,S as M,D as Q,P as X,C as Y,a as Z}from"./blocks-B1MI7l_n.js";import{C as $,c as ee}from"./index-CkQiwGNr.js";import"./iconGlyphs-DDQwSP8K.js";import"./iframe-DXAvG7X9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-v1lYfxNf.js";import"./DocPage-Cvry0G_4.js";const pe={title:"Components/Button",component:s,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(M,{}),e.jsx(Q,{}),e.jsx(X,{}),e.jsx(Y,{}),e.jsx($,{doc:ee.Button,headingLevel:2}),e.jsx(Z,{})]}),description:{component:["Lets an analyst take an action with a single click or key press.","","**When to use**","","- `filled` for the one action that completes the review. One per screen.","- `tonal` for the common per-field actions, such as accepting a value.","- `outlined` for a secondary action sitting next to a filled button.","- `text` for low-weight actions inside a row, where a border adds noise.","- `danger` for contradicting or discarding a model value. Not for anything merely permanent.","","**Keyboard and screen readers**","","- A native `<button>`, so Enter and Space activate it and it sits in the tab order with no help from us.","- `loading` sets `aria-busy` and announces the loading label, and the button stays focusable so the keyboard position is not lost mid-task.","- `disabled` uses the element’s own attribute, so it is removed from the tab order and announced as unavailable.","- Focus uses the single application-wide `:focus-visible` ring, so it appears for keyboard users and not on mouse clicks."].join(`
`)}}},argTypes:{variant:{control:"select",description:"Weight and meaning of the action."},size:{control:"radio"},loading:{control:"boolean",description:"Blocks activation and announces progress, while keeping focus."},disabled:{control:"boolean"},fullWidth:{control:"boolean"}}},r={args:a(t,"filled")},n={args:a(t,"tonal")},i={args:a(t,"outlined")},c={args:a(t,"text")},d={args:a(t,"danger")},l={args:a(t,"loading"),parameters:{docs:{description:{story:"Stays in the tab order on purpose. Removing a focused button mid-task throws the keyboard user back to the top of the page."}}}},p={args:a(t,"disabled"),parameters:{docs:{description:{story:"Used for the approve action while any field is still undecided."}}}},u={args:a(t,"tonal"),render:()=>e.jsxs("div",{className:"sb-row",children:[e.jsx(s,{...a(t,"small")}),e.jsx(s,{...a(t,"tonal")}),e.jsx(s,{...a(t,"large")})]})},m={args:a(t,"tonal"),render:()=>e.jsx("div",{className:"sb-row",children:t.map(g=>e.jsx(s,{...g.props},g.id))})},o={args:a(t,"filled"),globals:{viewport:{value:"small"}},render:()=>e.jsxs("div",{className:"sb-row",children:[e.jsx(s,{variant:"tonal",size:"sm",children:"Accept"}),e.jsx(s,{variant:"outlined",size:"sm",children:"Edit"}),e.jsx(s,{variant:"danger",size:"sm",children:"Reject"}),e.jsx(s,{variant:"filled",fullWidth:!0,children:"Approve extraction"})]})};var b,h,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: pick(buttonStates, 'filled')
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,S,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: pick(buttonStates, 'tonal')
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var k,w,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: pick(buttonStates, 'outlined')
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var y,B,z;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: pick(buttonStates, 'text')
}`,...(z=(B=c.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var A,D,N;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: pick(buttonStates, 'danger')
}`,...(N=(D=d.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var T,C,E;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: pick(buttonStates, 'loading'),
  parameters: {
    docs: {
      description: {
        story: 'Stays in the tab order on purpose. Removing a focused button mid-task throws the keyboard user back to the top of the page.'
      }
    }
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var R,W,F;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: pick(buttonStates, 'disabled'),
  parameters: {
    docs: {
      description: {
        story: 'Used for the approve action while any field is still undecided.'
      }
    }
  }
}`,...(F=(W=p.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var L,O,V;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: pick(buttonStates, 'tonal'),
  render: () => <div className="sb-row">
      <Button {...pick(buttonStates, 'small')} />
      <Button {...pick(buttonStates, 'tonal')} />
      <Button {...pick(buttonStates, 'large')} />
    </div>
}`,...(V=(O=u.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var P,U,_;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: pick(buttonStates, 'tonal'),
  render: () => <div className="sb-row">
      {buttonStates.map(state => <Button key={state.id} {...state.props} />)}
    </div>
}`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var K,q,G,H,I;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: pick(buttonStates, 'filled'),
  globals: {
    viewport: {
      value: 'small'
    }
  },
  render: () => <div className="sb-row">
      <Button variant="tonal" size="sm">
        Accept
      </Button>
      <Button variant="outlined" size="sm">
        Edit
      </Button>
      <Button variant="danger" size="sm">
        Reject
      </Button>
      <Button variant="filled" fullWidth>
        Approve extraction
      </Button>
    </div>
}`,...(G=(q=o.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"Actions wrap rather than overflow once the row runs out of width.",...(I=(H=o.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};const ue=["Filled","Tonal","Outlined","Text","Danger","Loading","Disabled","Sizes","AllVariants","SmallViewport"];export{m as AllVariants,d as Danger,p as Disabled,r as Filled,l as Loading,i as Outlined,u as Sizes,o as SmallViewport,c as Text,n as Tonal,ue as __namedExportsOrder,pe as default};
