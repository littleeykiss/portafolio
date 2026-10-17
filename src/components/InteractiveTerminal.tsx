import { useState, useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import { Terminal, Send, Trash2 } from 'lucide-react';

interface InteractiveTerminalProps {
	onNavigate: (sectionId: string) => void;
}

export const InteractiveTerminal = ({ onNavigate }: InteractiveTerminalProps) => {
	const [input, setInput] = useState('');
	const [history, setHistory] = useState<Array<{ text: string; type: 'cmd' | 'output' | 'error' | 'success' }>>([
		{ text: '═════════════════════════════════════════════════════════════════════════', type: 'output' },
		{ text: ' Erik Gpe. Sánchez López // Terminal CLI Emulator (Bash v5.2)', type: 'success' },
		{ text: ' Type "help" or "ls" to view all available interactive commands.', type: 'output' },
		{ text: '═════════════════════════════════════════════════════════════════════════', type: 'output' }
	]);
	const bottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [history]);

	const handleCommand = (e: FormEvent) => {
		e.preventDefault();
		const trimmed = input.trim().toLowerCase();
		if (!trimmed) return;

		const newHistory = [...history, { text: `guest@erik-terminal:~$ ${input}`, type: 'cmd' as const }];
		const [cmd, ...args] = trimmed.split(' ');

		switch (cmd) {
			case 'help':
				newHistory.push({
					text: `Available commands:
  cat <section>     Read section: about, skills, exp, education, contact
  goto <section>    Navigate directly to section on page
  whoami            Print engineer overview
  skills            Print technical stack matrix
  exp               Print career timeline & positions
  contact           Print email, phone, location & profiles
  ls                List readable sections and files
  clear, cls        Clear console buffer`,
					type: 'output'
				});
				break;

			case 'ls':
				newHistory.push({
					text: `drwxr-xr-x 01_sintesis_profesional/
drwxr-xr-x 02_conocimientos_tecnicos/
drwxr-xr-x 03_experiencia_laboral/
drwxr-xr-x 04_competencias/
drwxr-xr-x 05_estudios_idiomas/
-rw-r--r-- 06_contacto_directo.txt
-rw-r--r-- aviso_privacidad.txt`,
					type: 'output'
				});
				break;

			case 'whoami':
				newHistory.push({
					text: `Erik Guadalupe Sánchez López - Ingeniero en Sistemas / Senior Full-Stack (+6 años de exp). Especialista en Backend Java, Spring Boot, Microservicios y Frontend moderno.`,
					type: 'success'
				});
				break;

			case 'skills':
				newHistory.push({
					text: `• Backend: Java, Spring Boot, Spring Batch, JPA, REST APIs, Microservicios
• Frontend: React, Angular, VueJS, TypeScript, Tailwind/CSS
• Bases de datos: Oracle PL/SQL, PostgreSQL, Query Tuning
• DevOps/Tools: Docker, Jenkins, SonarQube, Bitbucket, Azure, JUnit`,
					type: 'output'
				});
				onNavigate('skills');
				break;

			case 'exp':
				newHistory.push({
					text: `• AT&T - Ing. Desarrollo (Microservicios, APIs, Oracle, Java)
• Santander / Bside - Consultor Sr. (Microservicios, Spring Boot, Apigee)
• Pluxee - Especialista de Desarrollo (Java, Spring, Angular)
• Banco Azteca - Desarrollador (Sistemas bancarios críticos)
• Totalplay / AFORE Coppel - Desarrollo & Soporte`,
					type: 'output'
				});
				onNavigate('experience');
				break;

			case 'cat':
			case 'goto': {
				const target = args[0];
				if (target === 'about' || target === 'sintesis' || target === '01') {
					onNavigate('about');
					newHistory.push({ text: `Viewing [01. Síntesis Profesional]...`, type: 'success' });
				} else if (target === 'skills' || target === 'tecnicos' || target === '02') {
					onNavigate('skills');
					newHistory.push({ text: `Viewing [02. Conocimientos Técnicos]...`, type: 'success' });
				} else if (target === 'exp' || target === 'experience' || target === '03') {
					onNavigate('experience');
					newHistory.push({ text: `Viewing [03. Experiencia Laboral]...`, type: 'success' });
				} else if (target === 'competencies' || target === '04') {
					onNavigate('competencies');
					newHistory.push({ text: `Viewing [04. Competencias Clave]...`, type: 'success' });
				} else if (target === 'education' || target === '05') {
					onNavigate('education');
					newHistory.push({ text: `Viewing [05. Formación y Educación]...`, type: 'success' });
				} else if (target === 'contact' || target === '06') {
					onNavigate('contact');
					newHistory.push({ text: `Viewing [06. Contacto Directo]...`, type: 'success' });
				} else {
					newHistory.push({
						text: `Section "${target || ''}" not found. Try: about, skills, exp, competencies, education, contact`,
						type: 'error'
					});
				}
				break;
			}

			case 'about':
				onNavigate('about');
				newHistory.push({ text: `Erik Sánchez: Ingeniero en Sistemas (+6 años exp en desarrollo Full-Stack).`, type: 'output' });
				break;

			case 'contact':
				onNavigate('contact');
				newHistory.push({
					text: `[CONTACT INFO]
Email: ersalo123@gmail.com
Teléfono: 5652162711
Ubicación: Ciudad de México, México
LinkedIn: linkedin.com/in/erik-sanchez`,
					type: 'success'
				});
				break;

			case 'clear':
			case 'cls':
				setHistory([]);
				setInput('');
				return;

			default:
				newHistory.push({ text: `bash: command not found: ${cmd}. Type "help" for command list.`, type: 'error' });
				break;
		}

		setHistory(newHistory);
		setInput('');
	};

	return (
		<div className="terminal-box bg-black border border-[var(--term-border)] rounded overflow-hidden font-mono text-xs">
			{/* Barra superior estilo jcubic terminal */}
			<div className="term-window-header select-none">
				<div className="flex items-center gap-1.5">
					<span className="term-window-dot bg-red-500/80"></span>
					<span className="term-window-dot bg-yellow-500/80"></span>
					<span className="term-window-dot bg-green-500/80"></span>
					<span className="text-[var(--term-glow)] font-bold ml-1 flex items-center gap-1">
						<Terminal size={12} className="text-[var(--term-accent)]" /> bash - 80x24
					</span>
				</div>
				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={() => setHistory([])}
						className="text-[var(--term-dim)] hover:text-red-400 flex items-center gap-1 transition-colors"
						title="Limpiar consola (clear)"
					>
						<Trash2 size={11} /> clear
					</button>
				</div>
			</div>

			{/* Contenedor de logs con auto-scroll */}
			<div className="p-3.5 bg-black/95">
				<div className="max-h-56 overflow-y-auto space-y-1 scrollbar-thin text-xs mb-3 font-mono leading-relaxed">
					{history.map((item, idx) => (
						<div
							key={idx}
							className={`whitespace-pre-wrap ${
								item.type === 'cmd'
									? 'text-[var(--term-glow)] font-semibold'
									: item.type === 'error'
									? 'text-red-400 font-medium'
									: item.type === 'success'
									? 'text-[var(--term-accent)]'
									: 'text-[var(--term-text)]'
							}`}
						>
							{item.text}
						</div>
					))}
					<div ref={bottomRef} />
				</div>

				{/* Input interactivo prompt de terminal */}
				<form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-[var(--term-border)] pt-2.5">
					<span className="text-[var(--term-accent)] font-semibold select-none">guest@erik-terminal:~$</span>
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="help, whoami, skills, exp, contact..."
						className="flex-1 bg-transparent border-none outline-none text-[var(--term-glow)] placeholder-[var(--term-dim)] font-mono text-xs caret-[var(--term-accent)]"
						autoComplete="off"
						spellCheck="false"
					/>
					<button
						type="submit"
						aria-label="Ejecutar comando"
						className="px-2 py-0.5 border border-[var(--term-border)] text-[var(--term-dim)] hover:text-[var(--term-accent)] hover:border-[var(--term-accent)] transition-colors rounded text-[11px] flex items-center gap-1"
					>
						<Send size={11} />
					</button>
				</form>
			</div>
		</div>
	);
};
