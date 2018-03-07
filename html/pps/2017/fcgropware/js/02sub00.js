// JavaScript Document




$(document).ready(function (){

	var delta = 100;
	var timer = null;
	/*
	var qq = function () {
		$("#title_head").stop().animate({left:500}, 2000);
	}
	*/
	
	var aa;
	var bb;
	var i;
	var cc;		
	
	aa = $(window).innerWidth();
	bb = (Math.floor(aa/50))*(100/50);

	cc = "";
			
	for(i=0; i<bb; i++) {
		cc += "<div class='divs"+ (i+1) +"'></div>";
	}
	$("#slideimg_box").append(cc);	
	
	
	var tcount = 1;
	var okno = true;
	
	var imgcount = 0;
	var slideimgs = ["slideimg_bg1", "slideimg_bg2", "slideimg_bg3", "slideimg_bg4"];
	var dd = document.getElementById("title_slideimg");
	/*
	var ss22 = function () {		

		if(imgcount==0 && tcount > ((bb*2)-1)) {
			dd.style.backgroundImage = "url(../images/" + slideimgs[1] + ".jpg)"; imgcount++;
		} else if(imgcount==1 && tcount > ((bb*2)-1)) {
			dd.style.backgroundImage = "url(../images/" + slideimgs[2] + ".jpg)"; imgcount++;
		} else if(imgcount==2 && tcount > ((bb*2)-1)) {
			dd.style.backgroundImage = "url(../images/" + slideimgs[0] + ".jpg)"; imgcount=0;
		}
		
		
		if(tcount <= bb && okno == true) {
			$(".divs"+ tcount +"").css("background-color", "#000");
			tcount++;
			if(tcount > bb) {
				okno = false;
			}
		} else {
			$(".divs"+ (tcount-bb) +"").css("background-color", "transparent");
			tcount++;
			
			if(tcount > bb*2) {
				okno = true;
				tcount = 1;
			}			
		}		
	}
	*/	
	var sss;
	
	//sss = setInterval(ss22, 20);

	/*
	$(window).on("resize", function(){
				 
		clearTimeout(timer);
		timer = setTimeout(function () {
			
			clearInterval(sss);
			aa = $(window).innerWidth();
			bb = (Math.floor(aa/50))*(100/50);

			cc = "";
			
			for(i=0; i<bb; i++) {
				cc += "<div class='divs"+ (i+1) +"'></div>";
			}
			$("#slideimg_box").empty();
			$("#slideimg_box").append(cc);
			
			tcount = 1;
			okno = true;
			sss = setInterval(ss22, 20);
			
		}, delta);

	});
	*/





	
	/*
	$("#www").on("click", function(){
		
		clearTimeout(timer);
		timer = setTimeout(function () {
			$("#title_head").stop().animate({left:-500}, 2000);}
		, delta);

	});
	*/



	/*
		
		setInterval(function(){
			for(i=0; i<40; i++) {
		
				$(".divs" + (i+1) + "").css("background-color", "transparent");

		
			}
		}, 2000);

	*/



	var suvnavClickEv = function(){
	$("#ww1, #ww2").on("click", function() {
		var $aa = $(this);
		$aa.next().slideToggle(100, "linear");
		
		var $bb = $aa.find(".etc_btn_toggle");
		var $cc = $aa.find(".fas");

		if ($bb.html() == "▼") {
			$bb.html("▲");
			$cc.removeClass("fa-folder-open").addClass("fa-folder");
		} else {
			$bb.html("▼");
			$cc.removeClass("fa-folder").addClass("fa-folder-open");
		}
	}); };
	suvnavClickEv();

	
	var subnavHoverEv = function(){
		var speed = 150;
	$("#main_subnav > ul > li").hover(function(){
		$(this).children(".etc_mov2_lr").stop(true).animate({width:"70px"}, speed);
		$(this).children(".etc_mov2_rl").stop(true).animate({width:"70px"}, speed);
	}, function() {
		$(this).children(".etc_mov2_lr").stop(true).animate({width:"0px"}, speed);
		$(this).children(".etc_mov2_rl").stop(true).animate({width:"0px"}, speed);
	});
	
	$("#main_subnav > ul > li > ul > li").hover(function(){
		$(this).children(".etc_mov2_lr_in").stop(true).animate({width:"60px"}, speed);
		$(this).children(".etc_mov2_rl_in").stop(true).animate({width:"60px"}, speed);
	}, function() {
		$(this).children(".etc_mov2_lr_in").stop(true).animate({width:"0px"}, speed);
		$(this).children(".etc_mov2_rl_in").stop(true).animate({width:"0px"}, speed);
	}); };
	subnavHoverEv();
	
	
});