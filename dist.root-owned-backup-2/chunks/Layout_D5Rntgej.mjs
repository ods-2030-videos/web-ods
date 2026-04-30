import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderHead, f as renderSlot } from './astro/server_Sas95dKE.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const htmlLang$1 = "en";
const localeLabel$1 = "EN";
const siteTitle$1 = "SDGs for Computer Engineering";
const seoDescription$1 = "Website about SDGs, curated videos, SDG 5 self-assessment, and further-reading resources for Computer Engineering audiences.";
const heroEyebrow$1 = "Videos, self-assessment and resources";
const heroTitle$1 = "Sustainable development goals through a Computer Engineering lens";
const heroLead$1 = "Browse videos, complete a self-assessment focused on gender equality, and go deeper with resources classified by difficulty and reading time.";
const heroNote$1 = "The interface and shared site content are available in English and Spanish.";
const nav$1 = {
	home: "Home",
	overview: "SDGs",
	videos: "Videos",
	quiz: "Self-assessment",
	deepening: "Further reading"
};
const sections$1 = {
	overviewTitle: "Topic coverage",
	overviewLead: "The site covers SDGs 4, 5, 7, 8, 9, 11, 12, 13 and 16, with SDG 5 as the main focus for self-assessment and further reading.",
	videosTitle: "Video section",
	videosLead: "Each block gathers videos related to each SDG, including authorship, license, subtitles and tone.",
	quizTitle: "SDG 5 self-assessment",
	quizLead: "Each attempt consists of 8 questions about SDG 5.",
	deepeningTitle: "Further reading",
	deepeningLead: "Resources are grouped by SDG, with summary, difficulty and reading time. For SDG 5, they are organized into two subtopics."
};
const labels$1 = {
	groupLink: "Open group/playlist",
	goalPrefix: "SDG",
	watch: "Open video",
	launchVideo: "Load video",
	sourceMaterial: "Question bank",
	authors: "Authors",
	authorsUnknown: "Not specified",
	subtitles: "Subtitles",
	character: "Tone",
	license: "License",
	summary: "Summary",
	difficulty: "Level",
	time: "Estimated time",
	plannedVideo: "Planned video",
	plannedGroup: "Planned videos",
	noPublicUrl: "No public link available",
	plannedNote: "This video is planned, but no public link is available yet.",
	quizSource: "Each attempt includes immediate feedback.",
	startQuiz: "Start attempt",
	reshuffleQuiz: "New attempt",
	submitQuiz: "Check answers",
	score: "Score",
	selectedQuestions: "Selected questions",
	orientation: "Orientation",
	correctAnswer: "Correct answer",
	wrongAnswers: "Explanations for failed questions",
	resultCategory: "Category",
	resourceLink: "Open resource",
	openSection: "Open page",
	coveredGoals: "covered SDGs",
	publicAndPlannedVideos: "public videos",
	questionBank: "questions in the SDG 5 bank",
	deepeningResources: "further-reading resources",
	documentedVideos: "documented videos",
	subtopics: "subtopics",
	documentedResources: "documented resources",
	noFailedQuestions: "There are no failed questions in this attempt.",
	mainNavigation: "Main navigation",
	languageSwitch: "Language switcher"
};
const quizUi$1 = {
	informative: "Informative",
	motivational: "Motivational",
	missingAnswers: "Answer every question before checking the attempt.",
	selectedModel: "Applied model: 8 questions per attempt."
};
const home$1 = {
	title: "Main sections",
	lead: ""
};
const footer$1 = {
	title: "Creative Commons License",
	shortName: "CC BY-NC-SA 4.0 International",
	licensePrefix: "This website is licensed under ",
	licenseName: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
	licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
	attribution: "Attribution: EHU.Desarrollo Sostenible.",
	thirdPartyLicenses: "All third-party content retains its original licenses.",
	usageVerification: "It has been verified that all works used allow non-commercial use and distribution."
};
const en = {
	htmlLang: htmlLang$1,
	localeLabel: localeLabel$1,
	siteTitle: siteTitle$1,
	seoDescription: seoDescription$1,
	heroEyebrow: heroEyebrow$1,
	heroTitle: heroTitle$1,
	heroLead: heroLead$1,
	heroNote: heroNote$1,
	nav: nav$1,
	sections: sections$1,
	labels: labels$1,
	quizUi: quizUi$1,
	home: home$1,
	footer: footer$1
};

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: en,
  footer: footer$1,
  heroEyebrow: heroEyebrow$1,
  heroLead: heroLead$1,
  heroNote: heroNote$1,
  heroTitle: heroTitle$1,
  home: home$1,
  htmlLang: htmlLang$1,
  labels: labels$1,
  localeLabel: localeLabel$1,
  nav: nav$1,
  quizUi: quizUi$1,
  sections: sections$1,
  seoDescription: seoDescription$1,
  siteTitle: siteTitle$1
}, Symbol.toStringTag, { value: 'Module' }));

const htmlLang = "es";
const localeLabel = "ES";
const siteTitle = "ODS para Informática";
const seoDescription = "Sitio web sobre ODS, vídeos, autoevaluación del ODS 5 y recursos de profundización para estudiantes y profesionales de Ingeniería Informática.";
const heroEyebrow = "Vídeos, autoevaluación y recursos";
const heroTitle = "Objetivos de desarrollo sostenible con foco en Ingeniería Informática";
const heroLead = "Explora vídeos, completa una autoevaluación centrada en igualdad de género y profundiza con fuentes clasificadas por dificultad y tiempo de lectura.";
const heroNote = "La interfaz es multilingüe. Algunos materiales se mantienen en castellano para respetar su versión original.";
const nav = {
	home: "Inicio",
	overview: "ODS",
	videos: "Vídeos",
	quiz: "Autoevaluación",
	deepening: "Profundización"
};
const sections = {
	overviewTitle: "Cobertura temática",
	overviewLead: "La web cubre los ODS 4, 5, 7, 8, 9, 11, 12, 13 y 16, con especial peso del ODS 5 en autoevaluación y profundización.",
	videosTitle: "Apartado de vídeos",
	videosLead: "Cada bloque reúne vídeos relacionados con cada ODS, con autores, licencia, subtítulos y carácter.",
	quizTitle: "Autoevaluación del ODS 5",
	quizLead: "Cada intento consiste en 8 preguntas sobre el ODS 5.",
	deepeningTitle: "Profundización",
	deepeningLead: "Los recursos se presentan agrupados por ODS, con resumen, dificultad y tiempo estimado. En ODS 5 se organizan en dos subtemas."
};
const labels = {
	groupLink: "Abrir grupo/lista",
	goalPrefix: "ODS",
	watch: "Abrir vídeo",
	launchVideo: "Cargar vídeo",
	sourceMaterial: "Banco de preguntas",
	authors: "Autores",
	authorsUnknown: "No indicado",
	subtitles: "Subtítulos",
	character: "Carácter",
	license: "Licencia",
	summary: "Resumen",
	difficulty: "Nivel",
	time: "Tiempo estimado",
	plannedVideo: "Vídeo previsto",
	plannedGroup: "Vídeos previstos",
	noPublicUrl: "Sin enlace público disponible",
	plannedNote: "Este vídeo está previsto, pero todavía no cuenta con un enlace público.",
	quizSource: "Cada intento incluye corrección inmediata.",
	startQuiz: "Iniciar intento",
	reshuffleQuiz: "Nuevo intento",
	submitQuiz: "Corregir respuestas",
	score: "Aciertos",
	selectedQuestions: "Preguntas seleccionadas",
	orientation: "Orientación",
	correctAnswer: "Respuesta correcta",
	wrongAnswers: "Explicaciones de preguntas falladas",
	resultCategory: "Categoría",
	resourceLink: "Abrir recurso",
	openSection: "Abrir página",
	coveredGoals: "ODS cubiertos",
	publicAndPlannedVideos: "vídeos públicos",
	questionBank: "preguntas en banco ODS 5",
	deepeningResources: "recursos de profundización",
	documentedVideos: "vídeos documentados",
	subtopics: "subtemas",
	documentedResources: "recursos documentados",
	noFailedQuestions: "No hay preguntas falladas en este intento.",
	mainNavigation: "Secciones principales",
	languageSwitch: "Cambio de idioma"
};
const quizUi = {
	informative: "Informativa",
	motivational: "Motivadora",
	missingAnswers: "Responde todas las preguntas antes de corregir.",
	selectedModel: "Modelo aplicado: 8 preguntas por intento."
};
const home = {
	title: "Apartados principales",
	lead: ""
};
const footer = {
	title: "Licencia Creative Commons",
	shortName: "CC BY-NC-SA 4.0 Internacional",
	licensePrefix: "Este sitio web está licenciado bajo ",
	licenseName: "Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional",
	licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
	attribution: "Atribución: EHU.Desarrollo Sostenible.",
	thirdPartyLicenses: "Todos los contenidos de terceros mantienen sus licencias originales.",
	usageVerification: "Se ha verificado que todas las obras utilizadas permiten uso no comercial y distribución."
};
const es = {
	htmlLang: htmlLang,
	localeLabel: localeLabel,
	siteTitle: siteTitle,
	seoDescription: seoDescription,
	heroEyebrow: heroEyebrow,
	heroTitle: heroTitle,
	heroLead: heroLead,
	heroNote: heroNote,
	nav: nav,
	sections: sections,
	labels: labels,
	quizUi: quizUi,
	home: home,
	footer: footer
};

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: es,
  footer,
  heroEyebrow,
  heroLead,
  heroNote,
  heroTitle,
  home,
  htmlLang,
  labels,
  localeLabel,
  nav,
  quizUi,
  sections,
  seoDescription,
  siteTitle
}, Symbol.toStringTag, { value: 'Module' }));

const configuredLanguages = [
	"es",
	"en"
];

const odsCatalog = [
	{
		id: "4",
		name: "Educación de calidad"
	},
	{
		id: "5",
		name: "Igualdad de género"
	},
	{
		id: "7",
		name: "Energía asequible y no contaminante"
	},
	{
		id: "8",
		name: "Trabajo decente y crecimiento económico"
	},
	{
		id: "9",
		name: "Industria, innovación e infraestructuras"
	},
	{
		id: "11",
		name: "Ciudades y comunidades sostenibles"
	},
	{
		id: "12",
		name: "Producción y consumo responsable"
	},
	{
		id: "13",
		name: "Acción por el clima"
	},
	{
		id: "16",
		name: "Paz, justicia e instituciones sólidas"
	}
];

