import React from 'react';
import { CheckCircle, Lock, BookOpen, ChevronRight, Sparkles, Compass } from 'lucide-react';
import { CURRICULUM } from '../data/curriculum';

export default function Sidebar({ selectedTopic, setSelectedTopic, completedTopics, currentLevelId }) {
  let lastPillar = null;

  return (
    <aside style={{
      background: 'rgba(17, 24, 39, 0.6)',
      backdropFilter: 'blur(12px)',
      borderRight: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '20px 16px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h2 style={{ fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9CA3AF', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Compass size={16} color="#818CF8" /> Mapa Cognitivo FING
            </h2>
            <p style={{ fontSize: '0.72rem', color: '#6B7280', margin: 0 }}>Evolución: Fundamentos → Integración</p>
          </div>
          <span style={{ fontSize: '0.75rem', background: 'rgba(99, 102, 241, 0.2)', color: '#818CF8', padding: '2px 8px', borderRadius: '10px', fontWeight: 600 }}>
            {completedTopics.length} Completados
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {CURRICULUM.map((level, lvlIdx) => {
            const isCurrentLevel = level.id === currentLevelId;
            const levelCompletedCount = level.topics.filter(t => completedTopics.includes(t.id)).length;
            const levelIsFullyDone = level.topics.length > 0 && levelCompletedCount === level.topics.length;

            const showPillarHeader = level.macroPillar && level.macroPillar !== lastPillar;
            if (level.macroPillar) {
              lastPillar = level.macroPillar;
            }

            return (
              <React.Fragment key={level.id}>
                {showPillarHeader && (
                  <div style={{
                    marginTop: lvlIdx > 0 ? '12px' : '0',
                    marginBottom: '4px',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    background: 'rgba(99, 102, 241, 0.12)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#A5B4FC',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Sparkles size={13} color="#A5B4FC" /> {level.macroPillar}
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '6px 8px',
                    borderRadius: '8px',
                    background: isCurrentLevel ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                    border: isCurrentLevel ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className={`badge ${level.badgeClass}`} style={{ fontSize: '0.7rem' }}>
                        Nivel {lvlIdx}
                      </span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: isCurrentLevel ? '#F9FAFB' : '#D1D5DB' }}>
                        {level.title.split(':')[1] || level.title}
                      </span>
                    </div>
                    {levelIsFullyDone && <CheckCircle size={16} color="#10B981" />}
                  </div>

                  {/* Topics in level */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '8px' }}>
                    {level.topics.map((topic) => {
                      const isSelected = selectedTopic?.id === topic.id;
                      const isDone = completedTopics.includes(topic.id);

                      return (
                        <button
                          key={topic.id}
                          onClick={() => setSelectedTopic(topic)}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '10px 12px',
                            borderRadius: '8px',
                            border: isSelected ? '1px solid rgba(99, 102, 241, 0.5)' : '1px solid transparent',
                            background: isSelected
                              ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(79, 70, 229, 0.15) 100%)'
                              : isDone
                              ? 'rgba(16, 185, 129, 0.08)'
                              : 'rgba(255, 255, 255, 0.02)',
                            color: isSelected ? '#FFFFFF' : isDone ? '#34D399' : '#9CA3AF',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            transition: 'all 0.2s ease',
                            fontSize: '0.83rem',
                            fontWeight: isSelected ? 600 : 400
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                            {isDone ? (
                              <CheckCircle size={14} color="#10B981" style={{ flexShrink: 0 }} />
                            ) : (
                              <BookOpen size={14} style={{ opacity: isSelected ? 1 : 0.6, flexShrink: 0 }} />
                            )}
                            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {topic.title}
                            </span>
                          </div>
                          {isSelected && <ChevronRight size={14} color="#818CF8" style={{ flexShrink: 0 }} />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
