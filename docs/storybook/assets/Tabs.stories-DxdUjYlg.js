import{o as e}from"./iframe-BK5E95r_.js";import{t}from"./react-BmUjuMcc.js";import{t as n}from"./jsx-runtime-Da8i6pCd.js";import{n as r}from"./dist-BAzPu2Pp.js";import{t as i}from"./dist-Dh-b7MaN.js";import{n as a,t as o}from"./dist-B6ySIPXB.js";import{t as s}from"./dist-De-te94h.js";import{t as c}from"./dist-77WAcmdD.js";import{t as l}from"./dist-BLq-PhVt.js";import{t as u}from"./clsx-DB0hHKMi.js";import{t as d}from"./Card-gl9odEyr.js";import{n as f,r as p,t as m}from"./dist-DAFK06wf2.js";var h=e(t(),1),g=n(),_=Object.defineProperty,v=(e,t)=>_(e,`name`,{value:t,configurable:!0}),y=`Tabs`,[b,x]=r(y,[p]),S=p(),[C,w]=b(y),T=h.forwardRef(v(function(e,t){let{__scopeTabs:n,value:r,onValueChange:a,defaultValue:c,orientation:u=`horizontal`,dir:d,activationMode:f=`automatic`,...p}=e,m=i(d),[h,_]=o({prop:r,onChange:a,defaultProp:c??``,caller:y});return(0,g.jsx)(C,{scope:n,baseId:l(),value:h,onValueChange:_,orientation:u,dir:m,activationMode:f,children:(0,g.jsx)(s.div,{dir:m,"data-orientation":u,...p,ref:t})})},`Tabs`)),E=`TabsList`,D=h.forwardRef(v(function(e,t){let{__scopeTabs:n,loop:r=!0,...i}=e,a=w(E,n),o=S(n);return(0,g.jsx)(f,{asChild:!0,...o,orientation:a.orientation,dir:a.dir,loop:r,children:(0,g.jsx)(s.div,{role:`tablist`,"aria-orientation":a.orientation,...i,ref:t})})},`TabsList`)),O=`TabsTrigger`,k=h.forwardRef(v(function(e,t){let{__scopeTabs:n,value:r,disabled:i=!1,...o}=e,c=w(O,n),l=S(n),u=M(c.baseId,r),d=N(c.baseId,r),f=r===c.value;return(0,g.jsx)(m,{asChild:!0,...l,focusable:!i,active:f,children:(0,g.jsx)(s.button,{type:`button`,role:`tab`,"aria-selected":f,"aria-controls":d,"data-state":f?`active`:`inactive`,"data-disabled":i?``:void 0,disabled:i,id:u,...o,ref:t,onMouseDown:a(e.onMouseDown,e=>{!i&&e.button===0&&e.ctrlKey===!1?c.onValueChange(r):e.preventDefault()}),onKeyDown:a(e.onKeyDown,e=>{i||e.target!==e.currentTarget||[` `,`Enter`].includes(e.key)&&c.onValueChange(r)}),onFocus:a(e.onFocus,()=>{let e=c.activationMode!==`manual`;!f&&!i&&e&&c.onValueChange(r)})})})},`TabsTrigger`)),A=`TabsContent`,j=h.forwardRef(v(function(e,t){let{__scopeTabs:n,value:r,forceMount:i,children:a,...o}=e,l=w(A,n),u=M(l.baseId,r),d=N(l.baseId,r),f=r===l.value,p=h.useRef(f);return h.useEffect(()=>{let e=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,g.jsx)(c,{present:i||f,children:({present:n})=>(0,g.jsx)(s.div,{"data-state":f?`active`:`inactive`,"data-orientation":l.orientation,role:`tabpanel`,"aria-labelledby":u,hidden:!n,id:d,tabIndex:0,...o,ref:t,style:{...e.style,animationDuration:p.current?`0s`:void 0},children:n&&a})})},`TabsContent`));function M(e,t){return`${e}-trigger-${t}`}v(M,`makeTriggerId`);function N(e,t){return`${e}-content-${t}`}v(N,`makeContentId`);var P=T,F=D,I=k,L=j,R=P,z=h.forwardRef(({className:e,...t},n)=>(0,g.jsx)(F,{ref:n,className:u(`vektr-tabs-list`,e),...t}));z.displayName=F.displayName;var B=h.forwardRef(({className:e,...t},n)=>(0,g.jsx)(I,{ref:n,className:u(`vektr-tabs-trigger`,e),...t}));B.displayName=I.displayName;var V=h.forwardRef(({className:e,...t},n)=>(0,g.jsx)(L,{ref:n,className:u(`vektr-tabs-content`,e),...t}));V.displayName=L.displayName,z.__docgenInfo={description:``,methods:[]},B.__docgenInfo={description:``,methods:[]},V.__docgenInfo={description:``,methods:[]};var H={title:`Navigation/Tabs`,component:R,tags:[`autodocs`]},U={render:()=>(0,g.jsx)(`div`,{style:{maxWidth:`480px`},children:(0,g.jsxs)(R,{defaultValue:`account`,children:[(0,g.jsxs)(z,{"aria-label":`Settings Tabs`,children:[(0,g.jsx)(B,{value:`account`,children:`Account`}),(0,g.jsx)(B,{value:`password`,children:`Password`}),(0,g.jsx)(B,{value:`billing`,children:`Billing`})]}),(0,g.jsx)(V,{value:`account`,style:{marginTop:`16px`},children:(0,g.jsxs)(d,{variant:`base`,style:{padding:`16px`},children:[(0,g.jsx)(`h4`,{style:{margin:`0 0 8px 0`},children:`Account Settings`}),(0,g.jsx)(`p`,{style:{margin:0,color:`var(--text-secondary)`},children:`Manage your profile name and email address preferences.`})]})}),(0,g.jsx)(V,{value:`password`,style:{marginTop:`16px`},children:(0,g.jsxs)(d,{variant:`base`,style:{padding:`16px`},children:[(0,g.jsx)(`h4`,{style:{margin:`0 0 8px 0`},children:`Password & Security`}),(0,g.jsx)(`p`,{style:{margin:0,color:`var(--text-secondary)`},children:`Change your password and enable multi-factor authentication.`})]})}),(0,g.jsx)(V,{value:`billing`,style:{marginTop:`16px`},children:(0,g.jsxs)(d,{variant:`base`,style:{padding:`16px`},children:[(0,g.jsx)(`h4`,{style:{margin:`0 0 8px 0`},children:`Billing Information`}),(0,g.jsx)(`p`,{style:{margin:0,color:`var(--text-secondary)`},children:`View past invoices and payment method details.`})]})})]})})};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};var W=[`Default`];export{U as Default,W as __namedExportsOrder,H as default};