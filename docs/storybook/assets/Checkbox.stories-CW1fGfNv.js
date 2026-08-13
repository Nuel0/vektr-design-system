import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n,R as oe}from"./index-UiW3gZKV.js";import{u as Q}from"./index-xLXNAgRb.js";import{c as ce}from"./index-BpC7CEvB.js";import{c as w,u as ne}from"./index-vqJttv-m.js";import{u as se}from"./index-9vRh73al.js";import{P as ae}from"./index-B33pjH6a.js";import{P as B}from"./index-CbhEr7yb.js";import{c as de}from"./clsx-B-dksMZM.js";import{L as F}from"./Label-Bbu7F1c0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";var ie=Object.defineProperty,x=(t,o)=>ie(t,"name",{value:o,configurable:!0}),N="Checkbox",[le,Fe]=ce(N),[ue,U]=le(N);function V(t){const{__scopeCheckbox:o,checked:a,children:d,defaultChecked:i,disabled:h,form:r,name:l,onCheckedChange:c,required:u,value:g="on",internal_do_not_use_render:m}=t,[f,k]=ne({prop:a,defaultProp:i??!1,onChange:c,caller:N}),[v,I]=n.useState(null),[j,R]=n.useState(null),_=n.useRef(!1),[s,p]=n.useReducer(C=>C+1,0),P=v?!!r||!!v.closest("form"):!0,E={checked:f,disabled:h,setChecked:k,control:v,setControl:I,name:l,form:r,value:g,hasConsumerStoppedPropagationRef:_,userInteractionCount:s,onUserInteraction:p,required:u,defaultChecked:b(i)?!1:i,isFormControl:P,bubbleInput:j,setBubbleInput:R};return e.jsx(ue,{scope:o,...E,children:Y(m)?m(E):d})}x(V,"CheckboxProvider");var pe="CheckboxTrigger",he=n.forwardRef(x(function({__scopeCheckbox:o,onKeyDown:a,onClick:d,...i},h){const{control:r,value:l,disabled:c,checked:u,required:g,setControl:m,setChecked:f,hasConsumerStoppedPropagationRef:k,onUserInteraction:v,isFormControl:I,bubbleInput:j}=U(pe,o),R=Q(h,m),_=n.useRef(u);return n.useEffect(()=>{const s=r==null?void 0:r.form;if(s){const p=x(()=>f(_.current),"reset");return s.addEventListener("reset",p),()=>s.removeEventListener("reset",p)}},[r,f]),e.jsx(B.button,{type:"button",role:"checkbox","aria-checked":b(u)?"mixed":u,"aria-required":g,"data-state":T(u),"data-disabled":c?"":void 0,disabled:c,value:l,...i,ref:R,onKeyDown:w(a,s=>{s.key==="Enter"&&s.preventDefault()}),onClick:w(d,s=>{v(),f(p=>b(p)?!0:!p),j&&I&&(k.current=s.isPropagationStopped(),k.current||s.stopPropagation())})})},"CheckboxTrigger")),W=n.forwardRef(x(function(o,a){const{__scopeCheckbox:d,name:i,checked:h,defaultChecked:r,required:l,disabled:c,value:u,onCheckedChange:g,form:m,...f}=o;return e.jsx(V,{__scopeCheckbox:d,checked:h,defaultChecked:r,disabled:c,required:l,onCheckedChange:g,name:i,form:m,value:u,internal_do_not_use_render:({isFormControl:k})=>e.jsxs(e.Fragment,{children:[e.jsx(he,{...f,ref:a,__scopeCheckbox:d}),k&&e.jsx(me,{__scopeCheckbox:d})]})})},"Checkbox")),fe="CheckboxIndicator",be=n.forwardRef(x(function(o,a){const{__scopeCheckbox:d,forceMount:i,...h}=o,r=U(fe,d);return e.jsx(ae,{present:i||b(r.checked)||r.checked===!0,children:e.jsx(B.span,{"data-state":T(r.checked),"data-disabled":r.disabled?"":void 0,...h,ref:a,style:{pointerEvents:"none",...o.style}})})},"CheckboxIndicator")),xe="CheckboxBubbleInput",me=n.forwardRef(x(function({__scopeCheckbox:o,onClick:a,...d},i){const{control:h,hasConsumerStoppedPropagationRef:r,userInteractionCount:l,checked:c,defaultChecked:u,required:g,disabled:m,name:f,value:k,form:v,bubbleInput:I,setBubbleInput:j}=U(xe,o),R=Q(i,j),_=se(h),s=n.useRef(!1),p=n.useRef(c),P=n.useRef(l);n.useEffect(()=>{const C=I;if(!C)return;const Z=window.HTMLInputElement.prototype,A=Object.getOwnPropertyDescriptor(Z,"checked").set,M=l!==P.current;P.current=l;const ee=p.current!==c;p.current=c;const te=!(M&&r.current);if(ee&&A){s.current=!M;const re=new Event("click",{bubbles:te});C.indeterminate=b(c),A.call(C,b(c)?!1:c),C.dispatchEvent(re),s.current=!1}},[I,c,r,l]);const E=n.useRef(b(c)?!1:c);return e.jsx(B.input,{type:"checkbox","aria-hidden":!0,defaultChecked:u??E.current,required:g,disabled:m,name:f,value:k,form:v,...d,tabIndex:-1,ref:R,onClick:w(a,C=>{s.current&&C.stopPropagation()}),style:{...d.style,..._,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})},"CheckboxBubbleInput"));function Y(t){return typeof t=="function"}x(Y,"isFunction");function b(t){return t==="indeterminate"}x(b,"isIndeterminate");function T(t){return b(t)?"indeterminate":t?"checked":"unchecked"}x(T,"getState");const y=oe.forwardRef(({className:t,...o},a)=>e.jsx(W,{ref:a,className:de("vektr-checkbox",t),...o,children:e.jsx(be,{className:"vektr-checkbox-indicator",children:"✓"})}));y.displayName=W.displayName;y.__docgenInfo={description:"",methods:[]};const we={title:"Actions/Checkbox",component:y,tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Controlled checked state"},disabled:{control:"boolean",description:"Disable interaction"}}},S={render:t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(y,{id:"terms",...t}),e.jsx(F,{htmlFor:"terms",children:"Accept terms and conditions"})]})},D={render:()=>{const[t,o]=n.useState(!0);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(y,{id:"controlled-cb",checked:t,onCheckedChange:a=>o(!!a)}),e.jsxs(F,{htmlFor:"controlled-cb",children:["Controlled Checkbox: ",t?"Checked":"Unchecked"]})]})})}},L={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(y,{id:"d1",disabled:!0,defaultChecked:!0}),e.jsx(F,{htmlFor:"d1",children:"Disabled Checked"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(y,{id:"d2",disabled:!0}),e.jsx(F,{htmlFor:"d2",children:"Disabled Unchecked"})]})]})};var O,q,H;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }}>
      <Checkbox id="terms" {...args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
}`,...(H=(q=S.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var z,G,K;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
          <Checkbox id="controlled-cb" checked={checked} onCheckedChange={val => setChecked(!!val)} />
          <Label htmlFor="controlled-cb">
            Controlled Checkbox: {checked ? 'Checked' : 'Unchecked'}
          </Label>
        </div>
      </div>;
  }
}`,...(K=(G=D.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var X,$,J;L.parameters={...L.parameters,docs:{...(X=L.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
        <Checkbox id="d1" disabled defaultChecked />
        <Label htmlFor="d1">Disabled Checked</Label>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <Checkbox id="d2" disabled />
        <Label htmlFor="d2">Disabled Unchecked</Label>
      </div>
    </div>
}`,...(J=($=L.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};const Be=["Default","Controlled","Disabled"];export{D as Controlled,S as Default,L as Disabled,Be as __namedExportsOrder,we as default};
