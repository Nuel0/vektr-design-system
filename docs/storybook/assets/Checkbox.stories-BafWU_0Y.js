import{o as e}from"./iframe-BK5E95r_.js";import{t}from"./react-BmUjuMcc.js";import{t as n}from"./jsx-runtime-Da8i6pCd.js";import{n as r}from"./dist-BAzPu2Pp.js";import{i}from"./dist-B4wpXDNX.js";import{n as a,t as o}from"./dist-B6ySIPXB.js";import{t as s}from"./dist-De-te94h.js";import{t as c}from"./dist-77WAcmdD.js";import{t as l}from"./clsx-DB0hHKMi.js";import{t as u}from"./dist-Cmw_qNLf.js";import{t as d}from"./Label-BtgWbBlX.js";var f=e(t(),1),p=n(),m=Object.defineProperty,h=(e,t)=>m(e,`name`,{value:t,configurable:!0}),g=`Checkbox`,[_,v]=r(g),[y,b]=_(g);function x(e){let{__scopeCheckbox:t,checked:n,children:r,defaultChecked:i,disabled:a,form:s,name:c,onCheckedChange:l,required:u,value:d=`on`,internal_do_not_use_render:m}=e,[h,_]=o({prop:n,defaultProp:i??!1,onChange:l,caller:g}),[v,b]=f.useState(null),[x,S]=f.useState(null),C=f.useRef(!1),[w,T]=f.useReducer(e=>e+1,0),E=!v||!!s||!!v.closest(`form`),D={checked:h,disabled:a,setChecked:_,control:v,setControl:b,name:c,form:s,value:d,hasConsumerStoppedPropagationRef:C,userInteractionCount:w,onUserInteraction:T,required:u,defaultChecked:!A(i)&&i,isFormControl:E,bubbleInput:x,setBubbleInput:S};return(0,p.jsx)(y,{scope:t,...D,children:k(m)?m(D):r})}h(x,`CheckboxProvider`);var S=`CheckboxTrigger`,C=f.forwardRef(h(function({__scopeCheckbox:e,onKeyDown:t,onClick:n,...r},o){let{control:c,value:l,disabled:u,checked:d,required:m,setControl:g,setChecked:_,hasConsumerStoppedPropagationRef:v,onUserInteraction:y,isFormControl:x,bubbleInput:C}=b(S,e),w=i(o,g),T=f.useRef(d);return f.useEffect(()=>{let e=c?.form;if(e){let t=h(()=>_(T.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[c,_]),(0,p.jsx)(s.button,{type:`button`,role:`checkbox`,"aria-checked":A(d)?`mixed`:d,"aria-required":m,"data-state":j(d),"data-disabled":u?``:void 0,disabled:u,value:l,...r,ref:w,onKeyDown:a(t,e=>{e.key===`Enter`&&e.preventDefault()}),onClick:a(n,e=>{y(),_(e=>A(e)?!0:!e),C&&x&&(v.current=e.isPropagationStopped(),v.current||e.stopPropagation())})})},`CheckboxTrigger`)),w=f.forwardRef(h(function(e,t){let{__scopeCheckbox:n,name:r,checked:i,defaultChecked:a,required:o,disabled:s,value:c,onCheckedChange:l,form:u,...d}=e;return(0,p.jsx)(x,{__scopeCheckbox:n,checked:i,defaultChecked:a,disabled:s,required:o,onCheckedChange:l,name:r,form:u,value:c,internal_do_not_use_render:({isFormControl:e})=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(C,{...d,ref:t,__scopeCheckbox:n}),e&&(0,p.jsx)(O,{__scopeCheckbox:n})]})})},`Checkbox`)),T=`CheckboxIndicator`,E=f.forwardRef(h(function(e,t){let{__scopeCheckbox:n,forceMount:r,...i}=e,a=b(T,n);return(0,p.jsx)(c,{present:r||A(a.checked)||a.checked===!0,children:(0,p.jsx)(s.span,{"data-state":j(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t,style:{pointerEvents:`none`,...e.style}})})},`CheckboxIndicator`)),D=`CheckboxBubbleInput`,O=f.forwardRef(h(function({__scopeCheckbox:e,onClick:t,...n},r){let{control:o,hasConsumerStoppedPropagationRef:c,userInteractionCount:l,checked:d,defaultChecked:m,required:h,disabled:g,name:_,value:v,form:y,bubbleInput:x,setBubbleInput:S}=b(D,e),C=i(r,S),w=u(o),T=f.useRef(!1),E=f.useRef(d),O=f.useRef(l);f.useEffect(()=>{let e=x;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set,r=l!==O.current;O.current=l;let i=E.current!==d;E.current=d;let a=!(r&&c.current);if(i&&n){T.current=!r;let t=new Event(`click`,{bubbles:a});e.indeterminate=A(d),n.call(e,!A(d)&&d),e.dispatchEvent(t),T.current=!1}},[x,d,c,l]);let k=f.useRef(!A(d)&&d);return(0,p.jsx)(s.input,{type:`checkbox`,"aria-hidden":!0,defaultChecked:m??k.current,required:h,disabled:g,name:_,value:v,form:y,...n,tabIndex:-1,ref:C,onClick:a(t,e=>{T.current&&e.stopPropagation()}),style:{...n.style,...w,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})},`CheckboxBubbleInput`));function k(e){return typeof e==`function`}h(k,`isFunction`);function A(e){return e===`indeterminate`}h(A,`isIndeterminate`);function j(e){return A(e)?`indeterminate`:e?`checked`:`unchecked`}h(j,`getState`);var M=f.forwardRef(({className:e,...t},n)=>(0,p.jsx)(w,{ref:n,className:l(`vektr-checkbox`,e),...t,children:(0,p.jsx)(E,{className:`vektr-checkbox-indicator`,children:`✓`})}));M.displayName=w.displayName,M.__docgenInfo={description:``,methods:[]};var N={title:`Actions/Checkbox`,component:M,tags:[`autodocs`],argTypes:{checked:{control:`boolean`,description:`Controlled checked state`},disabled:{control:`boolean`,description:`Disable interaction`}}},P={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,p.jsx)(M,{id:`terms`,...e}),(0,p.jsx)(d,{htmlFor:`terms`,children:`Accept terms and conditions`})]})},F={render:()=>{let[e,t]=(0,f.useState)(!0);return(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,p.jsx)(M,{id:`controlled-cb`,checked:e,onCheckedChange:e=>t(!!e)}),(0,p.jsxs)(d,{htmlFor:`controlled-cb`,children:[`Controlled Checkbox: `,e?`Checked`:`Unchecked`]})]})})}},I={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,p.jsx)(M,{id:`d1`,disabled:!0,defaultChecked:!0}),(0,p.jsx)(d,{htmlFor:`d1`,children:`Disabled Checked`})]}),(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,p.jsx)(M,{id:`d2`,disabled:!0}),(0,p.jsx)(d,{htmlFor:`d2`,children:`Disabled Unchecked`})]})]})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }}>
      <Checkbox id="terms" {...args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};var L=[`Default`,`Controlled`,`Disabled`];export{F as Controlled,P as Default,I as Disabled,L as __namedExportsOrder,N as default};