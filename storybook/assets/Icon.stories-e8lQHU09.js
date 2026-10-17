import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as A,S as L,D as G,P as M,C as T,a as _}from"./blocks-DMTn42y5.js";import{C as D,c as E}from"./index-BO70gx9-.js";import{I as C,a as O,i as d}from"./Icon-DGEnAJ9o.js";import{p as a,i as o}from"./states-CPmU5Uv3.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-CQQjaxCC.js";import"./index-D9EliS6m.js";import"./DocPage-Cvry0G_4.js";const J={title:"Components/Icon",component:C,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx(L,{}),e.jsx(G,{}),e.jsx(M,{}),e.jsx(T,{}),e.jsx(D,{doc:E.Icon,headingLevel:2}),e.jsx(_,{})]}),description:{component:["A single glyph sized to sit beside text.","","**Where the glyphs come from**","","Material Symbols, loaded from Google Fonts under the Apache License 2.0 and subset to exactly the glyphs this system names, so nothing is vendored and no artwork is copied.","","An earlier version drew the paths by hand. Each glyph carried a slightly different optical weight, because nothing enforced a shared construction, which is the thing a published set provides.","","**Named by job, not by picture**","","The names on the left of the map are this system’s vocabulary. The Material ligatures are the only place the coupling to that set exists, so swapping sets again would touch one file.","","Grouped into Navigation, Status, Actions, Document, Finance and People. There is no way to pass a path, so a screen cannot introduce a glyph the set does not have: a new one is added to the map, the font subset and the spec together.","","**Keyboard and screen readers**","","- Decorative by default. `aria-hidden` is set unless `label` is passed, so an icon beside its own text is not read out twice.",'- With `label` it becomes `role="img"` with that name.',"- It inherits `currentColor`, so it can never introduce a hue the parent did not already choose.","- `filled` is Material’s FILL axis, for a state that is on. Never for emphasis."].join(`
`)}}}},r={args:a(o,"sm")},i={args:a(o,"md")},n={args:a(o,"lg")},c={args:a(o,"labelled")},s={args:a(o,"md"),render:()=>e.jsx("div",{className:"sb-stack",children:O.map(t=>e.jsxs("section",{children:[e.jsxs("h3",{className:"sb-group-heading",children:[t," (",d(t).length,")"]}),e.jsx("ul",{className:"sb-icon-grid",children:d(t).map(l=>e.jsxs("li",{className:"sb-icon-cell",children:[e.jsx(C,{name:l,size:"lg"}),e.jsx("code",{children:l})]},l))})]},t))})};var p,m,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: pick(iconSizeStates, 'sm')
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,u,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: pick(iconSizeStates, 'md')
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var S,y,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: pick(iconSizeStates, 'lg')
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var j,f,N;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: pick(iconSizeStates, 'labelled')
}`,...(N=(f=c.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var I,v,w,k,z;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: pick(iconSizeStates, 'md'),
  render: () => <div className="sb-stack">
      {ICON_GROUP_NAMES.map(group => <section key={group}>
          <h3 className="sb-group-heading">
            {group} ({iconsInGroup(group).length})
          </h3>
          <ul className="sb-icon-grid">
            {iconsInGroup(group).map(name => <li key={name} className="sb-icon-cell">
                <Icon name={name} size="lg" />
                <code>{name}</code>
              </li>)}
          </ul>
        </section>)}
    </div>
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source},description:{story:"The whole set, grouped by the job each glyph does.",...(z=(k=s.parameters)==null?void 0:k.docs)==null?void 0:z.description}}};const Q=["Small","Medium","Large","Labelled","AllIcons"];export{s as AllIcons,c as Labelled,n as Large,i as Medium,r as Small,Q as __namedExportsOrder,J as default};
