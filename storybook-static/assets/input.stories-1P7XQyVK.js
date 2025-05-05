import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{G as z}from"./iconBase-DhhnJRlV.js";import"./index-D4lIrffr.js";function v(s){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(s)}const b={xs:"py-1 text-xs",sm:"py-1.5 text-sm",md:"py-2 text-base",lg:"py-3 text-lg"},g=({icon:s,textSize:h="base",size:f="md",...y})=>{const o=!!s;return a.jsxs("div",{className:`relative w-full max-w-sm text-${h}`,children:[o&&a.jsx("span",{className:"absolute inset-y-0 left-0 z-5 flex items-center pl-3",children:s}),a.jsx("input",{className:`
          ${o?"pl-10":"pl-3"}
          pr-4
          ${b[f]}
          outline-1
          rounded-xl
          focus:outline-none
          focus:ring-2
          focus:ring-primary
          w-full
        `,...y})]})};g.__docgenInfo={description:"",methods:[],displayName:"Input",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:""},textSize:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "base" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"base"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"base"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}}},composes:["InputHTMLAttributes"]};const j={title:"Components/Input",component:g,tags:["autodocs"],argTypes:{icon:{control:!1,description:"Optional icon node"},textSize:{control:{type:"radio"},options:["xs","sm","base","lg"],description:"Font size for the input text"},size:{control:{type:"radio"},options:["xs","sm","md","lg"],description:"Vertical padding & font size"},placeholder:{control:"text"},disabled:{control:"boolean"},value:{control:"text"},onChange:{action:"changed"},type:{control:"text"}}},e={args:{placeholder:"Type something…",textSize:"base",size:"md"}},t={args:{placeholder:"Search…",icon:a.jsx(v,{}),textSize:"base",size:"md"}};var n,r,l,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type something…',
    textSize: 'base',
    size: 'md'
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source},description:{story:"A simple text input",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};var p,d,m,u,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…',
    icon: <FaSearch />,
    textSize: 'base',
    size: 'md'
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"With a leading search icon",...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};const w=["Default","WithIcon"];export{e as Default,t as WithIcon,w as __namedExportsOrder,j as default};
