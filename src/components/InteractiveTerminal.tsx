import { useState, useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import { Terminal, Send } from 'lucide-react';

interface InteractiveTerminalProps {
	onNavigate: (sectionId: string) => void;
	onToggleCrt: () => void;
	crtEnabled: boolean;
	onColorThemeChange: (theme: 'amber' | 'green' | 'cyan') => void;
	activeTheme: string;
}

export const InteractiveTerminal = ({
	onNavigate,
	onToggleCrt,
	crtEnabled,
	onColorThemeChange,
	activeTheme
}: InteractiveTerminalProps) => {
	const [input, setInput] = useState('');
	const [history, setHistory] = useState<Array<{ text: string; type: 'cmd' | 'output' | 'error' | 'success' }>>([
		{ text: 'SISTEMA INICIALIZADO [Terminal de Erik Gpe. Sánchez López]', type: 'output' },
		{ text: 'Escribe "help" para ver los comandos disponibles.', type: 'success' }
	]);
	const [isExpanded, setIsExpanded] = useState(false);
	const bottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isExpanded) {
			bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
		}
	}, [history, isExpanded]);

	const handleCommand = (e: FormEvent) => {
		e.preventDefault();
		const trimmed = input.trim().toLowerCase();
		if (!trimmed) return;

		const newHistory = [...history, { text: `$ ${input}`, type: 'cmd' as const }];
		const [cmd, ...args] = trimmed.split(' ');

		switch (cmd) {
			case 'help':
				newHistory.push({
					text: `COMANDOS DE NAVEGACIÓN Y SISTEMA:
  goto <seccion>   - Secciones: about, skills, experience, education, contact
  about            - Resumen profesional
  skills           - Ver resumen de stack técnico
  exp              - Ver empresas donde he colaborado
  theme <color>    - Cambia el fósforo: amber, green, cyan
  crt              - Alterna el efecto CRT / Scanlines
  contact          - Teléfono y correo de contacto
  clear            - Limpia la consola`,
					type: 'output'
				});
				break;

			case 'goto': {
				const target = args[0];
				if (['about', 'skills', 'experience', 'education', 'contact'].includes(target)) {
					onNavigate(target);
					newHistory.push({ text: `Desplazando hacia [#${target}]...`, type: 'success' });
				} else {
					newHistory.push({ text: `Sección no válida. Opciones: about, skills, experience, education, contact`, type: 'error' });
				}
				break;
			}

			case 'about':
				onNavigate('about');
				newHistory.push({ text: `Erik Sánchez: Ingeniero en Sistemas (+6 años de exp). Backend Java/Spring Boot & Frontend moderno.`, type: 'output' });
				break;

			case 'skills':
				onNavigate('skills');
				newHistory.push({ text: `Java, Spring Boot, Spring Batch, Oracle, PostgreSQL, React, Angular, VueJS, SonarQube, APIs REST`, type: 'output' });
				break;

			case 'exp':
				onNavigate('experience');
				newHistory.push({ text: `Empresas: AT&T, Santander, Pluxee, Banco Azteca, Totalplay, AFORE Coppel, Constructora Colinas del Parque`, type: 'output' });
				break;

			case 'theme': {
				const themeColor = args[0];
				if (['amber', 'green', 'cyan'].includes(themeColor)) {
					onColorThemeChange(themeColor as 'amber' | 'green' | 'cyan');
					newHistory.push({ text: `Fósforo cambiado a [${themeColor.toUpperCase()}].`, type: 'success' });
				} else {
					newHistory.push({ text: `Color inválido. Usa: amber, green, o cyan`, type: 'error' });
				}
				break;
			}

			case 'crt':
				onToggleCrt();
				newHistory.push({ text: `Filtro CRT ${!crtEnabled ? 'ACTIVADO' : 'DESACTIVADO'}.`, type: 'output' });
				break;

			case 'contact':
				onNavigate('contact');
				newHistory.push({ text: `Tel: 5652162711 | Email: ersalo123@gmail.com | CDMX`, type: 'success' });
				break;

			case 'clear':
			case 'cls':
				setHistory([]);
				setInput('');
				return;

			default:
				newHistory.push({ text: `Comando desconocido: "${cmd}". Escribe "help".`, type: 'error' });
				break;
		}

		setHistory(newHistory);
		setInput('');
	};

	return (
		<div className="terminal-widget my-6 border border-[var(--term-border)] bg-[var(--term-panel-bg)] rounded-md overflow-hidden font-mono shadow-md">
			<div className="terminal-header flex items-center justify-between px-3 py-2 bg-[var(--term-header-bg)] border-b border-[var(--term-border)] text-xs select-none">
				<div className="flex items-center gap-2">
					<span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setHistory([])} title="Limpiar"></span>
					<span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-500/80 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} title="Minimizar"></span>
					<span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500/80 cursor-pointer" onClick={onToggleCrt} title="CRT On/Off"></span>
					<span className="ml-1.5 flex items-center gap-1 font-bold tracking-wider text-[var(--term-accent)]">
						<Terminal size={13} /> TERMINAL_SHELL: ~/cv-erik
					</span>
				</div>
				<div className="flex items-center gap-2 text-[11px] text-[var(--term-dim)]">
					<span className="uppercase text-[10px]">TEMA: {activeTheme}</span>
					<button 
						type="button" 
						onClick={() => setIsExpanded(!isExpanded)} 
						className="hover:text-[var(--term-accent)] transition-colors underline cursor-pointer"
					>
						{isExpanded ? '[-] Ocultar CLI' : '[+] Abrir CLI'}
					</button>
				</div>
			</div>

			{isExpanded && (
				<div className="p-3">
					<div className="terminal-logs max-h-40 overflow-y-auto space-y-1 text-xs mb-2.5 scrollbar-thin">
						{history.map((item, idx) => (
							<div
								key={idx}
								className={`whitespace-pre-wrap leading-relaxed ${
									item.type === 'cmd'
										? 'text-[var(--term-glow)] font-bold'
										: item.type === 'error'
										? 'text-red-400'
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

					<form onSubmit={handleCommand} className="flex items-center gap-2 text-xs border-t border-[var(--term-border)] pt-2">
						<span className="text-[var(--term-accent)] font-bold select-none">&gt;</span>
						<input
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Escribe 'help', 'skills', 'goto experience'..."
							className="flex-1 bg-transparent border-none outline-none text-[var(--term-glow)] placeholder-[var(--term-dim)] font-mono text-xs"
							autoComplete="off"
							spellCheck="false"
						/>
						<button
							type="submit"
							className="px-2 py-0.5 border border-[var(--term-border)] hover:border-[var(--term-accent)] hover:text-[var(--term-accent)] text-[var(--term-dim)] rounded text-[11px] transition-colors flex items-center gap-1"
						>
							<Send size={11} />
						</button>
					</form>
				</div>
			)}
		</div>
	);
};
