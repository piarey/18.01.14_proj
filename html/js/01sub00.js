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

    /* 각 페이지별로 분리 안시키고 하나에 몰아서 해봄 */
    var headerSecH2 = document.getElementById("header_sec_h2")
        , headerSecH2cont = headerSecH2.innerHTML
        , menuName = ["사용기술목록", "자기소개", "보유기술", "포트폴리오", "개인공부정리"];

    switch (headerSecH2cont) {
        case menuName[2]:
            var sub03Sec2Cvs1Event = function () {
                var thisElement = document.getElementById("sub03_sec1_cvs1");
                var cvsWidth = thisElement.width;
                var cvsHeight = thisElement.height;
                var i = 0;
                var init = 1;
                var grpValue = [-260, -98, -150, -98, -125, -270, -80];
                var i2 = 0;
                var ySpeed = 0;
                var timer = null;

                /* ctx 는 각각 사용해야 함. */
                var ctx = thisElement.getContext("2d");

                ctx.fillStyle = "#e1e4f2";
                ctx.fillRect(50, 0, 600, 100);
                ctx.fillStyle = "#e2f2e1";
                ctx.fillRect(50, 101, 600, 100);
                ctx.fillStyle = "#f2ebe1";
                ctx.fillRect(50, 201, 600, 100);

                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#343642";
                ctx.moveTo(30, 1); ctx.lineTo(50, 1); ctx.stroke();
                ctx.moveTo(30, cvsWidth / 3 + 1); ctx.lineTo(50, cvsWidth / 3 + 1); ctx.stroke();
                ctx.moveTo(30, cvsWidth / 6 + 1); ctx.lineTo(50, cvsWidth / 6 + 1); ctx.stroke();
                ctx.moveTo(30, 299); ctx.lineTo(50, 299); ctx.stroke();
                ctx.moveTo(50, 0); ctx.lineTo(50, 300); ctx.stroke();
                ctx.moveTo(50, 299); ctx.lineTo(600, 299); ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.strokeStyle = "#dadbe3";
                ctx.lineWidth = 2;
                for (i = 0; i < 13; i++) {
                    ctx.moveTo(51, init + (i * 25)); ctx.lineTo(600, init + (i * 25)); ctx.stroke();
                };
                ctx.closePath();

                ctx.beginPath();
                ctx.strokeStyle = "#b8b8bf";
                ctx.moveTo(51, init + (4 * 25)); ctx.lineTo(600, init + (4 * 25)); ctx.stroke();
                ctx.moveTo(51, init + (8 * 25)); ctx.lineTo(600, init + (8 * 25)); ctx.stroke();
                ctx.closePath();

                /* x시작, y시작, x시작기준으로 x끝, y시작 기준으로 y끝 */
                /*
                                for (i = 0; i < 8; i++) {
                                    ctx.fillRect(78 * (i + 1), 298, 30, grpValue[i]);
                                };*/
                
                //ctx.fillStyle = "#cc435a";
                ctx.fillStyle = "#" + Math.round(Math.random()*0xffffff).toString(16);
                var cvsAnimate1 = function () {
                    if (i2 == 0 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(78 * (i2 + 1), 298, 30, ySpeed);
                        ySpeed = ySpeed - 8;
                    } else if (i2 == 1 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(78 * (i2 + 1), 298, 30, ySpeed);
                        ySpeed = ySpeed - 8;
                    } else if (i2 == 2 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(78 * (i2 + 1), 298, 30, ySpeed);
                        ySpeed = ySpeed - 8;
                    } else if (i2 == 3 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(78 * (i2 + 1), 298, 30, ySpeed);
                        ySpeed = ySpeed - 8;
                    } else if (i2 == 4 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(78 * (i2 + 1), 298, 30, ySpeed);
                        ySpeed = ySpeed - 8;
                    } else if (i2 == 5 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(78 * (i2 + 1), 298, 30, ySpeed);
                        ySpeed = ySpeed - 8;
                    } else if (i2 == 6 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(78 * (i2 + 1), 298, 30, ySpeed);
                        ySpeed = ySpeed - 8;
                    } else if (i2 == 7) {
                        clearInterval(timer);
                        return false;
                    }
                    else {
                        ctx.fillStyle = "#" + Math.round(Math.random()*0xffffff).toString(16);
                        i2++;
                        ySpeed = 0;
                    }
                }
                $("#sub03_sec1_cvs1").one("mouseover", function () {
                    timer = setInterval(cvsAnimate1, 10);
                });
            };
            sub03Sec2Cvs1Event();

            var sub03Sec2Cvs2Event = function () {
                var thisElement = document.getElementById("sub03_sec1_cvs2");
                var init1 = 1;
                var grpValue = [-125, -150, -98, -10, -5, -7, -2, -2];
                var i2 = 0;
                var ySpeed = 0;
                var timer = null;

                var ctx = thisElement.getContext("2d");

                ctx.fillStyle = "#e1e4f2";
                ctx.fillRect(0, 0, 600, 100);
                ctx.fillStyle = "#e2f2e1";
                ctx.fillRect(0, 101, 600, 100);
                ctx.fillStyle = "#f2ebe1";
                ctx.fillRect(0, 201, 600, 100);

                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#343642";
                ctx.moveTo(0, 299); ctx.lineTo(600, 299); ctx.stroke();

                ctx.beginPath();
                ctx.strokeStyle = "#dadbe3";
                ctx.lineWidth = 2;
                for (var i = 0; i < 13; i++) {
                    ctx.moveTo(0, init1 + (i * 25)); ctx.lineTo(600, init1 + (i * 25)); ctx.stroke();
                }
                ctx.closePath();

                ctx.beginPath();
                ctx.strokeStyle = "#b8b8bf";
                ctx.moveTo(0, init1 + (4 * 25)); ctx.lineTo(600, init1 + (4 * 25)); ctx.stroke();
                ctx.moveTo(0, init1 + (8 * 25)); ctx.lineTo(600, init1 + (8 * 25)); ctx.stroke();
                ctx.closePath();

                /*
                                for (i = 0; i < 9; i++) {
                                    ctx.fillRect(75 * (i + 1) - 50, 298, 30, grpValue[i]);
                                }*/
                ctx.fillStyle = "#" + Math.round(Math.random()*0xffffff).toString(16);
                var cvsAnimate1 = function () {
                    if (i2 == 0 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(75 * (i2 + 1) - 50, 298, 30, ySpeed);
                        ySpeed = ySpeed - 8;
                    } else if (i2 == 1 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(75 * (i2 + 1) - 50, 298, 30, ySpeed);
                        ySpeed = ySpeed - 8;
                    } else if (i2 == 2 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(75 * (i2 + 1) - 50, 298, 30, ySpeed);
                        ySpeed = ySpeed - 8;
                    } else if (i2 == 3 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(75 * (i2 + 1) - 50, 298, 30, ySpeed);
                        ySpeed = ySpeed - 8;
                    } else if (i2 == 4 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(75 * (i2 + 1) - 50, 298, 30, ySpeed);
                        ySpeed = ySpeed - 1;
                    } else if (i2 == 5 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(75 * (i2 + 1) - 50, 298, 30, ySpeed);
                        ySpeed = ySpeed - 1;
                    } else if (i2 == 6 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(75 * (i2 + 1) - 50, 298, 30, ySpeed);
                        ySpeed = ySpeed - 1;
                    } else if (i2 == 7 && ySpeed > grpValue[i2]) {
                        ctx.fillRect(75 * (i2 + 1) - 50, 298, 30, ySpeed);
                        ySpeed = ySpeed - 1;
                    } else if (i2 == 8) {
                        clearInterval(timer);
                        return false;
                    }
                    else {
                        ctx.fillStyle = "#" + Math.round(Math.random()*0xffffff).toString(16);
                        i2++;
                        ySpeed = 0;
                    }
                }
                $("#sub03_sec1_cvs2").one("mouseover", function () {
                    timer = setInterval(cvsAnimate1, 12);
                });

            }
            sub03Sec2Cvs2Event();

            var sub03Sec2Cvs3Event = function () {
                var thisElement = document.getElementById("sub03_sec1_cvs2");
                ctx = thisElement.getContext("2d");


            }
            var sub03Sec2Cvs3Event = function () {
                var thisElement = document.getElementById("sub03_sec1_cvs2");
                ctx = thisElement.getContext("2d");




            }
            break;

    }

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