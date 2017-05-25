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
    if($.cookie("access")){
        $('#first').css({display:'none'});
    }
    $(window).load(function(){
        $.cookie("access",$('body').addClass('access'));
    })
});

