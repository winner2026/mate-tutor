import React from 'react';
import MathView from './MathView';

export default function FormattedText({ text, className = '' }) {
  if (!text) return null;

  const str = String(text);

  // Normalize $$ to $ so split('$') handles block formulas correctly
  const normalizedStr = str.replace(/\$\$/g, '$');
  const parts = normalizedStr.split('$');

  // If there are no $ delimiters but text contains raw LaTeX syntax
  if (parts.length === 1 && (str.includes('\\') || str.includes('^') || str.includes('_'))) {
    return <MathView math={str} className={className} />;
  }

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (!part) return null;
        if (idx % 2 === 1) {
          // Math part
          const isDisplay = part.includes('\\lim') || part.includes('\\frac') || part.includes('\\sum') || part.includes('\\int');
          return <MathView key={idx} math={part} displayMode={isDisplay} />;
        }
        // Text part - handle newlines gracefully
        const lines = part.split('\n');
        return (
          <React.Fragment key={idx}>
            {lines.map((line, lIdx) => (
              <React.Fragment key={lIdx}>
                {lIdx > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </React.Fragment>
        );
      })}
    </span>
  );
}
