/*-----------------------------------------------------------------------------------
	Template Name: Yankee - Digital Agency HTML Template
	Template URI: https://webtend.net/demo/html/yankee
	Author: WebTend
	Author URI: https://webtend.net/
	Version: 1.0

	Note: This is Main js File For custom and jQuery plugins activation Code..
-----------------------------------------------------------------------------------

/*---------------------------
	JS INDEX
	===================
	01. Main Menu
	02. Banner Slider
	03. Slider Animation
	04. Popup video
	05. Counter Up
	06. Team Slider
	07. Active Progress Bar
	08. Portfolio Isotope
	09. Portfolio Slider
	10. Gallery Slider
	11. Sponsor Slider
	12. Gallery Post Slider
	13. Testimonial Slider
	14. Back to top
	15. Sticky Header
	16. Preloader
	17. Wow Js 

-----------------------------*/

(function ($) {
	'use strict';

	/*-----------------------------
	=== ALL ESSENTIAL FUNCTIONS ===
	------------------------------*/
	// ===== 01. Main Menu
	function mainMenu() {
		var mobileMenu = $('.mobile-menu'),
			menuItems = $('.menu-items'),
			navbarToggler = $('.navbar-toggler'),
			closeIcon = $('.navbar-close');

		// Navbar toggler
		navbarToggler.on('click', function () {
			navbarToggler.toggleClass('active');
			mobileMenu.toggleClass('menu-on');
		});

		// Close icon
		closeIcon.on('click', function () {
			mobileMenu.removeClass('menu-on');
			navbarToggler.removeClass('active');
		});

		// Adds toggle button to li items that have children
		menuItems.find('li a').each(function () {
			if ($(this).next().length > 0) {
				$(this)
					.parent('li')
					.append( '<span class="dd-trigger"><i class="fal fa-angle-down"></i></span>' );
			}
		});

		// expands the dropdown menu on each click
		menuItems.find('li .dd-trigger').on('click', function (e) {
			e.preventDefault();
			$(this)
				.toggleClass('open')
				.parent('li')
				.children('ul')
				.stop(true, true)
				.slideToggle(350);
		});

		// Search Form
		var searchBtn = $('.search-icon'),
			searchForm = $('.search-form'),
			searchClose = $('.search-close');

		searchBtn.on('click', function (e) {
			searchForm.toggleClass('search-on');
			$(this).toggleClass('search-on');
			e.preventDefault();
		});
		
		// Offcanvs Menu
		var offcanvasBtn = $('.off-canvas-btn'),
			offcanvasItems = $('.off-canvas-items'),
			offcanvasoverly = $('.canvas-overly'),
			offcanvaClose = $('.canvas-close');

		offcanvasBtn.on('click', function (e) {
			offcanvasItems.addClass('off-canvas-show');
			offcanvasoverly.addClass('off-canvas-show');
			e.preventDefault();
		});

		offcanvaClose.on('click', function (e) {
			offcanvasItems.removeClass('off-canvas-show');
			offcanvasoverly.removeClass('off-canvas-show');
			e.preventDefault();
		});

		offcanvasoverly.on('click', function (e) {
			offcanvasItems.removeClass('off-canvas-show');
			$(this).removeClass('off-canvas-show');
			e.preventDefault();
		});
	}

	// ===== 02. Banner Slider
	function bannerSlider() {
		var banner = $('#bannerSlider');
		var bannerFirst = $('.single-banner:first-child');

		banner.on('init', function (e, slick) {
			var firstAnimatingElements = bannerFirst.find(
				'[data-animation]'
			);
			slideanimate(firstAnimatingElements);
		});

		banner.on('beforeChange', function (
			e,
			slick,
			currentSlide,
			nextSlide
		) {
			var animatingElements = $(
				'div.slick-slide[data-slick-index="' + nextSlide + '"]'
			).find('[data-animation]');
			slideanimate(animatingElements);
		});

		banner.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
			speed: 500,
			arrows: true,
			fade: false,
			dots: false,
			swipe: true,
			nextArrow: '<button class="slick-arrow next-arrow">Next</button>',
			prevArrow: '<button class="slick-arrow prev-arrow">Prev</button>',
			responsive: [{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			}],
		});
	}

	// ===== 03. Slider Animation
	function slideanimate(elements) {
		var animationEndEvents =
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var animationDelay = $this.data('delay');
			var animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': animationDelay,
				'-webkit-animation-delay': animationDelay,
			});
			$this
				.addClass(animationType)
				.one(animationEndEvents, function () {
					$this.removeClass(animationType);
				});
		});
	}

	// ===== 04. Popup video
	function popupVideo() {
		$('.popup-video').magnificPopup({
			type: 'iframe',
		});
	}

	// ===== 05. Counter Up
	function counterToUp() {
		$('.counter-box').bind('inview', function (
			event,
			visible,
			visiblePartX,
			visiblePartY
		) {
			if (visible) {
				$(this)
					.find('.count')
					.each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({
							Counter: $this.text()
						}, {
							duration: 3000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							},
						});
					});
				$(this).unbind('inview');
			}
		});
	}

	// ===== 06. Team Slider
	function teamSlider() {
		var slide = $('.team-member-slider');
		slide.slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
			speed: 500,
			arrows: false,
			fade: false,
			dots: false,
			swipe: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}
			],
		});
	}

	// ===== 07. Active Progress Bar
	function progressBar() {
		$('.skill-progress').bind('inview', function (
			event,
			visible,
			visiblePartX,
			visiblePartY
		) {
			if (visible) {
				$.each($('.skill-progress'), function () {
					var counter = $(this).find('.progress-counter'),
						count = $(this).find('.count'),
						dataCount = $(this).attr('data-count'),
						progressbar = $(this).find('.progressbar'),
						progressbarV = $(this).find('.progressbarV');

					// Set counter css
					counter.css('left', $(this).attr('data-count') + '%');
					counter.css('top', '50%');

					// set counter
					$({ Counter: 0 }).animate({
						Counter: dataCount
					}, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							count.text(Math.ceil(this.Counter));
						},
					});

					// progressbar css
					progressbar.css('width', dataCount + '%');
					progressbarV.css('left', dataCount + '%');

				});

				$(this).unbind('inview');
			}
		});
	}

	// ===== 08. Portfolio Isotope
	function portfolioIsotope() {
		var items = $('.portfolio-filter').isotope({
			itemSelector: '.filter-item',
			masonry: {
				columnWidth: '.filter-item',
			},
		});
		// items on button click
		$('.portfolio-nav ul').on('click', 'li', function () {
			var filterValue = $(this).attr('data-filter');
			items.isotope({
				filter: filterValue
			});
		});
		// menu active class
		$('.portfolio-nav li').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	}

	// ===== 09. Portfolio Slider
	function portfolioSlider() {
		var slide = $('.portfolio-slider');
		slide.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
			speed: 500,
			arrows: false,
			fade: false,
			dots: false,
			swipe: true,
			centerMode: true,
			centerPadding: '30%',
			responsive: [
				{
					breakpoint: 1350,
					settings: {
						centerPadding: '25%',
					}
				},
				{
					breakpoint: 992,
					settings: {
						centerPadding: '20%',
					}
				},
				{
					breakpoint: 768,
					settings: {
						centerPadding: '10%',
					}
				},
				{
					breakpoint: 576,
					settings: {
						centerPadding: '0',
					}
				}
			],
		});
	}

	// ===== 10. Gallery Slider
	function gallerySlider() {
		var slide = $('.gallery-image-slider');
		slide.slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
			speed: 500,
			arrows: false,
			fade: false,
			dots: false,
			swipe: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				}
			],
		});
	}

	// ===== 11. Sponsor Slider
	function sponsorsSlider() {
		var slide = $('.sponsors-slider');
		slide.slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
			speed: 500,
			arrows: false,
			fade: false,
			dots: false,
			swipe: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}
			],
		});
	}

	// ===== 12. Gallery Post Slider
	function galleryPostSlider() {
		var slide = $('.gallery-post-slider');
		slide.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
			speed: 500,
			arrows: true,
			fade: false,
			dots: false,
			swipe: true,
			nextArrow: '<button class="slick-arrow next-arrow"><i class="far fa-arrow-right"></i></button>',
			prevArrow: '<button class="slick-arrow prev-arrow"><i class="far fa-arrow-left"></i></button>',
		});
	}

	// ===== 13. Testimonial Slider
	function testimonialSlider() {
		var slide = $('.testimonials-slider');
		slide.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 5000,
			speed: 500,
			arrows: false,
			fade: false,
			dots: false,
			swipe: true,
		});
	}

	// ===== 14. Back to top
	function gtToTop() {
		$('.back-to-top').on('click', function (e) {
			$('html, body').animate({
				scrollTop: '0',
			},
				1200
			);

			e.preventDefault();
		});
	}

	// ===== 15. Sticky Header
	function stickyHeader() {
		var sticky = $('header.sticky-header');
		var scrollFromtop = $(window).scrollTop();
		var scrollLimit = $('header').height() + 10;

		if (scrollFromtop < scrollLimit) {
			sticky.removeClass('sticky-on');
		} else {
			sticky.addClass('sticky-on');
		}
	}

	// ===== 16. Preloader
	function preloader() {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut(500);
		}
	}

	/*---------------------
	=== DOCUMENT READY  ===
	----------------------*/
	$(document).ready(function () {
		mainMenu();
		bannerSlider();
		counterToUp();
		portfolioIsotope();
		portfolioSlider();
		progressBar();
		teamSlider();
		popupVideo();
		gallerySlider();
		sponsorsSlider();
		galleryPostSlider();
		testimonialSlider();
	});

	/*--------------------
	=== WINDOW SCROLL  ===
	----------------------*/
	$(window).on('scroll', function () {
		stickyHeader();
	});

	/*------------------
	=== WINDOW LOAD  ===
	--------------------*/
	$(window).on('load', function () {
		preloader();
		// ===== 17. Wow Js 
		new WOW().init();
	});

})(jQuery);