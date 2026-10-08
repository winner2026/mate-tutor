import React, { useEffect, useRef } from 'react';
import katex from 'katex';

export default function MathView({ math, displayMode = false, className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && math) {
      try {
        let cleanMath = String(math).trim();
        if (cleanMath.startsWith('$$') && cleanMath.endsWith('$$') && cleanMath.length > 4) {
          cleanMath = cleanMath.slice(2, -2).trim();
        } else if (cleanMath.startsWith('$') && cleanMath.endsWith('$') && cleanMath.length > 2) {
          cleanMath = cleanMath.slice(1, -1).trim();
        }

        // Replace common unicode math symbols with standard KaTeX commands
        cleanMath = cleanMath
          .replace(/∖/g, '\\setminus ')
          .replace(/→/g, '\\to ')
          .replace(/⇒/g, '\\implies ')
          .replace(/⇔/g, '\\iff ')
          .replace(/≤/g, '\\le ')
          .replace(/≥/g, '\\ge ')
          .replace(/≠/g, '\\neq ')
          .replace(/∞/g, '\\infty ')
          .replace(/π/g, '\\pi ');

        katex.render(cleanMath, containerRef.current, {
          displayMode: displayMode,
          throwOnError: false
        });
      } catch (err) {
        console.error("KaTeX error:", err);
      }
    }
  }, [math, displayMode]);

  return <span ref={containerRef} className={`math-render ${className}`} />;
}
