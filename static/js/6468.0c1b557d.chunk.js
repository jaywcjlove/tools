"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6468],{6468:function(t,e,s){s.d(e,{IK:function(){return B},Jq:function(){return S},RA:function(){return b},WQ:function(){return F}});var i=s(649),n=s(67591),r=s(94337),a=s(11026),h=s(60726),o=s(22951),u=s(91976),c=s(33770),f=s(7232),l=function(){function t(e,s,i,n,r,a,h,u,c){var f=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,l=arguments.length>10?arguments[10]:void 0;(0,o.Z)(this,t),this.p=e,this.stack=s,this.state=i,this.reducePos=n,this.pos=r,this.score=a,this.buffer=h,this.bufferBase=u,this.curContext=c,this.lookAhead=f,this.parent=l}return(0,u.Z)(t,[{key:"toString",value:function(){return"[".concat(this.stack.filter((function(t,e){return e%3==0})).concat(this.state),"]@").concat(this.pos).concat(this.score?"!"+this.score:"")}},{key:"context",get:function(){return this.curContext?this.curContext.context:null}},{key:"pushState",value:function(t,e){this.stack.push(this.state,e,this.bufferBase+this.buffer.length),this.state=t}},{key:"reduce",value:function(t){var e,s=t>>19,i=65535&t,n=this.p.parser,r=n.dynamicPrecedence(i);if(r&&(this.score+=r),0==s)return this.pushState(n.getGoto(this.state,i,!0),this.reducePos),i<n.minRepeatTerm&&this.storeNode(i,this.reducePos,this.reducePos,4,!0),void this.reduceContext(i,this.reducePos);var a=this.stack.length-3*(s-1)-(262144&t?6:0),h=a?this.stack[a-2]:this.p.ranges[0].from,o=this.reducePos-h;o>=2e3&&!(null===(e=this.p.parser.nodeSet.types[i])||void 0===e?void 0:e.isAnonymous)&&(h==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=o):this.p.lastBigReductionSize<o&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=h,this.p.lastBigReductionSize=o));var u=a?this.stack[a-1]:0,c=this.bufferBase+this.buffer.length-u;if(i<n.minRepeatTerm||131072&t){var f=n.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(i,h,f,c+4,!0)}if(262144&t)this.state=this.stack[a];else{var l=this.stack[a-3];this.state=n.getGoto(l,i,!0)}for(;this.stack.length>a;)this.stack.pop();this.reduceContext(i,h)}},{key:"storeNode",value:function(t,e,s){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(0==t&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){var r=this,a=this.buffer.length;if(0==a&&r.parent&&(a=r.bufferBase-r.parent.bufferBase,r=r.parent),a>0&&0==r.buffer[a-4]&&r.buffer[a-1]>-1){if(e==s)return;if(r.buffer[a-2]>=e)return void(r.buffer[a-2]=s)}}if(n&&this.pos!=s){var h=this.buffer.length;if(h>0&&0!=this.buffer[h-4])for(;h>0&&this.buffer[h-2]>s;)this.buffer[h]=this.buffer[h-4],this.buffer[h+1]=this.buffer[h-3],this.buffer[h+2]=this.buffer[h-2],this.buffer[h+3]=this.buffer[h-1],h-=4,i>4&&(i-=4);this.buffer[h]=t,this.buffer[h+1]=e,this.buffer[h+2]=s,this.buffer[h+3]=i}else this.buffer.push(t,e,s,i)}},{key:"shift",value:function(t,e,s){var i=this.pos;if(131072&t)this.pushState(65535&t,this.pos);else if(0==(262144&t)){var n=t,r=this.p.parser;(s>this.pos||e<=r.maxNode)&&(this.pos=s,r.stateFlag(n,1)||(this.reducePos=s)),this.pushState(n,i),this.shiftContext(e,i),e<=r.maxNode&&this.buffer.push(e,i,s,4)}else this.pos=s,this.shiftContext(e,i),e<=this.p.parser.maxNode&&this.buffer.push(e,i,s,4)}},{key:"apply",value:function(t,e,s){65536&t?this.reduce(t):this.shift(t,e,s)}},{key:"useNode",value:function(t,e){var s=this.p.reused.length-1;(s<0||this.p.reused[s]!=t)&&(this.p.reused.push(t),s++);var i=this.pos;this.reducePos=this.pos=i+t.length,this.pushState(e,i),this.buffer.push(s,i,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,t,this,this.p.stream.reset(this.pos-t.length)))}},{key:"split",value:function(){for(var e=this,s=e.buffer.length;s>0&&e.buffer[s-2]>e.reducePos;)s-=4;for(var i=e.buffer.slice(s),n=e.bufferBase+s;e&&n==e.bufferBase;)e=e.parent;return new t(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,i,n,this.curContext,this.lookAhead,e)}},{key:"recoverByDelete",value:function(t,e){var s=t<=this.p.parser.maxNode;s&&this.storeNode(t,this.pos,e,4),this.storeNode(0,this.pos,e,s?8:4),this.pos=this.reducePos=e,this.score-=190}},{key:"canShift",value:function(t){for(var e=new d(this);;){var s=this.p.parser.stateSlot(e.state,4)||this.p.parser.hasAction(e.state,t);if(0==s)return!1;if(0==(65536&s))return!0;e.reduce(s)}}},{key:"recoverByInsert",value:function(t){if(this.stack.length>=300)return[];var e=this.p.parser.nextStates(this.state);if(e.length>8||this.stack.length>=120){for(var s,i=[],n=0;n<e.length;n+=2)(s=e[n+1])!=this.state&&this.p.parser.hasAction(s,t)&&i.push(e[n],s);if(this.stack.length<120)for(var r=function(){var t=e[a+1];i.some((function(e,s){return 1&s&&e==t}))||i.push(e[a],t)},a=0;i.length<8&&a<e.length;a+=2)r();e=i}for(var h=[],o=0;o<e.length&&h.length<4;o+=2){var u=e[o+1];if(u!=this.state){var c=this.split();c.pushState(u,this.pos),c.storeNode(0,c.pos,c.pos,4,!0),c.shiftContext(e[o],this.pos),c.score-=200,h.push(c)}}return h}},{key:"forceReduce",value:function(){var t=this.p.parser,e=t.stateSlot(this.state,5);if(0==(65536&e))return!1;if(!t.validAction(this.state,e)){var s=e>>19,i=65535&e,n=this.stack.length-3*s;if(n<0||t.getGoto(this.stack[n],i,!1)<0){var r=this.findForcedReduction();if(null==r)return!1;e=r}this.storeNode(0,this.pos,this.pos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(e),!0}},{key:"findForcedReduction",value:function(){var t=this,e=this.p.parser,s=[];return function i(n,r){if(!s.includes(n))return s.push(n),e.allActions(n,(function(s){if(393216&s);else if(65536&s){var n=(s>>19)-r;if(n>1){var a=65535&s,h=t.stack.length-3*n;if(h>=0&&e.getGoto(t.stack[h],a,!1)>=0)return n<<19|65536|a}}else{var o=i(s,r+1);if(null!=o)return o}}))}(this.state,0)}},{key:"forceAll",value:function(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}},{key:"deadEnd",get:function(){if(3!=this.stack.length)return!1;var t=this.p.parser;return 65535==t.data[t.stateSlot(this.state,1)]&&!t.stateSlot(this.state,4)}},{key:"restart",value:function(){this.state=this.stack[0],this.stack.length=0}},{key:"sameState",value:function(t){if(this.state!=t.state||this.stack.length!=t.stack.length)return!1;for(var e=0;e<this.stack.length;e+=3)if(this.stack[e]!=t.stack[e])return!1;return!0}},{key:"parser",get:function(){return this.p.parser}},{key:"dialectEnabled",value:function(t){return this.p.parser.dialect.flags[t]}},{key:"shiftContext",value:function(t,e){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,t,this,this.p.stream.reset(e)))}},{key:"reduceContext",value:function(t,e){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,t,this,this.p.stream.reset(e)))}},{key:"emitContext",value:function(){var t=this.buffer.length-1;(t<0||-3!=this.buffer[t])&&this.buffer.push(this.curContext.hash,this.pos,this.pos,-3)}},{key:"emitLookAhead",value:function(){var t=this.buffer.length-1;(t<0||-4!=this.buffer[t])&&this.buffer.push(this.lookAhead,this.pos,this.pos,-4)}},{key:"updateContext",value:function(t){if(t!=this.curContext.context){var e=new p(this.curContext.tracker,t);e.hash!=this.curContext.hash&&this.emitContext(),this.curContext=e}}},{key:"setLookAhead",value:function(t){t>this.lookAhead&&(this.emitLookAhead(),this.lookAhead=t)}},{key:"close",value:function(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}}],[{key:"start",value:function(e,s){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e.parser.context;return new t(e,[],s,i,i,0,[],0,n?new p(n,n.start):null,0,null)}}]),t}(),p=(0,u.Z)((function t(e,s){(0,o.Z)(this,t),this.tracker=e,this.context=s,this.hash=e.strict?e.hash(s):0})),d=function(){function t(e){(0,o.Z)(this,t),this.start=e,this.state=e.state,this.stack=e.stack,this.base=this.stack.length}return(0,u.Z)(t,[{key:"reduce",value:function(t){var e=65535&t,s=t>>19;0==s?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=3*(s-1);var i=this.start.p.parser.getGoto(this.stack[this.base-3],e,!0);this.state=i}}]),t}(),k=function(){function t(e,s,i){(0,o.Z)(this,t),this.stack=e,this.pos=s,this.index=i,this.buffer=e.buffer,0==this.index&&this.maybeNext()}return(0,u.Z)(t,[{key:"maybeNext",value:function(){var t=this.stack.parent;null!=t&&(this.index=this.stack.bufferBase-t.bufferBase,this.stack=t,this.buffer=t.buffer)}},{key:"id",get:function(){return this.buffer[this.index-4]}},{key:"start",get:function(){return this.buffer[this.index-3]}},{key:"end",get:function(){return this.buffer[this.index-2]}},{key:"size",get:function(){return this.buffer[this.index-1]}},{key:"next",value:function(){this.index-=4,this.pos-=4,0==this.index&&this.maybeNext()}},{key:"fork",value:function(){return new t(this.stack,this.pos,this.index)}}],[{key:"create",value:function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.bufferBase+e.buffer.length;return new t(e,s,s-e.bufferBase)}}]),t}();function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Uint16Array;if("string"!=typeof t)return t;for(var s=null,i=0,n=0;i<t.length;){for(var r=0;;){var a=t.charCodeAt(i++),h=!1;if(126==a){r=65535;break}a>=92&&a--,a>=34&&a--;var o=a-32;if(o>=46&&(o-=46,h=!0),r+=o,h)break;r*=46}s?s[n++]=r:s=new e(r)}return s}var g=(0,u.Z)((function t(){(0,o.Z)(this,t),this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0})),m=new g,x=function(){function t(e,s){(0,o.Z)(this,t),this.input=e,this.ranges=s,this.chunk="",this.chunkOff=0,this.chunk2="",this.chunk2Pos=0,this.next=-1,this.token=m,this.rangeIndex=0,this.pos=this.chunkPos=s[0].from,this.range=s[0],this.end=s[s.length-1].to,this.readNext()}return(0,u.Z)(t,[{key:"resolveOffset",value:function(t,e){for(var s=this.range,i=this.rangeIndex,n=this.pos+t;n<s.from;){if(!i)return null;var r=this.ranges[--i];n-=s.from-r.to,s=r}for(;e<0?n>s.to:n>=s.to;){if(i==this.ranges.length-1)return null;var a=this.ranges[++i];n+=a.from-s.to,s=a}return n}},{key:"clipPos",value:function(t){if(t>=this.range.from&&t<this.range.to)return t;var e,s=(0,h.Z)(this.ranges);try{for(s.s();!(e=s.n()).done;){var i=e.value;if(i.to>t)return Math.max(t,i.from)}}catch(n){s.e(n)}finally{s.f()}return this.end}},{key:"peek",value:function(t){var e,s,i=this.chunkOff+t;if(i>=0&&i<this.chunk.length)e=this.pos+t,s=this.chunk.charCodeAt(i);else{var n=this.resolveOffset(t,1);if(null==n)return-1;if((e=n)>=this.chunk2Pos&&e<this.chunk2Pos+this.chunk2.length)s=this.chunk2.charCodeAt(e-this.chunk2Pos);else{for(var r=this.rangeIndex,a=this.range;a.to<=e;)a=this.ranges[++r];this.chunk2=this.input.chunk(this.chunk2Pos=e),e+this.chunk2.length>a.to&&(this.chunk2=this.chunk2.slice(0,a.to-e)),s=this.chunk2.charCodeAt(0)}}return e>=this.token.lookAhead&&(this.token.lookAhead=e+1),s}},{key:"acceptToken",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=e?this.resolveOffset(e,-1):this.pos;if(null==s||s<this.token.start)throw new RangeError("Token end out of bounds");this.token.value=t,this.token.end=s}},{key:"getChunk",value:function(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){var t=this.chunk,e=this.chunkPos;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=t,this.chunk2Pos=e,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;var s=this.input.chunk(this.pos),i=this.pos+s.length;this.chunk=i>this.range.to?s.slice(0,this.range.to-this.pos):s,this.chunkPos=this.pos,this.chunkOff=0}}},{key:"readNext",value:function(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}},{key:"advance",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;for(this.chunkOff+=t;this.pos+t>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();t-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=t,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}},{key:"setDone",value:function(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk="",this.next=-1}},{key:"reset",value:function(t,e){if(e?(this.token=e,e.start=t,e.lookAhead=t+1,e.value=e.extended=-1):this.token=m,this.pos!=t){if(this.pos=t,t==this.end)return this.setDone(),this;for(;t<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;t>=this.range.to;)this.range=this.ranges[++this.rangeIndex];t>=this.chunkPos&&t<this.chunkPos+this.chunk.length?this.chunkOff=t-this.chunkPos:(this.chunk="",this.chunkOff=0),this.readNext()}return this}},{key:"read",value:function(t,e){if(t>=this.chunkPos&&e<=this.chunkPos+this.chunk.length)return this.chunk.slice(t-this.chunkPos,e-this.chunkPos);if(t>=this.chunk2Pos&&e<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(t-this.chunk2Pos,e-this.chunk2Pos);if(t>=this.range.from&&e<=this.range.to)return this.input.read(t,e);var s,i="",n=(0,h.Z)(this.ranges);try{for(n.s();!(s=n.n()).done;){var r=s.value;if(r.from>=e)break;r.to>t&&(i+=this.input.read(Math.max(r.from,t),Math.min(r.to,e)))}}catch(a){n.e(a)}finally{n.f()}return i}}]),t}(),y=function(){function t(e,s){(0,o.Z)(this,t),this.data=e,this.id=s}return(0,u.Z)(t,[{key:"token",value:function(t,e){var s=e.p.parser;P(this.data,t,e,this.id,s.data,s.tokenPrecTable)}}]),t}();y.prototype.contextual=y.prototype.fallback=y.prototype.extend=!1;var b=function(){function t(e,s,i){(0,o.Z)(this,t),this.precTable=s,this.elseToken=i,this.data="string"==typeof e?v(e):e}return(0,u.Z)(t,[{key:"token",value:function(t,e){for(var s=t.pos,i=0;;){var n=t.next<0,r=t.resolveOffset(1,1);if(P(this.data,t,e,0,this.data,this.precTable),t.token.value>-1)break;if(null==this.elseToken)return;if(n||i++,null==r)break;t.reset(r,t.token)}i&&(t.reset(s,t.token),t.acceptToken(this.elseToken,i))}}]),t}();b.prototype.contextual=y.prototype.fallback=y.prototype.extend=!1;var S=(0,u.Z)((function t(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,o.Z)(this,t),this.token=e,this.contextual=!!s.contextual,this.fallback=!!s.fallback,this.extend=!!s.extend}));function P(t,e,s,i,n,r){var a=0,h=1<<i,o=s.p.parser.dialect;t:for(;0!=(h&t[a]);){for(var u=t[a+1],c=a+3;c<u;c+=2)if((t[c+1]&h)>0){var f=t[c];if(o.allows(f)&&(-1==e.token.value||e.token.value==f||C(f,e.token.value,n,r))){e.acceptToken(f);break}}var l=e.next,p=0,d=t[a+2];if(!(e.next<0&&d>p&&65535==t[u+3*d-3]&&65535==t[u+3*d-3])){for(;p<d;){var k=p+d>>1,v=u+k+(k<<1),g=t[v],m=t[v+1]||65536;if(l<g)d=k;else{if(!(l>=m)){a=t[v+2],e.advance();continue t}p=k+1}}break}a=t[u+3*d-1]}}function A(t,e,s){for(var i,n=e;65535!=(i=t[n]);n++)if(i==s)return n-e;return-1}function C(t,e,s,i){var n=A(s,i,e);return n<0||A(s,i,t)<n}var T="undefined"!=typeof f&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&/\bparse\b/.test({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.LOG),w=null;function R(t,e,s){var i=t.cursor(c.vj.IncludeAnonymous);for(i.moveTo(e);;)if(!(s<0?i.childBefore(e):i.childAfter(e)))for(;;){if((s<0?i.to<e:i.from>e)&&!i.type.isError)return s<0?Math.max(0,Math.min(i.to-1,e-25)):Math.min(t.length,Math.max(i.from+1,e+25));if(s<0?i.prevSibling():i.nextSibling())break;if(!i.parent())return s<0?0:t.length}}var N=function(){function t(e,s){(0,o.Z)(this,t),this.fragments=e,this.nodeSet=s,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}return(0,u.Z)(t,[{key:"nextFragment",value:function(){var t=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(t){for(this.safeFrom=t.openStart?R(t.tree,t.from+t.offset,1)-t.offset:t.from,this.safeTo=t.openEnd?R(t.tree,t.to+t.offset,-1)-t.offset:t.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(t.tree),this.start.push(-t.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}},{key:"nodeAt",value:function(t){if(t<this.nextStart)return null;for(;this.fragment&&this.safeTo<=t;)this.nextFragment();if(!this.fragment)return null;for(;;){var e=this.trees.length-1;if(e<0)return this.nextFragment(),null;var s=this.trees[e],i=this.index[e];if(i!=s.children.length){var n=s.children[i],r=this.start[e]+s.positions[i];if(r>t)return this.nextStart=r,null;if(n instanceof c.mp){if(r==t){if(r<this.safeFrom)return null;var a=r+n.length;if(a<=this.safeTo){var h=n.prop(c.md.lookAhead);if(!h||a+h<this.fragment.to)return n}}this.index[e]++,r+n.length>=Math.max(this.safeFrom,t)&&(this.trees.push(n),this.start.push(r),this.index.push(0))}else this.index[e]++,this.nextStart=r+n.length}else this.trees.pop(),this.start.pop(),this.index.pop()}}}]),t}(),Z=function(){function t(e,s){(0,o.Z)(this,t),this.stream=s,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=e.tokenizers.map((function(t){return new g}))}return(0,u.Z)(t,[{key:"getActions",value:function(t){for(var e=0,s=null,i=t.p.parser,n=i.tokenizers,r=i.stateSlot(t.state,3),a=t.curContext?t.curContext.hash:0,h=0,o=0;o<n.length;o++)if(0!=(1<<o&r)){var u=n[o],c=this.tokens[o];if((!s||u.fallback)&&((u.contextual||c.start!=t.pos||c.mask!=r||c.context!=a)&&(this.updateCachedToken(c,u,t),c.mask=r,c.context=a),c.lookAhead>c.end+25&&(h=Math.max(c.lookAhead,h)),0!=c.value)){var f=e;if(c.extended>-1&&(e=this.addActions(t,c.extended,c.end,e)),e=this.addActions(t,c.value,c.end,e),!u.extend&&(s=c,e>f))break}}for(;this.actions.length>e;)this.actions.pop();return h&&t.setLookAhead(h),s||t.pos!=this.stream.end||((s=new g).value=t.p.parser.eofTerm,s.start=s.end=t.pos,e=this.addActions(t,s.value,s.end,e)),this.mainToken=s,this.actions}},{key:"getMainToken",value:function(t){if(this.mainToken)return this.mainToken;var e=new g,s=t.pos,i=t.p;return e.start=s,e.end=Math.min(s+1,i.stream.end),e.value=s==i.stream.end?i.parser.eofTerm:0,e}},{key:"updateCachedToken",value:function(t,e,s){var i=this.stream.clipPos(s.pos);if(e.token(this.stream.reset(i,t),s),t.value>-1){for(var n=s.p.parser,r=0;r<n.specialized.length;r++)if(n.specialized[r]==t.value){var a=n.specializers[r](this.stream.read(t.start,t.end),s);if(a>=0&&s.p.parser.dialect.allows(a>>1)){0==(1&a)?t.value=a>>1:t.extended=a>>1;break}}}else t.value=0,t.end=this.stream.clipPos(i+1)}},{key:"putAction",value:function(t,e,s,i){for(var n=0;n<i;n+=3)if(this.actions[n]==t)return i;return this.actions[i++]=t,this.actions[i++]=e,this.actions[i++]=s,i}},{key:"addActions",value:function(t,e,s,i){for(var n=t.state,r=t.p.parser,a=r.data,h=0;h<2;h++)for(var o=r.stateSlot(n,h?2:1);;o+=3){if(65535==a[o]){if(1!=a[o+1]){0==i&&2==a[o+1]&&(i=this.putAction(E(a,o+2),e,s,i));break}o=E(a,o+2)}a[o]==e&&(i=this.putAction(E(a,o+1),e,s,i))}return i}}]),t}(),O=function(){function t(e,s,i,n){(0,o.Z)(this,t),this.parser=e,this.input=s,this.ranges=n,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new x(s,n),this.tokens=new Z(e,this.stream),this.topTerm=e.top[1];var r=n[0].from;this.stacks=[l.start(this,e.top[0],r)],this.fragments=i.length&&this.stream.end-r>4*e.bufferLength?new N(i,e.nodeSet):null}return(0,u.Z)(t,[{key:"parsedPos",get:function(){return this.minStackPos}},{key:"advance",value:function(){var t,e,s=this.stacks,i=this.minStackPos,n=this.stacks=[];if(this.bigReductionCount>300&&1==s.length){for(var r=(0,a.Z)(s,1)[0];r.forceReduce()&&r.stack.length&&r.stack[r.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(var o=0;o<s.length;o++)for(var u=s[o];;){if(this.tokens.mainToken=null,u.pos>i)n.push(u);else{if(this.advanceStack(u,n,s))continue;t||(t=[],e=[]),t.push(u);var c=this.tokens.getMainToken(u);e.push(c.value,c.end)}break}if(!n.length){var f=t&&function(t){var e,s=null,i=(0,h.Z)(t);try{for(i.s();!(e=i.n()).done;){var n=e.value,r=n.p.stoppedAt;(n.pos==n.p.stream.end||null!=r&&n.pos>r)&&n.p.parser.stateFlag(n.state,2)&&(!s||s.score<n.score)&&(s=n)}}catch(a){i.e(a)}finally{i.f()}return s}(t);if(f)return T&&console.log("Finish with "+this.stackID(f)),this.stackToTree(f);if(this.parser.strict)throw T&&t&&console.log("Stuck with token "+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):"none")),new SyntaxError("No parse at "+i);this.recovering||(this.recovering=5)}if(this.recovering&&t){var l=null!=this.stoppedAt&&t[0].pos>this.stoppedAt?t[0]:this.runRecovery(t,e,n);if(l)return T&&console.log("Force-finish "+this.stackID(l)),this.stackToTree(l.forceAll())}if(this.recovering){var p=1==this.recovering?1:3*this.recovering;if(n.length>p)for(n.sort((function(t,e){return e.score-t.score}));n.length>p;)n.pop();n.some((function(t){return t.reducePos>i}))&&this.recovering--}else if(n.length>1){t:for(var d=0;d<n.length-1;d++)for(var k=n[d],v=d+1;v<n.length;v++){var g=n[v];if(k.sameState(g)||k.buffer.length>500&&g.buffer.length>500){if(!((k.score-g.score||k.buffer.length-g.buffer.length)>0)){n.splice(d--,1);continue t}n.splice(v--,1)}}n.length>12&&n.splice(12,n.length-12)}this.minStackPos=n[0].pos;for(var m=1;m<n.length;m++)n[m].pos<this.minStackPos&&(this.minStackPos=n[m].pos);return null}},{key:"stopAt",value:function(t){if(null!=this.stoppedAt&&this.stoppedAt<t)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=t}},{key:"advanceStack",value:function(t,e,s){var i=t.pos,n=this.parser,r=T?this.stackID(t)+" -> ":"";if(null!=this.stoppedAt&&i>this.stoppedAt)return t.forceReduce()?t:null;if(this.fragments)for(var a=t.curContext&&t.curContext.tracker.strict,h=a?t.curContext.hash:0,o=this.fragments.nodeAt(i);o;){var u=this.parser.nodeSet.types[o.type.id]==o.type?n.getGoto(t.state,o.type.id):-1;if(u>-1&&o.length&&(!a||(o.prop(c.md.contextHash)||0)==h))return t.useNode(o,u),T&&console.log(r+this.stackID(t)+" (via reuse of ".concat(n.getName(o.type.id),")")),!0;if(!(o instanceof c.mp)||0==o.children.length||o.positions[0]>0)break;var f=o.children[0];if(!(f instanceof c.mp&&0==o.positions[0]))break;o=f}var l=n.stateSlot(t.state,4);if(l>0)return t.reduce(l),T&&console.log(r+this.stackID(t)+" (via always-reduce ".concat(n.getName(65535&l),")")),!0;if(t.stack.length>=15e3)for(;t.stack.length>9e3&&t.forceReduce(););for(var p=this.tokens.getActions(t),d=0;d<p.length;){var k=p[d++],v=p[d++],g=p[d++],m=d==p.length||!s,x=m?t:t.split();if(x.apply(k,v,g),T&&console.log(r+this.stackID(x)+" (via ".concat(0==(65536&k)?"shift":"reduce of ".concat(n.getName(65535&k))," for ").concat(n.getName(v)," @ ").concat(i).concat(x==t?"":", split",")")),m)return!0;x.pos>i?e.push(x):s.push(x)}return!1}},{key:"advanceFully",value:function(t,e){for(var s=t.pos;;){if(!this.advanceStack(t,null,null))return!1;if(t.pos>s)return z(t,e),!0}}},{key:"runRecovery",value:function(t,e,s){for(var i=null,n=!1,r=0;r<t.length;r++){var a=t[r],o=e[r<<1],u=e[1+(r<<1)],c=T?this.stackID(a)+" -> ":"";if(a.deadEnd){if(n)continue;if(n=!0,a.restart(),T&&console.log(c+this.stackID(a)+" (restarted)"),this.advanceFully(a,s))continue}for(var f=a.split(),l=c,p=0;f.forceReduce()&&p<10;p++){if(T&&console.log(l+this.stackID(f)+" (via force-reduce)"),this.advanceFully(f,s))break;T&&(l=this.stackID(f)+" -> ")}var d,k=(0,h.Z)(a.recoverByInsert(o));try{for(k.s();!(d=k.n()).done;){var v=d.value;T&&console.log(c+this.stackID(v)+" (via recover-insert)"),this.advanceFully(v,s)}}catch(g){k.e(g)}finally{k.f()}this.stream.end>a.pos?(u==a.pos&&(u++,o=0),a.recoverByDelete(o,u),T&&console.log(c+this.stackID(a)+" (via recover-delete ".concat(this.parser.getName(o),")")),z(a,s)):(!i||i.score<a.score)&&(i=a)}return i}},{key:"stackToTree",value:function(t){return t.close(),c.mp.build({buffer:k.create(t),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:t.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}},{key:"stackID",value:function(t){var e=(w||(w=new WeakMap)).get(t);return e||w.set(t,e=String.fromCodePoint(this.nextStackID++)),e+t}}]),t}();function z(t,e){for(var s=0;s<e.length;s++){var i=e[s];if(i.pos==t.pos&&i.sameState(t))return void(e[s].score<t.score&&(e[s]=t))}e.push(t)}var D=function(){function t(e,s,i){(0,o.Z)(this,t),this.source=e,this.flags=s,this.disabled=i}return(0,u.Z)(t,[{key:"allows",value:function(t){return!this.disabled||0==this.disabled[t]}}]),t}(),I=function(t){return t},B=(0,u.Z)((function t(e){(0,o.Z)(this,t),this.start=e.start,this.shift=e.shift||I,this.reduce=e.reduce||I,this.reuse=e.reuse||I,this.hash=e.hash||function(){return 0},this.strict=!1!==e.strict})),F=function(t){(0,n.Z)(s,t);var e=(0,r.Z)(s);function s(t){var n,r;if((0,o.Z)(this,s),(r=e.call(this)).wrappers=[],14!=t.version)throw new RangeError("Parser version (".concat(t.version,") doesn't match runtime version (",14,")"));var a=t.nodeNames.split(" ");r.minRepeatTerm=a.length;for(var u=0;u<t.repeatNodeCount;u++)a.push("");for(var f=Object.keys(t.topRules).map((function(e){return t.topRules[e][1]})),l=[],p=0;p<a.length;p++)l.push([]);function d(t,e,s){l[t].push([e,e.deserialize(String(s))])}if(t.nodeProps){var k,g=(0,h.Z)(t.nodeProps);try{for(g.s();!(k=g.n()).done;){var m=k.value,x=m[0];"string"==typeof x&&(x=c.md[x]);for(var b=1;b<m.length;){var S=m[b++];if(S>=0)d(S,x,m[b++]);else{for(var P=m[b+-S],A=-S;A>0;A--)d(m[b++],x,P);b++}}}}catch(w){g.e(w)}finally{g.f()}}r.nodeSet=new c.Lj(a.map((function(e,s){return c.Jq.define({name:s>=r.minRepeatTerm?void 0:e,id:s,props:l[s],top:f.indexOf(s)>-1,error:0==s,skipped:t.skippedNodes&&t.skippedNodes.indexOf(s)>-1})}))),t.propSources&&(r.nodeSet=(n=r.nodeSet).extend.apply(n,(0,i.Z)(t.propSources))),r.strict=!1,r.bufferLength=c.L3;var C=v(t.tokenData);r.context=t.context,r.specializerSpecs=t.specialized||[],r.specialized=new Uint16Array(r.specializerSpecs.length);for(var T=0;T<r.specializerSpecs.length;T++)r.specialized[T]=r.specializerSpecs[T].term;return r.specializers=r.specializerSpecs.map(L),r.states=v(t.states,Uint32Array),r.data=v(t.stateData),r.goto=v(t.goto),r.maxTerm=t.maxTerm,r.tokenizers=t.tokenizers.map((function(t){return"number"==typeof t?new y(C,t):t})),r.topRules=t.topRules,r.dialects=t.dialects||{},r.dynamicPrecedences=t.dynamicPrecedences||null,r.tokenPrecTable=t.tokenPrec,r.termNames=t.termNames||null,r.maxNode=r.nodeSet.types.length-1,r.dialect=r.parseDialect(),r.top=r.topRules[Object.keys(r.topRules)[0]],r}return(0,u.Z)(s,[{key:"createParse",value:function(t,e,s){var i,n=new O(this,t,e,s),r=(0,h.Z)(this.wrappers);try{for(r.s();!(i=r.n()).done;){n=(0,i.value)(n,t,e,s)}}catch(a){r.e(a)}finally{r.f()}return n}},{key:"getGoto",value:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.goto;if(e>=i[0])return-1;for(var n=i[e+1];;){var r=i[n++],a=1&r,h=i[n++];if(a&&s)return h;for(var o=n+(r>>1);n<o;n++)if(i[n]==t)return h;if(a)return-1}}},{key:"hasAction",value:function(t,e){for(var s=this.data,i=0;i<2;i++)for(var n,r=this.stateSlot(t,i?2:1);;r+=3){if(65535==(n=s[r])){if(1!=s[r+1]){if(2==s[r+1])return E(s,r+2);break}n=s[r=E(s,r+2)]}if(n==e||0==n)return E(s,r+1)}return 0}},{key:"stateSlot",value:function(t,e){return this.states[6*t+e]}},{key:"stateFlag",value:function(t,e){return(this.stateSlot(t,0)&e)>0}},{key:"validAction",value:function(t,e){return!!this.allActions(t,(function(t){return t==e||null}))}},{key:"allActions",value:function(t,e){for(var s=this.stateSlot(t,4),i=s?e(s):void 0,n=this.stateSlot(t,1);null==i;n+=3){if(65535==this.data[n]){if(1!=this.data[n+1])break;n=E(this.data,n+2)}i=e(E(this.data,n+1))}return i}},{key:"nextStates",value:function(t){for(var e=this,s=[],i=function(t){if(65535==e.data[t]){if(1!=e.data[t+1])return n=t,1;t=E(e.data,t+2)}if(0==(1&e.data[t+2])){var i=e.data[t+1];s.some((function(t,e){return 1&e&&t==i}))||s.push(e.data[t],i)}n=t},n=this.stateSlot(t,1);!i(n);n+=3);return s}},{key:"configure",value:function(t){var e,n=Object.assign(Object.create(s.prototype),this);if(t.props&&(n.nodeSet=(e=this.nodeSet).extend.apply(e,(0,i.Z)(t.props))),t.top){var r=this.topRules[t.top];if(!r)throw new RangeError("Invalid top rule name ".concat(t.top));n.top=r}return t.tokenizers&&(n.tokenizers=this.tokenizers.map((function(e){var s=t.tokenizers.find((function(t){return t.from==e}));return s?s.to:e}))),t.specializers&&(n.specializers=this.specializers.slice(),n.specializerSpecs=this.specializerSpecs.map((function(e,s){var i=t.specializers.find((function(t){return t.from==e.external}));if(!i)return e;var r=Object.assign(Object.assign({},e),{external:i.to});return n.specializers[s]=L(r),r}))),t.contextTracker&&(n.context=t.contextTracker),t.dialect&&(n.dialect=this.parseDialect(t.dialect)),null!=t.strict&&(n.strict=t.strict),t.wrap&&(n.wrappers=n.wrappers.concat(t.wrap)),null!=t.bufferLength&&(n.bufferLength=t.bufferLength),n}},{key:"hasWrappers",value:function(){return this.wrappers.length>0}},{key:"getName",value:function(t){return this.termNames?this.termNames[t]:String(t<=this.maxNode&&this.nodeSet.types[t].name||t)}},{key:"eofTerm",get:function(){return this.maxNode+1}},{key:"topNode",get:function(){return this.nodeSet.types[this.top[1]]}},{key:"dynamicPrecedence",value:function(t){var e=this.dynamicPrecedences;return null==e?0:e[t]||0}},{key:"parseDialect",value:function(t){var e=Object.keys(this.dialects),s=e.map((function(){return!1}));if(t){var i,n=(0,h.Z)(t.split(" "));try{for(n.s();!(i=n.n()).done;){var r=i.value,a=e.indexOf(r);a>=0&&(s[a]=!0)}}catch(l){n.e(l)}finally{n.f()}}for(var o=null,u=0;u<e.length;u++)if(!s[u])for(var c,f=this.dialects[e[u]];65535!=(c=this.data[f++]);)(o||(o=new Uint8Array(this.maxTerm+1)))[c]=1;return new D(t,s,o)}}],[{key:"deserialize",value:function(t){return new s(t)}}]),s}(c._b);function E(t,e){return t[e]|t[e+1]<<16}function L(t){if(t.external){var e=t.extend?1:0;return function(s,i){return t.external(s,i)<<1|e}}return t.get}}}]);
//# sourceMappingURL=6468.0c1b557d.chunk.js.map