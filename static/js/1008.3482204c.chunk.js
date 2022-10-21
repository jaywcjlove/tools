(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1008],{54572:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return P}});var t=r(11026),O=r(70430),s=r(97287),a=r(77851),i=r(50026),o=r.n(i),c=r(94483),u=r.n(c),p='{"name": "@wcj/tools-react-components", "version": "1.0.1", "main": "./cjs/index.js", "module": "./esm/index.js", "scripts": {"build": "tsbb build", "watch": "tsbb watch"}, "keywords": [], "files": ["cjs", "esm", "src"], "author": "Kenny Wong <wowohoo@qq.com>", "license": "MIT", "dependencies": {"@uiw/react-codemirror": "^4.7.0", "@uiw/copy-to-clipboard": "^1.0.12", "styled-components": "^5.3.5"}, "devDependencies": {"@types/styled-components": "^5.1.25"}, "peerDependencies": {"react": ">=16.14.0", "react-dom": ">=16.14.0"} }',l=r(91121);function P(){var e=(0,O.useRef)(null),n=(0,O.useState)(""),r=(0,t.Z)(n,2),i=r[0],c=r[1],P=(0,O.useState)(""),Q=(0,t.Z)(P,2),d=Q[0],h=Q[1],f=(0,O.useState)(2),m=(0,t.Z)(f,2),g=m[0],b=m[1];return(0,l.jsxs)(s.im,{children:[(0,l.jsx)(s.Rh,{title:"Input JSON",extra:(0,l.jsxs)(O.Fragment,{children:[i&&(0,l.jsx)(s.zx,{onClick:function(){return function(){try{h(""),c(o().format(i,{parser:"json",tabWidth:g,printWidth:30,plugins:[u()]}))}catch(d){d instanceof Error&&h(d.message)}}()},children:"Format"}),i&&(0,l.jsx)(s.zx,{onClick:function(){return function(){try{h(""),c(JSON.stringify(JSON.parse(i)))}catch(d){d instanceof Error&&h(d.message)}}()},children:"Minify"}),i&&(0,l.jsxs)("select",{onChange:function(e){return b(Number(e.target.value))},children:[(0,l.jsx)("option",{value:2,children:"2 Tab Space"}),(0,l.jsx)("option",{value:3,children:"3 Tab Space"}),(0,l.jsx)("option",{value:4,children:"4 Tab Space"}),(0,l.jsx)("option",{value:5,children:"5 Tab Space"})]}),i&&(0,l.jsx)(s.qi,{value:i}),(0,l.jsx)(s.zx,{onClick:function(){var n,r;null==(n=e.current)||null==(r=n.view)||r.focus(),c(p)},children:"Sample"})]}),children:(0,l.jsx)(s.pq,{value:i,ref:e,height:"calc(100vh - 87px)",extensions:[(0,a.json)()],onChange:function(e){c(e)}})}),d&&(0,l.jsx)(s.YU,{children:d})]})}},44106:function(){},77851:function(e,n,r){"use strict";r.r(n),r.d(n,{json:function(){return u},jsonLanguage:function(){return c},jsonParseLinter:function(){return o}});var t=r(17772),O=r(42696),s=(0,O.Gv)({String:O.pJ.string,Number:O.pJ.number,"True False":O.pJ.bool,PropertyName:O.pJ.propertyName,Null:O.pJ.null,",":O.pJ.separator,"[ ]":O.pJ.squareBracket,"{ }":O.pJ.brace}),a=t.WQ.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"\u26a0 JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[s],skippedNodes:[0],repeatNodeCount:2,tokenData:"(p~RaXY!WYZ!W]^!Wpq!Wrs!]|}$i}!O$n!Q!R$w!R![&V![!]&h!}#O&m#P#Q&r#Y#Z&w#b#c'f#h#i'}#o#p(f#q#r(k~!]Oc~~!`Upq!]qr!]rs!rs#O!]#O#P!w#P~!]~!wOe~~!zXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#g~#jR!Q![#s!c!i#s#T#Z#s~#vR!Q![$P!c!i$P#T#Z$P~$SR!Q![$]!c!i$]#T#Z$]~$`R!Q![!]!c!i!]#T#Z!]~$nOh~~$qQ!Q!R$w!R![&V~$|RT~!O!P%V!g!h%k#X#Y%k~%YP!Q![%]~%bRT~!Q![%]!g!h%k#X#Y%k~%nR{|%w}!O%w!Q![%}~%zP!Q![%}~&SPT~!Q![%}~&[ST~!O!P%V!Q![&V!g!h%k#X#Y%k~&mOg~~&rO]~~&wO[~~&zP#T#U&}~'QP#`#a'T~'WP#g#h'Z~'^P#X#Y'a~'fOR~~'iP#i#j'l~'oP#`#a'r~'uP#`#a'x~'}OS~~(QP#f#g(T~(WP#i#j(Z~(^P#X#Y(a~(fOQ~~(kOW~~(pOV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),i=r(51558),o=function(){return function(e){try{JSON.parse(e.state.doc.toString())}catch(r){if(!(r instanceof SyntaxError))throw r;var n=function(e,n){var r;return(r=e.message.match(/at position (\d+)/))?Math.min(+r[1],n.length):(r=e.message.match(/at line (\d+) column (\d+)/))?Math.min(n.line(+r[1]).from+ +r[2]-1,n.length):0}(r,e.state.doc);return[{from:n,message:r.message,severity:"error",to:n}]}return[]}};var c=i.qp.define({parser:a.configure({props:[i.uj.add({Object:(0,i.tC)({except:/^\s*\}/}),Array:(0,i.tC)({except:/^\s*\]/})}),i.x0.add({"Object Array":i.Dv})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function u(){return new i.ri(c)}}}]);
//# sourceMappingURL=1008.3482204c.chunk.js.map