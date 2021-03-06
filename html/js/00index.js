$(document).ready(function () {

    /* header 글씨 써지는 효과 */
    var headerWriteEvent = function () {
        var hBg1TxtElement = document.getElementById("header_bg1_txt")
            , hBg2TxtElement = document.getElementById("header_bg2_txt")
            , hBg1TxtCont = "의 자 에 쌓 인 눈"
            , hBg2TxtCont = "아 른 거 리 는 반 딧 불"
            , hBg1TxtSplit = hBg1TxtCont.split(" ")
            , hBg2TxtSplit = hBg2TxtCont.split(" ");


        var thisEvent = function ee(counter, evInhBgTxtElement, evInhBgTxtSplit) {
            var alength = evInhBgTxtSplit.length;
            var onOff = false;

            if (counter < alength && onOff == false) {
                setTimeout(function () {
                    if (counter == alength - 1) {
                        onOff = true;
                    }
                    evInhBgTxtElement.innerHTML += "<em>" + evInhBgTxtSplit[counter] + "</em>";
                    var $x = $("#" + evInhBgTxtElement.attributes[1].value + " em");
                    $x.animate({ opacity: 1 }, 200);
                    counter++;
                    ee(counter, evInhBgTxtElement, evInhBgTxtSplit);
                }, 200);
            } else {
                setTimeout(function () {
                    onOff = false;
                    counter = 0;
                    var $x = $("#" + evInhBgTxtElement.attributes[1].value + " em");
                    $x.animate({ marginTop: "10px", opacity: 0 }, 200);
                    setTimeout(function () {
                        evInhBgTxtElement.innerHTML = "";
                    }, 200);
                    ee(counter, evInhBgTxtElement, evInhBgTxtSplit);
                }, 1000);
            }
        }

        thisEvent(0, hBg1TxtElement, hBg1TxtSplit);
        thisEvent(0, hBg2TxtElement, hBg2TxtSplit);

        //"<em class=" + "\"h_bg1_txt"

    };
    headerWriteEvent();


    /* header 동그라미 움직이는 효과 */
    var headerCircleMoveEvent = function () {
        setTimeout(function () {
            var ranValue1 = Math.floor(Math.random() * 150)
                , ranValue2 = Math.floor(Math.random() * 150)
                , $thisElement1 = $("#header_svg_circle1")
                , $thisElement2 = $("#header_svg_circle2");
            $thisElement1.animate({ top: ranValue1, left: ranValue2 });
            $thisElement2.animate({ bottom: ranValue1, right: ranValue2 });
            headerCircleMoveEvent();
        }, 1000);
    };
    headerCircleMoveEvent();

});


/* 이미지 */
$(window).on("load", function () {

    /* 전역변수 */
    var $outerWd = $("#tit_outer").width()
        , sec = 100
        , timer = null
        , timer2 = null
        , timer3 = null
        , $winWd = 0
        , $winHt = 0
        , $wboxTop = $(".sec_whitebox_t")
        , $wboxBottom = $(".sec_whitebox_b")
        , speed150 = 150
        , speed250 = 250
        , speed300 = 300;

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

    /* main 와이트박스 border값 조절 이벤트 */
    var whiteboxControlEvent = function () {

        var thisEvent = function () {
            winWdControlEvent();
            $wboxTop.css("border-right", $winWd + "px solid transparent");
            $wboxBottom.css("border-right", $winWd + "px solid #f2f3fa");
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

    /* 스크롤 opacity 이벤트 */
    var mainOpcChangeEvent = function () {
        winHtControlEvent();
        var $scrollValue = $(window).scrollTop();
        var $sss = $scrollValue / $winHt;

        if ($sss <= 1) {
            $("#tit_header").css("opacity", 1 - $sss);
            $("#tit_main").css("opacity", $sss);
        } else {
            $("#tit_header").css("opacity", 0);
            $("#tit_main").css("opacity", 1);
        }
    };
    mainOpcChangeEvent();

    $(window).on("scroll", function () {
        mainOpcChangeEvent();
        $(window).on("resize", function () {
            clearTimeout(timer2);
            timer2 = setTimeout(function () {
                mainOpcChangeEvent();
            }, sec);
        });
    });

    /* 메인메뉴 클릭이벤트 */
    var $mainSec = $(".main_sec");

    $($mainSec).one("click", function () {

        var $mainSecOffset = $(this).offset().top;
        var $thisH3 = $(this).find("h3").text();
        winWdControlEvent();
        winHtControlEvent();
        $("html, body").stop().animate({ scrollTop: $mainSecOffset - $winHt / 4 }, 900, "easeInOutBack");

        setTimeout(function () {
            $($wboxTop).css("border-left", 0 + "px solid transparent");
            $($wboxTop).stop().animate({ borderLeftWidth: $winWd }, speed300);
            $($wboxBottom).css("border-left", 0 + "px solid #f2f3fa");
            $($wboxBottom).stop().animate({ borderLeftWidth: $winWd }, speed300);
            setTimeout(function () {
                $("html").stop().animate({ opacity: 0 }, speed250);
                $($wboxTop).css("border-right", 0);
                $($wboxBottom).css("border-right", 0);
                setTimeout(function () {
                    switch ($thisH3) {
                        case "사용기술목록": window.location = "html/01sub00.html";
                            break;
                        case "자기소개": window.location = "html/02sub00.html";
                            break;
                        case "보유기술": window.location = "html/03sub00.html";
                            break;
                        case "포트폴리오": window.location = "html/04sub00.html";
                            break;
                        case "개인공부정리": window.location = "html/05sub00.html";
                            break;
                    }
                }, speed300);
            }, speed300);
        }, 700);
    });

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


/*
        $(function(){
            $("html, body").on('mousewheel DOMMouseScroll', function(e) {
                var E = e.originalEvent;
                delta = 0;
                if (E.detail) {
                    delta = E.detail * -40;
                    $('body').append(delta);
                }else{
                    delta = E.wheelDelta;
                    $('body').append(delta);
                };
            });
        });
        */