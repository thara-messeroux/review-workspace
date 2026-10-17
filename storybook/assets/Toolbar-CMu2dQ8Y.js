import{j as r}from"./jsx-runtime-D_zvdyIk.js";function n({label:e,variant:a="bar",children:t}){return r.jsx("div",{className:`ds-toolbar ds-toolbar--${a}`,role:"group","aria-label":e,children:t})}n.__docgenInfo={description:`A row of task actions, the strip every Fidelity screen carries under its
app bar.

The point is that the actions an analyst takes repeatedly are in one fixed
place rather than scattered down the page next to whatever prompted them.
It wraps rather than scrolls, because an action that has scrolled out of
sight is an action that is not there.`,methods:[],displayName:"Toolbar",props:{label:{required:!0,tsType:{name:"string"},description:"Names the group. Required: a bare row of buttons is unlabelled to a screen reader."},variant:{required:!1,tsType:{name:"union",raw:"'bar' | 'inline'",elements:[{name:"literal",value:"'bar'"},{name:"literal",value:"'inline'"}]},description:"Density. `bar` sits under the app bar as a full-width strip, `inline`\nsits inside a panel.",defaultValue:{value:"'bar'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{n as T};
