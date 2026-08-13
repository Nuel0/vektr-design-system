import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s,R as W}from"./index-UiW3gZKV.js";import{u as ce,c as k}from"./index-vqJttv-m.js";import{u as F}from"./index-xLXNAgRb.js";import{c as X}from"./index-BpC7CEvB.js";import{P as N}from"./index-CbhEr7yb.js";import{c as Y,R as le,I as ue}from"./index-BuRscVs7.js";import{u as pe}from"./index-D4ubLTNW.js";import{u as me}from"./index-9vRh73al.js";import{P as fe}from"./index-B33pjH6a.js";import{c as J}from"./clsx-B-dksMZM.js";import{L as w}from"./Label-Bbu7F1c0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-3b7XovMV.js";import"./index-BA8NevWa.js";import"./index-B_POJiOA.js";import"./index-zrl4sMk3.js";var Re=Object.defineProperty,l=(t,r)=>Re(t,"name",{value:r,configurable:!0}),Q="Radio",[ve,Z]=X(Q),[he,L]=ve(Q);function ee(t){const{__scopeRadio:r,checked:a=!1,children:i,disabled:d,form:n,name:o,onCheck:u,required:f,value:v="on",internal_do_not_use_render:R}=t,[p,c]=s.useState(null),[g,x]=s.useState(null),h=s.useRef(!1),[y,_]=s.useReducer(G=>G+1,0),b=p?!!n||!!p.closest("form"):!0,m={checked:a,disabled:d,required:f,name:o,form:n,value:v,control:p,setControl:c,hasConsumerStoppedPropagationRef:h,userInteractionCount:y,onUserInteraction:_,isFormControl:b,bubbleInput:g,setBubbleInput:x,onCheck:l(()=>u==null?void 0:u(),"onCheck")};return e.jsx(he,{scope:r,...m,children:oe(R)?R(m):i})}l(ee,"RadioProvider");var ge="RadioTrigger",xe=s.forwardRef(l(function({__scopeRadio:r,onClick:a,...i},d){const{checked:n,disabled:o,value:u,setControl:f,onCheck:v,hasConsumerStoppedPropagationRef:R,onUserInteraction:p,isFormControl:c,bubbleInput:g}=L(ge,r),x=F(d,f);return e.jsx(N.button,{type:"button",role:"radio","aria-checked":n,"data-state":T(n),"data-disabled":o?"":void 0,disabled:o,value:u,...i,ref:x,onClick:k(a,h=>{n||(p(),v()),g&&c&&(R.current=h.isPropagationStopped(),R.current||h.stopPropagation())})})},"RadioTrigger")),be="RadioIndicator",Ie=s.forwardRef(l(function(r,a){const{__scopeRadio:i,forceMount:d,...n}=r,o=L(be,i);return e.jsx(fe,{present:d||o.checked,children:e.jsx(N.span,{"data-state":T(o.checked),"data-disabled":o.disabled?"":void 0,...n,ref:a})})},"RadioIndicator")),ye="RadioBubbleInput",_e=s.forwardRef(l(function({__scopeRadio:r,onClick:a,...i},d){const{control:n,checked:o,required:u,disabled:f,name:v,value:R,form:p,bubbleInput:c,setBubbleInput:g,hasConsumerStoppedPropagationRef:x,userInteractionCount:h}=L(ye,r),y=F(d,g),_=me(n),b=s.useRef(!1),m=s.useRef(o),G=s.useRef(h);s.useEffect(()=>{const I=c;if(!I)return;const C=window.HTMLInputElement.prototype,V=Object.getOwnPropertyDescriptor(C,"checked").set,O=h!==G.current;G.current=h;const ie=m.current!==o;m.current=o;const se=!(O&&x.current);if(ie&&V){b.current=!O;const de=new Event("click",{bubbles:se});V.call(I,o),I.dispatchEvent(de),b.current=!1}},[c,o,x,h]);const B=s.useRef(o);return e.jsx(N.input,{type:"radio","aria-hidden":!0,defaultChecked:B.current,required:u,disabled:f,name:v,value:R,form:p,...i,tabIndex:-1,ref:y,onClick:k(a,I=>{b.current&&I.stopPropagation()}),style:{...i.style,..._,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})},"RadioBubbleInput"));function oe(t){return typeof t=="function"}l(oe,"isFunction");function T(t){return t?"checked":"unchecked"}l(T,"getState");var Ge=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],M="RadioGroup",[je,Ye]=X(M,[Y,Z]),re=Y(),A=Z(),[Ce,Se]=je(M),te=s.forwardRef(l(function(r,a){const{__scopeRadioGroup:i,name:d,form:n,defaultValue:o,value:u,required:f=!1,disabled:v=!1,orientation:R,dir:p,loop:c=!0,onValueChange:g,...x}=r,h=re(i),y=pe(p),[_,b]=ce({prop:u,defaultProp:o??null,onChange:g,caller:M}),[m,G]=s.useState(null),B=F(a,G),I=s.useRef(_);return s.useEffect(()=>{const C=n?m==null?void 0:m.ownerDocument.getElementById(n):m==null?void 0:m.closest("form");if(C instanceof HTMLFormElement){const D=l(()=>b(I.current),"reset");return C.addEventListener("reset",D),()=>C.removeEventListener("reset",D)}},[m,n,b]),e.jsx(Ce,{scope:i,name:d,form:n,required:f,disabled:v,value:_,onValueChange:b,children:e.jsx(le,{asChild:!0,...h,orientation:R,dir:y,loop:c,children:e.jsx(N.div,{role:"radiogroup","aria-required":f,"aria-orientation":R,"data-disabled":v?"":void 0,dir:y,...x,ref:B})})})},"RadioGroup")),Ee="RadioGroupItemProvider",Pe="RadioGroupItemTrigger";function ae(t){const{__scopeRadioGroup:r,value:a,disabled:i,children:d,internal_do_not_use_render:n}=t,o=Se(Ee,r),u=A(r),f=o.disabled||i;return e.jsx(ee,{...u,checked:o.value===a,disabled:f,required:o.required,name:o.name,form:o.form,value:a,onCheck:()=>o.onValueChange(a),internal_do_not_use_render:n,children:d})}l(ae,"RadioGroupItemProvider");var ke=s.forwardRef(l(function(r,a){const{__scopeRadioGroup:i,...d}=r,n=re(i),o=A(i),{checked:u,disabled:f}=L(Pe,o.__scopeRadio),v=s.useRef(null),R=F(a,v),p=s.useRef(!1);return s.useEffect(()=>{const c=l(x=>{Ge.includes(x.key)&&(p.current=!0)},"handleKeyDown"),g=l(()=>p.current=!1,"handleKeyUp");return document.addEventListener("keydown",c),document.addEventListener("keyup",g),()=>{document.removeEventListener("keydown",c),document.removeEventListener("keyup",g)}},[]),e.jsx(ue,{asChild:!0,...n,focusable:!f,active:u,children:e.jsx(xe,{...o,...d,ref:R,onKeyDown:k(d.onKeyDown,c=>{c.key==="Enter"&&c.preventDefault()}),onFocus:k(d.onFocus,()=>{var c;p.current&&((c=v.current)==null||c.click())})})})},"RadioGroupItemTrigger")),ne=s.forwardRef(l(function(r,a){const{__scopeRadioGroup:i,value:d,disabled:n,...o}=r;return e.jsx(ae,{__scopeRadioGroup:i,value:d,disabled:n,internal_do_not_use_render:({isFormControl:u})=>e.jsxs(e.Fragment,{children:[e.jsx(ke,{...o,ref:a,__scopeRadioGroup:i}),u&&e.jsx(we,{__scopeRadioGroup:i})]})})},"RadioGroupItem")),we=s.forwardRef(l(function(r,a){const{__scopeRadioGroup:i,...d}=r,n=A(i);return e.jsx(_e,{...n,...d,ref:a})},"RadioGroupItemBubbleInput")),Fe=s.forwardRef(l(function(r,a){const{__scopeRadioGroup:i,...d}=r,n=A(i);return e.jsx(Ie,{...n,...d,ref:a})},"RadioGroupIndicator"));const S=W.forwardRef(({className:t,...r},a)=>e.jsx(te,{className:J("vektr-radio-group",t),...r,ref:a}));S.displayName=te.displayName;const j=W.forwardRef(({className:t,...r},a)=>e.jsx(ne,{ref:a,className:J("vektr-radio-item",t),...r,children:e.jsx(Fe,{className:"vektr-radio-indicator"})}));j.displayName=ne.displayName;S.__docgenInfo={description:"",methods:[]};j.__docgenInfo={description:"",methods:[]};const Je={title:"Actions/RadioGroup",component:S,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}}},E={render:t=>e.jsxs(S,{defaultValue:"monthly","aria-label":"Billing Frequency",...t,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(j,{value:"monthly",id:"r-monthly"}),e.jsx(w,{htmlFor:"r-monthly",children:"Monthly Billing"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(j,{value:"annual",id:"r-annual"}),e.jsx(w,{htmlFor:"r-annual",children:"Annual Billing (Save 20%)"})]})]})},P={render:()=>{const[t,r]=s.useState("email");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs(S,{value:t,onValueChange:r,"aria-label":"Notification Preference",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(j,{value:"email",id:"r-email"}),e.jsx(w,{htmlFor:"r-email",children:"Email Notifications"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(j,{value:"sms",id:"r-sms"}),e.jsx(w,{htmlFor:"r-sms",children:"SMS Notifications"})]})]}),e.jsxs("span",{style:{fontSize:"14px",color:"var(--text-secondary)"},children:["Selected: ",t]})]})}};var U,q,K;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <RadioGroup defaultValue="monthly" aria-label="Billing Frequency" {...args}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <RadioGroupItem value="monthly" id="r-monthly" />
        <Label htmlFor="r-monthly">Monthly Billing</Label>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
        <RadioGroupItem value="annual" id="r-annual" />
        <Label htmlFor="r-annual">Annual Billing (Save 20%)</Label>
      </div>
    </RadioGroup>
}`,...(K=(q=E.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var z,H,$;P.parameters={...P.parameters,docs:{...(z=P.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('email');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <RadioGroup value={val} onValueChange={setVal} aria-label="Notification Preference">
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
            <RadioGroupItem value="email" id="r-email" />
            <Label htmlFor="r-email">Email Notifications</Label>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
            <RadioGroupItem value="sms" id="r-sms" />
            <Label htmlFor="r-sms">SMS Notifications</Label>
          </div>
        </RadioGroup>
        <span style={{
        fontSize: '14px',
        color: 'var(--text-secondary)'
      }}>Selected: {val}</span>
      </div>;
  }
}`,...($=(H=P.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};const Qe=["Default","Controlled"];export{P as Controlled,E as Default,Qe as __namedExportsOrder,Je as default};
