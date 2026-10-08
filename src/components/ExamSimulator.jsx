import React, { useState } from 'react';
import { FileText, Clock, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Zap, Flame, Award, HelpCircle } from 'lucide-react';
import MathView from './MathView';

function FormattedText({ text }) {
  if (!text) return null;
  const str = String(text);
  const parts = str.split('$');
  if (parts.length === 1 && (str.includes('\\') || str.includes('^') || str.includes('_'))) {
    return <MathView math={str} />;
  }
  return (
    <span>
      {parts.map((part, idx) => {
        if (idx % 2 === 1) {
          return <MathView key={idx} math={part} displayMode={part.includes('\\lim') || part.includes('\\frac')} />;
        }
        return part;
      })}
    </span>
  );
}

const REAL_FING_QUESTIONS = [
  {
    id: "mit-fing-1",
    year: "MIT Integration Bee / FING 2026",
    difficulty: "🔥 NIVEL EXTREMO MIT",
    topic: "Álgebra Avanzada e Inversas",
    question: "Sea la función $f: \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{3\\}$ dada por $f(x) = \\frac{3x + 1}{x - 2}$. Determina la expresión rigurosa de su función inversa $f^{-1}(x)$.",
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
    id: "mit-fing-2",
    year: "MIT Calculus Qualifier / FING 2025",
    difficulty: "🔥 NIVEL EXTREMO MIT",
    topic: "Límites Trigonométricos Notables",
    question: "Calcula el valor exacto del límite indeterminado: $$\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$$",
    options: [
      "$\\frac{1}{2}$",
      "$0$",
      "$1$",
      "$+\\infty$"
    ],
    correctAnswer: 0,
    solution: "Multiplicando por el conjugado $(1 + \\cos(x))$:\n$$\\lim_{x \\to 0} \\frac{1 - \\cos^2(x)}{x^2 (1 + \\cos(x))} = \\lim_{x \\to 0} \\left(\\frac{\\sin(x)}{x}\\right)^2 \\cdot \\frac{1}{1 + \\cos(x)}$$\nComo $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$, el resultado es $1^2 \\cdot \\frac{1}{2} = \\frac{1}{2}$."
  },
  {
    id: "mit-fing-3",
    year: "MIT Calculus Competition / FING",
    difficulty: "🔥 NIVEL EXTREMO MIT",
    topic: "Límites Exponenciales Trascendentes ($1^\\infty$)",
    question: "Evalúa el límite con forma indeterminada $1^\\infty$: $$\\lim_{x \\to +\\infty} \\left( \\frac{x + 5}{x - 2} \\right)^{2x + 1}$$",
    options: [
      "$e^{14}$",
      "$e^7$",
      "$e^{10}$",
      "$1$"
    ],
    correctAnswer: 0,
    solution: "Reescribimos la base: $\\frac{x+5}{x-2} = 1 + \\frac{7}{x-2}$. Usando la identidad del número $e$: $\\lim_{x \\to +\\infty} \\left(1 + \\frac{7}{x-2}\\right)^{\\frac{x-2}{7} \\cdot \\frac{7(2x+1)}{x-2}} = e^{\\lim_{x \\to +\\infty} \\frac{14x + 7}{x - 2}} = e^{14}$."
  },
  {
    id: "mit-fing-4",
    year: "MIT Calculus Bee",
    difficulty: "🔥 NIVEL EXTREMO MIT",
    topic: "Derivación Implícita Trascendente",
    question: "Dada la ecuación implícita $x^y = y^x$ con $x, y > 0$, halla la derivada $\\frac{dy}{dx}$ en el punto $(e, e)$:",
    options: [
      "$1$",
      "$e$",
      "$-1$",
      "$0$"
    ],
    correctAnswer: 0,
    solution: "Aplicando logaritmo natural a ambos lados: $y \\ln(x) = x \\ln(y)$. Derivando respecto a $x$: $y' \\ln(x) + \\frac{y}{x} = \\ln(y) + \\frac{x}{y} y'$. Evaluando en $(e, e)$: $y'(1) + 1 = 1 + y'(1) \\implies y' = 1$."
  },
  {
    id: "mit-fing-5",
    year: "Primer Parcial FING / MIT Challenge",
    difficulty: "🔥 NIVEL EXTREMO MIT",
    topic: "Continuidad y Límites Laterales con Valor Absoluto",
    question: "Analiza los límites laterales de $g(x) = \\frac{|x^2 - 4|}{x - 2}$ cuando $x \\to 2$:",
    options: [
      "$\\lim_{x \\to 2^+} g(x) = 4$ y $\\lim_{x \\to 2^-} g(x) = -4$",
      "$\\lim_{x \\to 2^+} g(x) = -4$ y $\\lim_{x \\to 2^-} g(x) = 4$",
      "El límite existe y vale 4",
      "El límite existe y vale 0"
    ],
    correctAnswer: 0,
    solution: "Para $x > 2$: $x^2 - 4 > 0 \\implies |x^2-4| = x^2-4 \\implies \\frac{(x-2)(x+2)}{x-2} = x+2 \\to 4$. Para $x < 2$: $|x^2-4| = -(x^2-4) \\implies -(x+2) \\to -4$."
  },
  {
    id: "mit-fing-6",
    year: "MIT Integration Bee / FING 2026",
    difficulty: "🔥 NIVEL EXTREMO MIT",
    topic: "Equivalencias Infinitesimales",
    question: "Calcula el límite indeterminado usando equivalencias $$\\lim_{x \\to 0} \\frac{\\tan(x) - \\sin(x)}{x^3}$$",
    options: [
      "$\\frac{1}{2}$",
      "$1$",
      "$0$",
      "$\\frac{1}{3}$"
    ],
    correctAnswer: 0,
    solution: "$\\tan(x) - \\sin(x) = \\tan(x)(1 - \\cos(x))$. Cuando $x \\to 0$: $\\tan(x) \\sim x$ y $1 - \\cos(x) \\sim \\frac{x^2}{2}$. Por tanto, $\\tan(x)(1 - \\cos(x)) \\sim x \\cdot \\frac{x^2}{2} = \\frac{x^3}{2}$. El límite es $\\frac{x^3/2}{x^3} = \\frac{1}{2}$."
  },
  {
    id: "mit-fing-7",
    year: "MIT Calculus Qualifier",
    difficulty: "🔥 NIVEL EXTREMO MIT",
    topic: "Límites por Regla de L'Hôpital / Taylor",
    question: "Calcula el límite indeterminado de segundo orden: $$\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}$$",
    options: [
      "$\\frac{1}{2}$",
      "$1$",
      "$0$",
      "$\\infty$"
    ],
    correctAnswer: 0,
    solution: "Aplicando L'Hôpital (o desarrollo en serie de Taylor $e^x = 1 + x + \\frac{x^2}{2} + o(x^2)$):\n$$\\lim_{x \\to 0} \\frac{e^x - 1}{2x} = \\lim_{x \\to 0} \\frac{e^x}{2} = \\frac{1}{2}$$."
  },
  {
    id: "mit-fing-8",
    year: "Parcial Examen FING",
    difficulty: "🔥 NIVEL EXTREMO MIT",
    topic: "Inecuaciones Racionales de Alto Grado",
    question: "Resuelve la inecuación racional en $\\mathbb{R}$: $$\\frac{(x^2 - 1)(x - 3)^3}{(x + 2)^2} \\le 0$$",
    options: [
      "$(-\\infty, -2) \\cup (-2, -1] \\cup [1, 3]$",
      "$[-1, 1] \\cup [3, +\\infty)$",
      "$(-\\infty, 3]$",
      "$[-1, 3]$"
    ],
    correctAnswer: 0,
    solution: "Puntos críticos: $-2$ (raíz doble del denominador, asíntota y no cambia signo), $-1, 1$ (raíces simples), $3$ (raíz triple del numerador). Tabla de signos resulta en $(-\\infty, -2) \\cup (-2, -1] \\cup [1, 3]$."
  },
  {
    id: "mit-fing-9",
    year: "MIT Integration Bee Finals",
    difficulty: "🔥 NIVEL EXTREMO MIT",
    topic: "Derivación Logarítmica Avanzada",
    question: "Dada $f(x) = x^x$ para $x > 0$, halla el punto crítico donde la derivada $f'(x) = 0$:",
    options: [
      "$x = \\frac{1}{e}$",
      "$x = e$",
      "$x = 1$",
      "$x = 0$"
    ],
    correctAnswer: 0,
    solution: "$f(x) = e^{x \\ln(x)} \\implies f'(x) = x^x (1 + \\ln(x))$. Igualando a 0: $1 + \\ln(x) = 0 \\implies \\ln(x) = -1 \\implies x = e^{-1} = \\frac{1}{e}$."
  },
  {
    id: "mit-fing-10",
    year: "MIT / FING Grand Challenge 2026",
    difficulty: "🔥 NIVEL EXTREMO MIT",
    topic: "Teorema del Sándwich / Acotación Infinitesimal",
    question: "Evalúa el límite infinitesimal por acotación: $$\\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right)$$",
    options: [
      "$0$",
      "$1$",
      "No existe",
      "$\\infty$"
    ],
    correctAnswer: 0,
    solution: "Dado que $-1 \\le \\sin(1/x) \\le 1$ para todo $x \\neq 0$, se cumple $-x^2 \\le x^2 \\sin(1/x) \\le x^2$. Por Teorema del Sándwich, como $\\lim_{x \\to 0} (-x^2) = \\lim_{x \\to 0} x^2 = 0$, el límite es $0$."
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

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="animate-fade-in" style={{ padding: '32px 24px', maxWidth: '920px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F59E0B', fontWeight: 700, fontSize: '0.85rem', marginBottom: '4px' }}>
            <Flame size={18} fill="#F59E0B" color="#F59E0B" /> {q.difficulty}
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#F9FAFB', letterSpacing: '-0.02em' }}>
            Simulador de Parciales Extremor (MIT & FING Udelar)
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#FBBF24', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(245, 158, 11, 0.3)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={16} /> {q.year}
          </div>
          <div style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34D399', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(16, 185, 129, 0.3)', fontSize: '0.85rem', fontWeight: 700 }}>
            Puntaje: {score}/{REAL_FING_QUESTIONS.length}
          </div>
        </div>
      </div>

      {/* Question Stepper */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
        {REAL_FING_QUESTIONS.map((item, idx) => (
          <div
            key={item.id}
            style={{
              flex: 1,
              height: '6px',
              borderRadius: '3px',
              background: idx === currentIdx ? '#F59E0B' : idx < currentIdx ? '#10B981' : 'rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Main Question Card */}
      <div className="glass-panel" style={{ padding: '32px', marginBottom: '24px', borderLeft: '4px solid #F59E0B' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#FBBF24', fontWeight: 700, letterSpacing: '0.05em' }}>
            Problema {currentIdx + 1} de {REAL_FING_QUESTIONS.length} — {q.topic}
          </span>
          <span style={{ background: 'rgba(244, 63, 94, 0.2)', color: '#FB7185', padding: '2px 8px', borderRadius: '8px', fontSize: '0.72rem', fontWeight: 700 }}>
            {q.difficulty}
          </span>
        </div>

        <div style={{ fontSize: '1.15rem', color: '#F9FAFB', lineHeight: 1.6, marginBottom: '24px', fontWeight: 600 }}>
          <FormattedText text={q.question} />
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
          {q.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            let borderStyle = '1px solid rgba(255, 255, 255, 0.1)';
            let bgStyle = 'rgba(31, 41, 55, 0.5)';

            if (isSelected) {
              borderStyle = '2px solid #F59E0B';
              bgStyle = 'rgba(245, 158, 11, 0.2)';
            }
            if (submitted) {
              if (idx === q.correctAnswer) {
                borderStyle = '2px solid #10B981';
                bgStyle = 'rgba(16, 185, 129, 0.25)';
              } else if (isSelected && idx !== q.correctAnswer) {
                borderStyle = '2px solid #F43F5E';
                bgStyle = 'rgba(244, 63, 94, 0.25)';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => !submitted && setSelectedOption(idx)}
                disabled={submitted}
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: borderStyle,
                  background: bgStyle,
                  color: '#F9FAFB',
                  textAlign: 'left',
                  cursor: submitted ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: isSelected ? '#F59E0B' : 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  {String.fromCharCode(65 + idx)}
                </div>
                <div style={{ fontSize: '1.1rem', color: '#F9FAFB', fontWeight: 500 }}>
                  <FormattedText text={opt} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Solution when submitted */}
        {submitted && (
          <div className="glass-card animate-fade-in" style={{ padding: '20px', marginBottom: '20px', borderLeft: '4px solid #10B981', background: 'rgba(16, 185, 129, 0.08)' }}>
            <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#34D399', fontWeight: 700, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#34D399" /> Solución Rigurosa MIT / FING:
            </div>
            <div style={{ fontSize: '0.95rem', color: '#E5E7EB', lineHeight: 1.6 }}>
              <FormattedText text={q.solution} />
            </div>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="btn-primary"
              style={{ padding: '12px 24px', fontSize: '1rem', opacity: selectedOption === null ? 0.5 : 1 }}
            >
              Confirmar Respuesta <CheckCircle2 size={18} />
            </button>
          ) : (
            <>
              {currentIdx < REAL_FING_QUESTIONS.length - 1 ? (
                <button onClick={handleNext} className="btn-primary" style={{ padding: '12px 24px', fontSize: '1rem', background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' }}>
                  Siguiente Problema MIT <ArrowRight size={18} />
                </button>
              ) : (
                <button onClick={handleReset} className="btn-primary" style={{ padding: '12px 24px', fontSize: '1rem', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}>
                  Reiniciar Simulador Examen <Award size={18} />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
