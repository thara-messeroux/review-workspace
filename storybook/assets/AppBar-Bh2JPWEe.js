import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-DL-_WyuL.js";import{l as v}from"./enfi-logo-D2lcv1bo.js";function g({title:c,subtitle:n,logo:s,nav:i,actions:r,size:a="small",elevateOnScroll:o=!0,navLabel:p="Main",landmark:h=!0}){const[m,u]=d.useState(!1);d.useEffect(()=>{if(!o)return;const t=()=>u(window.scrollY>0);return t(),window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[o]);const f=h?"header":"div",b=["ds-appbar",`ds-appbar--${a}`,m?"ds-appbar--scrolled":""].filter(Boolean).join(" "),w=s===!1?null:e.jsx("div",{className:"ds-appbar__logo",children:s??e.jsx("img",{src:v,alt:"EnFi",className:"ds-appbar__mark"})}),l=e.jsxs("div",{className:"ds-appbar__headline",children:[e.jsx("p",{className:"ds-appbar__title",children:c}),n?e.jsx("p",{className:"ds-appbar__subtitle",children:n}):null]});return e.jsxs(f,{className:b,children:[e.jsxs("div",{className:"ds-appbar__row",children:[w,a==="small"?l:null,r?e.jsx("div",{className:"ds-appbar__actions",children:r}):null]}),a==="medium"?e.jsx("div",{className:"ds-appbar__row ds-appbar__row--headline",children:l}):null,i?e.jsx("nav",{className:"ds-appbar__nav","aria-label":p,children:i}):null]})}g.__docgenInfo={description:`The application shell, following Material 3's top app bar anatomy:
container, leading element, headline, subtitle, trailing elements.

What folds as the screen narrows, decided here rather than discovered at
the width where it breaks:

  Identity never hides. The mark shrinks to its smallest step.
  Controls never hide. They are how the work is done.
  Navigation folds onto its own line. It is not removed.
  The subtitle drops out first, because the page heading repeats it.

There is no menu button. Two destinations do not need a disclosure, and a
button that opens a list of two is a worse affordance than the list. \`Menu\`
exists in this system for the cases where that is not true.

Everything it renders is styled here. An earlier version expected the
application to bring classes for the brand and the context, which meant the
component could not style itself in its own documentation, and the two words
ran together in every story.`,methods:[],displayName:"AppBar",props:{title:{required:!0,tsType:{name:"ReactNode"},description:`The headline. In Material's anatomy this is the one piece of text the
bar is required to carry.`},subtitle:{required:!1,tsType:{name:"ReactNode"},description:`A second line under the headline, for what is open. Material allows a
subtitle on every size and hugs the text when one is present.`},logo:{required:!1,tsType:{name:"union",raw:"ReactNode | false",elements:[{name:"ReactNode"},{name:"literal",value:"false"}]},description:"The leading element. Defaults to the EnFi mark. Pass `false` for a bar\nthat carries no identity, such as one nested in a page that already has."},nav:{required:!1,tsType:{name:"ReactNode"},description:"Primary navigation. Folds onto its own line before it ever disappears."},actions:{required:!1,tsType:{name:"ReactNode"},description:`Trailing controls. Material's guidance is explicit that too many actions
here is the common mistake; three is the practical ceiling.`},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"`small` is one row. `medium` gives the headline its own line below the\nidentity, for a screen whose title is the point.",defaultValue:{value:"'small'",computed:!1}},elevateOnScroll:{required:!1,tsType:{name:"boolean"},description:"Material changes the container to surface container once the page is\nscrolled, so the bar separates from content moving under it. Left on by\ndefault; pass `false` for a bar that is not over a scrolling page.",defaultValue:{value:"true",computed:!1}},navLabel:{required:!1,tsType:{name:"string"},description:`Names the navigation. Two bars on one page must not both be "Main", or
the landmark list stops being a way to navigate.`,defaultValue:{value:"'Main'",computed:!1}},landmark:{required:!1,tsType:{name:"boolean"},description:`False renders a plain container rather than a banner landmark. Used when
the bar is shown as a specimen inside a page that already has one.`,defaultValue:{value:"true",computed:!1}}}};export{g as A};
