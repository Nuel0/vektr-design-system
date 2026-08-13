import{o as e}from"./iframe-BK5E95r_.js";import{t}from"./react-BmUjuMcc.js";import{t as n}from"./jsx-runtime-Da8i6pCd.js";import{n as r}from"./dist-BAzPu2Pp.js";import{i}from"./dist-B4wpXDNX.js";import{n as a,t as o}from"./dist-B6ySIPXB.js";import{t as s}from"./dist-De-te94h.js";import{t as c}from"./clsx-DB0hHKMi.js";import{t as l}from"./dist-Cmw_qNLf.js";import{t as u}from"./Label-BtgWbBlX.js";var d=e(t(),1),f=n(),p=Object.defineProperty,m=(e,t)=>p(e,`name`,{value:t,configurable:!0}),h=`Switch`,[g,_]=r(h),[v,y]=g(h);function b(e){let{__scopeSwitch:t,checked:n,children:r,defaultChecked:i,disabled:a,form:s,name:c,onCheckedChange:l,required:u,value:p=`on`,internal_do_not_use_render:m}=e,[g,_]=o({prop:n,defaultProp:i??!1,onChange:l,caller:h}),[y,b]=d.useState(null),[x,S]=d.useState(null),C=d.useRef(!1),[w,T]=d.useReducer(e=>e+1,0),E={checked:g,setChecked:_,disabled:a,control:y,setControl:b,name:c,form:s,value:p,hasConsumerStoppedPropagationRef:C,userInteractionCount:w,onUserInteraction:T,required:u,defaultChecked:i,isFormControl:!y||!!s||!!y.closest(`form`),bubbleInput:x,setBubbleInput:S};return(0,f.jsx)(v,{scope:t,...E,children:O(m)?m(E):r})}m(b,`SwitchProvider`);var x=`SwitchTrigger`,S=d.forwardRef(m(function({__scopeSwitch:e,onClick:t,...n},r){let{control:o,form:c,value:l,disabled:u,checked:p,required:h,setControl:g,setChecked:_,hasConsumerStoppedPropagationRef:v,onUserInteraction:b,isFormControl:S,bubbleInput:C}=y(x,e),w=i(r,g),T=d.useRef(p);return d.useEffect(()=>{let e=c?o?.ownerDocument.getElementById(c):o?.form;if(e instanceof HTMLFormElement){let t=m(()=>_(T.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[o,c,_]),(0,f.jsx)(s.button,{type:`button`,role:`switch`,"aria-checked":p,"aria-required":h,"data-state":k(p),"data-disabled":u?``:void 0,disabled:u,value:l,...n,ref:w,onClick:a(t,e=>{b(),_(e=>!e),C&&S&&(v.current=e.isPropagationStopped(),v.current||e.stopPropagation())})})},`SwitchTrigger`)),C=d.forwardRef(m(function(e,t){let{__scopeSwitch:n,name:r,checked:i,defaultChecked:a,required:o,disabled:s,value:c,onCheckedChange:l,form:u,...d}=e;return(0,f.jsx)(b,{__scopeSwitch:n,checked:i,defaultChecked:a,disabled:s,required:o,onCheckedChange:l,name:r,form:u,value:c,internal_do_not_use_render:({isFormControl:e})=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(S,{...d,ref:t,__scopeSwitch:n}),e&&(0,f.jsx)(D,{__scopeSwitch:n})]})})},`Switch`)),w=`SwitchThumb`,T=d.forwardRef(m(function(e,t){let{__scopeSwitch:n,...r}=e,i=y(w,n);return(0,f.jsx)(s.span,{"data-state":k(i.checked),"data-disabled":i.disabled?``:void 0,...r,ref:t})},`SwitchThumb`)),E=`SwitchBubbleInput`,D=d.forwardRef(m(function({__scopeSwitch:e,onClick:t,...n},r){let{control:o,hasConsumerStoppedPropagationRef:c,userInteractionCount:u,checked:p,defaultChecked:m,required:h,disabled:g,name:_,value:v,form:b,bubbleInput:x,setBubbleInput:S}=y(E,e),C=i(r,S),w=l(o),T=d.useRef(!1),D=d.useRef(p),O=d.useRef(u);d.useEffect(()=>{let e=x;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set,r=u!==O.current;O.current=u;let i=D.current!==p;D.current=p;let a=!(r&&c.current);if(i&&n){T.current=!r;let t=new Event(`click`,{bubbles:a});n.call(e,p),e.dispatchEvent(t),T.current=!1}},[x,p,c,u]);let k=d.useRef(p);return(0,f.jsx)(s.input,{type:`checkbox`,"aria-hidden":!0,defaultChecked:m??k.current,required:h,disabled:g,name:_,value:v,form:b,...n,tabIndex:-1,ref:C,onClick:a(t,e=>{T.current&&e.stopPropagation()}),style:{...n.style,...w,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})},`SwitchBubbleInput`));function O(e){return typeof e==`function`}m(O,`isFunction`);function k(e){return e?`checked`:`unchecked`}m(k,`getState`);var A=d.forwardRef(({className:e,...t},n)=>(0,f.jsx)(C,{className:c(`vektr-switch`,e),...t,ref:n,children:(0,f.jsx)(T,{className:`vektr-switch-thumb`})}));A.displayName=C.displayName,A.__docgenInfo={description:``,methods:[]};var j={title:`Actions/Switch`,component:A,tags:[`autodocs`],argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`}}},M={render:e=>(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,f.jsx)(A,{id:`sw1`,...e}),(0,f.jsx)(u,{htmlFor:`sw1`,children:`Enable Dark Mode`})]})},N={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,f.jsx)(A,{id:`sw2`,checked:e,onCheckedChange:t}),(0,f.jsxs)(u,{htmlFor:`sw2`,children:[`Feature Switch: `,e?`ON`:`OFF`]})]})}},P={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,f.jsx)(A,{id:`sw3`,disabled:!0,defaultChecked:!0}),(0,f.jsx)(u,{htmlFor:`sw3`,children:`Disabled Active Switch`})]}),(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,f.jsx)(A,{id:`sw4`,disabled:!0}),(0,f.jsx)(u,{htmlFor:`sw4`,children:`Disabled Inactive Switch`})]})]})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }}>
      <Switch id="sw1" {...args} />
      <Label htmlFor="sw1">Enable Dark Mode</Label>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};var F=[`Default`,`Controlled`,`Disabled`];export{N as Controlled,M as Default,P as Disabled,F as __namedExportsOrder,j as default};