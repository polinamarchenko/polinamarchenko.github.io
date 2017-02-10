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
      $('.js--about-input').addClass('animated fadeInRight');
  }, {
    offset:'50%'
  }
  );


  $('.js--wp-tools').waypoint(function(direction) {
      $('.js--wp-tools').addClass('animated fadeInDown');
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