const videoSections = [
	{
		id: "4",
		title: "Educación de calidad",
		groupLink: "https://youtube.com/playlist?list=PL3cogaLC5bMr-lZhOlNn4JH8V0Mue3keh&si=lmQ_DsfE0MLaPP5c",
		videos: [
			{
				slot: "Vídeo 2",
				title: "PI21-P3. Aprende y Enseña/D/Eqvestris",
				url: "https://youtu.be/rNypWkMNz0Q?si=qKpCMXTa2sNv-1LE",
				authors: "Obra original: Rubén Escobedo, Ángela Saénz, Abdul Rehman y Víctor Manuel López (Equipo Bellatrix). Obra derivada: Héctor Solar, José Antonio Ortega y Juan Carlos Castillo (Equipo Eqvestris).",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto"
			},
			{
				slot: "Vídeo 4",
				title: "4. Educación de calidad",
				url: "https://youtu.be/LlQFnSh1iZ8?si=rxMl1O-lJ8rYx0XV",
				authors: "Iñigo Berganza, Gonzalo Galdós y Bryan Sanchéz",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera, rumano",
				character: "Mixto"
			},
			{
				slot: "Vídeo 5",
				title: "PI21-P3. Nueva docencia online/D/Libyca",
				url: "https://youtu.be/ATWQLScxQ2M?si=KSNlcUBsSa6iXyAo",
				authors: "Obra original: Álvaro Bayo, Juan Pérez, Javier Pérez (equipo Betelgeuse). Obra derivada: Jorge Ismael López, Francisco Javier Olavarrieta, Álvaro Romero (equipo Libyca).",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto"
			},
			{
				slot: "Vídeo 7",
				title: "Educación con la tecnología",
				url: "https://youtu.be/ZDwhSPBGblY?si=n633ROzhnOlKj469",
				authors: "Adrian Molina, Ion Olaizola y Mikel Iturria",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			}
		]
	},
	{
		id: "5",
		title: "Igualdad de género",
		groupLink: "https://www.youtube.com/playlist?list=PLroQTRHVL_JIJDyTTeTmMszn-EPy17zw0",
		videos: [
			{
				slot: "Vídeo 1",
				title: "Contratación justa: reescribiendo los algoritmos que discriminan a las mujeres",
				url: "https://www.youtube.com/watch?v=ZyouRfAEeqs",
				authors: "Ada Byron",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto",
				infographic: {
					src: "infografia-contratacion-justa.jpeg",
					alt: "Infografía sobre contratación justa"
				}
			},
			{
				slot: "Vídeo 2",
				title: "Level Up: Igualdad de Género en el Diseño de Videojuegos",
				url: "https://www.youtube.com/watch?v=uU1PmPORTGE",
				authors: "Ada Byron",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Motivador",
				infographic: {
					src: "infografia-level-up.jpeg",
					alt: "Infografía sobre Level Up"
				}
			},
			{
				slot: "Vídeo 3",
				title: "Sesgos algorítmicos",
				url: "https://www.youtube.com/watch?v=9KXc_eI3oG0",
				authors: "Barbara Lyskov",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto",
				infographic: {
					src: "infografia-sesgos-algoritmicos.jpeg",
					alt: "Infografía sobre sesgos algorítmicos"
				}
			},
			{
				slot: "Vídeo 4",
				title: "Redes sociales y estereotipos de género: un reto para la igualdad",
				url: "https://www.youtube.com/watch?v=VeFVTi7E9lw",
				authors: "Barbara Lyskov",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Motivador",
				infographic: {
					src: "infografia-redes-sociales.jpeg",
					alt: "Infografía sobre redes sociales y estereotipos de género"
				}
			}
		]
	},
	{
		id: "7",
		title: "Energía asequible y no contaminante",
		groupLink: "https://youtube.com/playlist?list=PL3cogaLC5bMoNwaFXhg6ntL_WJqEo5chR&si=1vykY70V3ubfS8MB",
		videos: [
			{
				slot: "Vídeo 1",
				title: "PI22-P3. Criptomonedas, edición especial/D/Yaxkin",
				url: "https://youtu.be/HBSxAaRAZZM?si=C_-m2_NcIkdp5zP9",
				authors: "Obra original: Layo Cruz, Pablo Castro, Beatriz Sánchez y Juan Pérez (equipo Ío). Obra derivada: Alberto Urquía, Héctor Serna, Mario Cundín (equipo Yaxkin).",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, alemán",
				character: "Informativo"
			},
			{
				slot: "Vídeo 5",
				title: "La consecuencia de la generación masiva de datos",
				url: "https://youtu.be/m_qYE9oGgAU?si=7z1hKAl7iv0VHHir",
				authors: "Obra original: Unai Del Rio, Alexandra Aleina Pelipian, Kevin Joel Yovera Carlos. Obra derivada: Imanol Maraña, Ivan Garoña, Ernesto Morales.",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Informativo"
			},
			{
				slot: "Vídeo 7",
				title: "Objetivos de Desarrollo Sostenible 7: Energía Asequible y Sostenible",
				url: "https://youtu.be/yYNdM8WaXN4?si=D0wDJoeBAGgmaABL",
				authors: "Álvaro Ramos, Alejandro Pérez, Endika Sánchez",
				license: "CC BY-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			},
			{
				slot: "Vídeo 8",
				title: "Criptomonedas y su impacto medioambiental",
				url: "https://youtu.be/y7XfN-oQ2po?si=TH6Egg5Zik0XD-FQ",
				authors: "Kevin Jin, Unai Pinedo y Leire Cartagena",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Informativo"
			}
		]
	},
	{
		id: "8",
		title: "Trabajo decente y crecimiento económico",
		groupLink: "https://www.youtube.com/playlist?list=PL3WpO3K9Wx7yUwdJTZPguTR98mhXd2j9n",
		videos: [
			{
				slot: "Vídeo 1",
				title: "El derecho a un trabajo digno",
				url: "https://www.youtube.com/watch?v=AChrbx9VKWU&list=PL3WpO3K9Wx7yUwdJTZPguTR98mhXd2j9n&index=1",
				authors: "Desconocido (canal: GP-ODS-Rivne)",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			},
			{
				slot: "Vídeo 2",
				title: "Condiciones de trabajo y deslocalización en el sector de las TIC",
				url: "https://www.youtube.com/watch?v=57EGURn81ZQ",
				authors: "Pablo García, Judith Antelo, Ian Fernandez y Yeray Palma",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			},
			{
				slot: "Vídeo 3",
				title: "Coronavirus y teletrabajo",
				url: "https://www.youtube.com/watch?v=f9609NTc-Rc&list=PL3WpO3K9Wx7yUwdJTZPguTR98mhXd2j9n&index=3",
				authors: "Abdurrahim Ali Ali, Jon Apaolaza Larraya y Anderson Gil Zuluaga",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto"
			},
			{
				slot: "Vídeo 4",
				title: "Revolución Industrial 4.0: desde la máquina de vapor hacia el futuro",
				url: "https://www.youtube.com/watch?v=3gL48slpvlg&list=PL3WpO3K9Wx7yUwdJTZPguTR98mhXd2j9n&index=4",
				authors: "David Cuenca, Asier Septién, Amanda Sin y Xabier Gutiérrez",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Motivador"
			},
			{
				slot: "Vídeo 5",
				title: "¿Debería asustarnos el futuro que nos espera tras acabar nuestra formación?",
				url: "https://www.youtube.com/watch?v=MliTLN86GbQ&list=PL3WpO3K9Wx7yUwdJTZPguTR98mhXd2j9n&index=5",
				authors: "No indicado",
				license: "CC BY-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Motivador"
			}
		]
	},
	{
		id: "9",
		title: "Industria, innovación e infraestructuras",
		groupLink: "https://www.youtube.com/playlist?list=PL4sEh6MPf68OltD1nubLJc1eB3gxlt7vo",
		videos: [
			{
				slot: "Vídeo 1",
				title: "Promover la industrialización sostenible - Eficiencia Industrial",
				url: "https://www.youtube.com/watch?v=7Ew8wUkXCo8&list=PL4sEh6MPf68OltD1nubLJc1eB3gxlt7vo&index=1",
				authors: "Camilo Betancourth, Ander Serrano, Julen Casajus, David Murguialday",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto"
			},
			{
				slot: "Vídeo 3",
				title: "El pulso de las ciudades sostenibles",
				url: "https://youtu.be/0HPHtMuvHFE?si=PKGnnpb58brJfEYt",
				authors: "María Stan, Víctor Gómez, Yago Molina, Diego Álvarez, Koldo Intxausti, Mikel León, Daria Paslavska y Ander Aldanas",
				license: "CC BY-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto"
			},
			{
				slot: "Vídeo 4",
				title: "Algoritmos Verdes: La Clave para una Industria Sostenible - ODS 9",
				url: "https://youtu.be/zn-aAV51De4?si=Q4ea_FIFT1GTtOJ7",
				authors: "Luken Larrañaga, Unai Matas, Maddi López y Agustín Beltrán de Heredia",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			},
			{
				slot: "Vídeo 5",
				title: "Alerta Temprana – Evitando Desastres con Tecnología",
				url: "https://youtu.be/W95sBVZTfxk?si=En8l2d4wxJgjtgxT",
				authors: "equipo Sigma",
				license: "CC BY-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto"
			}
		]
	},
	{
		id: "11",
		title: "Ciudades y comunidades sostenibles",
		groupLink: "https://www.youtube.com/watch?v=_2tUdlo7v-0&list=PL4sEh6MPf68O5UqPel1KjH8peFWQb-ZyZ",
		videos: [
			{
				slot: "Vídeo 1",
				title: "¿Cómo debemos combatir la huella de carbono?",
				url: "https://youtu.be/_2tUdlo7v-0?si=-gjEOOjRZVByNo6v",
				authors: "Teresa Cid y Abraham Casas",
				license: "CC BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			},
			{
				slot: "Vídeo 2",
				title: "Menos teslas y más buses",
				url: "https://youtu.be/XPbzhz-aeJc?si=ASdmuMoU_7i-pPa5",
				authors: "Jesús Gutiérrez, Marcos Chouciño y Diego Indígoras",
				license: "CC BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			},
			{
				slot: "Vídeo 4",
				title: "Ciudad sostenible, tráfico inteligente",
				url: "https://youtu.be/gAWMVFWx1A8?si=xvVQTeOcWliTrOx8",
				authors: "equipo 061620223038",
				license: "CC BY-NC-ND",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			},
			{
				slot: "Vídeo 5",
				title: "Ciudades y comunidades sostenibles III",
				url: "https://youtu.be/ADldRqBrLxU?si=HWyDnjmvvaCVuDR0",
				authors: "Alex Rivas, Borja Gómez, Martin L. De Ipiña, Haiyong, Mikel Molina y Erik Cembreros",
				license: "CC BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto"
			}
		]
	},
	{
		id: "12",
		title: "Producción y consumo responsable",
		groupLink: "https://youtube.com/playlist?list=PL3cogaLC5bMoc0Hr6AXS0Hhknaf_PfAdz",
		videos: [
			{
				slot: "Vídeo 1",
				title: "Cómo proteger el mundo en 5 segundos",
				url: "https://www.youtube.com/watch?v=mrsRrty_6zM",
				authors: "Albano González y Raul Benito",
				license: "CC BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto"
			},
			{
				slot: "Vídeo 2",
				title: "PI21-P3. Puedes cambiar las cosas/D/Augusta",
				url: "https://www.youtube.com/watch?v=ZrPfXcoBgYY",
				authors: "Alejandro Ruiz, Ángela Sáenz, Rubén Escobedo y Víctor Manuel López",
				license: "CC BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto"
			},
			{
				slot: "Vídeo 4",
				title: "Producción y consumo responsable",
				url: "https://www.youtube.com/watch?v=nDXwVVvonCY",
				authors: "Ángel Yao, Leire Sesma, Samuel Guzmán",
				license: "CC BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			},
			{
				slot: "Vídeo 5",
				title: "Reciclaje de teléfonos móviles",
				url: "https://youtu.be/qhHKLHK3lso?list=PL3cogaLC5bMoc0Hr6AXS0Hhknaf_PfAdz",
				authors: "Víctor Morga, Ricardo Calle y María Marín",
				license: "CC BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto"
			}
		]
	},
	{
		id: "13",
		title: "Acción por el clima",
		groupLink: "https://youtube.com/playlist?list=PL3cogaLC5bMoJkx8vAkpXUGYvRufR1_Zv",
		videos: [
			{
				slot: "Vídeo 1",
				title: "Apaga el equipo",
				url: "https://www.youtube.com/watch?v=8tt_VqVeXgM",
				authors: "Ignacio Marco Pérez, Alejandro del Campo López y José Antonio Santo Argaiz",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera, rumano",
				character: "Motivador"
			},
			{
				slot: "Vídeo 2",
				title: "Informática: parte del problema climático pero también la solución",
				url: "https://www.youtube.com/watch?v=kgWTzpbRiFg",
				authors: "Javier Del Campo, David Dominguez y Víctor Caballero",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto"
			},
			{
				slot: "Vídeo 3",
				title: "Tecnología por el clima",
				url: "https://www.youtube.com/watch?v=33lG6tqHbRQ",
				authors: "Daniel Ibáñez y Luis San Martín",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Informativo"
			},
			{
				slot: "Vídeo 4",
				title: "Domótica: acciones por el clima",
				url: "https://www.youtube.com/watch?v=RZHPEZR6uX4",
				authors: "Silvia Fernandez, Miguel Gonzalez y Paula Moreno",
				license: "CC-BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			},
			{
				slot: "Vídeo 5",
				title: "Cambio Climático",
				url: "https://www.youtube.com/watch?v=s517kI_Cdrw",
				authors: "Iván Hidalgo, Xabier Lahuerta y Jon Ander Ruiz",
				license: "CC BY-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/es/",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			}
		]
	},
	{
		id: "16",
		title: "Paz, justicia e instituciones sólidas",
		groupLink: "https://www.youtube.com/watch?v=IucxO_5kQHE&list=PL4sEh6MPf68MsZyFgy173wfNAmoytucP5&index=1",
		videos: [
			{
				slot: "Vídeo 1",
				title: "Informáticos por la sociedad",
				url: "https://youtu.be/IucxO_5kQHE?si=ArDnGZFYkQqUUgg3",
				authors: "Obra derivada: Helena Fajín, Julen Barrio, Aimar Miner",
				license: "CC BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			},
			{
				slot: "Vídeo 3",
				title: "Paz, justicia e instituciones solidas I",
				url: "https://youtu.be/4d7k4FN3Cl4?si=9fD7BGcj2W3esyc7",
				authors: "Adrián San Segundo, Rebeca Coentrao y Nagore Arroyo",
				license: "CC BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera",
				character: "Mixto"
			},
			{
				slot: "Vídeo 4",
				title: "Informática vs Corrupción",
				url: "https://youtu.be/9Qvvehqaqqo?si=PxrdBFjyhmTcpHQq",
				authors: "J. Pellejero, A. Gutierrez y C. Garraza",
				license: "CC BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés",
				character: "Mixto"
			},
			{
				slot: "Vídeo 5",
				title: "Paz, Justicia e Instituciones Sólidas III",
				url: "https://youtu.be/q4xIoLNpYas?si=tvp2eS2QLw9DF1ba",
				authors: "Julen Galarza, Unai Salas y Jorge Iglesias",
				license: "CC BY-NC-SA",
				licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es",
				subtitles: "español, inglés, euskera, rumano",
				character: "Mixto"
			}
		]
	}
];

const bankNote = "Cada intento de la autoevaluación del ODS 5 consiste en 8 preguntas.";
const categories = [
	{
		min: 0,
		max: 2,
		label: "No concienciado",
		text: "Has comenzado a explorar la igualdad de género en el ámbito digital, pero aún quedan conceptos clave por asimilar. No te preocupes, es un tema complejo y lleno de matices. Te animamos a revisar los vídeos y los materiales de profundización para entender mejor cómo los sesgos en IA, los algoritmos de contratación y los roles en videojuegos pueden perpetuar desigualdades. ¡Cada paso cuenta para construir una tecnología más justa!"
	},
	{
		min: 2,
		max: 4,
		label: "Camino de mejora",
		text: "Vas por buen camino. Has identificado algunas de las principales problemáticas, como la existencia de sesgos en los datos o la necesidad de auditar algoritmos. Aún puedes profundizar en cómo aplicar medidas concretas (anonimización de currículums, diseño de datasets inclusivos, creación de personajes diversos) en tu futura práctica profesional. Sigue así, estás en el camino de convertirte en agente de cambio."
	},
	{
		min: 5,
		max: 6,
		label: "Concienciado",
		text: "¡Bien! Tienes una comprensión sólida de los retos de la igualdad de género en el sector tecnológico. Sabes que la IA puede reproducir sesgos históricos y que los videojuegos han cosificado a la mujer, pero también reconoces que existen herramientas para revertirlo: auditorías, anonimización, diseño de personajes diversos. Este nivel de conciencia es esencial para que, como futura profesional, puedas desarrollar soluciones más equitativas."
	},
	{
		min: 7,
		max: 7,
		label: "Muy concienciado",
		text: "Excelente. Has interiorizado la mayoría de los conceptos y eres capaz de conectar los problemas (sesgos en selección, brechas en STEM, representación en videojuegos) con soluciones concretas desde la ingeniería informática. Tu visión crítica te permite identificar no solo el problema, sino también las palancas para construir tecnología inclusiva. ¡Sigue profundizando y compartiendo este conocimiento!"
	},
	{
		min: 8,
		max: 8,
		label: "Perfectamente concienciado",
		text: "¡Impresionante! Has demostrado un dominio completo de los contenidos. No solo entiendes cómo se generan los sesgos de género en IA y en la industria del videojuego, sino que también manejas estrategias para prevenirlos y corregirlos. Tienes una visión integral del ODS 5 aplicada al ámbito informático, lo que te sitúa como un agente clave para diseñar un futuro digital más justo, diverso y libre de estereotipos. ¡Gracias por tu compromiso!"
	}
];
const questions = [
	{
		id: 1,
		orientation: "Informativa",
		sourceVideo: "Vídeo 1",
		prompt: "¿Qué sucede con los modelos de contratación por IA?",
		options: [
			"Siempre eligen a los y las mejores candidatas, independientemente del género.",
			"No tienen ningún criterio en su decisión.",
			"Contratan más mujeres para cumplir el cupo de género.",
			"Se descartan sistemáticamente mujeres con buena formación y experiencia."
		],
		correctIndex: 3,
		explanation: "El vídeo explica que, en estos sistemas supuestamente objetivos, candidatas con buena formación y experiencia quedan fuera, mientras perfiles masculinos similares pasan el filtro."
	},
	{
		id: 2,
		orientation: "Informativa",
		sourceVideo: "Vídeo 2",
		prompt: "¿Qué roles ha perpetuado históricamente la industria del videojuego?",
		options: [
			"Roles que presentan a la mujer como un trofeo o una víctima pasiva.",
			"Roles equitativos y libres de prejuicios de género.",
			"Los videojuegos no perpetúan ningún rol, son solo juegos.",
			"Roles que presentan al hombre como agentes secundarios e innecesarios en la trama."
		],
		correctIndex: 0,
		explanation: "El vídeo explica (y muestra con diversos ejemplos) que a menudo los videojuegos han perpetuado roles que cosifican a la mujer."
	},
	{
		id: 3,
		orientation: "Informativa",
		sourceVideo: "Vídeo 3",
		prompt: "En el artículo A review on fairness in Machine Learning (2022). ¿Qué conclusión extrae ese estudio sobre los modelos de Deep Learning cuando minimizan el error global de predicción?",
		options: [
			"Que los modelos se vuelven completamente insesgados gracias a la optimización.",
			"Que por diseño favorecen a los grupos mayoritarios frente a los minoritarios.",
			"Que el error de predicción no tiene relación alguna con los sesgos de género.",
			"Que estos modelos solo pueden entrenarse con datos escritos en inglés."
		],
		correctIndex: 1,
		explanation: "El vídeo recoge textualmente que los objetivos algorítmicos, “al minimizar el error global de predicción, favorecen por diseño a los grupos mayoritarios sobre los minoritarios”."
	},
	{
		id: 4,
		orientation: "Informativa",
		sourceVideo: "Vídeo 4",
		prompt: "Se describe varios efectos negativos que producen ciertos algoritmos. ¿Cuáles de las siguientes consecuencias enumera de forma explícita?",
		options: [
			"Facilitan la participación equitativa de todas las personas en redes sociales.",
			"Replican roles de los años 50, amplifican discursos de odio y borran la voz de las mujeres.",
			"Borran únicamente la voz de los hombres en las plataformas digitales.",
			"Impiden cualquier tipo de interacción entre personas de distinto género."
		],
		correctIndex: 1,
		explanation: "La enumeración es directa en el vídeo: “Mientras unos algoritmos replican roles de los años 50, otros amplifican discursos de odio y algunos directamente borran la voz de las mujeres”."
	},
	{
		id: 5,
		orientation: "Motivadora",
		sourceVideo: "Vídeo 1",
		prompt: "¿Qué debes hacer con los algoritmos?",
		options: [
			"Confiar ciegamente en ellos, la máquina hace las cosas mejor que yo.",
			"Auditarlos constantemente, y ajustar los modelos cuando se detectan penalizaciones sistemáticas.",
			"Dejarlos tal y como están, pero verificar las salidas manualmente por si se cuela alguna que parezca injusta.",
			"Ejecutarlos muchas veces para darles la oportunidad de pensárselo mejor y darse cuenta del sesgo."
		],
		correctIndex: 1,
		explanation: "El vídeo explica la importancia de auditar los modelos para poder detectar sesgos y ajustar los modelos."
	},
	{
		id: 6,
		orientation: "Motivadora",
		sourceVideo: "Vídeo 2",
		prompt: "¿Qué harías si te piden diseñar un dataset para entrenar un modelo para usar en videojuegos?",
		options: [
			"Solo tener en cuenta los datos de hombres cis heteros blancos.",
			"Recopilar todos los datos que encuentre sin criterio alguno.",
			"Intentar detectar y eliminar o reducir sesgos en el diseño.",
			"Confiar en datasets similares que encuentre en línea."
		],
		correctIndex: 2,
		explanation: "El vídeo explica que hay muchas formas de eliminar sesgos, desde el diseño de lógica de juego hasta la creación de datasets para IA."
	},
	{
		id: 7,
		orientation: "Motivadora",
		sourceVideo: "Vídeo 3",
		prompt: "Un vídeo recomienda actuar incluso cuando no se puede eliminar por completo una injusticia en un modelo. ¿Qué acción concreta propone como fundamental a corto plazo?",
		options: [
			"Sustituir el modelo por una regresión lineal simple que no contenga sesgos.",
			"Cambiar el lenguaje de programación a uno más moderno.",
			"Desconectar el modelo inmediatamente para no causar más daño.",
			"Documentar las injusticias detectadas, en favor de la transparencia y la responsabilidad."
		],
		correctIndex: 3,
		explanation: "El vídeo señala: “documenta las injusticias que detectes en tus modelos, aunque no puedas eliminarlas del todo. La transparencia en las decisiones automatizadas es fundamental para la confianza y la responsabilidad”."
	},
	{
		id: 8,
		orientation: "Motivadora",
		sourceVideo: "Vídeo 4",
		prompt: "“Tú que diseñas arquitecturas, tú que entrenas modelos, tú que escribes cada línea, tienes el poder de cambiar esto”. ¿A qué te está llamando directamente ese mensaje?",
		options: [
			"A esperar a que las plataformas digitales corrijan los sesgos por sí solas.",
			"A delegar toda la responsabilidad en los equipos de ética de las empresas.",
			"A usar tu capacidad técnica para transformar unos algoritmos que hoy replican roles anticuados, odio o silencian voces.",
			"A abandonar el proyecto si detectas cualquier tipo de sesgo."
		],
		correctIndex: 2,
		explanation: "La frase aparece justo después de describir que algunos algoritmos “replican roles de los años 50, otros amplifican discursos de odio y algunos directamente borran la voz de las mujeres”."
	}
];
const quiz = {
	bankNote: bankNote,
	categories: categories,
	questions: questions
};

const deepeningSections = [
	{
		id: "4",
		title: "Educación de calidad",
		items: [
			{
				title: "Educación – Desarrollo Sostenible (Naciones Unidas)",
				url: "https://www.un.org/sustainabledevelopment/es/education/",
				difficulty: "Introductorio",
				time: "8 minutos",
				summary: "Página oficial de la ONU que explica qué es el ODS 4, sus metas principales, los avances logrados y los desafíos pendientes (84 millones de niños sin escolarizar en 2030, 300 millones sin competencias básicas). Incluye infografías y datos actualizados."
			},
			{
				title: "ODS 4 – Agenda 2030 América Latina y el Caribe (CEPAL)",
				url: "https://agenda2030lac.org/es/ods/4-educacion-de-calidad",
				difficulty: "Divulgación tecnológica",
				time: "10 minutos",
				summary: "Análisis regional del ODS 4 con enfoque en los desafíos de América Latina y el Caribe: deserción escolar, formación docente, brechas de género y oportunidades de la revolución digital en educación."
			},
			{
				title: "Informe GEM 2023: Tecnología en la educación – UNESCO",
				url: "https://www.unesco.org/gem-report/sites/default/files/medias/fichiers/2023/07/2023reportflyer_SP.pdf",
				difficulty: "Divulgación tecnológica",
				time: "12 minutos",
				summary: "Resumen del informe de seguimiento mundial de la educación de la UNESCO, centrado en el papel de la tecnología digital en el aula. Analiza tanto sus beneficios (acceso a recursos, aprendizaje personalizado) como sus riesgos (vigilancia de datos, brechas digitales, falta de formación docente)."
			},
			{
				title: "Brecha digital en educación y PISA 2025 – Millcayac/Redalyc",
				url: "https://www.redalyc.org/journal/5258/525881400008/html/",
				difficulty: "Documento técnico",
				time: "20 minutos",
				summary: "Artículo académico que analiza cómo la introducción del pensamiento computacional en PISA 2025 puede profundizar las desigualdades educativas entre países con distinto acceso digital. Propone medidas de inversión e infraestructura para reducir estas brechas."
			}
		]
	},
	{
		id: "5",
		title: "Igualdad de género",
		subtopics: [
			{
				title: "Subtema 1: Sesgos de género en IA y selección de personal",
				items: [
					{
						title: "Cómo la inteligencia artificial refuerza los sesgos de género y qué podemos hacer al respecto (ONU Mujeres)",
						url: "https://www.unwomen.org/es/noticias/entrevista/2025/02/como-la-inteligencia-artificial-refuerza-los-sesgos-de-genero-y-que-podemos-hacer-al-respecto",
						difficulty: "Introductorio",
						time: "12 minutos",
						summary: "Entrevista de ONU Mujeres que explica, con ejemplos claros, cómo los sistemas de IA pueden amplificar desigualdades de género en decisiones de contratación, crédito o justicia si se entrenan con datos históricos sesgados, y propone recomendaciones para diseñar IA ética e inclusiva."
					},
					{
						title: "Inteligencia artificial con sesgos reales: nuevos retos para la igualdad de género en América Latina y el Caribe (PNUD)",
						url: "https://www.undp.org/es/latin-america/blog/inteligencia-artificial-con-sesgos-reales-nuevos-retos-para-la-igualdad-de-genero-en-america-latina-y-el-caribe",
						difficulty: "Divulgación tecnológica",
						time: "12 minutos",
						summary: "Artículo del PNUD que analiza cómo la IA se usa ya en becas, subsidios y servicios sociales en la región, y cómo los sesgos de género en los datos pueden excluir a mujeres pobres, indígenas o migrantes, convirtiéndose en un problema de desarrollo y de confianza institucional."
					},
					{
						title: "Inteligencia artificial, género y trabajo (Consejo Andaluz de Relaciones Laborales)",
						url: "https://www.derechosdigitales.gob.es/es/novedades/inteligencia-artificial-genero-y-trabajo",
						difficulty: "Documento técnico",
						time: "35 minutos",
						summary: "Estudio jurídico que describe cómo algoritmos de evaluación del rendimiento, asignación de tareas o control horario pueden deshumanizar relaciones laborales y perjudicar más a las mujeres, y plantea la necesidad de supervisión humana, auditorías algorítmicas y perspectiva de género en la gestión del trabajo digital."
					},
					{
						title: "El uso de la IA en la gestión de personas exige nuevas garantías para evitar sesgos de género (Garrigues)",
						url: "https://bloglaboral.garrigues.com/el-uso-de-la-ia-en-la-gestion-de-personas-exige-nuevas-garantias-para-evitar-sesgos-de-genero",
						difficulty: "Divulgación tecnológica",
						time: "10 minutos",
						summary: "Artículo que resume los riesgos de usar IA en selección, promoción y salarios cuando los modelos aprenden de historiales laborales discriminatorios, y explica qué obligaciones impone el marco europeo y español para auditar estos sistemas y proteger la igualdad."
					},
					{
						title: "Examining potential gender bias in automated-job alerts in the Spanish market (PLOS ONE)",
						url: "https://journals.plos.org/plosone/article/file?type=printable&id=10.1371%2Fjournal.pone.0260409",
						difficulty: "Documento técnico",
						time: "40 minutos",
						summary: "Artículo académico de la Universidad de Deusto que analiza más de 3.400 ofertas generadas automáticamente por InfoJobs para detectar posibles sesgos de género en alertas de empleo, describiendo la metodología de correspondencia experimental y discutiendo implicaciones para plataformas digitales de empleo."
					}
				]
			},
			{
				title: "Subtema 2: Brecha de género en la industria del videojuego y STEM digital",
				items: [
					{
						title: "Los videojuegos: un mundo de roles, estereotipos y prejuicios (ULPGC)",
						url: "https://eldigital.ulpgc.es/noticia/2020/02/17/los-videojuegos-un-mundo-de-roles-estereotipos-y-prejuicios",
						difficulty: "Introductorio",
						time: "8 minutos",
						summary: "Reportaje que presenta el estudio “Género, gamers y videojuegos” y muestra cómo las jugadoras sufren comportamientos sexistas, roles cosificadores y discriminación en el sector, pero también oportunidades para transformar estas narrativas desde el diseño de juegos."
					},
					{
						title: "Videojuegos y socialización diferencial de género: preferencias y estereotipos en alumnado de primaria (Universidad de Vigo)",
						url: "https://revistas.uvigo.es/index.php/ijmc/article/download/3895/3280/8110",
						difficulty: "Documento técnico",
						time: "35 minutos",
						summary: "Investigación con alumnado de 11–12 años que analiza qué videojuegos consumen, cómo se distribuyen por género y qué estereotipos transmiten, vinculando las preferencias de juego con la socialización sexista y la necesidad de una mirada coeducativa sobre los contenidos digitales."
					},
					{
						title: "Women in Video Games: An Analysis of the Biased Representation in Spanish Mainstream Titles",
						url: "https://d-nb.info/135466275X/34",
						difficulty: "Documento técnico",
						time: "45 minutos",
						summary: "Estudio de carácter cuantitativo y cualitativo sobre 313 personajes en videojuegos mainstream en España, que muestra la infrarrepresentación de mujeres como protagonistas, su relegación a roles secundarios y la persistencia de cuerpos irreales y actitudes sumisas."
					},
					{
						title: "The Representation of Women in Video Games: A Critical Analysis of Gender Stereotypes",
						url: "https://researchcorridor.org/index.php/jgpst/article/view/335",
						difficulty: "Documento técnico",
						time: "40 minutos",
						summary: "Artículo en inglés que revisa la evolución de los personajes femeninos desde figuras hipersexualizadas a representaciones más diversas, y analiza cómo estas imágenes influyen en la construcción de la identidad y en la percepción de las mujeres jugadoras."
					},
					{
						title: "Girls’ and women’s education in STEM (UNESCO)",
						url: "https://www.unesco.org/en/gender-equality/education/stem",
						difficulty: "Divulgación tecnológica",
						time: "10 minutos",
						summary: "Síntesis de la brecha de género en estudios STEM: solo el 35% de graduados son mujeres, lo que reduce su presencia en carreras de futuro como la informática y el diseño de videojuegos, e incluye recomendaciones de política educativa para revertir esta situación."
					}
				]
			}
		]
	},
	{
		id: "7",
		title: "Energía asequible y no contaminante",
		items: [
			{
				title: "Energía – Desarrollo Sostenible (Naciones Unidas)",
				url: "https://www.un.org/sustainabledevelopment/es/energy/",
				difficulty: "Introductorio",
				time: "8 minutos",
				summary: "Página oficial de la ONU sobre el ODS 7: metas, datos clave y acciones ciudadanas. Explica la relación entre la dependencia de combustibles fósiles, el cambio climático y la necesidad de energías renovables, en un lenguaje accesible para todo público."
			},
			{
				title: "Los centros de datos ante el reto energético que definirá el futuro de la IA",
				url: "https://www.revistacloudcomputing.com/2026/02/los-centros-de-datos-ante-el-reto-energetico-que-definira-el-futuro-de-la-ia/#mas-potencia-mas-densidad-y-menos-margen-de-error",
				difficulty: "Divulgación tecnológica",
				time: "10 minutos",
				summary: "Artículo que explica por qué los centros de datos especializados en IA están disparando su consumo energético (415 TWh en 2024, proyectados a 945 TWh en 2030 según la IEA) y qué estrategias sostenibles están adoptando las grandes tecnológicas."
			},
			{
				title: "Criptomonedas, la huella de carbono del dinero digital – National Geographic",
				url: "https://www.nationalgeographic.com.es/ciencia/criptomonedas-huella-carbono-dinero-digital_16761",
				difficulty: "Divulgación tecnológica",
				time: "10 minutos",
				summary: "Artículo de National Geographic que explica el mecanismo de minería Proof of Work, su impacto en emisiones de CO₂ (hasta 130 millones de toneladas métricas estimadas) y las regulaciones que algunos países ya están aplicando."
			},
			{
				title: "Impacto ambiental de blockchain y las criptomonedas",
				url: "https://dynamicmarkets.substack.com/p/impacto-ambiental-de-blockchain-y",
				difficulty: "Documento técnico",
				time: "25 minutos",
				summary: "Análisis técnico detallado basado en datos del Cambridge Centre for Alternative Finance (CCAF). Compara el consumo energético de Bitcoin (PoW) con Ethereum tras su migración a Proof of Stake (reducción del 99,95%), estima la huella de carbono según el mix energético geográfico de los mineros y discute las limitaciones metodológicas de las estimaciones actuales."
			}
		]
	},
	{
		id: "8",
		title: "Trabajo decente y crecimiento económico",
		items: [
			{
				title: "Crecimiento económico y trabajo decente – ODS 8 (Naciones Unidas)",
				url: "https://www.un.org/sustainabledevelopment/economic-growth/",
				difficulty: "Introductorio",
				time: "8 minutos",
				summary: "Página oficial de la ONU sobre el ODS 8, con datos actualizados sobre empleo informal, crecimiento del PIB per cápita y prioridades para promover trabajo decente, incluyendo la transición justa en un contexto de automatización y digitalización."
			},
			{
				title: "ODS 8: Trabajo decente y crecimiento económico (Pacto Mundial ONU España)",
				url: "https://www.pactomundial.org/ods/8-trabajo-decente-y-crecimiento-economico/",
				difficulty: "Introductorio",
				time: "12 minutos",
				summary: "Ficha divulgativa que explica metas y cifras clave del ODS 8 (paro juvenil, informalidad, brecha salarial) y propone líneas de acción para empresas, como plataformas de monitoreo, innovación tecnológica responsable y apoyo al emprendimiento inclusivo."
			},
			{
				title: "El trabajo a través de las plataformas digitales laborales en España (SEPE – Cuadernos de Mercado de Trabajo)",
				url: "https://www.sepe.es/dam/jcr%3A092eebdc-0c83-49c8-a094-099803715dba/RCMT-9.pdf",
				difficulty: "Documento técnico",
				time: "25 minutos",
				summary: "Análisis de las plataformas digitales laborales en España que describe perfiles de trabajadores, condiciones de empleo y déficits de trabajo decente (ingresos bajos, horarios imprevisibles, falta de protección social), muy útil para conectar ODS 8 con economía de plataformas."
			},
			{
				title: "Marcos de derechos para el trabajo decente en plataformas: insumos para el debate en el contexto de la 113ª Conferencia Internacional del Trabajo (Derechos Digitales)",
				url: "https://www.derechosdigitales.org/recursos/marcos-de-derechos-para-el-trabajo-decente-en-plataformas-insumos-para-el-debate-en-el-contexto-de-la-113a-conferencia-internacional-del-trabajo/",
				difficulty: "Divulgación tecnológica",
				time: "15 minutos",
				summary: "Nota técnica ligada a la 113.ª Conferencia Internacional del Trabajo que propone estándares internacionales para garantizar transparencia algorítmica, derechos laborales y protección social en plataformas digitales, ofreciendo un buen puente entre regulación laboral y diseño de sistemas digitales."
			}
		]
	},
	{
		id: "9",
		title: "Industria, innovación e infraestructuras",
		items: [
			{
				title: "Infraestructura – Desarrollo Sostenible (Naciones Unidas)",
				url: "https://www.un.org/sustainabledevelopment/es/infrastructure/",
				difficulty: "Introductorio",
				time: "8 minutos",
				summary: "Página oficial de la ONU sobre el ODS 9: metas, datos clave (más de 4.000 millones de personas sin acceso a internet, industria como motor del 80% del PIB global) y qué medidas pueden tomar ciudadanos, empresas y gobiernos."
			},
			{
				title: "Así es como la inteligencia artificial anticipa desastres naturales – Hablando en Vidrio",
				url: "https://hablandoenvidrio.com/inteligencia-artificial-deteccion-desastres-naturales/",
				difficulty: "Divulgación tecnológica",
				time: "10 minutos",
				summary: "Artículo que recorre casos reales de IA aplicada a la detección temprana de inundaciones (Google Flood Forecasting, con 7 días de antelación), terremotos y huracanes."
			},
			{
				title: "Algoritmos verdes: la gran oportunidad de España en el sector tecnológico – El Independiente",
				url: "https://www.elindependiente.com/futuro/inteligencia-artificial/2024/02/06/algoritmos-verdes-la-gran-oportunidad-de-espana-en-el-sector-tecnologico/",
				difficulty: "Divulgación tecnológica",
				time: "12 minutos",
				summary: "Reportaje que explica en detalle qué son los algoritmos verdes, por qué las TIC podrían consumir el 20% de la energía mundial en 2030 y qué papel juega el Programa Nacional de Algoritmos Verdes de España."
			},
			{
				title: "Mejores prácticas para el desarrollo de software verde utilizando IA – European Public & Social Innovation Review",
				url: "https://epsir.net/index.php/epsir/article/view/436/219",
				difficulty: "Documento técnico",
				time: "45 minutos",
				summary: "Artículo académico (2024) que analiza la relación entre ingeniería de software, sostenibilidad e inteligencia artificial, evaluando el consumo energético de distintos lenguajes de programación. El estudio concluye que lenguajes como Java pueden ser más eficientes que Python y propone metodologías para medir y reducir la huella de carbono del software."
			}
		]
	},
	{
		id: "11",
		title: "Ciudades y comunidades sostenibles",
		items: [
			{
				title: "Ciudades – Desarrollo Sostenible (Naciones Unidas)",
				url: "https://www.un.org/sustainabledevelopment/es/cities/",
				difficulty: "Introductorio",
				time: "8 minutos",
				summary: "Página oficial de la ONU sobre el ODS 11: datos clave (en 2022, solo la mitad de la población urbana tenía acceso al transporte público; las ciudades generan el 70% de las emisiones de carbono) y sus metas principales hasta 2030."
			},
			{
				title: "ODS 11: Ciudades y comunidades sostenibles – Pacto Mundial ONU",
				url: "https://www.pactomundial.org/ods/11-ciudades-y-comunidades-sostenibles/",
				difficulty: "Introductorio",
				time: "10 minutos",
				summary: "Explicación del ODS 11 con foco en el rol de empresas y ciudadanos. Aborda la contaminación del aire (24.000 muertes anuales en España según datos de 2023), la movilidad sostenible, los sistemas IoT para edificios inteligentes y la gestión de residuos."
			},
			{
				title: "Cloud e IoT en Ciudades Inteligentes: El Futuro de la Gestión Urbana – Cátedra T-Systems × URV",
				url: "https://cloudlab.urv.cat/catedracloud/2025/04/02/cloud-e-iot-en-ciudades-inteligentes-el-futuro-de-la-gestion-urbana/",
				difficulty: "Divulgación tecnológica",
				time: "12 minutos",
				summary: "Artículo de 2025 que explica cómo ciudades como Santander (con 20.000 sensores) y Las Rozas integran IoT, edge computing y cloud para gestionar semáforos adaptativos, monitorizar la calidad del aire y optimizar el alumbrado público."
			},
			{
				title: "Tecnología para una movilidad inteligente – Revista Tráfico y Seguridad Vial (DGT)",
				url: "https://revista.dgt.es/es/reportajes/2024/12DICIEMBRE/1712-N272-ITS_MovilidadInteligente.shtml",
				difficulty: "Documento técnico",
				time: "20 minutos",
				summary: "Informe técnico de la DGT (diciembre 2024) sobre los Sistemas Inteligentes de Transporte (ITS) en España: espiras magnéticas, sensores de velocidad, radares de tramo, sistemas LPR, paneles de mensaje variable y Smart Routing."
			}
		]
	},
	{
		id: "12",
		title: "Producción y consumo responsable",
		items: [
			{
				title: "Producción y Consumo Responsables (Naciones Unidas)",
				url: "https://www.un.org/es/impacto-acad%C3%A9mico/page/producci%C3%B3n-y-consumo-responsables",
				difficulty: "Introductorio",
				time: "10 minutos",
				summary: "Introducción general al ODS 12 que explica el objetivo de “hacer más con menos” reduciendo el uso de recursos, la contaminación y los residuos a lo largo del ciclo de vida de productos y servicios, con énfasis en el papel de empresas, consumidores y administraciones."
			},
			{
				title: "ODS 12: Producción y Consumo Responsables (Cáritas Española – píldora formativa)",
				url: "https://www.caritas.es/main-files/uploads/sites/21/2021/03/P%C3%ADldora-12-ODS-12-Producci%C3%B3n-y-Consumo-Responsables.pdf",
				difficulty: "Introductorio",
				time: "20 minutos",
				summary: "Material didáctico que resume las metas del ODS 12 y pone el foco en el desperdicio alimentario y en los desechos electrónicos (50 millones de toneladas anuales), relacionando el consumo tecnológico con la generación de residuos."
			},
			{
				title: "Qué es la basura tecnológica y cómo reciclarla (Iberdrola)",
				url: "https://www.iberdrola.com/sostenibilidad/que-es-basura-tecnologica",
				difficulty: "Divulgación tecnológica",
				time: "10 minutos",
				summary: "Artículo divulgativo sobre e-waste que explica qué son los residuos tecnológicos, por qué superan las 50 millones de toneladas anuales y cómo el ODS 12 exige una gestión ecológicamente racional de estos residuos, con ejemplos de buenas prácticas y circuitos de reciclaje."
			},
			{
				title: "Estrategias y políticas para la eliminación o reutilización adecuadas de residuos generados por las telecomunicaciones/TIC (UIT)",
				url: "https://www.itu.int/dms_pub/itu-d/opb/stg/D-STG-SG02.08.1-2017-PDF-S.pdf",
				difficulty: "Documento técnico",
				time: "45 minutos",
				summary: "Informe técnico de la UIT que recoge requisitos mínimos y guías operativas para la gestión ambientalmente racional de residuos electrónicos procedentes de TIC, incluyendo marcos de política, responsabilidades de los gestores y etapas de la cadena RAEE."
			}
		]
	},
	{
		id: "13",
		title: "Acción por el clima",
		items: [
			{
				title: "Cambio climático – Acción por el clima (Naciones Unidas)",
				url: "https://www.un.org/sustainabledevelopment/es/climate-action/",
				difficulty: "Introductorio",
				time: "10 minutos",
				summary: "Página oficial del ODS 13 que presenta impactos del cambio climático (aumento de temperatura, eventos extremos, afectación a los más vulnerables) y explica el Acuerdo de París y la necesidad de reducir rápidamente las emisiones de gases de efecto invernadero."
			},
			{
				title: "ODS 13: Acción por el clima (Pacto Mundial ONU España)",
				url: "https://www.pactomundial.org/ods/13-accion-por-el-clima/",
				difficulty: "Introductorio",
				time: "12 minutos",
				summary: "Ficha que contextualiza el cambio climático en España (olas de calor, millones de personas afectadas) y detalla cómo empresas y organizaciones pueden integrar la acción climática en sus estrategias, enlazando ODS 13 con otros objetivos."
			},
			{
				title: "El sector TIC ayuda en la lucha contra el cambio climático (UNFCCC)",
				url: "https://unfccc.int/es/news/el-sector-tic-ayuda-en-la-lucha-contra-el-cambio-clim%C3%A1tico",
				difficulty: "Divulgación tecnológica",
				time: "12 minutos",
				summary: "Artículo de ONU Cambio Climático que muestra cómo centros de datos y grandes empresas TIC pueden pasar de ser responsables de alrededor del 2% de las emisiones globales a convertirse en palanca para reducir un 20% de las emisiones mundiales mediante soluciones digitales eficientes."
			},
			{
				title: "Uso de las TIC para hacer frente al cambio climático (UIT)",
				url: "https://www.itu.int/dms_pub/itu-t/oth/0b/11/t0b1100000a3301pdfs.pdf",
				difficulty: "Documento técnico",
				time: "45 minutos",
				summary: "Informe de la UIT que analiza cómo las TIC pueden apoyar los tres pilares del Plan de Acción de Bali (adaptación, mitigación y transferencia tecnológica), cuantificando ahorros potenciales de CO₂ mediante soluciones smart y proponiendo políticas para integrar TIC en estrategias climáticas nacionales."
			}
		]
	},
	{
		id: "16",
		title: "Paz, justicia e instituciones sólidas",
		items: [
			{
				title: "Paz, justicia e instituciones sólidas – Desarrollo Sostenible (Naciones Unidas)",
				url: "https://www.un.org/sustainabledevelopment/es/peace-justice/",
				difficulty: "Introductorio",
				time: "8 minutos",
				summary: "Página oficial de la ONU que explica qué es el ODS 16, sus metas principales sobre el estado de derecho, acceso a la justicia, reducción de la corrupción y construcción de instituciones responsables y transparentes. Incluye datos clave sobre violencia, delincuencia organizada y protección de derechos humanos."
			},
			{
				title: "Corrupción y fraude elevan su impacto en la economía global (OCDE 2026)",
				url: "https://www.emol.com/noticias/Internacional/2026/03/26/1195394/cifras-corrupcion-fraude-ocde-informe.html",
				difficulty: "Análisis técnico",
				time: "15 minutos",
				summary: "Informe actualizado (marzo 2026) sobre lucha contra la corrupción e integridad que revela que la corrupción, el fraude y el crimen organizado cuestan entre 800.000 millones y 2 billones de dólares anuales, y destaca la brecha entre normas anticorrupción y su aplicación efectiva."
			},
			{
				title: "SATAN/SALER – El algoritmo que localiza corruptos (Universitat Politècnica de València)",
				url: "https://valenciaplaza.com/satan-el-nuevo-sistema-de-alertas-de-la-generalitat-para-evitar-casos-de-corrupcion",
				difficulty: "Documento técnico",
				time: "18 minutos",
				summary: "Análisis técnico del desarrollo del algoritmo por parte del profesor César Ferri y su equipo. Explica cómo funciona el cruce de datos del Registro Mercantil y de la Propiedad para generar alertas sospechosas y detalla el proceso de integración con el sistema de alertas de subvenciones y contratos."
			},
			{
				title: "Voto electrónico en el mundo – Implementación y prohibiciones (Gobierno Vasco)",
				url: "https://www.euskadi.eus/informacion/voto-electronico-voto-electronico-en-el-mundo/web01-a2haukon/es/",
				difficulty: "Introductorio",
				time: "8 minutos",
				summary: "Página oficial sobre voto electrónico global. Documenta que solo 7 de 75 democracias puras tienen i-voting implementado. Países como Alemania, Reino Unido e Irlanda lo prohíben por problemas de seguridad, y analiza casos de éxito como Bélgica, Brasil, Estonia y Emiratos Árabes Unidos."
			}
		]
	}
];

const localeModules = /* #__PURE__ */ Object.assign({"./content/locales/en.json": __vite_glob_0_0,"./content/locales/es.json": __vite_glob_0_1});

const locales = Object.entries(localeModules).reduce((accumulator, [path, module]) => {
  const match = path.match(/\/([^/]+)\.json$/);

  if (!match) {
    return accumulator;
  }

  accumulator[match[1]] = module.default ?? module;
  return accumulator;
}, {});

const discoveredLanguages = Object.keys(locales);

const supportedLanguages = [
  ...configuredLanguages.filter((lang) => lang in locales),
  ...discoveredLanguages.filter((lang) => !configuredLanguages.includes(lang)),
];

const englishTranslations = {
  'Educación de calidad': 'Quality education',
  'Igualdad de género': 'Gender equality',
  'Energía asequible y no contaminante': 'Affordable and clean energy',
  'Trabajo decente y crecimiento económico': 'Decent work and economic growth',
  'Industria, innovación e infraestructuras': 'Industry, innovation and infrastructure',
  'Ciudades y comunidades sostenibles': 'Sustainable cities and communities',
  'Producción y consumo responsable': 'Responsible consumption and production',
  'Acción por el clima': 'Climate action',
  'Paz, justicia e instituciones sólidas': 'Peace, justice and strong institutions',
  'Paz, justicia e instituciones solidas I': 'Peace, justice and strong institutions I',
  'Paz, Justicia e Instituciones Sólidas III': 'Peace, Justice and Strong Institutions III',

  'Vídeo 1': 'Video 1',
  'Vídeo 2': 'Video 2',
  'Vídeo 3': 'Video 3',
  'Vídeo 4': 'Video 4',
  'Vídeo 5': 'Video 5',
  'Vídeo 7': 'Video 7',
  'Vídeo 8': 'Video 8',
  'español, inglés': 'Spanish, English',
  'español, inglés, alemán': 'Spanish, English, German',
  'español, inglés, euskera': 'Spanish, English, Basque',
  'español, inglés, euskera, rumano': 'Spanish, English, Basque, Romanian',
  'Mixto': 'Mixed',
  'Informativo': 'Informative',
  'Motivador': 'Motivational',
  'No indicado': 'Not specified',
  'Desconocido (canal: GP-ODS-Rivne)': 'Unknown (channel: GP-ODS-Rivne)',
  'equipo Sigma': 'Sigma team',
  'equipo 061620223038': '061620223038 team',

  'PI21-P3. Aprende y Enseña/D/Eqvestris': 'PI21-P3. Learn and Teach/D/Eqvestris',
  '4. Educación de calidad': '4. Quality education',
  'PI21-P3. Nueva docencia online/D/Libyca': 'PI21-P3. New online teaching/D/Libyca',
  'Educación con la tecnología': 'Education with technology',
  'Contratación justa: reescribiendo los algoritmos que discriminan a las mujeres':
    'Fair hiring: rewriting the algorithms that discriminate against women',
  'Infografía sobre contratación justa': 'Infographic about fair hiring',
  'Level Up: Igualdad de Género en el Diseño de Videojuegos':
    'Level Up: Gender Equality in Video Game Design',
  'Infografía sobre Level Up': 'Infographic about Level Up',
  'Sesgos algorítmicos': 'Algorithmic bias',
  'Redes sociales y estereotipos de género: un reto para la igualdad':
    'Social media and gender stereotypes: a challenge for equality',
  'PI22-P3. Criptomonedas, edición especial/D/Yaxkin':
    'PI22-P3. Cryptocurrencies, special edition/D/Yaxkin',
  'La consecuencia de la generación masiva de datos': 'The consequence of massive data generation',
  'Objetivos de Desarrollo Sostenible 7: Energía Asequible y Sostenible':
    'Sustainable Development Goal 7: Affordable and sustainable energy',
  'Criptomonedas y su impacto medioambiental': 'Cryptocurrencies and their environmental impact',
  'El derecho a un trabajo digno': 'The right to decent work',
  'Condiciones de trabajo y deslocalización en el sector de las TIC':
    'Working conditions and offshoring in the ICT sector',
  'Coronavirus y teletrabajo': 'Coronavirus and remote work',
  'Revolución Industrial 4.0: desde la máquina de vapor hacia el futuro':
    'Industrial Revolution 4.0: from the steam engine to the future',
  '¿Debería asustarnos el futuro que nos espera tras acabar nuestra formación?':
    'Should we fear the future awaiting us after our training?',
  'Promover la industrialización sostenible - Eficiencia Industrial':
    'Promoting sustainable industrialization - Industrial efficiency',
  'El pulso de las ciudades sostenibles': 'The pulse of sustainable cities',
  'Algoritmos Verdes: La Clave para una Industria Sostenible - ODS 9':
    'Green Algorithms: The Key to Sustainable Industry - SDG 9',
  'Alerta Temprana – Evitando Desastres con Tecnología':
    'Early Warning - Preventing Disasters with Technology',
  '¿Cómo debemos combatir la huella de carbono?': 'How should we fight the carbon footprint?',
  'Menos teslas y más buses': 'Fewer Teslas and more buses',
  'Ciudad sostenible, tráfico inteligente': 'Sustainable city, smart traffic',
  'Ciudades y comunidades sostenibles III': 'Sustainable cities and communities III',
  'Cómo proteger el mundo en 5 segundos': 'How to protect the world in 5 seconds',
  'PI21-P3. Puedes cambiar las cosas/D/Augusta': 'PI21-P3. You can change things/D/Augusta',
  'Reciclaje de teléfonos móviles': 'Mobile phone recycling',
  'Apaga el equipo': 'Turn off the computer',
  'Informática: parte del problema climático pero también la solución':
    'Computer science: part of the climate problem, but also the solution',
  'Tecnología por el clima': 'Technology for the climate',
  'Domótica: acciones por el clima': 'Home automation: climate action',
  'Cambio Climático': 'Climate change',
  'Informáticos por la sociedad': 'Computer scientists for society',
  'Informática vs Corrupción': 'Computer science vs corruption',

  'Obra original: Rubén Escobedo, Ángela Saénz, Abdul Rehman y Víctor Manuel López (Equipo Bellatrix). Obra derivada: Héctor Solar, José Antonio Ortega y Juan Carlos Castillo (Equipo Eqvestris).':
    'Original work: Rubén Escobedo, Ángela Saénz, Abdul Rehman and Víctor Manuel López (Bellatrix Team). Derivative work: Héctor Solar, José Antonio Ortega and Juan Carlos Castillo (Eqvestris Team).',
  'Iñigo Berganza, Gonzalo Galdós y Bryan Sanchéz':
    'Iñigo Berganza, Gonzalo Galdós and Bryan Sanchéz',
  'Obra original: Álvaro Bayo, Juan Pérez, Javier Pérez (equipo Betelgeuse). Obra derivada: Jorge Ismael López, Francisco Javier Olavarrieta, Álvaro Romero (equipo Libyca).':
    'Original work: Álvaro Bayo, Juan Pérez, Javier Pérez (Betelgeuse team). Derivative work: Jorge Ismael López, Francisco Javier Olavarrieta, Álvaro Romero (Libyca team).',
  'Adrian Molina, Ion Olaizola y Mikel Iturria': 'Adrian Molina, Ion Olaizola and Mikel Iturria',
  'Obra original: Layo Cruz, Pablo Castro, Beatriz Sánchez y Juan Pérez (equipo Ío). Obra derivada: Alberto Urquía, Héctor Serna, Mario Cundín (equipo Yaxkin).':
    'Original work: Layo Cruz, Pablo Castro, Beatriz Sánchez and Juan Pérez (Ío team). Derivative work: Alberto Urquía, Héctor Serna, Mario Cundín (Yaxkin team).',
  'Obra original: Unai Del Rio, Alexandra Aleina Pelipian, Kevin Joel Yovera Carlos. Obra derivada: Imanol Maraña, Ivan Garoña, Ernesto Morales.':
    'Original work: Unai Del Rio, Alexandra Aleina Pelipian, Kevin Joel Yovera Carlos. Derivative work: Imanol Maraña, Ivan Garoña, Ernesto Morales.',
  'Álvaro Ramos, Alejandro Pérez, Endika Sánchez': 'Álvaro Ramos, Alejandro Pérez, Endika Sánchez',
  'Kevin Jin, Unai Pinedo y Leire Cartagena': 'Kevin Jin, Unai Pinedo and Leire Cartagena',
  'Pablo García, Judith Antelo, Ian Fernandez y Yeray Palma':
    'Pablo García, Judith Antelo, Ian Fernandez and Yeray Palma',
  'Abdurrahim Ali Ali, Jon Apaolaza Larraya y Anderson Gil Zuluaga':
    'Abdurrahim Ali Ali, Jon Apaolaza Larraya and Anderson Gil Zuluaga',
  'David Cuenca, Asier Septién, Amanda Sin y Xabier Gutiérrez':
    'David Cuenca, Asier Septién, Amanda Sin and Xabier Gutiérrez',
  'Camilo Betancourth, Ander Serrano, Julen Casajus, David Murguialday':
    'Camilo Betancourth, Ander Serrano, Julen Casajus, David Murguialday',
  'María Stan, Víctor Gómez, Yago Molina, Diego Álvarez, Koldo Intxausti, Mikel León, Daria Paslavska y Ander Aldanas':
    'María Stan, Víctor Gómez, Yago Molina, Diego Álvarez, Koldo Intxausti, Mikel León, Daria Paslavska and Ander Aldanas',
  'Luken Larrañaga, Unai Matas, Maddi López y Agustín Beltrán de Heredia':
    'Luken Larrañaga, Unai Matas, Maddi López and Agustín Beltrán de Heredia',
  'Teresa Cid y Abraham Casas': 'Teresa Cid and Abraham Casas',
  'Jesús Gutiérrez, Marcos Chouciño y Diego Indígoras':
    'Jesús Gutiérrez, Marcos Chouciño and Diego Indígoras',
  'Alex Rivas, Borja Gómez, Martin L. De Ipiña, Haiyong, Mikel Molina y Erik Cembreros':
    'Alex Rivas, Borja Gómez, Martin L. De Ipiña, Haiyong, Mikel Molina and Erik Cembreros',
  'Albano González y Raul Benito': 'Albano González and Raul Benito',
  'Alejandro Ruiz, Ángela Sáenz, Rubén Escobedo y Víctor Manuel López':
    'Alejandro Ruiz, Ángela Sáenz, Rubén Escobedo and Víctor Manuel López',
  'Ángel Yao, Leire Sesma, Samuel Guzmán': 'Ángel Yao, Leire Sesma, Samuel Guzmán',
  'Víctor Morga, Ricardo Calle y María Marín': 'Víctor Morga, Ricardo Calle and María Marín',
  'Ignacio Marco Pérez, Alejandro del Campo López y José Antonio Santo Argaiz':
    'Ignacio Marco Pérez, Alejandro del Campo López and José Antonio Santo Argaiz',
  'Javier Del Campo, David Dominguez y Víctor Caballero':
    'Javier Del Campo, David Dominguez and Víctor Caballero',
  'Daniel Ibáñez y Luis San Martín': 'Daniel Ibáñez and Luis San Martín',
  'Silvia Fernandez, Miguel Gonzalez y Paula Moreno':
    'Silvia Fernandez, Miguel Gonzalez and Paula Moreno',
  'Iván Hidalgo, Xabier Lahuerta y Jon Ander Ruiz':
    'Iván Hidalgo, Xabier Lahuerta and Jon Ander Ruiz',
  'Obra derivada: Helena Fajín, Julen Barrio, Aimar Miner':
    'Derivative work: Helena Fajín, Julen Barrio, Aimar Miner',
  'Adrián San Segundo, Rebeca Coentrao y Nagore Arroyo':
    'Adrián San Segundo, Rebeca Coentrao and Nagore Arroyo',
  'J. Pellejero, A. Gutierrez y C. Garraza': 'J. Pellejero, A. Gutierrez and C. Garraza',
  'Julen Galarza, Unai Salas y Jorge Iglesias': 'Julen Galarza, Unai Salas and Jorge Iglesias',

  'Introductorio': 'Introductory',
  'Divulgación tecnológica': 'Technology outreach',
  'Documento técnico': 'Technical document',
  'Análisis técnico': 'Technical analysis',
  '8 minutos': '8 minutes',
  '10 minutos': '10 minutes',
  '12 minutos': '12 minutes',
  '15 minutos': '15 minutes',
  '18 minutos': '18 minutes',
  '20 minutos': '20 minutes',
  '25 minutos': '25 minutes',
  '35 minutos': '35 minutes',
  '40 minutos': '40 minutes',
  '45 minutos': '45 minutes',
  'Subtema 1: Sesgos de género en IA y selección de personal':
    'Subtopic 1: Gender bias in AI and personnel selection',
  'Subtema 2: Brecha de género en la industria del videojuego y STEM digital':
    'Subtopic 2: Gender gap in the video game industry and digital STEM',

  'Educación – Desarrollo Sostenible (Naciones Unidas)': 'Education - Sustainable Development (United Nations)',
  'ODS 4 – Agenda 2030 América Latina y el Caribe (CEPAL)':
    'SDG 4 - 2030 Agenda in Latin America and the Caribbean (ECLAC)',
  'Informe GEM 2023: Tecnología en la educación – UNESCO':
    '2023 GEM Report: Technology in education - UNESCO',
  'Brecha digital en educación y PISA 2025 – Millcayac/Redalyc':
    'Digital divide in education and PISA 2025 - Millcayac/Redalyc',
  'Cómo la inteligencia artificial refuerza los sesgos de género y qué podemos hacer al respecto (ONU Mujeres)':
    'How artificial intelligence reinforces gender bias and what we can do about it (UN Women)',
  'Inteligencia artificial con sesgos reales: nuevos retos para la igualdad de género en América Latina y el Caribe (PNUD)':
    'Artificial intelligence with real biases: new challenges for gender equality in Latin America and the Caribbean (UNDP)',
  'Inteligencia artificial, género y trabajo (Consejo Andaluz de Relaciones Laborales)':
    'Artificial intelligence, gender and work (Andalusian Council of Labor Relations)',
  'El uso de la IA en la gestión de personas exige nuevas garantías para evitar sesgos de género (Garrigues)':
    'The use of AI in people management requires new safeguards to prevent gender bias (Garrigues)',
  'Los videojuegos: un mundo de roles, estereotipos y prejuicios (ULPGC)':
    'Video games: a world of roles, stereotypes and prejudices (ULPGC)',
  'Videojuegos y socialización diferencial de género: preferencias y estereotipos en alumnado de primaria (Universidad de Vigo)':
    'Video games and differential gender socialization: preferences and stereotypes among primary school pupils (University of Vigo)',
  'Energía – Desarrollo Sostenible (Naciones Unidas)': 'Energy - Sustainable Development (United Nations)',
  'Los centros de datos ante el reto energético que definirá el futuro de la IA':
    'Data centers facing the energy challenge that will define the future of AI',
  'Criptomonedas, la huella de carbono del dinero digital – National Geographic':
    'Cryptocurrencies, the carbon footprint of digital money - National Geographic',
  'Impacto ambiental de blockchain y las criptomonedas':
    'Environmental impact of blockchain and cryptocurrencies',
  'Crecimiento económico y trabajo decente – ODS 8 (Naciones Unidas)':
    'Economic growth and decent work - SDG 8 (United Nations)',
  'ODS 8: Trabajo decente y crecimiento económico (Pacto Mundial ONU España)':
    'SDG 8: Decent work and economic growth (UN Global Compact Spain)',
  'El trabajo a través de las plataformas digitales laborales en España (SEPE – Cuadernos de Mercado de Trabajo)':
    'Work through digital labor platforms in Spain (SEPE - Labor Market Notebooks)',
  'Marcos de derechos para el trabajo decente en plataformas: insumos para el debate en el contexto de la 113ª Conferencia Internacional del Trabajo (Derechos Digitales)':
    'Rights frameworks for decent platform work: inputs for debate in the context of the 113th International Labour Conference (Derechos Digitales)',
  'Infraestructura – Desarrollo Sostenible (Naciones Unidas)':
    'Infrastructure - Sustainable Development (United Nations)',
  'Así es como la inteligencia artificial anticipa desastres naturales – Hablando en Vidrio':
    'This is how artificial intelligence anticipates natural disasters - Hablando en Vidrio',
  'Algoritmos verdes: la gran oportunidad de España en el sector tecnológico – El Independiente':
    "Green algorithms: Spain's major opportunity in the technology sector - El Independiente",
  'Mejores prácticas para el desarrollo de software verde utilizando IA – European Public & Social Innovation Review':
    'Best practices for green software development using AI - European Public & Social Innovation Review',
  'Ciudades – Desarrollo Sostenible (Naciones Unidas)': 'Cities - Sustainable Development (United Nations)',
  'ODS 11: Ciudades y comunidades sostenibles – Pacto Mundial ONU':
    'SDG 11: Sustainable cities and communities - UN Global Compact',
  'Cloud e IoT en Ciudades Inteligentes: El Futuro de la Gestión Urbana – Cátedra T-Systems × URV':
    'Cloud and IoT in Smart Cities: The Future of Urban Management - T-Systems x URV Chair',
  'Tecnología para una movilidad inteligente – Revista Tráfico y Seguridad Vial (DGT)':
    'Technology for smart mobility - Traffic and Road Safety Magazine (DGT)',
  'Producción y Consumo Responsables (Naciones Unidas)':
    'Responsible Consumption and Production (United Nations)',
  'ODS 12: Producción y Consumo Responsables (Cáritas Española – píldora formativa)':
    'SDG 12: Responsible Consumption and Production (Caritas Spain - training capsule)',
  'Qué es la basura tecnológica y cómo reciclarla (Iberdrola)':
    'What e-waste is and how to recycle it (Iberdrola)',
  'Estrategias y políticas para la eliminación o reutilización adecuadas de residuos generados por las telecomunicaciones/TIC (UIT)':
    'Strategies and policies for the proper disposal or reuse of waste generated by telecommunications/ICT (ITU)',
  'Cambio climático – Acción por el clima (Naciones Unidas)':
    'Climate change - Climate action (United Nations)',
  'ODS 13: Acción por el clima (Pacto Mundial ONU España)':
    'SDG 13: Climate action (UN Global Compact Spain)',
  'El sector TIC ayuda en la lucha contra el cambio climático (UNFCCC)':
    'The ICT sector helps in the fight against climate change (UNFCCC)',
  'Uso de las TIC para hacer frente al cambio climático (UIT)':
    'Using ICTs to address climate change (ITU)',
  'Paz, justicia e instituciones sólidas – Desarrollo Sostenible (Naciones Unidas)':
    'Peace, justice and strong institutions - Sustainable Development (United Nations)',
  'Corrupción y fraude elevan su impacto en la economía global (OCDE 2026)':
    'Corruption and fraud increase their impact on the global economy (OECD 2026)',
  'SATAN/SALER – El algoritmo que localiza corruptos (Universitat Politècnica de València)':
    'SATAN/SALER - The algorithm that detects corruption (Universitat Politècnica de València)',
  'Voto electrónico en el mundo – Implementación y prohibiciones (Gobierno Vasco)':
    'Electronic voting worldwide - Implementation and bans (Basque Government)',

  'Página oficial de la ONU que explica qué es el ODS 4, sus metas principales, los avances logrados y los desafíos pendientes (84 millones de niños sin escolarizar en 2030, 300 millones sin competencias básicas). Incluye infografías y datos actualizados.':
    'Official UN page explaining what SDG 4 is, its main targets, progress achieved and remaining challenges (84 million children out of school in 2030, 300 million lacking basic skills). Includes infographics and updated data.',
  'Análisis regional del ODS 4 con enfoque en los desafíos de América Latina y el Caribe: deserción escolar, formación docente, brechas de género y oportunidades de la revolución digital en educación.':
    'Regional analysis of SDG 4 focused on challenges in Latin America and the Caribbean: school dropout, teacher training, gender gaps and opportunities from the digital revolution in education.',
  'Resumen del informe de seguimiento mundial de la educación de la UNESCO, centrado en el papel de la tecnología digital en el aula. Analiza tanto sus beneficios (acceso a recursos, aprendizaje personalizado) como sus riesgos (vigilancia de datos, brechas digitales, falta de formación docente).':
    'Summary of UNESCO’s Global Education Monitoring Report, focused on the role of digital technology in the classroom. It analyzes both benefits (access to resources, personalized learning) and risks (data surveillance, digital divides, lack of teacher training).',
  'Artículo académico que analiza cómo la introducción del pensamiento computacional en PISA 2025 puede profundizar las desigualdades educativas entre países con distinto acceso digital. Propone medidas de inversión e infraestructura para reducir estas brechas.':
    'Academic article analyzing how the introduction of computational thinking in PISA 2025 may deepen educational inequalities among countries with different levels of digital access. It proposes investment and infrastructure measures to reduce these gaps.',
  'Entrevista de ONU Mujeres que explica, con ejemplos claros, cómo los sistemas de IA pueden amplificar desigualdades de género en decisiones de contratación, crédito o justicia si se entrenan con datos históricos sesgados, y propone recomendaciones para diseñar IA ética e inclusiva.':
    'UN Women interview explaining, with clear examples, how AI systems can amplify gender inequalities in hiring, credit or justice decisions if they are trained on biased historical data, and proposing recommendations for designing ethical and inclusive AI.',
  'Artículo del PNUD que analiza cómo la IA se usa ya en becas, subsidios y servicios sociales en la región, y cómo los sesgos de género en los datos pueden excluir a mujeres pobres, indígenas o migrantes, convirtiéndose en un problema de desarrollo y de confianza institucional.':
    'UNDP article analyzing how AI is already used in scholarships, subsidies and social services in the region, and how gender bias in data can exclude poor, Indigenous or migrant women, becoming a development and institutional trust problem.',
  'Estudio jurídico que describe cómo algoritmos de evaluación del rendimiento, asignación de tareas o control horario pueden deshumanizar relaciones laborales y perjudicar más a las mujeres, y plantea la necesidad de supervisión humana, auditorías algorítmicas y perspectiva de género en la gestión del trabajo digital.':
    'Legal study describing how algorithms for performance evaluation, task allocation or time tracking can dehumanize labor relations and harm women more, and arguing for human oversight, algorithmic audits and a gender perspective in digital work management.',
  'Artículo que resume los riesgos de usar IA en selección, promoción y salarios cuando los modelos aprenden de historiales laborales discriminatorios, y explica qué obligaciones impone el marco europeo y español para auditar estos sistemas y proteger la igualdad.':
    'Article summarizing the risks of using AI in hiring, promotion and pay when models learn from discriminatory employment histories, and explaining the obligations imposed by the European and Spanish framework to audit these systems and protect equality.',
  'Artículo académico de la Universidad de Deusto que analiza más de 3.400 ofertas generadas automáticamente por InfoJobs para detectar posibles sesgos de género en alertas de empleo, describiendo la metodología de correspondencia experimental y discutiendo implicaciones para plataformas digitales de empleo.':
    'Academic article from the University of Deusto analyzing more than 3,400 offers automatically generated by InfoJobs to detect potential gender bias in job alerts, describing the experimental matching methodology and discussing implications for digital employment platforms.',
  'Reportaje que presenta el estudio “Género, gamers y videojuegos” y muestra cómo las jugadoras sufren comportamientos sexistas, roles cosificadores y discriminación en el sector, pero también oportunidades para transformar estas narrativas desde el diseño de juegos.':
    'Feature article presenting the study "Gender, gamers and video games" and showing how women players experience sexist behavior, objectifying roles and discrimination in the sector, as well as opportunities to transform these narratives through game design.',
  'Investigación con alumnado de 11–12 años que analiza qué videojuegos consumen, cómo se distribuyen por género y qué estereotipos transmiten, vinculando las preferencias de juego con la socialización sexista y la necesidad de una mirada coeducativa sobre los contenidos digitales.':
    'Research with 11- to 12-year-old pupils analyzing which video games they consume, how consumption is distributed by gender and which stereotypes they transmit, linking game preferences to sexist socialization and the need for a coeducational view of digital content.',
  'Estudio de carácter cuantitativo y cualitativo sobre 313 personajes en videojuegos mainstream en España, que muestra la infrarrepresentación de mujeres como protagonistas, su relegación a roles secundarios y la persistencia de cuerpos irreales y actitudes sumisas.':
    'Quantitative and qualitative study of 313 characters in mainstream video games in Spain, showing the underrepresentation of women as protagonists, their relegation to secondary roles and the persistence of unrealistic bodies and submissive attitudes.',
  'Artículo en inglés que revisa la evolución de los personajes femeninos desde figuras hipersexualizadas a representaciones más diversas, y analiza cómo estas imágenes influyen en la construcción de la identidad y en la percepción de las mujeres jugadoras.':
    'English-language article reviewing the evolution of female characters from hypersexualized figures to more diverse representations, and analyzing how these images influence identity construction and perceptions of women players.',
  'Síntesis de la brecha de género en estudios STEM: solo el 35% de graduados son mujeres, lo que reduce su presencia en carreras de futuro como la informática y el diseño de videojuegos, e incluye recomendaciones de política educativa para revertir esta situación.':
    'Summary of the gender gap in STEM studies: only 35% of graduates are women, reducing their presence in future-oriented careers such as computer science and video game design, with education policy recommendations to reverse this situation.',
  'Página oficial de la ONU sobre el ODS 7: metas, datos clave y acciones ciudadanas. Explica la relación entre la dependencia de combustibles fósiles, el cambio climático y la necesidad de energías renovables, en un lenguaje accesible para todo público.':
    'Official UN page on SDG 7: targets, key data and citizen actions. It explains the relationship between fossil fuel dependence, climate change and the need for renewable energy in accessible language.',
  'Artículo que explica por qué los centros de datos especializados en IA están disparando su consumo energético (415 TWh en 2024, proyectados a 945 TWh en 2030 según la IEA) y qué estrategias sostenibles están adoptando las grandes tecnológicas.':
    'Article explaining why AI-specialized data centers are driving up energy consumption (415 TWh in 2024, projected to reach 945 TWh in 2030 according to the IEA) and which sustainable strategies major technology companies are adopting.',
  'Artículo de National Geographic que explica el mecanismo de minería Proof of Work, su impacto en emisiones de CO₂ (hasta 130 millones de toneladas métricas estimadas) y las regulaciones que algunos países ya están aplicando.':
    'National Geographic article explaining the Proof of Work mining mechanism, its impact on CO2 emissions (up to an estimated 130 million metric tons) and the regulations some countries are already applying.',
  'Análisis técnico detallado basado en datos del Cambridge Centre for Alternative Finance (CCAF). Compara el consumo energético de Bitcoin (PoW) con Ethereum tras su migración a Proof of Stake (reducción del 99,95%), estima la huella de carbono según el mix energético geográfico de los mineros y discute las limitaciones metodológicas de las estimaciones actuales.':
    'Detailed technical analysis based on Cambridge Centre for Alternative Finance (CCAF) data. It compares Bitcoin’s energy consumption (PoW) with Ethereum after its migration to Proof of Stake (99.95% reduction), estimates the carbon footprint according to miners’ geographic energy mix and discusses methodological limits in current estimates.',
  'Página oficial de la ONU sobre el ODS 8, con datos actualizados sobre empleo informal, crecimiento del PIB per cápita y prioridades para promover trabajo decente, incluyendo la transición justa en un contexto de automatización y digitalización.':
    'Official UN page on SDG 8, with updated data on informal employment, GDP per capita growth and priorities for promoting decent work, including the just transition in a context of automation and digitalization.',
  'Ficha divulgativa que explica metas y cifras clave del ODS 8 (paro juvenil, informalidad, brecha salarial) y propone líneas de acción para empresas, como plataformas de monitoreo, innovación tecnológica responsable y apoyo al emprendimiento inclusivo.':
    'Outreach fact sheet explaining SDG 8 targets and key figures (youth unemployment, informality, pay gap) and proposing lines of action for companies, such as monitoring platforms, responsible technological innovation and support for inclusive entrepreneurship.',
  'Análisis de las plataformas digitales laborales en España que describe perfiles de trabajadores, condiciones de empleo y déficits de trabajo decente (ingresos bajos, horarios imprevisibles, falta de protección social), muy útil para conectar ODS 8 con economía de plataformas.':
    'Analysis of digital labor platforms in Spain describing worker profiles, employment conditions and decent-work deficits (low income, unpredictable schedules, lack of social protection), useful for connecting SDG 8 with the platform economy.',
  'Nota técnica ligada a la 113.ª Conferencia Internacional del Trabajo que propone estándares internacionales para garantizar transparencia algorítmica, derechos laborales y protección social en plataformas digitales, ofreciendo un buen puente entre regulación laboral y diseño de sistemas digitales.':
    'Technical note linked to the 113th International Labour Conference proposing international standards to guarantee algorithmic transparency, labor rights and social protection on digital platforms, offering a useful bridge between labor regulation and digital system design.',
  'Página oficial de la ONU sobre el ODS 9: metas, datos clave (más de 4.000 millones de personas sin acceso a internet, industria como motor del 80% del PIB global) y qué medidas pueden tomar ciudadanos, empresas y gobiernos.':
    'Official UN page on SDG 9: targets, key data (more than 4 billion people without internet access, industry as a driver of 80% of global GDP) and measures citizens, companies and governments can take.',
  'Artículo que recorre casos reales de IA aplicada a la detección temprana de inundaciones (Google Flood Forecasting, con 7 días de antelación), terremotos y huracanes.':
    'Article reviewing real cases of AI applied to early detection of floods (Google Flood Forecasting, seven days in advance), earthquakes and hurricanes.',
  'Reportaje que explica en detalle qué son los algoritmos verdes, por qué las TIC podrían consumir el 20% de la energía mundial en 2030 y qué papel juega el Programa Nacional de Algoritmos Verdes de España.':
    'Feature article explaining in detail what green algorithms are, why ICT could consume 20% of the world’s energy by 2030 and the role of Spain’s National Green Algorithms Program.',
  'Artículo académico (2024) que analiza la relación entre ingeniería de software, sostenibilidad e inteligencia artificial, evaluando el consumo energético de distintos lenguajes de programación. El estudio concluye que lenguajes como Java pueden ser más eficientes que Python y propone metodologías para medir y reducir la huella de carbono del software.':
    'Academic article (2024) analyzing the relationship between software engineering, sustainability and artificial intelligence by evaluating the energy consumption of different programming languages. The study concludes that languages such as Java can be more efficient than Python and proposes methodologies to measure and reduce software’s carbon footprint.',
  'Página oficial de la ONU sobre el ODS 11: datos clave (en 2022, solo la mitad de la población urbana tenía acceso al transporte público; las ciudades generan el 70% de las emisiones de carbono) y sus metas principales hasta 2030.':
    'Official UN page on SDG 11: key data (in 2022, only half of the urban population had access to public transport; cities generate 70% of carbon emissions) and its main targets through 2030.',
  'Explicación del ODS 11 con foco en el rol de empresas y ciudadanos. Aborda la contaminación del aire (24.000 muertes anuales en España según datos de 2023), la movilidad sostenible, los sistemas IoT para edificios inteligentes y la gestión de residuos.':
    'Explanation of SDG 11 focused on the role of companies and citizens. It addresses air pollution (24,000 annual deaths in Spain according to 2023 data), sustainable mobility, IoT systems for smart buildings and waste management.',
  'Artículo de 2025 que explica cómo ciudades como Santander (con 20.000 sensores) y Las Rozas integran IoT, edge computing y cloud para gestionar semáforos adaptativos, monitorizar la calidad del aire y optimizar el alumbrado público.':
    '2025 article explaining how cities such as Santander (with 20,000 sensors) and Las Rozas integrate IoT, edge computing and cloud to manage adaptive traffic lights, monitor air quality and optimize public lighting.',
  'Informe técnico de la DGT (diciembre 2024) sobre los Sistemas Inteligentes de Transporte (ITS) en España: espiras magnéticas, sensores de velocidad, radares de tramo, sistemas LPR, paneles de mensaje variable y Smart Routing.':
    'Technical report from the DGT (December 2024) on Intelligent Transport Systems (ITS) in Spain: magnetic loops, speed sensors, average-speed cameras, LPR systems, variable message signs and Smart Routing.',
  'Introducción general al ODS 12 que explica el objetivo de “hacer más con menos” reduciendo el uso de recursos, la contaminación y los residuos a lo largo del ciclo de vida de productos y servicios, con énfasis en el papel de empresas, consumidores y administraciones.':
    'General introduction to SDG 12 explaining the goal of "doing more with less" by reducing resource use, pollution and waste throughout the life cycle of products and services, with emphasis on the role of companies, consumers and administrations.',
  'Material didáctico que resume las metas del ODS 12 y pone el foco en el desperdicio alimentario y en los desechos electrónicos (50 millones de toneladas anuales), relacionando el consumo tecnológico con la generación de residuos.':
    'Teaching material summarizing SDG 12 targets and focusing on food waste and electronic waste (50 million tons annually), relating technology consumption to waste generation.',
  'Artículo divulgativo sobre e-waste que explica qué son los residuos tecnológicos, por qué superan las 50 millones de toneladas anuales y cómo el ODS 12 exige una gestión ecológicamente racional de estos residuos, con ejemplos de buenas prácticas y circuitos de reciclaje.':
    'Outreach article on e-waste explaining what technological waste is, why it exceeds 50 million tons annually and how SDG 12 requires environmentally sound management of this waste, with examples of good practices and recycling circuits.',
  'Informe técnico de la UIT que recoge requisitos mínimos y guías operativas para la gestión ambientalmente racional de residuos electrónicos procedentes de TIC, incluyendo marcos de política, responsabilidades de los gestores y etapas de la cadena RAEE.':
    'ITU technical report compiling minimum requirements and operational guidelines for environmentally sound management of electronic waste from ICT, including policy frameworks, manager responsibilities and stages of the WEEE chain.',
  'Página oficial del ODS 13 que presenta impactos del cambio climático (aumento de temperatura, eventos extremos, afectación a los más vulnerables) y explica el Acuerdo de París y la necesidad de reducir rápidamente las emisiones de gases de efecto invernadero.':
    'Official SDG 13 page presenting climate change impacts (rising temperatures, extreme events, effects on the most vulnerable) and explaining the Paris Agreement and the need to rapidly reduce greenhouse gas emissions.',
  'Ficha que contextualiza el cambio climático en España (olas de calor, millones de personas afectadas) y detalla cómo empresas y organizaciones pueden integrar la acción climática en sus estrategias, enlazando ODS 13 con otros objetivos.':
    'Fact sheet contextualizing climate change in Spain (heat waves, millions of people affected) and detailing how companies and organizations can integrate climate action into their strategies, linking SDG 13 with other goals.',
  'Artículo de ONU Cambio Climático que muestra cómo centros de datos y grandes empresas TIC pueden pasar de ser responsables de alrededor del 2% de las emisiones globales a convertirse en palanca para reducir un 20% de las emisiones mundiales mediante soluciones digitales eficientes.':
    'UN Climate Change article showing how data centers and large ICT companies can move from being responsible for around 2% of global emissions to becoming a lever for reducing global emissions by 20% through efficient digital solutions.',
  'Informe de la UIT que analiza cómo las TIC pueden apoyar los tres pilares del Plan de Acción de Bali (adaptación, mitigación y transferencia tecnológica), cuantificando ahorros potenciales de CO₂ mediante soluciones smart y proponiendo políticas para integrar TIC en estrategias climáticas nacionales.':
    'ITU report analyzing how ICT can support the three pillars of the Bali Action Plan (adaptation, mitigation and technology transfer), quantifying potential CO2 savings through smart solutions and proposing policies to integrate ICT into national climate strategies.',
  'Página oficial de la ONU que explica qué es el ODS 16, sus metas principales sobre el estado de derecho, acceso a la justicia, reducción de la corrupción y construcción de instituciones responsables y transparentes. Incluye datos clave sobre violencia, delincuencia organizada y protección de derechos humanos.':
    'Official UN page explaining what SDG 16 is, its main targets on the rule of law, access to justice, reducing corruption and building accountable and transparent institutions. Includes key data on violence, organized crime and human rights protection.',
  'Informe actualizado (marzo 2026) sobre lucha contra la corrupción e integridad que revela que la corrupción, el fraude y el crimen organizado cuestan entre 800.000 millones y 2 billones de dólares anuales, y destaca la brecha entre normas anticorrupción y su aplicación efectiva.':
    'Updated report (March 2026) on anti-corruption and integrity revealing that corruption, fraud and organized crime cost between USD 800 billion and USD 2 trillion annually, and highlighting the gap between anti-corruption rules and their effective enforcement.',
  'Análisis técnico del desarrollo del algoritmo por parte del profesor César Ferri y su equipo. Explica cómo funciona el cruce de datos del Registro Mercantil y de la Propiedad para generar alertas sospechosas y detalla el proceso de integración con el sistema de alertas de subvenciones y contratos.':
    'Technical analysis of the algorithm developed by Professor César Ferri and his team. It explains how cross-checking data from the Mercantile and Property Registries generates suspicious alerts and details the integration process with the subsidy and contract alert system.',
  'Página oficial sobre voto electrónico global. Documenta que solo 7 de 75 democracias puras tienen i-voting implementado. Países como Alemania, Reino Unido e Irlanda lo prohíben por problemas de seguridad, y analiza casos de éxito como Bélgica, Brasil, Estonia y Emiratos Árabes Unidos.':
    'Official page on global electronic voting. It documents that only 7 of 75 full democracies have implemented i-voting. Countries such as Germany, the United Kingdom and Ireland ban it for security reasons, and it analyzes success cases such as Belgium, Brazil, Estonia and the United Arab Emirates.',

  'Cada intento de la autoevaluación del ODS 5 consiste en 8 preguntas.':
    'Each SDG 5 self-assessment attempt consists of 8 questions.',
  'Informativa': 'Informative',
  'Motivadora': 'Motivational',
  'No concienciado': 'Not yet aware',
  'Camino de mejora': 'On the path to improvement',
  'Concienciado': 'Aware',
  'Muy concienciado': 'Highly aware',
  'Perfectamente concienciado': 'Fully aware',
  'Has comenzado a explorar la igualdad de género en el ámbito digital, pero aún quedan conceptos clave por asimilar. No te preocupes, es un tema complejo y lleno de matices. Te animamos a revisar los vídeos y los materiales de profundización para entender mejor cómo los sesgos en IA, los algoritmos de contratación y los roles en videojuegos pueden perpetuar desigualdades. ¡Cada paso cuenta para construir una tecnología más justa!':
    'You have started exploring gender equality in the digital field, but there are still key concepts to absorb. This is a complex topic with many nuances. We encourage you to review the videos and further-reading materials to better understand how bias in AI, hiring algorithms and video game roles can perpetuate inequalities. Every step counts toward building fairer technology.',
  'Vas por buen camino. Has identificado algunas de las principales problemáticas, como la existencia de sesgos en los datos o la necesidad de auditar algoritmos. Aún puedes profundizar en cómo aplicar medidas concretas (anonimización de currículums, diseño de datasets inclusivos, creación de personajes diversos) en tu futura práctica profesional. Sigue así, estás en el camino de convertirte en agente de cambio.':
    'You are on the right track. You have identified some major issues, such as bias in data and the need to audit algorithms. You can still go deeper into how to apply concrete measures (anonymizing CVs, designing inclusive datasets, creating diverse characters) in your future professional practice. Keep going: you are on the path to becoming an agent of change.',
  '¡Bien! Tienes una comprensión sólida de los retos de la igualdad de género en el sector tecnológico. Sabes que la IA puede reproducir sesgos históricos y que los videojuegos han cosificado a la mujer, pero también reconoces que existen herramientas para revertirlo: auditorías, anonimización, diseño de personajes diversos. Este nivel de conciencia es esencial para que, como futura profesional, puedas desarrollar soluciones más equitativas.':
    'Good. You have a solid understanding of the challenges of gender equality in the technology sector. You know that AI can reproduce historical bias and that video games have objectified women, while also recognizing tools to reverse this: audits, anonymization and diverse character design. This level of awareness is essential for developing more equitable solutions as a future professional.',
  'Excelente. Has interiorizado la mayoría de los conceptos y eres capaz de conectar los problemas (sesgos en selección, brechas en STEM, representación en videojuegos) con soluciones concretas desde la ingeniería informática. Tu visión crítica te permite identificar no solo el problema, sino también las palancas para construir tecnología inclusiva. ¡Sigue profundizando y compartiendo este conocimiento!':
    'Excellent. You have internalized most of the concepts and can connect the problems (selection bias, STEM gaps, video game representation) with concrete solutions from computer engineering. Your critical perspective lets you identify not only the problem, but also the levers for building inclusive technology. Keep deepening and sharing this knowledge.',
  '¡Impresionante! Has demostrado un dominio completo de los contenidos. No solo entiendes cómo se generan los sesgos de género en IA y en la industria del videojuego, sino que también manejas estrategias para prevenirlos y corregirlos. Tienes una visión integral del ODS 5 aplicada al ámbito informático, lo que te sitúa como un agente clave para diseñar un futuro digital más justo, diverso y libre de estereotipos. ¡Gracias por tu compromiso!':
    'Impressive. You have shown full mastery of the content. You understand not only how gender bias arises in AI and in the video game industry, but also strategies to prevent and correct it. You have an integrated view of SDG 5 applied to computing, positioning you as a key agent in designing a fairer, more diverse digital future free of stereotypes. Thank you for your commitment.',
  '¿De dónde aprende la IA?': 'Where does AI learn from?',
  'Nace sabiendo.': 'It is born knowing.',
  'Aprende de datos históricos sesgados.': 'It learns from biased historical data.',
  'Aprende de datos que reflejan una realidad justa.': 'It learns from data that reflects a fair reality.',
  'Se entrena leyendo bulos de Twitter.': 'It is trained by reading hoaxes on Twitter.',
  'El vídeo explica que la IA aprende de datos históricos que contienen datos históricos sesgados.':
    'The video explains that AI learns from historical data that contains historical bias.',
  '¿Qué sucede con los modelos de contratación por IA?': 'What happens with AI hiring models?',
  'Siempre eligen a los y las mejores candidatas, independientemente del género.':
    'They always choose the best candidates, regardless of gender.',
  'No tienen ningún criterio en su decisión.': 'They have no criteria in their decision.',
  'Contratan más mujeres para cumplir el cupo de género.': 'They hire more women to meet the gender quota.',
  'Se descartan sistemáticamente mujeres con buena formación y experiencia.':
    'Women with strong training and experience are systematically discarded.',
  'El vídeo explica que, en estos sistemas supuestamente objetivos, candidatas con buena formación y experiencia quedan fuera, mientras perfiles masculinos similares pasan el filtro.':
    'The video explains that in these supposedly objective systems, women candidates with strong training and experience are left out, while similar male profiles pass the filter.',
  '¿Qué roles ha perpetuado históricamente la industria del videojuego?':
    'Which roles has the video game industry historically perpetuated?',
  'Roles que presentan a la mujer como un trofeo o una víctima pasiva.':
    'Roles that present women as trophies or passive victims.',
  'Roles equitativos y libres de prejuicios de género.': 'Equitable roles free from gender prejudice.',
  'Los videojuegos no perpetúan ningún rol, son solo juegos.': 'Video games do not perpetuate any roles; they are just games.',
  'Roles que presentan al hombre como agentes secundarios e innecesarios en la trama.':
    'Roles that present men as secondary and unnecessary agents in the plot.',
  'El vídeo explica (y muestra con diversos ejemplos) que a menudo los videojuegos han perpetuado roles que cosifican a la mujer.':
    'The video explains, and shows with several examples, that video games have often perpetuated roles that objectify women.',
  'En el artículo A review on fairness in Machine Learning (2022). ¿Qué conclusión extrae ese estudio sobre los modelos de Deep Learning cuando minimizan el error global de predicción?':
    'In the article A review on fairness in Machine Learning (2022), what conclusion does that study draw about Deep Learning models when they minimize overall prediction error?',
  'Que los modelos se vuelven completamente insesgados gracias a la optimización.':
    'That the models become completely unbiased thanks to optimization.',
  'Que por diseño favorecen a los grupos mayoritarios frente a los minoritarios.':
    'That by design they favor majority groups over minority ones.',
  'Que el error de predicción no tiene relación alguna con los sesgos de género.':
    'That prediction error has no relation at all to gender bias.',
  'Que estos modelos solo pueden entrenarse con datos escritos en inglés.':
    'That these models can only be trained with data written in English.',
  'El vídeo recoge textualmente que los objetivos algorítmicos, “al minimizar el error global de predicción, favorecen por diseño a los grupos mayoritarios sobre los minoritarios”.':
    'The video states verbatim that algorithmic objectives, "by minimizing overall prediction error, favor majority groups over minority ones by design."',
  'Se describe varios efectos negativos que producen ciertos algoritmos. ¿Cuáles de las siguientes consecuencias enumera de forma explícita?':
    'Several negative effects produced by certain algorithms are described. Which of the following consequences are explicitly listed?',
  'Facilitan la participación equitativa de todas las personas en redes sociales.':
    'They facilitate the equitable participation of all people on social media.',
  'Replican roles de los años 50, amplifican discursos de odio y borran la voz de las mujeres.':
    'They replicate 1950s roles, amplify hate speech, and erase women\'s voices.',
  'Borran únicamente la voz de los hombres en las plataformas digitales.':
    'They erase only men\'s voices on digital platforms.',
  'Impiden cualquier tipo de interacción entre personas de distinto género.':
    'They prevent any kind of interaction between people of different genders.',
  'La enumeración es directa en el vídeo: “Mientras unos algoritmos replican roles de los años 50, otros amplifican discursos de odio y algunos directamente borran la voz de las mujeres”.':
    'The list is explicit in the video: "While some algorithms replicate 1950s roles, others amplify hate speech and some directly erase women\'s voices."',
  '¿Qué clase de experiencias invita a crear el ODS 5 en el mundo del videojuego?':
    'What kind of experiences does SDG 5 invite us to create in video games?',
  'Videojuegos en los que los roles estereotípicos se inviertan, relegando a los hombres a personajes secundarios.':
    'Video games where stereotypical roles are reversed, relegating men to secondary characters.',
  'Videojuegos sin personajes, para evitar caer en sesgos.': 'Video games without characters, to avoid falling into bias.',
  'Juegos en los que se cosifique y sexualice a los personajes constantemente, pero sin distinguir por género.':
    'Games where characters are constantly objectified and sexualized, without distinguishing by gender.',
  'Experiencias donde la diversidad sea la norma, y no la excepción.':
    'Experiences where diversity is the norm, not the exception.',
  'El vídeo dice expresamente: “El ODS 5 nos reta a crear experiencias donde la diversidad sea la configuración por defecto.”':
    'The video states explicitly: "SDG 5 challenges us to create experiences where diversity is the default setting."',
  '¿Qué harías tú con los currículums para evitar sesgos?': 'What would you do with CVs to avoid bias?',
  'Exigir y usar todos los datos sensibles de forma explícita.':
    'Require and use all sensitive data explicitly.',
  'Contratar aleatoriamente.': 'Hire randomly.',
  'Anonimizar los currículums.': 'Anonymize the CVs.',
  'Mandárselos a ChatGPT, Claude y Grok para que decidan entre los tres.':
    'Send them to ChatGPT, Claude and Grok so the three of them can decide.',
  'El vídeo explica que ocultar la foto, nombre y otros datos relacionados con el género (proxies) es un primer paso para evitar los sesgos.':
    'The video explains that hiding the photo, name and other gender-related data (proxies) is a first step toward avoiding bias.',
  '¿Qué debes hacer con los algoritmos?': 'What should you do with algorithms?',
  'Confiar ciegamente en ellos, la máquina hace las cosas mejor que yo.':
    'Trust them blindly; the machine does things better than I do.',
  'Auditarlos constantemente, y ajustar los modelos cuando se detectan penalizaciones sistemáticas.':
    'Audit them constantly and adjust the models when systematic penalties are detected.',
  'Dejarlos tal y como están, pero verificar las salidas manualmente por si se cuela alguna que parezca injusta.':
    'Leave them as they are, but manually verify outputs in case something that seems unfair slips through.',
  'Ejecutarlos muchas veces para darles la oportunidad de pensárselo mejor y darse cuenta del sesgo.':
    'Run them many times to give them a chance to think better and realize the bias.',
  'El vídeo explica la importancia de auditar los modelos para poder detectar sesgos y ajustar los modelos.':
    'The video explains the importance of auditing models in order to detect bias and adjust the models.',
  'Diseñando un videojuego o experiencia cultural digital, detectas que todos los personajes femeninos quedan en un segundo plano. ¿Qué haces?':
    'While designing a video game or digital cultural experience, you notice that all female characters are pushed into the background. What do you do?',
  'Impulsar un rediseño de la trama y personajes para eliminar el sesgo.':
    'Promote a redesign of the plot and characters to eliminate the bias.',
  'Eliminar todos los personajes femeninos.': 'Remove all female characters.',
  'Añadir algunos personajes masculinos que también sean secundarios, para compensar.':
    'Add some male characters who are also secondary, to compensate.',
  'Confiar en que la gente en redes no se dé cuenta.': 'Trust that people on social media will not notice.',
  'El vídeo dice, expresamente: “¡Diseña juegos donde todo el mundo pueda ser el héroe o la heroína!”':
    'The video states explicitly: "Design games where everyone can be the hero."',
  '¿Qué harías si te piden diseñar un dataset para entrenar un modelo para usar en videojuegos?':
    'What would you do if you were asked to design a dataset to train a model for use in video games?',
  'Solo tener en cuenta los datos de hombres cis heteros blancos.':
    'Only consider data from white heterosexual cis men.',
  'Recopilar todos los datos que encuentre sin criterio alguno.':
    'Collect all the data I can find without any criteria.',
  'Intentar detectar y eliminar o reducir sesgos en el diseño.':
    'Try to detect and eliminate or reduce bias in the design.',
  'Confiar en datasets similares que encuentre en línea.': 'Trust similar datasets I find online.',
  'El vídeo explica que hay muchas formas de eliminar sesgos, desde el diseño de lógica de juego hasta la creación de datasets para IA.':
    'The video explains that there are many ways to eliminate bias, from game logic design to creating datasets for AI.',
  'Un vídeo recomienda actuar incluso cuando no se puede eliminar por completo una injusticia en un modelo. ¿Qué acción concreta propone como fundamental a corto plazo?':
    'One video recommends taking action even when an injustice in a model cannot be completely eliminated. What concrete action does it propose as fundamental in the short term?',
  'Sustituir el modelo por una regresión lineal simple que no contenga sesgos.':
    'Replace the model with a simple linear regression that contains no bias.',
  'Cambiar el lenguaje de programación a uno más moderno.':
    'Change the programming language to a more modern one.',
  'Desconectar el modelo inmediatamente para no causar más daño.':
    'Disconnect the model immediately to avoid causing more harm.',
  'Documentar las injusticias detectadas, en favor de la transparencia y la responsabilidad.':
    'Document the detected injustices in favor of transparency and accountability.',
  'El vídeo señala: “documenta las injusticias que detectes en tus modelos, aunque no puedas eliminarlas del todo. La transparencia en las decisiones automatizadas es fundamental para la confianza y la responsabilidad”.':
    'The video states: "Document the injustices you detect in your models, even if you cannot eliminate them completely. Transparency in automated decisions is fundamental for trust and accountability."',
  '“Tú que diseñas arquitecturas, tú que entrenas modelos, tú que escribes cada línea, tienes el poder de cambiar esto”. ¿A qué te está llamando directamente ese mensaje?':
    '"You who design architectures, you who train models, you who write every line, have the power to change this." What is that message directly calling you to do?',
  'A esperar a que las plataformas digitales corrijan los sesgos por sí solas.':
    'Wait for digital platforms to correct the biases on their own.',
  'A delegar toda la responsabilidad en los equipos de ética de las empresas.':
    'Delegate all responsibility to companies\' ethics teams.',
  'A usar tu capacidad técnica para transformar unos algoritmos que hoy replican roles anticuados, odio o silencian voces.':
    'Use your technical capacity to transform algorithms that today replicate outdated roles, spread hate, or silence voices.',
  'A abandonar el proyecto si detectas cualquier tipo de sesgo.':
    'Abandon the project if you detect any kind of bias.',
  'La frase aparece justo después de describir que algunos algoritmos “replican roles de los años 50, otros amplifican discursos de odio y algunos directamente borran la voz de las mujeres”.':
    'The sentence appears right after describing that some algorithms "replicate 1950s roles, others amplify hate speech, and some directly erase women\'s voices."',
};

function translateContentText(value, locale) {
  if (typeof value !== 'string' || !locale?.htmlLang?.startsWith('en')) {
    return value;
  }

  return englishTranslations[value] ?? value;
}

function localizeContent(value, locale) {
  if (Array.isArray(value)) {
    return value.map((item) => localizeContent(item, locale));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, localizeContent(entry, locale)]),
    );
  }

  return translateContentText(value, locale);
}

const pageSlugs = {
  home: "",
  videos: "videos",
  quiz: "quiz",
  deepening: "deepening"
};
function withBase(path = "") {
  const base = "/web-ods/".endsWith("/") ? "/web-ods/" : `${"/web-ods/"}/`;
  const normalizedPath = path.replace(/^\/+/, "");
  return normalizedPath ? `${base}${normalizedPath}` : base;
}
function getStaticLanguagePaths() {
  return supportedLanguages.map((lang) => ({ params: { lang } }));
}
function getLangFromParams(langParam) {
  return supportedLanguages.includes(langParam) ? langParam : "es";
}
function getLocaleConfig(langParam) {
  const lang = getLangFromParams(langParam);
  const locale = locales[lang];
  return {
    ...locale,
    heroNote: ""
  };
}
function getPageUrl(lang, pageKey) {
  const slug = pageSlugs[pageKey];
  return withBase(slug ? `${lang}/${slug}/` : `${lang}/`);
}
function buildLanguageLinks(pageKey) {
  return supportedLanguages.map((code) => ({
    code,
    label: locales[code].localeLabel,
    href: getPageUrl(code, pageKey)
  }));
}
function getHomeCards(locale, lang) {
  return [
    {
      key: "videos",
      eyebrow: locale.nav.videos,
      title: locale.sections.videosTitle,
      lead: locale.sections.videosLead,
      href: getPageUrl(lang, "videos")
    },
    {
      key: "quiz",
      eyebrow: locale.nav.quiz,
      title: locale.sections.quizTitle,
      lead: locale.sections.quizLead,
      href: getPageUrl(lang, "quiz")
    },
    {
      key: "deepening",
      eyebrow: locale.nav.deepening,
      title: locale.sections.deepeningTitle,
      lead: locale.sections.deepeningLead,
      href: getPageUrl(lang, "deepening")
    }
  ];
}
const siteMetrics = {
  coveredGoals: odsCatalog.length,
  totalVideos: videoSections.reduce((total, group) => total + group.videos.length, 0),
  questionBank: quiz.questions.length,
  deepeningResources: deepeningSections.reduce((total, section) => {
    if (section.subtopics) {
      return total + section.subtopics.reduce(
        (sectionTotal, subtopic) => sectionTotal + subtopic.items.length,
        0
      );
    }
    return total + section.items.length;
  }, 0)
};

const $$Astro$1 = createAstro("https://ods-2030-videos.github.io");
const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SiteHeader;
  const { locale, lang, activePage = "home" } = Astro2.props;
  const navItems = [
    { key: "home", label: locale.nav.home, href: getPageUrl(lang, "home") },
    { key: "videos", label: locale.nav.videos, href: getPageUrl(lang, "videos") },
    { key: "quiz", label: locale.nav.quiz, href: getPageUrl(lang, "quiz") },
    { key: "deepening", label: locale.nav.deepening, href: getPageUrl(lang, "deepening") }
  ];
  const languageLinks = buildLanguageLinks(activePage);
  return renderTemplate`${maybeRenderHead()}<header class="topbar"> <div class="brand"> <strong>${locale.siteTitle}</strong> </div> <nav${addAttribute(locale.labels.mainNavigation, "aria-label")}> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute({ "is-active": item.key === activePage }, "class:list")}> ${item.label} </a>`)} </nav> <div class="lang-switch"${addAttribute(locale.labels.languageSwitch, "aria-label")}> ${languageLinks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute({ "is-active": item.code === lang }, "class:list")}> ${item.label} </a>`)} </div> </header>`;
}, "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/components/SiteHeader.astro", void 0);

