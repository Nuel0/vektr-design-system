import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as s}from"./index-UiW3gZKV.js";import{D as _,a as R,b as f,c as T,d as u,e as y,f as j,g as C}from"./index-DhLsREqI.js";import{c as r}from"./clsx-B-dksMZM.js";import{B as l}from"./Button-BZa4-tXt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-vqJttv-m.js";import"./index-BpC7CEvB.js";import"./index-xLXNAgRb.js";import"./index-B_POJiOA.js";import"./index-Cz7a-5KT.js";import"./index-CbhEr7yb.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";import"./index-zrl4sMk3.js";import"./index-Dhn6b2uD.js";import"./index-B33pjH6a.js";const v=_,k=R,B=T,m=f,n=s.forwardRef(({className:a,...o},i)=>e.jsx(C,{ref:i,className:r("vektr-dialog-overlay",a),...o}));n.displayName=C.displayName;const d=s.forwardRef(({className:a,children:o,...i},N)=>e.jsxs(B,{children:[e.jsx(n,{}),e.jsxs(u,{ref:N,className:r("vektr-dialog-content",a),...i,children:[o,e.jsx(f,{className:"vektr-dialog-close",children:"✕"})]})]}));d.displayName=u.displayName;const c=s.forwardRef(({className:a,...o},i)=>e.jsx("div",{ref:i,className:r("vektr-dialog-header",a),...o}));c.displayName="DialogHeader";const g=s.forwardRef(({className:a,...o},i)=>e.jsx(y,{ref:i,className:r("vektr-dialog-title",a),...o}));g.displayName=y.displayName;const p=s.forwardRef(({className:a,...o},i)=>e.jsx(j,{ref:i,className:r("vektr-dialog-description",a),...o}));p.displayName=j.displayName;n.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[]};c.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};g.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};const K={title:"Overlays/Dialog",component:v,tags:["autodocs"]},t={render:()=>e.jsxs(v,{children:[e.jsx(k,{asChild:!0,children:e.jsx(l,{variant:"primary",children:"Open Modal Dialog"})}),e.jsxs(d,{style:{maxWidth:"420px"},children:[e.jsxs(c,{children:[e.jsx(g,{children:"Confirm Action"}),e.jsx(p,{children:"Are you sure you want to publish the release package to NPM registry?"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",marginTop:"16px"},children:[e.jsx(m,{asChild:!0,children:e.jsx(l,{variant:"outline",children:"Cancel"})}),e.jsx(m,{asChild:!0,children:e.jsx(l,{variant:"primary",children:"Publish Release"})})]})]})]})};var D,x,h;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,K as default};
