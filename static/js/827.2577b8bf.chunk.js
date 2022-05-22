"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[827],{3827:function(e,O,r){r.r(O),r.d(O,{default:function(){return u}});var n,t,s,a=r(1026),o=r(6732),i=r(430),c=r(3397),d=r(991),p=r(7851),P=r(1121),l='{"name": "@wcj/tools-react-components", "version": "1.0.1", "main": "./cjs/index.js", "module": "./esm/index.js", "scripts": {"build": "tsbb build", "watch": "tsbb watch"}, "keywords": [], "files": ["cjs", "esm", "src"], "author": "Kenny Wong <wowohoo@qq.com>", "license": "MIT", "dependencies": {"@uiw/react-codemirror": "^4.7.0", "@uiw/copy-to-clipboard": "^1.0.12", "styled-components": "^5.3.5"}, "devDependencies": {"@types/styled-components": "^5.1.25"}, "peerDependencies": {"react": ">=16.14.0", "react-dom": ">=16.14.0"} }',Q=(0,d.vJ)(n||(n=(0,o.Z)(["\n  [data-color-mode*='dark'], [data-color-mode*='dark'] body {\n    --color-border-text-case: #30363d;\n  }\n  [data-color-mode*='light'], [data-color-mode*='light'] body {\n    --color-border-text-case: #d0d7de;\n  }\n"])));d.ZP.img(t||(t=(0,o.Z)(["\n  max-width: 100%;\n  padding-top: 16px;\n"]))),d.ZP.input(s||(s=(0,o.Z)(["\n  width: 100%;\n  display: block;\n"])));function u(){var e=(0,i.useState)(""),O=(0,a.Z)(e,2),r=O[0],n=O[1],t=(0,i.useState)(""),s=(0,a.Z)(t,2),o=s[0],d=s[1],u=(0,i.useState)(""),h=(0,a.Z)(u,2),b=h[0],k=h[1],m=function(e){if(e)try{n(e);var O=JSON.parse(e);d(JSON.stringify(O,null,3)),k("")}catch(b){var r="Unknown Error";b instanceof Error&&(r=b.message),k(r)}},g=b||o;return(0,P.jsxs)(i.Fragment,{children:[(0,P.jsxs)(c.im,{children:[(0,P.jsx)(Q,{}),(0,P.jsx)(c.Rh,{title:"Input JSON String",extra:(0,P.jsxs)(i.Fragment,{children:[r&&(0,P.jsx)(c.qi,{value:r}),(0,P.jsx)(c.zx,{onClick:function(){n(l),m(l)},children:"Sample"})]}),children:(0,P.jsx)(c.pq,{value:r,height:"calc(100vh - 87px)",spellCheck:!1,extensions:[(0,p.AV)()],onChange:m})}),(0,P.jsx)(c.Rh,{title:"Result",extra:g&&(0,P.jsx)(c.qi,{value:g}),children:(0,P.jsx)(c.pq,{value:o,height:"calc(100vh - 87px)",extensions:[(0,p.AV)()],readOnly:!0})})]}),(0,P.jsx)(c.YU,{children:b})]})}},7851:function(e,O,r){r.d(O,{AV:function(){return c}});var n=r(7772),t=r(2696),s=(0,t.Gv)({String:t.pJ.string,Number:t.pJ.number,"True False":t.pJ.bool,PropertyName:t.pJ.propertyName,Null:t.pJ.null,",":t.pJ.separator,"[ ]":t.pJ.squareBracket,"{ }":t.pJ.brace}),a=n.WQ.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"\u26a0 JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[s],skippedNodes:[0],repeatNodeCount:2,tokenData:"(p~RaXY!WYZ!W]^!Wpq!Wrs!]|}$i}!O$n!Q!R$w!R![&V![!]&h!}#O&m#P#Q&r#Y#Z&w#b#c'f#h#i'}#o#p(f#q#r(k~!]Oc~~!`Upq!]qr!]rs!rs#O!]#O#P!w#P~!]~!wOe~~!zXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#g~#jR!Q![#s!c!i#s#T#Z#s~#vR!Q![$P!c!i$P#T#Z$P~$SR!Q![$]!c!i$]#T#Z$]~$`R!Q![!]!c!i!]#T#Z!]~$nOh~~$qQ!Q!R$w!R![&V~$|RT~!O!P%V!g!h%k#X#Y%k~%YP!Q![%]~%bRT~!Q![%]!g!h%k#X#Y%k~%nR{|%w}!O%w!Q![%}~%zP!Q![%}~&SPT~!Q![%}~&[ST~!O!P%V!Q![&V!g!h%k#X#Y%k~&mOg~~&rO]~~&wO[~~&zP#T#U&}~'QP#`#a'T~'WP#g#h'Z~'^P#X#Y'a~'fOR~~'iP#i#j'l~'oP#`#a'r~'uP#`#a'x~'}OS~~(QP#f#g(T~(WP#i#j(Z~(^P#X#Y(a~(fOQ~~(kOW~~(pOV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),o=r(1558);var i=o.qp.define({parser:a.configure({props:[o.uj.add({Object:(0,o.tC)({except:/^\s*\}/}),Array:(0,o.tC)({except:/^\s*\]/})}),o.x0.add({"Object Array":o.Dv})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function c(){return new o.ri(i)}}}]);
//# sourceMappingURL=827.2577b8bf.chunk.js.map