function joincheck(){  //join01 페이지 동의,동의안함 체크
	var radioObj = join.agree1;
	var radioObj2 = join.agree2;
	if(radioObj[1].checked)
		{
			alert("동의하셔야지 회원가입이 가능합니다!")
			return;
		}
	if(radioObj2[1].checked)
		{
			alert("동의하셔야지 회원가입이 가능합니다!")
			return;
		}

	join.submit();
}

function logincheck(){  //로그인 아이디 존재,비번 체크
	var check = document.login.id.value;
	var check2 = document.login.password.value;
	if(check == "")
	{
		alert("아이디를 입력해 주세요!");
		return;
	}
	if(check2 == "")
	{
		alert("비밀번호를 입력해 주세요!");
		return;
	}
	document.login.submit();
}


function onEnterSubmit()     // 로그인버튼을 클릭하지 않고, 엔터키를 입력하더라도 로그인 가능하게 해줌               
{
  	var keyCode = window.event.keyCode;
   	if(keyCode==13)  document.login.submit();    //  "keyCode==13"은 엔터키가 입력됨을 의미함
}

function idreload()   //중복확인버튼 눌렀는지 안눌렀는지 체크
{
	opener.document.newMem.id.value="";
	opener.document.newMem.id_hidden.value="";
}

function checkID()		// ID를 입력받은 후에 팝업창을 띄워주면서 
{  	//   checkId.jsp (중복검사 수행)를 호출해 주는 자바스크립트 함수
	var id = newMem.id.value;	
	var a ="check";
    if (id  == "")				
    {
		alert("ID를 입력해 주세요!"); 
		newMem.id.focus(); 
		return; 
    }
    document.newMem.id_hidden.value = a;
	
	window.open("checkId.jsp?id="+id,"win", "left=400, top=300, width=250, height=150, scrollbars=no, resizable=no");
}                                 

function checkfindID()
{
	if(document.findid.name.value == "")
	{
		alert("성명을 입력해 주세요!");
		document.findid.name.focus();
		return;
	}
	if(document.findid.joomin1.value == "")
	{
		alert("주민등록번호 앞자리를 입력해 주세요!");
		document.findid.joomin1.focus();
		return;
	}
	if(document.findid.joomin2.value == "")
	{
		alert("주민등록번호 뒷자리를 입력해 주세요!");
		document.findid.joomin2.focus();
		return;
	}
	document.findid.submit();
}

