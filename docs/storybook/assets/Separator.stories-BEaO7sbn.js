import{o as e}from"./iframe-BK5E95r_.js";import{t}from"./react-BmUjuMcc.js";import{t as n}from"./jsx-runtime-Da8i6pCd.js";import{t as r}from"./dist-De-te94h.js";import{t as i}from"./clsx-DB0hHKMi.js";var a=e(t(),1),o=n(),s=Object.defineProperty,c=(e,t)=>s(e,`name`,{value:t,configurable:!0}),l=`horizontal`,u=[`horizontal`,`vertical`],d=a.forwardRef(c(function(e,t){let{decorative:n,orientation:i=l,...a}=e,s=f(i)?i:l,c=n?{role:`none`}:{"aria-orientation":s===`vertical`?s:void 0,role:`separator`};return(0,o.jsx)(r.div,{"data-orientation":s,...c,...a,ref:t})},`Separator`));function f(e){return u.includes(e)}c(f,`isValidOrientation`);var p=d,m=a.forwardRef(({className:e,orientation:t=`horizontal`,decorative:n=!0,...r},a)=>(0,o.jsx)(p,{ref:a,decorative:n,orientation:t,className:i(`vektr-separator`,e),...r}));m.displayName=p.displayName,m.__docgenInfo={description:``,methods:[],props:{orientation:{defaultValue:{value:`'horizontal'`,computed:!1},required:!1},decorative:{defaultValue:{value:`true`,computed:!1},required:!1}}};var h={title:`Layout/Separator`,component:m,tags:[`autodocs`],argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`]}}},g={render:()=>(0,o.jsxs)(`div`,{style:{width:`300px`},children:[(0,o.jsx)(`div`,{children:`Header Content`}),(0,o.jsx)(m,{orientation:`horizontal`,style:{margin:`12px 0`}}),(0,o.jsx)(`div`,{children:`Body Content`})]})},_={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,height:`24px`,gap:`12px`},children:[(0,o.jsx)(`span`,{children:`Home`}),(0,o.jsx)(m,{orientation:`vertical`}),(0,o.jsx)(`span`,{children:`Docs`}),(0,o.jsx)(m,{orientation:`vertical`}),(0,o.jsx)(`span`,{children:`Components`})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <div>Header Content</div>
      <Separator orientation="horizontal" style={{
      margin: '12px 0'
    }} />
      <div>Body Content</div>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    height: '24px',
    gap: '12px'
  }}>
      <span>Home</span>
      <Separator orientation="vertical" />
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Components</span>
    </div>
}`,..._.parameters?.docs?.source}}};var v=[`Horizontal`,`Vertical`];export{g as Horizontal,_ as Vertical,v as __namedExportsOrder,h as default};