import {
	IconNextjs,
	IconTypescript,
	IconMaterialui,
	IconFirebase,
	IconFigma,
	IconMiro,
	IconJira,
	IconDart,
	IconFlutter,
	IconUnity,
	IconCsharp,
	IconFlask,
	IconTensorflow,
} from '../molecules';

export interface Project {
	id: string;
	name: string;
	subtitle: string;
	image: string;
	description: string;
	aporte: string[];
	images: string[];
	challenges: string[];
	technologies: React.ReactNode[];
	background: string;
	href?: string;
}

export const projects: Project[] = [
	{
		id: '1',
		name: 'Axolote Web',
		subtitle: 'Crea tu página web con este equipo de Axolotes',
		image: '/images/AxoloteWeb.png',
		background: '#2f3642',
		href: 'https://axolote-web.firebaseapp.com',
		description:
			'Axolote Web es un equipo de desarrollo web que se encarga de crear páginas web para empresas y particulares. Nuestro equipo está formado por un grupo de Axolotes que se encargan de diseñar y programar tu página web. Además, te ofrecemos un servicio de mantenimiento para que tu página web esté siempre actualizada.',
		aporte: [
			'Creación del diseño desde cero en Figma',
			'Creación del front-end con Next.js y Material-UI',
			'Creación del back-end con Firebase',
			'Gestión de los contenidos y mantenimiento de la página web',
			'Consultas de API para obtener los datos necesarios',
		],
		images: [
			'/images/axoloteweb/img1.png',
			'/images/axoloteweb/img2.png',
			'/images/axoloteweb/img3.png',
			'/images/axoloteweb/img4.png',
		],
		challenges: [
			'Crear una página web atractiva y funcional',
			'Ofrecer un servicio de calidad a nuestros clientes',
			'Mantener la página web actualizada y segura',
		],
		technologies: [
			<IconNextjs key={1} width={'1.5rem'} />,
			<IconTypescript key={2} width={'1.5rem'} />,
			<IconMaterialui key={3} width={'1.5rem'} />,
			<IconFirebase key={4} width={'1.5rem'} />,
			<IconFigma key={5} width={'1.5rem'} />,
		],
	},
	{
		id: '2',
		name: 'Fiorel Perfumes',
		subtitle: 'Encuentra tu perfume ideal',
		image: '/images/FiorelLogo.png',
		background: '#000',
		description:
			'Fiorel es una perfumería online que te ofrece una amplia gama de perfumes para que encuentres el que mejor se adapte a ti. Además, te ofrecemos un servicio de asesoramiento para que encuentres tu perfume ideal. En Fiorel, te garantizamos la mejor calidad y el mejor precio.',
		aporte: [
			'Creación del diseño desde cero en Figma',
			'Creación del front-end con Next.js y Material-UI',
			'Creación del back-end con Firebase',
			'Uso de Firebase para almacenamiento de datos y autenticación de usuarios',
			'Gestión de los contenidos y mantenimiento de la página web',
			'Consultas de API para obtener los datos necesarios',
			'Uso de Server Side Rendeing',
			'Peticiones fetch controladas para ahorro de consumo de consultas de datos',
			'Uso de atomic design para llevar una estructura ordenada y escalable',
			'Uso de Context API para manejo de estados globales',
			'Uso de React Hooks para manejo de estados locales',
			'Uso de Next.js para optimización de SEO y velocidad de carga',
			'Rutas dinámicas para optimización de SEO y velocidad de carga',
			'Integración de sistema de pagos con PayPal',
			'Ingración de dashboard de administración de productos y pedidos',
			'Implmentación de Resend para envío de correos electrónicos para promociones y ofertas',
			'Sistema de promociones y ofertas para fidelización de clientes',
		],
		images: [
			'/images/fiorel/img1.jpg',
			'/images/fiorel/img2.jpg',
			'/images/fiorel/img3.png',
			'/images/fiorel/img4.png',
			'/images/fiorel/img5.png',
			'/images/fiorel/img6.png',
			'/images/fiorel/img7.png',
		],
		challenges: [
			'Crear una página web atractiva y funcional',
			'Ofrecer un servicio de calidad a nuestros clientes',
			'Mantener la página web actualizada y segura',
			'Optimizar la velocidad de carga y el SEO de la página web',
			'Integrar un sistema de pagos seguro y eficiente',
			'Integrar un dashboard de administración de productos y pedidos',
			'Ofrecer un sistema seguro de autenticación de usuarios',
		],
		technologies: [
			<IconNextjs key={1} width={'1.5rem'} />,
			<IconTypescript key={2} width={'1.5rem'} />,
			<IconMaterialui key={3} width={'1.5rem'} />,
			<IconFirebase key={4} width={'1.5rem'} />,
			<IconFigma key={5} width={'1.5rem'} />,
			<IconMiro key={6} width={'1.5rem'} />,
			<IconJira key={7} width={'1.5rem'} />,
		],
	},
	{
		id: '3',
		name: 'AppPerro',
		subtitle: 'Aplicación para cuidar a tu perro',
		image: '/images/AppPerroLogo.png',
		background: '#2AC06A',
		description:
			'AppPerro es una aplicación que te ayuda a cuidar a tu perro. Con AppPerro, podrás llevar un control de las vacunas, la alimentación, los paseos y el estado de salud de tu perro. Además, te ofrece un servicio de localización para que siempre sepas dónde está tu perro.',
		aporte: [
			'Creación del diseño desde cero en Figma',
			'Creación del front-end con Flutter y widgets personalizados',
			'Creación del back-end con Firebase',
			'Gestión de los contenidos y mantenimiento de la aplicación',
			'Consultas de API para obtener los datos necesarios',
			'Uso de Google Maps para la localización del perro',
		],
		images: [
			'/images/appperro/img1.jpg',
			'/images/appperro/img2.jpg',
			'/images/appperro/img3.png',
			'/images/appperro/img4.png',
		],
		challenges: [
			'Crear una aplicación atractiva y funcional',
			'Ofrecer un servicio de calidad a nuestros clientes',
			'Mantener la aplicación actualizada y segura',
			'Integrar un sistema de localización seguro y eficiente',
		],
		technologies: [
			<IconDart key={1} width={'1.5rem'} />,
			<IconFlutter key={2} width={'1.5rem'} />,
			<IconFirebase key={4} width={'1.5rem'} />,
			<IconFigma key={5} width={'1.5rem'} />,
			<IconJira key={3} width={'1.5rem'} />,
		],
	},
	{
		id: '4',
		name: 'Dino App',
		subtitle: 'Gestiona a tus alumnos para que aprendan a leer',
		image: '/images/DinoApp.png',
		background: '#2f3642',
		description:
			'Dino App es una aplicación que te ayuda a gestionar a tus alumnos para que aprendan a leer. Con Dino App, podrás llevar un control de las actividades que realizan tus alumnos, así como de su progreso. Además, te ofrece un servicio de asesoramiento para que puedas mejorar la enseñanza de la lectura.',
		aporte: [
			'Creación del diseño desde cero en Figma',
			'Creación de aplicación con Flutter y widgets personalizados',
			'Creación del back-end con Firebase',
			'Creación de sistema de autenticación de usuarios',
			'Sistema de roles para diferenciar entre profesores y administradores',
		],
		images: [
			'/images/dinoapp/img1.png',
			'/images/dinoapp/img2.png',
			'/images/dinoapp/img3.png',
			'/images/dinoapp/img4.png',
			'/images/dinoapp/img5.png',
			'/images/dinoapp/img6.png',
			'/images/dinoapp/img7.png',
			'/images/dinoapp/img8.png',
		],
		challenges: [
			'Crear una aplicación atractiva y funcional',
			'Ofrecer un servicio de calidad a nuestros clientes',
			'Mantener la aplicación actualizada y segura',
			'Sistema de permisos para diferenciar entre profesores y administradores',
			'Gestión en tiempo real de los datos de los alumnos',
		],
		technologies: [
			<IconDart key={1} width={'1.5rem'} />,
			<IconFlutter key={2} width={'1.5rem'} />,
			<IconFirebase key={4} width={'1.5rem'} />,
			<IconFigma key={5} width={'1.5rem'} />,
			<IconJira key={3} width={'1.5rem'} />,
			<IconMiro key={6} width={'1.5rem'} />,
		],
	},
	{
		id: '5',
		name: 'Dino Game',
		subtitle: 'Juego educativo para que los niños aprendan a leer',
		image: '/images/DinoGameLogo.png',
		background: '#2f3642',
		description:
			'Dino Game es un juego educativo que ayuda a los niños a aprender a leer. Con Dino Game, los niños podrán aprender a leer de forma divertida y entretenida. Además, te ofrece un servicio de seguimiento para que puedas ver el progreso de tus alumnos.',
		aporte: [
			'Creación del diseño desde cero en Figma',
			'Creación del juego con Unity y C#',
			'Creación del back-end con Flask y Firebase',
			'Creación de sistema de autenticación de usuarios',
			'Sinconización de datos en tiempo real para seguimiento de progreso de los alumnos',
			'Sistema de Machine Learning para recopilar el audio de los niños y evaluar su pronunciación',
			'Sistema de recompensas para motivar a los niños a seguir aprendiendo',
		],
		images: [
			'/images/dinogame/img1.png',
			'/images/dinogame/img2.png',
			'/images/dinogame/img3.png',
			'/images/dinogame/img4.png',
			'/images/dinogame/img5.png',
			'/images/dinogame/img6.png',
			'/images/dinogame/img7.png',
			'/images/dinogame/img8.png',
		],
		challenges: [
			'Crear un juego educativo atractivo y funcional',
			'Ofrecer un servicio de calidad a nuestros clientes',
			'Mantener el juego actualizado y seguro',
		],
		technologies: [
			<IconUnity key={1} width={'1.5rem'} />,
			<IconCsharp key={2} width={'1.5rem'} />,
			<IconFlask key={3} width={'1.5rem'} />,
			<IconTensorflow key={4} width={'1.5rem'} />,
			<IconFirebase key={5} width={'1.5rem'} />,
			<IconFigma key={6} width={'1.5rem'} />,
		],
	},
];