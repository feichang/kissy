KISSY.add("overlay/effect", function(S) {
    var NONE = 'none';
    var effects = {fade:["Out","In"],slide:["Up","Down"]};

    function Effect() {
    }

    Effect.ATTRS = {
        effect:{
            value:{
                effect:NONE,
                duration:0.5,
                easing:'easeOut'
            },
            setter:function(v) {
                var effect = v.effect;
                if (S.isString(effect) && !effects[effect]) {
                    v.effect = NONE;
                }
            }

        }
    };

    Effect.prototype = {

        __bindUI:function() {
            var self = this;
            self.on("afterVisibleChange", function(ev) {
                var effect = self.get("effect").effect;
                if (effect == NONE) {
                    return;
                }
                var v = ev.newVal,
                    el = self.get("view").get("el");
                el.stopAnimate(true);
                el.css("visibility", "visible");
                var m = effect + effects[effect][Number(v)];
                el[m](self.get("effect").duration, function() {
                    el.css("display", "block");
                    el.css("visibility", v ? "visible" : "hidden");
                }, self.get("effect").easing, false);

            });
        }
    };

    return Effect;
}, {
    requires:['anim']
});