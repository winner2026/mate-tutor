import React from 'react';
import { BookOpen, Award, Flame, BrainCircuit, FileText, CheckCircle2, Target } from 'lucide-react';

export default function Navbar({ progressPercent, streak, currentView, setView }) {
  return (
    <header style={{
      gridColumn: '1 / -1',
      height: '64px',
      background: 'rgba(17, 24, 39, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      zIndex: 50
    }}>
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #6366F1 0%, #4338CA 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)'
        }}>
          <BrainCircuit size={22} color="#FFFFFF" />
        </div>
        <div>
          <h1 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#F9FAFB', margin: 0 }}>
            Tutor FING <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.2)', color: '#818CF8', border: '1px solid rgba(99, 102, 241, 0.3)' }}>Udelar</span>
          </h1>
          <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>Preparación Cálculo I & Gal 1</p>
        </div>
      </div>

      {/* Quick Nav / Modes */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={() => setView('learn')}
          className={currentView === 'learn' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '8px 12px', fontSize: '0.82rem' }}
        >
          <BookOpen size={16} /> Aprender
        </button>

        <button
          onClick={() => setView('adaptive')}
          className={currentView === 'adaptive' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '8px 12px', fontSize: '0.82rem', borderColor: currentView === 'adaptive' ? '#10B981' : 'rgba(16, 185, 129, 0.3)', color: currentView === 'adaptive' ? '#FFFFFF' : '#34D399' }}
        >
          <Target size={16} color="#34D399" /> 🎯 Dominio Adaptativo
        </button>

        <button
          onClick={() => setView('prerequisites')}
          className={currentView === 'prerequisites' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '8px 12px', fontSize: '0.82rem', borderColor: currentView === 'prerequisites' ? '#818CF8' : 'rgba(99, 102, 241, 0.3)', color: currentView === 'prerequisites' ? '#FFFFFF' : '#818CF8' }}
        >
          <BrainCircuit size={16} color="#818CF8" /> 🧠 Reflejos
        </button>

        <button
          onClick={() => setView('patterns')}
          className={currentView === 'patterns' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '8px 12px', fontSize: '0.82rem', borderColor: currentView === 'patterns' ? '#F59E0B' : 'rgba(245, 158, 11, 0.3)', color: currentView === 'patterns' ? '#FFFFFF' : '#FBBF24' }}
        >
          <Flame size={16} color="#F59E0B" /> ⚡ Patrones PI
        </button>

        <button
          onClick={() => setView('diagnostic')}
          className={currentView === 'diagnostic' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '8px 12px', fontSize: '0.82rem' }}
        >
          <CheckCircle2 size={16} color="#10B981" /> Diagnóstico
        </button>

        <button
          onClick={() => setView('exam')}
          className={currentView === 'exam' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '8px 12px', fontSize: '0.82rem' }}
        >
          <FileText size={16} color="#F59E0B" /> Parciales FING
        </button>
      </div>

      {/* Progress Metrics */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F59E0B', fontWeight: 600, fontSize: '0.9rem' }}>
          <Flame size={18} />
          <span>{streak} Días</span>
        </div>

        <div style={{ width: '140px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '4px' }}>
            <span>Progreso</span>
            <span style={{ fontWeight: 600, color: '#818CF8' }}>{progressPercent}%</span>
          </div>
          <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${progressPercent}%`,
              background: 'linear-gradient(90deg, #6366F1 0%, #10B981 100%)',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>
      </div>
    </header>
  );
}
