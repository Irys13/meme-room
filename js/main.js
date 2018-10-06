$('.light-switch').on('click', function(){
	var magic = $('.light-bulb').val("initial");
	if($(this).attr('value') == 'initial' || $(this).attr('value') == 'on') {
		$('body').css('background-color', 'black');
		$(this).val('off');
		$('img').attr('src', 'images/off.png');
	} else if ($(this).attr('value') == 'off') {
		$('body').css('background-color', 'white');
		$(this).val('on');
		$('img').attr('src', 'images/on.png');
	} else {
		$('body').css('background-color', 'red');
	}
});


window.onload = function(){
	var timer = 144 ;
	setInterval(function() {
	  timer--;
	  if (timer >= 0) {
		span = document.getElementById("timer");
		span.innerHTML = timer;
	  }
	  if (timer === 0) {
		  alert("I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together");
		  clearInterval(timer);
	  }
	}, 1000);
  }

