"use strict";(self.webpackChunkmy_admin=self.webpackChunkmy_admin||[]).push([[3],{7003:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ue});var o=a(3843),r=a(5043),l=a(3216),n=a(3962),s=a(2843),c=a(8298),i=a(2991),d=a(703),u=a(6878),h=a(4535),x=a(6178),p=a.n(x),A=a(5475),g=a(9652),b=a(7502),m=a(8076),f=a(378),j=a(310),y=a(9650),v=a(3336),w=a(1806),S=a(4882),_=a(3460),R=a(7392),T=a(2143),C=a(3159),k=a(3471),E=a(8082);var N=a(579);const D=(0,o.A)({"table-container":"TableView_table-container__h38nv","no-data-found":"TableView_no-data-found__v13Fm","load-more-container":"TableView_load-more-container__7bfD4","data-row":"TableView_data-row__nuplv","allow-editing":"TableView_allow-editing__ahtns"}),M=(0,h.Ay)(g.A)((e=>{let{theme:t}=e;return{["&.".concat(b.A.head)]:{backgroundColor:t.palette.common.black,color:t.palette.common.white},["&.".concat(b.A.body)]:{fontSize:14}}})),I=(0,h.Ay)(m.A)((e=>{let{theme:t}=e;return{"&:nth-of-type(odd)":{backgroundColor:t.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),F=(0,h.Ay)((e=>(0,N.jsx)(f.A,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},...e})))((e=>{let{theme:t}=e;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:180,color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:(0,j.X4)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}));const U=function(e){const[t,a]=(0,r.useState)([]),o=(0,c.d4)((e=>e[u.bh].appPermissions)),{isEditable:l}=o,[n,s]=(0,r.useState)({anchor:null,sourceId:null});return(0,r.useEffect)((()=>{a(e.sourceData)}),[e.sourceData]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:"".concat(D.tableContainer," ").concat(l?D.allowEditing:""),children:(0,N.jsxs)(y.A,{component:v.A,children:[(0,N.jsxs)(w.A,{sx:{minWidth:700},"aria-label":"customized table",children:[(0,N.jsx)(S.A,{children:(0,N.jsxs)(m.A,{children:[(0,N.jsx)(M,{align:"left",children:"Index"}),(0,N.jsx)(M,{children:"Source"}),(0,N.jsx)(M,{children:"Sub Source"}),(0,N.jsx)(M,{align:"center",children:"Created Date Time"}),(0,N.jsx)(M,{align:"center",children:"Created By"}),(0,N.jsx)(M,{align:"center",children:"Updated By"}),(0,N.jsx)(M,{})]})}),(0,N.jsx)(_.A,{children:!(0,i.A)(t)&&t.map(((e,t)=>(0,N.jsxs)(I,{className:D.dataRow,children:[(0,N.jsx)(M,{children:++t}),(0,N.jsx)(M,{component:"th",scope:"row",children:e.label}),(0,N.jsx)(M,{children:e.subsources.map((e=>e.label)).join(", ")}),(0,N.jsx)(M,{align:"center",children:"Invalid Date"!==p()(e.createdAt)&&p()(e.createdAt).format("DD/MM/YYYY HH:MM A")}),(0,N.jsx)(M,{align:"center",children:(0,N.jsxs)(A.N_,{to:"/profile/".concat(e.SourceCreatedBy.id,"/info"),children:[" ",e.SourceCreatedBy.name]})}),(0,N.jsx)(M,{align:"center",children:(0,N.jsxs)(A.N_,{to:"/profile/".concat(e.SourceUpdatedBy.id,"/info"),children:[" ",e.SourceUpdatedBy.name]})}),(0,N.jsx)(M,{align:"center",children:(0,N.jsx)(R.A,{onClick:t=>s({anchor:t.currentTarget,sourceId:e.id}),children:(0,N.jsx)(E.A,{})})})]},e.id)))})]}),(0,i.A)(t)&&(0,N.jsx)("h3",{className:D.noDataFound,children:"No Data Found"})]})}),(0,N.jsxs)(F,{id:"source-menu",anchorEl:n.anchor,open:Boolean(n.sourceId)&&l,onClose:e=>s({anchor:null,sourceId:null}),children:[(0,N.jsxs)(T.A,{onClick:function(t){e.handelSourceEditRequest(n.sourceId),s({anchor:null,sourceId:null})},children:[(0,N.jsx)(C.A,{}),"Edit"]}),(0,N.jsxs)(T.A,{onClick:function(t){e.handelSourceDeleteRequest(n.sourceId),s({anchor:null,sourceId:null})},children:[(0,N.jsx)(k.A,{}),"Delete"]})]})]})};var q=a(2505),B=a(4698),V=a(3462),L=a(8168),O=a(8587),z=a(8387),P=a(8606),W=a(5865),Y=a(2876),H=a(7034),K=a(2563);const X=["className","id"],Z=(0,h.Ay)(W.A,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),G=r.forwardRef((function(e,t){const a=(0,Y.A)({props:e,name:"MuiDialogTitle"}),{className:o,id:l}=a,n=(0,O.A)(a,X),s=a,c=(e=>{const{classes:t}=e;return(0,P.A)({root:["root"]},H.t,t)})(s),{titleId:i=l}=r.useContext(K.A);return(0,N.jsx)(Z,(0,L.A)({component:"h2",className:(0,z.A)(c.root,o),ownerState:s,ref:t,variant:"h6",id:null!=l?l:i},n))}));var J=a(5316),Q=a(1475),$=a(7056),ee=a(2400);function te(e){return(0,ee.Ay)("MuiDialogContentText",e)}(0,$.A)("MuiDialogContentText",["root"]);const ae=["children","className"],oe=(0,h.Ay)(W.A,{shouldForwardProp:e=>(0,Q.A)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),re=r.forwardRef((function(e,t){const a=(0,Y.A)({props:e,name:"MuiDialogContentText"}),{className:o}=a,r=(0,O.A)(a,ae),l=(e=>{const{classes:t}=e,a=(0,P.A)({root:["root"]},te,t);return(0,L.A)({},t,a)})(r);return(0,N.jsx)(oe,(0,L.A)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:r,className:(0,z.A)(l.root,o)},a,{classes:l}))}));var le=a(9347),ne=a(1906);const se={callback:null,title:"",desc:"",disagreeAltText:"",agreeAltText:"",note:"",open:!1,other:{}};const ce=function(e){const[t,a]=(0,r.useState)(!1);function o(){e.callback&&e.callback(!1)}return(0,r.useEffect)((()=>{a(e.open)}),[e.open]),t&&(0,N.jsxs)(V.A,{open:!0,onClose:function(){o()},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,N.jsx)(G,{id:"alert-dialog-title",children:e.title}),(0,N.jsxs)(J.A,{children:[(0,N.jsx)(re,{id:"alert-dialog-description",children:e.desc}),e.note&&(0,N.jsx)(re,{id:"alert-dialog-description",children:e.note})]}),(0,N.jsxs)(le.A,{children:[(0,N.jsx)(ne.A,{onClick:o,children:e.disagreeAltText||"Disagree"}),(0,N.jsx)(ne.A,{onClick:function(){e.callback&&e.callback(!0)},children:e.agreeAltText||"Agree"})]})]})},ie=(0,r.lazy)((()=>a.e(611).then(a.bind(a,4611)))),de=(0,o.A)({"view-container":"ViewAll_view-container__+AcRg","tool-bar":"ViewAll_tool-bar__83920",right:"ViewAll_right__KnR8s","search-conatiner":"ViewAll_search-conatiner__kf0BC"});const ue=function(e){const t=(0,c.wA)(),a=(0,s.S)(),[o]=(0,n.A)("view"),[h,x]=(0,r.useState)([]),[p,A]=(0,r.useState)(null),[g,b]=(0,r.useState)(se),m=(0,l.Zp)(),f=(0,c.d4)((e=>e[u.bh])),{isEditable:j}=f.appPermissions;function y(o){if(!o)return b(se);b((o=>{const r=o.other.id,l=e.baseURL+"/".concat(r,"/delete-source");return a({url:l,method:"POST"}).then((e=>{x((e=>e.filter((e=>e.id!==r)))),t(d.sl.showAlert({message:"Source '".concat(o.other.label,"' deleted successfully!"),title:"Request Sucessful!",severity:"success"}))})).catch((e=>{t(d.sl.showAlert({message:e.msg||"Source deletion failed",title:"Request Failed!",severity:"error"}))})),se}))}return o||m("/error",{state:{status:403,msg:"Your not allowed to access 'View' tab"}}),(0,r.useEffect)((()=>{!async function(){try{const t=e.baseURL+"/retrive-source-with-subsource",o=await a({url:t});x(o)}catch(r){var o;t(d.sl.showAlert({message:null!==(o=r.msg)&&void 0!==o?o:"Failed to fetch booking form data!",title:"Request Failed!",severity:"error"}))}}()}),[t,e.baseURL,a]),(0,N.jsxs)("div",{className:de.viewContainer,children:[j&&(0,N.jsxs)("div",{className:de.toolBar,children:[(0,N.jsx)("div",{className:de.left}),(0,N.jsx)("div",{className:de.right,children:(0,N.jsx)(R.A,{onClick:e=>A({type:"CREATE_NEW"}),children:(0,N.jsx)(q.A,{})})})]}),(0,N.jsx)(U,{baseURL:e.baseURL,sourceData:h,handelSourceEditRequest:function(e){const a=h.filter((t=>t.id===e));if((0,i.A)(h)||a.length<=0)return t(d.sl.showAlert({message:"No source data found!",title:"Edit Request Failed",severity:"error"}));A({...a[0],type:"UPDATE"})},handelSourceDeleteRequest:function(e){const t=h.filter((t=>t.id===e))[0].label;b({callback:y,title:"Request for confirmation",desc:"Are you sure you want to delete '".concat(t,"' source along with all the sub sources?"),note:"*Note: Source attached to booking form cannot be deleted",disagreeAltText:"No",agreeAltText:"Yes",open:!0,other:{id:e,label:t}})}}),(0,N.jsx)(r.Suspense,{fallback:(0,N.jsx)(B.A,{fallback:!0}),children:Boolean(p)&&(0,N.jsx)(ie,{sourceData:p,requstHandler:function(o){let{type:r,action:l}=o;if("CLOSE_MODAL"===r&&A(null),"FORM_SUBMISSION"===r){const o=e.baseURL+("CREATE_NEW"===p.type?"/create-source":"/".concat(p.id,"/update-source")),r="POST",n=new URLSearchParams(l.data);a({url:o,method:r,body:n}).then((e=>{"CREATE_NEW"===p.type?(x((t=>(t.push(e),t))),t(d.sl.showAlert({message:"Source & Subsource created successfully!",title:"Success",severity:"success"}))):(x(h.map((t=>t.id!==e.id?t:e))),t(d.sl.showAlert({message:"Source & Subsource updated successfully!",title:"Success",severity:"success"}))),A(null)})).catch((e=>{t(d.sl.showAlert({message:e.msg||"Failed to "+("CREATE_NEW"===p.type?"create":"update"),title:"Request Failed",severity:"error"}))}))}}})}),(0,N.jsx)(r.Suspense,{fallback:(0,N.jsx)(B.A,{fallback:!0}),children:(0,N.jsx)(ce,{open:g.open,title:g.title,desc:g.desc,note:g.note,callback:g.callback,agreeAltText:g.agreeAltText,disagreeAltText:g.disagreeAltText})})]})}},3962:(e,t,a)=>{a.d(t,{A:()=>l});var o=a(6878),r=a(8298);const l=function(e){const t=(0,r.d4)((e=>e[o.bh])).appTabs;return[t.filter((t=>t.endpoint===e)).length>0,t]}},3159:(e,t,a)=>{var o=a(4994);t.A=void 0;var r=o(a(39)),l=a(579);t.A=(0,r.default)((0,l.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")}}]);
//# sourceMappingURL=3.203931e3.chunk.js.map