function updateValue()
{                                           
	if(document.newMem.id.value == "")    
    {
		alert("ID를 입력해 주세요!");  
		document.newMem.id.focus();					  
		return;                         
    }

    if(document.newMem.password.value == "") 
    {
		alert("비밀번호를 입력해 주세요!");
		document.newMem.password.focus();
		return;
    }

	if(document.newMem.password.value.length < 4) 
    {
		alert("비밀번호는 최소 4자입니다!");
		document.newMem.password.focus();
		return;
    }

	if(document.newMem.password.value != newMem.password2.value) 
    {
		alert("비밀번호를 동일하게 입력해주세요!");
		document.newMem.password2.focus();
		return;
    }

    if(document.newMem.name.value == "") 
    {
		alert("성명을 입력해 주세요!");
		document.newMem.name.focus();
		return;
    }

    if(document.newMem.joomin1.value == "") 
    {
		alert("주민등록번호 앞자리를 입력해 주세요!");
		document.newMem.joomin1.focus();
		return;
    }

	if(document.newMem.joomin1.value.length < 6) 
    {
		alert("주민등록번호 앞자리를 입력해 주세요!");
		document.newMem.joomin1.focus();
		return;
    }

    if(document.newMem.joomin2.value == "") 
    {
		alert("주민등록번호 뒷자리를 입력해 주세요!");
		document.newMem.joomin2.focus();
		return;
    }

	if(document.newMem.joomin2.value.length < 7) 
    {
		alert("주민등록번호 뒷자리를 입력해 주세요!");
		document.newMem.joomin2.focus();
		return;
    }

    if(document.newMem.birthYear.value == "") 
    {
		alert("태어난 연도를 입력해 주세요!");
		document.newMem.birthYear.focus();
		return;
    }

	if(document.newMem.birthYear.value.length < 4) 
    {
		alert("태어난 연도를 입력해 주세요!");
		document.newMem.birthYear.focus();
		return;
    }

    if(document.newMem.birthMonth.value == "") 
    {
		alert("태어난 달을 입력해 주세요!");
		document.newMem.birthMonth.focus();
		return;
    }

	if(document.newMem.birthMonth.value < 2) 
    {
		alert("태어난 달을 입력해 주세요!");
		document.newMem.birthMonth.focus();
		return;
    }

    if(document.newMem.birthDay.value == "") 
    {
		alert("태어난 날짜를 입력해 주세요!");
		document.newMem.birthDay.focus();
		return;
    }
	if(document.newMem.birthDay.value.length < 2) 
    {
		alert("태어난 날짜를 입력해 주세요!");
		document.newMem.birthDay.focus();
		return;
    }

    if(document.newMem.tel2.value == "") 
    {
		alert("중간번호를 입력해 주세요!");
		document.newMem.tel2.focus();
		return;
    }

	if(document.newMem.tel2.value.length < 4) 
    {
		alert("중간번호를 입력해 주세요!");
		document.newMem.tel2.focus();
		return;
    }

	 if(document.newMem.tel3.value == "") 
    {
		alert("끝번호를 입력해 주세요!");
		document.newMem.tel3.focus();
		return;
    }

	if(document.newMem.tel3.value.length < 4) 
    {
		alert("끝번호를 입력해 주세요!");
		document.newMem.tel3.focus();
		return;
    }

	if(document.newMem.zipcode.value == "") 
    {
		alert("집주소를 입력해 주세요! - (우편번호 찾기 버튼 클릭)");
		document.newMem.zipcode.focus();
		return;
    }

	if(document.newMem.address1.value == "") 
    {
		alert("집주소를 입력해 주세요! - (우편번호 찾기 버튼 클릭)");
		document.newMem.address1.focus();
		return;
    }

    if(document.newMem.address2.value == "") 
    {
		alert("상세주소를 입력해 주세요!");
		document.newMem.address2.focus();
		return;
    }

	if(document.newMem.hp2.value == "") 
    {
		alert("휴대폰 중간자리를 입력해 주세요!");
		document.newMem.hp2.focus();
		return;
    }

	if(document.newMem.hp2.value.length < 4) 
    {
		alert("휴대폰 중간자리를 입력해 주세요!");
		document.newMem.hp2.focus();
		return;
    }

    if(document.newMem.hp3.value == "") 
    {
		alert("휴대폰 끝자리 번호를 입력해 주세요!");
		document.newMem.hp3.focus();
		return;
    }  

	 if(document.newMem.hp3.value < 4) 
    {
		alert("휴대폰 끝자리 번호를 입력해 주세요!");
		document.newMem.hp3.focus();
		return;
    }  
	document.newMem.submit();
}

function mngupdateValue()
{                                           
	if(document.newMem.id.value == "")    
    {
		alert("ID를 입력해 주세요!");  
		document.newMem.id.focus();					 
		return;                         
    }

    if(document.newMem.password.value == "") 
    {
		alert("비밀번호를 입력해 주세요!");
		document.newMem.password.focus();
		return;
    }

    if(document.newMem.name.value == "") 
    {
		alert("성명을 입력해 주세요!");
		document.newMem.name.focus();
		return;
    }

    if(document.newMem.joomin1.value == "") 
    {
		alert("주민등록번호 앞자리를 입력해 주세요!");
		document.newMem.joomin1.focus();
		return;
    }

    if(document.newMem.joomin2.value == "") 
    {
		alert("주민등록번호 뒷자리를 입력해 주세요!");
		document.newMem.joomin2.focus();
		return;
    }

    if(document.newMem.birthYear.value == "") 
    {
		alert("태어난 연도를 입력해 주세요!");
		document.newMem.birthYear.focus();
		return;
    }

    if(document.newMem.birthMonth.value == "") 
    {
		alert("태어난 달을 입력해 주세요!");
		document.newMem.birthMonth.focus();
		return;
    }

    if(document.newMem.birthDay.value == "") 
    {
		alert("태어난 날짜를 입력해 주세요!");
		document.newMem.birthDay.focus();
		return;
    }

    if(document.newMem.tel2.value == "") 
    {
		alert("중간번호를 입력해 주세요!");
		document.newMem.tel2.focus();
		return;
    }

	 if(document.newMem.tel3.value == "") 
    {
		alert("끝번호를 입력해 주세요!");
		document.newMem.tel3.focus();
		return;
    }

	if(document.newMem.zipcode.value == "") 
    {
		alert("집주소를 입력해 주세요! - (우편번호 찾기 버튼 클릭)");
		document.newMem.zipcode.focus();
		return;
    }

	if(document.newMem.address1.value == "") 
    {
		alert("집주소를 입력해 주세요! - (우편번호 찾기 버튼 클릭)");
		document.newMem.address1.focus();
		return;
    }

    if(document.newMem.address2.value == "") 
    {
		alert("상세주소를 입력해 주세요!");
		document.newMem.address2.focus();
		return;
    }

	if(document.newMem.hp2.value == "") 
    {
		alert("휴대폰 중간자리 국번을 입력해 주세요!");
		document.newMem.hp2.focus();
		return;
    }

    if(document.newMem.hp3.value == "") 
    {
		alert("휴대폰 끝자리 번호를 입력해 주세요!");
		document.newMem.hp3.focus();
		return;
    }  
	document.newMem.submit();
}

