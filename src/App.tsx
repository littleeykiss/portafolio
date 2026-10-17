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
	Radio,
	Sliders,
	Building2,
	Calendar,
	ShieldAlert,
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
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [crtEnabled, setCrtEnabled] = useState(false);
	const [colorTheme, setColorTheme] = useState<'amber' | 'green' | 'cyan'>('green');

	// Mouse spotlight tracking suave
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

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
		<div 
			data-theme={colorTheme}
			className={`min-h-screen bg-[var(--term-bg)] text-[var(--term-text)] bg-grid-pattern relative selection:bg-[var(--term-accent)] selection:text-black flex flex-col justify-between ${crtEnabled ? 'crt-overlay' : ''}`}
		>
			{/* Spotlight radial mouse gradient */}
			<div 
				className="mouse-spotlight hidden lg:block"
				style={{
					background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--term-accent-rgb), 0.08), transparent 70%)`
				}}
			/>

			{/* ========================================================================= */}
			{/* HEADER PRINCIPAL: Nombre, Datos Generales, Estado y Controles del Sistema */}
			{/* ========================================================================= */}
			<header className="sticky top-0 z-40 bg-[var(--term-bg)]/95 backdrop-blur-md border-b border-[var(--term-border)] shadow-md">
				{/* Barra superior de status y controles */}
				<div className="container-layout py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-[var(--term-border)]/50">
					<div className="flex flex-wrap items-center gap-3">
						<span className="section-diagnostic-badge border-emerald-500/30 text-emerald-400">
							<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
							HEADER // ROOT
						</span>
						<span className="flex items-center gap-1.5 text-[var(--term-accent)] font-semibold font-mono">
							<Radio size={13} className="animate-pulse" />
							{PORTFOLIO_DATA.personal.status}
						</span>
					</div>

					{/* Controles de fósforo y CRT */}
					<div className="flex items-center gap-2">
						<span className="text-[var(--term-dim)] flex items-center gap-1 text-[11px] font-mono">
							<Sliders size={12} /> TEMA:
						</span>
						{(['green', 'amber', 'cyan'] as const).map((theme) => (
							<button
								key={theme}
								onClick={() => setColorTheme(theme)}
								className={`theme-switch-btn font-mono ${colorTheme === theme ? 'active' : ''}`}
							>
								{theme === 'green' ? '● Verde' : theme === 'amber' ? '● Ámbar' : '● Cian'}
							</button>
						))}

						<button
							onClick={() => setCrtEnabled(!crtEnabled)}
							className={`theme-switch-btn font-mono ml-1 ${crtEnabled ? 'active' : ''}`}
							title="Alternar filtro retro CRT Scanlines"
						>
							CRT: {crtEnabled ? 'ON' : 'OFF'}
						</button>
					</div>
				</div>

				{/* Tarjeta de Datos Generales del Candidato */}
				<div className="container-layout py-4 lg:py-5">
					<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
						<div>
							<div className="text-xs text-[var(--term-dim)] mb-1 flex items-center gap-1.5 font-mono">
								<span className="text-[var(--term-accent)]">system@root</span>
								<span>:</span>
								<span className="text-blue-400">~/datos-generales</span>
								<span className="text-[var(--term-dim)]">$ id --full</span>
							</div>
							<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--term-glow)] font-mono">
								{PORTFOLIO_DATA.personal.name}
							</h1>
							<p className="text-sm sm:text-base font-medium text-[var(--term-accent)] tracking-wide font-mono mt-1">
								{PORTFOLIO_DATA.personal.title}
							</p>
						</div>

						{/* Metadatos generales y enlaces de contacto directo */}
						<div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--term-dim)] bg-black/40 border border-[var(--term-border)] px-4 py-2.5 rounded-md">
							<div className="flex items-center gap-1.5">
								<MapPin size={13} className="text-[var(--term-accent)]" />
								<span>{PORTFOLIO_DATA.personal.location}</span>
							</div>
							<span className="text-[var(--term-border)] hidden sm:inline">|</span>
							<a 
								href={`mailto:${PORTFOLIO_DATA.personal.email}`}
								className="flex items-center gap-1.5 hover:text-[var(--term-accent)] transition-colors"
							>
								<Mail size={13} className="text-[var(--term-accent)]" />
								<span>{PORTFOLIO_DATA.personal.email}</span>
							</a>
							<span className="text-[var(--term-border)] hidden sm:inline">|</span>
							<a 
								href={`tel:${PORTFOLIO_DATA.personal.phone}`}
								className="flex items-center gap-1.5 hover:text-[var(--term-accent)] transition-colors"
							>
								<Phone size={13} className="text-[var(--term-accent)]" />
								<span>{PORTFOLIO_DATA.personal.phone}</span>
							</a>
						</div>
					</div>
				</div>
			</header>

			{/* ========================================================================= */}
			{/* BODY: Terminal interactiva + Índice de Navegación + Secciones de CV       */}
			{/* ========================================================================= */}
			<div className="container-layout flex-1 py-8 lg:py-12 w-full">
				<div className="lg:flex lg:justify-between lg:gap-10 xl:gap-14">
					
					{/* COLUMNA IZQUIERDA: Terminal y Navegación Sticky en Desktop */}
					<aside className="lg:sticky lg:top-40 lg:max-h-[calc(100vh-11rem)] lg:w-[42%] lg:flex lg:flex-col lg:justify-between pb-8 lg:pb-0 mb-8 lg:mb-0 border-b lg:border-b-0 border-[var(--term-border)]">
						<div className="space-y-6">
							<div className="flex items-center justify-between">
								<span className="section-diagnostic-badge text-cyan-400 border-cyan-500/30">
									SECTION // TERMINAL &amp; NAV
								</span>
								<span className="text-[11px] font-mono text-[var(--term-dim)]">CLI v2.4</span>
							</div>

							<p className="text-xs sm:text-sm leading-relaxed text-[var(--term-dim)] font-mono">
								{PORTFOLIO_DATA.personal.tagline}
							</p>

							{/* Terminal interactiva */}
							<div className="border border-[var(--term-border)] rounded-md overflow-hidden bg-black/60 shadow-lg">
								<InteractiveTerminal
									onNavigate={scrollToSection}
									onToggleCrt={() => setCrtEnabled(!crtEnabled)}
									crtEnabled={crtEnabled}
									onColorThemeChange={setColorTheme}
									activeTheme={colorTheme}
								/>
							</div>

							{/* Menú de navegación interactivo */}
							<nav className="space-y-1 pt-2">
								<p className="text-[11px] uppercase tracking-widest text-[var(--term-dim)] mb-3 font-mono flex items-center justify-between">
									<span>// ÍNDICE DEL CV</span>
									<span className="text-[10px] text-[var(--term-accent)]">5 SECCIONES ACTIVAS</span>
								</p>
								{[
									{ id: 'about', label: '01. SÍNTESIS PROFESIONAL' },
									{ id: 'skills', label: '02. CONOCIMIENTOS TÉCNICOS' },
									{ id: 'experience', label: '03. EXPERIENCIA LABORAL' },
									{ id: 'competencies', label: '04. COMPETENCIAS' },
									{ id: 'education', label: '05. ESTUDIOS E IDIOMAS' }
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
										<span className="nav-indicator" />
										<span className={`nav-text text-xs tracking-widest font-mono ${
											activeSection === item.id ? 'text-[var(--term-glow)] font-bold' : 'text-[var(--term-dim)]'
										}`}>
											{item.label}
										</span>
									</a>
								))}
							</nav>
						</div>

						{/* Enlaces a perfiles externos */}
						<div className="pt-6 border-t border-[var(--term-border)] mt-6 flex items-center gap-3">
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="p-2 border border-[var(--term-border)] rounded hover:border-[var(--term-accent)] hover:text-[var(--term-glow)] transition-all bg-[var(--term-panel-bg)]"
								title="Perfil en GitHub"
							>
								<GithubIcon size={16} />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="p-2 border border-[var(--term-border)] rounded hover:border-[var(--term-accent)] hover:text-[var(--term-glow)] transition-all bg-[var(--term-panel-bg)]"
								title="Perfil en LinkedIn"
							>
								<LinkedinIcon size={16} />
							</a>
							<span className="text-[11px] text-[var(--term-dim)] font-mono ml-1">
								// CDMX, MÉXICO
							</span>
						</div>
					</aside>

					{/* COLUMNA DERECHA: Todo el Contenido del CV (01 al 05) */}
					<main className="lg:w-[58%] space-y-12">

						{/* 01. SÍNTESIS */}
						<section id="about" className="section-container scroll-mt-28 space-y-4">
							<div className="flex flex-wrap items-center justify-between pb-3 border-b border-[var(--term-border)] gap-2">
								<h3 className="text-sm font-mono text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
									<TerminalIcon size={16} /> // 01. SÍNTESIS PROFESIONAL
								</h3>
								<span className="section-diagnostic-badge">
									SECTION #01 &bull; perfil.txt
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
						<section id="skills" className="section-container scroll-mt-28 space-y-6">
							<div className="flex flex-wrap items-center justify-between pb-3 border-b border-[var(--term-border)] gap-2">
								<h3 className="text-sm font-mono text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
									<Cpu size={16} /> // 02. CONOCIMIENTOS TÉCNICOS
								</h3>
								<span className="section-diagnostic-badge">
									SECTION #02 &bull; stack_matrix.json
								</span>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{PORTFOLIO_DATA.technicalSkills.map((category, idx) => (
									<div 
										key={idx}
										className="p-4 border border-[var(--term-border)] bg-[var(--term-panel-bg)] rounded-md hover:border-[var(--term-accent)] transition-all"
									>
										<div className="text-xs font-mono font-bold text-[var(--term-accent)] mb-2.5 flex items-center gap-1.5">
											<span className="text-[var(--term-dim)]">&gt;</span> {category.category}
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
						<section id="experience" className="section-container scroll-mt-28 space-y-6">
							<div className="flex flex-wrap items-center justify-between pb-3 border-b border-[var(--term-border)] gap-2">
								<h3 className="text-sm font-mono text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
									<Briefcase size={16} /> // 03. EXPERIENCIA LABORAL
								</h3>
								<span className="section-diagnostic-badge">
									SECTION #03 &bull; {PORTFOLIO_DATA.experiences.length} ROLES LOG
								</span>
							</div>

							<div className="space-y-6">
								{PORTFOLIO_DATA.experiences.map((exp, index) => (
									<div 
										key={index}
										className="card-terminal group"
									>
										{/* Encabezado del puesto */}
										<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2 pb-2 border-b border-[var(--term-border)]">
											<div>
												<h4 className="text-sm sm:text-base font-semibold text-[var(--term-glow)] group-hover:text-[var(--term-accent)] transition-colors flex items-center gap-1.5 font-mono">
													{exp.role} &bull; <span className="text-[var(--term-accent)]">{exp.company}</span>
												</h4>
												<p className="text-xs text-[var(--term-dim)] font-mono flex items-center gap-1 mt-0.5">
													<Building2 size={12} /> {exp.location}
												</p>
											</div>
											<span className="text-xs font-mono text-[var(--term-dim)] shrink-0 flex items-center gap-1">
												<Calendar size={12} /> {exp.period}
											</span>
										</div>

										{/* Lista de responsabilidades detalladas */}
										<ul className="text-xs sm:text-sm text-[var(--term-text)] leading-relaxed mb-4 space-y-2 font-mono">
											{exp.responsibilities.map((resp, ridx) => (
												<li key={ridx} className="flex items-start gap-2">
													<span className="text-[var(--term-accent)] select-none shrink-0 mt-0.5">▸</span>
													<span>{resp}</span>
												</li>
											))}
										</ul>

										{/* Etiquetas de tecnologías */}
										<div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--term-border)]">
											{exp.skills.map((skill, sidx) => (
												<span key={sidx} className="tag-badge text-[10px]">
													{skill}
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
								<h3 className="text-sm font-mono text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
									<Award size={16} /> // 04. COMPETENCIAS CLAVE
								</h3>
								<span className="section-diagnostic-badge">
									SECTION #04 &bull; soft_skills.cfg
								</span>
							</div>

							<div className="p-4 border border-[var(--term-border)] bg-[var(--term-panel-bg)] rounded-md">
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 font-mono text-xs">
									{PORTFOLIO_DATA.competencies.map((comp, idx) => (
										<div 
											key={idx}
											className="flex items-center gap-2 p-2.5 bg-black/40 border border-[var(--term-border)] rounded text-[var(--term-glow)]"
										>
											<CheckCircle2 size={14} className="text-[var(--term-accent)] shrink-0" />
											<span>{comp}</span>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* 05. ESTUDIOS E IDIOMAS */}
						<section id="education" className="section-container scroll-mt-28 space-y-6">
							<div className="flex flex-wrap items-center justify-between pb-3 border-b border-[var(--term-border)] gap-2">
								<h3 className="text-sm font-mono text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
									<GraduationCap size={16} /> // 05. FORMACIÓN ACADÉMICA E IDIOMAS
								</h3>
								<span className="section-diagnostic-badge">
									SECTION #05 &bull; academic.log
								</span>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{/* Educación */}
								<div className="space-y-4">
									<h4 className="text-xs font-mono text-[var(--term-dim)] uppercase tracking-wider">
										// ESTUDIOS
									</h4>
									{PORTFOLIO_DATA.education.map((edu, idx) => (
										<div 
											key={idx}
											className="p-4 border border-[var(--term-border)] bg-[var(--term-panel-bg)] rounded-md font-mono"
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
								<div className="space-y-4">
									<h4 className="text-xs font-mono text-[var(--term-dim)] uppercase tracking-wider">
										// IDIOMAS
									</h4>
									<div className="p-4 border border-[var(--term-border)] bg-[var(--term-panel-bg)] rounded-md font-mono space-y-3">
										{PORTFOLIO_DATA.languages.map((lang, idx) => (
											<div key={idx} className="flex items-center justify-between border-b border-[var(--term-border)] pb-2 last:border-b-0 last:pb-0">
												<div className="flex items-center gap-2 text-sm text-[var(--term-glow)]">
													<Globe size={14} className="text-[var(--term-accent)]" />
													<span>{lang.language}</span>
												</div>
												<span className="text-xs text-[var(--term-accent)] px-2 py-0.5 rounded border border-[var(--term-border)] bg-black/40">
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
			{/* FOOTER: Apartado 06 Contacto Directo + Aviso de Privacidad y Diagnóstico  */}
			{/* ========================================================================= */}
			<footer id="contact" className="border-t-2 border-[var(--term-border)] bg-black/80 backdrop-blur-md pt-12 pb-8 mt-16 scroll-mt-20">
				<div className="container-layout space-y-10">

					{/* Badge de sección Footer para diagnóstico visual */}
					<div className="flex flex-wrap items-center justify-between pb-3 border-b border-[var(--term-border)] gap-2">
						<div className="flex items-center gap-2">
							<span className="section-diagnostic-badge border-purple-500/30 text-purple-400">
								FOOTER // CONTACT &amp; LEGAL
							</span>
							<h3 className="text-sm font-mono text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
								<Mail size={16} /> // 06. CONTACTO DIRECTO
							</h3>
						</div>
						<span className="text-xs font-mono text-[var(--term-dim)]">
							host: ping erik.sanchez
						</span>
					</div>

					{/* APARTADO 06: CONTACTO DIRECTO */}
					<div className="card-terminal border-l-4 border-l-[var(--term-accent)] space-y-4 font-mono">
						<h4 className="text-lg sm:text-xl font-bold text-[var(--term-glow)]">
							¿Listo para colaborar o incorporar talento senior full-stack?
						</h4>
						<p className="text-xs sm:text-sm text-[var(--term-dim)] leading-relaxed max-w-3xl">
							Disponible para proyectos desafiantes en microservicios, backend de misión crítica con Java/Spring Boot o desarrollo full-stack integral. Envíame un mensaje directo o contáctame vía telefónica.
						</p>
						
						<div className="pt-2 flex flex-wrap gap-4">
							<a
								href={`mailto:${PORTFOLIO_DATA.personal.email}`}
								className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--term-accent)] bg-[var(--term-tag-bg)] text-[var(--term-tag-text)] hover:bg-[var(--term-accent)] hover:text-black text-xs font-bold rounded transition-all shadow-md"
							>
								<Mail size={15} /> ENVIAR CORREO: {PORTFOLIO_DATA.personal.email}
							</a>
							<a
								href={`tel:${PORTFOLIO_DATA.personal.phone}`}
								className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--term-border)] hover:border-[var(--term-accent)] text-[var(--term-glow)] hover:bg-black/50 text-xs rounded transition-all"
							>
								<Phone size={15} /> LLAMAR: {PORTFOLIO_DATA.personal.phone}
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--term-border)] hover:border-[var(--term-accent)] text-[var(--term-glow)] hover:bg-black/50 text-xs rounded transition-all"
							>
								<ExternalLink size={15} /> PERFIL LINKEDIN
							</a>
						</div>
					</div>

					{/* AVISO DE PRIVACIDAD */}
					<div className="p-5 border border-amber-500/30 bg-amber-950/10 rounded-md font-mono text-xs space-y-2">
						<div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
							<ShieldAlert size={14} /> AVISO DE PRIVACIDAD Y PROTECCIÓN DE DATOS
						</div>
						<p className="text-[var(--term-dim)] leading-relaxed text-[11px]">
							De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y normativas aplicables, los datos de contacto y antecedentes profesionales presentados en este portafolio son de carácter curricular y profesional para fines exclusivos de contacto laboral, reclutamiento y consultoría técnica. La información aquí contenida no será compartida, comercializada ni cedida a terceros sin consentimiento previo expreso.
						</p>
					</div>

					{/* Pie de página con copyright y metadatos del build */}
					<div className="pt-6 border-t border-[var(--term-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--term-dim)]">
						<p>
							&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Todos los derechos reservados.
						</p>
						<p className="flex items-center gap-2">
							<span className="text-[var(--term-accent)]">●</span> React + TypeScript + TailwindCSS // Terminal Engine
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
