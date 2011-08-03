/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 3 11:15
*/
KISSY.add("overlay/overlayrender",function(f,b,h,c){function a(d){return f.require("uibase/"+d)}return h.create(c.Render,[a("contentboxrender"),a("positionrender"),a("loadingrender"),b.ie==6?a("shimrender"):null,a("maskrender")],{renderUI:function(){this.get("el").addClass(this.get("prefixCls")+"overlay")}},{ATTRS:{elBefore:{valueFn:function(){return f.one(this.get("render")[0].firstChild)}},focusable:{value:false},visibleMode:{value:"visibility"}}})},{requires:["ua","uibase","component"]});
KISSY.add("overlay/ariarender",function(f,b){function h(){}function c(e){var g=e.keyCode,i=this.get("el");if(g==d){g=a(e.target);var j=this.__ariaArchor;if(g.equals(i)&&e.shiftKey){j[0].focus();e.halt()}else if(g.equals(j)&&!e.shiftKey){i[0].focus();e.halt()}else if(g.equals(i)||i.contains(g))return;e.halt()}}var a=b.all,d=9;h.prototype={__renderUI:function(){var e=this.get("el"),g=this.get("header");if(this.get("aria")){e.attr("role","dialog");e.attr("tabindex",0);g.attr("id")||g.attr("id",f.guid("ks-dialog-header"));
e.attr("aria-labelledby",g.attr("id"));this.__ariaArchor=a("<div tabindex='0'></div>").appendTo(e)}},__bindUI:function(){var e=this;if(e.get("aria")){var g=e.get("el"),i;e.on("afterVisibleChange",function(j){if(j.newVal){i=document.activeElement;g[0].focus();g.attr("aria-hidden","false");g.on("keydown",c,e)}else{g.attr("aria-hidden","true");g.detach("keydown",c,e);i&&i.focus()}})}}};return h},{requires:["node"]});
KISSY.add("overlay/aria",function(){function f(){}f.ATTRS={aria:{view:true}};f.prototype={__bindUI:function(){var b=this,h=b.get("el");b.get("aria")&&h.on("keydown",function(c){if(c.keyCode===27){b.hide();c.halt()}})}};return f});
KISSY.add("overlay/effect",function(f){function b(){}var h={fade:["Out","In"],slide:["Up","Down"]};b.ATTRS={effect:{value:{effect:"none",duration:0.5,easing:"easeOut"},setter:function(c){var a=c.effect;if(f.isString(a)&&!h[a])c.effect="none"}}};b.prototype={__bindUI:function(){var c=this;c.on("afterVisibleChange",function(a){var d=c.get("effect").effect;if(d!="none"){var e=a.newVal,g=c.get("el");g.stop(true);g.css("visibility","visible");g[d+h[d][Number(e)]](c.get("effect").duration,function(){g.css("display",
"block");g.css("visibility",e?"visible":"hidden")},c.get("effect").easing,false)}})}};return b},{requires:["anim"]});KISSY.add("overlay/overlay",function(f,b,h,c,a){function d(e){return f.require("uibase/"+e)}b=b.create(h.ModelControl,[d("contentbox"),d("position"),d("loading"),d("align"),d("resize"),d("mask"),a],{},{ATTRS:{handleMouseEvents:{value:false},allowTextSelection_:{value:true}}});b.DefaultRender=c;return b},{requires:["uibase","component","./overlayrender","./effect"]});
KISSY.add("overlay/dialogrender",function(f,b,h,c){return b.create(h,[f.require("uibase/stdmodrender"),f.require("uibase/closerender"),c])},{requires:["uibase","./overlayrender","./ariarender"]});
KISSY.add("overlay/dialog",function(f,b,h,c,a){function d(e){return f.require("uibase/"+e)}b=h.create(b,[d("stdmod"),d("close"),d("drag"),d("constrain"),a],{renderUI:function(){this.get("el").addClass(this.get("prefixCls")+"dialog");this.set("handlers",[this.get("header")])}});b.DefaultRender=c;return b},{requires:["overlay/overlay","uibase","overlay/dialogrender","./aria"]});
KISSY.add("overlay/popup",function(f,b,h){function c(a,d){if(f.isUndefined(d))d=a;else d.srcNode=a;c.superclass.constructor.call(this,d)}c.ATTRS={trigger:{setter:function(a){return f.one(a)}},triggerType:{value:"click"}};f.extend(c,b,{initializer:function(){var a=this;if(a.get("trigger"))if(a.get("triggerType")==="mouse"){a._bindTriggerMouse();a.on("bindUI",function(){a._bindContainerMouse()})}else a._bindTriggerClick()},_bindTriggerMouse:function(){var a=this,d=a.get("trigger"),e;a.__mouseEnterPopup=
function(){a._clearHiddenTimer();e=f.later(function(){a.show();e=h},100)};d.on("mouseenter",a.__mouseEnterPopup);a._mouseLeavePopup=function(){if(e){e.cancel();e=h}a._setHiddenTimer()};d.on("mouseleave",a._mouseLeavePopup)},_bindContainerMouse:function(){this.get("el").on("mouseleave",this._setHiddenTimer,this).on("mouseenter",this._clearHiddenTimer,this)},_setHiddenTimer:function(){var a=this;a._hiddenTimer=f.later(function(){a.hide()},120)},_clearHiddenTimer:function(){if(this._hiddenTimer){this._hiddenTimer.cancel();
this._hiddenTimer=h}},_bindTriggerClick:function(){var a=this;a.__clickPopup=function(d){d.halt();a.show()};a.get("trigger").on("click",a.__clickPopup)},destructor:function(){var a=this.get("trigger");if(a){this.__clickPopup&&a.detach("click",this.__clickPopup);this.__mouseEnterPopup&&a.detach("mouseenter",this.__mouseEnterPopup);this._mouseLeavePopup&&a.detach("mouseleave",this._mouseLeavePopup)}this.get("el")&&this.get("el").detach("mouseleave",this._setHiddenTimer,this).detach("mouseenter",this._clearHiddenTimer,
this)}});return c},{requires:["./overlay"]});KISSY.add("overlay",function(f,b,h,c,a,d){b.Render=h;c.Render=a;b.Dialog=c;f.Overlay=b;f.Dialog=c;b.Popup=f.Popup=d;return b},{requires:["overlay/overlay","overlay/overlayrender","overlay/dialog","overlay/dialogrender","overlay/popup"]});
