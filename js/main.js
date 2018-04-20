$( document ).ready(function() {

  // $('.preloader-background').delay(1700).fadeOut('slow');
  //
	// $('.preloader-wrapper')
	// 	.delay(1700)
	// 	.fadeOut();

  $('.sidenav').sidenav();
  $('.carousel').carousel();

  $('.project-one').hover(
    function(){
      $('.revelio-project-one').fadeIn();
      // if display none, then fade in, else
      $('.revelio-project-two').fadeOut();
      $('.revelio-project-three').fadeOut();
      $('.projects-header').css("color", "#22283f");
      $('.projects-header').css("text-shadow", "none");
    }
  );

  $('.project-two').hover(
    function(){
      $('.revelio-project-two').fadeIn();
      $('.revelio-project-one').fadeOut();
      $('.revelio-project-three').fadeOut();
      $('.projects-header').css("color", "#22283f");
      $('.projects-header').css("text-shadow", "none");
    }
  );

  $('.project-three').hover(
    function(){
      $('.revelio-project-three').fadeIn();
      $('.revelio-project-one').fadeOut();
      $('.revelio-project-two').fadeOut();
      $('.projects-header').css("color", "#22283f");
      $('.projects-header').css("text-shadow", "none");
    }
  );


  // $('.revelio-project').onmouseover(function(){
  //   // $('.sidenav').fadeOut();
  //   $('.home-container').hide();
  //   $('.projects-container').show();
  // })

});
