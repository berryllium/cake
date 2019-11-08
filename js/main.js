// мобильное меню
$('.menu-btn').on('click', function(e) {
  e.preventDefault()
  $(this).toggleClass('menu-btn_active')
  $('nav').animate({width:'toggle'},350)
})
