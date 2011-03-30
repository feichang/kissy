/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("dom/attr",function(k,a,o,g){var x=document.documentElement,A=!x.hasAttribute,l=x.textContent!==g?"textContent":"innerText",i=a._isElementNode,m=/^(?:href|src|style)/,q=/^(?:href|src|colspan|rowspan)/,j=/\r/g,r=/^(?:radio|checkbox)/,s={readonly:"readOnly"},w={val:1,css:1,html:1,text:1,data:1,width:1,height:1,offset:1};A&&k.mix(s,{"for":"htmlFor","class":"className"});var y={tabindex:{getter:function(p){return p.tabIndex},setter:function(p,c){if(isNaN(parseInt(c))){p.removeAttribute("tabindex");
p.removeAttribute("tabIndex")}else p.tabIndex=c}},style:{getter:function(p){return p.style.cssText},setter:function(p,c){p.style.cssText=c}},checked:{setter:function(p,c){p.checked=!!c}},disabled:{setter:function(p,c){p.disabled=!!c}}};k.mix(a,{attr:function(p,c,b,d){if(k.isPlainObject(c)){d=b;for(var f in c)a.attr(p,f,c[f],d)}else if(c=k.trim(c)){c=c.toLowerCase();if(d&&w[c])return a[c](p,b);c=s[c]||c;var e=y[c];if(b===g){p=a.get(p);if(!i(p))return g;if(e&&e.getter)return e.getter(p);var n;m.test(c)||
(n=p[c]);if(n===g)n=p.getAttribute(c);if(A)if(q.test(c))n=p.getAttribute(c,2);return n===null?g:n}k.each(a.query(p),function(v){if(i(v))e&&e.setter?e.setter(v,b):v.setAttribute(c,""+b)})}},removeAttr:function(p,c){c=c.toLowerCase();k.each(a.query(p),function(b){if(i(b)){a.attr(b,c,"");b.removeAttribute(c)}})},hasAttr:A?function(p,c){c=c.toLowerCase();var b=a.get(p).getAttributeNode(c);return!!(b&&b.specified)}:function(p,c){c=c.toLowerCase();return a.get(p).hasAttribute(c)},val:function(p,c){if(c===
g){var b=a.get(p);if(!i(b))return g;if(b&&b.nodeName.toUpperCase()==="option".toUpperCase())return(b.attributes.value||{}).specified?b.value:b.text;if(b&&b.nodeName.toUpperCase()==="select".toUpperCase()){var d=b.selectedIndex,f=b.options;if(d<0)return null;else if(b.type==="select-one")return a.val(f[d]);b=[];for(var e=0,n=f.length;e<n;++e)f[e].selected&&b.push(a.val(f[e]));return b}if(o.webkit&&r.test(b.type))return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(j,"")}k.each(a.query(p),
function(v){if(v&&v.nodeName.toUpperCase()==="select".toUpperCase()){if(k.isNumber(c))c+="";var h=k.makeArray(c),t=v.options,u;e=0;for(n=t.length;e<n;++e){u=t[e];u.selected=k.inArray(a.val(u),h)}if(!h.length)v.selectedIndex=-1}else if(i(v))v.value=c})},text:function(p,c){if(c===g){var b=a.get(p);if(i(b))return b[l]||"";else if(a._nodeTypeIs(b,3))return b.nodeValue}else k.each(a.query(p),function(d){if(i(d))d[l]=c;else if(a._nodeTypeIs(d,3))d.nodeValue=c})}});return a},{requires:["dom/base","ua"]});
KISSY.add("dom/base",function(k,a){function o(g,x){return g&&g.nodeType===x}return{_isElementNode:function(g){return o(g,1)},_isKSNode:function(g){var x=k.require("node/node");return x&&o(g,x.TYPE)},_getWin:function(g){return g&&"scrollTo"in g&&g.document?g:o(g,9)?g.defaultView||g.parentWindow:g===a?window:false},_nodeTypeIs:o}});
KISSY.add("dom/class",function(k,a,o){function g(l,i,m,q){if(!(i=k.trim(i)))return q?false:o;l=a.query(l);var j=0,r=l.length;i=i.split(x);for(var s;j<r;j++){s=l[j];if(a._isElementNode(s)){s=m(s,i,i.length);if(s!==o)return s}}if(q)return false;return o}var x=/[\.\s]\s*\.?/,A=/[\n\t]/g;k.mix(a,{hasClass:function(l,i){return g(l,i,function(m,q,j){if(m=m.className){m=" "+m+" ";for(var r=0,s=true;r<j;r++)if(m.indexOf(" "+q[r]+" ")<0){s=false;break}if(s)return true}},true)},addClass:function(l,i){g(l,i,
function(m,q,j){var r=m.className;if(r){var s=" "+r+" ";r=r;for(var w=0;w<j;w++)if(s.indexOf(" "+q[w]+" ")<0)r+=" "+q[w];m.className=k.trim(r)}else m.className=i},o)},removeClass:function(l,i){g(l,i,function(m,q,j){var r=m.className;if(r)if(j){r=(" "+r+" ").replace(A," ");for(var s=0,w;s<j;s++)for(w=" "+q[s]+" ";r.indexOf(w)>=0;)r=r.replace(w," ");m.className=k.trim(r)}else m.className=""},o)},replaceClass:function(l,i,m){a.removeClass(l,i);a.addClass(l,m)},toggleClass:function(l,i,m){var q=k.isBoolean(m),
j;g(l,i,function(r,s,w){for(var y=0,p;y<w;y++){p=s[y];j=q?!m:a.hasClass(r,p);a[j?"removeClass":"addClass"](r,p)}},o)}});return a},{requires:["dom/base"]});
KISSY.add("dom/create",function(k,a,o,g){function x(h){var t=h.cloneNode(true);if(o.ie<8)t.innerHTML=h.innerHTML;return t}function A(h,t,u,z){if(u){var C=k.guid("ks-tmp-"),F=RegExp(y);t+='<span id="'+C+'"></span>';k.available(C,function(){var B=a.get("head"),D,H,G,I,K,E;for(F.lastIndex=0;D=F.exec(t);)if((G=(H=D[1])?H.match(c):false)&&G[2]){D=i.createElement("script");D.src=G[2];if((I=H.match(b))&&I[2])D.charset=I[2];D.async=true;B.appendChild(D)}else if((E=D[2])&&E.length>0)k.globalEval(E);(K=i.getElementById(C))&&
a.remove(K);k.isFunction(z)&&z()});l(h,t)}else{l(h,t);k.isFunction(z)&&z()}}function l(h,t){t=(t+"").replace(y,"");try{h.innerHTML=t}catch(u){for(;h.firstChild;)h.removeChild(h.firstChild);t&&h.appendChild(a.create(t))}}var i=document,m=o.ie,q=a._nodeTypeIs,j=a._isElementNode,r=a._isKSNode,s=i.createElement("div"),w=/<(\w+)/,y=/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig,p=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,c=/\ssrc=(['"])(.*?)\1/i,b=/\scharset=(['"])(.*?)\1/i;k.mix(a,{create:function(h,
t,u){if(q(h,1)||q(h,3))return x(h);if(r(h))return x(h[0]);if(!(h=k.trim(h)))return null;var z=null;z=a._creators;var C,F="div",B;if(C=p.exec(h))z=(u||i).createElement(C[1]);else{if((C=w.exec(h))&&(B=C[1])&&k.isFunction(z[B=B.toLowerCase()]))F=B;h=z[F](h,u).childNodes;if(h.length===1)u=h[0].parentNode.removeChild(h[0]);else{h=h;B=u||i;u=null;if(h&&(h.push||h.item)&&h[0]){B=B||h[0].ownerDocument;u=B.createDocumentFragment();if(h.item)h=k.makeArray(h);B=0;for(z=h.length;B<z;B++)u.appendChild(h[B])}u=
u}z=u}u=z;j(u)&&k.isPlainObject(t)&&a.attr(u,t,true);return u},_creators:{div:function(h,t){var u=t?t.createElement("div"):s;u.innerHTML=h;return u}},html:function(h,t,u,z){if(t===g){h=a.get(h);if(j(h))return h.innerHTML}else k.each(a.query(h),function(C){j(C)&&A(C,t,u,z)})},remove:function(h){k.each(a.query(h),function(t){j(t)&&t.parentNode&&t.parentNode.removeChild(t)})}});if(m||o.gecko||o.webkit){var d=a._creators,f=a.create,e=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,n={option:"select",
td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"},v;for(v in n)(function(h){d[v]=function(t,u){return f("<"+h+">"+t+"</"+h+">",null,u)}})(n[v]);if(m){d.script=function(h,t){var u=t?t.createElement("div"):s;u.innerHTML="-"+h;u.removeChild(u.firstChild);return u};if(m<8)d.tbody=function(h,t){var u=f("<table>"+h+"</table>",null,t),z=u.children.tags("tbody")[0];u.children.length>1&&z&&!e.test(h)&&z.parentNode.removeChild(z);return u}}k.mix(d,{optgroup:d.option,th:d.td,thead:d.tbody,tfoot:d.tbody,
caption:d.tbody,colgroup:d.tbody})}return a},{requires:["dom/base","ua"]});
KISSY.add("dom/data",function(k,a,o){var g=window,x="_ks_data_"+k.now(),A={},l={},i={EMBED:1,OBJECT:1,APPLET:1};k.mix(a,{data:function(m,q,j){if(k.isPlainObject(q))for(var r in q)a.data(m,r,q[r]);else if(j===o){m=a.get(m);var s;if(!(!m||i[m.nodeName])){if(m==g)m=l;s=(r=m&&m.nodeType)?A:m;m=s[r?m[x]:x];if(k.isString(q)&&m)return m[q];return m}}else a.query(m).each(function(w){if(!(!w||i[w.nodeName])){if(w==g)w=l;var y=A,p;if(w&&w.nodeType){if(!(p=w[x]))p=w[x]=k.guid()}else{p=x;y=w}if(q&&j!==o){y[p]||
(y[p]={});y[p][q]=j}}})},removeData:function(m,q){a.query(m).each(function(j){if(j){if(j==g)j=l;var r,s=A,w,y=j&&j.nodeType;if(y)r=j[x];else{s=j;r=x}if(r){w=s[r];if(q){if(w){delete w[q];k.isEmptyObject(w)&&a.removeData(j)}}else{if(y)j.removeAttribute&&j.removeAttribute(x);else try{delete j[x]}catch(p){}y&&delete s[r]}}}})}});return a},{requires:["dom/base"]});
KISSY.add("dom/insertion",function(k,a){k.mix(a,{insertBefore:function(o,g){if((o=a.get(o))&&(g=a.get(g))&&g.parentNode)g.parentNode.insertBefore(o,g);return o},insertAfter:function(o,g){if((o=a.get(o))&&(g=a.get(g))&&g.parentNode)g.nextSibling?g.parentNode.insertBefore(o,g.nextSibling):g.parentNode.appendChild(o);return o},append:function(o,g){if((o=a.get(o))&&(g=a.get(g)))g.appendChild&&g.appendChild(o)},prepend:function(o,g){if((o=a.get(o))&&(g=a.get(g)))g.firstChild?a.insertBefore(o,g.firstChild):
g.appendChild(o)}});return a},{requires:["dom/base"]});
KISSY.add("dom/offset",function(k,a,o,g){function x(f){var e=0,n=0,v=q(f[w]);if(f[d]){f=f[d]();e=f[y];n=f[p];if(o.mobile!=="apple"){e+=a[c](v);n+=a[b](v)}}return{left:e,top:n}}var A=window,l=document,i=a._isElementNode,m=a._nodeTypeIs,q=a._getWin,j=l.compatMode==="CSS1Compat",r=Math.max,s=parseInt,w="ownerDocument",y="left",p="top",c="scrollLeft",b="scrollTop",d="getBoundingClientRect";k.mix(a,{offset:function(f,e){if(!(f=a.get(f))||!f[w])return null;if(e===g)return x(f);var n=f;if(a.css(n,"position")===
"static")n.style.position="relative";var v=x(n),h={},t,u;for(u in e){t=s(a.css(n,u),10)||0;h[u]=t+e[u]-v[u]}a.css(n,h)},scrollIntoView:function(f,e,n,v){if((f=a.get(f))&&f[w]){v=v===g?true:!!v;n=n===g?true:!!n;if(!e||e===A)return f.scrollIntoView(n);e=a.get(e);if(m(e,9))e=q(e);var h=e&&"scrollTo"in e&&e.document,t=a.offset(f),u=h?{left:a.scrollLeft(e),top:a.scrollTop(e)}:a.offset(e),z={left:t[y]-u[y],top:t[p]-u[p]};t=h?a.viewportHeight(e):e.clientHeight;u=h?a.viewportWidth(e):e.clientWidth;var C=
a[c](e),F=a[b](e),B=C+u,D=F+t,H=f.offsetHeight;f=f.offsetWidth;var G=z.left+C-(s(a.css(e,"borderLeftWidth"))||0);z=z.top+F-(s(a.css(e,"borderTopWidth"))||0);var I=G+f,K=z+H,E,J;if(H>t||z<F||n)E=z;else if(K>D)E=K-t;if(v)if(f>u||G<C||n)J=G;else if(I>B)J=I-u;if(h){if(E!==g||J!==g)e.scrollTo(J,E)}else{if(E!==g)e[b]=E;if(J!==g)e[c]=J}}}});k.each(["Left","Top"],function(f,e){var n="scroll"+f;a[n]=function(v){var h=0,t=q(v),u;if(t&&(u=t.document))h=t[e?"pageYOffset":"pageXOffset"]||u.documentElement[n]||
u.body[n];else if(i(v=a.get(v)))h=v[n];return h}});k.each(["Width","Height"],function(f){a["doc"+f]=function(e){e=e||l;return r(j?e.documentElement["scroll"+f]:e.body["scroll"+f],a["viewport"+f](e))};a["viewport"+f]=function(e){var n="inner"+f;e=q(e);var v=e.document;return n in e?e[n]:j?v.documentElement["client"+f]:v.body["client"+f]}});return a},{requires:["dom/base","ua"]});
KISSY.add("dom/selector",function(k,a,o){function g(c,b){var d,f,e=[],n;f=k.require("sizzle");b=x(b);if(k.isString(c)){c=k.trim(c);if(y.test(c)){if(f=A(c.slice(1),b))e=[f]}else if(d=p.exec(c)){f=d[1];n=d[2];d=d[3];if(b=f?A(f,b):b)if(d)if(!f||c.indexOf(j)!==-1)e=i(d,n,b);else{if((f=A(f,b))&&a.hasClass(f,d))e=[f]}else if(n)e=l(n,b)}else if(f)e=f(c,b);else m(c)}else if(c&&(c[s]||c[w]))e=c[s]?[c[s]()]:c[w]();else if(c&&(k.isArray(c)||c&&!c.nodeType&&c.item&&!c.setTimeout))e=c;else if(c)e=[c];if(e&&!e.nodeType&&
e.item&&!e.setTimeout)e=k.makeArray(e);e.each=function(v,h){return k.each(e,v,h)};return e}function x(c){if(c===o)c=q;else if(k.isString(c)&&y.test(c))c=A(c.slice(1),q);else if(c&&c.nodeType!==1&&c.nodeType!==9)c=null;return c}function A(c,b){if(b.nodeType!==9)b=b.ownerDocument;return b.getElementById(c)}function l(c,b){return b.getElementsByTagName(c)}function i(c,b,d){d=c=d.getElementsByClassName(c);var f=0,e=0,n=c.length,v;if(b&&b!==r){d=[];for(b=b.toUpperCase();f<n;++f){v=c[f];if(v.tagName===
b)d[e++]=v}}return d}function m(c){k.error("Unsupported selector: "+c)}var q=document,j=" ",r="*",s="getDOMNode",w=s+"s",y=/^#[\w-]+$/,p=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var c=q.createElement("div");c.appendChild(q.createComment(""));if(c.getElementsByTagName(r).length>0)l=function(b,d){var f=d.getElementsByTagName(b);if(b===r){for(var e=[],n=0,v=0,h;h=f[n++];)if(h.nodeType===1)e[v++]=h;f=e}return f}})();q.getElementsByClassName||(i=q.querySelectorAll?function(c,b,d){return d.querySelectorAll((b?
b:"")+"."+c)}:function(c,b,d){b=d.getElementsByTagName(b||r);d=[];var f=0,e=0,n=b.length,v,h;for(c=j+c+j;f<n;++f){v=b[f];if((h=v.className)&&(j+h+j).indexOf(c)>-1)d[e++]=v}return d});k.mix(a,{query:g,get:function(c,b){return g(c,b)[0]||null},filter:function(c,b,d){d=g(c,d);var f=k.require("sizzle"),e,n,v,h=[];if(k.isString(b)&&(e=p.exec(b))&&!e[1]){n=e[2];v=e[3];b=function(t){return!(n&&t.tagName!==n.toUpperCase()||v&&!a.hasClass(t,v))}}if(k.isFunction(b))h=k.filter(d,b);else if(b&&f)h=f._filter(c,
b+"");else m(b);return h},test:function(c,b,d){c=g(c,d);return c.length&&a.filter(c,b,d).length===c.length}});return a},{requires:["dom/base"]});
KISSY.add("dom/style-ie",function(k,a,o,g){if(!o.ie)return a;k=document;o=k.documentElement;var x=a._CUSTOM_STYLES,A=/^-?\d+(?:px)?$/i,l=/^-?\d/,i=/^(?:width|height)$/;try{if(o.style.opacity===g&&o.filters)x.opacity={get:function(q){var j=100;try{j=q.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(r){try{j=q.filters("alpha").opacity}catch(s){}}return j/100+""},set:function(q,j){var r=q.style,s=(q.currentStyle||0).filter||"";r.zoom=1;if(s)s=s.replace(/alpha\(opacity=.+\)/ig,"");if(s&&j!=
1)s+=", ";r.filter=s+(j!=1?"alpha(opacity="+j*100+")":"")}}}catch(m){}if(!(k.defaultView||{}).getComputedStyle&&o.currentStyle)a._getComputedStyle=function(q,j){var r=q.style,s=q.currentStyle[j];if(i.test(j))s=a[j](q)+"px";else if(!A.test(s)&&l.test(s)){var w=r.left,y=q.runtimeStyle.left;q.runtimeStyle.left=q.currentStyle.left;r.left=j==="fontSize"?"1em":s||0;s=r.pixelLeft+"px";r.left=w;q.runtimeStyle.left=y}return s};return a},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(k,a,o,g){function x(b,d){var f=a.get(b),e=d===m?f.offsetWidth:f.offsetHeight;k.each(d===m?["Left","Right"]:["Top","Bottom"],function(n){e-=parseFloat(a._getComputedStyle(f,"padding"+n))||0;e-=parseFloat(a._getComputedStyle(f,"border"+n+"Width"))||0});return e}function A(b,d,f){var e=f;if(f===q&&r.test(d)){e=0;if(k.inArray(a.css(b,"position"),["absolute","fixed"])){f=b[d==="left"?"offsetLeft":"offsetTop"];if(o.ie===8||o.opera)f-=j(a.css(b.offsetParent,"border-"+d+"-width"))||
0;e=f-(j(a.css(b,"margin-"+d))||0)}}return e}var l=document,i=l.documentElement,m="width",q="auto",j=parseInt,r=/^(?:left|top)/,s=/^(?:width|height|top|left|right|bottom|margin|padding)/i,w=/-([a-z])/ig,y=function(b,d){return d.toUpperCase()},p={},c={};k.mix(a,{_CUSTOM_STYLES:p,_getComputedStyle:function(b,d){var f="",e=b.ownerDocument;if(b.style)f=e.defaultView.getComputedStyle(b,null)[d];return f},css:function(b,d,f){if(k.isPlainObject(d))for(var e in d)a.css(b,e,d[e]);else{if(d.indexOf("-")>0)d=
d.replace(w,y);d=p[d]||d;if(f===g){b=a.get(b);e="";if(b&&b.style){e=d.get?d.get(b):b.style[d];if(e===""&&!d.get)e=A(b,d,a._getComputedStyle(b,d))}return e===g?"":e}else{if(f===null||f==="")f="";else if(!isNaN(new Number(f))&&s.test(d))f+="px";(d===m||d==="height")&&parseFloat(f)<0||k.each(a.query(b),function(n){if(n&&n.style){d.set?d.set(n,f):n.style[d]=f;if(f==="")n.style.cssText||n.removeAttribute("style")}})}}},width:function(b,d){if(d===g)return x(b,m);else a.css(b,m,d)},height:function(b,d){if(d===
g)return x(b,"height");else a.css(b,"height",d)},show:function(b){a.query(b).each(function(d){if(d){d.style.display=a.data(d,"display")||"";if(a.css(d,"display")==="none"){var f=d.tagName,e=c[f],n;if(!e){n=l.createElement(f);l.body.appendChild(n);e=a.css(n,"display");a.remove(n);c[f]=e}a.data(d,"display",e);d.style.display=e}}})},hide:function(b){a.query(b).each(function(d){if(d){var f=d.style,e=f.display;if(e!=="none"){e&&a.data(d,"display",e);f.display="none"}}})},toggle:function(b){a.query(b).each(function(d){if(d)d.style.display===
"none"?a.show(d):a.hide(d)})},addStyleSheet:function(b,d){var f;if(d&&(d=d.replace("#","")))f=a.get("#"+d);if(!f){f=a.create("<style>",{id:d});a.get("head").appendChild(f);if(f.styleSheet)f.styleSheet.cssText=b;else f.appendChild(l.createTextNode(b))}},unselectable:function(b){a.query(b).each(function(d){if(d)if(o.gecko)d.style.MozUserSelect="none";else if(o.webkit)d.style.KhtmlUserSelect="none";else if(o.ie||o.opera){var f=0,e=d.getElementsByTagName("*");for(d.setAttribute("unselectable","on");d=
e[f++];)switch(d.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:d.setAttribute("unselectable","on")}}})}});if(i.style.cssFloat!==g)p["float"]="cssFloat";else if(i.style.styleFloat!==g)p["float"]="styleFloat";return a},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(k,a,o){function g(l,i,m,q){if(!(l=a.get(l)))return null;if(i===o)i=1;var j=null,r,s;if(k.isNumber(i)&&i>=0){if(i===0)return l;r=0;s=i;i=function(){return++r===s}}for(;l=l[m];)if(A(l)&&(!i||a.test(l,i))&&(!q||q(l))){j=l;break}return j}function x(l,i,m){var q=[];var j=l=a.get(l);if(l&&m)j=l.parentNode;if(j){m=0;for(j=j.firstChild;j;j=j.nextSibling)if(A(j)&&j!==l&&(!i||a.test(j,i)))q[m++]=j}return q}var A=a._isElementNode;k.mix(a,{parent:function(l,i){return g(l,i,
"parentNode",function(m){return m.nodeType!=11})},next:function(l,i){return g(l,i,"nextSibling",o)},prev:function(l,i){return g(l,i,"previousSibling",o)},siblings:function(l,i){return x(l,i,true)},children:function(l,i){return x(l,i,o)},contains:function(l,i){var m=false;if((l=a.get(l))&&(i=a.get(i)))if(l.contains){if(i.nodeType===3){i=i.parentNode;if(i===l)return true}if(i)return l.contains(i)}else if(l.compareDocumentPosition)return!!(l.compareDocumentPosition(i)&16);else for(;!m&&(i=i.parentNode);)m=
i==l;return m}});return a},{requires:["dom/base"]});KISSY.add("dom",function(k,a){return a},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});
