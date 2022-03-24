const dom = require('../utils/DOM');
import ShowHelper2 from '../helpers/ShowHelper2';
// const SlickSliders = require('./SlickSliders');

import {
	ScrollToPlugin
} from 'gsap/ScrollToPlugin';
import {
	ScrollTrigger
} from 'gsap/ScrollTrigger';

import {
	gsap
} from 'gsap';



gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function Animations() {
			
	let anchor = '[data-anchor]';
	let delay = 0.6;
	dom.$body.on('click', anchor, function (event) {
		event.preventDefault();
		$('html').css('scroll-snap-type', 'none');
			setTimeout(() => {
				$('html').css('scroll-snap-type', 'y mandatory');
			}, 1000);
		let $this = $(this),
		href = '#' + $this.data('anchor');
		console.log(href);
		gsap.to(window, {
			duration: 1,
			scrollTo: {
				y: href,
			},
		});
		return false;
	});

	const navLinks = $('.header-menu__item');

	const panels = gsap.utils.toArray('section');
	const sections = $('.section');

	let eventInterval;

	function startGtamEvent() {
		eventInterval = setTimeout(() => {
			window.gtag('event', 'internal', {
				'event_category': 'do',
				'event_label': 'interaction'
			});
		}, 15000);
	}

	function stopGtamEvent() {
		clearTimeout(eventInterval);
	}
	panels.forEach((panel, i) => {
		let ancor = panel.id;
		let link = $('[data-anchor="' + ancor + '"]');
		let panel_bg = panel.querySelector(".background"); 
		if (panel_bg) {
			panel_bg.style.backgroundPosition = `50% 50%`;
			gsap.to(panel_bg, {
				backgroundPosition: `50% ${-innerHeight / 2}px`,
				ease: "none",
				scrollTrigger: {
					trigger: panel,
					scrub: true
				}
			});
		}
	
		ScrollTrigger.create({
			trigger: panel,
			start: 'top bottom',
      end: 'bottom top',
			markers: false,
			onLeave: () => {
				navLinks.removeClass('_active');
				if (panel.classList.contains('hero')) {
					window.gtag('event', 'internal', {
						'event_category': 'do',
						'event_label': 'interaction'
					});
					stopGtamEvent();
				}
				
			},
			onLeaveBack: () => {
				navLinks.removeClass('_active');
			},
			onEnterBack: () => {
				setTimeout(() => {
					link.addClass('_active');
				}, 1000);
				panel.classList.add('_active')
			},
			onEnter: () => {
				panel.classList.add('_active')
				setTimeout(() => {
					link.addClass('_active');
				}, 1000);
			},
		});
	});

	window.onload = function () {
		setTimeout(() => {
			$('.hero').addClass('_active');
		}, 0);
		startGtamEvent()
	};
	
	ShowHelper2.setViewpostScale(1);
	if (window.innerWidth >= 1024) {

		const $targets = $('[data-auto-show]');

		if ($targets.length) {
			TweenMax.set($targets, {
				alpha: 0,
			});

			ShowHelper2.staggerWatch(
				$targets,
				function (state, target) {
					if (state) {
						target.removeAttribute('data-auto-show');

						ShowHelper2.unwatch(target);
						TweenMax.fromTo(
							target,
							0.855, {
								y: 15,
								alpha: 0,
							}, {
								y: 0,
								alpha: 1,
								force3D: true,
								delay: delay,
								clearProps: 'all',
							}
						);
					}
				},
				true,
				false,
				55
			);
		}
	}
	const $targetsRight = $('[data-auto-show-right]');
	if ($targetsRight.length) {
		TweenMax.set($targetsRight, {
			alpha: 0,
		});
		ShowHelper2.staggerWatch(
			$targetsRight,
			function (state, target) {
				if (state) {
					target.removeAttribute('data-auto-show-right');
					ShowHelper2.unwatch(target);
					TweenMax.fromTo(
						target,
						0.855, {
							x: 15,
							alpha: 0,
						}, {
							x: 0,
							alpha: 1,
							force3D: true,
							delay: delay,
							clearProps: 'all',
						}
					);
				}
			},
			true,
			false,
			55
		);
	}
	const $targetsLeft = $('[data-auto-show-left]');

	if ($targetsLeft.length) {
		TweenMax.set($targetsLeft, {
			alpha: 0,
		});
		ShowHelper2.staggerWatch(
			$targetsLeft,
			function (state, target) {
				if (state) {
					target.removeAttribute('data-auto-show-left');
					ShowHelper2.unwatch(target);
					TweenMax.fromTo(
						target,
						0.855, {
							x: -15,
							alpha: 0,
						}, {
							x: 0,
							alpha: 1,
							force3D: true,
							delay: delay,
							clearProps: 'all',
						}
					);
				}
			},
			true,
			false,
			55
		);
	}

	const $leadForm = $('.feedback');

	if ($leadForm.length) {
		let img = $('.feedback__img');
		ShowHelper2.staggerWatch(
			$leadForm,
			function (state, target) {
				if (state) {
					ShowHelper2.unwatch(target);
					TweenMax.fromTo(
						img,
						0.855, {
							scale: 0.5,
							alpha: 0,
						}, {
							scale: 1,
							alpha: 1,
							force3D: true,
							delay: delay,
							clearProps: 'all',
						}
					);
				}
			},
			true,
			false,
			55
		);
	}

	ShowHelper2.start();
}

export default new Animations();