"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8490],{68490:function(e,s,n){n.r(s),n.d(s,{default:function(){return C}});var r,c=n(11026),o=n(25773),t=n(30808),i=n(36732),a=n(88226),p=n(19696),l=n(60436),h=n(68878),d=n(29336),u=n(19648),m=n(57724),x=n.n(m),f=n(44124),g=n.n(f),j='function hello(who = "world") { console.log(`Hello, ${who}!`) }',k='function hello(who = "world") {\n  console.log(`Hello, ${who}!`)\n\n  return `Hello, ${who}!`\n}',v=n(38612),b=["children"],Z=d.ZP.span(r||(r=(0,i.Z)(["\n  color: var(--color-fg-subtle);\n"]))),_={mangle:!0,toplevel:!1,ie8:!1,keep_fnames:!1,parse:{bare_returns:!1,html5_comments:!0,shebang:!0},compress:{arguments:!0,assignments:!0,booleans:!0,collapse_vars:!0,comparisons:!0,conditionals:!0,dead_code:!0,directives:!0,drop_console:!0,drop_debugger:!0,evaluate:!0,expression:!0,functions:!0,global_defs:{},hoist_exports:!0,hoist_funs:!1,hoist_props:!0,hoist_vars:!1,if_return:!0,imports:!0,inline:!0,join_vars:!0,keep_fargs:"strict",pure_getters:"strict",keep_fnames:!1,keep_infinity:!1,loops:!0,merge_vars:!0,negate_iife:!0,objects:!0,passes:1,properties:!0,pure_funcs:null,reduce_funcs:!0,reduce_vars:!0,sequences:!0,side_effects:!0,strings:!0,switches:!0,templates:!0,unsafe:!1,toplevel:!1,top_retain:null,typeofs:!0,unsafe_comps:!1,unsafe_Function:!1,unsafe_math:!1,unsafe_proto:!1,unsafe_regexp:!1,unsafe_undefined:!1,unused:!0,varify:!0,webkit:!1}},y=function(e){var s=e.children,n=(0,t.Z)(e,b);return(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",(0,o.Z)({type:"checkbox"},n)),s]})})};function C(){var e,s,n,r=(0,h.$G)(["js-beautifier","common"]).t,t=(0,a.useRef)(null),i=(0,a.useState)("minify"),d=(0,c.Z)(i,2),m=d[0],f=d[1],b=(0,a.useState)(_),C=(0,c.Z)(b,2),w=C[0],S=C[1],z=(0,a.useState)(""),F=(0,c.Z)(z,2),P=F[0],R=F[1],E=(0,a.useState)(""),A=(0,c.Z)(E,2),q=A[0],I=A[1],T=(0,a.useState)(2),H=(0,c.Z)(T,2),N=H[0],O=H[1];return(0,v.jsxs)(p.im,{children:[(0,v.jsx)(p.Rh,{title:"JS Beautifier/Uglify",extra:(0,v.jsxs)(a.Fragment,{children:["formatter"===m&&P&&(0,v.jsx)(p.zx,{onClick:function(){return function(){try{I(""),R(x().format(P,{parser:"babel-ts",tabWidth:N,printWidth:120,plugins:[g()]}))}catch(q){q instanceof Error&&I(q.message)}}()},children:r("Formatter",{ns:"common"})}),"minify"===m&&P&&(0,v.jsx)(p.zx,{onClick:function(){return function(){try{I("");var e=(0,u.minify)(P,w);if(e.error)throw new Error(e.error.message);R(e.code)}catch(q){q instanceof Error&&I(q.message)}}()},children:r("Minify",{ns:"common"})}),P&&(0,v.jsxs)("select",{value:m,onChange:function(e){return f(e.target.value)},children:[(0,v.jsx)("option",{value:"formatter",children:r("Formatter",{ns:"common"})}),(0,v.jsx)("option",{value:"minify",children:r("Minify",{ns:"common"})})]}),P&&"formatter"===m&&(0,v.jsxs)("select",{onChange:function(e){return O(Number(e.target.value))},children:[(0,v.jsx)("option",{value:2,children:"2 Tab Space"}),(0,v.jsx)("option",{value:3,children:"3 Tab Space"}),(0,v.jsx)("option",{value:4,children:"4 Tab Space"}),(0,v.jsx)("option",{value:5,children:"5 Tab Space"})]}),P&&(0,v.jsx)(p.qi,{value:P}),(0,v.jsx)(p.zx,{onClick:function(){var e;null==(e=t.current)||null==(e=e.view)||e.focus(),"formatter"===m&&R(j),"minify"===m&&R(k)},children:r("Sample",{ns:"common"}).toString()})]}),children:(0,v.jsx)(p.pq,{value:P,ref:t,height:"calc(100vh - 87px)",extensions:[(0,l.javascript)()],onChange:function(e){R(e)}})}),"minify"===m&&P&&(0,v.jsx)(p.Rh,{title:r("Options",{ns:"common"}).toString(),style:{maxWidth:420},extra:(0,v.jsxs)(a.Fragment,{children:[(0,v.jsx)(p.zx,{onClick:function(){return S(_)},children:"Reset"}),(0,v.jsx)(p.zx,{onClick:function(){return S({})},children:"None"})]}),children:(0,v.jsx)(p.AC,{codeProps:{style:{height:"calc(100vh - 87px)",overflow:"auto",margin:0}},children:(0,v.jsxs)(p.Ki,{children:[(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!w.mangle,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{mangle:s.checked}))}}),r("mangle").toString()," ",(0,v.jsx)(Z,{children:r("Pass `false` to skip mangling names").toString()})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!w.toplevel,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{toplevel:s.checked}))}}),r("toplevel").toString()," ",(0,v.jsx)(Z,{children:r("Set to `true` if you wish to enable top level variable and function name mangling and to drop unused variables and functions.").toString()})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!w.ie8,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{ie8:s.checked}))}}),r("ie8").toString()," ",(0,v.jsx)(Z,{children:r("Set to true to support IE8").toString()})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!w.keep_fnames,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{keep_fnames:s.checked}))}}),r("keep_fnames").toString()," ",(0,v.jsx)(Z,{children:r("Pass true to prevent discarding or mangling of function names. Useful for code relying on Function.prototype.name.").toString()})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!(null==(e=w.parse)||!e.bare_returns),onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{parse:(0,o.Z)({},w.parse,{bare_returns:s.checked})}))}}),r("parse.bare_returns").toString()," ",(0,v.jsx)(Z,{children:r("Support top level `return` statements").toString()})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!(null==(s=w.parse)||!s.html5_comments),onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{parse:(0,o.Z)({},w.parse,{html5_comments:s.checked})}))}}),r("parse.html5_comments").toString()]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!(null==(n=w.parse)||!n.shebang),onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{parse:(0,o.Z)({},w.parse,{shebang:s.checked})}))}}),r("parse.shebang").toString()," ",(0,v.jsx)(Z,{children:r("Support `#!command` as the first line").toString()})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).arguments,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{arguments:s.checked})}))}}),r("compress.arguments").toString()," ",(0,v.jsx)(Z,{children:r("Replace `arguments[index]` with function parameter name whenever possible.").toString()})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).assignments,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{assignments:s.checked})}))}}),r("compress.assignments").toString()," ",(0,v.jsx)(Z,{children:r("Apply optimizations to assignment expressions").toString()})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).booleans,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{booleans:s.checked})}))}}),r("compress.booleans").toString()," ",(0,v.jsx)(Z,{children:r("Various optimizations for boolean context, for example `!!a ? b : c \u2192 a ? b : c`").toString()})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).collapse_vars,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{collapse_vars:s.checked})}))}}),r("compress.collapse_vars")," ",(0,v.jsx)(Z,{children:r("Apply certain optimizations to binary nodes, e.g. `!(a <= b) \u2192 a > b,` attempts to negate binary nodes, e.g. `a = !b && !c && !d && !e \u2192 a=!(b||c||d||e)` etc")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).conditionals,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{conditionals:s.checked})}))}}),r("compress.conditionals")," ",(0,v.jsx)(Z,{children:r("Apply optimizations for `if-s` and conditional expressions.")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).dead_code,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{dead_code:s.checked})}))}}),r("compress.dead_code")," ",(0,v.jsx)(Z,{children:r("Remove unreachable code")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).directives,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{directives:s.checked})}))}}),r("compress.directives")," ",(0,v.jsx)(Z,{children:r("remove redundant or non-standard directives")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).drop_console,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{drop_console:s.checked})}))}}),r("compress.drop_console")," ",(0,v.jsx)(Z,{children:r("Pass `true` to discard calls to console.* functions.")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).drop_debugger,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{drop_debugger:s.checked})}))}}),r("compress.drop_debugger")," ",(0,v.jsx)(Z,{children:r("Remove `debugger;` statements")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).evaluate,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{evaluate:s.checked})}))}}),r("compress.evaluate")," ",(0,v.jsx)(Z,{children:r("Attempt to evaluate constant expressions")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).expression,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{expression:s.checked})}))}}),r("compress.expression")," ",(0,v.jsx)(Z,{children:r("Pass `true` to preserve completion values from terminal statements without `return`, e.g. in bookmarklets.")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).functions,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{functions:s.checked})}))}}),r("compress.functions")," ",(0,v.jsx)(Z,{children:r("convert declarations from varto function whenever possible")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).hoist_exports,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{hoist_exports:s.checked})}))}}),r("compress.hoist_exports")," ",(0,v.jsx)(Z,{children:r("hoist `export` statements to facilitate various `compress` and `mangle` optimizations.")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).hoist_funs,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{hoist_funs:s.checked})}))}}),r("compress.hoist_funs")]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).hoist_props,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{hoist_props:s.checked})}))}}),r("compress.hoist_props")," ",(0,v.jsx)(Z,{children:r("Hoist properties from constant object and array literals into regular variables subject to a set of constraints.")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).hoist_vars,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{hoist_vars:s.checked})}))}}),r("compress.hoist_vars")," ",(0,v.jsx)(Z,{children:r("Hoist var declarations (this is `false` by default because it seems to increase the size of the output in general)")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).if_return,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{if_return:s.checked})}))}}),r("compress.if_return")," ",(0,v.jsx)(Z,{children:r("Optimizations for if/return and if/continue")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).imports,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{imports:s.checked})}))}}),r("compress.imports")," ",(0,v.jsx)(Z,{children:r("drop unreferenced import symbols when used with `unused`")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).inline,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{inline:s.checked})}))}}),r("compress.inline")," ",(0,v.jsx)(Z,{children:r("Inline calls to function with simple/return statement")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).join_vars,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{join_vars:s.checked})}))}}),r("compress.join_vars")," ",(0,v.jsx)(Z,{children:r("join consecutive `var` statements")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).keep_fnames,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{keep_fnames:s.checked})}))}}),r("compress.keep_fnames")," ",(0,v.jsx)(Z,{children:r("Pass true to prevent the compressor from discarding function names.")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).keep_fnames,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{keep_fnames:s.checked})}))}}),r("compress.keep_fnames")," ",(0,v.jsx)(Z,{children:r("Pass true to prevent Infinity from being compressed into `1/0`, which may cause performance issues on `Chrome`")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).loops,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{loops:s.checked})}))}}),r("compress.loops")," ",(0,v.jsx)(Z,{children:r("Optimizations for `do`, `while` and `for` loops when we can statically determine the condition.")})]})}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("input",{type:"checkbox",checked:!!(w.compress||{}).merge_vars,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{merge_vars:s.checked})}))}}),r("compress.merge_vars")," ",(0,v.jsx)(Z,{children:r("combine and reuse variables.")})]})}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).negate_iife,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{negate_iife:s.checked})}))},children:[r("compress.negate_iife")," ",(0,v.jsx)(Z,{children:r("negate `Immediately-Called Function Expressions` where the return value is discarded, to avoid the parens that the code generator would insert.")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).objects,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{objects:s.checked})}))},children:[r("compress.objects")," ",(0,v.jsx)(Z,{children:r("compact duplicate keys in object literals")})]}),(0,v.jsx)("label",{children:(0,v.jsxs)("span",{children:[r("compress.passes")," ",(0,v.jsx)("input",{type:"number",value:(w.compress||{}).passes||1,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,s.value?{compress:(0,o.Z)({},w.compress,{passes:Number(s.value)})}:{}))}}),(0,v.jsx)(Z,{children:r("The maximum number of times to run compress.")})]})}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).properties,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{properties:s.checked})}))},children:[r("compress.properties")," ",(0,v.jsx)(Z,{children:r('Rewrite property access using the dot notation, for example `foo["bar"]` to `foo.bar`')})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).reduce_funcs,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{reduce_funcs:s.checked})}))},children:[r("compress.reduce_funcs")," ",(0,v.jsx)(Z,{children:r("Allows single-use functions to be inlined as function expressions when permissible allowing further optimization.")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).reduce_vars,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{reduce_vars:s.checked})}))},children:[r("compress.reduce_vars")," ",(0,v.jsx)(Z,{children:r("Improve optimization on variables assigned with and used as constant values.")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).sequences,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{sequences:s.checked})}))},children:[r("compress.sequences")," ",(0,v.jsx)(Z,{children:r("join consecutive simple statements using the comma operator.")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).side_effects,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{side_effects:s.checked})}))},children:[r("compress.side_effects")," ",(0,v.jsx)(Z,{children:r('Pass false to disable potentially dropping functions marked as "pure".')})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).strings,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{strings:s.checked})}))},children:[r("compress.strings")," ",(0,v.jsx)(Z,{children:r("compact string concatenations")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).switches,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{switches:s.checked})}))},children:[r("compress.switches")," ",(0,v.jsx)(Z,{children:r("De-duplicate and remove unreachable `switch` branches.")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).templates,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{templates:s.checked})}))},children:[r("compress.templates")," ",(0,v.jsx)(Z,{children:r('Compact template literals by embedding expressions and/or converting to string literals, e.g. `foo ${42}` \u2192 "foo 42"')})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).unsafe,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{unsafe:s.checked})}))},children:[r("compress.unsafe")," ",(0,v.jsx)(Z,{children:r('apply "unsafe" transformations')})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).toplevel,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{toplevel:s.checked})}))},children:[r("compress.toplevel")," ",(0,v.jsx)(Z,{children:r('Drop unreferenced functions ("funcs") and/or variables ("vars") in the top level scope (false by default, true to drop both unreferenced functions and variables)')})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).top_retain,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{top_retain:s.checked})}))},children:[r("compress.top_retain")," ",(0,v.jsx)(Z,{children:r("Prevent specific toplevel functions and variables from unused removal (can be array, comma-separated, RegExp or function. Implies toplevel)")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).typeofs,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{typeofs:s.checked})}))},children:[r("compress.typeofs")," ",(0,v.jsx)(Z,{children:r('Transforms typeof foo == "undefined" into foo === void 0.')})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).unsafe_comps,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{unsafe_comps:s.checked})}))},children:[r("compress.unsafe_comps")," ",(0,v.jsx)(Z,{children:r("Compress expressions like a `<= b` assuming none of the operands can be (coerced to) `NaN`.")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).unsafe_Function,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{unsafe_Function:s.checked})}))},children:[r("compress.unsafe_Function")," ",(0,v.jsx)(Z,{children:r("Compress and mangle `Function(args, code)` when both args and code are string literals.")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).unsafe_math,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{unsafe_math:s.checked})}))},children:[r("compress.unsafe_math")," ",(0,v.jsx)(Z,{children:r("Optimize numerical expressions like `2 * x * 3` into `6 * x`, which may give imprecise floating point results.")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).unsafe_proto,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{unsafe_proto:s.checked})}))},children:[r("compress.unsafe_proto")," ",(0,v.jsx)(Z,{children:r("Optimize expressions like `Array.prototype.slice.call(a)` into `[].slice.call(a)`")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).unsafe_regexp,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{unsafe_regexp:s.checked})}))},children:[r("compress.unsafe_regexp")," ",(0,v.jsx)(Z,{children:r("Enable substitutions of variables with `RegExp` values the same way as if they are constants.")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).unsafe_undefined,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{unsafe_undefined:s.checked})}))},children:[r("compress.unsafe_undefined")," ",(0,v.jsx)(Z,{children:r("substitute void 0 if there is a variable named undefined in scope")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).unused,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{unused:s.checked})}))},children:[r("compress.unused")," ",(0,v.jsx)(Z,{children:r("drop unreferenced functions and variables")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).varify,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{varify:s.checked})}))},children:[r("compress.varify")," ",(0,v.jsx)(Z,{children:r("convert block-scoped declaractions into `var` whenever safe to do so")})]}),(0,v.jsxs)(y,{checked:!!(w.compress||{}).webkit,onChange:function(e){var s=e.target;return S((0,o.Z)({},w,{compress:(0,o.Z)({},w.compress,{webkit:s.checked})}))},children:[r("compress.webkit")," ",(0,v.jsx)(Z,{children:r("Support non-standard Safari/Webkit.")})]})]})})}),q&&(0,v.jsx)(p.YU,{children:q})]})}}}]);
//# sourceMappingURL=8490.894603b6.chunk.js.map