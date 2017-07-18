$(document).ready(function() {

  /*Sticky Navigation*/
  $('.js--about').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset:'100px;'
  });

  /*Mobile Navigation*/

  $('.js-hamburger, .js-main-nav a').click(function() {
      var icon = $('.js-hamburger i');
      var nav = $('.js-main-nav');

      if ($(window).width() < 767) {
        nav.slideToggle(200);

        if (icon.hasClass('fa-bars')) {
          icon.addClass('fa-times');
          icon.removeClass('fa-bars');
        } else {
          icon.addClass('fa-bars');
          icon.removeClass('fa-times');
        }
      }
    });

  $(window).resize(function() {
      var icon = $('.js-hamburger i');
      var nav = $('.js-main-nav');

      if ($(window).width() > 767) {
      nav.css("display", "block");
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
      } else {
      nav.css("display", "none");
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
    }
  });



    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 2,
      simulateTouch: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      spaceBetween: 30,
      autoplay: 3000
    })

  /*Scrolling on click*/

  $('.js--scroll-to-contact').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
  });

  /*Smooth Scrolling*/

  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

  /*Scrolling Animation*/



  $('.js--about-input').waypoint(function(direction) {
  $('.js--about-input').addClass('animated fadeIn');
  }, {
    offset:'50%'
  }
  );



  $('.js--wp-tools').waypoint(function(direction) {
      $('.js--wp-tools').addClass('animated fadeIn');
  }, {
    offset:'80%'

  }
  );

  $('.js--wp-gymhit').waypoint(function(direction) {
      $('.js--wp-gymhit').addClass('animated fadeInRight');
  }, {
    offset:'50%'

  }
);

  $('.js--wp-kptncook').waypoint(function(direction) {
      $('.js--wp-kptncook').addClass('animated fadeInLeft');
  }, {
    offset:'50%'

  }
);

$('.js--wp-mirapodo').waypoint(function(direction) {
    $('.js--wp-mirapodo').addClass('animated fadeInRight');
}, {
  offset:'50%'

}
);

  $('.js--wp-books').waypoint(function(direction) {
      $('.js--wp-books').addClass('animated fadeIn');
  }, {
    offset:'50%'

  }
);

})
