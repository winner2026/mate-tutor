import React, { useState } from 'react';
import { FileText, Clock, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import MathView from './MathView';

const REAL_FING_QUESTIONS = [
  {
    id: "fing-2026-1",
    year: "Prueba Inicial FING 2026",
    topic: "Álgebra y Funciones",
    question: "Sea la función $f: \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R}$ dada por $f(x) = \\frac{3x + 1}{x - 2}$. Determina la expresión de su función inversa $f^{-1}(x)$.",
    options: [
      "$f^{-1}(x) = \\frac{2x + 1}{x - 3}$",
      "$f^{-1}(x) = \\frac{x - 2}{3x + 1}$",
      "$f^{-1}(x) = \\frac{3x - 1}{x + 2}$",
      "$f^{-1}(x) = \\frac{2x - 3}{x + 1}$"
    ],
    correctAnswer: 0,
    solution: "1) Escribimos $y = \\frac{3x + 1}{x - 2}$.\n2) Multiplicamos por el denominador: $y(x - 2) = 3x + 1 \\implies yx - 2y = 3x + 1$.\n3) Agrupamos términos con $x$: $yx - 3x = 2y + 1 \\implies x(y - 3) = 2y + 1$.\n4) Despejamos $x = \\frac{2y + 1}{y - 3}$. Por lo tanto, $f^{-1}(x) = \\frac{2x + 1}{x - 3}$."
  },
  {
    id: "fing-2024-lim",
    year: "Primer Parcial FING 2024",
    topic: "Límites e Indeterminaciones",
    question: "Calcula el valor del límite: $$\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$$",
    options: [
      "\\frac{1}{2}",
      "0",
      "1",
      "\\infty"
    ],
    correctAnswer: 0,
    solution: "Multiplicando por el conjugado $(1 + \\cos(x))$:\n$$\\lim_{x \\to 0} \\frac{1 - \\cos^2(x)}{x^2 (1 + \\cos(x))} = \\lim_{x \\to 0} \\frac{\\sin^2(x)}{x^2} \\cdot \\frac{1}{1 + \\cos(x)}$$\nComo $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$, el primer factor tiende a $1^2 = 1$, y el segundo a $\\frac{1}{1 + 1} = \\frac{1}{2}$. El resultado es $\\frac{1}{2}$."
  }
];

export default function ExamSimulator() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const q = REAL_FING_QUESTIONS[currentIdx];

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
    if (selectedOption === q.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < REAL_FING_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setSubmitted(false);
    }
  };

  return (
    <div className="animate-fade-in" style={{ padding: '32px', maxWidth: '840px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F59E0B', fontWeight: 600, fontSize: '0.85rem', marginBottom: '4px' }}>
            <ShieldCheck size={16} /> Exámenes Oficiales FING Udelar
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F9FAFB' }}>
            Simulador de Parciales y Pruebas Iniciales
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(245, 158, 11, 0.15)', color: '#FBBF24', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(245, 158, 11, 0.3)', fontSize: '0.85rem', fontWeight: 600 }}>
          <Clock size={16} /> {q.year}
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '28px', marginBottom: '24px' }}>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#818CF8', fontWeight: 700, marginBottom: '8px' }}>
          Tema: {q.topic}
        </div>
        <div style={{ fontSize: '1.15rem', color: '#F9FAFB', lineHeight: 1.6, marginBottom: '24px' }}>
          {q.question.split('$').map((part, idx) => {
            if (idx % 2 === 1) return <MathView key={idx} math={part} displayMode={part.includes('\\lim') || part.includes('\\frac')} />;
            return part;
          })}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {q.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            let style = { background: 'rgba(31, 41, 55, 0.6)', borderColor: 'rgba(255, 255, 255, 0.08)', color: '#D1D5DB' };

            if (isSelected) style = { background: 'rgba(99, 102, 241, 0.25)', borderColor: '#6366F1', color: '#FFFFFF' };
            if (submitted) {
              if (idx === q.correctAnswer) style = { background: 'rgba(16, 185, 129, 0.25)', borderColor: '#10B981', color: '#FFFFFF' };
              else if (isSelected) style = { background: 'rgba(244, 63, 94, 0.25)', borderColor: '#F43F5E', color: '#FFFFFF' };
            }

            return (
              <button
                key={idx}
                onClick={() => !submitted && setSelectedOption(idx)}
                disabled={submitted}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '18px 24px',
                  borderRadius: '14px',
                  border: `2px solid ${style.borderColor}`,
                  background: style.background,
                  color: style.color,
                  cursor: submitted ? 'default' : 'pointer',
                  fontSize: '1.05rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 4px 16px rgba(99, 102, 241, 0.3)' : 'none'
                }}
              >
                <div style={{
                  padding: '4px 12px',
                  borderRadius: '8px',
                  background: isSelected ? '#6366F1' : 'rgba(255, 255, 255, 0.1)',
                  color: isSelected ? '#FFFFFF' : '#9CA3AF',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  Opción {String.fromCharCode(65 + idx)}
                </div>
                <div style={{ fontSize: '1.15rem', color: '#F9FAFB', fontWeight: 500 }}>
                  <MathView math={opt} />
                </div>
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
          {!submitted ? (
            <button onClick={handleSubmit} disabled={selectedOption === null} className="btn-primary">
              Enviar Respuesta al Tribunal
            </button>
          ) : (
            currentIdx < REAL_FING_QUESTIONS.length - 1 && (
              <button onClick={handleNext} className="btn-success">
                Siguiente Pregunta del Examen <ArrowRight size={18} />
              </button>
            )
          )}
        </div>
      </div>

      {submitted && (
        <div className="glass-panel animate-fade-in" style={{ padding: '24px', borderLeft: selectedOption === q.correctAnswer ? '4px solid #10B981' : '4px solid #F43F5E' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: selectedOption === q.correctAnswer ? '#34D399' : '#FB7185', marginBottom: '12px' }}>
            {selectedOption === q.correctAnswer ? '¡Respuesta Correcta! Puntos acreditados.' : 'Respuesta Incorrecta'}
          </h3>
          <div style={{ fontSize: '0.95rem', color: '#D1D5DB', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
            <strong style={{ color: '#F9FAFB' }}>Resolución Oficial FING:</strong>
            <br />
            {q.solution.split('$').map((part, idx) => {
              if (idx % 2 === 1) return <MathView key={idx} math={part} displayMode={part.includes('\\lim') || part.includes('\\frac')} />;
              return part;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
