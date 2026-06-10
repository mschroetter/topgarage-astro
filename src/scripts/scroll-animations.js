import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

gsap.registerPlugin(ScrollTrigger);

if (!reduceMotion) {
	const lenis = new Lenis({
		duration: 1.15,
		smoothWheel: true,
		syncTouch: true,
		touchMultiplier: 1.2,
		wheelMultiplier: 1,
		easing: (t) => 1 - Math.pow(1 - t, 4),
	});

	lenis.on('scroll', ScrollTrigger.update);

	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});

	gsap.ticker.lagSmoothing(0);
	window.addEventListener('load', () => ScrollTrigger.refresh());

	const sections = gsap.utils.toArray('section').filter((section) => !section.closest('footer'));
	const sectionSelector = sections.length > 0 ? sections : [];

	const revealElements = gsap.utils
		.toArray(
			[
				'section h1',
				'section h2',
				'section p[class*="uppercase"]',
				'section p.text-lg',
				'section p.text-xl',
				'section p.text-base.leading-7',
				'section .prose p',
			].join(', '),
		)
		.filter(
			(element) =>
				sectionSelector.some((section) => section.contains(element)) &&
				!element.closest('.service-card') &&
				!element.closest('.stat-item'),
		);

	if (revealElements.length > 0) {
		revealElements.forEach((element) => {
			gsap.from(element, {
				opacity: 0,
				y: 32,
				duration: 0.9,
				ease: 'power3.out',
				clearProps: 'opacity,transform',
				scrollTrigger: {
					trigger: element,
					start: 'top 86%',
					once: true,
				},
			});
		});
	}

	sections.forEach((section) => {
		const cards = section.querySelectorAll('.service-card, .stat-item');

		if (cards.length === 0) {
			return;
		}

		gsap.from(cards, {
			y: 24,
			duration: 0.9,
			ease: 'power3.out',
			stagger: 0.1,
			clearProps: 'transform',
			scrollTrigger: {
				trigger: section,
				start: 'top 82%',
				once: true,
			},
		});
	});
}
