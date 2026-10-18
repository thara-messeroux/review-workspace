import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{I as a}from"./Icon-CqpHMzUy.js";import{W as i}from"./workspaceTheme-Cn_UgpYr.js";function o({tone:n,icon:s,label:e}){return t.jsx("span",{className:`${i} ds-status-icon ds-status-icon--${n}`,role:e?"img":void 0,"aria-label":e,"aria-hidden":e?void 0:!0,children:t.jsx(a,{name:s})})}o.__docgenInfo={description:`The status glyph beside a field in a dense list. A line icon in a fixed
slot, never on a filled box. The slot is the same
size in every tone, so a status change never moves the text beside it.`,methods:[],displayName:"StatusIcon",props:{tone:{required:!0,tsType:{name:"union",raw:"'neutral' | 'attention' | 'decided' | 'error'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'attention'"},{name:"literal",value:"'decided'"},{name:"literal",value:"'error'"}]},description:`The glyph's colour. Neutral is slate, decided teal, error red and
attention amber, all bare outlines. Attention is kept for what a person
set or what needs recalculating, so most rows stay quiet. The tone
only repeats a status word beside the icon, so colour is never the sole
carrier of status (WCAG 1.4.1).`},icon:{required:!0,tsType:{name:"unknown"},description:`The glyph. Each status has its own shape, so a missing value, a
definition conflict, a pending review and a failed extraction can be told
apart without colour.`},label:{required:!1,tsType:{name:"string"},description:`A spoken label, only for an icon that stands alone. Beside its status
word, which is the usual case, the icon is hidden from assistive
technology so the status is not read twice.`}}};export{o as S};
