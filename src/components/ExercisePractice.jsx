import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, ArrowRight, RotateCcw, Lightbulb, Trophy, Sparkles } from 'lucide-react';
import MathView from './MathView';

export default function ExercisePractice({ topic, onCompleteTopic, onBackToTheory }) {
  const [currentExIndex, setCurrentExIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [isAllDone, setIsAllDone] = useState(false);

  if (!topic || !topic.exercises || topic.exercises.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#9CA3AF' }}>
        No hay ejercicios cargados para este tema.
      </div>
    );
  }

  const exercise = topic.exercises[currentExIndex];

  const handleSelectOption = (idx) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === exercise.correctAnswer) {
      setCompletedCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentExIndex < topic.exercises.length - 1) {
      setCurrentExIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
      setHintsUsed(0);
    } else {
      setIsAllDone(true);
      onCompleteTopic(topic.id);
    }
  };

  const handleReset = () => {
    setCurrentExIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setHintsUsed(0);
    setIsAllDone(false);
  };

  if (isAllDone) {
    return (
      <div className="animate-fade-in" style={{ padding: '48px 24px', maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <div className="glass-panel" style={{ padding: '40px' }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)'
          }}>
            <Trophy size={36} color="#FFFFFF" />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '8px' }}>
            ¡Tema Dominado con Éxito!
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1rem', marginBottom: '28px' }}>
            Completaste los ejercicios prácticos de <strong>{topic.title}</strong>.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button onClick={onBackToTheory} className="btn-secondary">
              Volver a la Teoría
            </button>
            <button onClick={handleReset} className="btn-primary">
              <RotateCcw size={16} /> Repetir Ejercicios
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ padding: '32px', maxWidth: '840px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <button onClick={onBackToTheory} style={{ background: 'none', border: 'none', color: '#818CF8', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
            ← Ver Teoría
          </button>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#F9FAFB' }}>{topic.title}</h2>
        </div>
        <div style={{ fontSize: '0.85rem', color: '#9CA3AF', background: 'rgba(255, 255, 255, 0.05)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          Ejercicio {currentExIndex + 1} de {topic.exercises.length}
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-panel" style={{ padding: '28px', marginBottom: '24px' }}>
        <div style={{ fontSize: '1.15rem', color: '#F9FAFB', lineHeight: 1.6, marginBottom: '24px' }}>
          {exercise.question.split('$').map((part, idx) => {
            if (idx % 2 === 1) {
              return <MathView key={idx} math={part} displayMode={part.includes('\\lim') || part.includes('\\frac')} />;
            }
            return part;
          })}
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {exercise.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            let optionStyle = {
              background: 'rgba(31, 41, 55, 0.6)',
              borderColor: 'rgba(255, 255, 255, 0.08)',
              color: '#D1D5DB'
            };

            if (isSelected) {
              optionStyle = {
                background: 'rgba(99, 102, 241, 0.25)',
                borderColor: '#6366F1',
                color: '#FFFFFF'
              };
            }

            if (isSubmitted) {
              if (idx === exercise.correctAnswer) {
                optionStyle = {
                  background: 'rgba(16, 185, 129, 0.25)',
                  borderColor: '#10B981',
                  color: '#FFFFFF'
                };
              } else if (isSelected) {
                optionStyle = {
                  background: 'rgba(244, 63, 94, 0.25)',
                  borderColor: '#F43F5E',
                  color: '#FFFFFF'
                };
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isSubmitted}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '18px 24px',
                  borderRadius: '14px',
                  border: `2px solid ${optionStyle.borderColor}`,
                  background: optionStyle.background,
                  color: optionStyle.color,
                  cursor: isSubmitted ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                  fontSize: '1.05rem',
                  boxShadow: isSelected ? '0 4px 16px rgba(99, 102, 241, 0.3)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
                </div>
                {isSubmitted && idx === exercise.correctAnswer && (
                  <CheckCircle size={22} color="#10B981" />
                )}
                {isSubmitted && isSelected && idx !== exercise.correctAnswer && (
                  <XCircle size={22} color="#F43F5E" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Buttons & Hints */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px' }}>
          <div>
            {!isSubmitted && exercise.hints && (
              <button
                onClick={() => setHintsUsed(prev => Math.min(prev + 1, exercise.hints.length))}
                className="btn-secondary"
                style={{ padding: '8px 14px', fontSize: '0.85rem' }}
                disabled={hintsUsed >= exercise.hints.length}
              >
                <Lightbulb size={16} color="#F59E0B" />
                {hintsUsed < exercise.hints.length ? `Ver Pista (${hintsUsed + 1}/${exercise.hints.length})` : 'Pistas Agotadas'}
              </button>
            )}
          </div>

          <div>
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="btn-primary"
                style={{ opacity: selectedOption === null ? 0.5 : 1 }}
              >
                Verificar Respuesta
              </button>
            ) : (
              <button onClick={handleNext} className="btn-success">
                Siguiente Ejercicio <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hints Display Card */}
      {hintsUsed > 0 && !isSubmitted && (
        <div className="glass-card animate-fade-in" style={{ padding: '16px 20px', marginBottom: '20px', borderLeft: '4px solid #F59E0B' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FBBF24', marginBottom: '8px' }}>
            Pistas del Profesor:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {exercise.hints.slice(0, hintsUsed).map((hint, idx) => (
              <div key={idx} style={{ fontSize: '0.9rem', color: '#D1D5DB' }}>
                <strong style={{ color: '#F59E0B' }}>Pista {idx + 1}:</strong> {hint.split('$').map((part, pIdx) => pIdx % 2 === 1 ? <MathView key={pIdx} math={part} /> : part)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Explanation Feedback Card */}
      {isSubmitted && (
        <div className="glass-panel animate-fade-in" style={{
          padding: '24px',
          borderLeft: selectedOption === exercise.correctAnswer ? '4px solid #10B981' : '4px solid #F43F5E'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            {selectedOption === exercise.correctAnswer ? (
              <>
                <CheckCircle size={22} color="#10B981" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#34D399' }}>¡Excelente! Respuesta Correcta</h3>
              </>
            ) : (
              <>
                <XCircle size={22} color="#F43F5E" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FB7185' }}>Respuesta Incorrecta</h3>
              </>
            )}
          </div>

          <p style={{ fontSize: '0.95rem', color: '#D1D5DB', lineHeight: 1.6 }}>
            {exercise.explanation.split('$').map((part, idx) => {
              if (idx % 2 === 1) {
                return <MathView key={idx} math={part} />;
              }
              return part;
            })}
          </p>
        </div>
      )}
    </div>
  );
}
