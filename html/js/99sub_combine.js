$(document).ready(function () {

    /* 네비모바일버전 오픈이벤트 */
    var navMobileOpenEvent = function () {
        var $thisElement = $("#tit_nav_mobile");
        $(".nav_gnb_mobile_open").on("click", function () {
            $thisElement.show().stop().animate({ opacity: 1 }, 300);
            document.body.style.overflowY = "hidden";
        });

    };
    navMobileOpenEvent();

    /* 네비모바일버전 닫기이벤트 */
    var navMobileCancelEvent = function () {
        var $thisElement = $("#tit_nav_mobile");
        $(".nav_mobile_cancel").on("click", function () {
            $thisElement.stop().animate({ opacity: 0 }, 300);
            document.body.style.overflowY = "scroll";
            setTimeout(function () {
                $thisElement.css("display", "none");

            }, 200);
        });
    };
    navMobileCancelEvent();

    /* tit_main common */
    var titMainHelpEvnet = function () {
        $(".tb1_help").hover(function () {
            $(this).css({ "overflow": "visible", "z-index": "2" });
        }, function () {
            $(this).css({ "overflow": "hidden", "z-index": "1" });
        });
    };
    titMainHelpEvnet();

    /* 18.03.14 일단 이렇게 접근성적으로 막아놓기 */
    var navAccessibleEvent = function () {
        var navOpen = $(".nav_gnb_mobile_open");
        var navCancel = $(".nav_mobile_cancel");
        var thisElement = $("#tit_scrolltop_box, #tit_header, #tit_nav, #tit_main, #tit_aside, #tit_footer, .tit_whitebox_a_common, .tit_whitebox_main");

        navOpen.on("click", function () {
            $(thisElement).hide(0);
        });

        navCancel.on("click", function () {
            $(thisElement).show(0);
        })
    };

    navAccessibleEvent();

    /* 각 페이지별로 분리 안시키고 하나에 몰아서 해봄 */
    var headerSecH2 = document.getElementById("header_sec_h2")
        , headerSecH2cont = headerSecH2.innerHTML
        , menuName = ["사용기술목록", "자기소개", "보유기술", "포트폴리오", "개인공부정리"];

    switch (headerSecH2cont) {
        case menuName[2]:
            var sub03Sec1Cvs1Event = function () {
                var thisElement = document.getElementById("sub03_sec1_cvs1")
                    , cvsWidth = thisElement.width
                    , cvsHeight = thisElement.height
                    , i = 0
                    , init = 1
                    , grpValue = [-260, -98, -150, -98, -125, -270, -80]
                    , i2 = 0
                    , ySpeed = 0
                    , timer = null;

                /* ctx 는 각각 사용해야 함. */
                var ctx = thisElement.getContext("2d");

                ctx.fillStyle = "#ebedf7";
                ctx.fillRect(50, 0, 600, 100);
                ctx.fillStyle = "#ebf7ee";
                ctx.fillRect(50, 101, 600, 100);
                ctx.fillStyle = "#f7f0eb";
                ctx.fillRect(50, 201, 600, 100);

                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#343642";
                ctx.moveTo(30, 1); ctx.lineTo(50, 1);
                ctx.moveTo(30, cvsWidth / 3 + 1); ctx.lineTo(50, cvsWidth / 3 + 1);
                ctx.moveTo(30, cvsWidth / 6 + 1); ctx.lineTo(50, cvsWidth / 6 + 1);
                ctx.moveTo(30, 299); ctx.lineTo(50, 299);
                ctx.moveTo(50, 0); ctx.lineTo(50, 300);
                ctx.moveTo(50, 299); ctx.lineTo(600, 299);
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.strokeStyle = "#dadbe3";
                ctx.lineWidth = 2;
                for (i = 0; i < 13; i++) {
                    ctx.moveTo(51, init + (i * 25)); ctx.lineTo(600, init + (i * 25));
                };
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(51, init + (4 * 25)); ctx.lineTo(600, init + (4 * 25));
                ctx.moveTo(51, init + (8 * 25)); ctx.lineTo(600, init + (8 * 25));
                ctx.strokeStyle = "#b8b8bf";
                ctx.stroke();
                ctx.closePath();

                /* x시작, y시작, x시작기준으로 x끝, y시작 기준으로 y끝 */
                /*
                                for (i = 0; i < 8; i++) {
                                    ctx.fillRect(78 * (i + 1), 298, 30, grpValue[i]);
                                };*/

                //ctx.fillStyle = "#cc435a";
                ctx.fillStyle = "#" + Math.round(Math.random() * 0xffffff).toString(16);
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
                        ctx.fillStyle = "#" + Math.round(Math.random() * 0xffffff).toString(16);
                        i2++;
                        ySpeed = 0;
                    };
                };
                $("#sub03_sec1_cvs1").one("mouseover", function () {
                    timer = setInterval(cvsAnimate1, 10);
                });
            };
            sub03Sec1Cvs1Event();

            var sub03Sec1Cvs2Event = function () {
                var thisElement = document.getElementById("sub03_sec1_cvs2")
                    , init1 = 1
                    , grpValue = [-125, -150, -98, -10, -7, -5, -2, -2]
                    , i2 = 0
                    , ySpeed = 0
                    , timer = null
                    , ctx = thisElement.getContext("2d");

                ctx.fillStyle = "#ebedf7";
                ctx.fillRect(0, 0, 600, 100);
                ctx.fillStyle = "#ebf7ee";
                ctx.fillRect(0, 101, 600, 100);
                ctx.fillStyle = "#f7f0eb";
                ctx.fillRect(0, 201, 600, 100);

                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#343642";
                ctx.moveTo(0, 299); ctx.lineTo(600, 299); ctx.stroke();

                ctx.beginPath();
                ctx.strokeStyle = "#dadbe3";
                ctx.lineWidth = 2;
                for (var i = 0; i < 13; i++) {
                    ctx.moveTo(0, init1 + (i * 25)); ctx.lineTo(600, init1 + (i * 25));
                };
                ctx.stroke();
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
                ctx.fillStyle = "#" + Math.round(Math.random() * 0xffffff).toString(16);
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
                        ctx.fillStyle = "#" + Math.round(Math.random() * 0xffffff).toString(16);
                        i2++;
                        ySpeed = 0;
                    };
                };
                $("#sub03_sec1_cvs2").one("mouseover", function () {
                    timer = setInterval(cvsAnimate1, 12);
                });

            };
            sub03Sec1Cvs2Event();

            var sub03Sec1Cvs3Event = function () {
                var thisElement = document.getElementById("sub03_sec1_cvs3")
                    , cvsWidth = thisElement.width
                    , cvsHeight = thisElement.height
                    , i = 0
                    , ctx = thisElement.getContext("2d");

                /* moveTo가 시작점, 그 시작점을 기준으로 계속 lineTo가 유지 됨 */
                ctx.beginPath();
                ctx.moveTo(174, 38);
                ctx.lineTo(427, 38);
                ctx.lineTo(585, 237);
                ctx.lineTo(530, 482);
                ctx.lineTo(300, 592);
                ctx.lineTo(73, 482);
                ctx.lineTo(18, 237);
                ctx.lineTo(174, 38);
                ctx.fillStyle = "rgba(155,163,199,0.3)";
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                for (i = 3; i > 0; i--) {
                    ctx.arc(cvsWidth / 2, cvsHeight / 2, i * 90, 0, 2 * Math.PI);
                };
                ctx.lineTo(cvsWidth / 2, cvsHeight / 2);
                ctx.lineWidth = 1;
                ctx.strokeStyle = "#343642";
                ctx.stroke();
                ctx.fillStyle = "rgba(155,163,199,0.2)";
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(183, 57);
                ctx.lineTo(cvsWidth / 2, cvsHeight / 2);
                ctx.moveTo(417, 57);
                ctx.lineTo(cvsWidth / 2, cvsHeight / 2);
                ctx.moveTo(564, 241);
                ctx.lineTo(cvsWidth / 2, cvsHeight / 2);
                ctx.moveTo(512, 468);
                ctx.lineTo(cvsWidth / 2, cvsHeight / 2);
                ctx.moveTo(300, 570);
                ctx.lineTo(cvsWidth / 2, cvsHeight / 2);
                ctx.moveTo(89, 468);
                ctx.lineTo(cvsWidth / 2, cvsHeight / 2);
                ctx.moveTo(37, 241);
                ctx.lineTo(cvsWidth / 2, cvsHeight / 2);
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#b8b8bf";
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(249, 196);
                ctx.lineTo(343, 210);
                ctx.lineTo(388, 280);
                ctx.lineTo(371, 356);
                ctx.lineTo(cvsWidth / 2, 398);
                ctx.lineTo(286, 313);
                ctx.lineTo(291, 298);
                ctx.lineTo(249, 196);
                ctx.fillStyle = "rgba(52,54,66,0.6)";
                ctx.fill();
                ctx.closePath();

            };
            sub03Sec1Cvs3Event();

            var sub03Sec1Cvs4Event = function () {
                var thisElement = document.getElementById("sub03_sec1_cvs4");
                var cvsHeight = thisElement.height;
                var grpValue = [];
                var i = 0;

                var ctx = thisElement.getContext("2d");

                ctx.fillStyle = "#ebedf7";
                ctx.fillRect(0, 0, 183, 300);
                ctx.fillStyle = "#ebf7ee";
                ctx.fillRect(184, 0, 183, 300);
                ctx.fillStyle = "#f7f0eb";
                ctx.fillRect(368, 0, 183, 300);

                ctx.beginPath();
                ctx.moveTo(580, 1);
                ctx.lineTo(550, 1);
                ctx.lineTo(550, 299);
                ctx.lineTo(580, 299);
                ctx.moveTo(580, cvsHeight / 3 - 1); ctx.lineTo(550, cvsHeight / 3 - 1);
                ctx.moveTo(580, cvsHeight * 2 / 3 + 1); ctx.lineTo(550, cvsHeight * 2 / 3 + 1);
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#343642";
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();

                for (i = 0; i < 12; i++) {
                    ctx.moveTo(1 + (i * 45.7), 0); ctx.lineTo(1 + (i * 45.7), 300);
                };
                ctx.strokeStyle = "#dadbe3";
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.moveTo(1, 0); ctx.lineTo(1, 300);
                ctx.moveTo(183, 0); ctx.lineTo(183, 300);
                ctx.moveTo(367, 0); ctx.lineTo(367, 300);
                ctx.strokeStyle = "#b8b8bf";
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                ctx.fillStyle = "#2f257a";
                ctx.fillRect(549, 25, -250, 35);
                ctx.fillStyle = "#7ebbf9";
                ctx.fillRect(549, 35, -240, 35);
                ctx.fillStyle = "#614426";
                ctx.fillRect(549, 125, -182, 35);
                ctx.fillStyle = "#ffa725";
                ctx.fillRect(549, 135, -172, 35);
                ctx.fillStyle = "#413000";
                ctx.fillRect(549, 225, -210, 35);
                ctx.fillStyle = "#f05133";
                ctx.fillRect(549, 235, -200, 35);
                ctx.closePath();
            };
            sub03Sec1Cvs4Event();
            break;
        case menuName[3]:
            var ppimgboxHoverEvent = function () {
                $(".ppimgbox_hover_txt").on("click", function () {
                    var h3Value = $(this).parents(".main_sec_c").find("h3").text();
                    var spanValue = $(this).find("span").text();
                    console.log(h3Value);
                    var openNewWindow = window.open("about:blank");
                    switch (h3Value) {
                        case "2018": openNewWindow.location.href = "../images/04sub/" + h3Value + "/plus/pp" + spanValue + ".jpg";
                            break;
                        case "2017": openNewWindow.location.href = "../images/04sub/" + h3Value + "/plus/pp" + spanValue + ".jpg";
                            break;
                        case "2016": openNewWindow.location.href = "../images/04sub/" + h3Value + "/plus/pp" + spanValue + ".jpg";
                            break;
                    }
                });
            };
            ppimgboxHoverEvent();
            break;
    }
});