function checkValue()            
{                                           
	if(newMem.id.value == "")     
    {
		alert("ID를 입력해 주세요!");  
		newMem.id.focus();					  
		return;                         
    }

	 if(newMem.id_hidden.value==""){
    alert("아이디 중복체크를 해주세요");
	newMem.id.focus();
    return false;
  }

    if(newMem.password.value == "") 
    {
		alert("비밀번호를 입력해 주세요!");
		newMem.password.focus();
		return;
    }

	 if (newMem.password.value.length < 4) 
	{
		 alert("비밀번호는 최소 4자입니다.")
		 newMem.password.focus();
		 return;
	}

	 if(newMem.password.value != newMem.password2.value) 
    {
		alert("비밀번호를 동일하게 입력해주세요!");
		newMem.password2.focus();
		return;
    }


    if(newMem.name.value == "") 
    {
		alert("성명을 입력해 주세요!");
		newMem.name.focus();
		return;
    }

    if(newMem.joomin1.value == "") 
    {
		alert("주민등록번호 앞자리를 입력해 주세요!");
		newMem.joomin1.focus();
		return;
    }

	if(newMem.joomin1.value.length < 6) 
    {
		alert("주민등록번호를 정확히 입력해 주세요!");
		newMem.joomin1.focus();
		return;
    }

    if(newMem.joomin2.value == "") 
    {
		alert("주민등록번호 뒷자리를 입력해 주세요!");
		newMem.joomin2.focus();
		return;
    }

	if(newMem.joomin2.value.length < 7) 
    {
		alert("주민등록번호를 정확히 입력해 주세요!");
		newMem.joomin2.focus();
		return;
    }

    if(newMem.birthYear.value == "") 
    {
		alert("태어난 연도를 입력해 주세요!");
		newMem.birthYear.focus();
		return;
    }

	if(newMem.birthYear.value.length < 4) 
    {
		alert("4자리로 입력해 주세요!");
		newMem.birthYear.focus();
		return;
    }

    if(newMem.birthMonth.value == "") 
    {
		alert("태어난 달을 입력해 주세요!");
		newMem.birthMonth.focus();
		return;
    }

	if(newMem.birthMonth.value.length < 2 ) 
    {
		alert("2자리로 입력해주세요!");
		newMem.birthMonth.focus();
		return;
    }



    if(newMem.birthDay.value == "") 
    {
		alert("태어난 날짜를 입력해 주세요!");
		newMem.birthDay.focus();
		return;
    }

	if(newMem.birthDay.value.length < 2) 
    {
		alert("태어난 날짜를 입력해 주세요!");
		newMem.birthDay.focus();
		return;
    }

    if(newMem.tel2.value == "") 
    {
		alert("중간번호를 입력해 주세요!");
		newMem.tel2.focus();
		return;
    }

	if(newMem.tel2.value.length < 4) 
    {
		alert("4자리로 입력해 주세요!");
		newMem.tel2.focus();
		return;
    }

	 if(newMem.tel3.value == "") 
    {
		alert("끝번호를 입력해 주세요!");
		newMem.tel3.focus();
		return;
    }

	 if(newMem.tel3.value.length < 4) 
    {
		alert("4자리로 입력해 주세요!");
		newMem.tel3.focus();
		return;
    }

	if(newMem.zipcode.value == "") 
    {
		alert("집주소를 입력해 주세요! - (우편번호 찾기 버튼 클릭)");
		newMem.zipcode.focus();
		return;
    }

	if(newMem.address1.value == "") 
    {
		alert("집주소를 입력해 주세요! - (우편번호 찾기 버튼 클릭)");
		newMem.address1.focus();
		return;
    }

    if(newMem.address2.value == "") 
    {
		alert("상세주소를 입력해 주세요!");
		newMem.address2.focus();
		return;
    }

	if(newMem.hp2.value == "") 
    {
		alert("휴대폰 중간자리 입력해 주세요!");
		newMem.hp2.focus();
		return;
    }

	if(newMem.hp2.value.length < 4) 
    {
		alert("4자리로 입력해주세요!");
		newMem.hp2.focus();
		return;
    }

    if(newMem.hp3.value == "") 
    {
		alert("휴대폰 끝자리 번호를 입력해 주세요!");
		newMem.hp3.focus();
		return;
    }

	if(newMem.hp3.value.length < 4) 
    {
		alert("4자리로 입력해주세요!");
		newMem.hp3.focus();
		return;
    }

    newMem.submit();   
}

