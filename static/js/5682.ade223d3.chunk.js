"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5682],{5682:function(e,t,a){a.r(t),a.d(t,{autoCloseTags:function(){return le},html:function(){return ne},htmlCompletionSource:function(){return te},htmlCompletionSourceWith:function(){return ae},htmlLanguage:function(){return re}});var r=a(60726),n=a(91976),l=a(22951),o=a(17772),s=a(42696),i=a(44652),u={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},O={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},c={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}};function p(e){return 9==e||10==e||13==e||32==e}var d=null,f=null,g=0;function m(e,t){var a=e.pos+t;if(g==a&&f==e)return d;for(var r=e.peek(t);p(r);)r=e.peek(++t);for(var n,l="";45==(n=r)||46==n||58==n||n>=65&&n<=90||95==n||n>=97&&n<=122||n>=161;)l+=String.fromCharCode(r),r=e.peek(++t);return f=e,g=a,d=l?l.toLowerCase():r==k||r==b?void 0:null}var k=63,b=33;function h(e,t){this.name=e,this.parent=t,this.hash=t?t.hash:0;for(var a=0;a<e.length;a++)this.hash+=(this.hash<<4)+e.charCodeAt(a)+(e.charCodeAt(a)<<8)}var v=[4,8,5,6,7],x=new o.IK({start:null,shift:function(e,t,a,r){return v.indexOf(t)>-1?new h(m(r,1)||"",e):e},reduce:function(e,t){return 18==t&&e?e.parent:e},reuse:function(e,t,a,r){var n=t.type.id;return 4==n||35==n?new h(m(r,1)||"",e):e},hash:function(e){return e?e.hash:0},strict:!1}),$=new o.Jq((function(e,t){if(60==e.next){e.advance();var a=47==e.next;a&&e.advance();var r=m(e,0);if(void 0!==r){if(!r)return e.acceptToken(a?12:4);var n=t.context?t.context.name:null;if(a){if(r==n)return e.acceptToken(9);if(n&&O[n])return e.acceptToken(56,-2);if(t.dialectEnabled(0))return e.acceptToken(10);for(var l=t.context;l;l=l.parent)if(l.name==r)return;e.acceptToken(11)}else{if("script"==r)return e.acceptToken(5);if("style"==r)return e.acceptToken(6);if("textarea"==r)return e.acceptToken(7);if(u.hasOwnProperty(r))return e.acceptToken(8);n&&c[n]&&c[n][r]?e.acceptToken(56,-1):e.acceptToken(4)}}}else e.next<0&&t.context&&e.acceptToken(56)}),{contextual:!0}),R=new o.Jq((function(e){for(var t=0,a=0;;a++){if(e.next<0){a&&e.acceptToken(57);break}if(45==e.next)t++;else{if(62==e.next&&t>=2){a>3&&e.acceptToken(57,-2);break}t=0}e.advance()}}));function w(e,t,a){var r=2+e.length;return new o.Jq((function(n){for(var l=0,o=0,s=0;;s++){if(n.next<0){s&&n.acceptToken(t);break}if(0==l&&60==n.next||1==l&&47==n.next||l>=2&&l<r&&n.next==e.charCodeAt(l-2))l++,o++;else if(2!=l&&l!=r||!p(n.next)){if(l==r&&62==n.next){s>o?n.acceptToken(t,-o):n.acceptToken(a,-(o-2));break}if((10==n.next||13==n.next)&&s){n.acceptToken(t,1);break}l=o=0}else o++;n.advance()}}))}var y=w("script",53,1),T=w("style",54,2),P=w("textarea",55,3),q=(0,s.Gv)({"Text RawText":s.pJ.content,"StartTag StartCloseTag SelfCloserEndTag EndTag SelfCloseEndTag":s.pJ.angleBracket,TagName:s.pJ.tagName,"MismatchedCloseTag/TagName":[s.pJ.tagName,s.pJ.invalid],AttributeName:s.pJ.attributeName,"AttributeValue UnquotedAttributeValue":s.pJ.attributeValue,Is:s.pJ.definitionOperator,"EntityReference CharacterReference":s.pJ.character,Comment:s.pJ.blockComment,ProcessingInst:s.pJ.processingInstruction,DoctypeDecl:s.pJ.documentMeta}),Q=o.WQ.deserialize({version:14,states:",xOVOxOOO!WQ!bO'#CoO!]Q!bO'#CyO!bQ!bO'#C|O!gQ!bO'#DPO!lQ!bO'#DRO!qOXO'#CnO!|OYO'#CnO#XO[O'#CnO$eOxO'#CnOOOW'#Cn'#CnO$lO!rO'#DSO$tQ!bO'#DUO$yQ!bO'#DVOOOW'#Dj'#DjOOOW'#DX'#DXQVOxOOO%OQ#tO,59ZO%WQ#tO,59eO%`Q#tO,59hO%hQ#tO,59kO%pQ#tO,59mOOOX'#D]'#D]O%xOXO'#CwO&TOXO,59YOOOY'#D^'#D^O&]OYO'#CzO&hOYO,59YOOO['#D_'#D_O&pO[O'#C}O&{O[O,59YOOOW'#D`'#D`O'TOxO,59YO'[Q!bO'#DQOOOW,59Y,59YOOO`'#Da'#DaO'aO!rO,59nOOOW,59n,59nO'iQ!bO,59pO'nQ!bO,59qOOOW-E7V-E7VO'sQ#tO'#CqOOQO'#DY'#DYO(OQ#tO1G.uOOOX1G.u1G.uO(WQ#tO1G/POOOY1G/P1G/PO(`Q#tO1G/SOOO[1G/S1G/SO(hQ#tO1G/VOOOW1G/V1G/VO(pQ#tO1G/XOOOW1G/X1G/XOOOX-E7Z-E7ZO(xQ!bO'#CxOOOW1G.t1G.tOOOY-E7[-E7[O(}Q!bO'#C{OOO[-E7]-E7]O)SQ!bO'#DOOOOW-E7^-E7^O)XQ!bO,59lOOO`-E7_-E7_OOOW1G/Y1G/YOOOW1G/[1G/[OOOW1G/]1G/]O)^Q&jO,59]OOQO-E7W-E7WOOOX7+$a7+$aOOOY7+$k7+$kOOO[7+$n7+$nOOOW7+$q7+$qOOOW7+$s7+$sO)iQ!bO,59dO)nQ!bO,59gO)sQ!bO,59jOOOW1G/W1G/WO)xO,UO'#CtO*ZO7[O'#CtOOQO1G.w1G.wOOOW1G/O1G/OOOOW1G/R1G/ROOOW1G/U1G/UOOOO'#DZ'#DZO*lO,UO,59`OOQO,59`,59`OOOO'#D['#D[O*}O7[O,59`OOOO-E7X-E7XOOQO1G.z1G.zOOOO-E7Y-E7Y",stateData:"+h~O!]OS~OSSOTPOUQOVROWTOY]OZ[O[^O^^O_^O`^Oa^Ow^Oz_O!cZO~OdaO~OdbO~OdcO~OddO~OdeO~O!VfOPkP!YkP~O!WiOQnP!YnP~O!XlORqP!YqP~OSSOTPOUQOVROWTOXqOY]OZ[O[^O^^O_^O`^Oa^Ow^O!cZO~O!YrO~P#dO!ZsO!duO~OdvO~OdwO~OfyOj|O~OfyOj!OO~OfyOj!QO~OfyOj!SO~OfyOj!UO~O!VfOPkX!YkX~OP!WO!Y!XO~O!WiOQnX!YnX~OQ!ZO!Y!XO~O!XlORqX!YqX~OR!]O!Y!XO~O!Y!XO~P#dOd!_O~O!ZsO!d!aO~Oj!bO~Oj!cO~Og!dOfeXjeX~OfyOj!fO~OfyOj!gO~OfyOj!hO~OfyOj!iO~OfyOj!jO~Od!kO~Od!lO~Od!mO~Oj!nO~Oi!qO!_!oO!a!pO~Oj!rO~Oj!sO~Oj!tO~O_!uO`!uOa!uO!_!wO!`!uO~O_!xO`!xOa!xO!a!wO!b!xO~O_!uO`!uOa!uO!_!{O!`!uO~O_!xO`!xOa!xO!a!{O!b!xO~O`_a!cwz!c~",goto:"%o!_PPPPPPPPPPPPPPPPPP!`!fP!lPP!xPP!{#O#R#X#[#_#e#h#k#q#w!`P!`!`P#}$T$k$q$w$}%T%Z%aPPPPPPPP%gX^OX`pXUOX`pezabcde{}!P!R!TR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!TeZ!e{}!P!R!TQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",nodeNames:"\u26a0 StartCloseTag StartCloseTag StartCloseTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",maxTerm:66,context:x,nodeProps:[["closedBy",-11,1,2,3,4,5,6,7,8,9,10,11,"EndTag",-4,19,29,32,35,"CloseTag"],["group",-9,12,15,16,17,18,38,39,40,41,"Entity",14,"Entity TextContent",-3,27,30,33,"TextContent Entity"],["openedBy",26,"StartTag StartCloseTag",-4,28,31,34,36,"OpenTag"]],propSources:[q],skippedNodes:[0],repeatNodeCount:9,tokenData:"!#b!aR!WOX$kXY)sYZ)sZ]$k]^)s^p$kpq)sqr$krs*zsv$kvw+dwx2yx}$k}!O3f!O!P$k!P!Q7_!Q![$k![!]8u!]!^$k!^!_>b!_!`!!p!`!a8T!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U$k4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!Z$vc^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!R&[V^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&Rq&xT^P!bpOv&qwx'Xx!^&q!^!_'g!_~&qP'^R^POv'Xw!^'X!_~'Xp'lQ!bpOv'gx~'ga'yU^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r`(bR!``Or(]sv(]w~(]!Q(rT!``!bpOr(krs'gsv(kwx(]x~(kW)WXiWOX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!a*O^^P!``!bp!]^OX&RXY)sYZ)sZ]&R]^)s^p&Rpq)sqr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!Z+TT!_h^P!bpOv&qwx'Xx!^&q!^!_'g!_~&q!Z+kbiWa!ROX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst/]tw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^)R!^!a.Q!a$f,s$f$g.Q$g~,s!Z,xbiWOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst)Rtw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^.i!^!a.Q!a$f,s$f$g.Q$g~,s!R.TTOp.Qqs.Qt!].Q!]!^.d!^~.Q!R.iO_!R!Z.pXiW_!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z/baiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^)R!^!a1q!a$f0g$f$g1q$g~0g!Z0laiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^2V!^!a1q!a$f0g$f$g1q$g~0g!R1tSOp1qq!]1q!]!^2Q!^~1q!R2VO`!R!Z2^XiW`!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z3SU!ax^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r!]3qe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O5S!O!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!]5_d^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!`&R!`!a6m!a$f$k$f$g&R$g~$k!T6xV^P!``!bp!dQOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!X7hX^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_!`&R!`!a8T!a~&R!X8`VjU^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!a9U!YfSdQ^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O8u!O!P8u!P!Q&R!Q![8u![!]8u!]!^$k!^!_(k!_!a&R!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g$}$k$}%O8u%O%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U8u4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Je$k$Je$Jg8u$Jg$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!a=Pe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g;=`$k;=`<%l8u<%l~$k!R>iW!``!bpOq(kqr?Rrs'gsv(kwx(]x!a(k!a!bKj!b~(k!R?YZ!``!bpOr(krs'gsv(kwx(]x}(k}!O?{!O!f(k!f!gAR!g#W(k#W#XGz#X~(k!R@SV!``!bpOr(krs'gsv(kwx(]x}(k}!O@i!O~(k!R@rT!``!bp!cPOr(krs'gsv(kwx(]x~(k!RAYV!``!bpOr(krs'gsv(kwx(]x!q(k!q!rAo!r~(k!RAvV!``!bpOr(krs'gsv(kwx(]x!e(k!e!fB]!f~(k!RBdV!``!bpOr(krs'gsv(kwx(]x!v(k!v!wBy!w~(k!RCQV!``!bpOr(krs'gsv(kwx(]x!{(k!{!|Cg!|~(k!RCnV!``!bpOr(krs'gsv(kwx(]x!r(k!r!sDT!s~(k!RD[V!``!bpOr(krs'gsv(kwx(]x!g(k!g!hDq!h~(k!RDxW!``!bpOrDqrsEbsvDqvwEvwxFfx!`Dq!`!aGb!a~DqqEgT!bpOvEbvxEvx!`Eb!`!aFX!a~EbPEyRO!`Ev!`!aFS!a~EvPFXOzPqF`Q!bpzPOv'gx~'gaFkV!``OrFfrsEvsvFfvwEvw!`Ff!`!aGQ!a~FfaGXR!``zPOr(]sv(]w~(]!RGkT!``!bpzPOr(krs'gsv(kwx(]x~(k!RHRV!``!bpOr(krs'gsv(kwx(]x#c(k#c#dHh#d~(k!RHoV!``!bpOr(krs'gsv(kwx(]x#V(k#V#WIU#W~(k!RI]V!``!bpOr(krs'gsv(kwx(]x#h(k#h#iIr#i~(k!RIyV!``!bpOr(krs'gsv(kwx(]x#m(k#m#nJ`#n~(k!RJgV!``!bpOr(krs'gsv(kwx(]x#d(k#d#eJ|#e~(k!RKTV!``!bpOr(krs'gsv(kwx(]x#X(k#X#YDq#Y~(k!RKqW!``!bpOrKjrsLZsvKjvwLowxNPx!aKj!a!b! g!b~KjqL`T!bpOvLZvxLox!aLZ!a!bM^!b~LZPLrRO!aLo!a!bL{!b~LoPMORO!`Lo!`!aMX!a~LoPM^OwPqMcT!bpOvLZvxLox!`LZ!`!aMr!a~LZqMyQ!bpwPOv'gx~'gaNUV!``OrNPrsLosvNPvwLow!aNP!a!bNk!b~NPaNpV!``OrNPrsLosvNPvwLow!`NP!`!a! V!a~NPa! ^R!``wPOr(]sv(]w~(]!R! nW!``!bpOrKjrsLZsvKjvwLowxNPx!`Kj!`!a!!W!a~Kj!R!!aT!``!bpwPOr(krs'gsv(kwx(]x~(k!V!!{VgS^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R",tokenizers:[y,T,P,$,R,0,1,2,3,4,5],topRules:{Document:[0,13]},dialects:{noMatch:0},tokenPrec:476});function X(e,t){var a,n=Object.create(null),l=(0,r.Z)(e.firstChild.getChildren("Attribute"));try{for(l.s();!(a=l.n()).done;){var o=a.value,s=o.getChild("AttributeName"),i=o.getChild("AttributeValue")||o.getChild("UnquotedAttributeValue");s&&(n[t.read(s.from,s.to)]=i?"AttributeValue"==i.name?t.read(i.from+1,i.to-1):t.read(i.from,i.to):"")}}catch(u){l.e(u)}finally{l.f()}return n}function C(e,t,a){var n,l,o=(0,r.Z)(a);try{for(o.s();!(l=o.n()).done;){var s=l.value;if(!s.attrs||s.attrs(n||(n=X(e.node.parent,t))))return{parser:s.parser}}}catch(i){o.e(i)}finally{o.f()}return null}function Z(e){var t,a=[],n=[],l=[],o=(0,r.Z)(e);try{for(o.s();!(t=o.n()).done;){var s=t.value,u="script"==s.tag?a:"style"==s.tag?n:"textarea"==s.tag?l:null;if(!u)throw new RangeError("Only script, style, and textarea tags can host nested parsers");u.push(s)}}catch(O){o.e(O)}finally{o.f()}return(0,i.FE)((function(e,t){var r=e.type.id;return 27==r?C(e,t,a):30==r?C(e,t,n):33==r?C(e,t,l):null}))}var S=a(13405),W=a(90929),_=a(81981),E=a(30047),V=a(51558),j=["_blank","_self","_top","_parent"],D=["ascii","utf-8","utf-16","latin1","latin1"],Y=["get","post","put","delete"],G=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],A=["true","false"],I={},N={a:{attrs:{href:null,ping:null,type:null,media:null,target:j,hreflang:null}},abbr:I,address:I,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:I,aside:I,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:I,base:{attrs:{href:null,target:j}},bdi:I,bdo:I,blockquote:{attrs:{cite:null}},body:I,br:I,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:G,formmethod:Y,formnovalidate:["novalidate"],formtarget:j,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:I,center:I,cite:I,code:I,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:I,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:I,div:I,dl:I,dt:I,em:I,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:I,figure:I,footer:I,form:{attrs:{action:null,name:null,"accept-charset":D,autocomplete:["on","off"],enctype:G,method:Y,novalidate:["novalidate"],target:j}},h1:I,h2:I,h3:I,h4:I,h5:I,h6:I,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:I,hgroup:I,hr:I,html:{attrs:{manifest:null}},i:I,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:G,formmethod:Y,formnovalidate:["novalidate"],formtarget:j,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:I,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:I,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:I,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:D,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:I,noscript:I,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:I,param:{attrs:{name:null,value:null}},pre:I,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:I,rt:I,ruby:I,samp:I,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:D}},section:I,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},slot:{attrs:{name:null}},small:I,source:{attrs:{src:null,type:null,media:null}},span:I,strong:I,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:I,summary:I,sup:I,table:I,tbody:I,td:{attrs:{colspan:null,rowspan:null,headers:null}},template:I,textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:I,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:I,time:{attrs:{datetime:null}},title:I,tr:I,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},ul:{children:["li","script","template","ul","ol"]},var:I,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:I},L={accesskey:null,class:null,contenteditable:A,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:A,autocorrect:A,autocapitalize:A,style:null,tabindex:null,title:null,translate:["yes","no"],onclick:null,rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":A,"aria-autocomplete":["inline","list","both","none"],"aria-busy":A,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":A,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":A,"aria-hidden":A,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":A,"aria-multiselectable":A,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":A,"aria-relevant":null,"aria-required":A,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},U=(0,n.Z)((function e(t,a){(0,l.Z)(this,e),this.tags=Object.assign(Object.assign({},N),t),this.globalAttrs=Object.assign(Object.assign({},L),a),this.allTags=Object.keys(this.tags),this.globalAttrNames=Object.keys(this.globalAttrs)}));function z(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.length;if(!t)return"";var r=t.firstChild,n=r&&r.getChild("TagName");return n?e.sliceString(n.from,Math.min(n.to,a)):""}function J(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.parent;a;a=a.parent)if("Element"==a.name){if(!t)return a;t=!1}return null}function F(e,t,a){var r=a.tags[z(e,J(t,!0))];return(null===r||void 0===r?void 0:r.children)||a.allTags}function M(e,t){for(var a=[],r=t;r=J(r);){var n=z(e,r);if(n&&"CloseTag"==r.lastChild.name)break;n&&a.indexOf(n)<0&&("EndTag"==t.name||t.from>=r.firstChild.to)&&a.push(n)}return a}U.default=new U;var K=/^[:\-\.\w\u00b7-\uffff]*$/;function B(e,t,a,r,n){var l=/\s*>/.test(e.sliceDoc(n,n+5))?"":">";return{from:r,to:n,options:F(e.doc,a,t).map((function(e){return{label:e,type:"type"}})).concat(M(e.doc,a).map((function(e,t){return{label:"/"+e,apply:"/"+e+l,type:"type",boost:99-t}}))),validFor:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function H(e,t,a,r){var n=/\s*>/.test(e.sliceDoc(r,r+5))?"":">";return{from:a,to:r,options:M(e.doc,t).map((function(e,t){return{label:e,apply:e+n,type:"type",boost:99-t}})),validFor:K}}function ee(e,t){for(var a,n=t.state,l=t.pos,o=(0,V.qz)(n).resolveInner(l),s=o.resolve(l,-1),i=l;o==s&&(a=s.childBefore(i));){var u=a.lastChild;if(!u||!u.type.isError||u.from<u.to)break;o=s=a,i=u.from}return"TagName"==s.name?s.parent&&/CloseTag$/.test(s.parent.name)?H(n,s,s.from,l):B(n,e,s,s.from,l):"StartTag"==s.name?B(n,e,s,l,l):"StartCloseTag"==s.name||"IncompleteCloseTag"==s.name?H(n,s,l,l):t.explicit&&("OpenTag"==s.name||"SelfClosingTag"==s.name)||"AttributeName"==s.name?function(e,t,a,r,n){var l=J(a),o=l?t.tags[z(e.doc,l)]:null;return{from:r,to:n,options:(o&&o.attrs?Object.keys(o.attrs).concat(t.globalAttrNames):t.globalAttrNames).map((function(e){return{label:e,type:"property"}})),validFor:K}}(n,e,s,"AttributeName"==s.name?s.from:l,l):"Is"==s.name||"AttributeValue"==s.name||"UnquotedAttributeValue"==s.name?function(e,t,a,n,l){var o,s=null===(o=a.parent)||void 0===o?void 0:o.getChild("AttributeName"),i=[],u=void 0;if(s){var O=e.sliceDoc(s.from,s.to),c=t.globalAttrs[O];if(!c){var p=J(a),d=p?t.tags[z(e.doc,p)]:null;c=(null===d||void 0===d?void 0:d.attrs)&&d.attrs[O]}if(c){var f=e.sliceDoc(n,l).toLowerCase(),g='"',m='"';/^['"]/.test(f)?(u='"'==f[0]?/^[^"]*$/:/^[^']*$/,g="",m=e.sliceDoc(l,l+1)==f[0]?"":f[0],f=f.slice(1),n++):u=/^[^\s<>='"]*$/;var k,b=(0,r.Z)(c);try{for(b.s();!(k=b.n()).done;){var h=k.value;i.push({label:h,apply:g+h+m,type:"constant"})}}catch(v){b.e(v)}finally{b.f()}}}return{from:n,to:l,options:i,validFor:u}}(n,e,s,"Is"==s.name?l:s.from,l):!t.explicit||"Element"!=o.name&&"Text"!=o.name&&"Document"!=o.name?null:function(e,t,a,n){var l,o=[],s=0,i=(0,r.Z)(F(e.doc,a,t));try{for(i.s();!(l=i.n()).done;){var u=l.value;o.push({label:"<"+u,type:"type"})}}catch(d){i.e(d)}finally{i.f()}var O,c=(0,r.Z)(M(e.doc,a));try{for(c.s();!(O=c.n()).done;){var p=O.value;o.push({label:"</"+p+">",type:"type",boost:99-s++})}}catch(d){c.e(d)}finally{c.f()}return{from:n,to:n,options:o,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}(n,e,s,l)}function te(e){return ee(U.default,e)}function ae(e){var t=e.extraTags,a=e.extraGlobalAttributes,r=a||t?new U(t,a):U.default;return function(e){return ee(r,e)}}var re=V.qp.define({name:"html",parser:Q.configure({props:[V.uj.add({Element:function(e){var t=/^(\s*)(<\/)?/.exec(e.textAfter);return e.node.to<=e.pos+t[0].length?e.continue():e.lineIndent(e.node.from)+(t[2]?0:e.unit)},"OpenTag CloseTag SelfClosingTag":function(e){return e.column(e.node.from)+e.unit},Document:function(e){if(e.pos+/\s*/.exec(e.textAfter)[0].length<e.node.to)return e.continue();for(var t,a=null,r=e.node;;){var n=r.lastChild;if(!n||"Element"!=n.name||n.to!=r.to)break;a=r=n}return a&&(!(t=a.lastChild)||"CloseTag"!=t.name&&"SelfClosingTag"!=t.name)?e.lineIndent(a.from)+e.unit:null}}),V.x0.add({Element:function(e){var t=e.firstChild,a=e.lastChild;return t&&"OpenTag"==t.name?{from:t.to,to:"CloseTag"==a.name?a.from:e.to}:null}})],wrap:Z([{tag:"script",attrs:function(e){return!e.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type)},parser:W.javascriptLanguage.parser},{tag:"style",attrs:function(e){return(!e.lang||"css"==e.lang)&&(!e.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type))},parser:S.cssLanguage.parser}])}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:"-._"}});function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=re;return!1===e.matchClosingTags&&(t=t.configure({dialect:"noMatch"})),new V.ri(t,[re.data.of({autocomplete:ae(e)}),!1!==e.autoCloseTags?le:[],(0,W.javascript)().support,(0,S.css)().support])}var le=_.tk.inputHandler.of((function(e,t,a,r){if(e.composing||e.state.readOnly||t!=a||">"!=r&&"/"!=r||!re.isActiveAt(e.state,t,-1))return!1;var n=e.state,l=n.changeByRange((function(t){var a,l,o,s,i=t.head,u=(0,V.qz)(n).resolveInner(i,-1);if("TagName"!=u.name&&"StartTag"!=u.name||(u=u.parent),">"==r&&"OpenTag"==u.name){if("CloseTag"!=(null===(l=null===(a=u.parent)||void 0===a?void 0:a.lastChild)||void 0===l?void 0:l.name)&&(s=z(n.doc,u.parent,i))){var O=">"===e.state.doc.sliceString(i,i+1),c="".concat(O?"":">","</").concat(s,">");return{range:E.jT.cursor(i+1),changes:{from:i+(O?1:0),insert:c}}}}else if("/"==r&&"OpenTag"==u.name){var p=u.parent,d=null===p||void 0===p?void 0:p.parent;if(p.from==i-1&&"CloseTag"!=(null===(o=d.lastChild)||void 0===o?void 0:o.name)&&(s=z(n.doc,d,i))){var f=">"===e.state.doc.sliceString(i,i+1),g="/".concat(s).concat(f?"":">"),m=i+g.length+(f?1:0);return{range:E.jT.cursor(m),changes:{from:i,insert:g}}}}return{range:t}}));return!l.changes.empty&&(e.dispatch(l,{userEvent:"input.type",scrollIntoView:!0}),!0)}))}}]);
//# sourceMappingURL=5682.ade223d3.chunk.js.map