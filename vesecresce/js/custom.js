 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(10); // set duration in brackets    
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function() {

  /* template navigation
  -----------------------------------------------*/
 $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        filter: ':not(.external)',
        changeHash: true
    }); 

    /* Navigation visible on Scroll */
    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.sticky-navigation').stop().animate({
            "opacity": '0',
            "top": '-75'
        });
    }
    

   /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /*  smoothscroll
  ----------------------------------------------*/
   $(function() {
        $('.navbar-default a, #home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


 /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#overview').parallax("100%", 0.3);
    $('#trainer').parallax("100%", 0.2);
    $('#newsletter').parallax("100%", 0.3);
    $('#blog').parallax("100%", 0.1);
    $('#price').parallax("100%", 0.2);
    $('#testimonial').parallax("100%", 0.2);

  }
  initParallax();


   /* home slider section
  -----------------------------------------------*/
  $(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
        "https://tonyleiva.github.io/vesecresce/images/BoraGuria_LauBaldo-8603_02.jpg",
        ],  {duration: 2000, fade: 750});
    });
  })


  /* Owl Carousel
  -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-testimonial").owlCarousel({
      autoPlay: 6000,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
    });
  });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  /* countdown */
  var countDownDate = new Date(2020, 10-1, 9, 12, 00, 00).getTime();

  // Update the count down every 1 second
  var x = setInterval(() => {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("cdDays").innerHTML = days
    document.getElementById("cdHours").innerHTML = hours
    document.getElementById("cdMinutes").innerHTML = minutes
    document.getElementById("cdSeconds").innerHTML = seconds
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
});

