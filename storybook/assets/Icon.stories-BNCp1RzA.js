import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as L,S as A,D as G,P as E,C as O,a as T}from"./blocks-DwjD5CC1.js";import{C as _,c as D}from"./index-CkQiwGNr.js";import{I as C,a as M,i as l}from"./Icon-BNTmeThI.js";import{p as a,i as o}from"./states-DC3TLYtT.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-CWUZx60D.js";import"./index-CshFDB_c.js";import"./DocPage-Cvry0G_4.js";const H={title:"Components/Icon",component:C,tags:["autodocs"],parameters:{docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx(L,{}),e.jsx(A,{}),e.jsx(G,{}),e.jsx(E,{}),e.jsx(O,{}),e.jsx(_,{doc:D.Icon,headingLevel:2}),e.jsx(T,{})]}),description:{component:["A single glyph sized to sit beside text.","","**Where the glyphs come from**","","Lucide, through `lucide-react`, under the ISC licence. Every glyph is an SVG on one 24 grid with one stroke construction, and only the icons this system names are bundled. Until October 2026 the set was Material Symbols; the change touched the map and nothing that uses it.","","An earlier version drew the paths by hand. Each glyph carried a slightly different optical weight, because nothing enforced a shared construction, which is the thing a published set provides.","","**Named by job, not by picture**","","The names on the left of the map are this system’s vocabulary. The Lucide components on the right are the only place the coupling to that set exists, so swapping sets touches one file.","","Grouped into Navigation, Status, Actions, Document, Finance and People. There is no way to pass a path, so a screen cannot introduce a glyph the set does not have: a new one is added to the map and the spec together.","","**Keyboard and screen readers**","","- Decorative by default. `aria-hidden` is set unless `label` is passed, so an icon beside its own text is not read out twice.",'- With `label` it becomes `role="img"` with that name.',"- It inherits `currentColor`, so it can never introduce a hue the parent did not already choose.","- Stroke comes from `--icon-stroke`: Lucide’s own 2 on the 24 grid, at every size, so a glyph matches the weight of the medium label beside it. `filled` gives a heavier stroke for a state that is on, such as a pressed toggle. Never for emphasis."].join(`
`)}}}},r={args:a(o,"sm")},i={args:a(o,"md")},n={args:a(o,"lg")},c={args:a(o,"labelled")},s={args:a(o,"md"),render:()=>e.jsx("div",{className:"sb-stack",children:M.map(t=>e.jsxs("section",{children:[e.jsxs("h3",{className:"sb-group-heading",children:[t," (",l(t).length,")"]}),e.jsx("ul",{className:"sb-icon-grid",children:l(t).map(d=>e.jsxs("li",{className:"sb-icon-cell",children:[e.jsx(C,{name:d,size:"lg"}),e.jsx("code",{children:d})]},d))})]},t))})};var m,p,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: pick(iconSizeStates, 'sm')
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,u,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: pick(iconSizeStates, 'md')
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var S,y,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: pick(iconSizeStates, 'lg')
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var j,f,v;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: pick(iconSizeStates, 'labelled')
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var N,k,w,I,z;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"The whole set, grouped by the job each glyph does.",...(z=(I=s.parameters)==null?void 0:I.docs)==null?void 0:z.description}}};const J=["Small","Medium","Large","Labelled","AllIcons"];export{s as AllIcons,c as Labelled,n as Large,i as Medium,r as Small,J as __namedExportsOrder,H as default};
