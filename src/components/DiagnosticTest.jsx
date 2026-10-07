import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS } from '../data/curriculum';
import { CheckCircle2, AlertCircle, ArrowRight, BrainCircuit, RotateCcw } from 'lucide-react';
import MathView from './MathView';

export default function DiagnosticTest({ onFinishDiagnostic }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const q = DIAGNOSTIC_QUESTIONS[currentIdx];

  const handleSelect = (optionIdx) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }));
  };

  const handleNext = () => {
    if (currentIdx < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculatePlacement = () => {
    let score = 0;
    DIAGNOSTIC_QUESTIONS.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) score++;
    });

    if (score === 4) return { levelId: "level-4", name: "Nivel 4: Derivadas", desc: "¡Excelente base! Estás listo para avanzar a derivación y cálculo integral." };
    if (score === 3) return { levelId: "level-3", name: "Nivel 3: Límites y Continuidad", desc: "Gran manejo del álgebra. Es momento de dominar el cálculo de límites." };
    if (score === 2) return { levelId: "level-2", name: "Nivel 2: Funciones", desc: "Buen nivel básico. Recomendamos reforzar funciones y composiciones." };
    return { levelId: "level-1", name: "Nivel 1: Álgebra (La Base)", desc: "Te sugerimos empezar reforzando factorización e inecuaciones para no trabarte en Cálculo." };
  };

  if (isCompleted) {
    const result = calculatePlacement();

    return (
      <div className="animate-fade-in" style={{ padding: '48px 24px', maxWidth: '680px', margin: '0 auto' }}>
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #6366F1 0%, #4338CA 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)'
          }}>
            <BrainCircuit size={36} color="#FFFFFF" />
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '8px' }}>
            Resultado de tu Diagnóstico FING
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '0.95rem', marginBottom: '24px' }}>
            Hemos analizado tus respuestas algebraicas y razonamiento deductivo.
          </p>

          <div style={{
            background: 'rgba(99, 102, 241, 0.15)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '28px',
            textAlign: 'left'
          }}>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#818CF8', fontWeight: 700, marginBottom: '6px' }}>
              Nivel Recomendado de Inicio:
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '6px' }}>
              {result.name}
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#D1D5DB' }}>
              {result.desc}
            </p>
          </div>

          <button
            onClick={() => onFinishDiagnostic(result.levelId)}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '1.05rem' }}
          >
            Ir a Mi Nivel Recomendado <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ padding: '32px', maxWidth: '720px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '4px' }}>
          Prueba de Diagnóstico Inicial
        </h1>
        <p style={{ fontSize: '0.9rem', color: '#9CA3AF' }}>
          Pregunta {currentIdx + 1} de {DIAGNOSTIC_QUESTIONS.length} — Determina tu nivel óptimo de inicio en la FING
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '28px', marginBottom: '24px' }}>
        <div style={{ fontSize: '1.1rem', color: '#F9FAFB', marginBottom: '24px', lineHeight: 1.5 }}>
          {q.question.split('$').map((part, idx) => {
            if (idx % 2 === 1) return <MathView key={idx} math={part} displayMode={part.includes('\\lim')} />;
            return part;
          })}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {q.options.map((opt, idx) => {
            const isSelected = answers[currentIdx] === idx;

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: isSelected ? '1.5px solid #6366F1' : '1.5px solid rgba(255, 255, 255, 0.08)',
                  background: isSelected ? 'rgba(99, 102, 241, 0.2)' : 'rgba(31, 41, 55, 0.5)',
                  color: isSelected ? '#FFFFFF' : '#D1D5DB',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <span style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: isSelected ? 'rgba(99, 102, 241, 0.5)' : 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <MathView math={opt} />
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
          <button
            onClick={handleNext}
            disabled={answers[currentIdx] === undefined}
            className="btn-primary"
            style={{ opacity: answers[currentIdx] === undefined ? 0.5 : 1 }}
          >
            {currentIdx < DIAGNOSTIC_QUESTIONS.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Diagnóstico'} <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
