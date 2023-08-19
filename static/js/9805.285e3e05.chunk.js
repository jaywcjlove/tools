"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9805],{39805:function(e,n,r){r.r(n),r.d(n,{default:function(){return P}});var t=r(11026),O=r(88226),s=r(19696),a=r(59326),c=r(57724),i=r.n(c),o=r(44124),u=r.n(o),l='{"name": "@wcj/tools-react-components", "version": "1.0.1", "main": "./cjs/index.js", "module": "./esm/index.js", "scripts": {"build": "tsbb build", "watch": "tsbb watch src/*.tsx --use-babel --bail"}, "keywords": [], "files": ["cjs", "esm", "src"], "author": "Kenny Wong <wowohoo@qq.com>", "license": "MIT", "dependencies": {"@uiw/react-codemirror": "^4.7.0", "@uiw/copy-to-clipboard": "^1.0.12", "styled-components": "^5.3.5"}, "devDependencies": {"@types/styled-components": "^5.1.25"}, "peerDependencies": {"react": ">=16.14.0", "react-dom": ">=16.14.0"} }',p=r(38612);function P(){var e=(0,O.useRef)(null),n=(0,O.useState)(""),r=(0,t.Z)(n,2),c=r[0],o=r[1],P=(0,O.useState)(""),Q=(0,t.Z)(P,2),d=Q[0],h=Q[1],f=(0,O.useState)(2),m=(0,t.Z)(f,2),g=m[0],b=m[1];return(0,p.jsxs)(s.im,{children:[(0,p.jsx)(s.Rh,{title:"Input JSON",extra:(0,p.jsxs)(O.Fragment,{children:[c&&(0,p.jsx)(s.zx,{onClick:function(){return function(){try{h(""),o(i().format(c,{parser:"json",tabWidth:g,printWidth:30,plugins:[u()]}))}catch(d){d instanceof Error&&h(d.message)}}()},children:"Format"}),c&&(0,p.jsx)(s.zx,{onClick:function(){return function(){try{h(""),o(JSON.stringify(JSON.parse(c)))}catch(d){d instanceof Error&&h(d.message)}}()},children:"Minify"}),c&&(0,p.jsxs)("select",{onChange:function(e){return b(Number(e.target.value))},children:[(0,p.jsx)("option",{value:2,children:"2 Tab Space"}),(0,p.jsx)("option",{value:3,children:"3 Tab Space"}),(0,p.jsx)("option",{value:4,children:"4 Tab Space"}),(0,p.jsx)("option",{value:5,children:"5 Tab Space"})]}),c&&(0,p.jsx)(s.qi,{value:c}),l&&(0,p.jsx)(s.zx,{onClick:function(){var n;null==(n=e.current)||null==(n=n.view)||n.focus(),o(l)},children:"Sample"})]}),children:(0,p.jsx)(s.pq,{value:c,ref:e,height:"calc(100vh - 87px)",extensions:[(0,a.json)()],onChange:function(e){o(e)}})}),d&&(0,p.jsx)(s.YU,{children:d})]})}},59326:function(e,n,r){r.r(n),r.d(n,{json:function(){return u},jsonLanguage:function(){return o},jsonParseLinter:function(){return i}});var t=r(6468),O=r(91137),s=(0,O.Gv)({String:O.pJ.string,Number:O.pJ.number,"True False":O.pJ.bool,PropertyName:O.pJ.propertyName,Null:O.pJ.null,",":O.pJ.separator,"[ ]":O.pJ.squareBracket,"{ }":O.pJ.brace}),a=t.WQ.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"\u26a0 JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[s],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),c=r(80417),i=function(){return function(e){try{JSON.parse(e.state.doc.toString())}catch(r){if(!(r instanceof SyntaxError))throw r;var n=function(e,n){var r;return(r=e.message.match(/at position (\d+)/))?Math.min(+r[1],n.length):(r=e.message.match(/at line (\d+) column (\d+)/))?Math.min(n.line(+r[1]).from+ +r[2]-1,n.length):0}(r,e.state.doc);return[{from:n,message:r.message,severity:"error",to:n}]}return[]}};var o=c.qp.define({name:"json",parser:a.configure({props:[c.uj.add({Object:(0,c.tC)({except:/^\s*\}/}),Array:(0,c.tC)({except:/^\s*\]/})}),c.x0.add({"Object Array":c.Dv})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function u(){return new c.ri(o)}}}]);
//# sourceMappingURL=9805.285e3e05.chunk.js.map