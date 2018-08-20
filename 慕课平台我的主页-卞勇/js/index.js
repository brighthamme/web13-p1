// tab切换高亮样式
$(function(){
    $('.bor-bt').click(function(){
        $(this).find('a').css({'color':'red'});
        $(this).css('border-bottom','1px solid red');
        $(this).siblings().css('border','none');
        $(this).find('a').parents().siblings().find('a').css('color','gray');
    });
});