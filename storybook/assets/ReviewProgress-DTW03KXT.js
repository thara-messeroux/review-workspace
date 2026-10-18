import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-DIJ0w6uU.js";import{P as c}from"./Progress-DLQ8YmYX.js";function m({total:e,arrived:i,reviewed:a,phase:s}){const o=Math.max(e-i,0),n=e-a,d=t.useId(),l=t.useId();return r.jsxs("div",{className:"ds-review-progress",children:[r.jsx("h3",{id:d,className:"ds-review-progress__heading",children:"Review progress"}),r.jsx(c,{id:l,label:"Reviewed by you",value:a,max:e}),r.jsxs("p",{className:"ds-review-progress__status",role:"status",children:[s==="idle"?"Waiting to start.":null,s==="streaming"?`Extraction running. ${i} of ${e} fields in so far.`:null,s==="complete"?`Extraction finished. All ${e} fields arrived.`:null,s==="failed"?`Extraction failed after ${i} of ${e} fields. ${o} never arrived.`:null]}),n>0?r.jsx("p",{className:"ds-review-progress__guard",children:`${n} field${n===1?"":"s"} still need your decision before this can be approved.`}):null]})}m.__docgenInfo={description:`Two counts, never merged into one.

  arrived  = how much the machine has done
  reviewed = how much a person has done

A single combined bar would let a finished extraction read as a finished
review, which is the exact confusion this screen exists to prevent. Only the
human count gets a bar; the machine count is reported as a sentence, so the
two can never be mistaken for one another at a glance.

Composed from \`Progress\`, so the bar itself is the same component used
everywhere else.`,methods:[],displayName:"ReviewProgress",props:{total:{required:!0,tsType:{name:"number"},description:"Fields the job said it would produce."},arrived:{required:!0,tsType:{name:"number"},description:"Fields that have actually arrived."},reviewed:{required:!0,tsType:{name:"number"},description:"Fields a person has accepted, edited or rejected."},phase:{required:!0,tsType:{name:"union",raw:`| 'idle'
/** Fields are still arriving. */
| 'streaming'
/** Every field arrived. */
| 'complete'
/** The job died partway. Some fields will never arrive. */
| 'failed'`,elements:[{name:"literal",value:"'idle'"},{name:"literal",value:"'streaming'"},{name:"literal",value:"'complete'"},{name:"literal",value:"'failed'"}]},description:""}}};export{m as R};
