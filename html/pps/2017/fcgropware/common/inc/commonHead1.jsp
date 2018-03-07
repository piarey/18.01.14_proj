<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<header id="title_head_outer">
<div id="title_head_outer_line"></div>
<div id="title_head">
<a href="/draft/rSelDraft.do"><img src="/images/common/logo2.png" alt="FC 그룹웨어 로고 이미지" /><strong><span>GROUP</span><span>WARE</span></strong></a>
<ul>

<c:choose>
	<c:when test="${not empty loginInfo}">
		<li><a href="/member/listForm.do">사원검색</a></li>
		<li id="head_li_log">
			<p>${loginInfo.m_code}(<span>${loginInfo.m_name}</span>)&nbsp;님</p>
			<button type="button" id="logout" onclick="location.href='/member/logoMemb.do';">로그아웃</button></li>
	</c:when>
		<c:otherwise>
		</c:otherwise>
</c:choose>
</ul>
</div>
</header>


<section id="title_nav">
<nav id="nav_gnb">
<c:choose>
	<c:when test="${not empty loginInfo}">
		<ul>
			<li>
				<div class="etc_boxshadow"></div><a href="/draft/rSelDraft.do"><div class="etc_mov_horz_t"></div>
				<div class="etc_mov_vert_t"></div><div class="etc_mov_horz_b"></div><div class="etc_mov_vert_b"></div>
				<div class="gnb_li_rotate"><i class="fas fa-file"></i></div>전자결재</a>
			</li><!--  
			--><li>
				<div class="etc_boxshadow"></div><a href="/notice/seleNoti.do"><div class="etc_mov_horz_t"></div>
				<div class="etc_mov_vert_t"></div><div class="etc_mov_horz_b"></div><div class="etc_mov_vert_b"></div>
				<div class="gnb_li_rotate"><i class="fas fa-align-justify"></i></div>공지사항</a>
			</li><!--  

			--><c:choose><c:when test="${loginInfo.m_adminYN=='Y'}"><!--  
--><li><div class="etc_boxshadow"></div><button type="button" id="qq2"><div class="etc_mov_horz_t"></div>
				<div class="etc_mov_vert_t"></div><div class="etc_mov_horz_b"></div><div class="etc_mov_vert_b"></div>
				<div class="gnb_li_rotate"><i class="fas fa-address-book"></i></div><span>계정관리<span class="etc_btn_toggle">▼</span></span></button>
<ul>
<li><a href="/member/regiForm.do">사원 등록</a></li>
<li><a href="/member/listForm.do">사원 검색 및 수정</a></li>
</ul>
</li></c:when><c:otherwise><!--
--><li>
						<div class="etc_boxshadow"></div><a href="/member/sMyInfo.do"><div class="etc_mov_horz_t"></div>
						<div class="etc_mov_vert_t"></div><div class="etc_mov_horz_b"></div><div class="etc_mov_vert_b"></div>
						<div class="gnb_li_rotate"><i class="fas fa-file"></i></div>나의 정보</a>
					</li><!--  
-->	</c:otherwise></c:choose>	
		</ul>
	</c:when>
		<c:otherwise>
		</c:otherwise>
</c:choose>

</nav><div id="nav_location">
