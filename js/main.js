$( document ).ready(function() {

  // $('.preloader-background').delay(1700).fadeOut('slow');
  //
	// $('.preloader-wrapper')
	// 	.delay(1700)
	// 	.fadeOut();

  $('.sidenav').sidenav();
  $('.carousel').carousel();

  // $('.project-one').hover(
  //   function(){
  //     $('.revelio-project-one').fadeIn();
  //     $('.revelio-project-two').fadeOut();
  //     $('.revelio-project-three').fadeOut();
  //     $('.projects-header').css("color", "#22283f");
  //     $('.projects-header').css("text-shadow", "none");
  //   }
  // );

  $('.project-one').hover(function() {
    console.log("hovering over project one!");
    if($('.revelio-project-one').css('display') == 'none') {
      $('.revelio-project-one').fadeIn();
      $('.projects-header').css("color", "#22283f");
      $('.projects-header').css("text-shadow", "none");
      // $('.image-wrapper').css('z-index', "2");
    } else {
      $('.revelio-project-two').fadeOut();
      $('.revelio-project-three').fadeOut();
    }
  });

  $('.project-two').hover(function() {
    console.log("hovering over project two!");
    if($('.revelio-project-two').css('display') == 'none') {
      $('.revelio-project-two').fadeIn();
      $('.projects-header').css("color", "#22283f");
      $('.projects-header').css("text-shadow", "none");
    } else {
      $('.revelio-project-one').fadeOut();
      $('.revelio-project-three').fadeOut();
    }
  });

  $('.project-three').hover(function() {
    console.log("hovering over project three!");
    if($('.revelio-project-three').css('display') == 'none') {
      $('.revelio-project-three').fadeIn();
      $('.projects-header').css("color", "#22283f");
      $('.projects-header').css("text-shadow", "none");
    } else {
      $('.revelio-project-two').fadeOut();
      $('.revelio-project-one').fadeOut();
    }
  });
  // $('.project-two').hover(
  //   function(){
  //     $('.revelio-project-two').fadeIn();
  //     $('.revelio-project-one').fadeOut();
  //     $('.revelio-project-three').fadeOut();
  //     $('.projects-header').css("color", "#22283f");
  //     $('.projects-header').css("text-shadow", "none");
  //   }
  // );
  //
  // $('.project-three').hover(
  //   function(){
  //     $('.revelio-project-three').fadeIn();
  //     $('.revelio-project-one').fadeOut();
  //     $('.revelio-project-two').fadeOut();
  //     $('.projects-header').css("color", "#22283f");
  //     $('.projects-header').css("text-shadow", "none");
  //   }
  // );


  // $('.revelio-project').onmouseover(function(){
  //   // $('.sidenav').fadeOut();
  //   $('.home-container').hide();
  //   $('.projects-container').show();
  // })

});
