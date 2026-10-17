import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
	lines: string[];
	speed?: number;
	delayBetweenLines?: number;
	className?: string;
	onFinished?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
	lines,
	speed = 25,
	delayBetweenLines = 400,
	className = '',
	onFinished
}) => {
	const [displayedLines, setDisplayedLines] = useState<string[]>([]);
	const [currentLineIndex, setCurrentLineIndex] = useState(0);
	const [currentCharIndex, setCurrentCharIndex] = useState(0);
	const [isComplete, setIsComplete] = useState(false);

	useEffect(() => {
		if (currentLineIndex >= lines.length) {
			setIsComplete(true);
			if (onFinished) onFinished();
			return;
		}

		const currentFullLine = lines[currentLineIndex];

		if (currentCharIndex < currentFullLine.length) {
			const timeout = setTimeout(() => {
				setDisplayedLines((prev) => {
					const updated = [...prev];
					if (updated[currentLineIndex] === undefined) {
						updated[currentLineIndex] = currentFullLine[currentCharIndex];
					} else {
						updated[currentLineIndex] += currentFullLine[currentCharIndex];
					}
					return updated;
				});
				setCurrentCharIndex((prev) => prev + 1);
			}, speed);

			return () => clearTimeout(timeout);
		} else {
			const delayTimeout = setTimeout(() => {
				setCurrentLineIndex((prev) => prev + 1);
				setCurrentCharIndex(0);
			}, delayBetweenLines);

			return () => clearTimeout(delayTimeout);
		}
	}, [currentLineIndex, currentCharIndex, lines, speed, delayBetweenLines, onFinished]);

	return (
		<div className={`font-mono ${className}`}>
			{displayedLines.map((line, idx) => (
				<p key={idx} className="leading-relaxed mb-2">
					<span className="text-[var(--term-dim)] select-none mr-2">$</span>
					<span>{line}</span>
					{idx === currentLineIndex && !isComplete && (
						<span className="inline-block w-2 h-4 bg-[var(--term-accent)] ml-1 animate-pulse align-middle" />
					)}
				</p>
			))}
			{!isComplete && displayedLines.length === 0 && (
				<p className="leading-relaxed mb-2">
					<span className="text-[var(--term-dim)] select-none mr-2">$</span>
					<span className="inline-block w-2 h-4 bg-[var(--term-accent)] ml-1 animate-pulse align-middle" />
				</p>
			)}
		</div>
	);
};
