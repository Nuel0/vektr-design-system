import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as c}from"./index-UiW3gZKV.js";import{c as d}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const a=c.forwardRef(({className:r,variant:t="info",...s},x)=>e.jsx("div",{ref:x,role:"alert","data-variant":t,className:d("vektr-alert",r),...s}));a.displayName="Alert";const l=c.forwardRef(({className:r,...t},s)=>e.jsx("h5",{ref:s,className:d("vektr-alert-title",r),...t}));l.displayName="AlertTitle";const o=c.forwardRef(({className:r,...t},s)=>e.jsx("div",{ref:s,className:d("vektr-alert-description",r),...t}));o.displayName="AlertDescription";a.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'info'",computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};o.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const w={title:"Status/Alert",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","danger"]}},args:{variant:"info"}},n={render:r=>e.jsx("div",{style:{maxWidth:"480px"},children:e.jsxs(a,{...r,children:[e.jsx(l,{children:"System Notice"}),e.jsx(o,{children:"Your account sync completed successfully."})]})})},i={render:()=>e.jsx("div",{style:{maxWidth:"480px"},children:e.jsxs(a,{variant:"warning",children:[e.jsx(l,{children:"Figma REST API Credentials Missing"}),e.jsx(o,{children:"Daily sync workflow is running in DORMANT mode using cached tokens.json."})]})})};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: '480px'
  }}>
      <Alert {...args}>
        <AlertTitle>System Notice</AlertTitle>
        <AlertDescription>Your account sync completed successfully.</AlertDescription>
      </Alert>
    </div>
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,A;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '480px'
  }}>
      <Alert variant="warning">
        <AlertTitle>Figma REST API Credentials Missing</AlertTitle>
        <AlertDescription>
          Daily sync workflow is running in DORMANT mode using cached tokens.json.
        </AlertDescription>
      </Alert>
    </div>
}`,...(A=(g=i.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};const D=["Default","WarningAlert"];export{n as Default,i as WarningAlert,D as __namedExportsOrder,w as default};
