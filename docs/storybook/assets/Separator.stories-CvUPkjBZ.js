import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as O,R as z}from"./index-UiW3gZKV.js";import{P as _}from"./index-CbhEr7yb.js";import{c as R}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";import"./index-xLXNAgRb.js";var I=Object.defineProperty,h=(e,a)=>I(e,"name",{value:a,configurable:!0}),l="horizontal",N=["horizontal","vertical"],P=O.forwardRef(h(function(a,s){const{decorative:p,orientation:o=l,...g}=a,d=j(o)?o:l,S=p?{role:"none"}:{"aria-orientation":d==="vertical"?d:void 0,role:"separator"};return r.jsx(_.div,{"data-orientation":d,...S,...g,ref:s})},"Separator"));function j(e){return N.includes(e)}h(j,"isValidOrientation");var y=P;const t=z.forwardRef(({className:e,orientation:a="horizontal",decorative:s=!0,...p},o)=>r.jsx(y,{ref:o,decorative:s,orientation:a,className:R("vektr-separator",e),...p}));t.displayName=y.displayName;t.__docgenInfo={description:"",methods:[],props:{orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};const q={title:"Layout/Separator",component:t,tags:["autodocs"],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]}}},i={render:()=>r.jsxs("div",{style:{width:"300px"},children:[r.jsx("div",{children:"Header Content"}),r.jsx(t,{orientation:"horizontal",style:{margin:"12px 0"}}),r.jsx("div",{children:"Body Content"})]})},n={render:()=>r.jsxs("div",{style:{display:"flex",alignItems:"center",height:"24px",gap:"12px"},children:[r.jsx("span",{children:"Home"}),r.jsx(t,{orientation:"vertical"}),r.jsx("span",{children:"Docs"}),r.jsx(t,{orientation:"vertical"}),r.jsx("span",{children:"Components"})]})};var c,m,v;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <div>Header Content</div>
      <Separator orientation="horizontal" style={{
      margin: '12px 0'
    }} />
      <div>Body Content</div>
    </div>
}`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var u,x,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const B=["Horizontal","Vertical"];export{i as Horizontal,n as Vertical,B as __namedExportsOrder,q as default};