function checkOrder()   //주문에서 미입력란 확인
{
		if(document.newMem.receiver.value == "")     
    {
		alert("이름을 입력해 주세요!");  
		document.newMem.receiver.focus();					  
		return;                         
    }
	if(document.newMem.zipcode.value == "") 
    {
		alert("집주소를 입력해 주세요! - (우편번호 찾기 버튼 클릭)");
		document.newMem.zipcode.focus();
		return;
    }

	if(document.newMem.address1.value == "") 
    {
		alert("집주소를 입력해 주세요! - (우편번호 찾기 버튼 클릭)");
		document.newMem.address1.focus();
		return;
    }

    if(document.newMem.address2.value == "") 
    {
		alert("상세주소를 입력해 주세요!");
		document.newMem.address2.focus();
		return;
    }
	if(document.newMem.rcvPhone.value == "") 
    {
		alert("전화번호를 입력해 주세요!");
		document.newMem.rcvPhone.focus();
		return;
    }
	if(document.newMem.cardNo.value == "") 
    {
		alert("신용카드 번호를 입력해 주세요!");
		document.newMem.cardNo.focus();
		return;
    }
	if(document.newMem.cardPass.value == "") 
    {
		alert("신용카드 비밀번호를 입력해 주세요!");
		document.newMem.cardPass.focus();
		return;
    }
	if(document.newMem.cardPass.value.length < 4 ) 
    {
		alert("4자리이상으로 입력해주세요!");
		document.newMem.cardPass.focus();
		return;
    }
	document.newMem.submit();
}


function idFocus()        
{									
	newMem.id.focus();
	return;
}


function zipCheck()
{
	window.open("zipCheck.jsp", "win", "width=600, height=300, scrollbars=yes, status=yes");
}

function mngerrorId() //매니저로그인시 비밀번호 틀림 뛰어줌
{
	location.href="mnglogin.jsp";
	alert("아이디가 존재하지 않습니다!");
}
function mngerrorPass() //매니저로그인시 비밀번호 틀림 뛰어줌
{
	location.href="mnglogin.jsp";
	alert("비밀번호가 틀렸습니다!");
}

function errorId() //로그인시 아이디 존재하지않음
{
	location.href="login.jsp";
	alert("아이디가 존재하지 않습니다!");
}

function errorPass() //로그인시 비밀번호 틀림
{
	location.href="login.jsp";
	alert("비밀번호가 틀렸습니다!");
}

function errorJoomin() //아이디,비밀번호찾기 주민번호 틀림
{
	location.href="FindId.jsp";
	alert("주민번호가 틀렸습니다!");
}

function errorName()
{
	location.href="FindId.jsp";
	alert("성명이 존재하지 않습니다!");
}


