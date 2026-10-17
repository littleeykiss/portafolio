import { useState, useEffect } from 'react';
import {
	Mail,
	Phone,
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
	ExternalLink,
	X,
	Maximize2,
	ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from './data';
import { TypewriterText } from './components/TypewriterText';
import { GithubIcon, LinkedinIcon } from './components/SocialIcons';
import './App.css';

type SectionId = 'about' | 'skills' | 'experience' | 'competencies' | 'education' | 'contact' | 'privacy';

export function App() {
	const [activeModal, setActiveModal] = useState<SectionId | null>(null);

	// Cerrar modal con tecla Escape
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setActiveModal(null);
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	// Evitar scroll de fondo cuando hay un modal abierto
	useEffect(() => {
		if (activeModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [activeModal]);

	const navSections = [
		{
			id: 'about' as const,
			number: '01',
			title: 'SÍNTESIS PROFESIONAL',
			desc: 'Perfil senior full-stack, trayectoria de +6 años y especialización técnica',
			file: 'perfil.txt',
			icon: <TerminalIcon size={18} className="text-[var(--term-accent)]" />
		},
		{
			id: 'skills' as const,
			number: '02',
			title: 'CONOCIMIENTOS TÉCNICOS',
			desc: 'Stack de backend (Java/Spring Boot), frontend, BD Oracle/PostgreSQL y DevOps',
			file: 'stack_matrix.json',
			icon: <Cpu size={18} className="text-[var(--term-accent)]" />
		},
		{
			id: 'experience' as const,
			number: '03',
			title: 'EXPERIENCIA LABORAL',
			desc: 'Historial en AT&T, Santander, Pluxee, Banco Azteca, Totalplay y más',
			file: 'experiencia_laboral.log',
			icon: <Briefcase size={18} className="text-[var(--term-accent)]" />
		},
		{
			id: 'competencies' as const,
			number: '04',
			title: 'COMPETENCIAS CLAVE',
			desc: 'Habilidades blandas, liderazgo técnico, metodologías ágiles y resolución',
			file: 'competencias.cfg',
			icon: <Award size={18} className="text-[var(--term-accent)]" />
		},
		{
			id: 'education' as const,
			number: '05',
			title: 'ESTUDIOS E IDIOMAS',
			desc: 'Ingeniería en Sistemas Computacionales, certificaciones e idiomas',
			file: 'academico.log',
			icon: <GraduationCap size={18} className="text-[var(--term-accent)]" />
		},
		{
			id: 'contact' as const,
			number: '06',
			title: 'CONTACTO DIRECTO',
			desc: 'Envío de correo directo, número telefónico y perfiles profesionales',
			file: 'contacto.sh',
			icon: <Mail size={18} className="text-[var(--term-accent)]" />
		}
	];

	return (
		<div className="min-h-screen bg-[var(--term-bg)] text-[var(--term-text)] bg-grid-pattern relative selection:bg-[var(--term-accent)] selection:text-black flex flex-col justify-between font-mono">

			{/* ========================================================================= */}
			{/* HEADER: Identidad, Datos Generales y Host Info                            */}
			{/* ========================================================================= */}
			<header className="border-b border-[var(--term-border)] bg-black/95 sticky top-0 z-40 backdrop-blur-md">
				{/* Barra superior de terminal del sistema */}
				<div className="border-b border-[var(--term-border)]/60 bg-[#060c08] px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-3">
					<div className="flex items-center gap-2">
						<span className="section-diagnostic-badge border-green-500/40 text-[var(--term-accent)]">
							[user: ROOT]
						</span>
						<span className="text-[var(--term-dim)]">// HOST: egsanchezl // OS: Linux 6.8 x86_64</span>
					</div>

				</div>

				{/* Contenido principal del Header: Datos Generales */}
				<div className="container-layout py-5 lg:py-7">
					<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
						<div>

							<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-terminal-glow flex items-center">
								{PORTFOLIO_DATA.personal.name}
								<span className="terminal-cursor-block" title="Cursor activo"></span>
							</h1>

							<p className="text-base sm:text-lg font-semibold text-[var(--term-accent)] mt-1.5">
								&gt; {PORTFOLIO_DATA.personal.title}
							</p>
						</div>
					</div>
				</div>
			</header>

			{/* ========================================================================= */}
			{/* BODY: Terminal Interactiva + Centro de Navegación por Modales             */}
			{/* ========================================================================= */}
			<div className="container-layout flex-1 py-8 lg:py-12 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">

					{/* COLUMNA IZQUIERDA (5 cols): Consola interactiva + Accesos */}
					<div className="lg:col-span-5 space-y-6">


					</div>

					{/* COLUMNA DERECHA (7 cols): Menú de Secciones Interactivas con Modales */}
					<div className="lg:col-span-7 space-y-5">


						{/* Botones de menú que abren los modales */}
						<div className="grid grid-cols-1 gap-3.5">
							{navSections.map((sec) => (
								<button
									key={sec.id}
									type="button"
									onClick={() => setActiveModal(sec.id)}
									className="nav-card-btn group"
								>
									<div className="flex items-start gap-3.5 text-left">
										<div className="p-2 rounded bg-black/60 border border-[var(--term-border)] group-hover:border-[var(--term-accent)] transition-colors mt-0.5">
											{sec.icon}
										</div>
										<div>
											<div className="flex items-center gap-2">
												<span className="nav-prompt">&gt; [{sec.number}]</span>
												<h3 className="nav-title group-hover:text-[var(--term-accent)] transition-colors">
													{sec.title}
												</h3>
											</div>
											<p className="nav-desc mt-1 leading-snug">
												{sec.desc}
											</p>
										</div>
									</div>

									<div className="flex flex-col items-end gap-2 shrink-0 ml-3">
										<span className="nav-badge">
											{sec.file}
										</span>
										<span className="text-xs text-[var(--term-dim)] group-hover:text-[var(--term-accent)] flex items-center gap-0.5 transition-colors">
											Ver <ChevronRight size={13} />
										</span>
									</div>
								</button>
							))}
						</div>
					</div>

				</div>
			</div>

			{/* ========================================================================= */}
			{/* FOOTER: Contacto Rápido y Aviso de Privacidad                             */}
			{/* ========================================================================= */}
			<footer className="border-t-2 border-[var(--term-border)] bg-black pt-8 pb-6 mt-12">
				<div className="container-layout space-y-6">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--term-dim)]">
						<div className="flex items-center gap-4">
							<p>...</p>
							<button
								onClick={() => setActiveModal('privacy')}
								className="hover:text-[var(--term-accent)] transition-colors flex items-center gap-1"
							>
								<ShieldCheck size={13} /> Aviso de Privacidad
							</button>
						</div>

						<p className="mt-2">
							&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Terminal Portfolio OS.
						</p>
					</div>
				</div>
			</footer>

			{/* ========================================================================= */}
			{/* VENTANAS MODALES POR SECCIÓN                                              */}
			{/* ========================================================================= */}
			{activeModal && (
				<div
					className="modal-overlay"
					onClick={() => setActiveModal(null)}
				>
					<div
						className="modal-window"
						onClick={(e) => e.stopPropagation()}
						role="dialog"
						aria-modal="true"
					>
						{/* Barra de título del modal estilo ventana Unix */}
						<div className="modal-header">
							<div className="flex items-center gap-2">
								<span className="term-window-dot bg-red-500/80 cursor-pointer" onClick={() => setActiveModal(null)} title="Cerrar"></span>
								<span className="term-window-dot bg-yellow-500/80" title="Minimizar"></span>
								<span className="term-window-dot bg-green-500/80" title="Maximizar"></span>
								<span className="text-xs font-bold text-[var(--term-glow)] ml-2 flex items-center gap-1.5">
									<Maximize2 size={12} className="text-[var(--term-accent)]" />
									{activeModal === 'about' && 'terminal://01_sintesis_profesional.txt'}
									{activeModal === 'skills' && 'terminal://02_conocimientos_tecnicos.json'}
									{activeModal === 'experience' && 'terminal://03_historial_laboral.log'}
									{activeModal === 'competencies' && 'terminal://04_competencias_clave.cfg'}
									{activeModal === 'education' && 'terminal://05_estudios_e_idiomas.log'}
									{activeModal === 'contact' && 'terminal://06_contacto_directo.sh'}
									{activeModal === 'privacy' && 'terminal://aviso_de_privacidad.txt'}
								</span>
							</div>

							<div className="flex items-center gap-3">
								<span className="text-[10px] text-[var(--term-muted)] hidden sm:inline">[ESC para salir]</span>
								<button
									type="button"
									onClick={() => setActiveModal(null)}
									className="text-[var(--term-dim)] hover:text-red-400 transition-colors p-1"
									aria-label="Cerrar modal"
								>
									<X size={16} />
								</button>
							</div>
						</div>

						{/* Contenido dinámico del modal */}
						<div className="modal-body scrollbar-thin">

							{/* MODAL 01: SÍNTESIS */}
							{activeModal === 'about' && (
								<div className="space-y-5">
									<div className="flex items-center justify-between pb-3 border-b border-[var(--term-border)]">
										<h3 className="text-base font-bold text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
											<TerminalIcon size={18} /> // 01. SÍNTESIS PROFESIONAL
										</h3>
										<span className="section-diagnostic-badge">[SEC_01]</span>
									</div>

									<div className="card-terminal bg-black/70">
										<TypewriterText
											lines={PORTFOLIO_DATA.personal.about}
											speed={8}
											delayBetweenLines={150}
											className="text-xs sm:text-sm leading-relaxed text-[var(--term-text)]"
										/>
									</div>
								</div>
							)}

							{/* MODAL 02: HABILIDADES TÉCNICAS */}
							{activeModal === 'skills' && (
								<div className="space-y-5">
									<div className="flex items-center justify-between pb-3 border-b border-[var(--term-border)]">
										<h3 className="text-base font-bold text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
											<Cpu size={18} /> // 02. CONOCIMIENTOS TÉCNICOS
										</h3>
										<span className="section-diagnostic-badge">[SEC_02]</span>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{PORTFOLIO_DATA.technicalSkills.map((category, idx) => (
											<div
												key={idx}
												className="p-4 border border-[var(--term-border)] bg-[#070e0a] rounded hover:border-[var(--term-accent)] transition-all"
											>
												<div className="text-xs font-bold text-[var(--term-accent)] mb-2.5 flex items-center gap-1.5">
													<span className="text-[var(--term-muted)]">#</span> {category.category}
												</div>
												<div className="flex flex-wrap gap-1.5">
													{category.items.map((item, itemIdx) => (
														<span key={itemIdx} className="tag-badge">
															{item}
														</span>
													))}
												</div>
											</div>
										))}
									</div>
								</div>
							)}

							{/* MODAL 03: EXPERIENCIA LABORAL */}
							{activeModal === 'experience' && (
								<div className="space-y-5">
									<div className="flex items-center justify-between pb-3 border-b border-[var(--term-border)]">
										<h3 className="text-base font-bold text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
											<Briefcase size={18} /> // 03. EXPERIENCIA LABORAL ({PORTFOLIO_DATA.experiences.length} ROLES)
										</h3>
										<span className="section-diagnostic-badge">[SEC_03]</span>
									</div>

									<div className="space-y-4">
										{PORTFOLIO_DATA.experiences.map((exp, index) => (
											<div key={index} className="card-terminal group bg-[#070e0a]">
												<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2 pb-2 border-b border-[var(--term-border)]">
													<div>
														<h4 className="text-sm sm:text-base font-bold text-[var(--term-glow)] group-hover:text-[var(--term-accent)] transition-colors">
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

												<ul className="text-xs sm:text-sm text-[var(--term-text)] leading-relaxed mb-3 space-y-1.5">
													{exp.responsibilities.map((resp, ridx) => (
														<li key={ridx} className="flex items-start gap-2">
															<span className="text-[var(--term-accent)] select-none shrink-0 mt-0.5">&gt;</span>
															<span>{resp}</span>
														</li>
													))}
												</ul>

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
								</div>
							)}

							{/* MODAL 04: COMPETENCIAS */}
							{activeModal === 'competencies' && (
								<div className="space-y-5">
									<div className="flex items-center justify-between pb-3 border-b border-[var(--term-border)]">
										<h3 className="text-base font-bold text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
											<Award size={18} /> // 04. COMPETENCIAS CLAVE
										</h3>
										<span className="section-diagnostic-badge">[SEC_04]</span>
									</div>

									<div className="p-4 border border-[var(--term-border)] bg-[#070e0a] rounded">
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
											{PORTFOLIO_DATA.competencies.map((comp, idx) => (
												<div
													key={idx}
													className="flex items-center gap-2 p-2.5 bg-black/70 border border-[var(--term-border)] rounded text-[var(--term-glow)]"
												>
													<CheckCircle2 size={14} className="text-[var(--term-accent)] shrink-0" />
													<span>{comp}</span>
												</div>
											))}
										</div>
									</div>
								</div>
							)}

							{/* MODAL 05: ESTUDIOS E IDIOMAS */}
							{activeModal === 'education' && (
								<div className="space-y-5">
									<div className="flex items-center justify-between pb-3 border-b border-[var(--term-border)]">
										<h3 className="text-base font-bold text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
											<GraduationCap size={18} /> // 05. FORMACIÓN ACADÉMICA E IDIOMAS
										</h3>
										<span className="section-diagnostic-badge">[SEC_05]</span>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{/* Educación */}
										<div className="space-y-3">
											<h4 className="text-xs text-[var(--term-muted)] uppercase tracking-wider">
												// ESTUDIOS ACADÉMICOS
											</h4>
											{PORTFOLIO_DATA.education.map((edu, idx) => (
												<div
													key={idx}
													className="p-4 border border-[var(--term-border)] bg-[#070e0a] rounded"
												>
													<div className="text-xs text-[var(--term-accent)] font-bold mb-1">
														[{edu.date}] &bull; {edu.type}
													</div>
													<div className="text-sm font-bold text-[var(--term-glow)] mb-1">
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
											<h4 className="text-xs text-[var(--term-muted)] uppercase tracking-wider">
												// IDIOMAS Y COMUNICACIÓN
											</h4>
											<div className="p-4 border border-[var(--term-border)] bg-[#070e0a] rounded space-y-3">
												{PORTFOLIO_DATA.languages.map((lang, idx) => (
													<div key={idx} className="flex items-center justify-between border-b border-[var(--term-border)] pb-2.5 last:border-b-0 last:pb-0">
														<div className="flex items-center gap-2 text-sm text-[var(--term-glow)] font-semibold">
															<Globe size={15} className="text-[var(--term-accent)]" />
															<span>{lang.language}</span>
														</div>
														<span className="text-xs text-[var(--term-accent)] px-2.5 py-0.5 rounded border border-[var(--term-border)] bg-black">
															{lang.level}
														</span>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							)}

							{/* MODAL 06: CONTACTO DIRECTO */}
							{activeModal === 'contact' && (
								<div className="space-y-5">
									<div className="flex items-center justify-between pb-3 border-b border-[var(--term-border)]">
										<h3 className="text-base font-bold text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
											<Mail size={18} /> // 06. CONTACTO DIRECTO
										</h3>
										<span className="section-diagnostic-badge">[SEC_06]</span>
									</div>

									<div className="card-terminal border-l-4 border-l-[var(--term-accent)] space-y-4 bg-[#070e0a]">



										<div className="pt-2 flex flex-wrap gap-3">
											<a
												href={`mailto:${PORTFOLIO_DATA.personal.email}`}
												className="inline-flex items-center gap-2 px-4 py-2.5 border border-[var(--term-accent)] bg-[var(--term-accent)] text-black hover:bg-[var(--term-glow)] text-xs font-bold rounded transition-all"
											>
												<Mail size={14} /> ENVIAR CORREO: {PORTFOLIO_DATA.personal.email}
											</a>
											<a
												href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/[^0-9]/g, '')}`}
												className="inline-flex items-center gap-2 px-4 py-2.5 border border-[var(--term-border)] hover:border-[var(--term-accent)] text-[var(--term-glow)] hover:bg-[#070e0a] text-xs font-bold rounded transition-all"
											>
												<Phone size={14} /> LLAMAR: {PORTFOLIO_DATA.personal.phone}
											</a>
											<a
												href="https://www.linkedin.com/in/egsanchezl/"
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 px-4 py-2.5 border border-[var(--term-border)] hover:border-[var(--term-accent)] text-[var(--term-glow)] hover:bg-[#070e0a] text-xs font-bold rounded transition-all"
											>
												<ExternalLink size={14} /> LINKEDIN
											</a>
										</div>
									</div>
								</div>
							)}

							{/* MODAL: AVISO DE PRIVACIDAD */}
							{activeModal === 'privacy' && (
								<div className="space-y-4">
									<div className="flex items-center justify-between pb-3 border-b border-[var(--term-border)]">
										<h3 className="text-base font-bold text-[var(--term-accent)] uppercase tracking-wider flex items-center gap-2">
											<ShieldCheck size={18} /> // AVISO DE PRIVACIDAD
										</h3>
										<span className="section-diagnostic-badge">[LEGAL]</span>
									</div>

									<div className="p-4 border border-[var(--term-border)] bg-[#070e0a] rounded text-xs space-y-3">
										<p className="text-[var(--term-text)] leading-relaxed">
											En cumplimiento con las disposiciones de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y estándares internacionales de privacidad, se hace constar que los datos de contacto y la trayectoria expuesta en este currículum vitae web son compartidos estrictamente para propósitos de reclutamiento profesional, evaluación técnica y oportunidades laborales directas.
										</p>
										<p className="text-[var(--term-dim)] leading-relaxed">
											Ningún dato es transmitido a bases de datos comerciales o terceros ajenos a este propósito. Para cualquier solicitud de rectificación o eliminación de registros, puedes enviar un correo directo a <span className="text-[var(--term-accent)]">{PORTFOLIO_DATA.personal.email}</span>.
										</p>
									</div>
								</div>
							)}

						</div>

						{/* Footer del modal */}
						<div className="px-4 py-2.5 bg-[#070e0a] border-t border-[var(--term-border)] flex items-center justify-between text-xs text-[var(--term-dim)] select-none">
							<span>Status: 200 OK</span>
						</div>
					</div>
				</div>
			)}

		</div>
	);
}

export default App;
