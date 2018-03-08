/* 구글 웹폰트 */
var googleWebfontEvent = function () {
    WebFont.load({
        // For google fonts
        google: {
            families: ['Nanum Gothic', 'sans-serif']
        },
        // For early access or custom font
        custom: {
            families: ['Jeju Gothic'],
            urls: ['http://fonts.googleapis.com/earlyaccess/jejugothic.css']
        }
    });
};
googleWebfontEvent();

$(document).ready(function () {
    /* window 는 브라우저창, html은 내부문서 */
    var timer1 = null
        , timer2 = null
        , sec = 100
        , $winHt = $(window).height()
        , $footer = $("#tit_footer")
        , $titOuter = $("#tit_outer")
        , $htmlHt = $("html").height()
        , speed300 = 300;

    var winHtReControlEvent = function () {
        $(window).on("resize", function () {
            clearTimeout(timer1);
            setTimeout(function () {
                $winHt = $(window).height();
            }, sec);
        });
    };

    var $htmlHtRe = function () {
        $(window).on("resize", function () {
            clearTimeout(timer1);
            setTimeout(function () {
                $htmlHt = $("html").height();
            });
        });
    };

    /* href=# 문제해결 이벤트 */
    $(document).on("click", "a[href='at_js']", function (e) {
        e.preventDefault();
    });

    /* footer fixed-static, opacity 이벤트 */
    var footerFxOpEVent = function () {
        var $footerHt = 0;
        var $winScrollTop = $(window).scrollTop();

        /* 일반+리사이즈 */
        var thisEvent = function () {
            $winHt = $(window).height();
            $footerHt = $footer.innerHeight() - 1;
            if ($winHt > $footerHt) {
                $footer.css("position", "fixed");
                $(".etc_footer_margintop").css("margin-bottom", $footerHt);
            } else {
                $footer.css("position", "static");
                $(".etc_footer_margintop").css("margin-bottom", 0);
            }
        };
        thisEvent();

        /* 일반+스크롤+리사이즈 */
        var thisEvent2 = function () {
            $htmlHtRe();
            if ($winScrollTop + $winHt > $htmlHt - ($footerHt + $footerHt / 3)) {
                $footer.css("opacity", 1);
                $titOuter.css("background-color", "#343642");
            } else {
                $footer.css("opacity", 0);
                $titOuter.css("background-color", "transparent");
            }
        }
        thisEvent2();

        $(window).on("scroll", function () {
            /* 스크롤 이벤트 마다 값이 변함 */
            $winScrollTop = $(window).scrollTop();
            /* 리사이즈 후 스크롤 방지 */
            winHtReControlEvent();
            thisEvent2();
        });

        $(window).on("resize", function () {
            clearTimeout(timer1);
            setTimeout(function () {
                thisEvent();
                thisEvent2();
            }, sec);
        });
    };
    footerFxOpEVent();

    /* html5validator 사이트이동 이벤트 따로 뺌 */
    var footerValidatorLinkEvent = function () {
        var thisElement = document.getElementById("footer_validator_link");
        thisElement.onclick = function () {
            thisElement.href = thisElement.href.replace(/referer$/, encodeURIComponent(document.URL));
        };
    };
    //footerValidatorLinkEvent();

    /* */
    var footerCopyEvent = function () {

        document.getElementById("footer_btn_copy").onclick = function () {
            var agent = navigator.userAgent.toLowerCase(),
                phValue = document.getElementById("js_value_ph");
            if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
                window.clipboardData.setData("Text", "010 7774 8695");
                alert("연락처가 복사되었습니다.");
            }
            else {
                phValue.select();
                document.execCommand("Copy");
                alert("연락처가 복사되었습니다.");
            }
        }
    };
    footerCopyEvent();

    /* scrollTopEvent */
    var scrollTopEvent = function () {
        var thisElement = $("#scrolltop_btn1");
        thisElement.on("click", function () {
            $("html,body").stop().animate({ scrollTop: 0 }, 1200, "easeInOutQuint");
            thisElement.off("click");
            setTimeout(function () {
                scrollTopEvent();
            }, 1200);
        });
    };
    scrollTopEvent();

    var scrollMiddleEvent = function () {
        var thisElement = $("#scrolltop_btn2");
        winHtReControlEvent();
        $htmlHtRe();


        thisElement.on("click", function () {
            $("html,body").stop().animate({ scrollTop: $htmlHt / 2 - $winHt / 2 }, 1200, "easeInOutQuint");
            thisElement.off("click");
            setTimeout(function () {
                scrollMiddleEvent();
            }, 1200);
        });
    };
    scrollMiddleEvent();

    var scrollBottomEvent = function () {
        var thisElement = $("#scrolltop_btn3");
        winHtReControlEvent();
        $htmlHtRe();

        thisElement.on("click", function () {
            $("html,body").stop().animate({ scrollTop: $htmlHt - $winHt }, 1200, "easeInOutQuint");
            thisElement.off("click");
            setTimeout(function () {
                /*
                console.log($htmlHt);
                console.log($winHt);
                console.log($htmlHt-$winHt);*/
                scrollBottomEvent();
            }, 1200);
        });
    };
    scrollBottomEvent();

    /* */
    var scrollBoxOpEvent = function () {
        var thisElement = $("#tit_scrolltop_box");
        var $winScrollTop = $(window).scrollTop();
        winHtReControlEvent();

        var thisEvent = function () {
            if ($winScrollTop > $winHt / 2) {
                thisElement.stop().animate({ "opacity": 1 }, 300);
            } else {
                thisElement.stop().animate({ "opacity": 0.4 }, 300);
            }
        };
        thisEvent();

        $(window).on("scroll", function () {
            clearTimeout(timer2);
            timer2 = setTimeout(function () {
                $winScrollTop = $(window).scrollTop();
                thisEvent();
            }, sec);
        });
    };
    scrollBoxOpEvent();

});

