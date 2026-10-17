import { useState, useEffect } from 'react';
import { 
	Mail, 
	Phone, 
	MapPin, 
	Terminal as TerminalIcon, 
	Cpu, 
	Briefcase, 
	GraduationCap, 
	Globe, 
	Award, 
	Building2, 
	Calendar, 
	ShieldCheck, 
	CheckCircle2, 
	ExternalLink 
} from 'lucide-react';
import { PORTFOLIO_DATA } from './data';
import { TypewriterText } from './components/TypewriterText';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { GithubIcon, LinkedinIcon } from './components/SocialIcons';
import './App.css';

export function App() {
	const [activeSection, setActiveSection] = useState('about');

	// Active section spy on scroll
	useEffect(() => {
		const sections = ['about', 'skills', 'experience', 'competencies', 'education', 'contact'];
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 200;

			for (const section of sections) {
				const el = document.getElementById(section);
				if (el) {
					const top = el.offsetTop;
					const height = el.offsetHeight;
					if (scrollPosition >= top && scrollPosition < top + height) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Desplazamiento suave a sección
	const scrollToSection = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
			setActiveSection(id);
		}
	};

	return (
		<div className="min-h-screen bg-[var(--term-bg)] text-[var(--term-text)] bg-grid-pattern relative selection:bg-[var(--term-accent)] selection:text-black flex flex-col justify-between font-mono">
			
			{/* ========================================================================= */}
			{/* HEADER: Identidad, Datos Generales y Banner ASCII estilo JCubic Terminal  */}
			{/* ========================================================================= */}
			<header className="border-b border-[var(--term-border)] bg-black/95 sticky top-0 z-40 backdrop-blur-md">
				
				{/* Barra superior de terminal del sistema */}
				<div className="border-b border-[var(--term-border)]/60 bg-[#050806] px-4 py-1.5 text-xs flex flex-wrap items-center justify-between gap-3">
					<div className="flex items-center gap-2">
						<span className="section-diagnostic-badge border-green-500/40 text-[var(--term-accent)]">
							[HEADER: ROOT]
						</span>
						<span className="text-[var(--term-dim)]">// HOST: erik-sanchez-thinkpad // OS: Linux 6.8 x86_64</span>
					</div>
					<div className="flex items-center gap-2 text-xs">
						<span className="inline-block w-2 h-2 rounded-full bg-[var(--term-accent)] animate-ping"></span>
						<span className="text-[var(--term-accent)] font-semibold">{PORTFOLIO_DATA.personal.status}</span>
					</div>
				</div>

				{/* Contenido principal del Header: Datos Generales */}
				<div className="container-layout py-4 lg:py-6">
					<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
						<div>
							<div className="text-xs text-[var(--term-dim)] mb-1 flex items-center gap-1">
								<span className="text-[var(--term-accent)] font-bold">root@sys:</span>
								<span className="text-blue-400">~/candidato</span>
								<span className="text-[var(--term-dim)]">$ cat bio.txt</span>
							</div>

							<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-terminal-glow flex items-center">
								{PORTFOLIO_DATA.personal.name}
								<span className="terminal-cursor-block" title="Cursor activo"></span>
							</h1>

							<p className="text-sm sm:text-base font-semibold text-[var(--term-accent)] mt-1">
								&gt; {PORTFOLIO_DATA.personal.title}
							</p>
						</div>

						{/* Datos Generales de Contacto Rápido */}
						<div className="flex flex-wrap items-center gap-4 text-xs bg-[#050806] border border-[var(--term-border)] px-4 py-3 rounded">
							<div className="flex items-center gap-1.5">
								<MapPin size={13} className="text-[var(--term-accent)]" />
								<span>{PORTFOLIO_DATA.personal.location}</span>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* ========================================================================= */}
			{/* BODY: Terminal Interactiva + Índice de Navegación + Secciones del CV      */}
			{/* ========================================================================= */}
			<div className="container-layout flex-1 py-8 lg:py-10 w-full">
				<div className="lg:flex lg:justify-between lg:gap-8 xl:gap-12">
					
					{/* COLUMNA IZQUIERDA: Terminal Shell Interactiva y Menú de Secciones */}
					<aside className="lg:sticky lg:top-36 lg:max-h-[calc(100vh-10rem)] lg:w-[42%] lg:flex lg:flex-col lg:justify-between pb-8 lg:pb-0 mb-8 lg:mb-0 border-b lg:border-b-0 border-[var(--term-border)]">
						<div className="space-y-6">
							<div className="flex items-center justify-between">
								<span className="section-diagnostic-badge text-[var(--term-accent)] border-green-500/30">
									[SECTION: TERMINAL &amp; MENU]
								</span>
								<span className="text-[11px] text-[var(--term-dim)]">// CLI REPL</span>
							</div>

							<p className="text-xs leading-relaxed text-[var(--term-dim)]">
								{PORTFOLIO_DATA.personal.tagline}
							</p>

							{/* Terminal interactiva de comandos al estilo jcubic */}
							<InteractiveTerminal onNavigate={scrollToSection} />

							{/* Menú de navegación interactivo del CV */}
							<nav className="space-y-1 pt-2">
								<p className="text-[11px] uppercase tracking-widest text-[var(--term-dim)] mb-2 flex items-center justify-between">
									<span>// ÍNDICE DE SECCIONES (CV)</span>
									<span className="text-[10px] text-[var(--term-accent)]">5 SECCIONES DISPONIBLES</span>
								</p>
								{[
									{ id: 'about', label: '01. SÍNTESIS PROFESIONAL', cmd: 'cat 01_sintesis' },
									{ id: 'skills', label: '02. CONOCIMIENTOS TÉCNICOS', cmd: 'cat 02_skills' },
									{ id: 'experience', label: '03. EXPERIENCIA LABORAL', cmd: 'cat 03_experiencia' },
									{ id: 'competencies', label: '04. COMPETENCIAS CLAVE', cmd: 'cat 04_competencias' },
									{ id: 'education', label: '05. ESTUDIOS E IDIOMAS', cmd: 'cat 05_estudios' }
								].map((item) => (
									<a
										key={item.id}
										href={`#${item.id}`}
										onClick={(e) => {
											e.preventDefault();
											scrollToSection(item.id);
										}}
										className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
									>
										<span className="nav-prompt">&gt;</span>
										<span className={`nav-text text-xs tracking-wider ${
											activeSection === item.id ? 'text-terminal-glow font-bold' : 'text-[var(--term-dim)]'
										}`}>
											{item.label}
										</span>
									</a>
								))}
							</nav>
						</div>

						{/* Enlaces a perfiles externos */}
						<div className="pt-4 border-t border-[var(--term-border)] mt-6 flex items-center gap-3">
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="p-2 border border-[var(--term-border)] rounded hover:border-[var(--term-accent)] hover:text-[var(--term-accent)] transition-all bg-[#050806]"
								title="GitHub"
							>
								<GithubIcon size={16} />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="p-2 border border-[var(--term-border)] rounded hover:border-[var(--term-accent)] hover:text-[var(--term-accent)] transition-all bg-[#050806]"
								title="LinkedIn"
							>
								<LinkedinIcon size={16} />
							</a>
							<span className="text-[11px] text-[var(--term-dim)] ml-1">
								// CDMX, MÉXICO
							</span>
						</div>
					</aside>

					{/* COLUMNA DERECHA: Secciones del Currículum (01 al 05) */}
					<main className="lg:w-[58%] space-y-10">

						{/* 01. SÍNTESIS PROFESIONAL */}
						<section id="about" className="section-container scroll-mt-28 space-y-4">
							<div className="flex flex-wrap items-center justify-between pb-3 border-b border-[var(--term-border)] gap-2">
								<h3 className="text-sm text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2 font-bold">
									<TerminalIcon size={16} /> // 01. SÍNTESIS PROFESIONAL
								</h3>
								<span className="section-diagnostic-badge">
									[SEC_01 // perfil.txt]
								</span>
							</div>

							<div className="card-terminal">
								<TypewriterText
									lines={PORTFOLIO_DATA.personal.about}
									speed={10}
									delayBetweenLines={200}
									className="text-xs sm:text-sm leading-relaxed text-[var(--term-text)]"
								/>
							</div>
						</section>

						{/* 02. CONOCIMIENTOS TÉCNICOS */}
						<section id="skills" className="section-container scroll-mt-28 space-y-5">
							<div className="flex flex-wrap items-center justify-between pb-3 border-b border-[var(--term-border)] gap-2">
								<h3 className="text-sm text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2 font-bold">
									<Cpu size={16} /> // 02. CONOCIMIENTOS TÉCNICOS
								</h3>
								<span className="section-diagnostic-badge">
									[SEC_02 // stack_matrix.json]
								</span>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
								{PORTFOLIO_DATA.technicalSkills.map((category, idx) => (
									<div 
										key={idx}
										className="p-3.5 border border-[var(--term-border)] bg-[#050806] rounded hover:border-[var(--term-accent)] transition-all"
									>
										<div className="text-xs font-bold text-[var(--term-accent)] mb-2 flex items-center gap-1.5">
											<span className="text-[var(--term-dim)]">#</span> {category.category}
										</div>
										<div className="flex flex-wrap gap-1.5">
											{category.items.map((item, itemIdx) => (
												<span 
													key={itemIdx}
													className="tag-badge"
												>
													{item}
												</span>
											))}
										</div>
									</div>
								))}
							</div>
						</section>

						{/* 03. EXPERIENCIA LABORAL */}
						<section id="experience" className="section-container scroll-mt-28 space-y-5">
							<div className="flex flex-wrap items-center justify-between pb-3 border-b border-[var(--term-border)] gap-2">
								<h3 className="text-sm text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2 font-bold">
									<Briefcase size={16} /> // 03. EXPERIENCIA LABORAL
								</h3>
								<span className="section-diagnostic-badge">
									[SEC_03 // {PORTFOLIO_DATA.experiences.length} ROLES LOG]
								</span>
							</div>

							<div className="space-y-4">
								{PORTFOLIO_DATA.experiences.map((exp, index) => (
									<div 
										key={index}
										className="card-terminal group"
									>
										{/* Encabezado del rol */}
										<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2 pb-2 border-b border-[var(--term-border)]">
											<div>
												<h4 className="text-sm sm:text-base font-semibold text-[var(--term-glow)] group-hover:text-[var(--term-accent)] transition-colors flex items-center gap-1.5">
													{exp.role} &bull; <span className="text-[var(--term-accent)]">{exp.company}</span>
												</h4>
												<p className="text-xs text-[var(--term-dim)] flex items-center gap-1 mt-0.5">
													<Building2 size={12} /> {exp.location}
												</p>
											</div>
											<span className="text-xs text-[var(--term-dim)] shrink-0 flex items-center gap-1">
												<Calendar size={12} /> {exp.period}
											</span>
										</div>

										{/* Responsabilidades */}
										<ul className="text-xs sm:text-sm text-[var(--term-text)] leading-relaxed mb-3 space-y-1.5">
											{exp.responsibilities.map((resp, ridx) => (
												<li key={ridx} className="flex items-start gap-2">
													<span className="text-[var(--term-accent)] select-none shrink-0 mt-0.5">&gt;</span>
													<span>{resp}</span>
												</li>
											))}
										</ul>

										{/* Tecnologías */}
										<div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--term-border)]">
											{exp.skills.map((skill, sidx) => (
												<span key={sidx} className="tag-badge text-[10px]">
													--{skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}
												</span>
											))}
										</div>
									</div>
								))}
							</div>
						</section>

						{/* 04. COMPETENCIAS */}
						<section id="competencies" className="section-container scroll-mt-28 space-y-4">
							<div className="flex flex-wrap items-center justify-between pb-3 border-b border-[var(--term-border)] gap-2">
								<h3 className="text-sm text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2 font-bold">
									<Award size={16} /> // 04. COMPETENCIAS CLAVE
								</h3>
								<span className="section-diagnostic-badge">
									[SEC_04 // competencias.conf]
								</span>
							</div>

							<div className="p-4 border border-[var(--term-border)] bg-[#050806] rounded">
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
									{PORTFOLIO_DATA.competencies.map((comp, idx) => (
										<div 
											key={idx}
											className="flex items-center gap-2 p-2 bg-black/60 border border-[var(--term-border)] rounded text-[var(--term-glow)]"
										>
											<CheckCircle2 size={13} className="text-[var(--term-accent)] shrink-0" />
											<span>{comp}</span>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* 05. ESTUDIOS E IDIOMAS */}
						<section id="education" className="section-container scroll-mt-28 space-y-5">
							<div className="flex flex-wrap items-center justify-between pb-3 border-b border-[var(--term-border)] gap-2">
								<h3 className="text-sm text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2 font-bold">
									<GraduationCap size={16} /> // 05. FORMACIÓN ACADÉMICA E IDIOMAS
								</h3>
								<span className="section-diagnostic-badge">
									[SEC_05 // academico.log]
								</span>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{/* Educación */}
								<div className="space-y-3">
									<h4 className="text-xs text-[var(--term-dim)] uppercase tracking-wider">
										// ESTUDIOS ACADÉMICOS
									</h4>
									{PORTFOLIO_DATA.education.map((edu, idx) => (
										<div 
											key={idx}
											className="p-3.5 border border-[var(--term-border)] bg-[#050806] rounded"
										>
											<div className="text-xs text-[var(--term-accent)] font-bold mb-1">
												[{edu.date}] &bull; {edu.type}
											</div>
											<div className="text-sm font-semibold text-[var(--term-glow)] mb-1">
												{edu.title}
											</div>
											<div className="text-xs text-[var(--term-dim)]">
												{edu.institution}
											</div>
										</div>
									))}
								</div>

								{/* Idiomas */}
								<div className="space-y-3">
									<h4 className="text-xs text-[var(--term-dim)] uppercase tracking-wider">
										// IDIOMAS Y COMUNICACIÓN
									</h4>
									<div className="p-3.5 border border-[var(--term-border)] bg-[#050806] rounded space-y-2.5">
										{PORTFOLIO_DATA.languages.map((lang, idx) => (
											<div key={idx} className="flex items-center justify-between border-b border-[var(--term-border)] pb-2 last:border-b-0 last:pb-0">
												<div className="flex items-center gap-2 text-sm text-[var(--term-glow)]">
													<Globe size={14} className="text-[var(--term-accent)]" />
													<span>{lang.language}</span>
												</div>
												<span className="text-xs text-[var(--term-accent)] px-2 py-0.5 rounded border border-[var(--term-border)] bg-black">
													{lang.level}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</section>

					</main>
				</div>
			</div>

			{/* ========================================================================= */}
			{/* FOOTER: Apartado 06 Contacto Directo + Aviso de Privacidad y Estado       */}
			{/* ========================================================================= */}
			<footer id="contact" className="border-t-2 border-[var(--term-border)] bg-black pt-10 pb-8 mt-16 scroll-mt-20">
				<div className="container-layout space-y-8">

					{/* Header de sección Footer */}
					<div className="flex flex-wrap items-center justify-between pb-3 border-b border-[var(--term-border)] gap-2">
						<div className="flex items-center gap-2">
							<span className="section-diagnostic-badge border-green-500/40 text-[var(--term-accent)]">
								[FOOTER // CONTACT &amp; LEGAL]
							</span>
							<h3 className="text-sm text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2 font-bold">
								<Mail size={16} /> // 06. CONTACTO DIRECTO
							</h3>
						</div>
						<span className="text-xs text-[var(--term-dim)]">
							ping ersalo123@gmail.com -c 4
						</span>
					</div>

					{/* APARTADO 06: CONTACTO DIRECTO */}
					<div className="card-terminal border-l-4 border-l-[var(--term-accent)] space-y-4">
						<h4 className="text-lg sm:text-xl font-bold text-terminal-glow">
							¿Interesado en mi perfil para proyectos o roles de ingeniería?
						</h4>
						<p className="text-xs sm:text-sm text-[var(--term-dim)] leading-relaxed max-w-3xl">
							Disponible para colaborar en arquitecturas de backend resilientes (Java, Spring Boot, Microservicios), integración de APIs y desarrollo full-stack. Contáctame por correo o llamada telefónica directa:
						</p>
						
						<div className="pt-2 flex flex-wrap gap-3">
							<a
								href={`mailto:${PORTFOLIO_DATA.personal.email}`}
								className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--term-accent)] bg-[var(--term-accent)] text-black hover:bg-[var(--term-glow)] text-xs font-bold rounded transition-all"
							>
								<Mail size={14} /> ENVIAR CORREO: {PORTFOLIO_DATA.personal.email}
							</a>
							<a
								href={`tel:${PORTFOLIO_DATA.personal.phone}`}
								className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--term-border)] hover:border-[var(--term-accent)] text-[var(--term-glow)] hover:bg-[#050806] text-xs rounded transition-all"
							>
								<Phone size={14} /> LLAMAR: {PORTFOLIO_DATA.personal.phone}
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--term-border)] hover:border-[var(--term-accent)] text-[var(--term-glow)] hover:bg-[#050806] text-xs rounded transition-all"
							>
								<ExternalLink size={14} /> LINKEDIN
							</a>
						</div>
					</div>

					{/* AVISO DE PRIVACIDAD */}
					<div className="p-4 border border-[var(--term-border)] bg-[#050806] rounded text-xs space-y-2">
						<div className="flex items-center gap-2 text-[var(--term-accent)] font-bold uppercase tracking-wider text-[11px]">
							<ShieldCheck size={14} /> AVISO DE PRIVACIDAD Y TRATAMIENTO DE DATOS PERSONALES
						</div>
						<p className="text-[var(--term-dim)] leading-relaxed text-[11px]">
							En cumplimiento con las disposiciones de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y estándares de confidencialidad, se hace constar que los datos de contacto y la trayectoria expuesta en este currículum vitae web son compartidos estrictamente para propósitos de reclutamiento profesional, evaluación técnica y oportunidades laborales directas. Ningún dato es transmitido a bases de datos comerciales o terceros ajenos a este propósito.
						</p>
					</div>

					{/* Metadatos y firma de pie de página */}
					<div className="pt-4 border-t border-[var(--term-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--term-dim)]">
						<p>
							&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Todos los derechos reservados.
						</p>
						<p className="flex items-center gap-2">
							<span className="text-[var(--term-accent)]">●</span> Terminal CV Engine // React + TypeScript
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
