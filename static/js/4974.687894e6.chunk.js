"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4974],{4974:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var t=r(649),a=r(1026),s=r(5773),c=r(6732),i=r(430),o=r(8071),l=r(991),h="abcdefghijklmnopqrstuvwxyz",u="ABCDEFGHIJKLMNOPQRSTUVWXYZ",d="0123456789",g="!@#$%^&*()_+~`|}{\\[\\]:;?>,.<-=\\/";function p(e){void 0===e&&(e={});var n=e.lowerCase,r=void 0===n||n,t=e.upperCase,a=void 0===t||t,s=e.numeric,c=void 0===s||s,i=e.special,o=void 0===i||i,l=e.length,p=void 0===l?10:l,x="";if(!r&&!a&&!c&&!o)return x;for(;x.length<p;){var f=Math.ceil(h.length*Math.random()*Math.random())-1,m=Math.ceil(d.length*Math.random()*Math.random())-1,k=Math.ceil(g.length*Math.random()*Math.random())-1,y=Math.ceil(u.length*Math.random()*Math.random())-1;r&&x.length<p&&(x+=h.charAt(f)),a&&x.length<p&&(x+=u.charAt(y)),c&&x.length<p&&(x+=d.charAt(m)),o&&x.length<p&&(x+=g.charAt(k))}return x.trim()}function x(e){var n=function(e){void 0===e&&(e="");var n=new Array;n.push("[".concat(g,"]")),n.push("[A-Z]"),n.push("[0-9]"),n.push("[a-z]");for(var r=0,t=0;t<n.length;t++)new RegExp(n[t]).test(e)&&r++;return r}(e),r="",t="";switch(n){case 0:case 1:t="It's easy to crack!",r="gray";break;case 2:t="Very Weak! It's easy to crack!",r="red";break;case 3:t="Medium level. Enter more symbols!",r="orange";break;case 4:t="Strong :) Now it's safe!",r="green"}return{strength:t,color:r}}var f,m,k,y=r(1121),j=l.ZP.input(f||(f=(0,c.Z)(["\n  border-radius: 6px;\n"]))),v=l.ZP.label(m||(m=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  gap: 10px;\n"]))),b=function(e){return(0,y.jsxs)(v,{children:[(0,y.jsx)(j,(0,s.Z)({type:"range",min:8,max:50,style:{flex:1}},e,{value:e.range})),(0,y.jsx)("span",{children:e.range}),e.extra]})},C=l.ZP.span(k||(k=(0,c.Z)(["\n  border-radius: 3px;\n  color: #fff;\n  font-size: 12px;\n  margin-right: 5px;\n  margin-left: 6px;\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n"])));function w(){var e=(0,i.useState)(12),n=(0,a.Z)(e,2),r=n[0],s=n[1],c=(0,i.useState)(!0),l=(0,a.Z)(c,2),h=l[0],u=l[1],d=(0,i.useState)([]),g=(0,a.Z)(d,2),f=g[0],m=g[1],k=(0,i.useState)(!0),w=(0,a.Z)(k,2),Z=w[0],M=w[1],S=(0,i.useState)(!0),A=(0,a.Z)(S,2),N=A[0],E=A[1],P=(0,i.useState)(!0),T=(0,a.Z)(P,2),z=T[0],I=T[1],K=function(e){var n=(0,t.Z)(f);n.unshift(e),m(n.slice(0,20))};return(0,i.useEffect)((function(){var e=p({length:r,lowerCase:h,upperCase:Z,numeric:N,special:z});K(e)}),[r,h,Z,N,z]),(0,i.useEffect)((function(){var e=(0,t.Z)(f);(0,t.Z)(Array(5)).map((function(){var n=p({length:r,lowerCase:h,upperCase:Z,numeric:N,special:z});e.unshift(n)})),m(e.slice(0,20))}),[]),(0,y.jsx)(o.im,{children:(0,y.jsxs)(o.Rh,{overflow:"initial",title:"Generate Password - Setting",children:[(0,y.jsx)(b,{style:{maxWidth:630},range:r,value:r,onChange:function(e){return s(Number(e.target.value))},extra:(0,y.jsx)("select",{value:r,onChange:function(e){return s(Number(e.target.value))},children:(0,t.Z)(Array(43)).map((function(e,n){return(0,y.jsx)("option",{value:n+8,children:n+8},n)}))})}),(0,y.jsxs)(o.Ki,{style:{paddingTop:10},children:[(0,y.jsxs)(v,{children:[(0,y.jsx)(j,{type:"checkbox",checked:h,onChange:function(e){return u(e.target.checked)}}),"Lower Case Letter(a..z)"]}),(0,y.jsxs)(v,{children:[(0,y.jsx)(j,{type:"checkbox",checked:Z,onChange:function(e){return M(e.target.checked)}}),"Upper Case Letter(A..Z)"]}),(0,y.jsxs)(v,{children:[(0,y.jsx)(j,{type:"checkbox",checked:N,onChange:function(e){return E(e.target.checked)}}),"Number (0..9)"]}),(0,y.jsxs)(v,{children:[(0,y.jsx)(j,{type:"checkbox",checked:z,onChange:function(e){return I(e.target.checked)}}),"Special characters"]})]}),(0,y.jsx)(o.zx,{style:{marginTop:10},onClick:function(){K(p({length:r,lowerCase:h,upperCase:Z,numeric:N,special:z}))},children:"Generate Password"}),(0,y.jsxs)(o.Ki,{direction:"row",items:"center",gutter:.1,style:{marginTop:10},children:[(0,y.jsx)(C,{style:{backgroundColor:"gray"}})," ",(0,y.jsx)("span",{children:"It's easy to crack!"}),(0,y.jsx)(C,{style:{backgroundColor:"red"}})," ",(0,y.jsx)("span",{children:"Very Weak! It's easy to crack!"}),(0,y.jsx)(C,{style:{backgroundColor:"orange"}})," ",(0,y.jsx)("span",{children:"Medium level. Enter more symbols!"}),(0,y.jsx)(C,{style:{backgroundColor:"green"}})," ",(0,y.jsx)("span",{children:"Strong :) Now it's safe!"})]}),(0,y.jsx)(o.Ki,{style:{paddingTop:10},children:f.map((function(e,n){var r=x(e);return(0,y.jsxs)(o.NK,{copyText:e,label:""+(n+1),children:[(0,y.jsx)(C,{style:{backgroundColor:r.color}})," ",e]},n)}))})]})})}}}]);
//# sourceMappingURL=4974.687894e6.chunk.js.map