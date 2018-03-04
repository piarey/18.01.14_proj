

$(function() {
	
	$('.subMenuItem').slideUp(1);
	
	$('#subMenuBox').hide();
	



var $subMenuItem = $(this).find('.subMenuItem');

	$('#menuItem li').each(function (index) {
	var newIndex = index -1;
	$(this).hover(
		function(){
			if(index > 0) {
			$('#subMenuBox').show();
			
			$subMenuItem.eq(newIndex).slideDown(300);
			}
		},
		function(){
			if(index > 0){
				$subMenuItem.eq(newIndex).slideUp(1);
				$('#subMenuBox').hide();
			}
		}
	);
	
	$('.subMenuItem').hover(
	function(){
		$subMenuItem.stop();
		$('#subMenuBox').show();
	},
	function(){
		$subMenuItem.slideUp(1);
		$('#subMenuBox').hide();
	}
);
});
});