
/**************************************************/
/* 	요건 스크롤 픽스드 */
$(function() {
$('#nav_top').scrollToFixed();
});

/**************************************************/
/*	요건 스크롤 높이에 따라 색깔 바뀌는거nㅜㅠㅠ */
$(window).scroll(function(){ 
	var newImg1 = '<img src="../images/bibbg1.png" id="moveToTopBtn">';
	var newImg2 = '<img src="../images/bibbg2.png" id="moveToTopBtn">';
	var logoImg1 = '<img src="../images/biblogo1.png" id="logoimg">';
	var logoImg2 = '<img src="../images/biblogo2.png" id="logoimg">';
	
    var height = $(document).scrollTop();
	
    if(height > 150){ 
      	$('#nav_top').addClass('nav_top_add1').removeClass('nav_top_add2');
		$('#mainMenuBox a').addClass('mainMenuBox_a1').removeClass('mainMenuBox_a2');
		/**/
		$('#moveToTopBtn').remove();
		$('#menuItem li:last-child').after(newImg1);
		/**/
		$('#logoimg').remove();
		$('#menuItem li:first-child a .logo_position').after(logoImg1);
		/**/
		$('#moveToTopBtn').on('click', function(){
		$('html, body').animate({scrollTop:0}, 500);
	});
		
    }
	else { 
     	 $('#nav_top').addClass('nav_top_add2').removeClass('nav_top_add1');
		 $('#mainMenuBox a').addClass('mainMenuBox_a2').removeClass('mainMenuBox_a1'); 
		 /**/
		 $('#moveToTopBtn').remove();
		$('#menuItem li:last-child').after(newImg2);
		/**/
		$('#logoimg').remove();
		$('#menuItem li:first-child a .logo_position').after(logoImg2);
		/**/
		$('#moveToTopBtn').on('click', function(){
		$('html, body').animate({scrollTop:0}, 500);
	});
		 
    } 
});

/*************************************************/
/*	요건 막 페이지를 켰을때 보여주려고 */
$(function() {
	var newImg = '<img src="../images/bibbg2.png" id="moveToTopBtn">';
	var logoImg = '<img src="../images/biblogo2.png" id="logoimg">';
	var height = $(document).scrollTop();
	
	$('#mainMenuBox a').addClass('mainMenuBox_a2')
	$('#menuItem li:last-child').after(newImg);
	$('#menuItem li:first-child a .logo_position').after(logoImg);
	
	if(height > 0){
		$('#logoimg').remove();
		$('#newImg').remove();
		$('#mainMenuBox a').removeClass('mainMenuBox_a2')
	}
	
});

/*************************************************/
/*	요건 푸터부분 4개 sns */

$(function(){
	$('#bottomMenuBox ul li').addClass('bottomMenuBox_img1')
	
	$('#bottomMenuBox ul li').on('mouseover', function(){
		$(this).removeClass('bottomMenuBox_img1').addClass('bottomMenuBox_img2')
	});
	
	$('#bottomMenuBox ul li').on('mouseout', function(){
		$(this).removeClass('bottomMenuBox_img2').addClass('bottomMenuBox_img1')
	});
});

/*************************************************/
/* 햄버거메뉴 */

$(function() {
	$(".menu-icon").click(function() {
		$(".submenu").toggle();
	});
	
	$("#btnClose").click(function() {
		$(".submenu").toggle();
	});
    
});

/*************************************************/
/* 온도계 내려오는거 */

$(function() {
	$('.box_heart1').hover(function(){
			$(this).animate({height:500 }, 1500);
			$(this).addClass('box_heart_op')
			});
	$('.box_heart2').hover(function(){
			$(this).animate({height:100 }, 1500);
			$(this).addClass('box_heart_op')
			});
	$('.box_heart3').hover(function(){
			$(this).animate({height:200 }, 1500);
			$(this).addClass('box_heart_op')
			});
	$('.box_heart4').hover(function(){
			$(this).animate({height:300 }, 1500);
			$(this).addClass('box_heart_op')
			});
});
	
	

	