/* button 같은 요소들 크로스브라우징 */
!function (a) { "use strict"; function b() { } function c() { try { return document.activeElement } catch (a) { } } function d(a, b) { for (var c = 0, d = a.length; d > c; c++)if (a[c] === b) return !0; return !1 } function e(a, b, c) { return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : void 0 } function f(a, b) { var c; a.createTextRange ? (c = a.createTextRange(), c.move("character", b), c.select()) : a.selectionStart && (a.focus(), a.setSelectionRange(b, b)) } function g(a, b) { try { return a.type = b, !0 } catch (c) { return !1 } } function h(a, b) { if (a && a.getAttribute(B)) b(a); else for (var c, d = a ? a.getElementsByTagName("input") : N, e = a ? a.getElementsByTagName("textarea") : O, f = d ? d.length : 0, g = e ? e.length : 0, h = f + g, i = 0; h > i; i++)c = f > i ? d[i] : e[i - f], b(c) } function i(a) { h(a, k) } function j(a) { h(a, l) } function k(a, b) { var c = !!b && a.value !== b, d = a.value === a.getAttribute(B); if ((c || d) && "true" === a.getAttribute(C)) { a.removeAttribute(C), a.value = a.value.replace(a.getAttribute(B), ""), a.className = a.className.replace(A, ""); var e = a.getAttribute(I); parseInt(e, 10) >= 0 && (a.setAttribute("maxLength", e), a.removeAttribute(I)); var f = a.getAttribute(D); return f && (a.type = f), !0 } return !1 } function l(a) { var b = a.getAttribute(B); if ("" === a.value && b) { a.setAttribute(C, "true"), a.value = b, a.className += " " + z; var c = a.getAttribute(I); c || (a.setAttribute(I, a.maxLength), a.removeAttribute("maxLength")); var d = a.getAttribute(D); return d ? a.type = "text" : "password" === a.type && g(a, "text") && a.setAttribute(D, "password"), !0 } return !1 } function m(a) { return function () { P && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) ? f(a, 0) : k(a) } } function n(a) { return function () { l(a) } } function o(a) { return function () { i(a) } } function p(a) { return function (b) { return v = a.value, "true" === a.getAttribute(C) && v === a.getAttribute(B) && d(x, b.keyCode) ? (b.preventDefault && b.preventDefault(), !1) : void 0 } } function q(a) { return function () { k(a, v), "" === a.value && (a.blur(), f(a, 0)) } } function r(a) { return function () { a === c() && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) && f(a, 0) } } function s(a) { var b = a.form; b && "string" == typeof b && (b = document.getElementById(b), b.getAttribute(E) || (e(b, "submit", o(b)), b.setAttribute(E, "true"))), e(a, "focus", m(a)), e(a, "blur", n(a)), P && (e(a, "keydown", p(a)), e(a, "keyup", q(a)), e(a, "click", r(a))), a.setAttribute(F, "true"), a.setAttribute(B, T), (P || a !== c()) && l(a) } var t = document.createElement("input"), u = void 0 !== t.placeholder; if (a.Placeholders = { nativeSupport: u, disable: u ? b : i, enable: u ? b : j }, !u) { var v, w = ["text", "search", "url", "tel", "email", "password", "number", "textarea"], x = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46], y = "#ccc", z = "placeholdersjs", A = new RegExp("(?:^|\\s)" + z + "(?!\\S)"), B = "data-placeholder-value", C = "data-placeholder-active", D = "data-placeholder-type", E = "data-placeholder-submit", F = "data-placeholder-bound", G = "data-placeholder-focus", H = "data-placeholder-live", I = "data-placeholder-maxlength", J = 100, K = document.getElementsByTagName("head")[0], L = document.documentElement, M = a.Placeholders, N = document.getElementsByTagName("input"), O = document.getElementsByTagName("textarea"), P = "false" === L.getAttribute(G), Q = "false" !== L.getAttribute(H), R = document.createElement("style"); R.type = "text/css"; var S = document.createTextNode("." + z + " {color:" + y + ";}"); R.styleSheet ? R.styleSheet.cssText = S.nodeValue : R.appendChild(S), K.insertBefore(R, K.firstChild); for (var T, U, V = 0, W = N.length + O.length; W > V; V++)U = V < N.length ? N[V] : O[V - N.length], T = U.attributes.placeholder, T && (T = T.nodeValue, T && d(w, U.type) && s(U)); var X = setInterval(function () { for (var a = 0, b = N.length + O.length; b > a; a++)U = a < N.length ? N[a] : O[a - N.length], T = U.attributes.placeholder, T ? (T = T.nodeValue, T && d(w, U.type) && (U.getAttribute(F) || s(U), (T !== U.getAttribute(B) || "password" === U.type && !U.getAttribute(D)) && ("password" === U.type && !U.getAttribute(D) && g(U, "text") && U.setAttribute(D, "password"), U.value === U.getAttribute(B) && (U.value = T), U.setAttribute(B, T)))) : U.getAttribute(C) && (k(U), U.removeAttribute(B)); Q || clearInterval(X) }, J); e(a, "beforeunload", function () { M.disable() }) } }(this);