(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6421],{74481:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var i,r,a=t(11026),c=t(36732),u=t(70430),o=t(77880),s=t(4402),l=t(58419),d=t(62345),f=t.n(d),h=t(91121);s.GlobalWorkerOptions.workerSrc=f();var g=l.ZP.input(i||(i=(0,c.Z)([""]))),p=l.ZP.canvas(r||(r=(0,c.Z)(["\n  border: 1px solid var(--color-border-default);\n"])));function v(){var e=(0,u.useRef)(null),n=(0,u.useState)("png"),t=(0,a.Z)(n,2),i=t[0],r=(t[1],(0,u.useState)(!1)),c=(0,a.Z)(r,2),l=c[0],d=c[1],f=(0,u.useState)(),v=(0,a.Z)(f,2),x=v[0],w=v[1],m=(0,u.useState)(),j=(0,a.Z)(m,2),k=j[0],P=j[1],S=(0,u.useState)(1),Z=(0,a.Z)(S,2),b=Z[0],C=Z[1],R=(0,u.useState)(),y=(0,a.Z)(R,2),z=y[0],D=y[1],E=(0,u.useState)(),F=(0,a.Z)(E,2),L=F[0],A=F[1];function K(n){null==x||x.getPage(b).then((function(t){var i=t.getViewport({scale:1.5});e.current.height=i.height,e.current.width=i.width,e.current.style.width=i.width+"px",e.current.style.height=i.height+"px";var r={canvasContext:e.current.getContext("2d"),viewport:i};t.render(r).promise.then(n)})),D(b+" / "+x.numPages)}(0,u.useEffect)((function(){l?K((function(){b>=x.numPages?d(!1):(U(),C(b+1),d(!0))})):x&&b&&K()}),[x,b,l]);function U(){var n=document.createElement("a"),t=new MouseEvent("click");n.download=k+"-"+b+"."+i,n.href=e.current.toDataURL("png"===i?"image/png":"image/jpeg"),n.dispatchEvent(t)}return(0,h.jsx)(o.im,{children:(0,h.jsx)(o.Rh,{title:"Selected PDF File",overflow:"initial",children:(0,h.jsxs)(o.Ki,{children:[(0,h.jsx)(g,{type:"file",accept:"application/pdf",onChange:function(e){if(e.target.files){var n=e.target.files[0];A(!0),D(""),P(n.name);var t=new FileReader;t.onload=function(e){var n,t;return t=null==(n=e.target)?void 0:n.result,void s.getDocument(t).promise.then((function(e){A(!1),w(e),C(1)}),(function(e){alert(e)}))},t.readAsDataURL(n)}}}),z&&(0,h.jsxs)(o.Ki,{direction:"row",children:[(0,h.jsx)(o.zx,{onClick:function(){b<=1||C(b-1)},disabled:1===b,children:"Previous page"}),(0,h.jsx)(o.zx,{onClick:function(){b>=x.numPages||C(b+1)},disabled:!x||b>=x.numPages,children:"Next page"}),(0,h.jsx)(o.zx,{onClick:function(){b>x.numPages?alert("All saved successfully"):U()},children:"Save this page"}),(0,h.jsx)(o.zx,{onClick:function(){C(1),d(!0)},children:"Save all"})]}),z&&(0,h.jsxs)("div",{children:[k,", Page: ",z]}),!0===L&&(0,h.jsx)("div",{children:"Loading..."}),!1===L&&(0,h.jsx)(p,{ref:e})]})})})}},86788:function(){},2754:function(){},56391:function(){},5001:function(){},35496:function(){},51566:function(){}}]);
//# sourceMappingURL=6421.3b31d5a6.chunk.js.map