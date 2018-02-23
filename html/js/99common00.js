$(window).on("load", function () {

    var timer1 = null;
    var timer2 = null;
    var sec = 100;
    var $winHt = $(window).height();
    var $footer = $("#tit_footer");
    var $titOuter = $("#tit_outer");
    var $htmlHt = $("html").height();
    var speed300 = 300;

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
                $titOuter.css("background-color", "#cc435a");
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




});