import React, { useState } from 'react';
import { REFLEX_MATRIX, META_PATTERNS, HIERARCHY_BLOCKS } from '../data/prerequisites';
import { Brain, Zap, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import MathView from './MathView';
import FormattedText from './FormattedText';

export default function PrerequisitesView() {
  const [activeTab, setActiveTab] = useState('reflejos'); // 'reflejos' | 'metapatrones' | 'bloques'

  return (
    <div className="animate-fade-in" style={{ padding: '32px 24px', maxWidth: '1140px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#818CF8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px', background: 'rgba(99, 102, 241, 0.15)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
          <Brain size={18} color="#818CF8" /> Mapa Maestro de Prerrequisitos & Reflejos Pre-FING
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '8px', letterSpacing: '-0.02em' }}>
          Entrenamiento de Reflejos Automáticos & Meta-Patrones
        </h1>
        <p style={{ fontSize: '1rem', color: '#9CA3AF', maxWidth: '840px', lineHeight: 1.6 }}>
          No estudies aisladamente. Convierte cada estructura en un <strong>reflejo instantáneo</strong> para reconocer qué hacer en los primeros 5 segundos sin agotar tu memoria de trabajo durante el examen.
        </p>
      </div>

      {/* Tabs selector */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '28px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '12px' }}>
        <button
          onClick={() => setActiveTab('reflejos')}
          className={activeTab === 'reflejos' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '10px 18px', fontSize: '0.9rem' }}
        >
          <Zap size={18} color={activeTab === 'reflejos' ? '#FFFFFF' : '#FBBF24'} /> Matriz de Reflejos Automáticos
        </button>

        <button
          onClick={() => setActiveTab('metapatrones')}
          className={activeTab === 'metapatrones' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '10px 18px', fontSize: '0.9rem' }}
        >
          <Sparkles size={18} color={activeTab === 'metapatrones' ? '#FFFFFF' : '#A78BFA'} /> 10 Meta-Patrones Maestros
        </button>

        <button
          onClick={() => setActiveTab('bloques')}
          className={activeTab === 'bloques' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '10px 18px', fontSize: '0.9rem' }}
        >
          <Layers size={18} color={activeTab === 'bloques' ? '#FFFFFF' : '#34D399'} /> 5 Bloques Jerárquicos (40 Niveles)
        </button>
      </div>

      {/* TAB 1: Matriz de Reflejos */}
      {activeTab === 'reflejos' && (
        <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '16px' }}>
          {REFLEX_MATRIX.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '20px', borderLeft: '4px solid #6366F1' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#818CF8', fontWeight: 800, marginBottom: '6px' }}>
                Reflejo #{idx + 1}
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FBBF24', marginBottom: '8px' }}>
                <FormattedText text={item.trigger} />
              </div>
              <div style={{ fontSize: '0.92rem', color: '#D1D5DB', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ArrowRight size={16} color="#10B981" style={{ flexShrink: 0 }} />
                <span><FormattedText text={item.action} /></span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: Meta-Patrones */}
      {activeTab === 'metapatrones' && (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {META_PATTERNS.map((meta, idx) => (
            <div key={meta.id} className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid #8B5CF6' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#A78BFA', background: 'rgba(139, 92, 246, 0.2)', padding: '4px 12px', borderRadius: '12px' }}>
                  {meta.title}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#34D399', fontWeight: 600 }}>
                  Beneficio PI: {meta.benefit}
                </span>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F9FAFB', marginBottom: '12px' }}>
                Pregunta Clave: "{meta.question}"
              </h3>

              <div style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '14px 18px', borderRadius: '10px', border: '1px solid rgba(139, 92, 246, 0.25)' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#A78BFA', fontWeight: 700, marginBottom: '6px' }}>
                  Ejemplos de Aplicación Inmediata:
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {meta.examples.map((ex, exIdx) => (
                    <div key={exIdx} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '6px 12px', borderRadius: '8px' }}>
                      <FormattedText text={ex} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: Bloques Jerárquicos */}
      {activeTab === 'bloques' && (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {HIERARCHY_BLOCKS.map(block => (
            <div key={block.id} className="glass-panel" style={{ padding: '28px', borderLeft: `4px solid ${block.color}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#F9FAFB' }}>
                  {block.title}
                </h2>
                <span style={{ background: 'rgba(255, 255, 255, 0.08)', color: block.color, padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700 }}>
                  {block.badge}
                </span>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#9CA3AF', marginBottom: '20px' }}>
                {block.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '12px' }}>
                {block.levels.map((lvl, lIdx) => (
                  <div key={lIdx} className="glass-card" style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: block.color }}>
                        {lvl.num}
                      </span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F9FAFB' }}>
                        {lvl.name}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#D1D5DB' }}>
                      <FormattedText text={lvl.rule} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
