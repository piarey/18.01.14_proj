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
    var speed200 = 200;
    var speed300 = 300;

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
            $wboxBottom.css("border-left", $winWd + "px solid #fafafa");
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



    /* 네비모바일버전 오픈이벤트 */
    var navMobileOpenEvent = function () {
        var $thisElement = $("#tit_nav_mobile");
        $(".nav_gnb_mobile_open").on("click", function () {

            $thisElement.show().stop().animate({ opacity: 1 }, speed300);
        });

    };
    navMobileOpenEvent();

    /* 네비모바일버전 닫기이벤트 */
    var navMobileCancelEvent = function () {
        var $thisElement = $("#tit_nav_mobile");
        $(".nav_mobile_cancel").on("click", function () {
            $thisElement.stop().animate({ opacity: 0 }, speed300);
            setTimeout(function () {
                $thisElement.css("display", "none");
            }, speed200);
        });
    };
    navMobileCancelEvent();

    /* gnb 드래그 호버 이벤트 */
    var gnbDragHoverEvent = function () {
        var $navGnb = $(".nav_gnb"),
            $thisElement = $(".nav_gnb_tooltip_outer");

        $navGnb.draggable({
            cursor: "all-scroll", containment: "html, body", stop: function (event, ui) {
                winHtReControlEvent();
                var navGnbId = document.getElementById("nav_gnb_id"),
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
                        navGnbIdAttrSplit = Number(navGnbIdAttr.split(" ")[3].replace(/[^-\d\.]/g, ''));
                        thisEvent();
                    }
                    else {
                        navGnbIdAttrSplit = Number(navGnbIdAttr.split(" ")[5].replace(/[^-\d\.]/g, ''));
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
            $thisElement.css("opacity", 1);
        }, function () {
            $thisElement.css("opacity", 0);
        });

    }

    /* gnb 스크롤 + - 이벤트 */
    var gnbScrollEvent = function () {
        winHtControlEvent();
        winHtReControlEvent();
        var $scrollValue = 0,
            lastScroll = 0,
            $thisElement = $("#tit_nav"),
            $navGnb = $(".nav_gnb");

        /* 일반상태 */
        var thisEvent = function () {
            $scrollValue = $(this).scrollTop();
            if ($scrollValue > $winHt) {
                $thisElement.css({ "position": "fixed", "background-color": "transparent" });
            }
            else {
                $thisElement.css({ "position": "absolute", "background-color": "rgba(204,67,90,1)" });
                /* draggable 이벤트보다 나중에 실행되어야 함 */
                $navGnb.css({ "position": "static", "left": "none", "top": "none" });
            }
        };
        thisEvent();

        /* 스크롤 시 */
        $(window).scroll(function () {
            clearTimeout(timer2);
            timer2 = setTimeout(function () {
                $scrollValue = $(this).scrollTop();
                if ($scrollValue > $winHt && $scrollValue > lastScroll) {
                    $thisElement.css({ "position": "fixed", "background-color": "transparent" });
                    $navGnb.css("position", "relative");
                }
                else if ($scrollValue > $winHt && $scrollValue <= lastScroll) {
                    $thisElement.css({ "position": "absolute", "background-color": "rgba(204,67,90,1)" });
                }
                else {
                    $navGnb.css({ "position": "static", "left": "none", "top": "none" });
                    $thisElement.css({ "position": "absolute", "background-color": "rgba(204,67,90,1)" });
                }
                lastScroll = $scrollValue;
            }, sec);
        });

    };

    gnbDragHoverEvent();
    /* draggable 이벤트보다 나중에 실행되어야 함 */
    gnbScrollEvent();

    /* */
    $("#etc_fouc").stop().animate({ opacity: 1 }, 250);

});