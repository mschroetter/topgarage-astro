import { de } from './de';

export const en = {
	...de,
	meta: {
		...de.meta,
		home: {
			title: 'Top Garage · Meran-Sinich',
			description:
				'Top Garage in Meran-Sinich: workshop service, bodywork, glass replacement and vehicle sales with personal support since 1989.',
		},
		services: {
			title: 'Services · Top Garage Meran-Sinich',
			description:
				'Top Garage services in Meran-Sinich: car service, bodywork, auto glass, tires, wheel alignment, inspection center and vehicle sales.',
		},
		about: {
			title: 'About · Top Garage Meran-Sinich',
			description:
				'Since 1989, Top Garage Meran-Sinich has stood for reliable service, modern workshop expertise and personal support.',
		},
		contact: {
			title: 'Contact · Top Garage Meran-Sinich',
			description: 'Contact Top Garage in Meran-Sinich: address, phone, email, opening hours, route and contact form.',
		},
	},
	nav: {
		...de.nav,
		aria: 'Main navigation',
		mobileAria: 'Mobile navigation',
		open: 'Open menu',
		close: 'Close menu',
		home: 'Home',
		services: 'Services',
		about: 'About us',
		contact: 'Contact',
		appointment: 'Book',
		appointmentLong: 'Book an appointment',
	},
	footer: {
		...de.footer,
		aria: 'Footer navigation',
		services: 'Services',
		about: 'About us',
		contact: 'Contact',
		appointment: 'Book an appointment',
	},
	home: {
		hero: {
			...de.home.hero,
			headline: 'Your workshop<br />in Meran.',
			subline: 'Workshop · Bodywork · Glass replacement · Vehicle sales',
			primary: 'Book an appointment',
			secondary: 'Our services',
			ratingLabel: 'Google rating',
			scrollLabel: 'Scroll down',
		},
		intro: {
			...de.home.intro,
			eyebrow: 'OUR PROMISE',
			headline: 'Precision.<br />Quality.<br />Trust.',
			text: 'Modern workshop technology, precise craftsmanship and personal support – for all brands and every mobility need.',
			imageAlt: 'TopGarage workshop in Meran-Sinich',
		},
		services: {
			...de.home.services,
			eyebrow: 'OUR SERVICES',
			headline: 'What we offer.',
			text: 'Three areas. One standard: precise, reliable service for your vehicle.',
			cta: 'View all services',
			items: [
				{
					...de.home.services.items[0],
					title: 'Workshop & technology',
					text: 'Car service, inspection center, tires, electronics and wheel alignment.',
				},
				{
					...de.home.services.items[1],
					title: 'Bodywork & auto glass',
					text: 'Bodywork, windshield replacement and auto glass services.',
				},
				{
					...de.home.services.items[2],
					title: 'Glass replacement & auto glass',
					text: 'Auto glass repair and replacement – fast, precise and professional.',
				},
			],
		},
		about: {
			...de.home.about,
			eyebrow: 'ABOUT TOPGARAGE',
			headline: 'Since 1989.<br />For Meran.',
			text: 'For more than three decades, we have stood for reliable service, modern workshop expertise and personal support for vehicles of all brands. Quality, precision and customer focus have been at the heart of our work since 1989.',
			cta: 'More about us',
			imageAlt: 'TopGarage team in Meran-Sinich',
		},
		cta: {
			...de.home.cta,
			headline: 'Ready for your next workshop appointment?',
			text: 'Workshop service, bodywork and auto glass – personal, precise and reliable in Meran-Sinich.',
			button: 'Book an appointment',
		},
	},
	servicesPage: {
		...de.servicesPage,
		hero: {
			...de.servicesPage.hero,
			eyebrow: 'TOPGARAGE SERVICES',
			headline: 'Service for every detail.',
			text: 'From workshop technology to bodywork, from auto glass to vehicle sales – personal support and premium quality from one source.',
			imageAlt: 'TopGarage service in Meran-Sinich',
		},
		items: [
			{ ...de.servicesPage.items[0], title: 'Car service', text: 'Reliable service and precise maintenance for vehicles of all brands.' },
			{ ...de.servicesPage.items[1], title: 'Bodywork', text: 'Bodywork carried out with experience, precision and attention to detail.' },
			{ ...de.servicesPage.items[2], title: 'Glass replacement & auto glass', text: 'Auto glass repair and replacement - fast, precise and professional.' },
			{ ...de.servicesPage.items[3], title: 'Tires & electronics', text: 'Tire service, diagnostics and electronic systems handled with expertise.' },
			{ ...de.servicesPage.items[4], title: 'Wheel alignment', text: 'Precise alignment for stability, safety and even tire wear.' },
			{ ...de.servicesPage.items[5], title: 'Inspection center', text: 'Thorough checks and technical preparation with modern workshop equipment.' },
			{ ...de.servicesPage.items[6], title: 'Vehicle sales', text: 'Selected vehicles and personal support in Meran-Sinich.' },
			{ ...de.servicesPage.items[7], title: 'Personal advice', text: 'Direct contacts and clear recommendations for your vehicle.' },
		],
		contact: {
			...de.servicesPage.contact,
			eyebrow: 'QUESTIONS?',
			headline: 'We provide personal support and find the right solution for your vehicle.',
			button: 'Book an appointment',
		},
	},
	aboutPage: {
		...de.aboutPage,
		hero: {
			...de.aboutPage.hero,
			eyebrow: 'ABOUT TOPGARAGE',
			headline: 'Since 1989.<br />For Meran.',
			text: 'For more than three decades, we have stood for reliable service, modern workshop expertise and personal support for vehicles of all brands.',
			imageAlt: 'TopGarage team in Meran-Sinich',
		},
		story: {
			...de.aboutPage.story,
			eyebrow: 'OUR STORY',
			headline: 'Grown through<br />experience.',
			text: 'What began in 1989 as a two-person business is now a modern company with personal support, reliable service and an experienced team. Quality, trust and customer focus continue to shape our work today.',
		},
		values: {
			...de.aboutPage.values,
			eyebrow: 'WHAT DEFINES US',
			headline: 'One team.<br />One standard.',
			texts: [
				'What began in 1989 as a two-person business is now an experienced team for workshop, bodywork, auto glass and vehicle sales in Meran-Sinich.',
				'We focus on clear communication, careful workmanship and advice tailored to your vehicle and your mobility.',
			],
		},
		stats: {
			...de.aboutPage.stats,
			eyebrow: 'OUR COMPANY',
			items: [
				{ value: '35+', label: 'Years of experience' },
				{ value: '14', label: 'Employees' },
				{ value: '1989', label: 'Founded' },
				{ value: '100%', label: 'Passion' },
			],
		},
	},
	contactPage: {
		...de.contactPage,
		hero: {
			...de.contactPage.hero,
			eyebrow: 'CONTACT',
			headline: 'We look forward<br />to hearing from you.',
			text: 'Whether it is an appointment, repair, bodywork or auto glass – we are happy to support you personally.',
		},
		info: {
			...de.contactPage.info,
			addressLabel: 'Address',
			phoneLabel: 'Phone',
			openingLabel: 'Opening hours',
			opening: 'Mon–Fri: 08:00–12:00 / 14:00–18:00<br />Sat: by appointment',
			call: 'Call',
			email: 'Send an email',
			route: 'Get directions',
		},
		form: {
			...de.contactPage.form,
			eyebrow: 'MESSAGE',
			headline: 'Write to us.',
			text: 'We will get back to you personally as soon as possible.',
			phone: 'Phone number',
			message: 'Message',
			submit: 'Send message',
		},
		map: {
			...de.contactPage.map,
			title: 'Google Maps map TopGarage Meran-Sinich',
			route: 'Get directions',
		},
	},
};
