;(function () {
	'use strict';

	// Owl Carousel
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel1');
		owl.owlCarousel({
			items: 1,
		   loop: true,
		   margin: 0,
		   autoHeight: true,
		   autoHeightClass: 'owl-height',
		   responsiveClass: true,
		   nav: true,
		   dots: true,
		   smartSpeed: 500,
		   navText: [
		      "<i class='icon-chevron-left owl-direction'></i>",
		      "<i class='icon-chevron-right owl-direction'></i>"
	     	]
		});

		$('.owl-carousel2').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    dots: true,
		    responsive:{
		        0:{items:1},
		        600:{items:3},
		        1000:{items:3}
		    },
		    navText: [
		      "<i class='icon-chevron-left owl-direction'></i>",
		      "<i class='icon-chevron-right owl-direction'></i>"
	     	]
		})
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};
	

	var goToTop = function() {
		$('.js-gotop').on('click', function(event){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			return false;
		});
	};

	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#nutriStael-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top nutriStael-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top nutriStael-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top nutriStael-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};

	// Animations
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};
	
	// Portal carousel
	var sliderMain = function() {
	  	$('#shopStael-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#shopStael-hero .flexslider .slides > li').css('height', '700px'/*$(window).height()*/);	
	  	$(window).resize(function(){
	  		$('#shopStael-hero .flexslider .slides > li').css('height', '700px'/*$(window).height()*/);	
	  	});

	};

	var sendMail = function() {
		$('#submitContact').click(function(event) {
			event.preventDefault();
			$('#submitContact').val('Enviando mensagem...');
			$('#submitContact').prop('disabled', true);
			$.ajax({
				type: "POST",
				url: "/contact/mail/",
				dataType: "json",
				data: $('#contactForm').serialize(),
				success: function(data) {sendMailResponse(data.bError);},
				error: function() {sendMailResponse(true);}
			});
		});
	};

	var sendMailResponse = function(bError) {
		if (!bError) {
			$("#contactForm").trigger("reset");
			$('#submitContact').val("Mensagem enviada");
		} else {
			$('#submitContact').val("Erro ao enviar a mensagem");
		}
	};

	var loadMore = function() {
		$('#viewMore').click(function(event) {
			event.preventDefault();
			$('#viewMore').text('Carregando...').css({"pointer-events":"none", "text-decoration": "none"});
			$('#viewMore').prop("disabled", true);
			var iOffset = $('.listItem').length;
			var aParams = window.location.pathname.split("/");
			var bType = (aParams.length > 4);
			var sAction = aParams[1];
			var sUrl = "/" + sAction + "/load/from/" + iOffset;
			if (bType) {
				sUrl += "/" + aParams[3] + "/" + aParams[4];
			}

			$.ajax({
				type: "GET",
				cache: false,
				url: sUrl,
				dataType: "json",
				success: function(data) {
					if (data) {loadMoreSuccess(data);}
					else {loadMoreError();}
				},
				error: function() {loadMoreError();}
			});
		});
	};

	var loadMoreSuccess = function(data) {
		if (data.error) {
			loadMoreError();
		} else {
			$('#endList').before(data.html);
			$('#viewMore').text('Ver mais').css({"pointer-events":"", "text-decoration": ""});
			loadMoreCheck();
		}
	};

	var loadMoreError = function() {
		$('#viewMore').text('Erro ao tentar carregar');
	};

	var loadMoreCheck = function() {
		var iListItem = $(".listItem").length;
		var iTotal = parseInt(document.getElementById("totalList").value);
		if (iListItem < iTotal)
			$("#loadMore").show();
		else
			$("#loadMore").hide();
	};

	var toggleMenu = function() {
		$('.toggle-nav').click(function(e) {
			e.preventDefault();
			$(this).toggleClass('menu-active');
			$('.menu ul').toggleClass('menu-active');
		});
	};

	// Modal
	var alertModal = function() {
		//get the modal
		var modal = document.getElementById("alertModal");
		//get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		if (modal != null && span != null) {
			span.onclick = function() {
				modal.style.display = "none";
			}
		}
	};

	// Document on load.
	$(function(){
		owlCrouselFeatureSlide();
		contentWayPoint();
		parallax();
		sliderMain();
		sendMail();
		toggleMenu();
		if (document.getElementById("totalList")) {
			loadMoreCheck();
			loadMore();
		}
		//windowScroll();
	});

}());