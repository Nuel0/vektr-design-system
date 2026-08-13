import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as i}from"./index-UiW3gZKV.js";import{D as v,a as j,b as x,c as C,g as N,d as T,e as h,f as u}from"./index-DhLsREqI.js";import{c as n}from"./clsx-B-dksMZM.js";import{B as s}from"./Button-BZa4-tXt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-vqJttv-m.js";import"./index-BpC7CEvB.js";import"./index-xLXNAgRb.js";import"./index-B_POJiOA.js";import"./index-Cz7a-5KT.js";import"./index-CbhEr7yb.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";import"./index-zrl4sMk3.js";import"./index-Dhn6b2uD.js";import"./index-B33pjH6a.js";const w=v,B=j,_=x,l=i.forwardRef(({className:r,children:t,side:a="right",...f},y)=>e.jsxs(C,{children:[e.jsx(N,{className:"vektr-drawer-overlay"}),e.jsxs(T,{ref:y,"data-side":a,className:n("vektr-drawer-content",r),...f,children:[t,e.jsx(x,{className:"vektr-drawer-close",children:"✕"})]})]}));l.displayName="DrawerContent";const d=i.forwardRef(({className:r,...t},a)=>e.jsx("div",{ref:a,className:n("vektr-drawer-header",r),...t}));d.displayName="DrawerHeader";const c=i.forwardRef(({className:r,...t},a)=>e.jsx(h,{ref:a,className:n("vektr-drawer-title",r),...t}));c.displayName=h.displayName;const p=i.forwardRef(({className:r,...t},a)=>e.jsx(u,{ref:a,className:n("vektr-drawer-description",r),...t}));p.displayName=u.displayName;l.__docgenInfo={description:"",methods:[],displayName:"DrawerContent",props:{side:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'right'",computed:!1}}}};d.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader"};c.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};const K={title:"Overlays/Drawer",component:w,tags:["autodocs"],argTypes:{side:{control:"radio",options:["left","right","top","bottom"]}}},o={render:r=>e.jsxs(w,{side:"right",...r,children:[e.jsx(B,{asChild:!0,children:e.jsx(s,{variant:"secondary",children:"Open Navigation Drawer"})}),e.jsxs(l,{style:{width:"320px",padding:"20px"},children:[e.jsxs(d,{children:[e.jsx(c,{children:"Navigation Menu"}),e.jsx(p,{children:"Access system configuration & component docs."})]}),e.jsxs("div",{style:{marginTop:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(s,{variant:"ghost",style:{justifyContent:"flex-start"},children:"Dashboard"}),e.jsx(s,{variant:"ghost",style:{justifyContent:"flex-start"},children:"Design Tokens"}),e.jsx(s,{variant:"ghost",style:{justifyContent:"flex-start"},children:"Component Registry"})]}),e.jsx("div",{style:{marginTop:"24px"},children:e.jsx(_,{asChild:!0,children:e.jsx(s,{variant:"outline",style:{width:"100%"},children:"Close Menu"})})})]})]})};var m,g,D;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Drawer side="right" {...args}>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open Navigation Drawer</Button>
      </DrawerTrigger>
      <DrawerContent style={{
      width: '320px',
      padding: '20px'
    }}>
        <DrawerHeader>
          <DrawerTitle>Navigation Menu</DrawerTitle>
          <DrawerDescription>Access system configuration & component docs.</DrawerDescription>
        </DrawerHeader>
        <div style={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Button variant="ghost" style={{
          justifyContent: 'flex-start'
        }}>Dashboard</Button>
          <Button variant="ghost" style={{
          justifyContent: 'flex-start'
        }}>Design Tokens</Button>
          <Button variant="ghost" style={{
          justifyContent: 'flex-start'
        }}>Component Registry</Button>
        </div>
        <div style={{
        marginTop: '24px'
      }}>
          <DrawerClose asChild>
            <Button variant="outline" style={{
            width: '100%'
          }}>Close Menu</Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
}`,...(D=(g=o.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};const L=["SideDrawer"];export{o as SideDrawer,L as __namedExportsOrder,K as default};
