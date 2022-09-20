

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

// s

$(document).on('click', '.section--intro__see-btn',function(){
    $(this).hide();
    $(this).parent().parent("div").children("div").children(".section__hide").fadeIn(1000);
    console.log($(this).parent().parent("div").children("div").children("div").children('section__hide'));
})
$(document).on('click', '.section--story__see-btn',function(){
    $(this).hide();
    $(this).parent().parent("div").children("div").children(".section__hide").fadeIn(1000);
    console.log($(this).parent().parent("div").children("div").children("div").children('section__hide'));
})
$(document).on('click', '.section--char__see-btn',function(){
    $(this).hide();
    $(this).parent().parent("div").children(".section__hide").fadeIn(1000);
    console.log($(this).parent().parent("div").children(".section__hide"));
})
$(document).on('click', '.staff__info-see-more', function() {
    $(this).hide();
    $(this).parent().parent("div").children('.section__hide').fadeIn(1000);
    console.log($(this).parent().parent("div").children('.section__hide'));  
})

// -- Blue Icons --
$(document).on('click', '.hl__info-see-more', function() {
    $(this).hide();
    $(this).parent().children('.hl__info-see-less').fadeIn(1000);
    $(this).parent().parent("div").children('.section__hide').fadeIn(1000);
    console.log($(this).parent().parent("div").children('.section__hide')); 
})
$(document).on('click', '.hl__info-see-less',function(){
    $(this).hide();
    $(this).parent().children('.hl__info-see-more').fadeIn(1000);
    $(this).parent().parent("div").children('.section__hide').fadeOut(1000)
    console.log($(this).parent())
})

// -- Modal --
$(document).on('click', '.header__menu-btn', function() {
    $(this).parent().parent("div").parent("div").parent("div").parent("header").children('.header__modal').children('.header__modal-wrapper').slideDown(1000).show()
    console.log($(this).parent().parent("div").parent("div").parent("div").parent("header").children('.header__modal').children('.header__modal-wrapper'));      
})
$(document).on('click', '.header__modal-close', function() {
    $(this).parent().parent("div").parent("div").parent("div").parent("div").parent("header").children('.header__modal').children('.header__modal-wrapper').slideUp(1000)
    console.log("yowwwww")  
})

// $(document).on('click', '.sample', function() {
//     console.log($('.sample'))
//     const shotThisDive = $(this).parent().children("div").children('.showMe');
//     shotThisDive.fadeOut();
//     $(this).hide();
//     $(this).parent().children('.sample-show').show();
    
// })



