/* eslint-disable */ /* jshint ignore: start */
(function(SHARED) {
    var require;
    ! function e(t, n, i) {
        function o(a, u) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!u && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var d = n[a] = {
                    "exports": {}
                };
                t[a][0].call(d.exports, function(e) {
                    var n = t[a][1][e];
                    return o(n || e)
                }, d, d.exports, e, t, n, i)
            }
            return n[a].exports
        }
        for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
        return o
    }({
        "1": [function(email, t, n) {
            "use strict";
            var i = window.optimizely.get("utils"),
                o = i.log.bind(window, "[" + SHARED.tag + "]");
            o("v0.1"), SHARED.init = function(email, t) {
                document.documentElement.className += " " + SHARED.tag + " " + SHARED.tag + email, o("Variation " + email + ", page " + t), "v1" === email && (i.waitForElement(".hide-under-720 #email").then(function(email) {
                    email.placeholder = "email@example.com";

                }), i.waitForElement(".hide-over-720 #email").then(function(email) {
                    email.placeholder = "email@example.com"
                }), i.waitUntil(function() {
                    return window.optimizely.get("state").getExperimentStates()[11521294360] && window.optimizely.get("state").getExperimentStates()[11521294360].isActive
                }).then(function() {
                    o("Detected ABTST120 is running!"), i.waitForElement(".persistent-footer .attend-button").then(function(email) {
                        o("Found button..."), email.addEventListener("click", function(email) {
                            email.preventDefault(), email.stopPropagation(), o("Prevented default stuff!"), $("html,body").animate({
                                "scrollTop": document.querySelector(".hide-over-720 #email").offsetTop + 75
                            }, 100), $(".hide-over-720 #email").val() ? $(".hide-over-720 .email + .actions .js-purchase-attend").click() : ($(".hide-over-720 .email + .actions .js-purchase-attend").click(), $(".hide-over-720 #email").focus())
                        }, !0)
                    })
                }))
            }
        }, {}]
    }, {}, [1]);
    
})(window.CRO_SHARED_13014990080 || (window.CRO_SHARED_13014990080 = {
    id: 13014990080,
    tag: 'gen219'
}));