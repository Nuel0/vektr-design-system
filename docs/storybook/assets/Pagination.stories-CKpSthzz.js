import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as s}from"./index-UiW3gZKV.js";import{c as r}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const g=s.forwardRef(({className:i,...a},e)=>n.jsx("nav",{ref:e,"aria-label":"pagination",className:r("vektr-pagination",i),...a}));g.displayName="Pagination";const m=s.forwardRef(({className:i,...a},e)=>n.jsx("ul",{ref:e,className:r("vektr-pagination-content",i),...a}));m.displayName="PaginationContent";const t=s.forwardRef(({className:i,...a},e)=>n.jsx("li",{ref:e,className:r("vektr-pagination-item",i),...a}));t.displayName="PaginationItem";const o=s.forwardRef(({className:i,isActive:a,...e},d)=>n.jsx("a",{ref:d,"aria-current":a?"page":void 0,"data-active":a?"true":void 0,className:r("vektr-pagination-link",i),...e}));o.displayName="PaginationLink";const l=s.forwardRef(({className:i,children:a="‹ Previous",...e},d)=>n.jsx(o,{ref:d,className:r("vektr-pagination-prev",i),...e,children:a}));l.displayName="PaginationPrevious";const p=s.forwardRef(({className:i,children:a="Next ›",...e},d)=>n.jsx(o,{ref:d,className:r("vektr-pagination-next",i),...e,children:a}));p.displayName="PaginationNext";g.__docgenInfo={description:"",methods:[],displayName:"Pagination"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};o.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious",props:{children:{defaultValue:{value:"'‹ Previous'",computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"PaginationNext",props:{children:{defaultValue:{value:"'Next ›'",computed:!1},required:!1}}};const j={title:"Navigation/Pagination",component:g,tags:["autodocs"]},c={render:()=>n.jsx(g,{children:n.jsxs(m,{children:[n.jsx(t,{children:n.jsx(l,{href:"#"})}),n.jsx(t,{children:n.jsx(o,{href:"#",children:"1"})}),n.jsx(t,{children:n.jsx(o,{href:"#",isActive:!0,children:"2"})}),n.jsx(t,{children:n.jsx(o,{href:"#",children:"3"})}),n.jsx(t,{children:n.jsx(p,{href:"#"})})]})})};var P,f,x;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const I=["Default"];export{c as Default,I as __namedExportsOrder,j as default};
