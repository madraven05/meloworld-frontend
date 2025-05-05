import{j as a}from"./jsx-runtime-D_zvdyIk.js";const f=[{label:"Strongly Disagree",value:"1",color:"#ff7900"},{label:"Disagree",value:"2",color:"#ff7900"},{label:"Neutral",value:"3",color:"#9ca3af"},{label:"Agree",value:"4",color:"#024a70"},{label:"Strongly Agree",value:"5",color:"#024a70"}],m=({name:p,value:s,onChange:r})=>a.jsx("div",{className:"w-full flex justify-between items-center gap-4",children:f.map(e=>a.jsxs("label",{className:"flex flex-col items-center text-center text-xs font-medium",children:[a.jsx("input",{type:"radio",name:p,value:e.value,checked:s===e.value,onChange:v=>r==null?void 0:r(v.target.value),className:"sr-only"}),a.jsx("div",{className:`
              w-5 h-5 rounded-full border-2
              transition-all cursor-pointer
              ${s===e.value?"scale-110":"opacity-60 hover:opacity-100"}
            `,style:{borderColor:e.color,backgroundColor:s===e.value?e.color:"transparent"},onClick:()=>r==null?void 0:r(e.value)}),a.jsx("span",{className:"mt-1",children:e.label})]},e.value))});m.__docgenInfo={description:"",methods:[],displayName:"LikertScaleInput",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const y={title:"Components/LikertScaleInput",component:m,tags:["autodocs"],argTypes:{name:{control:"text",description:"Name attribute for the radio group"},value:{control:{type:"radio"},options:["1","2","3","4","5"],description:"Currently selected value"},onChange:{action:"changed",description:"Fired when selection changes"}}},t={args:{name:"likert",value:void 0}},l={args:{name:"likert",value:"3"}};var n,o,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: 'likert',
    value: undefined
  }
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,u,d;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'likert',
    value: '3'
  }
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const x=["Default","SelectedNeutral"];export{t as Default,l as SelectedNeutral,x as __namedExportsOrder,y as default};
