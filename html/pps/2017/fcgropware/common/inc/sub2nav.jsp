<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<section id="main_subnav">
<ul>
<li><div class="etc_mov2_rl"></div><div class="etc_mov2_lr"></div><button type="button" onclick="window.open('/draft/regiForm.do')"><i class="fas fa-plus"></i>기안</button></li>
<li><div class="etc_mov2_rl"></div><div class="etc_mov2_lr"></div><button type="button" id="ww1"><span><i class="fas fa-folder-open"></i>결재<span class="etc_btn_toggle">▼</span></span></button>
	<ul>
	<li><div class="etc_mov2_rl_in"></div><div class="etc_mov2_lr_in"></div><a href="/draft/rSelDraft.do"><i class="fas fa-folder"></i>결재대기</a></li>
	<li><div class="etc_mov2_rl_in"></div><div class="etc_mov2_lr_in"></div><a href="/draft/pSelDraft.do"><i class="fas fa-folder"></i>결재진행</a></li>
	</ul>
</li>
<li><div class="etc_mov2_rl"></div><div class="etc_mov2_lr"></div><button type="button" id="ww1"><span><i class="fas fa-folder-open"></i>개인문서함<span class="etc_btn_toggle">▼</span></span></button>
	<ul>
	<li><div class="etc_mov2_rl_in"></div><div class="etc_mov2_lr_in"></div><a href="/draft/selTemDraft.do"><i class="fas fa-folder"></i>임시보관함</a></li>
	<li><div class="etc_mov2_rl_in"></div><div class="etc_mov2_lr_in"></div><a href="/draft/cSelDraft.do"><i class="fas fa-folder"></i>완료문서함</a></li>
	</ul>
</li>
</ul>
</section> 


<section id="main_cont">   