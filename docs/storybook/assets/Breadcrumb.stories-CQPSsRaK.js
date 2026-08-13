import{o as e}from"./iframe-BK5E95r_.js";import{t}from"./react-BmUjuMcc.js";import{t as n}from"./jsx-runtime-Da8i6pCd.js";import{t as r}from"./clsx-DB0hHKMi.js";var i=e(t(),1),a=n(),o=i.forwardRef(({className:e,...t},n)=>(0,a.jsx)(`nav`,{ref:n,"aria-label":`breadcrumb`,className:r(`vektr-breadcrumb`,e),...t}));o.displayName=`Breadcrumb`;var s=i.forwardRef(({className:e,...t},n)=>(0,a.jsx)(`ol`,{ref:n,className:r(`vektr-breadcrumb-list`,e),...t}));s.displayName=`BreadcrumbList`;var c=i.forwardRef(({className:e,...t},n)=>(0,a.jsx)(`li`,{ref:n,className:r(`vektr-breadcrumb-item`,e),...t}));c.displayName=`BreadcrumbItem`;var l=i.forwardRef(({className:e,...t},n)=>(0,a.jsx)(`a`,{ref:n,className:r(`vektr-breadcrumb-link`,e),...t}));l.displayName=`BreadcrumbLink`;var u=i.forwardRef(({className:e,...t},n)=>(0,a.jsx)(`span`,{ref:n,role:`link`,"aria-disabled":`true`,"aria-current":`page`,className:r(`vektr-breadcrumb-page`,e),...t}));u.displayName=`BreadcrumbPage`;var d=({children:e=`/`,className:t,...n})=>(0,a.jsx)(`li`,{role:`presentation`,"aria-hidden":`true`,className:r(`vektr-breadcrumb-separator`,t),...n,children:e});d.displayName=`BreadcrumbSeparator`,o.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`},s.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbList`},c.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbItem`},l.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbLink`},u.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbPage`},d.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbSeparator`,props:{children:{defaultValue:{value:`'/'`,computed:!1},required:!1}}};var f={title:`Navigation/Breadcrumb`,component:o,tags:[`autodocs`]},p={render:()=>(0,a.jsx)(o,{children:(0,a.jsxs)(s,{children:[(0,a.jsx)(c,{children:(0,a.jsx)(l,{href:`/`,children:`Home`})}),(0,a.jsx)(d,{}),(0,a.jsx)(c,{children:(0,a.jsx)(l,{href:`/components`,children:`Components`})}),(0,a.jsx)(d,{}),(0,a.jsx)(c,{children:(0,a.jsx)(u,{children:`Breadcrumb`})})]})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...p.parameters?.docs?.source}}};var m=[`Default`];export{p as Default,m as __namedExportsOrder,f as default};