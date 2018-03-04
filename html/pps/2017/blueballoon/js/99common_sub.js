
/* 로케이션 부분 */
$(window).on('load',function(){
	
	$('#title_location #location_loc1').click(function(){
		$('#title_location #location_loc1 ul').stop().fadeToggle(100);
	}).mouseleave(function(){ 
		$('#title_location #location_loc1 ul').stop().hide(0);
	});
	
	$('#title_location #location_loc2').click(function(){
		$('#title_location #location_loc2 ul').stop().fadeToggle(100);
	}).mouseleave(function(){ 
		$('#title_location #location_loc2 ul').stop().hide(0);
	});
	
	$('#title_location #location_loc3').click(function(){
		$('#title_location #location_loc3 ul').stop().fadeToggle(100);
	}).mouseleave(function(){ 
		$('#title_location #location_loc3 ul').stop().hide(0);
	});
	
});

$(function(){$('.bxslider').bxSlider({minSlides: 4,maxSlides: 4,slideWidth: 300,slideMargin: 0,ticker: true,speed: 30000});});

$(function(){
$('.bxslider2').bxSlider({
  captions: true,
  speed:300
});
});