const $$Astro = createAstro("https://ods-2030-videos.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    lang = "es",
    title = "ODS para Inform\xE1tica",
    description = "",
    assetBase = "./",
    footer = ""
  } = Astro2.props;
  const footerItems = typeof footer === "object" && footer !== null ? footer : null;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml"${addAttribute(`${assetBase}favicon.svg`, "href")}><link rel="icon"${addAttribute(`${assetBase}favicon.ico`, "href")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} ${footerItems && renderTemplate`<footer class="footer shell"> <h2>${footerItems.title}</h2> <p class="footer__license-code">${footerItems.shortName}</p> <p> ${footerItems.licensePrefix} <a${addAttribute(footerItems.licenseUrl, "href")} target="_blank" rel="noreferrer"> ${footerItems.licenseName} </a> </p> ${footerItems.attribution && renderTemplate`<p>${footerItems.attribution}</p>`} <p>${footerItems.thirdPartyLicenses}</p> <p>${footerItems.usageVerification}</p> </footer>`} </body></html>`;
}, "/home/bdescalzo/EHU/PK/P2.3/espacioTrabajoWeb/web-ods/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getStaticLanguagePaths as a, $$SiteHeader as b, getHomeCards as c, deepeningSections as d, getLocaleConfig as g, localizeContent as l, odsCatalog as o, quiz as q, siteMetrics as s, videoSections as v };
