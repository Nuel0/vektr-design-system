import{t as e}from"./Input-DLNW5IMk.js";var t={title:`Forms/Input`,component:e,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},helperText:{control:`text`},errorText:{control:`text`},disabled:{control:`boolean`}},args:{label:`Email Address`,placeholder:`name@company.com`,helperText:`We'll send your invoices here.`,disabled:!1}},n={},r={args:{label:`Work Email`,placeholder:`user@company.com`,errorText:`Invalid email address format`}},i={args:{label:`Account Identifier`,value:`ACC-883921`,disabled:!0,helperText:`Account ID cannot be edited.`}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Work Email',
    placeholder: 'user@company.com',
    errorText: 'Invalid email address format'
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Account Identifier',
    value: 'ACC-883921',
    disabled: true,
    helperText: 'Account ID cannot be edited.'
  }
}`,...i.parameters?.docs?.source}}};var a=[`Default`,`WithError`,`Disabled`];export{n as Default,i as Disabled,r as WithError,a as __namedExportsOrder,t as default};