function amountCheck()     //   주문수량에 유효한 값만 들어가도록 처리해 줌
{
	obj=document.productDetail.qty;
	sto=document.productDetail.stock;
	pri=document.productDetail.price;
	total=document.productDetail.total;

	if(parseInt(obj.value)>=parseInt(sto.value))
	{
		obj.value=sto.value;
		alert("수량이 초과되었습니다");
		total.value=parseInt(sto.value)*parseInt(pri.value);
		return;
	}
	if(isNaN(obj.value))         
	{
		obj.value="1";
		alert('숫자만 입력해주세요');
		return;
	}

   if(obj.value < 1)
	{
		obj.value="1";
	}


}


function amountPlus()         //   주문수량을 1 증가 시킴
{
	obj=document.productDetail.qty;
	pri=document.productDetail.price;
	sto=document.productDetail.stock;
	total=document.productDetail.total;

	if(parseInt(obj.value)>=parseInt(sto.value))
	{
		obj.value=sto.value;
		alert("수량이 초과되었습니다");
		return;
	}else
	{
		obj.value=parseInt(obj.value) + 1;
		total.value=parseInt(obj.value)*parseInt(pri.value);
	}
}


function amountMinus()        //   주문수량을 1 감소 시킴
{
	obj=document.productDetail.qty;
	pri=document.productDetail.price;
	sto=document.productDetail.stock;
	total=document.productDetail.total;
	if(parseInt(obj.value)  > 1)
	{
		obj.value=parseInt(obj.value) - 1;
		total.value=parseInt(obj.value)*parseInt(pri.value);
	}
	else
	{
		alert('더이상 줄일수가 없습니다');
		return;
	}
}

function totalCal()
{
	obj=document.productDetail.qty;
	pri=document.productDetail.price;
	total=document.productDetail.total;

	total.value=parseInt(obj.value)*parseInt(pri.value);
	
}

function directOrd()        //  "즉시구매하기" 버튼을 클릭시 호출
{
   var str= productDetail.qty.value;
   var frm = document.productDetail;
   frm.action = "inTempcart.jsp";
   frm.submit();
}


function inCart()              //  "장바구니담기" 버튼을 클릭시 호출
{
   var str= productDetail.qty.value;
   var frm = document.productDetail;
   frm.action = "inCart.jsp";
   frm.submit();
}

function interestCart()              //  "장바구니담기" 버튼을 클릭시 호출
{
   var str= productDetail.qty.value;
   var frm = document.productDetail;
   frm.action = "inInterCart.jsp";
   frm.submit();
}

function updateok()
{
	location.href="mngselectmember.jsp";
}

function in_check()  //게시판 부분 체크
	  {
			if (document.input.in_subject.value == "") {
			  alert("제목을 입력하세요!");
			  return;
			}

			if (document.input.in_name.value == "") {
			  alert("이름을 입력하세요!");
			  return;
			}

			if (document.input.pwd.value == "") {
			  alert("비밀번호를 입력하세요!");
			  return;
			}

			if (document.input.in_content.value == "") {
			  alert("본문을 입력하세요!");
			  return;
			}

			document.input.submit();
		}

function adminwriteplease()
{
	alert("운영자만 글쓰기가 가능합니다!");
	location.href="board_list.jsp";
}

function adminmodifyplease()
{
	alert("운영자만 수정이 가능합니다!");
	location.href="board_list.jsp";
}

    function pass_check()
	 {
 			if (document.modify.pwd.value == "") 
			{
  				alert("비밀번호를 입력하세요!");
  				return;
			}
			document.modify.submit();
	}

		  
      
      function del_confirm()
	 {
 	      if (document.delete_form.pwd.value == "") 
		 {
  	         alert("비밀번호를 입력하세요!");
  	         return;
	     }
	    document.delete_form.submit();
	 }

function pass_check()
	 {
		 if(document.modify.in_subject.value == "")
		 {
			 alert("제목을 입력하세요!");
			 return;
		 }
 			if (document.modify.pwd.value == "") 
			{
  				alert("비밀번호를 입력하세요!");
  				return;
			}
			document.modify.submit();
	}

function boardwarning()
{
	alert("비밀번호를 확인해주세요!");
	history.back();
}