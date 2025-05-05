import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as z}from"./index-C-Ut56cT.js";import"./iconBase-DhhnJRlV.js";import"./index-D4lIrffr.js";const j={xs:"py-1 text-xs",sm:"py-1.5 text-sm",md:"py-2 text-base",lg:"py-3 text-lg"},u=({label:s,options:b,icon:r,visualSize:x="md",textSize:f="base",primaryColor:v="#024a70",secondaryColor:w="#fde9da",className:y="",...g})=>{const t=!!r;return e.jsxs("div",{className:`w-full max-w-sm text-${f}`,children:[s&&e.jsx("label",{className:"block mb-1 font-semibold",children:s}),e.jsxs("div",{className:"relative",children:[t&&e.jsx("span",{className:"absolute inset-y-0 left-0 z-10 flex items-center pl-3",children:r}),e.jsx("select",{className:`
            w-full
            rounded-xl
            border-2
            
            bg-transparent
            shadow-lg
            appearance-none
            pr-8
            ${t?"pl-10":"pl-3"}
            ${j[x]}
            ${y}
          `,style:{borderColor:v},...g,children:b.map((a,C)=>{const{label:h,value:S}=typeof a=="string"?{label:a,value:a}:a;return e.jsx("option",{className:"bg-transparent",value:S,children:h},C)})}),e.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500",children:"▼"})]})]})};u.__docgenInfo={description:"",methods:[],displayName:"InputDropdown",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | Option)[]"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},visualSize:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},textSize:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "base" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"base"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"base"',computed:!1}},primaryColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#024a70"',computed:!1}},secondaryColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#fde9da"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["SelectHTMLAttributes"]};const I={title:"Components/InputDropdown",component:u,tags:["autodocs"],argTypes:{label:{control:"text",description:"Optional label above the select"},options:{control:"object",description:"Array of options (string or { label, value })"},icon:{control:!1,description:"Icon node rendered inside the input"},visualSize:{control:{type:"radio"},options:["xs","sm","md","lg"]},textSize:{control:{type:"radio"},options:["xs","sm","base","lg"]},primaryColor:{control:"color"},secondaryColor:{control:"color"},className:{control:"text"},disabled:{control:"boolean"},value:{control:"text"},onChange:{action:"changed"}}},l={args:{options:["Option 1","Option 2","Option 3"],visualSize:"md",textSize:"base",primaryColor:"#024a70",secondaryColor:"#fde9da"}},o={args:{label:"Select User",options:[{label:"Alice",value:"alice"},{label:"Bob",value:"bob"},{label:"Carol",value:"carol"}],icon:e.jsx(z,{}),visualSize:"md",textSize:"base",primaryColor:"#024a70",secondaryColor:"#fde9da"}};var n,i,c;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    visualSize: 'md',
    textSize: 'base',
    primaryColor: '#024a70',
    secondaryColor: '#fde9da'
  }
}`,...(c=(i=l.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Select User',
    options: [{
      label: 'Alice',
      value: 'alice'
    }, {
      label: 'Bob',
      value: 'bob'
    }, {
      label: 'Carol',
      value: 'carol'
    }],
    icon: <FaUser />,
    visualSize: 'md',
    textSize: 'base',
    primaryColor: '#024a70',
    secondaryColor: '#fde9da'
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const A=["Default","WithLabelAndIcon"];export{l as Default,o as WithLabelAndIcon,A as __namedExportsOrder,I as default};