/* 이미지 */
$(window).on("load", function () {

    /* 전역변수 */
    var $outerWd = $("#tit_outer").width()
        , sec = 100
        , timer = null
        , timer1 = null
        , timer2 = null
        , timer3 = null
        , $winWd = 0
        , $winHt = 0
        , $wboxTop = $(".sec_whitebox_t")
        , $wboxBottom = $(".sec_whitebox_b");

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
                //$navGnb.css({ "position": "relative", "transform": "translate(-50%)", "margin": "0" });
            }
            else {
                $titNav.css({ "position": "absolute", "height": "61px" });
                /* draggable 이벤트보다 나중에 실행되어야 함 */
                //$navGnb.css({ "position": "static", "left": "none", "top": "none", "transform": "none", "margin": "6px auto 0 auto" });
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
                    //$navGnb.css({ "position": "relative", "transform": "translate(-50%)", "margin": "0" });
                }
                else {
                    //$navGnb.css({ "position": "static", "left": "none", "top": "none", "transform": "none", "margin": "6px auto 0 auto" });
                    $titNav.css({ "position": "absolute", "height": "61px" });
                }
                lastScroll = $scrollValue;
            }, sec);
        });

    };

    /* 일단 드래거블 이벤트 제거 */
    //gnbDragHoverEvent();
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