import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{I as s}from"./Icon-BvUu3QNv.js";import{W as i}from"./workspaceTheme-Cn_UgpYr.js";function o({tone:n,icon:a,label:e}){return t.jsx("span",{className:`${i} ds-status-icon ds-status-icon--${n}`,role:e?"img":void 0,"aria-label":e,"aria-hidden":e?void 0:!0,children:t.jsx(s,{name:a})})}o.__docgenInfo={description:`The status glyph beside a field in a dense list. A line icon in a fixed
slot, tinted only for states that need attention. The slot is the same
size in every tone, so a status change never moves the text beside it.`,methods:[],displayName:"StatusIcon",props:{tone:{required:!0,tsType:{name:"union",raw:"'neutral' | 'attention' | 'decided' | 'error'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'attention'"},{name:"literal",value:"'decided'"},{name:"literal",value:"'error'"}]},description:`What the glyph says about the field. Neutral is slate and decided is
teal, both bare. Attention and error take a soft tint behind the glyph,
so the rows that need a look stand out and the rest stay quiet. The tone
only repeats a status word beside the icon, so colour is never the sole
carrier of status (WCAG 1.4.1).`},icon:{required:!0,tsType:{name:"unknown"},description:`The glyph. Each status has its own shape, so a missing value, a
definition conflict, a pending review and a failed extraction can be told
apart without colour.`},label:{required:!1,tsType:{name:"string"},description:`A spoken label, only for an icon that stands alone. Beside its status
word, which is the usual case, the icon is hidden from assistive
technology so the status is not read twice.`}}};export{o as S};
