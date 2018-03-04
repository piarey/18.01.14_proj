

$(function() {
	var movedIndex;
	
	function moveSlide(index) {
		movedIndex = index;
		
		var moveLeft = -(index*986);
		$('#slidePanel').animate({'left':moveLeft}, 'slow');
	}
	
	var randomNumber = Math.floor(Math.random()*5);
	moveSlide(randomNumber);
	
	$('#prevButton').on('click', function(){
		if(movedIndex != 0)
			movedIndex = movedIndex - 1;
		moveSlide(movedIndex);
	});
	
	$('#nextButton').on('click', function(){
		if(movedIndex != 4)
			movedIndex = movedIndex +1;
		moveSlide(movedIndex);
	});
	
	setInterval(function(){
		if(movedIndex != 4)
			movedIndex = movedIndex +1;
		else
			movedIndex = 0;
			
		moveSlide(movedIndex);
	}, 5000);
});