import { de } from './de';
import { en } from './en';
import { it } from './it';
import type { Locale } from './routes';

export const translations = {
	de,
	it,
	en,
};

export const getTranslations = (locale: Locale) => translations[locale];

export type Translations = typeof de;
