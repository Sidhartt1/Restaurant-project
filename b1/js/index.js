$(window).scroll
    (function()
        {
            if($(window).scrollTop()>0)
            {
                $('.navbar').css('background','rgba(240, 255, 255, 0.745)');
            }
            else
            {
                $('.navbar').css('background','transparent');
            }
        }
    );