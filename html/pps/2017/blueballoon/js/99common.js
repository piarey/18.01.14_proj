
/* 하단 버튼 누르면 맨위로 올라가는거 */
$(window).on('load', function(){
		
	$('#etc_rideup').show().hover(
		function(){ $(this).stop().animate({opacity:'1'}, 280)},
		function(){ $(this).stop().animate({opacity:'0.5'}, 280)}
	);
	
	$('#etc_rideup').click(function(){
		$('html, body').stop().animate({scrollTop:0}, 400);
	});


/* 오른쪽 메뉴_버튼 */
$('#title_right #cont_hide').animate({opacity:'0'}, speed3);
var header = 0;
var speed = 400;
var speed2 = 280;
var speed3 = 0;
	
		$('#title_right #right_button img').click(function(){
		if(header == 0) {
            $('#title_right #cont_show').animate({width:'0px', opacity:'0'}, speed).hide(speed3);
			$('#title_right #right_button').animate({right:'50px'}, speed2);
			$('#img_button1').animate({opacity:'0'}, speed3).delay(100).animate({opacity:'1'}, speed2).attr("src", "../images/common/right_prev.png").attr("alt", "메뉴 늘이기");
			$('#title_right #cont_hide').animate({opacity:'1'}, 500);
			header=1;
		}
	
		else {
			$('#title_right #cont_hide').animate({opacity:'0'}, speed2);
            $('#title_right #cont_show').show(speed3).animate({width:'120px', opacity:'1'}, speed);
			$('#title_right #right_button').delay(100).animate({right:'120px'}, speed2);
			$('#img_button1').animate({opacity:'0'}, speed3).delay(100).animate({opacity:'1'}, speed2).attr("src", "../images/common/right_next.png").attr("alt", "메뉴 줄이기");
			header=0;
		}
	
		});

		$('#title_right #cont_hide').click(function(){
		$('#title_right #cont_hide').animate({opacity:'0'}, speed2);
            $('#title_right #cont_show').show(speed3).animate({width:'120px', opacity:'1'}, speed);
			$('#title_right #right_button').delay(100).animate({right:'120px'}, speed2);
			$('#img_button1').animate({opacity:'0'}, speed3).delay(100).animate({opacity:'1'}, speed2).attr("src", "../images/common/right_next.png").attr("alt", "메뉴 줄이기");
			header=0;
		});


/* 검색창_큐브효과 */
	var header_qube = 0;
	
	$('.li_search').click(function() {
			
		if(header == 0){
			
			$('.content-wrapper1').stop().animate({marginTop:'60px'});
			
			setTimeout(function(){
			$('.content-wrapper1').addClass('switch-show');
			$('.search-box1').addClass('show-search-box');
			},350);
			
			setTimeout(function(){
				$('.content-wrapper1').removeClass('switch-show');
				$('.search-button1').removeClass('show-search-button').addClass('hide-search-button');
				$('.search-box1').addClass('showed-search-box');
				header = 1;
				
			},700);
		}
		
		else {
		
			$('.search-button1').removeClass('hide-search-button');
			$('.search-box1').addClass('hidden-search-box');
			$('.content-wrapper1').addClass('switch-hide');
		
			setTimeout(function(){
		
				$('.content-wrapper1').animate({marginTop:'0'});
				$('.content-wrapper1').removeClass('switch-hide');
				$('.search-button1').removeClass('show-search-button');
				$('.search-box1').removeClass('show-search-box showed-search-box hidden-search-box');
				header = 0;
				
			},350);		
			
		}
	});


/* 푸터_효과 */
	var speed = 400;
	var header = 0;	
	
	$(window).on('scroll', function(){
	
		var test = $(document).scrollTop() + $(window).height() + 300;
    
		if($(document).height() < test) {
	
			if(header == 0) {
			
          	 	header = 1;
		  		$('#title_fotter_inner').stop().animate({ paddingTop:'30px' }, speed);
		   		$('#cont_footer').stop().animate({ paddingTop:'30px' }, speed);
		   		$('#title_footer_outer').stop().animate({backgroundColor:'#333'}, speed);
		   		$('#menu_footer_lf').stop().animate({left:'0', width:'800px'}, speed);
		   		$('#menu_footer_rt').stop().animate({right:'0', width:'800px'}, speed);
        	}
		} 
		else {
        
		if(header == 1) {
			
           header = 0;
		   $('#title_fotter_inner').stop().animate({ paddingTop:'0px' }, speed);
		   $('#cont_footer').stop().animate({ paddingTop:'0px' }, speed);
		   $('#title_footer_outer').stop().animate({backgroundColor:'transparent'}, speed);
		   $('#menu_footer_lf').stop().animate({left:'192px', width:'800px'}, speed);
		   $('#menu_footer_rt').stop().animate({right:'191px', width:'800px'}, speed);
        }  
    	}
	});	


/* (로그인 창)백그라운드 흐려짐 효과 */
	var header = 0;


	$('.login_button').click(function(){
		if(header == 0){
			$('html, body').stop().animate({scrollTop:0}, 0);
			$('#title_login').show(0);
			$('#wrap_login').show(0);
			$('body').addClass('body_overlay');
			header = 1;
		}
	});
	
	$('#wrap_login').click(function(){
		if(header == 1){
			$('#title_login').hide();
			$('#wrap_login').hide();
			$('body').removeClass('body_overlay');
			header = 0;
		}
	});
	
	$('.login_button_exit').click(function(){
		if(header == 1){
			$('#title_login').hide();
			$('#wrap_login').hide();
			$('body').removeClass('body_overlay');
			header = 0;
		}
	});
	
});




