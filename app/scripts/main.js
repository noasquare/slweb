(function() {
  'use strict';
  // Your custom JavaScript goes here
/**
 * narbar

$('ui.navbar .search-icon > i')
  .click(function () {
    let icon = $(this)
    if (icon.text() === 'search'){
      icon.text('close')
    }else {
      icon.text('search')
    }

    })
 */
 $('.ui.navbar .search-icon >i')
  .click(function(){
    let icon = $(this)
    if(icon.text() === 'search'){
      icon.text('close').parents('.content').addClass('searching')
    }else {
      icon.text('search').parents('.content').removeClass('searching')
    }
  })

  /**
   * sidebar
   */
   $('.ui.sidebar')
   .sidebar('attach events','.ui.navbar .menu-icon')
   .sidebar('attach events','.ui.sidebar .close-icon')
   .sidebar('setting','dimPage',false)


  $('.ui.navbar .menu')
  .clone()
  .appendTo('.ui.sidebar')

/**
 * carousel
 */
  $('.ui.hero.carousel')
  .slick({
    // 'arrows':false,
    nextArrow : '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',
    prevArrow : '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
    responsive:[
      {
        breakpoint:767,
        settings:{
          dots:true
        }
      }
    ]
  })


})();
