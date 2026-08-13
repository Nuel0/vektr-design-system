import{o as e}from"./iframe-BK5E95r_.js";import{t}from"./react-BmUjuMcc.js";import{t as n}from"./jsx-runtime-Da8i6pCd.js";import{t as r}from"./clsx-DB0hHKMi.js";var i=e(t(),1),a=n(),o=i.forwardRef(({className:e,variant:t=`info`,...n},i)=>(0,a.jsx)(`div`,{ref:i,role:`alert`,"data-variant":t,className:r(`vektr-alert`,e),...n}));o.displayName=`Alert`;var s=i.forwardRef(({className:e,...t},n)=>(0,a.jsx)(`h5`,{ref:n,className:r(`vektr-alert-title`,e),...t}));s.displayName=`AlertTitle`;var c=i.forwardRef(({className:e,...t},n)=>(0,a.jsx)(`div`,{ref:n,className:r(`vektr-alert-description`,e),...t}));c.displayName=`AlertDescription`,o.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}}}},s.__docgenInfo={description:``,methods:[],displayName:`AlertTitle`},c.__docgenInfo={description:``,methods:[],displayName:`AlertDescription`};var l={title:`Status/Alert`,component:o,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`danger`]}},args:{variant:`info`}},u={render:e=>(0,a.jsx)(`div`,{style:{maxWidth:`480px`},children:(0,a.jsxs)(o,{...e,children:[(0,a.jsx)(s,{children:`System Notice`}),(0,a.jsx)(c,{children:`Your account sync completed successfully.`})]})})},d={render:()=>(0,a.jsx)(`div`,{style:{maxWidth:`480px`},children:(0,a.jsxs)(o,{variant:`warning`,children:[(0,a.jsx)(s,{children:`Figma REST API Credentials Missing`}),(0,a.jsx)(c,{children:`Daily sync workflow is running in DORMANT mode using cached tokens.json.`})]})})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: '480px'
  }}>
      <Alert {...args}>
        <AlertTitle>System Notice</AlertTitle>
        <AlertDescription>Your account sync completed successfully.</AlertDescription>
      </Alert>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`WarningAlert`];export{u as Default,d as WarningAlert,f as __namedExportsOrder,l as default};