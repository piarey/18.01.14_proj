// JavaScript Document

/* 달력 */
$(function() {
	
	$('#qbook_body1 .qbook_flight2').click(function(){
		$('#datepicker2').hide();
	});
	
	$('#qbook_body1 .qbook_flight1').click(function(){
		$('#datepicker2').show();
	});
	
});

/* 달력 */
$(function() {
$('#datepicker, #datepicker2').datepicker({
	dateFormat:"yy-m-d",
	/*numberOfMonths:[1,3],*/
	/*showAnim:"fold",*/
	showButtonPanel:true,
	yearRange:"c-1:c+1",
	minDate:'0m'
});
});

/* 달력 한글화 */
$(function() {
$.datepicker.setDefaults({
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년',
	closeText: '닫기',
	currentText: '오늘'
});
});

/* 실행문 자체는 정상이나 먹통임 */
$(window).on('load', function(){
	
	$('#event_slider_sub .event_slider_sub_left').addClass('event_slider_sub_hover');
	var header = 0;
	
	$('#middle_event .bx-controls-direction .bx-prev, #middle_event .bx-controls-direction .bx-next').on('click', function(){ 

		if(header == 0) {
			$('#event_slider_sub .event_slider_sub_left').removeClass('event_slider_sub_hover');
			$('#event_slider_sub .event_slider_sub_right').addClass('event_slider_sub_hover');
			header = 1;
		}
		
		else {
			$('#event_slider_sub .event_slider_sub_left').addClass('event_slider_sub_hover');
			$('#event_slider_sub .event_slider_sub_right').removeClass('event_slider_sub_hover');
			header = 0;
		}
	});
});

/* slimtable 실행문
slimtable 안의 셀렉트박스 때문에 window 사용 */
$(window).on('load', function() {
	$(".dbook_table1").slimtable({
	keepAttrs: [ "data-id" ],
	ippList:[5,20,40],
	itemsPerPage:20
});
});



