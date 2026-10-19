import{j as u}from"./jsx-runtime-D_zvdyIk.js";const d=["figure","figure-sm"];function o({as:t="p",variant:e="body",tone:a="default",weight:l,numeric:i=!1,measure:n=!1,children:r}){const s=["ds-text",`ds-text--${e}`,a!=="default"?`ds-text--tone-${a}`:"",l?`ds-text--weight-${l}`:"",i||d.includes(e)?"ds-text--numeric":"",n?"ds-text--measure":""].filter(Boolean).join(" ");return u.jsx(t,{className:s,children:r})}o.__docgenInfo={description:"",methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"ElementType"},description:`The element rendered. Size and meaning are separate: a
heading that needs to look small is still a heading, and the outline a
screen reader builds comes from this, not from the variant.`,defaultValue:{value:"'p'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| 'display'
| 'headline'
| 'title-lg'
| 'title'
| 'body'
| 'body-sm'
| 'label'
| 'caption'
| 'figure'
| 'figure-sm'`,elements:[{name:"literal",value:"'display'"},{name:"literal",value:"'headline'"},{name:"literal",value:"'title-lg'"},{name:"literal",value:"'title'"},{name:"literal",value:"'body'"},{name:"literal",value:"'body-sm'"},{name:"literal",value:"'label'"},{name:"literal",value:"'caption'"},{name:"literal",value:"'figure'"},{name:"literal",value:"'figure-sm'"}]},description:"",defaultValue:{value:"'body'",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:"'default' | 'secondary' | 'primary' | 'inherit'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'inherit'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:""},numeric:{required:!1,tsType:{name:"boolean"},description:"Tabular, lining digits. Set it for any money or ratio, so figures line\nup column to column. The `figure` variants set it already.",defaultValue:{value:"false",computed:!1}},measure:{required:!1,tsType:{name:"boolean"},description:"Caps the line length at the reading measure, for prose.",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{o as T};
