import{o as e}from"./iframe-BK5E95r_.js";import{t}from"./react-BmUjuMcc.js";import{t as n}from"./jsx-runtime-Da8i6pCd.js";import{n as r}from"./dist-BAzPu2Pp.js";import{i}from"./dist-B4wpXDNX.js";import{t as a}from"./dist-Dh-b7MaN.js";import{n as o,t as s}from"./dist-B6ySIPXB.js";import{t as c}from"./dist-De-te94h.js";import{t as l}from"./dist-77WAcmdD.js";import{t as u}from"./clsx-DB0hHKMi.js";import{t as d}from"./dist-Cmw_qNLf.js";import{t as f}from"./Label-BtgWbBlX.js";import{n as p,r as m,t as h}from"./dist-DAFK06wf2.js";var g=e(t(),1),_=n(),v=Object.defineProperty,y=(e,t)=>v(e,`name`,{value:t,configurable:!0}),b=`Radio`,[x,S]=r(b),[C,w]=x(b);function T(e){let{__scopeRadio:t,checked:n=!1,children:r,disabled:i,form:a,name:o,onCheck:s,required:c,value:l=`on`,internal_do_not_use_render:u}=e,[d,f]=g.useState(null),[p,m]=g.useState(null),h=g.useRef(!1),[v,b]=g.useReducer(e=>e+1,0),x={checked:n,disabled:i,required:c,name:o,form:a,value:l,control:d,setControl:f,hasConsumerStoppedPropagationRef:h,userInteractionCount:v,onUserInteraction:b,isFormControl:!d||!!a||!!d.closest(`form`),bubbleInput:p,setBubbleInput:m,onCheck:y(()=>s?.(),`onCheck`)};return(0,_.jsx)(C,{scope:t,...x,children:M(u)?u(x):r})}y(T,`RadioProvider`);var E=`RadioTrigger`,D=g.forwardRef(y(function({__scopeRadio:e,onClick:t,...n},r){let{checked:a,disabled:s,value:l,setControl:u,onCheck:d,hasConsumerStoppedPropagationRef:f,onUserInteraction:p,isFormControl:m,bubbleInput:h}=w(E,e),g=i(r,u);return(0,_.jsx)(c.button,{type:`button`,role:`radio`,"aria-checked":a,"data-state":N(a),"data-disabled":s?``:void 0,disabled:s,value:l,...n,ref:g,onClick:o(t,e=>{a||(p(),d()),h&&m&&(f.current=e.isPropagationStopped(),f.current||e.stopPropagation())})})},`RadioTrigger`)),O=`RadioIndicator`,k=g.forwardRef(y(function(e,t){let{__scopeRadio:n,forceMount:r,...i}=e,a=w(O,n);return(0,_.jsx)(l,{present:r||a.checked,children:(0,_.jsx)(c.span,{"data-state":N(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t})})},`RadioIndicator`)),A=`RadioBubbleInput`,j=g.forwardRef(y(function({__scopeRadio:e,onClick:t,...n},r){let{control:a,checked:s,required:l,disabled:u,name:f,value:p,form:m,bubbleInput:h,setBubbleInput:v,hasConsumerStoppedPropagationRef:y,userInteractionCount:b}=w(A,e),x=i(r,v),S=d(a),C=g.useRef(!1),T=g.useRef(s),E=g.useRef(b);g.useEffect(()=>{let e=h;if(!e)return;let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set,r=b!==E.current;E.current=b;let i=T.current!==s;T.current=s;let a=!(r&&y.current);if(i&&n){C.current=!r;let t=new Event(`click`,{bubbles:a});n.call(e,s),e.dispatchEvent(t),C.current=!1}},[h,s,y,b]);let D=g.useRef(s);return(0,_.jsx)(c.input,{type:`radio`,"aria-hidden":!0,defaultChecked:D.current,required:l,disabled:u,name:f,value:p,form:m,...n,tabIndex:-1,ref:x,onClick:o(t,e=>{C.current&&e.stopPropagation()}),style:{...n.style,...S,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`}})},`RadioBubbleInput`));function M(e){return typeof e==`function`}y(M,`isFunction`);function N(e){return e?`checked`:`unchecked`}y(N,`getState`);var P=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],F=`RadioGroup`,[I,ee]=r(F,[m,S]),L=m(),R=S(),[z,B]=I(F),V=g.forwardRef(y(function(e,t){let{__scopeRadioGroup:n,name:r,form:o,defaultValue:l,value:u,required:d=!1,disabled:f=!1,orientation:m,dir:h,loop:v=!0,onValueChange:b,...x}=e,S=L(n),C=a(h),[w,T]=s({prop:u,defaultProp:l??null,onChange:b,caller:F}),[E,D]=g.useState(null),O=i(t,D),k=g.useRef(w);return g.useEffect(()=>{let e=o?E?.ownerDocument.getElementById(o):E?.closest(`form`);if(e instanceof HTMLFormElement){let t=y(()=>T(k.current),`reset`);return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)}},[E,o,T]),(0,_.jsx)(z,{scope:n,name:r,form:o,required:d,disabled:f,value:w,onValueChange:T,children:(0,_.jsx)(p,{asChild:!0,...S,orientation:m,dir:C,loop:v,children:(0,_.jsx)(c.div,{role:`radiogroup`,"aria-required":d,"aria-orientation":m,"data-disabled":f?``:void 0,dir:C,...x,ref:O})})})},`RadioGroup`)),H=`RadioGroupItemProvider`,U=`RadioGroupItemTrigger`;function W(e){let{__scopeRadioGroup:t,value:n,disabled:r,children:i,internal_do_not_use_render:a}=e,o=B(H,t),s=R(t),c=o.disabled||r;return(0,_.jsx)(T,{...s,checked:o.value===n,disabled:c,required:o.required,name:o.name,form:o.form,value:n,onCheck:()=>o.onValueChange(n),internal_do_not_use_render:a,children:i})}y(W,`RadioGroupItemProvider`);var G=g.forwardRef(y(function(e,t){let{__scopeRadioGroup:n,...r}=e,a=L(n),s=R(n),{checked:c,disabled:l}=w(U,s.__scopeRadio),u=g.useRef(null),d=i(t,u),f=g.useRef(!1);return g.useEffect(()=>{let e=y(e=>{P.includes(e.key)&&(f.current=!0)},`handleKeyDown`),t=y(()=>f.current=!1,`handleKeyUp`);return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t)}},[]),(0,_.jsx)(h,{asChild:!0,...a,focusable:!l,active:c,children:(0,_.jsx)(D,{...s,...r,ref:d,onKeyDown:o(r.onKeyDown,e=>{e.key===`Enter`&&e.preventDefault()}),onFocus:o(r.onFocus,()=>{f.current&&u.current?.click()})})})},`RadioGroupItemTrigger`)),K=g.forwardRef(y(function(e,t){let{__scopeRadioGroup:n,value:r,disabled:i,...a}=e;return(0,_.jsx)(W,{__scopeRadioGroup:n,value:r,disabled:i,internal_do_not_use_render:({isFormControl:e})=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(G,{...a,ref:t,__scopeRadioGroup:n}),e&&(0,_.jsx)(q,{__scopeRadioGroup:n})]})})},`RadioGroupItem`)),q=g.forwardRef(y(function(e,t){let{__scopeRadioGroup:n,...r}=e,i=R(n);return(0,_.jsx)(j,{...i,...r,ref:t})},`RadioGroupItemBubbleInput`)),J=g.forwardRef(y(function(e,t){let{__scopeRadioGroup:n,...r}=e,i=R(n);return(0,_.jsx)(k,{...i,...r,ref:t})},`RadioGroupIndicator`)),Y=g.forwardRef(({className:e,...t},n)=>(0,_.jsx)(V,{className:u(`vektr-radio-group`,e),...t,ref:n}));Y.displayName=V.displayName;var X=g.forwardRef(({className:e,...t},n)=>(0,_.jsx)(K,{ref:n,className:u(`vektr-radio-item`,e),...t,children:(0,_.jsx)(J,{className:`vektr-radio-indicator`})}));X.displayName=K.displayName,Y.__docgenInfo={description:``,methods:[]},X.__docgenInfo={description:``,methods:[]};var Z={title:`Actions/RadioGroup`,component:Y,tags:[`autodocs`],argTypes:{disabled:{control:`boolean`}}},Q={render:e=>(0,_.jsxs)(Y,{defaultValue:`monthly`,"aria-label":`Billing Frequency`,...e,children:[(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,_.jsx)(X,{value:`monthly`,id:`r-monthly`}),(0,_.jsx)(f,{htmlFor:`r-monthly`,children:`Monthly Billing`})]}),(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,_.jsx)(X,{value:`annual`,id:`r-annual`}),(0,_.jsx)(f,{htmlFor:`r-annual`,children:`Annual Billing (Save 20%)`})]})]})},$={render:()=>{let[e,t]=(0,g.useState)(`email`);return(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,_.jsxs)(Y,{value:e,onValueChange:t,"aria-label":`Notification Preference`,children:[(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,_.jsx)(X,{value:`email`,id:`r-email`}),(0,_.jsx)(f,{htmlFor:`r-email`,children:`Email Notifications`})]}),(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,_.jsx)(X,{value:`sms`,id:`r-sms`}),(0,_.jsx)(f,{htmlFor:`r-sms`,children:`SMS Notifications`})]})]}),(0,_.jsxs)(`span`,{style:{fontSize:`14px`,color:`var(--text-secondary)`},children:[`Selected: `,e]})]})}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};var te=[`Default`,`Controlled`];export{$ as Controlled,Q as Default,te as __namedExportsOrder,Z as default};