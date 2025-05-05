import{j as e}from"./jsx-runtime-D_zvdyIk.js";const d=({headings:c,children:l})=>e.jsx("div",{className:"w-full overflow-x-auto",children:e.jsxs("table",{className:"w-full border-y-2 border-gray-200",children:[e.jsx("thead",{children:e.jsx("tr",{children:c.map((n,p)=>e.jsx("th",{className:"py-2 text-xs tracking-wider font-bold text-start px-6",children:n},p))})}),e.jsx("tbody",{children:l})]})});d.__docgenInfo={description:"",methods:[],displayName:"Table",props:{headings:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const o={title:"Components/Table",component:d,tags:["autodocs"],argTypes:{headings:{control:"array",description:"Column headers for the table"}}},s={args:{headings:["Name","Age","Occupation"],children:e.jsxs(e.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-2",children:"Alice"}),e.jsx("td",{className:"px-6 py-2",children:"30"}),e.jsx("td",{className:"px-6 py-2",children:"Engineer"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-2",children:"Bob"}),e.jsx("td",{className:"px-6 py-2",children:"25"}),e.jsx("td",{className:"px-6 py-2",children:"Designer"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-2",children:"Carol"}),e.jsx("td",{className:"px-6 py-2",children:"28"}),e.jsx("td",{className:"px-6 py-2",children:"Product Manager"})]})]})}};var a,r,t;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    headings: ['Name', 'Age', 'Occupation'],
    children: <>
        <tr>
          <td className="px-6 py-2">Alice</td>
          <td className="px-6 py-2">30</td>
          <td className="px-6 py-2">Engineer</td>
        </tr>
        <tr>
          <td className="px-6 py-2">Bob</td>
          <td className="px-6 py-2">25</td>
          <td className="px-6 py-2">Designer</td>
        </tr>
        <tr>
          <td className="px-6 py-2">Carol</td>
          <td className="px-6 py-2">28</td>
          <td className="px-6 py-2">Product Manager</td>
        </tr>
      </>
  }
}`,...(t=(r=s.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const x=["Default"];export{s as Default,x as __namedExportsOrder,o as default};
