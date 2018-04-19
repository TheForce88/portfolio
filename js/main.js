$( document ).ready(function() {

  // $('.preloader-background').delay(1700).fadeOut('slow');
  //
	// $('.preloader-wrapper')
	// 	.delay(1700)
	// 	.fadeOut();

  $('.sidenav').sidenav();
  $('.carousel').carousel();

  $('video').addClass('fadeIn animated');

  $('.revelio-home').on('click', function(){
    $('.projects-container').hide();
    $('.home-container').show();
  })

  $('.revelio-projects').on('click', function(){
    // $('.sidenav').fadeOut();
    $('.home-container').hide();
    $('.projects-container').show();
  })

});
