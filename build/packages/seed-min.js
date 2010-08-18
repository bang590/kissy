/*
Copyright 2010, KISSY UI Library v1.1.2
MIT Licensed
build time: Aug 18 12:44
*/
(function(n,g,o){if(n[g]===o)n[g]={};g=n[g];var q=n.document,v=location,r=function(b,c,d,e){if(!c||!b)return b;if(d===o)d=true;var h,j,m;if(e&&(m=e.length))for(h=0;h<m;h++){j=e[h];if(j in c)if(d||!(j in b))b[j]=c[j]}else for(j in c)if(d||!(j in b))b[j]=c[j];return b},w=false,s=[],u=false,y=/^#?([\w-]+)$/,z=0;r(g,{version:"1.1.2",_init:function(){this.Env={mods:{},_loadingQueue:{}};this.Config={debug:"",base:"http://a.tbcdn.cn/s/kissy/1.1.2/build/",timeout:10}},ready:function(b){u||this._bindReady();
w?b.call(n,this):s.push(b);return this},_bindReady:function(){var b=this,c=q.documentElement.doScroll,d=c?"onreadystatechange":"DOMContentLoaded",e=function(){b._fireReady()};u=true;if(q.readyState==="complete")return e();if(q.addEventListener){var h=function(){q.removeEventListener(d,h,false);e()};q.addEventListener(d,h,false);n.addEventListener("load",e,false)}else{var j=function(){if(q.readyState==="complete"){q.detachEvent(d,j);e()}};q.attachEvent(d,j);n.attachEvent("onload",e);if(n==n.top){var m=
function(){try{c("left");e()}catch(x){setTimeout(m,1)}};m()}}},_fireReady:function(){if(!w){w=true;if(s){for(var b,c=0;b=s[c++];)b.call(n,this);s=null}}},available:function(b,c){if((b=(b+"").match(y)[1])&&g.isFunction(c))var d=1,e=g.later(function(){if(q.getElementById(b)&&(c()||1)||++d>500)e.cancel()},40,true)},mix:r,merge:function(){var b={},c,d=arguments.length;for(c=0;c<d;++c)r(b,arguments[c]);return b},augment:function(){var b=arguments,c=b.length-2,d=b[0],e=b[c],h=b[c+1],j=1;if(!g.isArray(h)){e=
h;h=o;c++}if(!g.isBoolean(e)){e=o;c++}for(;j<c;j++)r(d.prototype,b[j].prototype||b[j],e,h);return d},extend:function(b,c,d,e){if(!c||!b)return b;var h=Object.prototype,j=c.prototype,m=function(x){function a(){}a.prototype=x;return new a}(j);b.prototype=m;m.constructor=b;b.superclass=j;if(c!==Object&&j.constructor===h.constructor)j.constructor=c;d&&r(m,d);e&&r(b,e);return b},namespace:function(){var b=arguments.length,c=null,d,e,h;for(d=0;d<b;++d){h=(""+arguments[d]).split(".");c=this;for(e=n[h[0]]===
c?1:0;e<h.length;++e)c=c[h[e]]=c[h[e]]||{}}return c},app:function(b,c){var d=n[b]||{};r(d,this,true,g._APP_MEMBERS);d._init();return r(n[b]=d,g.isFunction(c)?c():c)},log:function(b,c,d){if(g.Config.debug){if(d)b=d+": "+b;if(n.console!==o&&console.log)console[c&&console[c]?c:"log"](b)}},error:function(b){if(g.Config.debug)throw b;},guid:function(b){var c=z++ +"";return b?b+c:c}});g._init();g._APP_MEMBERS=["_init","namespace"];if(v&&(v.search||"").indexOf("ks-debug")!==-1)g.Config.debug=true})(window,
"KISSY");
(function(n,g,o){function q(a){var f=typeof a;return a===null||f!=="object"&&f!=="function"}function v(a){return s.slice.call(a)}var r=document,w=r.documentElement,s=Array.prototype,u=s.indexOf,y=s.lastIndexOf,z=s.filter,b=String.prototype.trim,c=Object.prototype.toString,d=encodeURIComponent,e=decodeURIComponent,h=/^\s+|\s+$/g,j=/^(\w+)\[\]$/,m=/\S/;g.mix(g,{isUndefined:function(a){return a===o},isBoolean:function(a){return typeof a==="boolean"},isString:function(a){return typeof a==="string"},isNumber:function(a){return typeof a===
"number"&&isFinite(a)},isPlainObject:function(a){return a&&c.call(a)==="[object Object]"&&!a.nodeType&&!a.setInterval},isEmptyObject:function(a){for(var f in a)return false;return true},isFunction:function(a){return c.call(a)==="[object Function]"},isArray:function(a){return c.call(a)==="[object Array]"},trim:b?function(a){return a==o?"":b.call(a)}:function(a){return a==o?"":a.toString().replace(h,"")},substitute:function(a,f,i){if(!g.isString(a)||!g.isPlainObject(f))return a;return a.replace(i||
/\\?\{([^{}]+)\}/g,function(k,l){if(k.charAt(0)==="\\")return k.slice(1);return f[l]!==o?f[l]:""})},each:function(a,f,i){var k,l=0,p=a.length,t=p===o||g.isFunction(a);i=i||n;if(t)for(k in a){if(f.call(i,a[k],k,a)===false)break}else for(k=a[0];l<p&&f.call(i,k,l,a)!==false;k=a[++l]);return a},indexOf:u?function(a,f){return u.call(f,a)}:function(a,f){for(var i=0,k=f.length;i<k;++i)if(f[i]===a)return i;return-1},lastIndexOf:y?function(a,f){return y.call(f,a)}:function(a,f){for(var i=f.length-1;i>=0;i--)if(f[i]===
a)break;return i},unique:function(a,f){f&&a.reverse();a=a.slice();for(var i=0,k,l;i<a.length;){for(l=a[i];(k=g.lastIndexOf(l,a))!==i;)a.splice(k,1);i+=1}f&&a.reverse();return a},inArray:function(a,f){return g.indexOf(a,f)>-1},makeArray:function(a){if(a===null||a===o)return[];if(g.isArray(a))return a;if(typeof a.length!=="number"||g.isString(a)||g.isFunction(a))return[a];return v(a)},filter:z?function(a,f,i){return z.call(a,f,i)}:function(a,f,i){var k=[];g.each(a,function(l,p,t){f.call(i,l,p,t)&&k.push(l)});
return k},param:function(a,f){if(!g.isPlainObject(a))return"";f=f||"&";var i=[],k,l;for(k in a){l=a[k];k=d(k);if(q(l))i.push(k,"=",d(l+""),f);else if(g.isArray(l)&&l.length)for(var p=0,t=l.length;p<t;++p)q(l[p])&&i.push(k,"[]=",d(l[p]+""),f)}i.pop();return i.join("")},unparam:function(a,f){if(typeof a!=="string"||(a=g.trim(a)).length===0)return{};var i={};a=a.split(f||"&");for(var k,l,p,t=0,A=a.length;t<A;++t){f=a[t].split("=");k=e(f[0]);try{l=e(f[1]||"")}catch(B){l=f[1]||""}if((p=k.match(j))&&p[1]){i[p[1]]=
i[p[1]]||[];i[p[1]].push(l)}else i[k]=l}return i},later:function(a,f,i,k,l){f=f||0;k=k||{};var p=a,t=g.makeArray(l),A;if(g.isString(a))p=k[a];p||g.error("method undefined");a=function(){p.apply(k,t)};A=i?setInterval(a,f):setTimeout(a,f);return{id:A,interval:i,cancel:function(){this.interval?clearInterval(A):clearTimeout(A)}}},clone:function(a){var f=a,i,k;if(a&&((i=g.isArray(a))||g.isPlainObject(a))){f=i?[]:{};for(k in a)if(a.hasOwnProperty(k))f[k]=g.clone(a[k])}return f},now:function(){return(new Date).getTime()},
globalEval:function(a){if(a&&m.test(a)){var f=r.getElementsByTagName("head")[0]||w,i=r.createElement("script");i.text=a;f.insertBefore(i,f.firstChild);f.removeChild(i)}}});try{v(w.childNodes)}catch(x){v=function(a){for(var f=[],i=a.length-1;i>=0;i--)f[i]=a[i];return f}}})(window,KISSY);
(function(n,g,o){var q=n.document,v=q.getElementsByTagName("head")[0]||q.documentElement,r=2,w=3,s=4,u=g.mix,y=q.createElement("script").readyState?function(b,c){var d=b.onreadystatechange;b.onreadystatechange=function(){var e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;d&&d();c.call(this)}}}:function(b,c){var d=b.onload;b.onload=function(){d&&d();c()}},z=/\.css(?:\?|$)/i;n={add:function(b,c,d){var e=this.Env.mods,h;if(g.isString(b)&&!d&&g.isPlainObject(c)){h={};h[b]=c;
b=h}if(g.isPlainObject(b)){g.each(b,function(j,m){j.name=m});u(e,b)}else{u(h=e[b]||{},{name:b,fn:c,status:r});u(e[b]=h,d);this._isAttached(h.requires)&&this._attachMod(h)}return this},use:function(b,c){b=b.replace(/\s+/g,"").split(",");var d=this,e=d.Env.mods,h=0,j=b.length,m,x;if(d._isAttached(b))c&&c(d);else{for(;h<j&&(m=e[b[h++]]);)m.status!==s&&d._attach(m,function(){if(!x&&d._isAttached(b)){x=true;c&&c(d)}});return d}},_attach:function(b,c){function d(){if(e._isAttached(h)){b.status===r&&e._attachMod(b);
b.status===s&&c()}}for(var e=this,h=b.requires||[],j=0,m=h.length;j<m;j++)e._attach(e.Env.mods[h[j]],d);e._buildPath(b);e._load(b,d)},_attachMod:function(b){b.fn&&b.fn(this);b.status=s},_isAttached:function(b){for(var c=this.Env.mods,d,e=(b=g.makeArray(b)).length-1;e>=0&&(d=c[b[e]]);e--)if(d.status!==s)return false;return true},_load:function(b,c){function d(){if(b.status!==w){b.status=r;c()}e()}function e(){j[h]=o;delete j.url}var h=b.fullpath,j=this.Env._loadingQueue,m;if((b.status||0)<1&&h){b.status=
1;j[h]=this.getScript(h,{success:d,error:function(){b.status=w;e()},charset:b.charset})}else if(b.status===1&&(m=j[h]))y(m,d);else{b.status=r;c()}},_buildPath:function(b){if(!b.fullpath&&b.path)b.fullpath=this.Config.base+b.path;if(b.fullpath&&this.Config.debug)b.fullpath=b.fullpath.replace(/-min/g,"")},getScript:function(b,c,d){var e=z.test(b),h=q.createElement(e?"link":"script"),j=c,m,x,a;if(g.isPlainObject(j)){c=j.success;m=j.error;x=j.timeout;d=j.charset}if(e){h.href=b;h.rel="stylesheet"}else{h.src=
b;h.async=true}if(d)h.charset=d;if(g.isFunction(c))e?c.call(h):y(h,function(){if(a){a.cancel();a=o}c.call(h)});if(g.isFunction(m))a=g.later(function(){a=o;m()},(x||this.Config.timeout)*1E3);v.insertBefore(h,v.firstChild);return h}};u(g,n);g.each(n,function(b,c){g._APP_MEMBERS.push(c)})})(window,KISSY);
(function(n){var g={core:{path:"packages/core-min.js",charset:"utf-8"}};n.each(["sizzle","datalazyload","flash","switchable","suggest"],function(o){g[o]={path:o+"/"+o+"-pkg-min.js",requires:["core"],charset:"utf-8"}});n.add(g)})(KISSY);
