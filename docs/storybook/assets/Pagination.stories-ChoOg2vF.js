import{o as e}from"./iframe-BK5E95r_.js";import{t}from"./react-BmUjuMcc.js";import{t as n}from"./jsx-runtime-Da8i6pCd.js";import{t as r}from"./clsx-DB0hHKMi.js";var i=e(t(),1),a=n(),o=i.forwardRef(({className:e,...t},n)=>(0,a.jsx)(`nav`,{ref:n,"aria-label":`pagination`,className:r(`vektr-pagination`,e),...t}));o.displayName=`Pagination`;var s=i.forwardRef(({className:e,...t},n)=>(0,a.jsx)(`ul`,{ref:n,className:r(`vektr-pagination-content`,e),...t}));s.displayName=`PaginationContent`;var c=i.forwardRef(({className:e,...t},n)=>(0,a.jsx)(`li`,{ref:n,className:r(`vektr-pagination-item`,e),...t}));c.displayName=`PaginationItem`;var l=i.forwardRef(({className:e,isActive:t,...n},i)=>(0,a.jsx)(`a`,{ref:i,"aria-current":t?`page`:void 0,"data-active":t?`true`:void 0,className:r(`vektr-pagination-link`,e),...n}));l.displayName=`PaginationLink`;var u=i.forwardRef(({className:e,children:t=`‹ Previous`,...n},i)=>(0,a.jsx)(l,{ref:i,className:r(`vektr-pagination-prev`,e),...n,children:t}));u.displayName=`PaginationPrevious`;var d=i.forwardRef(({className:e,children:t=`Next ›`,...n},i)=>(0,a.jsx)(l,{ref:i,className:r(`vektr-pagination-next`,e),...n,children:t}));d.displayName=`PaginationNext`,o.__docgenInfo={description:``,methods:[],displayName:`Pagination`},s.__docgenInfo={description:``,methods:[],displayName:`PaginationContent`},c.__docgenInfo={description:``,methods:[],displayName:`PaginationItem`},l.__docgenInfo={description:``,methods:[],displayName:`PaginationLink`,props:{isActive:{required:!1,tsType:{name:`boolean`},description:``}}},u.__docgenInfo={description:``,methods:[],displayName:`PaginationPrevious`,props:{children:{defaultValue:{value:`'‹ Previous'`,computed:!1},required:!1}}},d.__docgenInfo={description:``,methods:[],displayName:`PaginationNext`,props:{children:{defaultValue:{value:`'Next ›'`,computed:!1},required:!1}}};var f={title:`Navigation/Pagination`,component:o,tags:[`autodocs`]},p={render:()=>(0,a.jsx)(o,{children:(0,a.jsxs)(s,{children:[(0,a.jsx)(c,{children:(0,a.jsx)(u,{href:`#`})}),(0,a.jsx)(c,{children:(0,a.jsx)(l,{href:`#`,children:`1`})}),(0,a.jsx)(c,{children:(0,a.jsx)(l,{href:`#`,isActive:!0,children:`2`})}),(0,a.jsx)(c,{children:(0,a.jsx)(l,{href:`#`,children:`3`})}),(0,a.jsx)(c,{children:(0,a.jsx)(d,{href:`#`})})]})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};var m=[`Default`];export{p as Default,m as __namedExportsOrder,f as default};