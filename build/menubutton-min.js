/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 9 18:58
*/
KISSY.add("menubutton/menubutton",function(e,i,j,f,g,m,l){var c=j.all,d=j.KeyCodes,k=i.create(f,[l.DecorateChild],{hideMenu:function(){this.get("menu")&&this.get("menu").hide()},showMenu:function(){var a=this.get("view"),b=a.get("el"),h=this.get("menu");if(!h.get("visible")){h.set("align",e.mix({node:b},this.get("menuAlign")));h.show();b.attr("aria-haspopup",h.get("el").attr("id"));a.set("collapsed",false)}},_reposition:function(){var a=this.get("menu"),b=this.get("el");a&&a.get("visible")&&a.set("align",
e.mix({node:b},this.get("menuAlign")))},bindUI:function(){var a=this,b=this.get("menu");b.on("afterActiveItemChange",function(h){a.set("activeItem",h.newVal)});b.on("click",function(h){a.fire("click",{target:h.target})});b.on("hide",function(){a.get("view").set("collapsed",true)});c(window).on("resize",a._reposition,a)},_handleKeyEventInternal:function(a){var b=this.get("menu");if(a.keyCode==d.SPACE){a.preventDefault();if(a.type!="keyup")return}else if(a.type!="keydown")return;if(b&&b.get("visible")){b=
b._handleKeydown(a);if(a.keyCode==d.ESC){this.hideMenu();return true}return b}if(a.keyCode==d.SPACE||a.keyCode==d.DOWN||a.keyCode==d.UP){this.showMenu();return true}},_performInternal:function(){this.get("menu").get("visible")?this.hideMenu():this.showMenu()},_handleBlur:function(a){k.superclass._handleBlur.call(this,a);this.hideMenu()},getMenu:function(){var a=this.get("menu");if(!a){a=new m.PopupMenu(e.mix({prefixCls:this.get("prefixCls")},this.get("menuCfg")));this.set("menu",a)}return a},addItem:function(a,
b){this.getMenu().addChild(a,b)},removeItem:function(a,b){this.get("menu")&&this.get("menu").removeChild(a,b)},removeItems:function(a){this.get("menu")&&this.get("menu").removeChildren(a)},getItemAt:function(a){return this.get("menu")&&this.get("menu").getChildAt(a)},_uiSetDisabled:function(a){var b=k.superclass._uiSetDisabled;b&&b.apply(this,e.makeArray(arguments));!a&&this.hideMenu()},decorateChildrenInternal:function(a,b,h){b.hide();e.one(b[0].ownerDocument.body).prepend(b);this.set("menu",new a({srcNode:b,
prefixCls:h}))},destructor:function(){var a=this.get("menu");c(window).detach("resize",this._reposition,this);a&&a.destroy()}},{ATTRS:{activeItem:{view:true},menuAlign:{value:{points:["bl","tl"],overflow:{failX:1,failY:1,adjustX:1,adjustY:1}}},decorateChildCls:{value:"popupmenu"},menu:{setter:function(a){a.set("parent",this)}},collapsed:{value:true}},DefaultRender:g});return k},{requires:["uibase","node","button","./menubuttonrender","menu","component"]});
KISSY.add("menubutton/menubuttonrender",function(e,i,j){return i.create(j.Render,{createDom:function(){var f=this.get("innerEl"),g=e.substitute('<div class="{prefixCls}inline-block {prefixCls}menu-button-caption">{content}</div><div class="{prefixCls}inline-block {prefixCls}menu-button-dropdown">&nbsp;</div>',{content:this.get("content")||"",prefixCls:this.get("prefixCls")});f.html(g).attr("aria-haspopup",true)},_uiSetContent:function(f){var g=this.get("el").one("."+this.getCls("menu-button-caption"));
g.html("");f&&g.append(f)},_uiSetCollapsed:function(f){var g=this.get("el"),m=this.getCls("menu-button-open");if(f){g.removeClass(m);g.attr("aria-expanded",false)}else{g.addClass(m);g.attr("aria-expanded",true)}},_uiSetActiveItem:function(f){this.get("el").attr("aria-activedescendant",f&&f.get("el").attr("id")||"")}},{ATTRS:{activeItem:{},collapsed:{}}})},{requires:["uibase","button"]});
KISSY.add("menubutton/option",function(e,i,j,f){e=i.create(f.Item,{renderUI:function(){this.get("el").addClass(this.getCls("option"))}},{ATTRS:{selectable:{value:true}}});j.UIStore.setUIByClass("option",{priority:10,ui:e});return e},{requires:["uibase","component","menu"]});
KISSY.add("menubutton/select",function(e,i,j,f,g,m){var l=j.create(f,{bindUI:function(){this.on("click",this.handleMenuClick,this);this.get("menu").on("show",this._handleMenuShow,this)},_handleMenuShow:function(){this.get("menu").set("highlightedItem",this.get("selectedItem")||this.get("menu").getChildAt(0))},updateCaption_:function(){var c=this.get("selectedItem");this.set("content",c?c.get("content"):this.get("defaultCaption"))},handleMenuClick:function(c){this.set("selectedItem",c.target);this.hideMenu()},
removeItems:function(){l.superclass.removeItems.apply(this,arguments);this.set("selectedItem",null)},removeItem:function(c){l.superclass.removeItem.apply(this,arguments);c==this.get("selectedItem")&&this.set("selectedItem",null)},_uiSetSelectedItem:function(c,d){d&&d.prevVal&&d.prevVal.set("selected",false);this.updateCaption_()},_uiSetDefaultCaption:function(){this.updateCaption_()}},{ATTRS:{value:{getter:function(){var c=this.get("selectedItem");return c&&c.get("value")},setter:function(c){for(var d=
this.get("menu").get("children"),k=0;k<d.length;k++){var a=d[k];if(a.get("value")==c){this.set("selectedItem",a);return}}this.set("selectedItem",null);return null}},selectedItem:{},selectedIndex:{setter:function(c){var d=this.get("menu").get("children");if(c<0||c>=d.length)return-1;this.set("selectedItem",d[c])},getter:function(){return e.indexOf(this.get("selectedItem"),this.get("menu").get("children"))}},defaultCaption:{value:""}}});l.decorate=function(c,d){c=e.one(c);var k=new g.PopupMenu(e.mix({prefixCls:d.prefixCls},
d.menuCfg)),a,b=c.val();c.all("option").each(function(n){var o=new m({content:n.text(),prefixCls:d.prefixCls,value:n.val()});if(b==n.val())a=o;k.addChild(o)});var h=new l(e.mix({selectedItem:a,menu:k},d));h.render();h.get("el").insertBefore(c);var p;if(p=c.attr("name")){var q=(new i("<input type='hidden' name='"+p+"' value='"+b+"'>")).insertBefore(c);h.on("afterSelectedItemChange",function(n){n.newVal?q.val(n.newVal.get("value")):q.val("")})}c.remove();return h};return l},{requires:["node","uibase",
"./menubutton","menu","./option"]});KISSY.add("menubutton",function(e,i,j,f,g){i.Render=j;i.Select=f;i.Option=g;return i},{requires:["menubutton/menubutton","menubutton/menubuttonrender","menubutton/select","menubutton/option"]});