/* 오른쪽 메뉴부분*/

$(window).on('load scroll', function(){

    if($(document).scrollTop() > 187) {
		$('#title_right').show().removeClass('menu_right_mdf1').addClass('menu_right_mdf2');
		$('#cont_show ul li:nth-child(1)').removeClass('test');
		$('#cont_hide ul li:nth-child(1)').removeClass('test');
		$('#right_button').removeClass('test');
	} 
	
	else {
        $('#title_right').show().removeClass('menu_right_mdf2').addClass('menu_right_mdf1');
		$('#cont_show ul li:nth-child(1)').addClass('test');
		$('#cont_hide ul li:nth-child(1)').addClass('test');
		$('#right_button').addClass('test');
	}
	
});


/* 메인메뉴 */

$(window).on('load',function(){
	
	var speed = 400;
	var header = 0;
	
	$('#menu_main_outer').show();
	$(window).on('scroll', function(){
	if($(document).scrollTop() > 100) {
	
		if(header == 0) {
			
           header = 1;
            $('#menu_main_inner').stop().animate({ marginTop:'0px' }, speed);
			$('#menu_main_outer').stop().animate({backgroundColor:'#4776d5'}, speed);
			$('#menu_main_ani_lf').stop().animate({left:'0', marginTop:'0', width:'500px'}, speed);
			$('#menu_main_ani_rt').stop().animate({right:'0', marginTop:'0', width:'500px'}, speed);
		}
		
    } else {
        
		if(header == 1) {
			
           header = 0;
            $('#menu_main_inner').stop().animate({ marginTop:'30px' },speed);
			$('#menu_main_outer').stop().animate({backgroundColor:'transparent'}, speed);
			$('#menu_main_ani_lf').stop().animate({left:'387px', marginTop:'0px', width:'0'}, speed);
			$('#menu_main_ani_rt').stop().animate({right:'387px', marginTop:'0px', width:'0'}, speed);
		 }  
    }	
	
	});
});


/* selectric 실행문 */
$(function() {
  $('select').selectric();
  $('.slimtable-paging-select').selectric();
  
  $( "#tabs" ).tabs();
});

/**/


