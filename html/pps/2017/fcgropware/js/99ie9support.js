


$(document).ready(function(){

	
	var qqq = function(ppp){
		var speed1 = 200;
		var speed2 = 100;
		var delay1 = 150;
		var bgdelay = 50;
		
		$("#nav_gnb > ul > " + ppp + "").hover(function(){
			$(this).stop(true).delay(delay1).animate({backgroundColor:"#cc435a"}, speed1);
			$(this).children(".etc_boxshadow").show(0).stop().animate({opacity:1}, speed1);
			$(this).find(".etc_mov_horz_t, .etc_mov_horz_b").stop(true).animate({width:"170px"}, speed2);
			$(this).find(".etc_mov_vert_t, .etc_mov_vert_b").stop(true).delay(speed2).animate({height:"130px"}, speed2);
		}, function() {
			$(this).stop(true).animate({backgroundColor:"#343642"}, speed1);
			$(this).children(".etc_boxshadow").stop().animate({opacity:0}, speed1);
			$(this).find(".etc_mov_vert_t, .etc_mov_vert_b").stop(true).delay(bgdelay).animate({height:"0px"}, speed2);
			$(this).find(".etc_mov_horz_t, .etc_mov_horz_b").stop(true).delay(bgdelay+speed2).animate({width:"0px"}, speed2);
		});
		
	};
	

	var yyy = function(eee){
		eee.css("background-color", "#cc435a");
		eee.find(".etc_mov_vert_t, .etc_mov_vert_b").css({"background-color":"#cc435a", "height":"130px"});
		eee.find(".etc_mov_horz_t, .etc_mov_horz_b").css({"background-color":"#cc435a", "width":"170px"});
	}

	
	var iii = function(){
	
	var $aa = $("#nav_gnb > ul > li:nth-of-type(1)");
	var $aa2 = $("#nav_gnb > ul > li:nth-of-type(2)");
	var $aa3 = $("#nav_gnb > ul > li:nth-of-type(3)");
		
	var $bb = $("#etc_navi_title");
	var ppp;
	
	var ccc = ["전자결재", "공지사항", "계정관리", "나의정보"];
	
	if($bb.html() == ccc[0]) {
		ppp = "li:nth-of-type(n+2)";
		qqq(ppp);
		yyy($aa);
	} else if($bb.html() == ccc[1]) {
		ppp = "li:nth-of-type(1), #nav_gnb > ul > li:nth-of-type(n+3)";
		qqq(ppp);
		yyy($aa2);
	} else if($bb.html() == ccc[2] || $bb.html() == ccc[3]) {
		ppp = "li:nth-of-type(1), li:nth-of-type(2)";
		qqq(ppp);
		yyy($aa3);
	} };
	
	iii();
	
	
	var www = function(){
		var speed1 = 150;
		
		$(".login_inputbox").hover(function(){
			$(this).children(".inputbox_shadow").show(0).stop().animate({opacity:1}, speed1);
		}, function() {
			$(this).children(".inputbox_shadow").stop().animate({opacity:0}, speed1);
		});
		
	};
	www();
	
	
});


/*placeholder*/
!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this);