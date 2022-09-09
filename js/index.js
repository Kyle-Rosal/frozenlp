

// $('.char__see-btn').on('click',function() {
//     $(".section__hide").fadeIn();
//     $(this).hide();
// })
// function clickMe(param1, param2)
// {
//     param1.fadeOut();
//     param2.fadeIn();
// }

// $('.sample').on('click',()=>{
//     // console.log($('#sample').parent().children('.showMe'));
//     $('#sample').parent().children('div').children('h1').fadeOut();

// });

/* -- -- -- Intro read more -- --  -- -- -- > */
$(document).on('click', '.intro__see-btn',function(){
    $(this).hide();
    $(this).parent().parent("div").children("div").children(".section__hide").fadeIn(1000);
    console.log($(this).parent().parent("div").children("div").children("div").children('section__hide'));
})
/* -- -- -- Story read More -- --  -- -- -- > */

$(document).on('click', '.story__see-btn',function(){
    $(this).hide();
    $(this).parent().parent("div").children("div").children(".section__hide").fadeIn(100);
    console.log($(this).parent().parent("div").children("div").children("div").children('section__hide'));
})

/* -- -- -- Character read More -- --  -- -- -- > */

$(document).on('click', '.char__see-btn',function(){
    $(this).hide();
    $(this).parent().parent("div").children(".section__hide").fadeIn(1000);
    console.log($(this).parent().parent("div").children(".section__hide"));
})

/* -- -- -- Highlights see more and see less -- --  -- -- -- > */
$(document).on('click', '.hl__info-see-more', function() {
    $(this).hide();
    $(this).parent().children('.hl__info-see-less').fadeIn(1000);
    $(this).parent().parent("div").children("div").children('.section__hide').fadeIn(1000);
    console.log($(this).parent().parent("div").children("div").children('.section__hide'));
    
})

$(document).on('click', '.hl__info-see-less',function(){
    $(this).hide();
    $(this).parent().children('.hl__info-see-more').fadeIn(1000);
    $(this).parent().parent("div").children("div").children('.section__hide').fadeOut(1000)
    console.log($(this).parent())
})

// $(document).on('click', '.sample', function() {
//     console.log($('.sample'))
//     let shotThisDive = $(this).parent().children("div").children('.showMe');
//     shotThisDive.fadeOut();
//     $(this).hide();
//     $(this).parent().children('.sample-show').show();
    
// })



