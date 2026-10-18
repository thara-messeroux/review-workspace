import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as i}from"./Icon-D_Yz9bko.js";import{W as n}from"./workspaceTheme-Cn_UgpYr.js";function s({tone:a,icon:t,label:e}){return r.jsx("span",{className:`${n} ds-marker ds-marker--${a}`,role:e?"img":void 0,"aria-label":e,"aria-hidden":e?void 0:!0,children:t?r.jsx(i,{name:t,size:"sm"}):null})}s.__docgenInfo={description:`The circle beside a field, taken from the checklist pattern in Thara's
HubSpot references: empty until a person acts, filled once they have.
A machine never fills it.`,methods:[],displayName:"StatusMarker",props:{tone:{required:!0,tsType:{name:"union",raw:"'neutral' | 'attention' | 'decided' | 'error'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'attention'"},{name:"literal",value:"'decided'"},{name:"literal",value:"'error'"}]},description:`What the circle says about the field. Decided fills the circle in the
analyst's teal; attention and error draw the ring in their colour;
neutral stays grey. The colour only repeats a word that sits beside the
marker, so it is never the sole carrier of status (WCAG 1.4.1).`},icon:{required:!1,tsType:{name:"unknown"},description:"The glyph inside the ring. Leave it out for an empty, not-reviewed circle."},label:{required:!1,tsType:{name:"string"},description:`A spoken label, only for a marker that stands alone. Beside its status
word, which is the usual case, the marker is hidden from assistive
technology so the status is not read twice.`}}};export{s as S};
