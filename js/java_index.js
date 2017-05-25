$(function(){
	var topb=$('#pageTop');
	topb.hide();
 
	$(window).scroll(function(){
  	if($(this).scrollTop()>80){
    	//画面を80pxスクロールしたら、ボタン表示
    	topb.fadeIn();
  	}else{
    	//画面が80pxより上なら、ボタン表示
    	topb.fadeOut();
  	} 
	});

	//ボタンクリック後、スクロールして上に戻る
	topb.click(function(){
  	$('body,html').animate({
  		scrollTop: 0},500);
  	return false;
	});

});


$(function(){
  $('.slideun').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    fade: true,
  });
});


$(function(){
    $(".menu").click(function(){
        $(".menu1").toggleClass("menuclick1")
    });
    $(".menu").click(function(){
        $(".menu2").toggleClass("menuclick2")
    });
    $(".menu").click(function(){
        $(".menu3").toggleClass("menuclick3")
    }); 
});

jQuery(function($){
	$('.menu').click(function(){
		if ($('#menu').css('display') == 'none') {
			$('#menu').slideDown('fast');
		} else {
			$('#menu').slideUp('fast');
		}
	});
});

jQuery(function($){
	setTimeout(function(){
		var cash = $('#cash');
		var container = $('#container');
		var scroll = $('#imgtop01').height() + 8;

		if(scroll < 100){
			scroll = $('#imgtop01').height() + 8;
		}

		$(window).scroll(function() {
			if($(window).scrollTop() > scroll) {
				cash.addClass('stalking');
				container.addClass('for_stalk');
			} else {
				cash.removeClass('stalking');
				container.removeClass('for_stalk');
			}
		});
	}, 200);
});

