// JavaScript Document

$(document).ready(function (){
	
	$("html").removeClass("no_js");
	
	var $qq12 = $("#qq1, #qq2");
	
	var tnavClickEv = function(){
	$qq12.on("click", function() {
		var $aa = $(this);
		$aa.next().slideToggle(100, "linear");
		
		var $bb = $aa.children(".etc_btn_toggle");

		if ($bb.html() == "▼") {
			$bb.html("▲");
		} else {
			$bb.html("▼");
		}
	});};
	
	tnavClickEv();
	
	/*
	var swing = function() { 
        $('#nav_gnb > ul > li:nth-of-type(1)').animate({opacity:0.2},300).animate({opacity:1},300, swing); 
    };
	swing();
	*/

	
	
	$("#title_main, #nav_location").on("click", function() {
		$qq12.next().hide();
	});
	
	
	
});