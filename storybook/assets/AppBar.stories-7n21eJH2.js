import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as J,S as Q,D as U,P as X,C as Y,a as Z}from"./blocks-DxC5wVx6.js";import{C as $,c as ee}from"./index-BzcST_NV.js";import{A as ae}from"./AppBar-vMRqZzI0.js";import{I as h}from"./IconButton-CoX0yv4L.js";import{p as a,a as s}from"./states-B-b6nTVw.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-CABGp69k.js";import"./index-i-KBDjhx.js";import"./DocPage-Cvry0G_4.js";import"./enfi-logo-D2lcv1bo.js";import"./Icon-Zo4Ws1sP.js";const r=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"ds-navlink","aria-current":"page",children:"Review"}),e.jsx("span",{className:"ds-navlink",children:"Design system"})]}),m=e.jsxs(e.Fragment,{children:[e.jsx(h,{icon:"search",label:"Find a field"}),e.jsx(h,{icon:"info",label:"About this extraction"})]}),ue={title:"Components/AppBar",component:ae,tags:["autodocs"],args:{landmark:!1,navLabel:"AppBar specimen",elevateOnScroll:!1},parameters:{layout:"fullscreen",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(Q,{}),e.jsx(U,{}),e.jsx(X,{}),e.jsx(Y,{}),e.jsx($,{doc:ee.AppBar,headingLevel:2}),e.jsx(Z,{})]}),description:{component:["The application shell, on Material 3's top app bar anatomy: container, leading element, headline, subtitle, trailing elements.","","**What folds as the screen narrows**","","Decided here rather than discovered at the width where it breaks.","","- Identity never hides. The mark steps down to its smallest size.","- Controls never hide. They are how the work is done.","- Navigation folds onto its own line. It is not removed.","- The subtitle drops out first, below 64rem, because the page heading repeats it.","","**The scroll state**","","Material changes the container to `surface container` once the page scrolls, so the bar separates from content moving under it rather than carrying a permanent shadow. That is `elevateOnScroll`, on by default and turned off in these specimens so they sit still.","","**No menu button**","","Two destinations do not need a disclosure, and a button that opens a list of two is a worse affordance than the list. `Menu` exists for the cases where that is not true.","","**Why this styles itself**","","An earlier version took `brand` and `context` as slots and expected the application to bring the classes. Storybook never loads the application stylesheet, so every story rendered the two words run together. A component that cannot style itself in its own documentation is not finished.","","**Keyboard and screen readers**","",'- A real `<header>` and `<nav aria-label="Main">`, so both are landmarks a screen reader can jump to.',"- The current page is marked with `aria-current`, so it is announced and not only coloured.","- `landmark={false}` renders a plain container, so a specimen inside `/system` does not add a second banner to the page documenting it."].join(`
`)}}},argTypes:{size:{control:"radio"}}},c={args:{...a(s,"small"),nav:r}},t={args:{...a(s,"medium"),nav:r}},l={args:{...a(s,"small"),nav:r,actions:m}},o={args:{...a(s,"small"),nav:r},decorators:[H=>e.jsx("div",{className:"sb-appbar-scrolled",children:e.jsx(H,{})})]},n={args:a(s,"title-only")},i={args:{...a(s,"wordmark"),nav:r}},p={args:{...a(s,"small"),nav:r,actions:m},globals:{viewport:{value:"small"}}},d={args:{...a(s,"small"),nav:r,actions:m},globals:{viewport:{value:"medium"}}};var u,g,v;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...pick(appBarStates, 'small'),
    nav
  }
}`,...(v=(g=c.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,b,w,y,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...pick(appBarStates, 'medium'),
    nav
  }
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source},description:{story:"The headline on its own line, for a screen whose title is the point.",...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.description}}};var k,x,j;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...pick(appBarStates, 'small'),
    nav,
    actions
  }
}`,...(j=(x=l.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var T,B,A,M,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...pick(appBarStates, 'small'),
    nav
  },
  decorators: [Story => <div className="sb-appbar-scrolled">
        <Story />
      </div>]
}`,...(A=(B=o.parameters)==null?void 0:B.docs)==null?void 0:A.source},description:{story:"The scrolled container: surface container, with one step of elevation.",...(C=(M=o.parameters)==null?void 0:M.docs)==null?void 0:C.description}}};var F,N,W,D,I;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: pick(appBarStates, 'title-only')
}`,...(W=(N=n.parameters)==null?void 0:N.docs)==null?void 0:W.source},description:{story:"Identity only, for a screen that names itself in its own heading.",...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.description}}};var O,V,z,E,L;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...pick(appBarStates, 'wordmark'),
    nav
  }
}`,...(z=(V=i.parameters)==null?void 0:V.docs)==null?void 0:z.source},description:{story:"The wordmark fallback, for where the mark should not be used.",...(L=(E=i.parameters)==null?void 0:E.docs)==null?void 0:L.description}}};var P,R,_;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...pick(appBarStates, 'small'),
    nav,
    actions
  },
  globals: {
    viewport: {
      value: 'small'
    }
  }
}`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var K,q,G;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...pick(appBarStates, 'small'),
    nav,
    actions
  },
  globals: {
    viewport: {
      value: 'medium'
    }
  }
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const ge=["Small","Medium","WithActions","Scrolled","TitleOnly","WordmarkFallback","SmallViewport","MediumViewport"];export{t as Medium,d as MediumViewport,o as Scrolled,c as Small,p as SmallViewport,n as TitleOnly,l as WithActions,i as WordmarkFallback,ge as __namedExportsOrder,ue as default};
