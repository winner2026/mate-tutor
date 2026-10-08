import React, { useState, useEffect } from 'react';
import { ADAPTIVE_PATTERNS, LEVEL_THRESHOLDS, DIFFICULTY_DIMENSIONS, getInitialUserState, processAnswer } from '../data/adaptiveEngine';
import { Target, Zap, ShieldCheck, CheckCircle2, XCircle, ArrowRight, RotateCcw, AlertTriangle, HelpCircle, Award, Layers, Sparkles } from 'lucide-react';
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

export default function AdaptiveMasteryView() {
  const [selectedPatternId, setSelectedPatternId] = useState(ADAPTIVE_PATTERNS[0].id);
  const [userState, setUserState] = useState(() => {
    try {
      const saved = localStorage.getItem('fing_adaptive_user_state');
      return saved ? JSON.parse(saved) : getInitialUserState();
    } catch (e) {
      return getInitialUserState();
    }
  });

  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('fing_adaptive_user_state', JSON.stringify(userState));
    } catch (e) {}
  }, [userState]);

  const activePattern = ADAPTIVE_PATTERNS.find(p => p.id === selectedPatternId) || ADAPTIVE_PATTERNS[0];
  const patternProg = userState.patternProgress[selectedPatternId] || {
    currentLevel: 0,
    diagnosticPassed: false,
    levelScores: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] },
    unlockedLevel: 0,
    history: [],
    masteryPercent: 0
  };

  const currentLevel = patternProg.currentLevel;
  const availableQuestions = activePattern.bank.filter(q => q.level === currentLevel);

  // Find unanswered or pick next question in level bank
  const answeredIds = patternProg.history.map(h => h.questionId);
  const currentQuestion = availableQuestions.find(q => !answeredIds.includes(q.id)) || availableQuestions[0] || activePattern.bank[0];

  const handleSelectOption = (idx) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isSubmitted) return;
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setIsSubmitted(true);

    const updatedState = processAnswer(userState, selectedPatternId, currentQuestion, isCorrect);
    const newProg = updatedState.patternProgress[selectedPatternId];

    if (currentLevel === 0 && newProg.diagnosticPassed) {
      setFeedbackMsg("🚀 ¡DIAGNÓSTICO SUPERADO! Has demostrado dominio básico. El motor adaptativo te ha saltado automáticamente al Nivel 3 (Variación).");
    } else if (newProg.unlockedLevel > currentLevel) {
      setFeedbackMsg(`🎉 ¡NIVEL COMPLETADO! Has alcanzado el umbral de dominio exigido. ¡Nivel ${newProg.unlockedLevel} (${LEVEL_THRESHOLDS[newProg.unlockedLevel]?.name}) desbloqueado!`);
    } else {
      setFeedbackMsg(isCorrect ? "¡Respuesta Correcta! Sigue así para subir de nivel." : "Respuesta Incorrecta. Revisa la explicación pedagógica a continuación.");
    }

    setUserState(updatedState);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setFeedbackMsg(null);
  };

  const handleResetPattern = () => {
    const newState = JSON.parse(JSON.stringify(userState));
    newState.patternProgress[selectedPatternId] = {
      currentLevel: 0,
      diagnosticPassed: false,
      levelScores: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] },
      unlockedLevel: 0,
      history: [],
      masteryPercent: 0
    };
    setUserState(newState);
    setSelectedOption(null);
    setIsSubmitted(false);
    setFeedbackMsg(null);
  };

  return (
    <div className="animate-fade-in" style={{ padding: '32px 24px', maxWidth: '1160px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#6366F1', fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px', background: 'rgba(99, 102, 241, 0.15)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
          <Target size={18} color="#818CF8" /> Motor de Aprendizaje Adaptativo por Dominio
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '10px', letterSpacing: '-0.02em' }}>
          Entrenamiento Adaptativo (Estándar 20 Ejercicios por Patrón)
        </h1>
        <p style={{ fontSize: '1rem', color: '#9CA3AF', maxWidth: '880px', lineHeight: 1.6 }}>
          Cada patrón dispone de <strong>20 ejercicios candidatos</strong> (2 Diag + 3 Rec + 4 Ejec + 4 Var + 3 Integ + 2 Trans + 2 FING). No necesitas resolver los 20: con demostrar dominio en <strong>8 a 12 ejercicios</strong> el sistema te otorga el 100% de Maestría FING.
        </p>
      </div>

      {/* Pattern Mastery Overview Bar */}
      <div className="glass-panel" style={{ padding: '20px 24px', marginBottom: '28px', borderLeft: '4px solid #6366F1' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#818CF8', fontWeight: 700, letterSpacing: '0.05em' }}>
              Patrón Seleccionado
            </span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#F9FAFB', margin: '4px 0 0 0' }}>
              <FormattedText text={activePattern.title} />
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '4px', textAlign: 'right' }}>
                Dominio del Patrón
              </div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#34D399', textAlign: 'right' }}>
                {patternProg.masteryPercent}%
              </div>
            </div>
            <button
              onClick={handleResetPattern}
              className="btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <RotateCcw size={14} /> Reiniciar Patrón
            </button>
          </div>
        </div>

        {/* 6-Level Stepper Progress Bar */}
        <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
          {[0, 1, 2, 3, 4, 5, 6].map(lvl => {
            const isUnlocked = patternProg.unlockedLevel >= lvl;
            const isCurrent = currentLevel === lvl;
            const thresh = LEVEL_THRESHOLDS[lvl];

            return (
              <button
                key={lvl}
                disabled={!isUnlocked}
                onClick={() => {
                  if (isUnlocked) {
                    const newState = JSON.parse(JSON.stringify(userState));
                    newState.patternProgress[selectedPatternId].currentLevel = lvl;
                    setUserState(newState);
                    setSelectedOption(null);
                    setIsSubmitted(false);
                    setFeedbackMsg(null);
                  }
                }}
                style={{
                  padding: '10px 6px',
                  borderRadius: '10px',
                  border: isCurrent ? '2px solid #818CF8' : isUnlocked ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isCurrent ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(67, 56, 202, 0.2) 100%)' : isUnlocked ? 'rgba(16, 185, 129, 0.1)' : 'rgba(31, 41, 55, 0.4)',
                  color: isCurrent ? '#FFFFFF' : isUnlocked ? '#34D399' : '#6B7280',
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                  textAlign: 'center',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '2px' }}>
                  {lvl === 0 ? 'DIAG' : `NIVEL ${lvl}`}
                </div>
                <div style={{ fontSize: '0.72rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {thresh.name.split('.')[1] || thresh.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Adaptive Feedback Message Alert */}
      {feedbackMsg && (
        <div className="glass-card animate-fade-in" style={{ padding: '16px 20px', marginBottom: '24px', borderLeft: '4px solid #F59E0B', background: 'rgba(245, 158, 11, 0.12)', color: '#FBBF24', fontWeight: 600, fontSize: '0.95rem' }}>
          {feedbackMsg}
        </div>
      )}

      {/* Main Grid: Dimensions & Exercise Interface */}
      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '28px', alignItems: 'start' }}>
        {/* Left Side: 6 Dimensions Indicator Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="glass-panel" style={{ padding: '20px' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#F9FAFB', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={16} color="#818CF8" /> 6 Dimensiones de Dificultad
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {DIFFICULTY_DIMENSIONS.map(dim => (
                <div key={dim.id} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#818CF8', marginBottom: '2px' }}>
                    [{dim.id}] {dim.name}
                  </div>
                  <div style={{ fontSize: '0.73rem', color: '#9CA3AF' }}>
                    {dim.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Active Question Panel */}
        <div className="glass-panel" style={{ padding: '32px', borderLeft: '4px solid #10B981' }}>
          {/* Question Header & Special Badges */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge badge-nivel-0" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34D399', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                {LEVEL_THRESHOLDS[currentLevel]?.name}
              </span>
              {currentQuestion?.isContrast && (
                <span style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#FBBF24', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid rgba(245, 158, 11, 0.4)' }}>
                  ⚡ EJERCICIO DE CONTRASTE
                </span>
              )}
              {currentQuestion?.isTrap && (
                <span style={{ background: 'rgba(244, 63, 94, 0.2)', color: '#FB7185', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid rgba(244, 63, 94, 0.4)' }}>
                  ⚠️ EJERCICIO TRAMPA FING
                </span>
              )}
            </div>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 600 }}>
              Objetivo: {LEVEL_THRESHOLDS[currentLevel]?.label}
            </span>
          </div>

          {/* Question Prompt */}
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '24px', lineHeight: 1.6 }}>
            <FormattedText text={currentQuestion?.question} />
          </div>

          {/* Options List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
            {currentQuestion?.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              let btnBorder = '1px solid rgba(255, 255, 255, 0.1)';
              let btnBg = 'rgba(31, 41, 55, 0.5)';

              if (isSelected) {
                btnBorder = '2px solid #6366F1';
                btnBg = 'rgba(99, 102, 241, 0.2)';
              }
              if (isSubmitted) {
                if (idx === currentQuestion.correctAnswer) {
                  btnBorder = '2px solid #10B981';
                  btnBg = 'rgba(16, 185, 129, 0.25)';
                } else if (isSelected && idx !== currentQuestion.correctAnswer) {
                  btnBorder = '2px solid #F43F5E';
                  btnBg = 'rgba(244, 63, 94, 0.25)';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isSubmitted}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: btnBorder,
                    background: btnBg,
                    color: '#F9FAFB',
                    textAlign: 'left',
                    cursor: isSubmitted ? 'default' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isSelected ? '#6366F1' : 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 700
                    }}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <div style={{ fontSize: '1.05rem', fontWeight: 500 }}>
                      <FormattedText text={opt} />
                    </div>
                  </div>

                  {isSubmitted && idx === currentQuestion.correctAnswer && (
                    <CheckCircle2 size={22} color="#10B981" />
                  )}
                  {isSubmitted && isSelected && idx !== currentQuestion.correctAnswer && (
                    <XCircle size={22} color="#F43F5E" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Callout when submitted */}
          {isSubmitted && (
            <div className="glass-card animate-fade-in" style={{ padding: '20px', marginBottom: '24px', borderLeft: '4px solid #818CF8' }}>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#818CF8', fontWeight: 700, marginBottom: '6px' }}>
                Explicación Pedagógica FING:
              </div>
              <div style={{ fontSize: '0.95rem', color: '#D1D5DB', lineHeight: 1.6 }}>
                <FormattedText text={currentQuestion?.explanation} />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px' }}>
            {!isSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedOption === null}
                className="btn-primary"
                style={{ padding: '12px 28px', fontSize: '1rem', opacity: selectedOption === null ? 0.5 : 1 }}
              >
                Comprobar Respuesta <CheckCircle2 size={18} />
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="btn-primary"
                style={{ padding: '12px 28px', fontSize: '1rem', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}
              >
                Siguiente Ejercicio <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
