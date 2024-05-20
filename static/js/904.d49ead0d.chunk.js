"use strict";(self.webpackChunkmy_admin=self.webpackChunkmy_admin||[]).push([[904],{4904:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Y});var n=a(3843),r=a(5043),o=a(3216),l=a(3962),i=a(2843),c=a(8298),s=a(2991),d=a(703),u=a(4535),h=a(6178),x=a.n(h),p=a(6878),m=a(5475),b=a(9652),g=a(7502),j=a(8076),A=a(378),f=a(310),w=a(9650),_=a(3336),v=a(1806),y=a(4882),S=a(3460),C=a(7392),k=a(2143),D=a(3159),M=a(3471),R=a(8082);var I=a(579);const E=(0,n.A)({"table-container":"TableView_table-container__ydKKm","no-data-found":"TableView_no-data-found__SRaXd","load-more-container":"TableView_load-more-container__noHYc","data-row":"TableView_data-row__Jb0xN","allow-editing":"TableView_allow-editing__a1htT"}),N=(0,u.Ay)(b.A)((e=>{let{theme:t}=e;return{["&.".concat(g.A.head)]:{backgroundColor:t.palette.common.black,color:t.palette.common.white},["&.".concat(g.A.body)]:{fontSize:14}}})),V=(0,u.Ay)(j.A)((e=>{let{theme:t}=e;return{"&:nth-of-type(odd)":{backgroundColor:t.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),T=(0,u.Ay)((e=>(0,I.jsx)(A.A,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},...e})))((e=>{let{theme:t}=e;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:180,color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:(0,f.X4)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}));const z=function(e){const[t,a]=(0,r.useState)([]),n=(0,c.d4)((e=>e[p.bh].appPermissions)),{isEditable:o}=n,[l,i]=(0,r.useState)({anchor:null,sourceId:null});return(0,r.useEffect)((()=>{a(e.sourceData)}),[e.sourceData]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{className:"".concat(E.tableContainer," ").concat(o?E.allowEditing:""),children:(0,I.jsxs)(w.A,{component:_.A,children:[(0,I.jsxs)(v.A,{sx:{minWidth:700},"aria-label":"customized table",children:[(0,I.jsx)(y.A,{children:(0,I.jsxs)(j.A,{children:[(0,I.jsx)(N,{align:"left",children:"Index"}),(0,I.jsx)(N,{children:"Source"}),(0,I.jsx)(N,{children:"Sub Source"}),(0,I.jsx)(N,{align:"center",children:"Created Date Time"}),(0,I.jsx)(N,{align:"center",children:"Created By"}),(0,I.jsx)(N,{})]})}),(0,I.jsx)(S.A,{children:t.map(((e,t)=>(0,I.jsxs)(V,{className:E.dataRow,children:[(0,I.jsx)(N,{children:++t}),(0,I.jsx)(N,{component:"th",scope:"row",children:e.label}),(0,I.jsx)(N,{children:e.subsources.map((e=>e.label)).join(", ")}),(0,I.jsx)(N,{align:"center",children:"Invalid Date"!==x()(e.createdAt)&&x()(e.createdAt).format("DD/MM/YYYY HH:MM A")}),(0,I.jsx)(N,{align:"center",children:(0,I.jsxs)(m.N_,{to:"/profile/".concat(e.SourceCreatedBy.id,"/info"),children:[" ",e.SourceCreatedBy.name]})}),(0,I.jsx)(N,{align:"center",children:(0,I.jsx)(C.A,{onClick:t=>i({anchor:t.currentTarget,sourceId:e.id}),children:(0,I.jsx)(R.A,{})})})]},e.id)))})]}),(0,s.A)(t)&&(0,I.jsx)("h3",{className:E.noDataFound,children:"No Data Found"})]})}),(0,I.jsxs)(T,{id:"source-menu",anchorEl:l.anchor,open:Boolean(l.sourceId)&&o,onClose:e=>i({anchor:null,sourceId:null}),children:[(0,I.jsxs)(k.A,{onClick:function(t){e.handelSourceEditRequest(l.sourceId),i({anchor:null,sourceId:null})},children:[(0,I.jsx)(D.A,{}),"Edit"]}),(0,I.jsxs)(k.A,{onClick:function(t){e.handelSourceDeleteRequest(l.sourceId),i({anchor:null,sourceId:null})},children:[(0,I.jsx)(M.A,{}),"Delete"]})]})]})};var L=a(2505),q=a(4698);const B=(0,r.lazy)((()=>a.e(611).then(a.bind(a,4611)))),F=(0,n.A)({"view-container":"ViewAll_view-container__scm0o","tool-bar":"ViewAll_tool-bar__8Ml0y",right:"ViewAll_right__hLCDy","search-conatiner":"ViewAll_search-conatiner__pS2d5"});const Y=function(e){const t=(0,c.wA)(),a=(0,i.S)(),[n]=(0,l.A)("view"),[u,h]=(0,r.useState)([]),[x,p]=(0,r.useState)(null),m=(0,o.Zp)();return n||m("/error",{state:{status:403,msg:"Your not allowed to access 'View' tab"}}),(0,r.useEffect)((()=>{!async function(){try{const t=e.baseURL+"/retrive-source-with-subsource",n=await a({url:t});h(n)}catch(r){var n;t(d.sl.showAlert({message:null!==(n=r.msg)&&void 0!==n?n:"Failed to fetch booking form data!",title:"Request Failed!",severity:"error"}))}}()}),[t,e.baseURL,a]),(0,I.jsxs)("div",{className:F.viewContainer,children:[(0,I.jsxs)("div",{className:F.toolBar,children:[(0,I.jsx)("div",{className:F.left}),(0,I.jsx)("div",{className:F.right,children:(0,I.jsx)(C.A,{children:(0,I.jsx)(L.A,{})})})]}),(0,I.jsx)(z,{baseURL:e.baseURL,sourceData:u,handelSourceEditRequest:function(e){const a=u.filter((t=>t.id===e));if((0,s.A)(u)||a.length<=0)return t(d.sl.showAlert({message:"No source data found!",title:"Edit Request Failed",severity:"error"}));p(a[0])}}),(0,I.jsx)(r.Suspense,{fallback:(0,I.jsx)(q.A,{fallback:!0}),children:Boolean(x)&&(0,I.jsx)(B,{sourceData:x,requstHandler:function(e){let{type:t,action:a}=e;"CLOSE_MODAL"===t&&p(null)}})})]})}},3962:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(6878),r=a(8298);const o=function(e){const t=(0,r.d4)((e=>e[n.bh])).appTabs;return[t.filter((t=>t.endpoint===e)).length>0,t]}},3159:(e,t,a)=>{var n=a(4994);t.A=void 0;var r=n(a(39)),o=a(579);t.A=(0,r.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")}}]);
//# sourceMappingURL=904.d49ead0d.chunk.js.map