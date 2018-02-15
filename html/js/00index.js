
/* 이미지 */
$(window).on("load", function () {

    /* 전역변수 */
    var $outerWd = $("#tit_outer").width();
    var sec = 100;
    var timer = null;
    var timer2 = null;
    var timer3 = null;
    var $winWd = 0;
    var $winHt = 0;

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

        var $wboxTop = $(".sec_whitebox_t");
        var $wboxBottom = $(".sec_whitebox_b");

        var thisEvent = function () {
            winWdControlEvent();
            $wboxTop.css("border-right", $winWd + "px solid transparent");
            $wboxBottom.css("border-right", $winWd + "px solid #fafafa");
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


    /* */
    /*
    var lastScroll = 0;

    $(window).scroll(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            var $aaa = $(".main_sec");
            var $bb = $(this).scrollTop();

            if ($bb > lastScroll) {
                $aaa.stop().animate({ marginTop: "10px" }, 300);

            }
            else {
                $aaa.stop().animate({ marginTop: "0px" }, 300);

            }
            lastScroll = $bb;


        }, sec)
    });
    */

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


    

    /* */
    var a = $(".main_sec");

    $(a).one("click", function () {

        var aaa = $(this).offset().top;
        winWdControlEvent();
        winHtControlEvent();
        $("html, body").stop().animate({ scrollTop: aaa - $winHt/4}, 900, "easeInOutBack");

        
        var $wboxTop = $(".sec_whitebox_t");
        var $wboxBottom = $(".sec_whitebox_b");

        setTimeout(function () {
            $($wboxTop).css("border-left", 0 + "px solid transparent");
            $($wboxTop).stop().animate({ borderLeftWidth: $winWd }, 500);
            $($wboxBottom).css("border-left", 0 + "px solid #fafafa");
            $($wboxBottom).stop().animate({ borderLeftWidth: $winWd }, 500);
            setTimeout(function () {
                $($wboxTop).css("border-right", 0);
                $($wboxBottom).css("border-right", 0);
                //window.location = "html/01sub00.html";
            }, 500);
        }, 700);


    });


});



$(document).ready(function () {





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