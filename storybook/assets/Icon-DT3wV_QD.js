import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{G as r}from"./iconGlyphs-DDQwSP8K.js";function l({name:t,size:s="md",filled:o=!1,label:e}){const a=r[t],i=["ds-icon",`ds-icon--${s}`,o?"ds-icon--filled":""].filter(Boolean).join(" ");return n.jsx("span",{className:i,role:e?"img":void 0,"aria-label":e,"aria-hidden":e?void 0:!0,children:n.jsx(a,{"aria-hidden":"true",focusable:"false"})})}l.__docgenInfo={description:`A single glyph, sized to sit beside text.

It inherits \`currentColor\`, so an icon can never introduce a colour the
surrounding token did not already choose. That is deliberate: a status
colour belongs to the component carrying the status, not to its icon.`,methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"unknown"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},filled:{required:!1,tsType:{name:"boolean"},description:`A heavier stroke, for a state that is on, such as a pressed toggle.
Never for emphasis. Lucide has no solid cut, so "on" is carried by
weight here and by the control's own pressed styling.`,defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:`What the icon means, for anyone who cannot see it.

Leave it out when the icon repeats adjacent text, which is the usual
case. The icon is then hidden from assistive technology rather than read
out twice. Set it only when the icon is the sole label.`}}};export{l as I};
