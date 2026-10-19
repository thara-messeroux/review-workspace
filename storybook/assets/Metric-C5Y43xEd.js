import{j as e}from"./jsx-runtime-D_zvdyIk.js";const d={up:"▲",down:"▼",flat:"–"},o={up:"Up",down:"Down",flat:"No change"};function c({label:s,value:r,unit:n,change:t,direction:a="flat",context:i,size:l="md"}){return e.jsxs("div",{className:`ds-metric ds-metric--${l}`,children:[e.jsx("p",{className:"ds-metric__label",children:s}),e.jsxs("p",{className:"ds-metric__value",children:[r,n?e.jsx("span",{className:"ds-metric__unit",children:n}):null]}),t?e.jsxs("p",{className:`ds-metric__change ds-metric__change--${a}`,children:[e.jsx("span",{className:"ds-metric__caret","aria-hidden":"true",children:d[a]}),e.jsxs("span",{className:"ds-visually-hidden",children:[o[a],", "]}),t]}):null,i?e.jsx("p",{className:"ds-metric__context",children:i}):null]})}c.__docgenInfo={description:`One figure, with what it is and what it is doing.

The summary pattern every financial product opens with. Three rules apply
to it that do not apply to ordinary text:

  The figure carries its scale, always.
  Digits are tabular, so one metric lines up under the next.
  Direction is a caret and a word before it is a colour.

It is not a chart. One period of data does not make a trend,
and a sparkline drawn from a single point would be invented.`,methods:[],displayName:"Metric",props:{label:{required:!0,tsType:{name:"string"},description:"What is being counted. Read once."},value:{required:!0,tsType:{name:"ReactNode"},description:`The figure, already formatted with its scale. This component will not
format it: a number is wrong by a factor of a thousand in this document
without its unit, and that decision belongs to the caller.`},unit:{required:!1,tsType:{name:"string"},description:"The unit or scale, set beside the figure rather than inside it."},change:{required:!1,tsType:{name:"string"},description:"A change against some baseline, such as decisions made today."},direction:{required:!1,tsType:{name:"union",raw:"'up' | 'down' | 'flat'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'flat'"}]},description:`Which way the change points. Renders a caret and a word, so direction
survives greyscale and colour vision deficiency.`,defaultValue:{value:"'flat'",computed:!1}},context:{required:!1,tsType:{name:"ReactNode"},description:"One line of context under the figure."},size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};export{c as M};
