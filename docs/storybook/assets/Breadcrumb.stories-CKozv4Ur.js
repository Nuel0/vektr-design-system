import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as c}from"./index-UiW3gZKV.js";import{c as m}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const i=c.forwardRef(({className:e,...a},d)=>r.jsx("nav",{ref:d,"aria-label":"breadcrumb",className:m("vektr-breadcrumb",e),...a}));i.displayName="Breadcrumb";const u=c.forwardRef(({className:e,...a},d)=>r.jsx("ol",{ref:d,className:m("vektr-breadcrumb-list",e),...a}));u.displayName="BreadcrumbList";const s=c.forwardRef(({className:e,...a},d)=>r.jsx("li",{ref:d,className:m("vektr-breadcrumb-item",e),...a}));s.displayName="BreadcrumbItem";const t=c.forwardRef(({className:e,...a},d)=>r.jsx("a",{ref:d,className:m("vektr-breadcrumb-link",e),...a}));t.displayName="BreadcrumbLink";const b=c.forwardRef(({className:e,...a},d)=>r.jsx("span",{ref:d,role:"link","aria-disabled":"true","aria-current":"page",className:m("vektr-breadcrumb-page",e),...a}));b.displayName="BreadcrumbPage";const o=({children:e="/",className:a,...d})=>r.jsx("li",{role:"presentation","aria-hidden":"true",className:m("vektr-breadcrumb-separator",a),...d,children:e});o.displayName="BreadcrumbSeparator";i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};t.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink"};b.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};o.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",props:{children:{defaultValue:{value:"'/'",computed:!1},required:!1}}};const j={title:"Navigation/Breadcrumb",component:i,tags:["autodocs"]},n={render:()=>r.jsx(i,{children:r.jsxs(u,{children:[r.jsx(s,{children:r.jsx(t,{href:"/",children:"Home"})}),r.jsx(o,{}),r.jsx(s,{children:r.jsx(t,{href:"/components",children:"Components"})}),r.jsx(o,{}),r.jsx(s,{children:r.jsx(b,{children:"Breadcrumb"})})]})})};var l,p,B;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(B=(p=n.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};const g=["Default"];export{n as Default,g as __namedExportsOrder,j as default};
