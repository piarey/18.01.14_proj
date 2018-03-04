

/* 						설명용설명용			*/

// JavaScript Document

 

$(function(){

	//엔터키 눌렀을 떄 무조건 submit 안되도록

	//문서 전체에 이벤트 처리

	$(document).on('keydown',function(e){

		if(e.keyCode == 13) return false;

	});

	

	

	$('#id').focus(); //시작 시 id에 포커스

	

	//엔터키 눌렀을 때 포커스 이동

	//아이디 입력 후 엔터키 눌렀을 때 비밀번호로 포커스 이동

	$('#id').on('keydown',function(e){

		if($('#id').val()!=""&& e.keyCode==13)//아이디를 입력해야만 이동

		//if(e.keyCode == 13) //입력하지 않아도 이동

			$('#pwd').focus()

	});

	

	//input에 포커스 있을 때

	$('input').on('focus',function(){

		$(this).css('background-color','rgb(232,232,232)');

	});

	

	//포커스 잃을 때

	$('input').on('blur',function(){

		$(this).css('background-color','white');

	});

	

	//newMemberForm의 submit(전송) 버튼 누를 때

	$('#newMemberForm').on('submit',function(){

		if($('#id').val()==""){ //아이디 입력 안했을 때

			alert("아이디를 입력하세요.")

			$('#id').focus();

			return false; //서버로 전송되기 않게 함

		}

		

		if($('#pwd').val()==""){	//비밀번호를 입력하지 않은 경우

			alert("비밀번호를 입력하세요.")

			$('#pwd').focus();

			return false;

		}
		
		if($('#name').val()==""){

			alert("성명을 입력하세요.")

			$('#name').focus();

			return false;

		}
		
		if($('#jm1').val()==""){

			alert("주민번호를 입력하세요.")

			$('#jm1').focus();

			return false;

		}
		
		if($('#jm2').val()==""){	

			alert("주민번호를 입력하세요.")

			$('#jm2').focus();

			return false;

		}
		
		if($('#yy1').val()==""){	

			alert("생년월일중 년도를 입력하세요.")

			$('#yy1').focus();

			return false;

		}
		
		if($('#yy2').val()==""){	

			alert("생년월일중 월을 입력하세요.")

			$('#yy2').focus();

			return false;

		}
		
		if($('#yy3').val()==""){	

			alert("생년월일중 일을 입력하세요.")

			$('#yy3').focus();

			return false;

		}
		
		if($('#hp1').val()==""){	

			alert("휴대폰 번호중 앞 3자리를 입력하세요.")

			$('#hp1').focus();

			return false;

		}
		
		if($('#hp2').val()==""){	

			alert("휴대폰 번호중 가운데 4자리를 입력하세요.")

			$('#hp2').focus();

			return false;

		}
		
		if($('#hp3').val()==""){	

			alert("휴대폰 번호중 마지막 4자리를 입력하세요.")

			$('#hp3').focus();

			return false;

		}

		

		//체크박스를 선택하지 않은 경우

		if(!$('input[type="checkbox"]').is(':checked')){

			alert("관심분야를 1개 이상 선택하세요.");

			return false;

		}

		

		if($('select').val()==""){//select 선택하지 않은 경우

			alert("취미를 선택하세요.")

			$('select').focus();

			return false;

		}

		

	});	//폼 submit 끝

	

	

	//키보드 이벤트

	//첫 번째 번호 입력란에서 입력값이 3개가 되면 포커스 이동

	$('#hp1').on('keyup',function(){

		if( $(this).val().length==3)

			$('#hp2').focus();

	});

	

	//두 번째 번호 입력란에서 입력값이 4개가 되면 포커스 이동

	$('#hp2').on('keyup',function(){

		if( $(this).val().length==4)

			$('#hp3').focus();

	});
	
	
	$('#jm1').on('keyup',function(){

		if( $(this).val().length==6)

			$('#jm2').focus();

	});


	

});//종료