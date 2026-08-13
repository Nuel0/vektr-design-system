import{o as e}from"./iframe-BK5E95r_.js";import{t}from"./react-BmUjuMcc.js";import{t as n}from"./jsx-runtime-Da8i6pCd.js";import{t as r}from"./clsx-DB0hHKMi.js";import{t as i}from"./Button-Cu61E419.js";import{a,c as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./dist-B1UbDN8H.js";var p=e(t(),1),m=n(),h=f,g=o,_=l,v=c,y=p.forwardRef(({className:e,...t},n)=>(0,m.jsx)(a,{ref:n,className:r(`vektr-dialog-overlay`,e),...t}));y.displayName=a.displayName;var b=p.forwardRef(({className:e,children:t,...n},i)=>(0,m.jsxs)(_,{children:[(0,m.jsx)(y,{}),(0,m.jsxs)(u,{ref:i,className:r(`vektr-dialog-content`,e),...n,children:[t,(0,m.jsx)(c,{className:`vektr-dialog-close`,children:`✕`})]})]}));b.displayName=u.displayName;var x=p.forwardRef(({className:e,...t},n)=>(0,m.jsx)(`div`,{ref:n,className:r(`vektr-dialog-header`,e),...t}));x.displayName=`DialogHeader`;var S=p.forwardRef(({className:e,...t},n)=>(0,m.jsx)(d,{ref:n,className:r(`vektr-dialog-title`,e),...t}));S.displayName=d.displayName;var C=p.forwardRef(({className:e,...t},n)=>(0,m.jsx)(s,{ref:n,className:r(`vektr-dialog-description`,e),...t}));C.displayName=s.displayName,y.__docgenInfo={description:``,methods:[]},b.__docgenInfo={description:``,methods:[]},x.__docgenInfo={description:``,methods:[],displayName:`DialogHeader`},S.__docgenInfo={description:``,methods:[]},C.__docgenInfo={description:``,methods:[]};var w={title:`Overlays/Dialog`,component:h,tags:[`autodocs`]},T={render:()=>(0,m.jsxs)(h,{children:[(0,m.jsx)(g,{asChild:!0,children:(0,m.jsx)(i,{variant:`primary`,children:`Open Modal Dialog`})}),(0,m.jsxs)(b,{style:{maxWidth:`420px`},children:[(0,m.jsxs)(x,{children:[(0,m.jsx)(S,{children:`Confirm Action`}),(0,m.jsx)(C,{children:`Are you sure you want to publish the release package to NPM registry?`})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`8px`,marginTop:`16px`},children:[(0,m.jsx)(v,{asChild:!0,children:(0,m.jsx)(i,{variant:`outline`,children:`Cancel`})}),(0,m.jsx)(v,{asChild:!0,children:(0,m.jsx)(i,{variant:`primary`,children:`Publish Release`})})]})]})]})};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Open Modal Dialog</Button>
      </DialogTrigger>
      <DialogContent style={{
      maxWidth: '420px'
    }}>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            Are you sure you want to publish the release package to NPM registry?
          </DialogDescription>
        </DialogHeader>
        <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '8px',
        marginTop: '16px'
      }}>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="primary">Publish Release</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
}`,...T.parameters?.docs?.source}}};var E=[`Default`];export{T as Default,E as __namedExportsOrder,w as default};