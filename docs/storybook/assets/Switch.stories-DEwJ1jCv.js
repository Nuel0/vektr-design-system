import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s,R as re}from"./index-UiW3gZKV.js";import{c as $,u as se}from"./index-vqJttv-m.js";import{u as J}from"./index-xLXNAgRb.js";import{c as ne}from"./index-BpC7CEvB.js";import{u as oe}from"./index-9vRh73al.js";import{P as L}from"./index-CbhEr7yb.js";import{c as ce}from"./clsx-B-dksMZM.js";import{L as P}from"./Label-Bbu7F1c0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";var ae=Object.defineProperty,w=(t,n)=>ae(t,"name",{value:n,configurable:!0}),T="Switch",[ie,Ee]=ne(T),[de,D]=ie(T);function K(t){const{__scopeSwitch:n,checked:i,children:c,defaultChecked:l,disabled:r,form:d,name:u,onCheckedChange:o,required:p,value:x="on",internal_do_not_use_render:m}=t,[h,b]=se({prop:i,defaultProp:l??!1,onChange:o,caller:T}),[S,C]=s.useState(null),[k,y]=s.useState(null),I=s.useRef(!1),[a,f]=s.useReducer(g=>g+1,0),R=S?!!d||!!S.closest("form"):!0,j={checked:h,setChecked:b,disabled:r,control:S,setControl:C,name:u,form:d,value:x,hasConsumerStoppedPropagationRef:I,userInteractionCount:a,onUserInteraction:f,required:p,defaultChecked:l,isFormControl:R,bubbleInput:k,setBubbleInput:y};return e.jsx(de,{scope:n,...j,children:V(m)?m(j):c})}w(K,"SwitchProvider");var le="SwitchTrigger",ue=s.forwardRef(w(function({__scopeSwitch:n,onClick:i,...c},l){const{control:r,form:d,value:u,disabled:o,checked:p,required:x,setControl:m,setChecked:h,hasConsumerStoppedPropagationRef:b,onUserInteraction:S,isFormControl:C,bubbleInput:k}=D(le,n),y=J(l,m),I=s.useRef(p);return s.useEffect(()=>{const a=d?r==null?void 0:r.ownerDocument.getElementById(d):r==null?void 0:r.form;if(a instanceof HTMLFormElement){const f=w(()=>h(I.current),"reset");return a.addEventListener("reset",f),()=>a.removeEventListener("reset",f)}},[r,d,h]),e.jsx(L.button,{type:"button",role:"switch","aria-checked":p,"aria-required":x,"data-state":B(p),"data-disabled":o?"":void 0,disabled:o,value:u,...c,ref:y,onClick:$(i,a=>{S(),h(f=>!f),k&&C&&(b.current=a.isPropagationStopped(),b.current||a.stopPropagation())})})},"SwitchTrigger")),Q=s.forwardRef(w(function(n,i){const{__scopeSwitch:c,name:l,checked:r,defaultChecked:d,required:u,disabled:o,value:p,onCheckedChange:x,form:m,...h}=n;return e.jsx(K,{__scopeSwitch:c,checked:r,defaultChecked:d,disabled:o,required:u,onCheckedChange:x,name:l,form:m,value:p,internal_do_not_use_render:({isFormControl:b})=>e.jsxs(e.Fragment,{children:[e.jsx(ue,{...h,ref:i,__scopeSwitch:c}),b&&e.jsx(me,{__scopeSwitch:c})]})})},"Switch")),pe="SwitchThumb",he=s.forwardRef(w(function(n,i){const{__scopeSwitch:c,...l}=n,r=D(pe,c);return e.jsx(L.span,{"data-state":B(r.checked),"data-disabled":r.disabled?"":void 0,...l,ref:i})},"SwitchThumb")),fe="SwitchBubbleInput",me=s.forwardRef(w(function({__scopeSwitch:n,onClick:i,...c},l){const{control:r,hasConsumerStoppedPropagationRef:d,userInteractionCount:u,checked:o,defaultChecked:p,required:x,disabled:m,name:h,value:b,form:S,bubbleInput:C,setBubbleInput:k}=D(fe,n),y=J(l,k),I=oe(r),a=s.useRef(!1),f=s.useRef(o),R=s.useRef(u);s.useEffect(()=>{const g=C;if(!g)return;const Y=window.HTMLInputElement.prototype,N=Object.getOwnPropertyDescriptor(Y,"checked").set,M=u!==R.current;R.current=u;const Z=f.current!==o;f.current=o;const ee=!(M&&d.current);if(Z&&N){a.current=!M;const te=new Event("click",{bubbles:ee});N.call(g,o),g.dispatchEvent(te),a.current=!1}},[C,o,d,u]);const j=s.useRef(o);return e.jsx(L.input,{type:"checkbox","aria-hidden":!0,defaultChecked:p??j.current,required:x,disabled:m,name:h,value:b,form:S,...c,tabIndex:-1,ref:y,onClick:$(i,g=>{a.current&&g.stopPropagation()}),style:{...c.style,...I,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})},"SwitchBubbleInput"));function V(t){return typeof t=="function"}w(V,"isFunction");function B(t){return t?"checked":"unchecked"}w(B,"getState");const v=re.forwardRef(({className:t,...n},i)=>e.jsx(Q,{className:ce("vektr-switch",t),...n,ref:i,children:e.jsx(he,{className:"vektr-switch-thumb"})}));v.displayName=Q.displayName;v.__docgenInfo={description:"",methods:[]};const Fe={title:"Actions/Switch",component:v,tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}}},_={render:t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(v,{id:"sw1",...t}),e.jsx(P,{htmlFor:"sw1",children:"Enable Dark Mode"})]})},E={render:()=>{const[t,n]=s.useState(!1);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(v,{id:"sw2",checked:t,onCheckedChange:n}),e.jsxs(P,{htmlFor:"sw2",children:["Feature Switch: ",t?"ON":"OFF"]})]})}},F={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(v,{id:"sw3",disabled:!0,defaultChecked:!0}),e.jsx(P,{htmlFor:"sw3",children:"Disabled Active Switch"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(v,{id:"sw4",disabled:!0}),e.jsx(P,{htmlFor:"sw4",children:"Disabled Inactive Switch"})]})]})};var O,A,U;_.parameters={..._.parameters,docs:{...(O=_.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }}>
      <Switch id="sw1" {...args} />
      <Label htmlFor="sw1">Enable Dark Mode</Label>
    </div>
}`,...(U=(A=_.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var q,H,z;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Switch id="sw2" checked={enabled} onCheckedChange={setEnabled} />
        <Label htmlFor="sw2">Feature Switch: {enabled ? 'ON' : 'OFF'}</Label>
      </div>;
  }
}`,...(z=(H=E.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var G,W,X;F.parameters={...F.parameters,docs:{...(G=F.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Switch id="sw3" disabled defaultChecked />
        <Label htmlFor="sw3">Disabled Active Switch</Label>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Switch id="sw4" disabled />
        <Label htmlFor="sw4">Disabled Inactive Switch</Label>
      </div>
    </div>
}`,...(X=(W=F.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const Pe=["Default","Controlled","Disabled"];export{E as Controlled,_ as Default,F as Disabled,Pe as __namedExportsOrder,Fe as default};
