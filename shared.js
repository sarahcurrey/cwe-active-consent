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
        "1": [function(e, t, n) {
            "use strict";
            var i = window.optimizely.get("utils"),
                jq = window.optimizely.get("jquery"),
                o = i.log.bind(window, "[" + SHARED.tag + "]");
            o("v0.1"), SHARED.init = function(e, t) {
                document.documentElement.className += " " + SHARED.tag + " " + SHARED.tag + e, o("Variation " + e + ", page " + t), "v1" === e && (i.waitForElement(".hide-under-720 #email").then(function(e) {
                    e.placeholder = "email@example.com";
                }), i.waitForElement(".hide-under-720 #email").then(function(e) {
                    e.placeholder = "email@example.com";
                }),i.waitForElement(".hide-under-720 #email").then(function(hero) {
                      jq(hero).after('<div class="active-consent"><input class="checkbox-privacy" value="true" type="checkbox" required/> I have read and acknowledge General Assembly\'s <a href="https://generalassemb.ly/privacy_policy"> Privacy Policy. <img class="question" src="https://i.imgur.com/q1myj0X.png"/></a></a> <br> <br>By providing us with your email, you agree to General Assembly\'s <a href="https://generalassemb.ly/terms_of_service"> Terms of Service <img class="question" src="https://i.imgur.com/q1myj0X.png"/></a>, and to receive email updates on courses, special events and GA news. You can change your mind at any time and unsubscribe from GA marketing emails by clicking the "unsubscribe" link located at the bottom of every marketing email or by emailing marketing-opt-out@generalassemb.ly.</div>');
                }),i.waitForElement(".hide-over-720 #email").then(function(hero) {
                      jq(hero).after('<div class="active-consent"><input class="checkbox-privacy" value="true" type="checkbox" required/> I have read and acknowledge General Assembly\'s <a href="https://generalassemb.ly/privacy_policy"> Privacy Policy. <img class="question" src="https://i.imgur.com/q1myj0X.png"/></a></a> <br> <br>By providing us with your email, you agree to General Assembly\'s <a href="https://generalassemb.ly/terms_of_service"> Terms of Service <img class="question" src="https://i.imgur.com/q1myj0X.png"/></a>, and to receive email updates on courses, special events and GA news. You can change your mind at any time and unsubscribe from GA marketing emails by clicking the "unsubscribe" link located at the bottom of every marketing email or by emailing marketing-opt-out@generalassemb.ly.</div>');
                }),i.waitUntil(function() {
                    return window.optimizely.get("state").getExperimentStates()[11521294360] && window.optimizely.get("state").getExperimentStates()[11521294360].isActive
                }).then(function() {
                    o("Detected ABTST120 is running!"), i.waitForElement(".persistent-footer .attend-button").then(function(e) {
                        o("Found button..."), e.addEventListener("click", function(e) {
                            e.preventDefault(), e.stopPropagation(), o("Prevented default stuff!"), $("html,body").animate({
                                "scrollTop": document.querySelector(".hide-over-720 #email").offsetTop + 75
                            }, 100), $(".hide-over-720 #email").val() && $(".checkbox-privacy").is(':checked') ? $(".hide-over-720 .email + .actions .js-purchase-attend").click() : ($(".hide-over-720 .email + .actions .js-purchase-attend").click(), $(".hide-over-720 #email").focus() && $(".checkbox-privacy").focus())
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