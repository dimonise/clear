/****************Owl carousel*************/
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    navigation: true,
    nav: false,
    lazyLoad: true,
    loop: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1,
    animateOut: "fadeOut",
    animateInClass: "fadeIn",
    mouseDrag: false,
    responsive: { //Адаптация в зависимости от разрешения экрана
      767: {
        nav: false
      }
    }
  });
});
/****************End Owl carousel*************/

/**********************Fixed navigation**************/
$(window).scroll(function(){
  if(document.documentElement.clientWidth < 768) {
    var h = $("header").outerHeight(true);
    
    $('.navbar').toggleClass('navbar-fixed', $(this).scrollTop() > h );
  }
});
/******************End Fixed navigation****************/



