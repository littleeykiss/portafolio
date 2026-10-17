export interface Experience {
	period: string;
	role: string;
	company: string;
	location: string;
	responsibilities: string[];
	skills: string[];
}

export interface Education {
	title: string;
	institution: string;
	date: string;
	type: string;
}

export interface Language {
	language: string;
	level: string;
}

export const PORTFOLIO_DATA = {
	personal: {
		name: "Erik Guadalupe Sánchez López",
		shortName: "Erik Sánchez",
		title: "Ingeniero en Sistemas // Desarrollador Full-Stack",
		tagline: "+6 años especializándome en backend con Java, Spring Boot y microservicios, integrando frontend moderno, sistemas bancarios de misión crítica y bases de datos robustas.",
		phone: "(56)52162711",
		email: "ersalo123@gmail.com",
		location: "Ciudad de México, México",
		status: "ONLINE ",
		about: [
			"Ingeniero en Sistemas con más de 6 años de experiencia en desarrollo Full-Stack. Especializado en arquitecturas de backend resilientes utilizando Java, Spring Boot y microservicios, complementado con interfaces frontend ágiles y modernas (React, Angular, VueJS).",
			"Cuento con sólida trayectoria en el diseño e implementación de APIs RESTful de alto rendimiento (Apigee, TIBCO), integración directa con sistemas bancarios, hardening y seguridad de aplicaciones con SonarQube, y optimización avanzada de bases de datos relacionales (Oracle, PostgreSQL).",
			"He liderado equipos técnicos multidisciplinarios, participando activamente en la toma de decisiones arquitectónicas, modelado de soluciones escalables e implementación de pipelines de CI/CD."
		],
		socialLinks: [
			{ name: "Email", url: "mailto:ersalo123@gmail.com", icon: "Mail" },
			{ name: "Teléfono", url: "tel:5652162711", icon: "Phone" },
			{ name: "GitHub", url: "https://github.com", icon: "Github" },
			{ name: "LinkedIn", url: "https://www.linkedin.com/in/egsanchezl/", icon: "Linkedin" }
		]
	},
	technicalSkills: [
		{
			category: "Lenguajes",
			items: ["Java (Fuerte)", "SQL", "TypeScript", "JavaScript", "PHP", "Python", "C#", "C++", "HTML5/CSS3", "JSON"]
		},
		{
			category: "Frameworks & Backend",
			items: ["Spring Boot", "Spring Batch", "JPA / Hibernate", "Microservicios", "RESTful APIs", "CodeIgniter"]
		},
		{
			category: "Frontend",
			items: ["React", "Angular", "VueJS", "Responsive UI", "CSS/SASS"]
		},
		{
			category: "Bases de Datos",
			items: ["Oracle (Avanzado)", "PostgreSQL", "Procedimientos / PL-SQL", "Optimización de consultas"]
		},
		{
			category: "Herramientas & Middleware",
			items: ["GIT / Bitbucket", "Jenkins", "SonarQube", "Tomcat", "Azure", "JUnit", "Postman", "JMeter", "Apigee", "Control-M", "Tibco BW", "Servidores FTP"]
		},
		{
			category: "Metodologías",
			items: ["Scrum / Ágil", "Modelado UML", "CI/CD", "Pruebas de Estrés / Rendimiento"]
		}
	],
	competencies: [
		"Liderazgo técnico",
		"Trabajo en equipo",
		"Trabajo bajo presión",
		"Solución de problemas complejos",
		"Gestión de proyectos",
		"Atención al detalle",
		"Adaptación al cambio",
		"Autodidacta",
		"Redacción de informes técnicos"
	],
	experiences: [
		{
			period: "02/2025 — 07/2026",
			role: "Desarrollador Full-Stack",
			company: "AT&T",
			location: "Ciudad de México",
			responsibilities: [
				"Desarrollo y mantenimiento de microservicios corporativos de alta demanda utilizando Java y Spring Boot.",
				"Creación y consumo de APIs REST para la interoperabilidad continua entre diferentes sistemas y plataformas de telecomunicaciones.",
				"Modelado de lógica de negocio y procesamiento de datos para soluciones empresariales.",
				"Creación y ejecución de scripts SQL complejos y optimización en bases de datos Oracle.",
				"Integración con sistemas y servicios externos de terceros mediante APIs y contratos JSON.",
				"Corrección de vulnerabilidades, refactorización y normalización de código aplicando controles de SonarQube.",
				"Ejecución de pruebas funcionales y pruebas de estrés intensivas en servicios con Postman.",
				"Control de versiones, ramas y ambientes de desarrollo con Git; atención a incidencias y mantenimiento evolutivo backend."
			],
			skills: ["Java", "Spring Boot", "Oracle", "APIs REST", "SonarQube", "Postman", "Git", "Microservicios"]
		},
		{
			period: "11/2024 — 02/2025",
			role: "Desarrollador Full-Stack",
			company: "Santander",
			location: "Santa Fe, Ciudad de México",
			responsibilities: [
				"Creación y consumo de microservicios enfocados en la plataforma central del servicio de reportes bancarios.",
				"Creación y ejecución de scripts SQL de alto volumen sobre base de datos Oracle.",
				"Auditoría y control de vulnerabilidades de seguridad bancaria utilizando SonarQube.",
				"Administración de servidores FTP seguros para el intercambio automatizado de archivos transaccionales.",
				"Ejecución de pruebas de estrés en servicios críticos mediante Postman para garantizar tolerancia a la carga.",
				"Desarrollo de código estandarizado, normalizado y de alta estabilidad en Java."
			],
			skills: ["Java", "Microservicios", "Oracle", "SonarQube", "Postman", "FTP", "Banca"]
		},
		{
			period: "07/2023 — 08/2024",
			role: "Desarrollador BackEnd",
			company: "Pluxee",
			location: "Coyoacán, Ciudad de México",
			responsibilities: [
				"Definición y modelado de especificaciones de APIs REST integradas en la plataforma de beneficios y vales.",
				"Desarrollo de microservicios especializados en Java para el consumo ágil desde aplicaciones FrontEnd.",
				"Creación y mantenimiento de scripts de base de datos en Oracle para consistencia de datos de clientes.",
				"Control y supervisión de ramas y ambientes de despliegue con Git, garantizando estabilidad en producción.",
				"Mitigación continua de vulnerabilidades de seguridad con SonarQube."
			],
			skills: ["Java", "APIs REST", "Oracle", "SonarQube", "Git", "Backend"]
		},
		{
			period: "11/2021 — 07/2023",
			role: "Desarrollador BackEnd",
			company: "Banco Azteca",
			location: "Tlalpan, Ciudad de México",
			responsibilities: [
				"Desarrollo especializado del core bancario utilizando microservicios con Spring Boot y procesos batch con Spring Batch para generación masiva de reportes.",
				"Definición y creación de servicios e interfaces REST sobre la plataforma de integración TIBCO.",
				"Confección y normalización de tablas en bases de datos relacionales SQL e inserción transaccional masiva.",
				"Control y orquestación de eventos y mallas de ejecución en sistemas Control-M.",
				"Creación de marcos de pruebas automatizados con JUnit y atención exhaustiva a casos del equipo de QA."
			],
			skills: ["Java", "Spring Boot", "Spring Batch", "TIBCO", "Control-M", "JUnit", "SQL", "Core Bancario"]
		},
		{
			period: "08/2021 — 11/2021",
			role: "Desarrollador FrontEnd",
			company: "Totalplay",
			location: "Tlalpan, Ciudad de México",
			responsibilities: [
				"Desarrollo frontend utilizando VueJS para sitios y herramientas web con consumo de WebServices especializados.",
				"Apoyo en el desarrollo backend con Java y creación/ejecución de scripts SQL en base de datos Oracle.",
				"Implementación de pruebas de rendimiento web, optimización de velocidad de carga y compatibilidad cross-browser.",
				"Integración de pasarelas y servicios API externos, tales como sistemas para pagos en línea y servicios de correo."
			],
			skills: ["VueJS", "Java", "JavaScript", "Oracle", "Pagos Online", "WebServices"]
		},
		{
			period: "08/2020 — 08/2021",
			role: "Desarrollador Full-Stack",
			company: "AFORE COPPEL",
			location: "Culiacán, Sinaloa",
			responsibilities: [
				"Levantamiento de requerimientos con usuarios clave y modelado formal de arquitectura con diagramas UML.",
				"Desarrollo backend en PHP y frontend reactivo con VueJS, integrando diseño intuitivo y responsivo con HTML5/CSS.",
				"Configuración, tunning y administración de servidores web Apache Tomcat y bases de datos relacionales PostgreSQL.",
				"Creación y consumo de WebServices; administración de servidores FTP y pruebas con Postman."
			],
			skills: ["PHP", "VueJS", "PostgreSQL", "Tomcat", "UML", "WebServices", "Postman"]
		},
		{
			period: "10/2019 — 08/2020",
			role: "Desarrollador Full-Stack",
			company: "Constructora Colinas del Parque",
			location: "Culiacán, Sinaloa",
			responsibilities: [
				"Mantenimiento correctivo y evolutivo al sistema de Recursos Humanos (módulos de registro, beneficios y préstamos).",
				"Mantenimiento integral al sistema de almacén e inventario (módulos de entradas, salidas, proveedores y catálogo de productos).",
				"Pruebas de usabilidad y accesibilidad; desarrollo de interfaces intuitivas y responsivas con JavaScript, HTML y CSS.",
				"Atención técnica directa y soporte con los usuarios operativos de la organización."
			],
			skills: ["JavaScript", "HTML/CSS", "Sistemas ERP/RH", "Usabilidad", "Full-Stack"]
		}
	] as Experience[],
	education: [
		{
			title: "Ingeniería en Sistemas",
			institution: "Universidad del Valle de México",
			date: "12/2019",
			type: "Grado Universitario"
		},
		{
			title: "Técnico Programador Analista y Diseñador Gráfico",
			institution: "Instituto Profesional de Computación",
			date: "05/2010",
			type: "Formación Técnica"
		}
	] as Education[],
	languages: [
		{ language: "Español", level: "Lengua materna" },
		{ language: "Inglés", level: "Intermedio / B1" }
	] as Language[]
};
