"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7438],{37438:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(649),o=n(11092),s=n(11026),i=n(27791),l=n(25773),a=n(30808),u=n(36732),c=n(70430),m=n(27857),p=n(70991),v=n(43858),d=n(22777),h=n(49252);function g(e,t){var n=[];(t.plugins||[]).forEach((function(e){if("cleanupNumericValues"===e){var r=Number(t.floatPrecision);n.push({name:"cleanupNumericValues",params:{floatPrecision:0===r?1:r}})}else n.push(e)}));var r=function(){var e={width:0,height:0},t={type:"visitor",name:"extract-dimensions",fn:function(){return{element:{enter:function(t,n){var r=t.name,o=t.attributes,s=n.type;if("svg"===r&&"root"===s)if(void 0!==o.width&&void 0!==o.height)e.width=Number.parseFloat(o.width),e.height=Number.parseFloat(o.height);else if(void 0!==o.viewBox){var i=o.viewBox.split(/,\s*|\s+/);e.width=Number.parseFloat(i[2]),e.height=Number.parseFloat(i[3])}}}}}};return[e,t]}(),o=(0,s.Z)(r,2),i=o[0],l=o[1],a=(0,h.tL)(e,{multipass:t.multipass,floatPrecision:t.floatPrecision,plugins:[].concat(n,[l]),js2svg:{indent:2,pretty:t.pretty}}),u=a.data,c=a.modernError;return{data:u,dimensions:i,error:c?c.message:""}}var b=function(e,t,n){void 0===t&&(t=3),void 0===n&&(n=!0);var r=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(Math.abs(e)<1)return e+(n?" ":"")+r[0];var o=Math.min(Math.floor(Math.log10(e<0?-e:e)/3),r.length-1);return(e<0?"-":"")+Number(((e<0?-e:e)/Math.pow(1e3,o)).toPrecision(t))+(n?" ":"")+r[o]};function f(e,t){return new Promise((function(n,r){var o=new FileReader;"base64"===t&&o.readAsDataURL(e),"text"===t&&o.readAsText(e),o.onloadend=function(){o.result?n(o.result.toString()):n("")},o.onerror=function(e){r(e)}}))}var x,y,w,k,P,R,S,j,Z=n(91121),C=["children"],E=p.ZP.span(x||(x=(0,u.Z)(["\n  color: var(--color-fg-subtle);\n"]))),B=p.ZP.iframe(y||(y=(0,u.Z)(["\n  border: none;\n  overflow: hidden;\n  pointer-events: none;\n  max-width: 100%;\n"]))),A=p.ZP.input(w||(w=(0,u.Z)(["\n  width: 100%;\n  display: block;\n"]))),M=p.ZP.div(k||(k=(0,u.Z)(["\n  background-color: var(--color-neutral-muted);\n  padding: 10px;\n  margin-bottom: 60px;\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n"]))),D=p.ZP.span(P||(P=(0,u.Z)(["\n  font-weight: bold;\n  ","\n"])),(function(e){return e.num>100||0===e.num?(0,p.iv)(R||(R=(0,u.Z)(["\n        color: red;\n      "]))):e.num<100?(0,p.iv)(S||(S=(0,u.Z)(["\n        color: green;\n      "]))):(0,p.iv)(j||(j=(0,u.Z)([""])))})),T={multipass:!0,pretty:!0,floatPrecision:8,plugins:["mergeStyles","cleanupAttrs","inlineStyles","minifyStyles","cleanupIDs","removeUselessDefs","cleanupNumericValues","convertColors","removeUnknownsAndDefaults","removeNonInheritableGroupAttrs","removeUselessStrokeAndFill","removeViewBox","cleanupEnableBackground","removeHiddenElems","removeEmptyText","convertShapeToPath","moveElemsAttrsToGroup","moveGroupAttrsToElems","collapseGroups","convertPathData","convertEllipseToCircle","convertTransform","removeEmptyAttrs","removeEmptyContainers","mergePaths","removeUnusedNS","sortDefsChildren","removeTitle","removeDesc"]},N=function(e){var t=e.children,n=(0,a.Z)(e,C);return(0,Z.jsx)("label",{children:(0,Z.jsxs)("span",{children:[(0,Z.jsx)("input",(0,l.Z)({type:"checkbox"},n)),t]})})};function G(){var e=(0,v.$)(["svg-optimizer","common"]).t,t=(0,c.useState)(T),n=(0,s.Z)(t,2),a=n[0],u=n[1],p=(0,c.useState)([]),h=(0,s.Z)(p,2),x=h[0],y=h[1],w=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files||[],e.next=3,Promise.all(Array.from(n).map(function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var n,r,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,f(t,"base64");case 3:return n=e.sent,e.next=6,f(t,"text");case 6:return r=e.sent,s=g(r||"",a),e.abrupt("return",{base64:n,raw:r,name:t.name,dimensions:s.dimensions,tiny:s.data});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:r=e.sent,y(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){if(a){var e=[];x.forEach((function(t){var n=g(t.raw||"",a);e.push((0,l.Z)({},t,{dimensions:n.dimensions,tiny:n.data,error:n.error}))})),y(e)}}),[a]);var k=[{plugin:"removeDoctype",label:"Remove doctype",content:e("remove doctype declaration")},{plugin:"removeXMLProcInst",label:"Remove XML ProcInst",content:e("remove XML processing instructions")},{plugin:"removeComments",label:"Remove Comments",content:e("remove comments")},{plugin:"removeMetadata",label:"Remove <metadata>",content:e("remove <metadata>")},{plugin:"removeXMLNS",label:"Remove xmlns",content:e("removes the xmlns attribute (for inline SVG)")},{plugin:"removeEditorsNSData",label:"Remove Editors Data",content:e("remove editors namespaces, elements, and attributes")},{plugin:"cleanupAttrs",label:"Cleanup attribute whitespace",content:e("cleanup attributes from newlines, trailing, and repeating spaces")},{plugin:"mergeStyles",label:"Merge Styles",content:e("merge multiple style elements into one")},{plugin:"inlineStyles",label:"Inline Styles",content:e("move and merge styles from <style> elements to element style attributes")},{plugin:"minifyStyles",label:"Minify Styles",content:e("minify <style> elements content with CSSO")},{plugin:"convertStyleToAttrs",label:e("Style to attributes"),content:e("convert styles into attributes")},{plugin:"cleanupIDs",label:e("Clean IDs"),content:e("remove unused and minify used IDs")},{plugin:"removeRasterImages",label:e("Remove raster images"),content:e("remove raster images")},{plugin:"removeUselessDefs",label:e("Remove unused defs"),content:e("remove elements of <defs> without id")},{plugin:"cleanupNumericValues",label:e("Round/rewrite numbers"),content:e("round numeric values to the fixed precision, remove default px units")},{plugin:"cleanupListOfValues",label:e("Round/rewrite number lists"),content:e("round numeric values in attributes that take a list of numbers (like viewBox or enable-background)")},{plugin:"convertColors",label:e("Minify colours"),content:e("convert colors (from rgb() to #rrggbb, from #rrggbb to #rgb)")},{plugin:"removeUnknownsAndDefaults",label:e("Remove unknowns & defaults"),content:e("remove unknown elements content and attributes, remove attributes with default values")},{plugin:"removeNonInheritableGroupAttrs",label:e("Remove unneeded group attrs"),content:e('remove non-inheritable group\'s "presentation" attributes')},{plugin:"removeUselessStrokeAndFill",label:e("Remove useless stroke & fill"),content:e("remove useless stroke and fill attributes")},{plugin:"removeViewBox",label:e("Remove viewBox"),content:e("remove viewBox attribute when possible")},{plugin:"cleanupEnableBackground",label:e("Remove/tidy enable-background"),content:e("remove or cleanup enable-background attribute when possible")},{plugin:"removeHiddenElems",label:e("Remove hidden elements"),content:e("remove hidden elements")},{plugin:"removeEmptyText",label:"Remove empty text",content:e("remove empty Text elements")},{plugin:"convertShapeToPath",label:"Shapes to (smaller) paths",content:e("convert some basic shapes to <path>")},{plugin:"moveElemsAttrsToGroup",label:"Move attrs to parent group",content:e("move elements' attributes to their enclosing group")},{plugin:"moveGroupAttrsToElems",label:"Move group attrs to elements",content:e("move some group attributes to the contained elements")},{plugin:"collapseGroups",label:"Collapse useless groups",content:e("collapse useless groups")},{plugin:"convertPathData",label:"Round/rewrite paths",content:e("convert Path data to relative or absolute (whichever is shorter), convert one segment to another, trim useless delimiters, smart rounding, and much more")},{plugin:"convertEllipseToCircle",label:"Convert non-eccentric <ellipse> to <circle>",content:e("convert non-eccentric <ellipse> to <circle>")},{plugin:"convertTransform",label:"Round/rewrite transforms",content:e("collapse multiple transforms into one, convert matrices to the short aliases, and much more")},{plugin:"removeEmptyAttrs",label:"Remove empty attrs",content:e("remove empty attributes")},{plugin:"removeEmptyContainers",label:"Remove empty containers",content:e("remove empty Container elements")},{plugin:"mergePaths",label:"Merge paths",content:e("merge multiple Paths into one")},{plugin:"removeUnusedNS",label:"Remove unused namespaces",content:e("remove unused namespaces declaration")},{plugin:"reusePaths",label:"Replace duplicate elements with links",content:e("Find duplicated elements and replace them with links")},{plugin:"sortAttrs",label:"Sort attrs",content:e("sort element attributes for epic readability")},{plugin:"sortDefsChildren",label:"Sort children of <defs>",content:e("sort children of <defs> in order to improve compression")},{plugin:"removeTitle",label:"Remove <title>",content:e("remove <title>")},{plugin:"removeDesc",label:"Remove <desc>",content:e("remove <desc>")},{plugin:"removeDimensions",label:"Prefer viewBox to width/height",content:e("remove width/height and add viewBox if it's missing (opposite to removeViewBox, disable it first)")},{plugin:"removeStyleElement",label:"Remove style elements",content:e("remove <style> elements")},{plugin:"removeScriptElement",label:"Remove script elements",content:e("remove <script> elements")}];return(0,Z.jsxs)(m.im,{children:[(0,Z.jsx)(m.Rh,{title:e("SVG Optimizer"),extra:(0,Z.jsx)(A,{type:"file",accept:"image/svg+xml",multiple:!0,onChange:w}),children:(0,Z.jsx)(m.AC,{codeProps:{style:{height:"calc(100vh - 87px)",overflow:"auto",margin:0,backgroundSize:"16px 16px",backgroundImage:'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"%3E%3Cpath d="M1 2V0h1v1H0v1z" fill-opacity=".05"/%3E%3C/svg%3E\')'}},children:x&&x.length>0&&x.map((function(e,t){var n=e.raw?(0,d.iv)(e.raw).buffer.byteLength:0,r=e.tiny?(0,d.iv)(e.tiny).buffer.byteLength:0,o=function(e,t){var n=Math.pow(10,t);return Math.floor(Math.round(e*n))/n}(r/n*100,2);return(0,Z.jsxs)("div",{children:[e.tiny&&e.dimensions&&(0,Z.jsx)(B,{sandbox:"allow-scripts",scrolling:"no",src:"data:image/svg+xml,"+encodeURIComponent(e.tiny),width:e.dimensions.width,height:e.dimensions.height}),e.error&&(0,Z.jsx)("div",{style:{color:"red"},children:e.error},t),(0,Z.jsxs)(M,{children:[(0,Z.jsx)("img",{src:e.base64,height:23}),(0,Z.jsxs)("span",{children:[b(n,2,!1)," \u2192 ",b(r,2,!1)]}),(0,Z.jsxs)(D,{num:o,children:[o,"%"]}),(0,Z.jsx)(m.qi,{value:e.tiny||""}),(0,Z.jsxs)("a",{href:"data:image/svg+xml,"+e.tiny,download:e.name,children:["download ",(0,Z.jsx)("b",{children:e.name})]})]})]},t)}))})}),x&&x.length>0&&(0,Z.jsx)(m.Rh,{title:e("Options",{ns:"common"}),style:{maxWidth:420},extra:(0,Z.jsx)(c.Fragment,{children:(0,Z.jsx)(m.zx,{onClick:function(){return u(T)},children:"Reset"})}),children:(0,Z.jsx)(m.AC,{codeProps:{style:{height:"calc(100vh - 87px)",overflow:"auto",margin:0}},children:(0,Z.jsxs)(m.Ki,{children:[(0,Z.jsxs)(N,{checked:!!a.pretty,onChange:function(e){var t=e.target;return u((0,l.Z)({},a,{pretty:t.checked}))},children:["Prettify markup ",(0,Z.jsx)(E,{children:e("Prettify markup")})]}),(0,Z.jsxs)(N,{checked:!!a.multipass,onChange:function(e){var t=e.target;return u((0,l.Z)({},a,{multipass:t.checked}))},children:[e("multipass")," ",(0,Z.jsx)(E,{children:e("Pass over SVGs multiple times to ensure all optimizations are applied")})]}),(0,Z.jsxs)(N,{type:"range",max:"8",min:"0",step:"1",value:a.floatPrecision,onChange:function(e){var t=e.target;return u((0,l.Z)({},a,{floatPrecision:Number(t.value)}))},children:[a.floatPrecision," ",e("Precision")," ",(0,Z.jsx)(E,{children:e("Precision of floating point numbers. Will be passed to each plugin that suppors this param.")})]}),k.map((function(t,n){return(0,Z.jsxs)(N,{checked:(o=t.plugin,s=a.plugins,void 0===s&&(s=[]),s.includes(o)),onChange:function(e){var n=e.target;return u(function(e,t){var n=(0,r.Z)(a.plugins||[]);return t?n.includes(e)||n.push(e):n.splice(n.indexOf(e),1),(0,l.Z)({},a,{plugins:n})}(t.plugin,n.checked))},children:[e(t.label)," ",(0,Z.jsx)(E,{children:e(t.content)})]},n);var o,s}))]})})})]})}}}]);
//# sourceMappingURL=7438.bde4221c.chunk.js.map