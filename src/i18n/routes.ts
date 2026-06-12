export type Locale = 'de' | 'it' | 'en';
export type PageKey = 'home' | 'services' | 'about' | 'contact' | 'imprint' | 'privacy';

export const locales: Locale[] = ['de', 'it', 'en'];

export const pagePaths: Record<PageKey, Partial<Record<Locale, string>>> = {
	home: {
		de: '/',
		it: '/it',
		en: '/en',
	},
	services: {
		de: '/leistungen',
		it: '/it/servizi',
		en: '/en/services',
	},
	about: {
		de: '/ueber-uns',
		it: '/it/chi-siamo',
		en: '/en/about',
	},
	contact: {
		de: '/kontakt',
		it: '/it/contatti',
		en: '/en/contact',
	},
	imprint: {
		de: '/impressum',
	},
	privacy: {
		de: '/datenschutz',
	},
};

export const route = (locale: Locale, page: PageKey) => pagePaths[page][locale] ?? pagePaths[page].de ?? '/';

export const languageLinks = (page: PageKey) =>
	locales.map((locale) => ({
		locale,
		label: locale.toUpperCase(),
		href: route(locale, page),
	}));
