import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{B as l}from"./Badge-DmcHl47n.js";const o={unreviewed:{label:"Not reviewed",tone:"neutral",glyph:"○"},accepted:{label:"Accepted",tone:"success",glyph:"✓"},edited:{label:"Edited by analyst",tone:"accent",glyph:"✎"},rejected:{label:"Rejected",tone:"danger",glyph:"✕"},"needs-evidence":{label:"No source cited",tone:"warning",glyph:"!"},conflict:{label:"Conflicting values",tone:"warning",glyph:"⇄"},unsupported:{label:"Evidence does not support",tone:"warning",glyph:"?"},missing:{label:"Not found",tone:"outline",glyph:"–",dashed:!0},failed:{label:"Extraction failed",tone:"danger",glyph:"⚠"},arriving:{label:"Arriving",tone:"info",glyph:"…"}};function d({status:n,label:t,size:a="md"}){const e=o[n];return i.jsx(l,{tone:e.tone,size:a,glyph:e.glyph,dashed:e.dashed,children:t??e.label})}d.__docgenInfo={description:"The review-specific wrapper around `Badge`. It owns the mapping from a\ndomain status to a tone, a glyph and a form of words, and owns nothing else.\nAll of its appearance comes from `Badge`, so there is one badge in this\nsystem rather than two that drift.",methods:[],displayName:"ReviewStatusBadge",props:{status:{required:!0,tsType:{name:"union",raw:`| 'unreviewed'
/** A person read the evidence and kept the model's value. */
| 'accepted'
/** A person replaced the model's value. */
| 'edited'
/** A person judged the value unusable. */
| 'rejected'
/** The model gave a value but cited nothing to support it. */
| 'needs-evidence'
/** The document supports more than one answer. */
| 'conflict'
/**
 * A citation exists but does not support the claim: it points at a heading,
 * or part of the text cannot be found in the document at all. Distinct from
 * \`needs-evidence\`, where nothing was cited.
 */
| 'unsupported'
/** The model found nothing. Absence of evidence, not evidence of absence. */
| 'missing'
/** The extraction job died before this field arrived. */
| 'failed'
/** Still streaming in. */
| 'arriving'`,elements:[{name:"literal",value:"'unreviewed'"},{name:"literal",value:"'accepted'"},{name:"literal",value:"'edited'"},{name:"literal",value:"'rejected'"},{name:"literal",value:"'needs-evidence'"},{name:"literal",value:"'conflict'"},{name:"literal",value:"'unsupported'"},{name:"literal",value:"'missing'"},{name:"literal",value:"'failed'"},{name:"literal",value:"'arriving'"}]},description:""},label:{required:!1,tsType:{name:"string"},description:"Overrides the default wording, for example to name a count."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};export{d as R};
