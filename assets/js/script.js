// Passive event listeners
jQuery.event.special.touchstart = {
	setup: function (_, ns, handle) {
		this.addEventListener("touchstart", handle, {
			passive: !ns.includes("noPreventDefault")
		});
	}
};
jQuery.event.special.touchmove = {
	setup: function (_, ns, handle) {
		this.addEventListener("touchmove", handle, {
			passive: !ns.includes("noPreventDefault")
		});
	}
};

$(window).on('load', function () {
	// preloader init
	setTimeout (function(){
		$('.preloader').fadeOut(200);

		setTimeout(() => {
			$('.buy-premium').addClass('show');
		}, 8000);

		// aos scroll-animation Init
		function aosAnim() {
			AOS.init({
				duration: 600,
				once: true
			});
		}
		setTimeout(function(){
			aosAnim();
		},100);
	},50);
});

// buy-premium
$('.buy-premium .close').on('click', function () {
	$('.buy-premium').removeClass('show');
});

// header sticky
$(window).scroll(function () {
	if ($(window).scrollTop() >= 50) {
		$('.header-nav').addClass('header-sticky-top');
	} else {
		$('.header-nav').removeClass('header-sticky-top');
	}
});

// on ready state
$(document).ready(function () {
	'use strict';

	// dropdownAnimation
	function dropdownAnimation() {
		$('.header-nav').find('.dropdown-menu').each(function (idx, item) {
			$(this).height($(this).height());
		});
	}
	dropdownAnimation();

	// replace image with video
	function videoInit() {
		$('.video-play-btn').on('click', function () {
			var thumbWidth = $(this).siblings('.video-thumb').width();
			var video = '<div class="embed-responsive embed-responsive-16by9 mx-auto bg-dark" style="max-width:'+ thumbWidth +'px"><iframe class="embed-responsive-item" src="' + $(this).data('src') + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0' + '" allowscriptaccess="always" allow="autoplay"></iframe></div>';
			$(this).fadeOut(100);
			$(this).siblings('.video-thumb').replaceWith(video);
		});
	}
	videoInit();

	// tab
	$('.tab-content').find('.tab-pane').each(function (idx, item) {
		var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
			title = $(this).attr('title');
		navTabs.append('<li class="nav-item"><a class="nav-link" href="#">' + title + '</a></li>');
	});

	$('.code-tabs ul.nav-tabs').each(function () {
		$(this).find("li:first").addClass('active');
	})

	$('.code-tabs .tab-content').each(function () {
		$(this).find("div:first").addClass('active');
	});

	$('.nav-tabs a').click(function (e) {
		e.preventDefault();
		var tab = $(this).parent(),
			tabIndex = tab.index(),
			tabPanel = $(this).closest('.code-tabs'),
			tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
		tabPanel.find('.active').removeClass('active');
		tab.addClass('active');
		tabPane.addClass('active');
	});


	// Accordions
	$('.collapse').on('shown.bs.collapse', function () {
		$(this).parent().find('.fas fa-plus').removeClass('fas fa-plus').addClass('fas fa-minus');
	}).on('hidden.bs.collapse', function () {
		$(this).parent().find('.fas fa-minus').removeClass('fas fa-minus').addClass('fas fa-plus');
	});

	// headerPinUnpin init
	function headerPinUnpin() {
		var lastScroll = 0;
		window.onscroll = function() {
			var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
			if (currentScroll > 300 && lastScroll <= currentScroll){
				lastScroll = currentScroll;
				$('.header-nav').addClass('header-unpinned');
			}else{
				lastScroll = currentScroll;
				$('.header-nav').removeClass('header-unpinned');
			}
		};
	}
	headerPinUnpin();

	// menuHumBurger icon toggle Init
	function menuHumBurgerIcon() {
		$('.navbar-toggler').on('click', function () {
			$('i').toggleClass('d-inline d-none');
		});
	}
	menuHumBurgerIcon();

	// rellax
	function parallax() {
		var rellax = new Rellax('[data-rellax-speed]');
	}
	parallax();
		
	// brandCarousel fix
	function brandCarousel() {
		new Swiper('.brand-carousel', {
			spaceBetween: 0,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 3000
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
					spaceBetween: 0
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 0
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 0
				},
				991: {
					slidesPerView: 5,
					spaceBetween: 0
				}
			}
		});
	}
	brandCarousel();
		
	// featuresCarousel fix
	function featuresCarousel() {
		new Swiper('.features-carousel', {
			spaceBetween: 0,
			speed: 600,
			autoplay: true,
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				575: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				767: {
					slidesPerView: 2,
					spaceBetween: 0
				},
				991: {
					slidesPerView: 3,
					spaceBetween: 0
				}
			},
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
				clickable: true
			}
		});
	}
	featuresCarousel();
		
	// testimonialsCarousel fix
	function testimonialsCarousel() {
		new Swiper('.testimonial-carousel', {
			spaceBetween: 0,
			speed: 600,
			loop: true,
			autoplay: true,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
				clickable: true
			}
		});
	}
	testimonialsCarousel();

	// Form validation Init
	(function() {
		window.addEventListener('load', function() {
			var forms = document.getElementsByClassName('needs-validation');
			var validation = Array.prototype.filter.call(forms, function(form) {
				form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
				}, false);
			});
		}, false);
	})();

});