import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as D,S as B,D as E,P,C as V,a as G}from"./blocks-DKE9fqoi.js";import{C as H,c as I}from"./index-Sx3XmE5z.js";import{S as o}from"./Stack-DKUl758P.js";import{T as n}from"./Text-CpvSg0LR.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-Ck4AtfJS.js";import"./index-4sd7srGi.js";import"./DocPage-Cvry0G_4.js";const O=["Total revenue","EBITDA","Total debt"].map(a=>e.jsx("span",{className:"sb-block",children:a},a)),M={title:"Components/Stack",component:o,tags:["autodocs"],args:{children:O},parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(D,{}),e.jsx(B,{}),e.jsx(E,{}),e.jsx(P,{}),e.jsx(V,{}),e.jsx(H,{doc:I.Stack,headingLevel:2}),e.jsx(G,{})]}),description:{component:["One direction of rhythm, with the gap taken from the spacing scale only.","","**Why this exists**","","Almost every layout here is a column of things or a row of things with one gap between them. Writing that as flexbox in each screen is how a four pixel scale quietly becomes a fourteen pixel gap.","","**There is no arbitrary gap**","","`gap` takes a step on the scale, not a pixel value. If a screen needs a gap the scale does not have, the scale is missing a step, not the screen.","","**Keyboard and screen readers**","","- Renders no role of its own, so it adds nothing a screen reader must walk.",'- Pass `as="ul"` or `as="dl"` when the contents are a list, so the count is announced.',"- Visual order follows source order, so the tab order matches what is seen."].join(`
`)}}},argTypes:{direction:{control:"radio"},align:{control:"select"},justify:{control:"select"}}},i={args:{direction:"vertical",gap:3}},c={args:{direction:"horizontal",gap:2,wrap:!0}},r={args:{direction:"horizontal",gap:2,align:"baseline"},render:()=>e.jsxs(o,{direction:"horizontal",gap:2,align:"baseline",children:[e.jsx(n,{variant:"figure",children:"21,500"}),e.jsx(n,{variant:"body-sm",tone:"secondary",children:"thousand USD"})]})},s={args:{direction:"horizontal",gap:3,justify:"between",wrap:!0},render:()=>e.jsxs(o,{direction:"horizontal",gap:3,justify:"between",wrap:!0,children:[e.jsx(n,{variant:"title",children:"Total debt"}),e.jsx(n,{variant:"label",tone:"secondary",children:"Two readings"})]})},t={args:{direction:"vertical",gap:3},render:()=>e.jsx(o,{gap:5,children:[0,1,2,3,4,5,6,8].map(a=>e.jsxs("div",{children:[e.jsxs(n,{variant:"caption",tone:"secondary",children:["gap ",a]}),e.jsxs(o,{direction:"horizontal",gap:a,children:[e.jsx("span",{className:"sb-block",children:"A"}),e.jsx("span",{className:"sb-block",children:"B"}),e.jsx("span",{className:"sb-block",children:"C"})]})]},a))})};var l,d,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    gap: 3
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,h,g;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 2,
    wrap: true
  }
}`,...(g=(h=c.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,x,b,j,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 2,
    align: 'baseline'
  },
  render: () => <Stack direction="horizontal" gap={2} align="baseline">
      <Text variant="figure">21,500</Text>
      <Text variant="body-sm" tone="secondary">
        thousand USD
      </Text>
    </Stack>
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source},description:{story:"A figure and its unit sit on one baseline, never centred.",...(y=(j=r.parameters)==null?void 0:j.docs)==null?void 0:y.description}}};var S,v,f,k,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 3,
    justify: 'between',
    wrap: true
  },
  render: () => <Stack direction="horizontal" gap={3} justify="between" wrap>
      <Text variant="title">Total debt</Text>
      <Text variant="label" tone="secondary">
        Two readings
      </Text>
    </Stack>
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source},description:{story:"A header: title at one end, status at the other.",...(T=(k=s.parameters)==null?void 0:k.docs)==null?void 0:T.description}}};var w,z,A,C,N;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    gap: 3
  },
  render: () => <Stack gap={5}>
      {([0, 1, 2, 3, 4, 5, 6, 8] as const).map(gap => <div key={gap}>
          <Text variant="caption" tone="secondary">
            gap {gap}
          </Text>
          <Stack direction="horizontal" gap={gap}>
            <span className="sb-block">A</span>
            <span className="sb-block">B</span>
            <span className="sb-block">C</span>
          </Stack>
        </div>)}
    </Stack>
}`,...(A=(z=t.parameters)==null?void 0:z.docs)==null?void 0:A.source},description:{story:"Every step on the scale, so the rhythm is visible rather than described.",...(N=(C=t.parameters)==null?void 0:C.docs)==null?void 0:N.description}}};const Q=["Vertical","Horizontal","BaselineAligned","SpreadApart","GapScale"];export{r as BaselineAligned,t as GapScale,c as Horizontal,s as SpreadApart,i as Vertical,Q as __namedExportsOrder,M as default};
