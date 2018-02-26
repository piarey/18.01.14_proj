$(document).ready(function () {

    /* 네비모바일버전 오픈이벤트 */
    var navMobileOpenEvent = function () {
        var $thisElement = $("#tit_nav_mobile");
        $(".nav_gnb_mobile_open").on("click", function () {
            $thisElement.show().stop().animate({ opacity: 1 }, 300);
        });

    };
    navMobileOpenEvent();

    /* 네비모바일버전 닫기이벤트 */
    var navMobileCancelEvent = function () {
        var $thisElement = $("#tit_nav_mobile");
        $(".nav_mobile_cancel").on("click", function () {
            $thisElement.stop().animate({ opacity: 0 }, 300);
            setTimeout(function () {
                $thisElement.css("display", "none");
            }, 200);
        });
    };
    navMobileCancelEvent();

    /* 02sub00 이벤트*/
    var sub02TableHelpEvnet = function () {
        $(".tb1_help").hover(function () {
            $(this).css("overflow", "visible");
        }, function () {
            $(this).css("overflow", "hidden");
        });
    };
    sub02TableHelpEvnet();

});


/* 이미지 */
$(window).on("load", function () {

    /* 전역변수 */
    var $outerWd = $("#tit_outer").width();
    var sec = 100;
    var timer = null;
    var timer1 = null;
    var timer2 = null;
    var timer3 = null;
    var $winWd = 0;
    var $winHt = 0;
    var $wboxTop = $(".sec_whitebox_t");
    var $wboxBottom = $(".sec_whitebox_b");

    /* window 너비 해상도에 따라 조절 이벤트 */
    var winWdControlEvent = function () {
        var aa = $(window).width();
        if (aa > 2560) {
            $winWd = 2560;
        } else {
            $winWd = aa;
        }
    };

    var winHtControlEvent = function () {
        var aa = $(window).height();
        $winHt = aa;
    }

    var winHtReControlEvent = function () {
        $(window).on("resize", function () {
            clearTimeout(timer1);
            setTimeout(function () {
                $winHt = $(window).height();
            }, sec);
        });
    };


    /* main 와이트박스 border값 조절 이벤트 */
    var whiteboxControlEvent = function () {

        var thisEvent = function () {
            winWdControlEvent();
            $wboxTop.css("border-left", $winWd + "px solid transparent");
            $wboxBottom.css("border-left", $winWd + "px solid #f2f3fa");
        }
        thisEvent();

        $(window).on("resize", function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                thisEvent();
            }, sec);
        });
    };
    whiteboxControlEvent();

    /* gnb 드래그 호버 이벤트 */
    var gnbDragHoverEvent = function () {
        var $navGnb = $("#nav_gnb_outer"),
            $thisElement = $(".nav_gnb_tooltip_outer");

        $navGnb.draggable({
            cursor: "all-scroll", containment: "html, body", stop: function (event, ui) {
                winHtReControlEvent();
                var navGnbId = document.getElementById("nav_gnb_outer"),
                    navGnbIdAttr = navGnbId.attributes[2].value;
                var browserCheckEvent = function () {
                    var agent = navigator.userAgent.toLowerCase(),
                        navGnbIdAttrSplit = 0,
                        thisEvent = function () {
                            if (navGnbIdAttrSplit < 0) {
                                $($navGnb).css("top", 0);
                            } else if ((navGnbIdAttrSplit + 60) > $winHt) {
                                $($navGnb).css("top", $winHt - 60);
                            }
                        }
                    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
                        navGnbIdAttrSplit = Number(navGnbIdAttr.split(" ")[5].replace(/[^-\d\.]/g, ''));
                        thisEvent();
                    }
                    else {
                        navGnbIdAttrSplit = Number(navGnbIdAttr.split(" ")[9].replace(/[^-\d\.]/g, ''));
                        thisEvent();
                    }
                };
                browserCheckEvent();
            }
        });

        /* 일반상태 - 스크롤에 따라 가능불가능 텍스트변경 이벤트 */
        var thisEvent = function () {
            winHtControlEvent();
            winHtReControlEvent();

            var $scrollValue = $(window).scrollTop();
            if ($winHt > $scrollValue) {
                document.getElementById("n_g_t_id").textContent = "이 곳은 클릭 드래그가 불가능합니다";
            } else {
                document.getElementById("n_g_t_id").textContent = "이 곳은 클릭 드래그가 가능합니다";
            }
        };
        thisEvent();

        /* 스크롤시 */
        $(window).on("scroll", function () {
            clearTimeout(timer3);
            timer3 = setTimeout(function () {
                thisEvent();
            }, sec);
        });

        /* 호버이벤트 */
        $navGnb.hover(function () {
            $thisElement.css("display", "block");
        }, function () {
            $thisElement.css("display", "none");
        });

    }

    /* gnb 스크롤 + - 이벤트 */
    var gnbScrollEvent = function () {
        winHtControlEvent();
        winHtReControlEvent();
        var $scrollValue = 0
            , lastScroll = 0
            , $titNav = $("#tit_nav")
            , $navGnb = $("#nav_gnb_outer");

        /* 일반상태 */
        var thisEvent = function () {
            $scrollValue = $(this).scrollTop();
            if ($scrollValue > $winHt) {
                $titNav.css({ "position": "fixed", "height": "0px" });
                $navGnb.css({ "position": "relative", "transform": "translate(-50%)", "margin": "0" });
            }
            else {
                $titNav.css({ "position": "absolute", "height": "61px" });
                /* draggable 이벤트보다 나중에 실행되어야 함 */
                $navGnb.css({ "position": "static", "left": "none", "top": "none", "transform": "none", "margin": "6px auto 0 auto" });
            }
        };
        thisEvent();

        /* 스크롤 시 */
        $(window).scroll(function () {
            clearTimeout(timer2);
            timer2 = setTimeout(function () {
                $scrollValue = $(this).scrollTop();
                if ($scrollValue > $winHt && $scrollValue > lastScroll) {
                    $titNav.css({ "position": "fixed", "height": "0px" });
                    $navGnb.css({ "position": "relative", "transform": "translate(-50%)", "margin": "0" });
                }
                else if ($scrollValue > $winHt && $scrollValue <= lastScroll) {
                    $titNav.css({ "position": "absolute", "height": "61px" });
                }
                else {
                    $navGnb.css({ "position": "static", "left": "none", "top": "none", "transform": "none", "margin": "6px auto 0 auto" });
                    $titNav.css({ "position": "absolute", "height": "61px" });
                }
                lastScroll = $scrollValue;
            }, sec);
        });

    };

    gnbDragHoverEvent();
    /* draggable 이벤트보다 나중에 실행되어야 함 */
    gnbScrollEvent();

    /* foucEvent */
    var foucEvent = function () {
        var agent = navigator.userAgent.toLowerCase();
        if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
            $("#etc_fouc").delay(200).stop().animate({ opacity: 1 }, 250);
        }
        else {
            $("#etc_fouc").stop().animate({ opacity: 1 }, 250);
        }
    };
    foucEvent();
});