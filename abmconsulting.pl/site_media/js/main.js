$(document).ready(function(){

// scrollowanie dokumentu do góry
	
	$('.scroll_top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

// komunikat o ciasteczkach
	
	if ($.cookie('acceptOurCookies') == 'yes') { 
        $('#cookie-info').css('display','none'); 
    }
    $('.accept_cookie').click(function(){
        $.cookie('acceptOurCookies', 'yes', { expires: 356, path: '/' });
        $('#cookie-info').fadeOut(300);
    });
	
});
