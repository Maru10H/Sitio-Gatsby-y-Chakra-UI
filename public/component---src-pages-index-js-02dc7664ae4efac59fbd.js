"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[678],{1462:function(e,t,n){n.r(t),n.d(t,{default:function(){return Oe}});var r=n(7294),a=n(5059),i=n(498),o=n(5893),l=(0,a.G)((function(e,t){const{direction:n,align:r,justify:a,wrap:l,basis:s,grow:c,shrink:d,...u}=e,m={display:"flex",flexDirection:n,alignItems:r,justifyContent:a,flexWrap:l,flexBasis:s,flexGrow:c,flexShrink:d};return(0,o.jsx)(i.m.div,{ref:t,__css:m,...u})}));l.displayName="Flex";var s=n(2498),c=n(5490),d=n(3179),u=n(5432),m=(0,a.G)((function(e,t){const n=(0,c.mq)("Heading",e),{className:r,...a}=(0,d.Lr)(e);return(0,o.jsx)(i.m.h2,{ref:t,className:(0,u.cx)("chakra-heading",e.className),...a,__css:n})}));m.displayName="Heading";var p=e=>(0,o.jsx)(i.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});p.displayName="StackItem";Object.freeze(["base","sm","md","lg","xl","2xl"]);function f(e,t){return Array.isArray(e)?e.map((e=>null===e?null:t(e))):(0,u.Kn)(e)?Object.keys(e).reduce(((n,r)=>(n[r]=t(e[r]),n)),{}):null!=e?t(e):null}var h="& > *:not(style) ~ *:not(style)";var v=(0,a.G)(((e,t)=>{const{isInline:n,direction:a,align:l,justify:s,spacing:c="0.5rem",wrap:d,children:m,divider:v,className:y,shouldWrapChildren:g,...x}=e,b=n?"row":null!=a?a:"column",k=(0,r.useMemo)((()=>function(e){const{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[h]:f(n,(e=>r[e]))}}({direction:b,spacing:c})),[b,c]),C=(0,r.useMemo)((()=>function(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":f(n,(e=>r[e]))}}({spacing:c,direction:b})),[c,b]),w=!!v,j=!g&&!w,E=(0,r.useMemo)((()=>{const e=function(e){return r.Children.toArray(e).filter((e=>(0,r.isValidElement)(e)))}(m);return j?e:e.map(((t,n)=>{const a=void 0!==t.key?t.key:n,i=n+1===e.length,l=g?(0,o.jsx)(p,{children:t},a):t;if(!w)return l;const s=(0,r.cloneElement)(v,{__css:C}),c=i?null:s;return(0,o.jsxs)(r.Fragment,{children:[l,c]},a)}))}),[v,C,w,j,g,m]),_=(0,u.cx)("chakra-stack",y);return(0,o.jsx)(i.m.div,{ref:t,display:"flex",alignItems:l,justifyContent:s,flexDirection:k.flexDirection,flexWrap:d,className:_,__css:w?{}:{[h]:k[h]},...x,children:E})}));v.displayName="Stack";var y=n(5227),[g,x]=(0,y.k)({strict:!1,name:"ButtonGroupContext"});function b(e){const{children:t,className:n,...a}=e,l=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,s=(0,u.cx)("chakra-button__icon",n);return(0,o.jsx)(i.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:s,children:l})}b.displayName="ButtonIcon";var k=n(295);function C(e){const{label:t,placement:n,spacing:a="0.5rem",children:l=(0,o.jsx)(k.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:c,...d}=e,m=(0,u.cx)("chakra-button__spinner",s),p="start"===n?"marginEnd":"marginStart",f=(0,r.useMemo)((()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[p]:t?a:0,fontSize:"1em",lineHeight:"normal",...c})),[c,t,p,a]);return(0,o.jsx)(i.m.div,{className:m,...d,__css:f,children:l})}function w(...e){return t=>{e.forEach((e=>{!function(e,t){if(null!=e)if("function"!=typeof e)try{e.current=t}catch(n){throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}else e(t)}(e,t)}))}}function j(...e){return(0,r.useMemo)((()=>w(...e)),e)}C.displayName="ButtonSpinner";var E=(0,a.G)(((e,t)=>{const n=x(),a=(0,c.mq)("Button",{...n,...e}),{isDisabled:l=(null==n?void 0:n.isDisabled),isLoading:s,isActive:m,children:p,leftIcon:f,rightIcon:h,loadingText:v,iconSpacing:y="0.5rem",type:g,spinner:b,spinnerPlacement:k="start",className:w,as:E,...I}=(0,d.Lr)(e),S=(0,r.useMemo)((()=>{const e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!n&&{_focus:e}}}),[a,n]),{ref:N,type:P}=function(e){const[t,n]=(0,r.useState)(!e);return{ref:(0,r.useCallback)((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(E),B={rightIcon:h,leftIcon:f,iconSpacing:y,children:p};return(0,o.jsxs)(i.m.button,{ref:j(t,N),as:E,type:null!=g?g:P,"data-active":(0,u.PB)(m),"data-loading":(0,u.PB)(s),__css:S,className:(0,u.cx)("chakra-button",w),...I,disabled:l||s,children:[s&&"start"===k&&(0,o.jsx)(C,{className:"chakra-button__spinner--start",label:v,placement:"start",spacing:y,children:b}),s?v||(0,o.jsx)(i.m.span,{opacity:0,children:(0,o.jsx)(_,{...B})}):(0,o.jsx)(_,{...B}),s&&"end"===k&&(0,o.jsx)(C,{className:"chakra-button__spinner--end",label:v,placement:"end",spacing:y,children:b})]})}));function _(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:a}=e;return(0,o.jsxs)(o.Fragment,{children:[t&&(0,o.jsx)(b,{marginEnd:a,children:t}),r,n&&(0,o.jsx)(b,{marginStart:a,children:n})]})}E.displayName="Button";var I=n(6877);function S(e){const{viewBox:t="0 0 24 24",d:n,displayName:i,defaultProps:l={}}=e,s=r.Children.toArray(e.path),c=(0,a.G)(((e,r)=>(0,o.jsx)(I.J,{ref:r,viewBox:t,...l,...e,children:s.length?s:(0,o.jsx)("path",{fill:"currentColor",d:n})})));return c.displayName=i,c}var N=S({d:"M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",displayName:"MoonIcon"}),P=S({displayName:"SunIcon",path:(0,o.jsxs)("g",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2",fill:"none",stroke:"currentColor",children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,o.jsx)("path",{d:"M12 1v2"}),(0,o.jsx)("path",{d:"M12 21v2"}),(0,o.jsx)("path",{d:"M4.22 4.22l1.42 1.42"}),(0,o.jsx)("path",{d:"M18.36 18.36l1.42 1.42"}),(0,o.jsx)("path",{d:"M1 12h2"}),(0,o.jsx)("path",{d:"M21 12h2"}),(0,o.jsx)("path",{d:"M4.22 19.78l1.42-1.42"}),(0,o.jsx)("path",{d:"M18.36 5.64l1.42-1.42"})]})});var B=()=>{const{colorMode:e,toggleColorMode:t}=(0,s.If)();return r.createElement(r.Fragment,null,r.createElement(l,{w:"30%",alignItems:"center",m:"50px auto 0",justifyContent:"space-between"},r.createElement(m,null,"ToDo List"),r.createElement(l,{alignItems:"center",justifyContent:"space-between"},r.createElement(v,{direction:"row",spacing:7},r.createElement(E,{onClick:t},"light"===e?r.createElement(N,null):r.createElement(P,null))))))},L=n(5785),D=(0,i.m)("div");D.displayName="Box";var M=(0,a.G)((function(e,t){const{size:n,centerContent:r=!0,...a}=e,i=r?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,o.jsx)(D,{ref:t,boxSize:n,__css:{...i,flexShrink:0,flexGrow:0},...a})}));M.displayName="Square",(0,a.G)((function(e,t){const{size:n,...r}=e;return(0,o.jsx)(M,{size:n,ref:t,borderRadius:"9999px",...r})})).displayName="Circle";var[F,O]=(0,y.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[R,T]=(0,y.k)({strict:!1,name:"FormControlContext"});function z(e){var t,n,r;const a=T(),{id:i,disabled:o,readOnly:l,required:s,isRequired:c,isInvalid:d,isReadOnly:m,isDisabled:p,onFocus:f,onBlur:h,...v}=e,y=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&y.push(a.feedbackId),(null==a?void 0:a.hasHelpText)&&y.push(a.helpTextId),{...v,"aria-describedby":y.join(" ")||void 0,id:null!=i?i:null==a?void 0:a.id,isDisabled:null!=(t=null!=o?o:p)?t:null==a?void 0:a.isDisabled,isReadOnly:null!=(n=null!=l?l:m)?n:null==a?void 0:a.isReadOnly,isRequired:null!=(r=null!=s?s:c)?r:null==a?void 0:a.isRequired,isInvalid:null!=d?d:null==a?void 0:a.isInvalid,onFocus:(0,u.v0)(null==a?void 0:a.onFocus,f),onBlur:(0,u.v0)(null==a?void 0:a.onBlur,h)}}(0,a.G)((function(e,t){const n=(0,c.jC)("Form",e),a=(0,d.Lr)(e),{getRootProps:l,htmlProps:s,...m}=function(e){const{id:t,isRequired:n,isInvalid:a,isDisabled:i,isReadOnly:o,...l}=e,s=(0,r.useId)(),c=t||`field-${s}`,d=`${c}-label`,m=`${c}-feedback`,p=`${c}-helptext`,[f,h]=(0,r.useState)(!1),[v,y]=(0,r.useState)(!1),[g,x]=(0,r.useState)(!1),b=(0,r.useCallback)(((e={},t=null)=>({id:p,...e,ref:w(t,(e=>{e&&y(!0)}))})),[p]),k=(0,r.useCallback)(((e={},t=null)=>({...e,ref:t,"data-focus":(0,u.PB)(g),"data-disabled":(0,u.PB)(i),"data-invalid":(0,u.PB)(a),"data-readonly":(0,u.PB)(o),id:void 0!==e.id?e.id:d,htmlFor:void 0!==e.htmlFor?e.htmlFor:c})),[c,i,g,a,o,d]),C=(0,r.useCallback)(((e={},t=null)=>({id:m,...e,ref:w(t,(e=>{e&&h(!0)})),"aria-live":"polite"})),[m]),j=(0,r.useCallback)(((e={},t=null)=>({...e,...l,ref:t,role:"group"})),[l]),E=(0,r.useCallback)(((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})),[]);return{isRequired:!!n,isInvalid:!!a,isReadOnly:!!o,isDisabled:!!i,isFocused:!!g,onFocus:()=>x(!0),onBlur:()=>x(!1),hasFeedbackText:f,setHasFeedbackText:h,hasHelpText:v,setHasHelpText:y,id:c,labelId:d,feedbackId:m,helpTextId:p,htmlProps:l,getHelpTextProps:b,getErrorMessageProps:C,getRootProps:j,getLabelProps:k,getRequiredIndicatorProps:E}}(a),p=(0,u.cx)("chakra-form-control",e.className);return(0,o.jsx)(R,{value:m,children:(0,o.jsx)(F,{value:n,children:(0,o.jsx)(i.m.div,{...l({},t),className:p,__css:n.container})})})})).displayName="FormControl",(0,a.G)((function(e,t){const n=T(),r=O(),a=(0,u.cx)("chakra-form__helper-text",e.className);return(0,o.jsx)(i.m.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:r.helperText,className:a})})).displayName="FormHelperText";var q,G=(0,a.G)((function(e,t){const{htmlSize:n,...r}=e,a=(0,c.jC)("Input",r),l=function(e){const{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:a,...i}=z(e);return{...i,disabled:t,readOnly:r,required:a,"aria-invalid":(0,u.Qm)(n),"aria-required":(0,u.Qm)(a),"aria-readonly":(0,u.Qm)(r)}}((0,d.Lr)(r)),s=(0,u.cx)("chakra-input",e.className);return(0,o.jsx)(i.m.input,{size:n,...l,__css:a.field,ref:t,className:s})}));G.displayName="Input",G.id="Input";var W=new Uint8Array(16);function A(){if(!q&&!(q="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return q(W)}var H=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var $=function(e){return"string"==typeof e&&H.test(e)},K=[],V=0;V<256;++V)K.push((V+256).toString(16).substr(1));var U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(K[e[t+0]]+K[e[t+1]]+K[e[t+2]]+K[e[t+3]]+"-"+K[e[t+4]]+K[e[t+5]]+"-"+K[e[t+6]]+K[e[t+7]]+"-"+K[e[t+8]]+K[e[t+9]]+"-"+K[e[t+10]]+K[e[t+11]]+K[e[t+12]]+K[e[t+13]]+K[e[t+14]]+K[e[t+15]]).toLowerCase();if(!$(n))throw TypeError("Stringified UUID is invalid");return n};var Q=function(e,t,n){var r=(e=e||{}).random||(e.rng||A)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return U(r)};var X=e=>{let{lista:t,setLista:n,guardarEnLocalS:a}=e;const{0:i,1:o}=(0,r.useState)("");return r.createElement(l,{align:"center",justify:"center",flexDirection:"column",boxShadow:"md",p:"8",rounded:"md",borderColor:"white",borderRadius:"8px",m:"0 auto",mt:6,w:"sm",bg:(0,s.ff)("white","gray.700"),color:(0,s.ff)("gray.600","white")},r.createElement(D,{display:"flex",w:"100%"},r.createElement(G,{placeholder:"Ingrese su tarea",onChange:e=>o(e.target.value),onKeyPress:e=>{if("Enter"===e.key){const r=[].concat((0,L.Z)(t),[{value:e.target.value,isCompleted:!1,id:Q()}]);n(r),o(""),a(r)}},value:i})))};var J=e=>{let{filtros:t}=e;return r.createElement(l,{align:"center",justify:"center"},r.createElement(E,{onClick:()=>t("todos"),m:2},"Todos"),r.createElement(E,{onClick:()=>t("completos"),m:2},"Completas"),r.createElement(E,{onClick:()=>t("incompletos"),m:2},"Incompletas"))},[Z,Y]=(0,y.k)({name:"CheckboxGroupContext",strict:!1});function ee(e){return(0,o.jsx)(i.m.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:(0,o.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function te(e){return(0,o.jsx)(i.m.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e,children:(0,o.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function ne(e){const{isIndeterminate:t,isChecked:n,...r}=e,a=t?te:ee;return n||t?(0,o.jsx)(i.m.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,o.jsx)(a,{...r})}):null}var re=n(6245),ae=n(2366),ie=n(5155),oe={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},le=!1,se=null,ce=!1,de=!1,ue=new Set;function me(e,t){ue.forEach((n=>n(e,t)))}var pe="undefined"!=typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function fe(e){var t;ce=!0,(t=e).metaKey||!pe&&t.altKey||t.ctrlKey||"Control"===t.key||"Shift"===t.key||"Meta"===t.key||(se="keyboard",me("keyboard",e))}function he(e){if(se="pointer","mousedown"===e.type||"pointerdown"===e.type){ce=!0;const t=e.composedPath?e.composedPath()[0]:e.target;let n=!1;try{n=t.matches(":focus-visible")}catch{}if(n)return;me("pointer",e)}}function ve(e){var t;(0===(t=e).mozInputSource&&t.isTrusted||0===t.detail&&!t.pointerType)&&(ce=!0,se="virtual")}function ye(e){e.target!==window&&e.target!==document&&(ce||de||(se="virtual",me("virtual",e)),ce=!1,de=!1)}function ge(){ce=!1,de=!0}function xe(){return"pointer"!==se}function be(){if("undefined"==typeof window||le)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...t){ce=!0,e.apply(this,t)},document.addEventListener("keydown",fe,!0),document.addEventListener("keyup",fe,!0),document.addEventListener("click",ve,!0),window.addEventListener("focus",ye,!0),window.addEventListener("blur",ge,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",he,!0),document.addEventListener("pointermove",he,!0),document.addEventListener("pointerup",he,!0)):(document.addEventListener("mousedown",he,!0),document.addEventListener("mousemove",he,!0),document.addEventListener("mouseup",he,!0)),le=!0}function ke(e){be(),e(xe());const t=()=>e(xe());return ue.add(t),()=>{ue.delete(t)}}function Ce(e={}){const t=z(e),{isDisabled:n,isReadOnly:a,isRequired:i,isInvalid:o,id:l,onBlur:s,onFocus:c,"aria-describedby":d}=t,{defaultChecked:m,isChecked:p,isFocusable:f,onChange:h,isIndeterminate:v,name:y,value:g,tabIndex:x,"aria-label":b,"aria-labelledby":k,"aria-invalid":C,...j}=e,E=function(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}(j,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),_=(0,ie.W)(h),I=(0,ie.W)(s),S=(0,ie.W)(c),[N,P]=(0,r.useState)(!1),[B,L]=(0,r.useState)(!1),[D,M]=(0,r.useState)(!1),[F,O]=(0,r.useState)(!1);(0,r.useEffect)((()=>ke(P)),[]);const R=(0,r.useRef)(null),[T,q]=(0,r.useState)(!0),[G,W]=(0,r.useState)(!!m),A=void 0!==p,H=A?p:G,$=(0,r.useCallback)((e=>{a||n?e.preventDefault():(A||W(H?e.target.checked:!!v||e.target.checked),null==_||_(e))}),[a,n,H,A,v,_]);(0,re.G)((()=>{R.current&&(R.current.indeterminate=Boolean(v))}),[v]),(0,ae.r)((()=>{n&&L(!1)}),[n,L]),(0,re.G)((()=>{const e=R.current;(null==e?void 0:e.form)&&(e.form.onreset=()=>{W(!!m)})}),[]);const K=n&&!f,V=(0,r.useCallback)((e=>{" "===e.key&&O(!0)}),[O]),U=(0,r.useCallback)((e=>{" "===e.key&&O(!1)}),[O]);(0,re.G)((()=>{if(!R.current)return;R.current.checked!==H&&W(R.current.checked)}),[R.current]);const Q=(0,r.useCallback)(((e={},t=null)=>({...e,ref:t,"data-active":(0,u.PB)(F),"data-hover":(0,u.PB)(D),"data-checked":(0,u.PB)(H),"data-focus":(0,u.PB)(B),"data-focus-visible":(0,u.PB)(B&&N),"data-indeterminate":(0,u.PB)(v),"data-disabled":(0,u.PB)(n),"data-invalid":(0,u.PB)(o),"data-readonly":(0,u.PB)(a),"aria-hidden":!0,onMouseDown:(0,u.v0)(e.onMouseDown,(e=>{B&&e.preventDefault(),O(!0)})),onMouseUp:(0,u.v0)(e.onMouseUp,(()=>O(!1))),onMouseEnter:(0,u.v0)(e.onMouseEnter,(()=>M(!0))),onMouseLeave:(0,u.v0)(e.onMouseLeave,(()=>M(!1)))})),[F,H,n,B,N,D,v,o,a]),X=(0,r.useCallback)(((e={},t=null)=>({...E,...e,ref:w(t,(e=>{e&&q("LABEL"===e.tagName)})),onClick:(0,u.v0)(e.onClick,(()=>{var e;T||(null==(e=R.current)||e.click(),requestAnimationFrame((()=>{var e;null==(e=R.current)||e.focus()})))})),"data-disabled":(0,u.PB)(n),"data-checked":(0,u.PB)(H),"data-invalid":(0,u.PB)(o)})),[E,n,H,o,T]),J=(0,r.useCallback)(((e={},t=null)=>({...e,ref:w(R,t),type:"checkbox",name:y,value:g,id:l,tabIndex:x,onChange:(0,u.v0)(e.onChange,$),onBlur:(0,u.v0)(e.onBlur,I,(()=>L(!1))),onFocus:(0,u.v0)(e.onFocus,S,(()=>L(!0))),onKeyDown:(0,u.v0)(e.onKeyDown,V),onKeyUp:(0,u.v0)(e.onKeyUp,U),required:i,checked:H,disabled:K,readOnly:a,"aria-label":b,"aria-labelledby":k,"aria-invalid":C?Boolean(C):o,"aria-describedby":d,"aria-disabled":n,style:oe})),[y,g,l,$,I,S,V,U,i,H,K,a,b,k,C,o,d,n,x]),Z=(0,r.useCallback)(((e={},t=null)=>({...e,ref:t,onMouseDown:(0,u.v0)(e.onMouseDown,we),"data-disabled":(0,u.PB)(n),"data-checked":(0,u.PB)(H),"data-invalid":(0,u.PB)(o)})),[H,n,o]);return{state:{isInvalid:o,isFocused:B,isChecked:H,isActive:F,isHovered:D,isIndeterminate:v,isDisabled:n,isReadOnly:a,isRequired:i},getRootProps:X,getCheckboxProps:Q,getInputProps:J,getLabelProps:Z,htmlProps:E}}function we(e){e.preventDefault(),e.stopPropagation()}var je=n(917),Ee={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},_e={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},Ie=(0,je.F4)({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),Se=(0,je.F4)({from:{opacity:0},to:{opacity:1}}),Ne=(0,je.F4)({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),Pe=(0,a.G)((function(e,t){const n=Y(),a={...n,...e},l=(0,c.jC)("Checkbox",a),s=(0,d.Lr)(e),{spacing:m="0.5rem",className:p,children:f,iconColor:h,iconSize:v,icon:y=(0,o.jsx)(ne,{}),isChecked:g,isDisabled:x=(null==n?void 0:n.isDisabled),onChange:b,inputProps:k,...C}=s;let w=g;(null==n?void 0:n.value)&&s.value&&(w=n.value.includes(s.value));let j=b;(null==n?void 0:n.onChange)&&s.value&&(j=(0,u.PP)(n.onChange,b));const{state:E,getInputProps:_,getCheckboxProps:I,getLabelProps:S,getRootProps:N}=Ce({...C,isDisabled:x,isChecked:w,onChange:j}),P=(0,r.useMemo)((()=>({animation:E.isIndeterminate?`${Se} 20ms linear, ${Ne} 200ms linear`:`${Ie} 200ms linear`,fontSize:v,color:h,...l.icon})),[h,v,E.isIndeterminate,l.icon]),B=(0,r.cloneElement)(y,{__css:P,isIndeterminate:E.isIndeterminate,isChecked:E.isChecked});return(0,o.jsxs)(i.m.label,{__css:{..._e,...l.container},className:(0,u.cx)("chakra-checkbox",p),...N(),children:[(0,o.jsx)("input",{className:"chakra-checkbox__input",..._(k,t)}),(0,o.jsx)(i.m.span,{__css:{...Ee,...l.control},className:"chakra-checkbox__control",...I(),children:B}),f&&(0,o.jsx)(i.m.span,{className:"chakra-checkbox__label",...S(),__css:{marginStart:m,...l.label},children:f})]})}));Pe.displayName="Checkbox";var Be=n(888),Le=(0,a.G)((function(e,t){const n=(0,c.mq)("Text",e),{className:r,align:a,decoration:l,casing:s,...m}=(0,d.Lr)(e),p=(0,Be.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,o.jsx)(i.m.p,{ref:t,className:(0,u.cx)("chakra-text",e.className),...p,...m,__css:n})}));Le.displayName="Text";var De=S({displayName:"DeleteIcon",path:(0,o.jsx)("g",{fill:"currentColor",children:(0,o.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),Me=n(3750);var Fe=e=>{let{item:t,handleToggleCompleted:n,handleOnClick:a,editOnClick:i}=e;const{0:o,1:s}=(0,r.useState)(!1),{0:c,1:d}=(0,r.useState)(t.value);return o?r.createElement(G,{value:c,onChange:e=>d(e.target.value),onKeyDown:e=>{"Enter"===e.key&&(i(t.id,e.target.value),s(!1))}}):r.createElement(l,{w:"100%",mt:1,align:"center",key:"item-"+t.id},r.createElement(Pe,{onChange:()=>n(t.id),mb:2,isChecked:t.isCompleted}),r.createElement(Le,{noOfLines:1,w:"100%",style:{textDecoration:t.isCompleted?"line-through":"none"},ml:2}," ",t.value," "),r.createElement(l,null,r.createElement(E,{size:"sm",color:"green",ml:4,mb:2,onClick:()=>s(!0)}," ",r.createElement(Me.Ph1,null)," "),r.createElement(E,{size:"sm",color:"red",ml:4,mb:2,onClick:()=>a(t)}," ",r.createElement(De,null)," ")))};var Oe=()=>{const{0:e,1:t}=(0,r.useState)();let{0:n,1:a}=(0,r.useState)("todos");const i=n=>{const r=e.filter((e=>e.id!==n.id));t(r)},o=n=>{const r=e.map((e=>{if(e.id===n){return{...e,isCompleted:!e.isCompleted}}return e}));t(r)},c=(n,r)=>{t(e.map((e=>e.id===n?{...e,value:r}:e)))};return r.createElement(r.Fragment,null,r.createElement(B,null),r.createElement(X,{lista:e,setLista:t}),r.createElement(l,{align:"center",justify:"center",flexDirection:"column",boxShadow:"md",p:"8",rounded:"md",borderRadius:"8px",m:"0 auto",mt:4,w:"sm",bg:(0,s.ff)("white","gray.700"),color:(0,s.ff)("gray.600","white"),borderColor:(0,s.ff)("gray.200","gray.900")},r.createElement(J,{filtros:e=>{a(e)}}),e.filter((e=>"completos"===n&&e.isCompleted||"incompletos"===n&&!e.isCompleted||"todos"===n)).map((e=>r.createElement(Fe,{item:e,handleToggleCompleted:o,handleOnClick:i,editOnClick:c,key:"item-"+e.id})))))}},4405:function(e,t,n){n.d(t,{w_:function(){return c}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function s(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return r.createElement(d,o({attr:o({},e.attr)},t),s(e.child))}}function d(e){var t=function(t){var n,a=e.attr,i=e.size,s=e.title,c=l(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-02dc7664ae4efac59fbd.js.map