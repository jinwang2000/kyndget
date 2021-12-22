
$(function(){
    $('#header').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#header').data('size') == 'big')
        {
            $('#header').data('size','small');
            $('#header').stop().animate({
                padding: '20px 0',
                backgroundColor: '#f1f1f1'
            },200);
        }
    }
    else
    {
        if($('#header').data('size') == 'small')
        {
            $('#header').data('size','big');
            $('#header').stop().animate({
                padding: '55px 0',
                backgroundColor: 'transparent'
            },200);
        }
    }
});
