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
   

  $('.ui.navbar .menu')
  .clone()
  .appendTo('.ui.sidebar')



})();
