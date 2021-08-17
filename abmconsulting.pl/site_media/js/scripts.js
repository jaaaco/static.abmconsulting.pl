$(document).ready(function(){
	
	// jeśli pozycja z głównego menu ma podmenu, dostaje klasę hasChildren ----------------------------
	
	$('.dropdown > ul > li').each(function(){
		if ($('li', this).size() > 0) $(this).addClass('hasChildren');
	});	
	
	// zamykanie komunikatu po naciśnięciu w X --------------------------------------------------------
	
	
	$('.messages .msg').append('<img src="/site_media/images/window-close.png" class="window-close"/>');
	$(document).on('click','.window-close',function(){
		$('.messages').fadeOut(400);
	});

	$('.bxslider').bxSlider({
		mode: 'fade',
	});
	$(window).load(function(){
	    var menuHeight = $('#top-menu > .dropdown').height() + 'px';
		$('.dropdown > ul > li > ul').css('top', menuHeight);
	});
	
});
