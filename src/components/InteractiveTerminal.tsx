import { useState, useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import { Terminal, Send, Trash2 } from 'lucide-react';

interface InteractiveTerminalProps {
	onOpenSection: (sectionId: string) => void;
}

export const InteractiveTerminal = ({ onOpenSection }: InteractiveTerminalProps) => {
	const [input, setInput] = useState('');
	const [history, setHistory] = useState<Array<{ text: string; type: 'cmd' | 'output' | 'error' | 'success' }>>([
		{ text: '═════════════════════════════════════════════════════════════════════════', type: 'output' },
		{ text: ' Erik Gpe. Sánchez López // Terminal CLI Emulator (Bash v5.2)', type: 'success' },
		{ text: ' Escribe "help", "ls" o "open <seccion>" para abrir las ventanas modales.', type: 'output' },
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
					text: `COMANDOS DISPONIBLES:
  open <seccion>    Abre modal: about, skills, exp, competencies, education, contact
  cat <seccion>     Alias de open para desplegar contenido en ventana
  ls                Lista las secciones interactivas disponibles
  whoami            Información sintetizada del perfil
  clear, cls        Limpia el buffer de la consola`,
					type: 'output'
				});
				break;

			case 'ls':
				newHistory.push({
					text: `drwxr-xr-x [01] about/          (Síntesis Profesional)
drwxr-xr-x [02] skills/         (Conocimientos Técnicos)
drwxr-xr-x [03] exp/            (Experiencia Laboral)
drwxr-xr-x [04] competencies/   (Competencias Clave)
drwxr-xr-x [05] education/      (Estudios e Idiomas)
-rw-r--r-- [06] contact.txt     (Contacto Directo)`,
					type: 'output'
				});
				break;

			case 'whoami':
				newHistory.push({
					text: `Erik Guadalupe Sánchez López - Ingeniero en Sistemas (+6 años exp). Especialista Backend Java, Spring Boot, Microservicios y Frontend moderno.`,
					type: 'success'
				});
				break;

			case 'open':
			case 'cat':
			case 'goto': {
				const target = args[0];
				if (target === 'about' || target === 'sintesis' || target === '01') {
					onOpenSection('about');
					newHistory.push({ text: `Abriendo modal [01. Síntesis Profesional]...`, type: 'success' });
				} else if (target === 'skills' || target === 'tecnicos' || target === '02') {
					onOpenSection('skills');
					newHistory.push({ text: `Abriendo modal [02. Conocimientos Técnicos]...`, type: 'success' });
				} else if (target === 'exp' || target === 'experience' || target === '03') {
					onOpenSection('experience');
					newHistory.push({ text: `Abriendo modal [03. Experiencia Laboral]...`, type: 'success' });
				} else if (target === 'competencies' || target === 'competencias' || target === '04') {
					onOpenSection('competencies');
					newHistory.push({ text: `Abriendo modal [04. Competencias Clave]...`, type: 'success' });
				} else if (target === 'education' || target === 'estudios' || target === '05') {
					onOpenSection('education');
					newHistory.push({ text: `Abriendo modal [05. Formación y Educación]...`, type: 'success' });
				} else if (target === 'contact' || target === 'contacto' || target === '06') {
					onOpenSection('contact');
					newHistory.push({ text: `Abriendo modal [06. Contacto Directo]...`, type: 'success' });
				} else {
					newHistory.push({
						text: `Sección no reconocida. Opciones: about, skills, exp, competencies, education, contact`,
						type: 'error'
					});
				}
				break;
			}

			case 'about':
				onOpenSection('about');
				newHistory.push({ text: `Desplegando modal de Síntesis...`, type: 'success' });
				break;

			case 'skills':
				onOpenSection('skills');
				newHistory.push({ text: `Desplegando modal de Habilidades...`, type: 'success' });
				break;

			case 'exp':
				onOpenSection('experience');
				newHistory.push({ text: `Desplegando modal de Experiencia...`, type: 'success' });
				break;

			case 'contact':
				onOpenSection('contact');
				newHistory.push({ text: `Desplegando modal de Contacto...`, type: 'success' });
				break;

			case 'clear':
			case 'cls':
				setHistory([]);
				setInput('');
				return;

			default:
				newHistory.push({ text: `bash: comando no encontrado: ${cmd}. Escribe "help".`, type: 'error' });
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
						<Terminal size={12} className="text-[var(--term-accent)]" /> bash - 80x24 (Interactivo)
					</span>
				</div>
				<button
					type="button"
					onClick={() => setHistory([])}
					className="text-[var(--term-dim)] hover:text-red-400 flex items-center gap-1 transition-colors"
					title="Limpiar consola (clear)"
				>
					<Trash2 size={11} /> clear
				</button>
			</div>

			{/* Contenedor de logs con auto-scroll */}
			<div className="p-3.5 bg-black/95">
				<div className="max-h-48 overflow-y-auto space-y-1 scrollbar-thin text-xs mb-3 font-mono leading-relaxed">
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
						placeholder="help, open skills, exp, contact..."
						className="flex-1 bg-transparent border-none outline-none text-[var(--term-glow)] placeholder-[var(--term-muted)] font-mono text-xs caret-[var(--term-accent)]"
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
