import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g,R as j}from"./index-UiW3gZKV.js";import{c as h,u as $}from"./index-vqJttv-m.js";import{c as B}from"./index-BpC7CEvB.js";import{R as G,I as K,c as M}from"./index-BuRscVs7.js";import{P as O}from"./index-B33pjH6a.js";import{P as y}from"./index-CbhEr7yb.js";import{u as W}from"./index-D4ubLTNW.js";import{u as q}from"./index-B_POJiOA.js";import{c as _}from"./clsx-B-dksMZM.js";import{C}from"./Card-C2jAc_aU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-xLXNAgRb.js";import"./index-zrl4sMk3.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";var z=Object.defineProperty,m=(t,a)=>z(t,"name",{value:a,configurable:!0}),I="Tabs",[H,xe]=B(I,[M]),V=M(),[J,w]=H(I),Q=g.forwardRef(m(function(a,o){const{__scopeTabs:l,value:r,onValueChange:i,defaultValue:d,orientation:n="horizontal",dir:u,activationMode:b="automatic",...v}=a,c=W(u),[s,p]=$({prop:r,onChange:i,defaultProp:d??"",caller:I});return e.jsx(J,{scope:l,baseId:q(),value:s,onValueChange:p,orientation:n,dir:c,activationMode:b,children:e.jsx(y.div,{dir:c,"data-orientation":n,...v,ref:o})})},"Tabs")),U="TabsList",X=g.forwardRef(m(function(a,o){const{__scopeTabs:l,loop:r=!0,...i}=a,d=w(U,l),n=V(l);return e.jsx(G,{asChild:!0,...n,orientation:d.orientation,dir:d.dir,loop:r,children:e.jsx(y.div,{role:"tablist","aria-orientation":d.orientation,...i,ref:o})})},"TabsList")),Y="TabsTrigger",Z=g.forwardRef(m(function(a,o){const{__scopeTabs:l,value:r,disabled:i=!1,...d}=a,n=w(Y,l),u=V(l),b=R(n.baseId,r),v=P(n.baseId,r),c=r===n.value;return e.jsx(K,{asChild:!0,...u,focusable:!i,active:c,children:e.jsx(y.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":v,"data-state":c?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:b,...d,ref:o,onMouseDown:h(a.onMouseDown,s=>{!i&&s.button===0&&s.ctrlKey===!1?n.onValueChange(r):s.preventDefault()}),onKeyDown:h(a.onKeyDown,s=>{i||s.target!==s.currentTarget||[" ","Enter"].includes(s.key)&&n.onValueChange(r)}),onFocus:h(a.onFocus,()=>{const s=n.activationMode!=="manual";!c&&!i&&s&&n.onValueChange(r)})})})},"TabsTrigger")),ee="TabsContent",ae=g.forwardRef(m(function(a,o){const{__scopeTabs:l,value:r,forceMount:i,children:d,...n}=a,u=w(ee,l),b=R(u.baseId,r),v=P(u.baseId,r),c=r===u.value,s=g.useRef(c);return g.useEffect(()=>{const p=requestAnimationFrame(()=>s.current=!1);return()=>cancelAnimationFrame(p)},[]),e.jsx(O,{present:i||c,children:({present:p})=>e.jsx(y.div,{"data-state":c?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":b,hidden:!p,id:v,tabIndex:0,...n,ref:o,style:{...a.style,animationDuration:s.current?"0s":void 0},children:p&&d})})},"TabsContent"));function R(t,a){return`${t}-trigger-${a}`}m(R,"makeTriggerId");function P(t,a){return`${t}-content-${a}`}m(P,"makeContentId");var te=Q,D=X,F=Z,L=ae;const k=te,S=j.forwardRef(({className:t,...a},o)=>e.jsx(D,{ref:o,className:_("vektr-tabs-list",t),...a}));S.displayName=D.displayName;const T=j.forwardRef(({className:t,...a},o)=>e.jsx(F,{ref:o,className:_("vektr-tabs-trigger",t),...a}));T.displayName=F.displayName;const f=j.forwardRef(({className:t,...a},o)=>e.jsx(L,{ref:o,className:_("vektr-tabs-content",t),...a}));f.displayName=L.displayName;S.__docgenInfo={description:"",methods:[]};T.__docgenInfo={description:"",methods:[]};f.__docgenInfo={description:"",methods:[]};const ye={title:"Navigation/Tabs",component:k,tags:["autodocs"]},x={render:()=>e.jsx("div",{style:{maxWidth:"480px"},children:e.jsxs(k,{defaultValue:"account",children:[e.jsxs(S,{"aria-label":"Settings Tabs",children:[e.jsx(T,{value:"account",children:"Account"}),e.jsx(T,{value:"password",children:"Password"}),e.jsx(T,{value:"billing",children:"Billing"})]}),e.jsx(f,{value:"account",style:{marginTop:"16px"},children:e.jsxs(C,{variant:"base",style:{padding:"16px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Account Settings"}),e.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Manage your profile name and email address preferences."})]})}),e.jsx(f,{value:"password",style:{marginTop:"16px"},children:e.jsxs(C,{variant:"base",style:{padding:"16px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Password & Security"}),e.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Change your password and enable multi-factor authentication."})]})}),e.jsx(f,{value:"billing",style:{marginTop:"16px"},children:e.jsxs(C,{variant:"base",style:{padding:"16px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0"},children:"Billing Information"}),e.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"View past invoices and payment method details."})]})})]})})};var A,N,E;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '480px'
  }}>
      <Tabs defaultValue="account">
        <TabsList aria-label="Settings Tabs">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="account" style={{
        marginTop: '16px'
      }}>
          <Card variant="base" style={{
          padding: '16px'
        }}>
            <h4 style={{
            margin: '0 0 8px 0'
          }}>Account Settings</h4>
            <p style={{
            margin: 0,
            color: 'var(--text-secondary)'
          }}>Manage your profile name and email address preferences.</p>
          </Card>
        </TabsContent>
        <TabsContent value="password" style={{
        marginTop: '16px'
      }}>
          <Card variant="base" style={{
          padding: '16px'
        }}>
            <h4 style={{
            margin: '0 0 8px 0'
          }}>Password & Security</h4>
            <p style={{
            margin: 0,
            color: 'var(--text-secondary)'
          }}>Change your password and enable multi-factor authentication.</p>
          </Card>
        </TabsContent>
        <TabsContent value="billing" style={{
        marginTop: '16px'
      }}>
          <Card variant="base" style={{
          padding: '16px'
        }}>
            <h4 style={{
            margin: '0 0 8px 0'
          }}>Billing Information</h4>
            <p style={{
            margin: 0,
            color: 'var(--text-secondary)'
          }}>View past invoices and payment method details.</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
}`,...(E=(N=x.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const he=["Default"];export{x as Default,he as __namedExportsOrder,ye as default};
