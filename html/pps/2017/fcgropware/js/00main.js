// JavaScript Document

$(window).on("resize load", function(){
	var winHt = $(window).innerHeight() - 205;
	document.getElementById("main_bg").style.height = winHt+"px";
});

