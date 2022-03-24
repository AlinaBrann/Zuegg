import { TweenMax } from 'gsap';
import { Draggable } from 'gsap/Draggable';
global.TweenMax = TweenMax;
global.$ = global.jQuery = require('jquery');
global.Draggable = Draggable;
require('./utils/jqExtensions');

// prettier-ignore
global.ProjectName = new function ProjectName() { // eslint-disable-line
	this.env = require('./utils/ENV');
	this.dom = require('./utils/DOM');
	this.utils = require('./utils/Utils');
	require('slick-carousel');
	this.classes = {
		Callback: require('./classes/Callback')
	};

	this.helpers = {};
	this.modules = {
		Animations: require('./modules/Animations'),
		SlickSlider: require('./modules/SlickSlider')
	};

	// Startup
	$(() => {
		// Remove _loading modificator
		this.dom.$html.removeClass('_loading');
	

		const menu = $('.header-menu-button');
		const close = $('[data-menu-closer]');
		const arrowPrev = document.querySelector('.where-to-buy-logos-arrow._prev');
		const arrowNext = document.querySelector('.where-to-buy-logos-arrow._next');
		const distance = 150;
		menu.on('click', function(){
			$(this).parents('.header').toggleClass('_menu-opened');
		});

		close.on('click', function(){
			$(this).parents('.header').removeClass('_menu-opened');
		});
		
		// arrowPrev.on('click', function() {
		// 	$(this).siblings('.where-to-buy-logos').scrollBy({
		// 		right: distance,
    //     behavior: "smooth",
		// 	})
		// })
		// console.log($('.where-to-buy-logos').scrollLeft());
		// arrowNext.on('click', function() {
		// 	const logos = $(this).siblings('.where-to-buy-logos');
		// 	console.log(logos.scrollLeft());
		// 	logos.animate({
    //     scrollLeft: logos.scrollLeft() + distance
    // 	}, 500);
		// })

		function scrollRight() {
      const outsider = document.querySelector(".where-to-buy-logos");
			console.log('right');
			outsider.scrollBy({
				left: distance,
				behavior: "smooth",
			});
    };
		function scrollLeft() {
      const outsider = document.querySelector(".where-to-buy-logos");
			console.log('left');
			outsider.scrollBy({
				left: -distance,
				behavior: "smooth",
			});
    };
		arrowNext.addEventListener('click', () => {
			scrollRight()
		})
		arrowPrev.addEventListener('click', () => {
			scrollLeft()
		})
	});
}();

if (module.hot) {
	module.hot.accept();
}
