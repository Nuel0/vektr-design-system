import{o as e}from"./iframe-BK5E95r_.js";import{t}from"./react-BmUjuMcc.js";import{t as n}from"./jsx-runtime-Da8i6pCd.js";import{t as r}from"./clsx-DB0hHKMi.js";import{t as i}from"./Button-Cu61E419.js";import{a,c as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./dist-B1UbDN8H.js";var p=e(t(),1),m=n(),h=f,g=o,_=c,v=p.forwardRef(({className:e,children:t,side:n=`right`,...i},o)=>(0,m.jsxs)(l,{children:[(0,m.jsx)(a,{className:`vektr-drawer-overlay`}),(0,m.jsxs)(u,{ref:o,"data-side":n,className:r(`vektr-drawer-content`,e),...i,children:[t,(0,m.jsx)(c,{className:`vektr-drawer-close`,children:`✕`})]})]}));v.displayName=`DrawerContent`;var y=p.forwardRef(({className:e,...t},n)=>(0,m.jsx)(`div`,{ref:n,className:r(`vektr-drawer-header`,e),...t}));y.displayName=`DrawerHeader`;var b=p.forwardRef(({className:e,...t},n)=>(0,m.jsx)(d,{ref:n,className:r(`vektr-drawer-title`,e),...t}));b.displayName=d.displayName;var x=p.forwardRef(({className:e,...t},n)=>(0,m.jsx)(s,{ref:n,className:r(`vektr-drawer-description`,e),...t}));x.displayName=s.displayName,v.__docgenInfo={description:``,methods:[],displayName:`DrawerContent`,props:{side:{required:!1,tsType:{name:`union`,raw:`'left' | 'right' | 'top' | 'bottom'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'right'`,computed:!1}}}},y.__docgenInfo={description:``,methods:[],displayName:`DrawerHeader`},b.__docgenInfo={description:``,methods:[]},x.__docgenInfo={description:``,methods:[]};var S={title:`Overlays/Drawer`,component:h,tags:[`autodocs`],argTypes:{side:{control:`radio`,options:[`left`,`right`,`top`,`bottom`]}}},C={render:e=>(0,m.jsxs)(h,{side:`right`,...e,children:[(0,m.jsx)(g,{asChild:!0,children:(0,m.jsx)(i,{variant:`secondary`,children:`Open Navigation Drawer`})}),(0,m.jsxs)(v,{style:{width:`320px`,padding:`20px`},children:[(0,m.jsxs)(y,{children:[(0,m.jsx)(b,{children:`Navigation Menu`}),(0,m.jsx)(x,{children:`Access system configuration & component docs.`})]}),(0,m.jsxs)(`div`,{style:{marginTop:`20px`,display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,m.jsx)(i,{variant:`ghost`,style:{justifyContent:`flex-start`},children:`Dashboard`}),(0,m.jsx)(i,{variant:`ghost`,style:{justifyContent:`flex-start`},children:`Design Tokens`}),(0,m.jsx)(i,{variant:`ghost`,style:{justifyContent:`flex-start`},children:`Component Registry`})]}),(0,m.jsx)(`div`,{style:{marginTop:`24px`},children:(0,m.jsx)(_,{asChild:!0,children:(0,m.jsx)(i,{variant:`outline`,style:{width:`100%`},children:`Close Menu`})})})]})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};var w=[`SideDrawer`];export{C as SideDrawer,w as __namedExportsOrder,S as default};