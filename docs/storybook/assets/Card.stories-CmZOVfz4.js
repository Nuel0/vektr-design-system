import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a,a as m,b as t,c as d,d as u,e as y}from"./Card-C2jAc_aU.js";import{B as i}from"./Button-BZa4-tXt.js";import{B as h}from"./Badge-CStZzEEa.js";import"./index-UiW3gZKV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-xLXNAgRb.js";import"./clsx-B-dksMZM.js";const T={title:"Layout/Card",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["base","raised","sunken","inverse"]}}},r={render:C=>e.jsxs(a,{variant:"raised",style:{maxWidth:"360px"},...C,children:[e.jsxs(m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx(t,{children:"Pro Plan Subscription"}),e.jsx(d,{children:"Billed annually"})]}),e.jsx(h,{variant:"success",children:"Active"})]}),e.jsx(u,{children:e.jsx("p",{style:{margin:0,color:"var(--text-secondary)"},children:"Access all 25 Vektr components, multi-brand themes, and priority REST API sync."})}),e.jsxs(y,{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[e.jsx(i,{variant:"outline",size:"sm",children:"Manage"}),e.jsx(i,{variant:"primary",size:"sm",children:"Upgrade"})]})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsxs(a,{variant:"base",style:{width:"220px",padding:"16px"},children:[e.jsx(t,{children:"Base Surface"}),e.jsx(d,{children:"Flat subtle border"})]}),e.jsxs(a,{variant:"raised",style:{width:"220px",padding:"16px"},children:[e.jsx(t,{children:"Raised Surface"}),e.jsx(d,{children:"Elevated box shadow"})]}),e.jsxs(a,{variant:"sunken",style:{width:"220px",padding:"16px"},children:[e.jsx(t,{children:"Sunken Surface"}),e.jsx(d,{children:"Inset background well"})]})]})};var n,l,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <Card variant="raised" style={{
    maxWidth: '360px'
  }} {...args}>
      <CardHeader style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
        <div>
          <CardTitle>Pro Plan Subscription</CardTitle>
          <CardDescription>Billed annually</CardDescription>
        </div>
        <Badge variant="success">Active</Badge>
      </CardHeader>
      <CardBody>
        <p style={{
        margin: 0,
        color: 'var(--text-secondary)'
      }}>
          Access all 25 Vektr components, multi-brand themes, and priority REST API sync.
        </p>
      </CardBody>
      <CardFooter style={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px'
    }}>
        <Button variant="outline" size="sm">Manage</Button>
        <Button variant="primary" size="sm">Upgrade</Button>
      </CardFooter>
    </Card>
}`,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var p,c,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Card variant="base" style={{
      width: '220px',
      padding: '16px'
    }}>
        <CardTitle>Base Surface</CardTitle>
        <CardDescription>Flat subtle border</CardDescription>
      </Card>
      <Card variant="raised" style={{
      width: '220px',
      padding: '16px'
    }}>
        <CardTitle>Raised Surface</CardTitle>
        <CardDescription>Elevated box shadow</CardDescription>
      </Card>
      <Card variant="sunken" style={{
      width: '220px',
      padding: '16px'
    }}>
        <CardTitle>Sunken Surface</CardTitle>
        <CardDescription>Inset background well</CardDescription>
      </Card>
    </div>
}`,...(x=(c=s.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};const k=["ComposedCard","Variants"];export{r as ComposedCard,s as Variants,k as __namedExportsOrder,T as default};
