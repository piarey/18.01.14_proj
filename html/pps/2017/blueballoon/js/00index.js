// JavaScript Document

/* bx슬라이더 제어문 */
$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: true, 
		autoControls: true, 
		mode: 'fade', 
		pause:999*999,
		nextText:'<img src="../images/common/slide_next.png" width="40px" height="40px" />',
		prevText:'<img src="../images/common/slide_prev.png" width="40px" height="40px" />'
		});
		
	$('.bxslider_bestpd').bxSlider({
		auto: true,
		pager:false,
  		slideWidth: 285,
    	minSlides: 2,
   	 	maxSlides: 4,
    	moveSlides: 1,
  		slideMargin: 20,
		nextText:'<img src="../images/common/bestpd_next.png" />',
		prevText:'<img src="../images/common/bestpd_prev.png" />',
		pause: 3000
	});
	
	$('.bxslider_pointpd').bxSlider({
		mode: 'vertical',
		pager:false,
		auto:true,
  		hideControlOnEnd: true,
		pause: 4000,
		nextText:'<img src="../images/common/pointpd_next.png"" />',
		prevText:'<img src="../images/common/pointpd_prev.png"" />'
	});
});

/* bx슬라이더 안 pre/next 버튼 */
$(window).on('load', function() {
	var speed3 = 0;
	var speed4 = 200;
	
	$('#error_index_bxslider #title_top').hover(
		function(){ $('#title_top .bx-prev').stop().animate({marginTop:'0px'},speed3).animate({left:'150px', opacity:'1'},speed4);},
		function(){ $('#title_top .bx-prev').stop().animate({marginTop:'0px'},speed3).animate({left:'100px', opacity:'0'},speed4);}).hover(
		function(){ $('#title_top .bx-next').stop().animate({marginTop:'0px'},speed3).animate({right:'150px', opacity:'1'},speed4);},
		function(){ $('#title_top .bx-next').stop().animate({marginTop:'0px'},speed3).animate({right:'100px', opacity:'0'},speed4);});	
});


/* 뭘까요 테마여행 효과 */
$(window).on('load', function(){
	
	$('.tabs_small_outer').hover(
		function(){ $('.tabs_small_inner', this).addClass('animate_themapd_common1')
						$('.tabs_common_title', this).stop().hide(0) 
						$('.tabs_small_cont', this).stop().animate({opacity:'1'},300)  },
		function(){ $('.tabs_small_inner', this).removeClass('animate_themapd_common1') 
						$('.tabs_common_title', this).stop().show(0)
						$('.tabs_small_cont', this).stop().animate({opacity:'0'},300)  }
	);	
	
	$('.tabs_large_outer').hover(
		function(){ $('.tabs_large_inner', this).addClass('animate_themapd_common2')
						$('.tabs_common_title', this).stop().hide(0) 
						$('.tabs_large_cont', this).stop().animate({opacity:'1'},300)  },
		function(){ $('.tabs_large_inner', this).removeClass('animate_themapd_common2') 
						$('.tabs_common_title', this).stop().show(0)
						$('.tabs_large_cont', this).stop().animate({opacity:'0'},300)  }
	);	
	
});


/* 드래그이벤트 */
$(function(){
	
	$('.drageventpd_component_common').hover( 
		function(){ $(this).addClass('drageventpd_point') },
		function(){ $(this).removeClass('drageventpd_point') }
	);
	
	$('.drageventpd_component_common').draggable({
		inertia: "ui-draggable",
		revert:true,
		containment:"#middle_drageventpd"
		});
	
	$('#drageventpd_box_inner').droppable({
		drop:function(event, ui){
			var url = ui.draggable.attr('dragurl');
			window.open(url);
		
		}
	});
	
});

