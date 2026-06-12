import { de } from './de';

export const it = {
	...de,
	meta: {
		...de.meta,
		home: {
			title: 'Top Garage · Merano-Sinigo',
			description:
				'Top Garage a Merano-Sinigo: officina, carrozzeria, sostituzione cristalli e vendita veicoli con consulenza personale dal 1989.',
		},
		services: {
			title: 'Servizi · Top Garage Merano-Sinigo',
			description:
				'I servizi di Top Garage a Merano-Sinigo: officina, carrozzeria, cristalli auto, pneumatici, assetto ruote, centro revisioni e vendita veicoli.',
		},
		about: {
			title: 'Chi siamo · Top Garage Merano-Sinigo',
			description:
				'Dal 1989 Top Garage Merano-Sinigo unisce servizio affidabile, competenza tecnica moderna e consulenza personale.',
		},
		contact: {
			title: 'Contatti · Top Garage Merano-Sinigo',
			description: 'Contatta Top Garage a Merano-Sinigo: indirizzo, telefono, e-mail, orari, indicazioni stradali e modulo di contatto.',
		},
	},
	nav: {
		...de.nav,
		aria: 'Navigazione principale',
		mobileAria: 'Navigazione mobile',
		open: 'Apri menu',
		close: 'Chiudi menu',
		home: 'Home',
		services: 'Servizi',
		about: 'Chi siamo',
		contact: 'Contatti',
		appointment: 'Prenota',
		appointmentLong: 'Prenota un appuntamento',
	},
	footer: {
		...de.footer,
		aria: 'Navigazione footer',
		services: 'Servizi',
		about: 'Chi siamo',
		contact: 'Contatti',
		appointment: 'Prenota un appuntamento',
	},
	home: {
		hero: {
			...de.home.hero,
			eyebrow: 'TOP GARAGE · MERANO-SINIGO',
			headline: 'La vostra officina<br />a Merano.',
			subline: 'Officina · Carrozzeria · Sostituzione cristalli · Vendita veicoli',
			primary: 'Prenota un appuntamento',
			secondary: 'I nostri servizi',
			ratingLabel: 'Valutazione Google',
			scrollLabel: 'Scorri verso il basso',
		},
		intro: {
			...de.home.intro,
			eyebrow: 'LA NOSTRA PROMESSA',
			headline: 'Precisione.<br />Qualità.<br />Fiducia.',
			text: 'Tecnologia d’officina moderna, lavorazioni precise e consulenza personale – per tutti i marchi e ogni esigenza di mobilità.',
			imageAlt: 'Officina TopGarage a Merano-Sinigo',
		},
		services: {
			...de.home.services,
			eyebrow: 'I NOSTRI SERVIZI',
			headline: 'Cosa offriamo.',
			text: 'Tre ambiti. Un unico standard: un servizio preciso e affidabile per il vostro veicolo.',
			cta: 'Vedi tutti i servizi',
			items: [
				{
					...de.home.services.items[0],
					title: 'Officina & tecnica',
					text: 'Servizio auto, centro revisioni, pneumatici, elettronica e assetto ruote.',
				},
				{
					...de.home.services.items[1],
					title: 'Carrozzeria & cristalli',
					text: 'Interventi di carrozzeria, sostituzione parabrezza e cristalli auto.',
				},
				{
					...de.home.services.items[2],
					title: 'Sostituzione cristalli & autoglass',
					text: 'Riparazione e sostituzione dei cristalli auto – rapide, precise e professionali.',
				},
			],
		},
		about: {
			...de.home.about,
			eyebrow: 'CHI SIAMO',
			headline: 'Dal 1989.<br />Per Merano.',
			text: 'Da oltre tre decenni offriamo servizio affidabile, competenza tecnica moderna e consulenza personale per veicoli di tutti i marchi. Qualità, precisione e vicinanza al cliente sono al centro del nostro lavoro dal 1989.',
			cta: 'Scopri di più',
			imageAlt: 'Team di TopGarage a Merano-Sinigo',
		},
		cta: {
			...de.home.cta,
			eyebrow: 'TOP GARAGE MERANO-SINIGO',
			headline: 'Pronti per il vostro prossimo appuntamento in officina?',
			text: 'Officina, carrozzeria e cristalli auto – un servizio personale, preciso e affidabile a Merano-Sinigo.',
			button: 'Prenota un appuntamento',
		},
	},
	servicesPage: {
		...de.servicesPage,
		hero: {
			...de.servicesPage.hero,
			eyebrow: 'SERVIZI TOPGARAGE',
			headline: 'Cura per ogni dettaglio.',
			text: 'Dall’officina e tecnica alla carrozzeria, dai cristalli auto alla vendita veicoli – consulenza personale e qualità da un’unica fonte.',
			imageAlt: 'Servizio TopGarage a Merano-Sinigo',
		},
		items: [
			{ ...de.servicesPage.items[0], title: 'Servizio auto', text: 'Manutenzione affidabile e precisa per veicoli di tutti i marchi.' },
			{ ...de.servicesPage.items[1], title: 'Carrozzeria', text: 'Interventi di carrozzeria eseguiti con esperienza, precisione e cura del dettaglio.' },
			{ ...de.servicesPage.items[2], title: 'Sostituzione cristalli & autoglass', text: 'Riparazione e sostituzione dei cristalli auto - rapide, precise e professionali.' },
			{ ...de.servicesPage.items[3], title: 'Pneumatici & elettronica', text: 'Servizio pneumatici, diagnosi e sistemi elettronici gestiti con competenza.' },
			{ ...de.servicesPage.items[4], title: 'Assetto ruote', text: 'Misurazioni precise per stabilità, sicurezza e usura uniforme degli pneumatici.' },
			{ ...de.servicesPage.items[5], title: 'Centro revisioni', text: 'Controlli accurati e preparazione tecnica con attrezzature moderne.' },
			{ ...de.servicesPage.items[6], title: 'Vendita veicoli', text: 'Veicoli selezionati e consulenza personale a Merano-Sinigo.' },
			{ ...de.servicesPage.items[7], title: 'Consulenza personale', text: 'Referenti diretti e raccomandazioni chiare per il vostro veicolo.' },
		],
		contact: {
			...de.servicesPage.contact,
			eyebrow: 'DOMANDE?',
			headline: 'Vi offriamo una consulenza personale e troviamo la soluzione più adatta al vostro veicolo.',
			button: 'Prenota un appuntamento',
		},
	},
	aboutPage: {
		...de.aboutPage,
		hero: {
			...de.aboutPage.hero,
			eyebrow: 'CHI SIAMO',
			headline: 'Dal 1989.<br />Per Merano.',
			text: 'Da oltre tre decenni offriamo servizio affidabile, competenza tecnica moderna e consulenza personale per veicoli di tutti i marchi.',
			imageAlt: 'Team di TopGarage a Merano-Sinigo',
		},
		story: {
			...de.aboutPage.story,
			eyebrow: 'LA NOSTRA STORIA',
			headline: 'Cresciuti<br />con l’esperienza.',
			text: 'Nata nel 1989 come realtà a due persone, TopGarage è oggi un’azienda moderna con consulenza personale, servizio affidabile e un team esperto. Qualità, fiducia e vicinanza al cliente guidano ancora oggi il nostro lavoro.',
		},
		values: {
			...de.aboutPage.values,
			eyebrow: 'COSA CI DISTINGUE',
			headline: 'Un team.<br />Un unico standard.',
			texts: [
				'Da una realtà a due persone nata nel 1989 siamo diventati un team esperto per officina, carrozzeria, cristalli auto e vendita veicoli a Merano-Sinigo.',
				'Puntiamo su comunicazione chiara, lavoro accurato e consulenza su misura per il vostro veicolo e la vostra mobilità.',
			],
		},
		stats: {
			...de.aboutPage.stats,
			eyebrow: 'LA NOSTRA AZIENDA',
			items: [
				{ value: '35+', label: 'Anni di esperienza' },
				{ value: '14', label: 'Collaboratori' },
				{ value: '1989', label: 'Fondazione' },
				{ value: '100%', label: 'Passione' },
			],
		},
	},
	contactPage: {
		...de.contactPage,
		hero: {
			...de.contactPage.hero,
			eyebrow: 'CONTATTI',
			headline: 'Saremo lieti<br />di sentirvi.',
			text: 'Per appuntamenti, riparazioni, carrozzeria o cristalli auto – siamo a vostra disposizione con una consulenza personale.',
		},
		info: {
			...de.contactPage.info,
			addressLabel: 'Indirizzo',
			phoneLabel: 'Telefono',
			openingLabel: 'Orari',
			opening: 'Lun–Ven: 08:00–12:00 / 14:00–18:00<br />Sab: su appuntamento',
			call: 'Chiama',
			email: 'Scrivi una e-mail',
			route: 'Calcola percorso',
		},
		form: {
			...de.contactPage.form,
			eyebrow: 'MESSAGGIO',
			headline: 'Scriveteci.',
			text: 'Vi risponderemo personalmente nel più breve tempo possibile.',
			phone: 'Telefono',
			message: 'Messaggio',
			submit: 'Invia messaggio',
		},
		map: {
			...de.contactPage.map,
			title: 'Mappa Google Maps TopGarage Merano-Sinigo',
			route: 'Calcola percorso',
		},
	},
};
