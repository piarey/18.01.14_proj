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
    var $wboxTop = $(".sec_whitebox_t");
    var $wboxBottom = $(".sec_whitebox_b");
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



    /* */
    var navMobileOpenEvent = function(){
        var $thisElement = $("#tit_nav_mobile");
        $(".nav_gnb_mobile_open").on("click", function () {

            $thisElement.show().stop().animate({opacity:1}, speed300);
        });        

    };
    navMobileOpenEvent();

    /* */
    var navMobileCancelEvent = function () {
        var $thisElement = $("#tit_nav_mobile");
        $(".nav_mobile_cancel").on("click", function () {
            $thisElement.stop().animate({opacity:0}, speed300);
            setTimeout(function () {
                $thisElement.css("display", "none");
            }, speed300);
        });
    };
    navMobileCancelEvent();


    /* */
    $(".nav_gnb").draggable({cursor:"all-scroll",containment:"html"});

    $(".nav_gnb").hover(function(){
        $(".test").css("opacity", 1);
    }, function(){
        $(".test").css("opacity", 0);
    });
    

    /* */
    $("#etc_fouc").stop().animate({ opacity: 1 }, 250);

});