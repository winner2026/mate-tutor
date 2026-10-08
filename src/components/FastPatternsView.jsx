import React, { useState } from 'react';
import { FAST_PATTERNS } from '../data/patterns';
import { Zap, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle, Lightbulb } from 'lucide-react';
import MathView from './MathView';
import FormattedText from './FormattedText';

export default function FastPatternsView() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [activePatternId, setActivePatternId] = useState(FAST_PATTERNS[0].id);

  const categories = ['Todas', ...new Set(FAST_PATTERNS.map(p => p.category))];

  const filteredPatterns = selectedCategory === 'Todas'
    ? FAST_PATTERNS
    : FAST_PATTERNS.filter(p => p.category === selectedCategory);

  const activePattern = FAST_PATTERNS.find(p => p.id === activePatternId) || FAST_PATTERNS[0];

  return (
    <div className="animate-fade-in" style={{ padding: '32px 24px', maxWidth: '1140px', margin: '0 auto' }}>
      {/* Header Centered */}
      <div style={{ marginBottom: '32px', textAlign: 'left' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#FBBF24', fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px', background: 'rgba(245, 158, 11, 0.15)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <Zap size={18} fill="#FBBF24" /> Entrenador de Atajos y Patrones PI FING
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '10px', letterSpacing: '-0.02em' }}>
          Patrones de Resolución Rápida para la Prueba Inicial
        </h1>
        <p style={{ fontSize: '1rem', color: '#9CA3AF', maxWidth: '820px', lineHeight: 1.6 }}>
          Aprende a reconocer la estructura de cada ejercicio en 5 segundos y aplica el <strong>atajo directo</strong> para resolver los exámenes de la FING a máxima velocidad sin perder puntos.
        </p>
      </div>

      {/* Category Pills Bar */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px', paddingBottom: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: selectedCategory === cat ? '1px solid #F59E0B' : '1px solid rgba(255, 255, 255, 0.08)',
              background: selectedCategory === cat ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.15) 100%)' : 'rgba(31, 41, 55, 0.5)',
              color: selectedCategory === cat ? '#FBBF24' : '#9CA3AF',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem',
              transition: 'all 0.2s ease',
              boxShadow: selectedCategory === cat ? '0 4px 12px rgba(245, 158, 11, 0.2)' : 'none'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Grid: Patterns Sidebar & Detail View */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '28px', alignItems: 'start' }}>
        {/* Pattern Selector List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '680px', overflowY: 'auto', paddingRight: '6px' }}>
          {filteredPatterns.map(pat => {
            const isActive = pat.id === activePatternId;

            return (
              <button
                key={pat.id}
                onClick={() => setActivePatternId(pat.id)}
                className="glass-card"
                style={{
                  padding: '14px 16px',
                  textAlign: 'left',
                  borderColor: isActive ? '#F59E0B' : 'rgba(255, 255, 255, 0.06)',
                  background: isActive ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.15) 100%)' : 'rgba(31, 41, 55, 0.5)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#FBBF24', fontWeight: 800, background: 'rgba(245, 158, 11, 0.2)', padding: '2px 8px', borderRadius: '6px' }}>
                    [{pat.patternCode}]
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{pat.category.split('.')[1] || pat.category}</span>
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: isActive ? '#FFFFFF' : '#D1D5DB', marginBottom: '4px' }}>
                  {pat.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF', lineHeight: 1.4 }}>
                  <FormattedText text={pat.description} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Pattern Active Detail Card */}
        <div className="glass-panel" style={{ padding: '32px', borderLeft: '4px solid #F59E0B' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#FBBF24', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700, border: '1px solid rgba(245, 158, 11, 0.3)' }}>
              {activePattern.category}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 600 }}>
              Código de Patrón FING: [{activePattern.patternCode}]
            </span>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '12px' }}>
            {activePattern.title}
          </h2>

          <div style={{ fontSize: '1rem', color: '#D1D5DB', marginBottom: '22px', lineHeight: 1.6 }}>
            <FormattedText text={activePattern.description} />
          </div>

          {/* Pattern Math Formula Box */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '14px',
            padding: '18px 24px',
            marginBottom: '24px'
          }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#FBBF24', fontWeight: 700, marginBottom: '8px', letterSpacing: '0.05em' }}>
              Fórmula del Patrón Matemático:
            </div>
            <MathView math={activePattern.patternFormula} displayMode={true} />
          </div>

          {/* Cheat Code Box */}
          <div className="glass-card" style={{ padding: '20px 24px', marginBottom: '28px', borderLeft: '4px solid #10B981', background: 'rgba(16, 185, 129, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34D399', fontWeight: 700, fontSize: '0.98rem', marginBottom: '8px' }}>
              <Zap size={18} fill="#34D399" /> Atajo Rápido de Examen (Cheat Code):
            </div>
            <div style={{ fontSize: '0.95rem', color: '#E5E7EB', lineHeight: 1.6 }}>
              <FormattedText text={activePattern.shortcutRule} />
            </div>
          </div>

          {/* Example Step-by-Step Box */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '24px' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FBBF24', marginBottom: '14px' }}>
              ⚡ Ejemplo Tipo Parcial - Resolución en Segundos:
            </div>
            <div style={{ fontSize: '1.05rem', color: '#F9FAFB', marginBottom: '16px', fontWeight: 600 }}>
              <FormattedText text={activePattern.exampleProblem} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '14px', borderLeft: '3px solid rgba(245, 158, 11, 0.4)', marginBottom: '20px' }}>
              {activePattern.exampleSteps.map((step, idx) => (
                <div key={idx} style={{ fontSize: '0.92rem', color: '#D1D5DB', lineHeight: 1.5 }}>
                  <span style={{ color: '#F59E0B', fontWeight: 700, marginRight: '8px' }}>Paso {idx + 1}:</span>
                  <FormattedText text={step} />
                </div>
              ))}
            </div>

            <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', color: '#34D399', fontWeight: 700, fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={20} color="#10B981" /> Respuesta Directa: <FormattedText text={activePattern.fastAnswer?.includes('$') ? activePattern.fastAnswer : `$${activePattern.fastAnswer}$`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
