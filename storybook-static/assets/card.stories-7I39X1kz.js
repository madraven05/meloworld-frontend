import{j as a}from"./jsx-runtime-D_zvdyIk.js";function h(e){var t,s,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(s=h(e[t]))&&(r&&(r+=" "),r+=s)}else for(s in e)e[s]&&(r&&(r+=" "),r+=s);return r}function f(){for(var e,t,s=0,r="",i=arguments.length;s<i;s++)(e=arguments[s])&&(t=h(e))&&(r&&(r+=" "),r+=t);return r}const g=({children:e,className:t})=>a.jsx("div",{className:"relative overflow-hidden rounded-2xl shadow-lg",children:a.jsx("div",{className:f("relative z-10",t),children:e})});g.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Components/Card",component:g,tags:["autodocs"],argTypes:{className:{control:"text",description:"Additional classes to apply to the inner wrapper"},children:{control:"text",description:"Anything you want rendered inside the card"}}},n={args:{className:"p-4 bg-white",children:"This is a simple card with some padding and a white background."}},o={args:{className:"p-6 bg-surface",children:a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-bold mb-2",children:"Card Title"}),a.jsx("p",{className:"text-sm text-gray-600",children:"Here’s some longer content inside the card. You can put multiple elements here."})]})}};var c,d,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    className: 'p-4 bg-white',
    children: 'This is a simple card with some padding and a white background.'
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    className: 'p-6 bg-surface',
    children: <div>
        <h3 className="text-lg font-bold mb-2">Card Title</h3>
        <p className="text-sm text-gray-600">
          Here’s some longer content inside the card. You can put multiple elements here.
        </p>
      </div>
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const y=["Default","WithCustomContent"];export{n as Default,o as WithCustomContent,y as __namedExportsOrder,N as default};
