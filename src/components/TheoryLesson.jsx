import React from 'react';
import { BookOpen, Lightbulb, AlertTriangle, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import MathView from './MathView';

// Helper to render text containing inline math delimited by $...$
function FormattedText({ text }) {
  if (!text) return null;
  const parts = text.split('$');
  return (
    <span>
      {parts.map((part, idx) => {
        if (idx % 2 === 1) {
          return <MathView key={idx} math={part} />;
        }
        return part;
      })}
    </span>
  );
}

export default function TheoryLesson({ topic, onStartPractice, levelInfo }) {
  if (!topic) return null;

  return (
    <div className="animate-fade-in" style={{ padding: '32px', maxWidth: '960px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span className={`badge ${levelInfo?.badgeClass}`}>
            {levelInfo?.title}
          </span>
          <span style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Lección Teórica</span>
        </div>
        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '6px' }}>
          {topic.title}
        </h1>
        <p style={{ fontSize: '1rem', color: '#9CA3AF' }}>
          {topic.subtitle}
        </p>
      </div>

      {/* Main Concept Card */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px', borderLeft: '4px solid #6366F1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <BookOpen size={20} color="#818CF8" />
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#F9FAFB' }}>Concepto Clave</h2>
        </div>
        <p style={{ fontSize: '0.98rem', color: '#D1D5DB', lineHeight: 1.6 }}>
          <FormattedText text={topic.theory.concept} />
        </p>

        {/* Formulas Grid */}
        {topic.theory.formulas && topic.theory.formulas.length > 0 && (
          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
            {topic.theory.formulas.map((form, idx) => (
              <div key={idx} style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                borderRadius: '10px',
                padding: '14px 18px'
              }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#818CF8', fontWeight: 600, marginBottom: '6px' }}>
                  {form.label}
                </div>
                <MathView math={form.latex} displayMode={true} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tips and Pitfalls Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '28px' }}>
        {/* Consejo del Profesor */}
        <div className="glass-card" style={{ padding: '20px', borderLeft: '4px solid #10B981' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#34D399' }}>
            <Lightbulb size={20} />
            <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Consejo del Profesor FING</h3>
          </div>
          <p style={{ fontSize: '0.92rem', color: '#D1D5DB', lineHeight: 1.5 }}>
            <FormattedText text={topic.theory.tips} />
          </p>
        </div>

        {/* Error Frecuente en Exámenes */}
        <div className="glass-card" style={{ padding: '20px', borderLeft: '4px solid #F43F5E' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#FB7185' }}>
            <AlertTriangle size={20} />
            <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Error Frecuente a Evitar</h3>
          </div>
          <p style={{ fontSize: '0.92rem', color: '#D1D5DB', lineHeight: 1.5 }}>
            <FormattedText text={topic.theory.pitfall} />
          </p>
        </div>
      </div>

      {/* Worked Examples */}
      {topic.workedExamples && topic.workedExamples.length > 0 && (
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F9FAFB', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={20} color="#F59E0B" /> Ejemplos Resueltos Paso a Paso
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {topic.workedExamples.map((ex, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '20px' }}>
                <div style={{ fontWeight: 600, color: '#FBBF24', marginBottom: '12px', fontSize: '0.95rem' }}>
                  Problema {idx + 1}: <FormattedText text={ex.problem} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '12px', borderLeft: '2px solid rgba(245, 158, 11, 0.4)' }}>
                  {ex.steps.map((step, stepIdx) => (
                    <div key={stepIdx} style={{ fontSize: '0.9rem', color: '#E5E7EB' }}>
                      <span style={{ color: '#9CA3AF', fontWeight: 600, marginRight: '8px' }}>Paso {stepIdx + 1}:</span>
                      <FormattedText text={step} />
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontWeight: 600, color: '#34D399', fontSize: '0.95rem' }}>
                  Solución Final: <FormattedText text={ex.finalAnswer?.includes('$') ? ex.finalAnswer : `$${ex.finalAnswer}$`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Start Practice CTA */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <button onClick={onStartPractice} className="btn-primary" style={{ padding: '12px 24px', fontSize: '1rem' }}>
          Practicar Ejercicios de este Tema <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
