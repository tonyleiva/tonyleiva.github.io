$(window).scroll(() => {
  var windowBottom = $(this).scrollTop() + $(this).innerHeight()
  $(".trainer-overlay").each(function () {
    /* Check the location of each desired element */
    var objectBottom = $(this).offset().top + $(this).outerHeight()

    /* If the element is completely within bounds of the window, fade it in */
    if (objectBottom < windowBottom) { //object comes into view (scrolling down)
      if ($(this).css("opacity") == 0 && isMobileBrowser()) {
        $(this).css("opacity", "0.9")
        $(this).css("transform", "scale(0.9)")
      }
    } else { //object goes out of view (scrolling up)
      if ($(this).css("opacity") == 0.9 && isMobileBrowser()) {
        $(this).css("opacity", "0")
        $(this).css("transform", "unset")
      }
    }
  })
})

/*
/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function () {

  if (isMobileBrowser()) {
    $(".trainer-overlay").each(function() {
      $(this).css("height", "45%")
      $(this).css("min-height", "230px")
      $(this).css("top", "unset")
    })
    $(".trainer-des").each(function() {
      $(this).css("width", "90%")
    })
  }

  /* template navigation
  -----------------------------------------------*/
  $('.main-navigation').onePageNav({
    // scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
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
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

  /*  smoothscroll
  ----------------------------------------------*/
  $(function () {
    $('.navbar-default a, #home a, #goToBenefits').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      if (this.id == "goToBenefits") {
        trackingClick(4)
      }
      event.preventDefault();
    });
  });

  /* Parallax section
     -----------------------------------------------*/
  function initParallax() {
    $('#blog').parallax("100%", 0.1);
  }
  initParallax();

  /* home slider section
 -----------------------------------------------*/
  if (isMobileBrowser()) {
    $(function () {
      jQuery(document).ready(function () {
        $('#home').backstretch([
          "https://github.com/tonyleiva/tonyleiva.github.io/raw/master/vesecresce/images/vesecresce-mobile-cover-cs.jpeg",
          "https://tonyleiva.github.io/vesecresce/images/BoraGuria_LauBaldo-8572.jpg",
          "https://tonyleiva.github.io/vesecresce/images/BoraGuria_LauBaldo-8573_02.jpg",
        ], { duration: 2000, fade: 750 });
      });
    })
  } else {
    $(function () {
      jQuery(document).ready(function () {
        $('#home').backstretch([
          "https://tonyleiva.github.io/vesecresce/images/BoraGuria_LauBaldo-8603_02.jpg",
        ], { duration: 2000, fade: 750 });
      });
    })
  }

  /* Owl Carousel
  -----------------------------------------------*/
  $(document).ready(function () {
    $("#owl-testimonial").owlCarousel({
      autoPlay: 6000,
      items: 1,
      itemsDesktop: [1199, 1],
      itemsDesktopSmall: [979, 1],
      itemsTablet: [768, 1],
      itemsTabletSmall: false,
      itemsMobile: [479, 1],
    });
  });

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  /* countdown */
  var countDownDate = getProductLaunchDatetime()
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
    
    // If the count down is finished, write some text
    if (distance > 0) {
      document.getElementById("cdDays").innerHTML = days
      document.getElementById("cdHours").innerHTML = hours
      document.getElementById("cdMinutes").innerHTML = minutes
      document.getElementById("cdSeconds").innerHTML = seconds
    } else {
      clearInterval(x);
      // document.getElementById("countdownBtn").style.display = "unset"
      // document.getElementById("numbers").style.display = "none"
    }
  }, 1000);
});
