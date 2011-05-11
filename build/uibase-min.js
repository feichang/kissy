/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("uibase/align",function(c,g){function b(){}function e(d,a){var i=c.require("node/node"),k=a.charAt(0),l=a.charAt(1),f,h,j;if(d){d=i.one(d);f=d.offset();i=d[0].offsetWidth;h=d[0].offsetHeight}else{f={left:g.scrollLeft(),top:g.scrollTop()};i=g.viewportWidth();h=g.viewportHeight()}j=f.left;f=f.top;if(k==="c")f+=h/2;else if(k==="b")f+=h;if(l==="c")j+=i/2;else if(l==="r")j+=i;return{left:j,top:f}}c.mix(b,{TL:"tl",TC:"tc",TR:"tr",CL:"cl",CC:"cc",CR:"cr",BL:"bl",BC:"bc",BR:"br"});b.ATTRS={align:{}};
b.prototype={_uiSetAlign:function(d){c.isPlainObject(d)&&this.align(d.node,d.points,d.offset)},align:function(d,a,i){var k,l=(this.get("view")||this).get("el");i=i||[0,0];k=l.offset();d=e(d,a[0]);a=e(l,a[1]);a=[a.left-d.left,a.top-d.top];k=[k.left-a[0]+ +i[0],k.top-a[1]+ +i[1]];this.set("x",k[0]);this.set("y",k[1])},center:function(d){this.set("align",{node:d,points:[b.CC,b.CC],offset:[0,0]})}};return b},{requires:["dom"]});
KISSY.add("uibase/base",function(c,g){function b(f){g.apply(this,arguments);for(var h=this.constructor;h;){if(f&&f[a]&&h.HTML_PARSER)if(f[a]=i.one(f[a])){var j=f[a],m=h.HTML_PARSER,n=void 0,o=void 0;for(n in m)if(m.hasOwnProperty(n)){o=m[n];if(c.isFunction(o))this.__set(n,o.call(this,j));else if(c.isString(o))this.__set(n,j.one(o));else c.isArray(o)&&o[0]&&this.__set(n,j.all(o[0]))}}h=h.superclass&&h.superclass.constructor}e(this,"initializer","constructor");f&&f.autoRender&&this.render()}function e(f,
h,j){for(var m=f.constructor,n=[],o,p,s,r;m;){r=[];if(s=m.__ks_exts)for(var q=0;q<s.length;q++)if(o=s[q]){if(j!="constructor")o=o.prototype.hasOwnProperty(j)?o.prototype[j]:null;o&&r.push(o)}if(m.prototype.hasOwnProperty(h)&&(p=m.prototype[h]))r.push(p);r.length&&n.push.apply(n,r.reverse());m=m.superclass&&m.superclass.constructor}for(q=n.length-1;q>=0;q--)n[q]&&n[q].call(f)}function d(f,h){if(!h)return f;for(var j in h)if(c.isObject(h[j])&&c.isObject(f[j]))d(f[j],h[j]);else j in f||(f[j]=h[j])}var a=
"srcNode",i=c.require("node/node"),k=c.require("base/attribute").__capitalFirst,l=function(){};b.HTML_PARSER={};b.ATTRS={render:{valueFn:function(){return document.body},setter:function(f){if(c.isString(f))return i.one(f)}},rendered:{value:false}};c.extend(b,g,{render:function(){if(!this.get("rendered")){this._renderUI();this.fire("renderUI");e(this,"renderUI","__renderUI");this.fire("afterRenderUI");this._bindUI();this.fire("bindUI");e(this,"bindUI","__bindUI");this.fire("afterBindUI");this._syncUI();
this.fire("syncUI");e(this,"syncUI","__syncUI");this.fire("afterSyncUI");this.set("rendered",true)}},_renderUI:l,renderUI:l,_bindUI:function(){var f=this,h=f.__attrs,j,m;for(j in h)if(h.hasOwnProperty(j)){m="_uiSet"+k(j);f[m]&&function(n,o){f.on("after"+k(n)+"Change",function(p){f[o](p.newVal,p)})}(j,m)}},bindUI:l,_syncUI:function(){var f=this.__getDefAttrs(),h;for(h in f)if(f.hasOwnProperty(h)){var j="_uiSet"+k(h);this[j]&&this.get(h)!==undefined&&this[j](this.get(h))}},syncUI:l,destroy:function(){for(var f=
this.constructor,h,j,m;f;){(j=f.prototype.destructor)&&j.apply(this);if(h=f.__ks_exts)for(m=h.length-1;m>=0;m--)(j=h[m]&&h[m].prototype.__destructor)&&j.apply(this);f=f.superclass&&f.superclass.constructor}this.fire("destroy");this.detach()}});b.create=function(f,h,j,m){function n(){b.apply(this,arguments)}if(c.isArray(f)){m=j;j=h;h=f;f=b}f=f||b;if(c.isObject(h)){m=j;j=h;h=[]}c.extend(n,f,j,m);if(h){n.__ks_exts=h;c.each(h,function(o){if(o){c.each(["ATTRS","HTML_PARSER"],function(p){if(o[p]){n[p]=
n[p]||{};d(n[p],o[p])}});c.augment(n,o,false)}})}return n};return b},{requires:["base","dom","node"]});KISSY.add("uibase/box",function(){function c(){}c.ATTRS={html:{view:true},width:{view:true},height:{view:true},elCls:{view:true},elStyle:{view:true},elAttrs:{view:true},elOrder:{},el:{getter:function(){return this.get("view")&&this.get("view").get("el")}}};c.prototype={};return c});
KISSY.add("uibase/boxrender",function(c,g){function b(){}function e(d,a,i,k,l,f){a=a||{};if(i)a.width=i;if(k)a.height=k;i="";for(var h in a)if(a.hasOwnProperty(h))i+=h+":"+a[h]+";";a="";for(var j in f)if(f.hasOwnProperty(j))a+=" "+j+"='"+f[j]+"' ";return"<"+l+(i?" style='"+i+"' ":"")+a+(d?" class='"+d+"' ":"")+">"}c.mix(b,{APPEND:1,INSERT:0});b.ATTRS={el:{setter:function(d){var a=c.require("node/node");if(c.isString(d))return a.one(d)}},elCls:{},elStyle:{},width:{},height:{},elTagName:{value:"div"},
elAttrs:{},elOrder:{value:1},html:{}};b.construct=e;b.HTML_PARSER={el:function(d){return d}};b.prototype={__renderUI:function(){var d=this.get("render"),a=this.get("el");d=new g(d);if(!a){a=new g(e(this.get("elCls"),this.get("elStyle"),this.get("width"),this.get("height"),this.get("elTagName"),this.get("elAttrs")));this.get("elOrder")?d.append(a):d.prepend(a);this.set("el",a)}},_uiSetElAttrs:function(d){this.get("el").attr(d)},_uiSetElCls:function(d){this.get("el").addClass(d)},_uiSetElStyle:function(d){this.get("el").css(d)},
_uiSetWidth:function(d){this.get("el").width(d)},_uiSetHeight:function(d){this.get("el").height(d)},_uiSetHtml:function(d){this.get("el").html(d)},__destructor:function(){var d=this.get("el");if(d){d.detach();d.remove()}}};return b},{requires:["node"]});KISSY.add("uibase/close",function(){function c(){}c.ATTRS={closable:{value:true,view:true}};c.prototype={__bindUI:function(){var g=this,b=g.get("view").get("closeBtn");b&&b.on("click",function(e){g.hide();e.halt()})}};return c});
KISSY.add("uibase/closerender",function(c){function g(){}g.ATTRS={closable:{value:true},closeBtn:{}};g.HTML_PARSER={closeBtn:function(b){return b.one("."+this.get("prefixCls")+"ext-close")}};g.prototype={_uiSetClosable:function(b){var e=this.get("closeBtn");if(e)b?e.css("display",""):e.css("display","none")},__renderUI:function(){var b=c.require("node/node"),e=this.get("closeBtn"),d=this.get("contentEl");if(!e&&d){e=(new b("<a tabindex='0' role='button' class='"+this.get("prefixCls")+"ext-close'><span class='"+
this.get("prefixCls")+"ext-close-x'>\u5173\u95ed</span></a>")).appendTo(d);this.set("closeBtn",e)}},__destructor:function(){var b=this.get("closeBtn");b&&b.detach()}};return g});
KISSY.add("uibase/constrain",function(c,g){function b(){}function e(a){var i;if(!a)return i;var k=this.get("view").get("el");if(a!==true){a=d.one(a);i=a.offset();c.mix(i,{maxLeft:i.left+a[0].offsetWidth-k[0].offsetWidth,maxTop:i.top+a[0].offsetHeight-k[0].offsetHeight})}else{a=document.documentElement.clientWidth;i={left:g.scrollLeft(),top:g.scrollTop()};c.mix(i,{maxLeft:i.left+a-k[0].offsetWidth,maxTop:i.top+g.viewportHeight()-k[0].offsetHeight})}return i}var d=c.require("node/node");b.ATTRS={constrain:{value:false}};
b.prototype={__renderUI:function(){var a=this,i=a.__getDefAttrs(),k=i.x;i=i.y;var l=k.setter,f=i.setter;k.setter=function(h){var j=l&&l(h);if(j===undefined)j=h;if(!a.get("constrain"))return j;h=e.call(a,a.get("constrain"));return Math.min(Math.max(j,h.left),h.maxLeft)};i.setter=function(h){var j=f&&f(h);if(j===undefined)j=h;if(!a.get("constrain"))return j;h=e.call(a,a.get("constrain"));return Math.min(Math.max(j,h.top),h.maxTop)};a.addAttr("x",k);a.addAttr("y",i)}};return b},{requires:["dom","node"]});
KISSY.add("uibase/contentbox",function(){function c(){}c.ATTRS={content:{view:true},contentEl:{getter:function(){return this.get("view")&&this.get("view").get("contentEl")}},contentElAttrs:{view:true},contentElStyle:{view:true},contentTagName:{view:true}};c.prototype={};return c});
KISSY.add("uibase/contentboxrender",function(c,g,b){function e(){}e.ATTRS={contentEl:{},contentElAttrs:{},contentElStyle:{},contentTagName:{value:"div"},content:{}};e.HTML_PARSER={contentEl:function(a){return a.one("."+this.get("prefixCls")+"contentbox")}};var d=b.construct;e.prototype={__renderUI:function(){var a=this.get("contentEl"),i=this.get("el");if(!a){var k=c.makeArray(i[0].childNodes);a=(new g(d(this.get("prefixCls")+"contentbox",this.get("contentElStyle"),undefined,undefined,this.get("contentTagName"),
this.get("contentElAttrs")))).appendTo(i);for(i=0;i<k.length;i++)a.append(k[i]);this.set("contentEl",a)}},_uiSetContentElAttrs:function(a){a&&this.get("contentEl").attr(a)},_uiSetContentElStyle:function(a){a&&this.get("contentEl").css(a)},_uiSetContent:function(a){if(c.isString(a))this.get("contentEl").html(a);else if(a!==undefined){this.get("contentEl").html("");this.get("contentEl").append(a)}}};return e},{requires:["node","./boxrender"]});
KISSY.add("uibase/drag",function(c){function g(){}g.ATTRS={handlers:{value:[]},draggable:{value:true}};g.prototype={_uiSetHandlers:function(b){b&&b.length>0&&this.__drag&&this.__drag.set("handlers",b)},__bindUI:function(){var b=c.require("dd/draggable"),e=this.get("view").get("el");if(this.get("draggable")&&b)this.__drag=new b({node:e,handlers:this.get("handlers")})},_uiSetDraggable:function(b){var e=this.__drag;if(e)if(b){e.detach("drag");e.on("drag",this._dragExtAction,this)}else e.detach("drag")},
_dragExtAction:function(b){this.set("xy",[b.left,b.top])},__destructor:function(){var b=this.__drag;b&&b.destroy()}};return g});KISSY.add("uibase/loading",function(){function c(){}c.prototype={loading:function(){this.get("view").loading()},unloading:function(){this.get("view").unloading()}};return c});
KISSY.add("uibase/loadingrender",function(c,g){function b(){}b.prototype={loading:function(){if(!this._loadingExtEl)this._loadingExtEl=(new g("<div class='"+this.get("prefixCls")+"ext-loading' style='position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);'>")).appendTo(this.get("el"));this._loadingExtEl.show()},unloading:function(){var e=this._loadingExtEl;e&&e.hide()}};return b},{requires:["node"]});
KISSY.add("uibase/mask",function(){function c(){}c.ATTRS={mask:{value:false}};c.prototype={_uiSetMask:function(g){if(g){this.on("show",this.get("view")._maskExtShow,this.get("view"));this.on("hide",this.get("view")._maskExtHide,this.get("view"))}else{this.detach("show",this.get("view")._maskExtShow,this.get("view"));this.detach("hide",this.get("view")._maskExtHide,this.get("view"))}}};return c},{requires:["ua"]});
KISSY.add("uibase/maskrender",function(c){function g(){var i=c.require("ua"),k=c.require("node/node"),l=c.require("dom");e=(new k("<div class='"+this.get("prefixCls")+"ext-mask'>")).prependTo(document.body);e.css({position:"absolute",left:0,top:0,width:i.ie==6?l.docWidth():"100%",height:l.docHeight()});if(i.ie==6)d=(new k("<iframe style='position:absolute;left:0;top:0;background:red;width:"+l.docWidth()+"px;height:"+l.docHeight()+"px;filter:alpha(opacity=0);z-index:-1;'>")).insertBefore(e);c.Event.on(window,
"resize",function(){var f={width:i.ie==6?l.docWidth():"100%",height:l.docHeight()};d&&d.css(f);e.css(f)});e.unselectable();e.on("mousedown click",function(f){f.halt()})}function b(){}var e,d,a=0;b.prototype={_maskExtShow:function(){e||g.call(this);e.css({"z-index":this.get("zIndex")-1});d&&d.css({"z-index":this.get("zIndex")-1});a++;e.css("display","");d&&d.css("display","")},_maskExtHide:function(){a--;if(a<=0)a=0;if(!a){e&&e.css("display","none");d&&d.css("display","none")}}};return b},{requires:["ua"]});
KISSY.add("uibase/position",function(c){function g(){}g.ATTRS={x:{view:true,valueFn:function(){return this.get("view")&&this.get("view").get("x")}},y:{view:true,valueFn:function(){return this.get("view")&&this.get("view").get("y")}},xy:{setter:function(b){var e=c.makeArray(b);if(e.length){e[0]&&this.set("x",e[0]);e[1]&&this.set("y",e[1])}return b},getter:function(){return[this.get("x"),this.get("y")]}},zIndex:{view:true},visible:{}};g.prototype={_uiSetVisible:function(b){this.get("view").set("visible",
b);this.fire(b?"show":"hide")},move:function(b,e){if(c.isArray(b)){e=b[1];b=b[0]}this.set("xy",[b,e])},show:function(){this.render();this.set("visible",true)},hide:function(){this.set("visible",false)}};return g});
KISSY.add("uibase/positionrender",function(){function c(){}c.ATTRS={x:{valueFn:function(){return this.get("el")&&this.get("el").offset().left}},y:{valueFn:function(){return this.get("el")&&this.get("el").offset().top}},zIndex:{value:9999},visible:{}};c.prototype={__renderUI:function(){var g=this.get("el");g.addClass(this.get("prefixCls")+"ext-position");g.css({visibility:"hidden",display:"",left:-9999,top:-9999,bottom:"",right:""})},_uiSetZIndex:function(g){this.get("el").css("z-index",g)},_uiSetX:function(g){this.get("el").offset({left:g})},
_uiSetY:function(g){this.get("el").offset({top:g})},_uiSetVisible:function(g){this.get("el").css("visibility",g?"visible":"hidden")},show:function(){this.render();this.set("visible",true)},hide:function(){this.set("visible",false)}};return c});
KISSY.add("uibase/resize",function(c){function g(){}g.ATTRS={resize:{value:{}}};g.prototype={__destructor:function(){self.resizer&&self.resizer.destroy()},_uiSetResize:function(b){var e=c.require("resizable");if(e){this.resizer&&this.resizer.destroy();b.node=this.get("view").get("el");b.autoRender=true;if(b.handlers)this.resizer=new e(b)}}};return g});
KISSY.add("uibase/shimrender",function(c){function g(){}g.ATTRS={shim:{value:true}};g.prototype={_uiSetShim:function(b){var e=c.require("node/node"),d=this.get("el");if(b&&!this.__shimEl){this.__shimEl=new e("<iframe style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth);top: 0;opacity: 0;filter: alpha(opacity=0);left: 0;z-index: -1;height: expression(this.parentNode.offsetHeight);'>");d.prepend(this.__shimEl)}else if(!b&&this.__shimEl){this.__shimEl.remove();delete this.__shimEl}}};
return g});KISSY.add("uibase/stdmod",function(){function c(){}c.ATTRS={header:{getter:function(){return this.get("view")&&this.get("view").get("header")}},body:{getter:function(){return this.get("view")&&this.get("view").get("body")}},footer:{getter:function(){return this.get("view")&&this.get("view").get("footer")}},bodyStyle:{view:true},footerStyle:{view:true},headerStyle:{view:true},headerContent:{view:true},bodyContent:{view:true},footerContent:{view:true}};c.prototype={};return c});
KISSY.add("uibase/stdmodrender",function(c,g){function b(){}function e(a,i){var k=a.get("contentEl"),l=a.get(i);if(!l){l=(new g("<div class='"+a.get("prefixCls")+d+i+"'>")).appendTo(k);a.set(i,l)}}var d="stdmod-";b.ATTRS={header:{},body:{},footer:{},bodyStyle:{},footerStyle:{},headerStyle:{},headerContent:{},bodyContent:{},footerContent:{}};b.HTML_PARSER={header:function(a){return a.one("."+this.get("prefixCls")+d+"header")},body:function(a){return a.one("."+this.get("prefixCls")+d+"body")},footer:function(a){return a.one("."+
this.get("prefixCls")+d+"footer")}};b.prototype={_setStdModContent:function(a,i){if(c.isString(i))this.get(a).html(i);else{this.get(a).html("");this.get(a).append(i)}},_uiSetBodyStyle:function(a){this.get("body").css(a)},_uiSetHeaderStyle:function(a){this.get("header").css(a)},_uiSetFooterStyle:function(a){this.get("footer").css(a)},_uiSetBodyContent:function(a){this._setStdModContent("body",a)},_uiSetHeaderContent:function(a){this._setStdModContent("header",a)},_uiSetFooterContent:function(a){this._setStdModContent("footer",
a)},__renderUI:function(){e(this,"header");e(this,"body");e(this,"footer")}};return b},{requires:["node"]});
KISSY.add("uibase",function(c,g,b,e,d,a,i,k,l,f,h,j,m,n,o,p,s,r,q,t,u){a.Render=i;j.Render=m;n.Render=o;p.Render=s;t.Render=u;e.Render=d;l.Render=f;c.mix(g,{Align:b,Box:e,Close:a,Contrain:k,Contentbox:l,Drag:h,Loading:j,Mask:n,Position:p,Shim:{Render:r},Resize:q,StdMod:t});return c.UIBase=g},{requires:["uibase/base","uibase/align","uibase/box","uibase/boxrender","uibase/close","uibase/closerender","uibase/constrain","uibase/contentbox","uibase/contentboxrender","uibase/drag","uibase/loading","uibase/loadingrender",
"uibase/mask","uibase/maskrender","uibase/position","uibase/positionrender","uibase/shimrender","uibase/resize","uibase/stdmod","uibase/stdmodrender"]});
