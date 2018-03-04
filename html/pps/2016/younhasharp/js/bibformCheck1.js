
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

		

	});	//폼 submit 끝

	

});//종료