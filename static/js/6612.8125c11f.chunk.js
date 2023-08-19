(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6612],{16612:function(t,e,r){"use strict";var i=r(20773),n=r(49373),a=r(18563);t.exports={XMLParser:n,XMLValidator:i,XMLBuilder:a}},4824:function(t,e){"use strict";var r=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",i="["+r+"]["+(r+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040")+"]*",n=new RegExp("^"+i+"$");e.isExist=function(t){return"undefined"!==typeof t},e.isEmptyObject=function(t){return 0===Object.keys(t).length},e.merge=function(t,e,r){if(e)for(var i=Object.keys(e),n=i.length,a=0;a<n;a++)t[i[a]]="strict"===r?[e[i[a]]]:e[i[a]]},e.getValue=function(t){return e.isExist(t)?t:""},e.isName=function(t){var e=n.exec(t);return!(null===e||"undefined"===typeof e)},e.getAllMatches=function(t,e){for(var r=[],i=e.exec(t);i;){var n=[];n.startIndex=e.lastIndex-i[0].length;for(var a=i.length,s=0;s<a;s++)n.push(i[s]);r.push(n),i=e.exec(t)}return r},e.nameRegexp=i},20773:function(t,e,r){"use strict";var i=r(4824),n={allowBooleanAttributes:!1,unpairedTags:[]};function a(t){return" "===t||"\t"===t||"\n"===t||"\r"===t}function s(t,e){for(var r=e;e<t.length;e++)if("?"!=t[e]&&" "!=t[e]);else{var i=t.substr(r,e-r);if(e>5&&"xml"===i)return c("InvalidXml","XML declaration allowed only at the start of the document.",v(t,e));if("?"==t[e]&&">"==t[e+1]){e++;break}}return e}function o(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){var r=1;for(e+=8;e<t.length;e++)if("<"===t[e])r++;else if(">"===t[e]&&0===--r)break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7])for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}return e}e.validate=function(t,e){e=Object.assign({},n,e);var r,u=[],l=!1,h=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(var g=0;g<t.length;g++)if("<"===t[g]&&"?"===t[g+1]){if((g=s(t,g+=2)).err)return g}else{if("<"!==t[g]){if(a(t[g]))continue;return c("InvalidChar","char '"+t[g]+"' is not expected.",v(t,g))}var x=g;if("!"===t[++g]){g=o(t,g);continue}var m=!1;"/"===t[g]&&(m=!0,g++);for(var N="";g<t.length&&">"!==t[g]&&" "!==t[g]&&"\t"!==t[g]&&"\n"!==t[g]&&"\r"!==t[g];g++)N+=t[g];if("/"===(N=N.trim())[N.length-1]&&(N=N.substring(0,N.length-1),g--),r=N,!i.isName(r)){return c("InvalidTag",0===N.trim().length?"Invalid space after '<'.":"Tag '"+N+"' is an invalid name.",v(t,g))}var b=f(t,g);if(!1===b)return c("InvalidAttr","Attributes for '"+N+"' have open quote.",v(t,g));var E=b.value;if(g=b.index,"/"===E[E.length-1]){var y=g-E.length,T=d(E=E.substring(0,E.length-1),e);if(!0!==T)return c(T.err.code,T.err.msg,v(t,y+T.err.line));l=!0}else if(m){if(!b.tagClosed)return c("InvalidTag","Closing tag '"+N+"' doesn't have proper closing.",v(t,g));if(E.trim().length>0)return c("InvalidTag","Closing tag '"+N+"' can't have attributes or invalid starting.",v(t,x));var A=u.pop();if(N!==A.tagName){var O=v(t,A.tagStartPos);return c("InvalidTag","Expected closing tag '"+A.tagName+"' (opened in line "+O.line+", col "+O.col+") instead of closing tag '"+N+"'.",v(t,x))}0==u.length&&(h=!0)}else{var w=d(E,e);if(!0!==w)return c(w.err.code,w.err.msg,v(t,g-E.length+w.err.line));if(!0===h)return c("InvalidXml","Multiple possible root nodes found.",v(t,g));-1!==e.unpairedTags.indexOf(N)||u.push({tagName:N,tagStartPos:x}),l=!0}for(g++;g<t.length;g++)if("<"===t[g]){if("!"===t[g+1]){g=o(t,++g);continue}if("?"!==t[g+1])break;if((g=s(t,++g)).err)return g}else if("&"===t[g]){var P=p(t,g);if(-1==P)return c("InvalidChar","char '&' is not expected.",v(t,g));g=P}else if(!0===h&&!a(t[g]))return c("InvalidXml","Extra text at the end",v(t,g));"<"===t[g]&&g--}return l?1==u.length?c("InvalidTag","Unclosed tag '"+u[0].tagName+"'.",v(t,u[0].tagStartPos)):!(u.length>0)||c("InvalidXml","Invalid '"+JSON.stringify(u.map((function(t){return t.tagName})),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1}):c("InvalidXml","Start tag expected.",1)};var u='"',l="'";function f(t,e){for(var r="",i="",n=!1;e<t.length;e++){if(t[e]===u||t[e]===l)""===i?i=t[e]:i!==t[e]||(i="");else if(">"===t[e]&&""===i){n=!0;break}r+=t[e]}return""===i&&{value:r,index:e,tagClosed:n}}var h=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function d(t,e){for(var r=i.getAllMatches(t,h),n={},a=0;a<r.length;a++){if(0===r[a][1].length)return c("InvalidAttr","Attribute '"+r[a][2]+"' has no space in starting.",x(r[a]));if(void 0!==r[a][3]&&void 0===r[a][4])return c("InvalidAttr","Attribute '"+r[a][2]+"' is without value.",x(r[a]));if(void 0===r[a][3]&&!e.allowBooleanAttributes)return c("InvalidAttr","boolean attribute '"+r[a][2]+"' is not allowed.",x(r[a]));var s=r[a][2];if(!g(s))return c("InvalidAttr","Attribute '"+s+"' is an invalid name.",x(r[a]));if(n.hasOwnProperty(s))return c("InvalidAttr","Attribute '"+s+"' is repeated.",x(r[a]));n[s]=1}return!0}function p(t,e){if(";"===t[++e])return-1;if("#"===t[e])return function(t,e){var r=/\d/;for("x"===t[e]&&(e++,r=/[\da-fA-F]/);e<t.length;e++){if(";"===t[e])return e;if(!t[e].match(r))break}return-1}(t,++e);for(var r=0;e<t.length;e++,r++)if(!(t[e].match(/\w/)&&r<20)){if(";"===t[e])break;return-1}return e}function c(t,e,r){return{err:{code:t,msg:e,line:r.line||r,col:r.col}}}function g(t){return i.isName(t)}function v(t,e){var r=t.substring(0,e).split(/\r?\n/);return{line:r.length,col:r[r.length-1].length+1}}function x(t){return t.startIndex+t[1].length}},18563:function(t,e,r){"use strict";var i=r(93231).default,n=r(47080),a={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function s(t){this.options=Object.assign({},a,t),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=l),this.processTextOrObjNode=o,this.options.format?(this.indentate=u,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function o(t,e,r){var i=this.j2x(t,r+1);return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextValNode(t[this.options.textNodeName],e,i.attrStr,r):this.buildObjectNode(i.val,e,i.attrStr,r)}function u(t){return this.options.indentBy.repeat(t)}function l(t){return!(!t.startsWith(this.options.attributeNamePrefix)||t===this.options.textNodeName)&&t.substr(this.attrPrefixLen)}s.prototype.build=function(t){return this.options.preserveOrder?n(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t=i({},this.options.arrayNodeName,t)),this.j2x(t,0).val)},s.prototype.j2x=function(t,e){var r="",i="";for(var n in t)if("undefined"===typeof t[n])this.isAttribute(n)&&(i+="");else if(null===t[n])this.isAttribute(n)?i+="":"?"===n[0]?i+=this.indentate(e)+"<"+n+"?"+this.tagEndChar:i+=this.indentate(e)+"<"+n+"/"+this.tagEndChar;else if(t[n]instanceof Date)i+=this.buildTextValNode(t[n],n,"",e);else if("object"!==typeof t[n]){var a=this.isAttribute(n);if(a)r+=this.buildAttrPairStr(a,""+t[n]);else if(n===this.options.textNodeName){var s=this.options.tagValueProcessor(n,""+t[n]);i+=this.replaceEntitiesValue(s)}else i+=this.buildTextValNode(t[n],n,"",e)}else if(Array.isArray(t[n])){for(var o=t[n].length,u="",l=0;l<o;l++){var f=t[n][l];"undefined"===typeof f||(null===f?"?"===n[0]?i+=this.indentate(e)+"<"+n+"?"+this.tagEndChar:i+=this.indentate(e)+"<"+n+"/"+this.tagEndChar:"object"===typeof f?this.options.oneListGroup?u+=this.j2x(f,e+1).val:u+=this.processTextOrObjNode(f,n,e):u+=this.buildTextValNode(f,n,"",e))}this.options.oneListGroup&&(u=this.buildObjectNode(u,n,"",e)),i+=u}else if(this.options.attributesGroupName&&n===this.options.attributesGroupName)for(var h=Object.keys(t[n]),d=h.length,p=0;p<d;p++)r+=this.buildAttrPairStr(h[p],""+t[n][h[p]]);else i+=this.processTextOrObjNode(t[n],n,e);return{attrStr:r,val:i}},s.prototype.buildAttrPairStr=function(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+e+'"'},s.prototype.buildObjectNode=function(t,e,r,i){if(""===t)return"?"===e[0]?this.indentate(i)+"<"+e+r+"?"+this.tagEndChar:this.indentate(i)+"<"+e+r+this.closeTag(e)+this.tagEndChar;var n="</"+e+this.tagEndChar,a="";return"?"===e[0]&&(a="?",n=""),!r&&""!==r||-1!==t.indexOf("<")?!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===a.length?this.indentate(i)+"\x3c!--".concat(t,"--\x3e")+this.newLine:this.indentate(i)+"<"+e+r+a+this.tagEndChar+t+this.indentate(i)+n:this.indentate(i)+"<"+e+r+a+">"+t+n},s.prototype.closeTag=function(t){var e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":"></".concat(t),e},s.prototype.buildTextValNode=function(t,e,r,i){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName)return this.indentate(i)+"<![CDATA[".concat(t,"]]>")+this.newLine;if(!1!==this.options.commentPropName&&e===this.options.commentPropName)return this.indentate(i)+"\x3c!--".concat(t,"--\x3e")+this.newLine;if("?"===e[0])return this.indentate(i)+"<"+e+r+"?"+this.tagEndChar;var n=this.options.tagValueProcessor(e,t);return""===(n=this.replaceEntitiesValue(n))?this.indentate(i)+"<"+e+r+this.closeTag(e)+this.tagEndChar:this.indentate(i)+"<"+e+r+">"+n+"</"+e+this.tagEndChar},s.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(var e=0;e<this.options.entities.length;e++){var r=this.options.entities[e];t=t.replace(r.regex,r.val)}return t},t.exports=s},47080:function(t){function e(t,s,o,u){for(var l="",f=!1,h=0;h<t.length;h++){var d=t[h],p=r(d),c="";if(c=0===o.length?p:"".concat(o,".").concat(p),p!==s.textNodeName)if(p!==s.cdataPropName)if(p!==s.commentPropName)if("?"!==p[0]){var g=u;""!==g&&(g+=s.indentBy);var v=i(d[":@"],s),x=u+"<".concat(p).concat(v),m=e(d[p],s,c,g);-1!==s.unpairedTags.indexOf(p)?s.suppressUnpairedNode?l+=x+">":l+=x+"/>":m&&0!==m.length||!s.suppressEmptyNode?m&&m.endsWith(">")?l+=x+">".concat(m).concat(u,"</").concat(p,">"):(l+=x+">",m&&""!==u&&(m.includes("/>")||m.includes("</"))?l+=u+s.indentBy+m+u:l+=m,l+="</".concat(p,">")):l+=x+"/>",f=!0}else{var N=i(d[":@"],s),b="?xml"===p?"":u,E=d[p][0][s.textNodeName];E=0!==E.length?" "+E:"",l+=b+"<".concat(p).concat(E).concat(N,"?>"),f=!0}else l+=u+"\x3c!--".concat(d[p][0][s.textNodeName],"--\x3e"),f=!0;else f&&(l+=u),l+="<![CDATA[".concat(d[p][0][s.textNodeName],"]]>"),f=!1;else{var y=d[p];n(c,s)||(y=a(y=s.tagValueProcessor(p,y),s)),f&&(l+=u),l+=y,f=!1}}return l}function r(t){for(var e=Object.keys(t),r=0;r<e.length;r++){var i=e[r];if(":@"!==i)return i}}function i(t,e){var r="";if(t&&!e.ignoreAttributes)for(var i in t){var n=e.attributeValueProcessor(i,t[i]);!0===(n=a(n,e))&&e.suppressBooleanAttributes?r+=" ".concat(i.substr(e.attributeNamePrefix.length)):r+=" ".concat(i.substr(e.attributeNamePrefix.length),'="').concat(n,'"')}return r}function n(t,e){var r=(t=t.substr(0,t.length-e.textNodeName.length-1)).substr(t.lastIndexOf(".")+1);for(var i in e.stopNodes)if(e.stopNodes[i]===t||e.stopNodes[i]==="*."+r)return!0;return!1}function a(t,e){if(t&&t.length>0&&e.processEntities)for(var r=0;r<e.entities.length;r++){var i=e.entities[r];t=t.replace(i.regex,i.val)}return t}t.exports=function(t,r){var i="";return r.format&&r.indentBy.length>0&&(i="\n"),e(t,r,"",i)}},57386:function(t,e,r){var i=r(40131).default,n=r(4824);function a(t,e){for(var r="";e<t.length&&"'"!==t[e]&&'"'!==t[e];e++)r+=t[e];if(-1!==(r=r.trim()).indexOf(" "))throw new Error("External entites are not supported");for(var i=t[e++],n="";e<t.length&&t[e]!==i;e++)n+=t[e];return[r,n,e]}function s(t,e){return"!"===t[e+1]&&"-"===t[e+2]&&"-"===t[e+3]}function o(t,e){return"!"===t[e+1]&&"E"===t[e+2]&&"N"===t[e+3]&&"T"===t[e+4]&&"I"===t[e+5]&&"T"===t[e+6]&&"Y"===t[e+7]}function u(t,e){return"!"===t[e+1]&&"E"===t[e+2]&&"L"===t[e+3]&&"E"===t[e+4]&&"M"===t[e+5]&&"E"===t[e+6]&&"N"===t[e+7]&&"T"===t[e+8]}function l(t,e){return"!"===t[e+1]&&"A"===t[e+2]&&"T"===t[e+3]&&"T"===t[e+4]&&"L"===t[e+5]&&"I"===t[e+6]&&"S"===t[e+7]&&"T"===t[e+8]}function f(t,e){return"!"===t[e+1]&&"N"===t[e+2]&&"O"===t[e+3]&&"T"===t[e+4]&&"A"===t[e+5]&&"T"===t[e+6]&&"I"===t[e+7]&&"O"===t[e+8]&&"N"===t[e+9]}function h(t){if(n.isName(t))return t;throw new Error("Invalid entity name ".concat(t))}t.exports=function(t,e){var r={};if("O"!==t[e+3]||"C"!==t[e+4]||"T"!==t[e+5]||"Y"!==t[e+6]||"P"!==t[e+7]||"E"!==t[e+8])throw new Error("Invalid Tag instead of DOCTYPE");e+=9;for(var n=1,d=!1,p=!1;e<t.length;e++)if("<"!==t[e]||p)if(">"===t[e]){if(p?"-"===t[e-1]&&"-"===t[e-2]&&(p=!1,n--):n--,0===n)break}else"["===t[e]?d=!0:t[e];else{if(d&&o(t,e)){var c=a(t,(e+=7)+1),g=i(c,3);entityName=g[0],val=g[1],e=g[2],-1===val.indexOf("&")&&(r[h(entityName)]={regx:RegExp("&".concat(entityName,";"),"g"),val:val})}else if(d&&u(t,e))e+=8;else if(d&&l(t,e))e+=8;else if(d&&f(t,e))e+=9;else{if(!s)throw new Error("Invalid DOCTYPE");p=!0}n++,""}if(0!==n)throw new Error("Unclosed DOCTYPE");return{entities:r,i:e}}},84993:function(t,e){var r={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:function(){return!1},commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,r){return t}};e.buildOptions=function(t){return Object.assign({},r,t)},e.defaultOptions=r},75156:function(t,e,r){"use strict";var i=r(93231).default,n=r(42081).default,a=r(78983).default,s=r(4824),o=r(78339),u=r(57386),l=r(8778),f=("<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,s.nameRegexp),n((function t(e){a(this,t),this.options=e,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"\xa2"},pound:{regex:/&(pound|#163);/g,val:"\xa3"},yen:{regex:/&(yen|#165);/g,val:"\xa5"},euro:{regex:/&(euro|#8364);/g,val:"\u20ac"},copyright:{regex:/&(copy|#169);/g,val:"\xa9"},reg:{regex:/&(reg|#174);/g,val:"\xae"},inr:{regex:/&(inr|#8377);/g,val:"\u20b9"}},this.addExternalEntities=h,this.parseXml=v,this.parseTextData=d,this.resolveNameSpace=p,this.buildAttributesMap=g,this.isItStopNode=b,this.replaceEntitiesValue=m,this.readStopNodeData=T,this.saveTextToParentTag=N,this.addChild=x})));function h(t){for(var e=Object.keys(t),r=0;r<e.length;r++){var i=e[r];this.lastEntities[i]={regex:new RegExp("&"+i+";","g"),val:t[i]}}}function d(t,e,r,i,n,a,s){if(void 0!==t&&(this.options.trimValues&&!i&&(t=t.trim()),t.length>0)){s||(t=this.replaceEntitiesValue(t));var o=this.options.tagValueProcessor(e,t,r,n,a);return null===o||void 0===o?t:typeof o!==typeof t||o!==t?o:this.options.trimValues||t.trim()===t?A(t,this.options.parseTagValue,this.options.numberParseOptions):t}}function p(t){if(this.options.removeNSPrefix){var e=t.split(":"),r="/"===t.charAt(0)?"/":"";if("xmlns"===e[0])return"";2===e.length&&(t=r+e[1])}return t}var c=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");function g(t,e,r){if(!this.options.ignoreAttributes&&"string"===typeof t){for(var i=s.getAllMatches(t,c),n=i.length,a={},o=0;o<n;o++){var u=this.resolveNameSpace(i[o][1]),l=i[o][4],f=this.options.attributeNamePrefix+u;if(u.length)if(this.options.transformAttributeName&&(f=this.options.transformAttributeName(f)),"__proto__"===f&&(f="#__proto__"),void 0!==l){this.options.trimValues&&(l=l.trim()),l=this.replaceEntitiesValue(l);var h=this.options.attributeValueProcessor(u,l,e);a[f]=null===h||void 0===h?l:typeof h!==typeof l||h!==l?h:A(l,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(a[f]=!0)}if(!Object.keys(a).length)return;if(this.options.attributesGroupName){var d={};return d[this.options.attributesGroupName]=a,d}return a}}var v=function(t){t=t.replace(/\r\n?/g,"\n");for(var e=new o("!xml"),r=e,n="",a="",s=0;s<t.length;s++){if("<"===t[s])if("/"===t[s+1]){var l=E(t,">",s,"Closing Tag is not closed."),f=t.substring(s+2,l).trim();if(this.options.removeNSPrefix){var h=f.indexOf(":");-1!==h&&(f=f.substr(h+1))}this.options.transformTagName&&(f=this.options.transformTagName(f)),r&&(n=this.saveTextToParentTag(n,r,a));var d=a.substring(a.lastIndexOf(".")+1);if(f&&-1!==this.options.unpairedTags.indexOf(f))throw new Error("Unpaired tag can not be used as closing tag: </".concat(f,">"));var p=0;d&&-1!==this.options.unpairedTags.indexOf(d)?(p=a.lastIndexOf(".",a.lastIndexOf(".")-1),this.tagsNodeStack.pop()):p=a.lastIndexOf("."),a=a.substring(0,p),r=this.tagsNodeStack.pop(),n="",s=l}else if("?"===t[s+1]){var c=y(t,s,!1,"?>");if(!c)throw new Error("Pi Tag is not closed.");if(n=this.saveTextToParentTag(n,r,a),this.options.ignoreDeclaration&&"?xml"===c.tagName||this.options.ignorePiTags);else{var g=new o(c.tagName);g.add(this.options.textNodeName,""),c.tagName!==c.tagExp&&c.attrExpPresent&&(g[":@"]=this.buildAttributesMap(c.tagExp,a,c.tagName)),this.addChild(r,g,a)}s=c.closeIndex+1}else if("!--"===t.substr(s+1,3)){var v=E(t,"--\x3e",s+4,"Comment is not closed.");if(this.options.commentPropName){var x=t.substring(s+4,v-2);n=this.saveTextToParentTag(n,r,a),r.add(this.options.commentPropName,[i({},this.options.textNodeName,x)])}s=v}else if("!D"===t.substr(s+1,2)){var m=u(t,s);this.docTypeEntities=m.entities,s=m.i}else if("!["===t.substr(s+1,2)){var N=E(t,"]]>",s,"CDATA is not closed.")-2,b=t.substring(s+9,N);if(n=this.saveTextToParentTag(n,r,a),this.options.cdataPropName)r.add(this.options.cdataPropName,[i({},this.options.textNodeName,b)]);else{var T=this.parseTextData(b,r.tagname,a,!0,!1,!0);void 0==T&&(T=""),r.add(this.options.textNodeName,T)}s=N+2}else{var A=y(t,s,this.options.removeNSPrefix),O=A.tagName,w=A.tagExp,P=A.attrExpPresent,I=A.closeIndex;this.options.transformTagName&&(O=this.options.transformTagName(O)),r&&n&&"!xml"!==r.tagname&&(n=this.saveTextToParentTag(n,r,a,!1));var C=r;if(C&&-1!==this.options.unpairedTags.indexOf(C.tagname)&&(r=this.tagsNodeStack.pop(),a=a.substring(0,a.lastIndexOf("."))),O!==e.tagname&&(a+=a?"."+O:O),this.isItStopNode(this.options.stopNodes,a,O)){var k="";if(w.length>0&&w.lastIndexOf("/")===w.length-1)s=A.closeIndex;else if(-1!==this.options.unpairedTags.indexOf(O))s=A.closeIndex;else{var S=this.readStopNodeData(t,O,I+1);if(!S)throw new Error("Unexpected end of ".concat(O));s=S.i,k=S.tagContent}var _=new o(O);O!==w&&P&&(_[":@"]=this.buildAttributesMap(w,a,O)),k&&(k=this.parseTextData(k,O,a,!0,P,!0,!0)),a=a.substr(0,a.lastIndexOf(".")),_.add(this.options.textNodeName,k),this.addChild(r,_,a)}else{if(w.length>0&&w.lastIndexOf("/")===w.length-1){"/"===O[O.length-1]?(O=O.substr(0,O.length-1),a=a.substr(0,a.length-1),w=O):w=w.substr(0,w.length-1),this.options.transformTagName&&(O=this.options.transformTagName(O));var j=new o(O);O!==w&&P&&(j[":@"]=this.buildAttributesMap(w,a,O)),this.addChild(r,j,a),a=a.substr(0,a.lastIndexOf("."))}else{var V=new o(O);this.tagsNodeStack.push(r),O!==w&&P&&(V[":@"]=this.buildAttributesMap(w,a,O)),this.addChild(r,V,a),r=V}n="",s=I}}else n+=t[s]}return e.child};function x(t,e,r){var i=this.options.updateTag(e.tagname,r,e[":@"]);!1===i||("string"===typeof i?(e.tagname=i,t.addChild(e)):t.addChild(e))}var m=function(t){if(this.options.processEntities){for(var e in this.docTypeEntities){var r=this.docTypeEntities[e];t=t.replace(r.regx,r.val)}for(var i in this.lastEntities){var n=this.lastEntities[i];t=t.replace(n.regex,n.val)}if(this.options.htmlEntities)for(var a in this.htmlEntities){var s=this.htmlEntities[a];t=t.replace(s.regex,s.val)}t=t.replace(this.ampEntity.regex,this.ampEntity.val)}return t};function N(t,e,r,i){return t&&(void 0===i&&(i=0===Object.keys(e.child).length),void 0!==(t=this.parseTextData(t,e.tagname,r,!1,!!e[":@"]&&0!==Object.keys(e[":@"]).length,i))&&""!==t&&e.add(this.options.textNodeName,t),t=""),t}function b(t,e,r){var i="*."+r;for(var n in t){var a=t[n];if(i===a||e===a)return!0}return!1}function E(t,e,r,i){var n=t.indexOf(e,r);if(-1===n)throw new Error(i);return n+e.length-1}function y(t,e,r){var i=function(t,e){for(var r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:">",n="",a=e;a<t.length;a++){var s=t[a];if(r)s===r&&(r="");else if('"'===s||"'"===s)r=s;else if(s===i[0]){if(!i[1])return{data:n,index:a};if(t[a+1]===i[1])return{data:n,index:a}}else"\t"===s&&(s=" ");n+=s}}(t,e+1,arguments.length>3&&void 0!==arguments[3]?arguments[3]:">");if(i){var n=i.data,a=i.index,s=n.search(/\s/),o=n,u=!0;if(-1!==s&&(o=n.substr(0,s).replace(/\s\s*$/,""),n=n.substr(s+1)),r){var l=o.indexOf(":");-1!==l&&(u=(o=o.substr(l+1))!==i.data.substr(l+1))}return{tagName:o,tagExp:n,closeIndex:a,attrExpPresent:u}}}function T(t,e,r){for(var i=r,n=1;r<t.length;r++)if("<"===t[r])if("/"===t[r+1]){var a=E(t,">",r,"".concat(e," is not closed"));if(t.substring(r+2,a).trim()===e&&0===--n)return{tagContent:t.substring(i,r),i:a};r=a}else if("?"===t[r+1]){r=E(t,"?>",r+1,"StopNode is not closed.")}else if("!--"===t.substr(r+1,3)){r=E(t,"--\x3e",r+3,"StopNode is not closed.")}else if("!["===t.substr(r+1,2)){r=E(t,"]]>",r,"StopNode is not closed.")-2}else{var s=y(t,r,">");if(s)(s&&s.tagName)===e&&"/"!==s.tagExp[s.tagExp.length-1]&&n++,r=s.closeIndex}}function A(t,e,r){if(e&&"string"===typeof t){var i=t.trim();return"true"===i||"false"!==i&&l(t,r)}return s.isExist(t)?t:""}t.exports=f},49373:function(t,e,r){var i=r(78983).default,n=r(42081).default,a=r(84993).buildOptions,s=r(75156),o=r(66408).prettify,u=r(20773),l=function(){"use strict";function t(e){i(this,t),this.externalEntities={},this.options=a(e)}return n(t,[{key:"parse",value:function(t,e){if("string"===typeof t);else{if(!t.toString)throw new Error("XML data is accepted in String or Bytes[] form.");t=t.toString()}if(e){!0===e&&(e={});var r=u.validate(t,e);if(!0!==r)throw Error("".concat(r.err.msg,":").concat(r.err.line,":").concat(r.err.col))}var i=new s(this.options);i.addExternalEntities(this.externalEntities);var n=i.parseXml(t);return this.options.preserveOrder||void 0===n?n:o(n,this.options)}},{key:"addEntity",value:function(t,e){if(-1!==e.indexOf("&"))throw new Error("Entity value can't have '&'");if(-1!==t.indexOf("&")||-1!==t.indexOf(";"))throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if("&"===e)throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=e}}]),t}();t.exports=l},66408:function(t,e){"use strict";function r(t,e,s){for(var o,u={},l=0;l<t.length;l++){var f=t[l],h=i(f),d="";if(d=void 0===s?h:s+"."+h,h===e.textNodeName)void 0===o?o=f[h]:o+=""+f[h];else{if(void 0===h)continue;if(f[h]){var p=r(f[h],e,d),c=a(p,e);f[":@"]?n(p,f[":@"],d,e):1!==Object.keys(p).length||void 0===p[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(p).length&&(e.alwaysCreateTextNode?p[e.textNodeName]="":p=""):p=p[e.textNodeName],void 0!==u[h]&&u.hasOwnProperty(h)?(Array.isArray(u[h])||(u[h]=[u[h]]),u[h].push(p)):e.isArray(h,d,c)?u[h]=[p]:u[h]=p}}}return"string"===typeof o?o.length>0&&(u[e.textNodeName]=o):void 0!==o&&(u[e.textNodeName]=o),u}function i(t){for(var e=Object.keys(t),r=0;r<e.length;r++){var i=e[r];if(":@"!==i)return i}}function n(t,e,r,i){if(e)for(var n=Object.keys(e),a=n.length,s=0;s<a;s++){var o=n[s];i.isArray(o,r+"."+o,!0,!0)?t[o]=[e[o]]:t[o]=e[o]}}function a(t,e){var r=e.textNodeName,i=Object.keys(t).length;return 0===i||!(1!==i||!t[r]&&"boolean"!==typeof t[r]&&0!==t[r])}e.prettify=function(t,e){return r(t,e)}},78339:function(t,e,r){"use strict";var i=r(93231).default,n=r(78983).default,a=r(42081).default,s=function(){function t(e){n(this,t),this.tagname=e,this.child=[],this[":@"]={}}return a(t,[{key:"add",value:function(t,e){"__proto__"===t&&(t="#__proto__"),this.child.push(i({},t,e))}},{key:"addChild",value:function(t){var e;("__proto__"===t.tagname&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0)?this.child.push((i(e={},t.tagname,t.child),i(e,":@",t[":@"]),e)):this.child.push(i({},t.tagname,t.child))}}]),t}();t.exports=s},8778:function(t){var e=/^[-+]?0x[a-fA-F0-9]+$/,r=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);var i={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};t.exports=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n=Object.assign({},i,n),!t||"string"!==typeof t)return t;var a=t.trim();if(void 0!==n.skipLike&&n.skipLike.test(a))return t;if(n.hex&&e.test(a))return Number.parseInt(a,16);var s=r.exec(a);if(s){var o=s[1],u=s[2],l=function(t){if(t&&-1!==t.indexOf("."))return"."===(t=t.replace(/0+$/,""))?t="0":"."===t[0]?t="0"+t:"."===t[t.length-1]&&(t=t.substr(0,t.length-1)),t;return t}(s[3]),f=s[4]||s[6];if(!n.leadingZeros&&u.length>0&&o&&"."!==a[2])return t;if(!n.leadingZeros&&u.length>0&&!o&&"."!==a[1])return t;var h=Number(a),d=""+h;return-1!==d.search(/[eE]/)||f?n.eNotation?h:t:-1!==a.indexOf(".")?"0"===d&&""===l||d===l||o&&d==="-"+l?h:t:u?l===d||o+l===d?h:t:a===d||a===o+d?h:t}return t}},98106:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i},t.exports.__esModule=!0,t.exports.default=t.exports},17358:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},40608:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var i,n,a,s,o=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(i=a.call(r)).done)&&(o.push(i.value),o.length!==e);u=!0);}catch(f){l=!0,n=f}finally{try{if(!u&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw n}}return o}},t.exports.__esModule=!0,t.exports.default=t.exports},56894:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},40131:function(t,e,r){var i=r(17358),n=r(40608),a=r(35068),s=r(56894);t.exports=function(t,e){return i(t)||n(t,e)||a(t,e)||s()},t.exports.__esModule=!0,t.exports.default=t.exports},35068:function(t,e,r){var i=r(98106);t.exports=function(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=6612.8125c11f.chunk.js.map