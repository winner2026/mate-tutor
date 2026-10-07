import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TheoryLesson from './components/TheoryLesson';
import ExercisePractice from './components/ExercisePractice';
import DiagnosticTest from './components/DiagnosticTest';
import ExamSimulator from './components/ExamSimulator';
import FastPatternsView from './components/FastPatternsView';
import PrerequisitesView from './components/PrerequisitesView';
import { CURRICULUM } from './data/curriculum';

export default function App() {
  const [currentView, setView] = useState('learn'); // 'learn' | 'patterns' | 'diagnostic' | 'exam'
  const [selectedTopic, setSelectedTopic] = useState(CURRICULUM[0].topics[0]);
  const [mode, setMode] = useState('theory'); // 'theory' | 'practice'
  const [completedTopics, setCompletedTopics] = useState(() => {
    try {
      const saved = localStorage.getItem('fing_completed_topics');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [streak, setStreak] = useState(3);

  useEffect(() => {
    try {
      localStorage.setItem('fing_completed_topics', JSON.stringify(completedTopics));
    } catch (e) {}
  }, [completedTopics]);

  // Calculate total topics across curriculum
  const totalTopicsCount = CURRICULUM.reduce((acc, lvl) => acc + lvl.topics.length, 0);
  const progressPercent = Math.round((completedTopics.length / totalTopicsCount) * 100);

  // Find level of selected topic
  const currentLevel = CURRICULUM.find(lvl => lvl.topics.some(t => t.id === selectedTopic?.id)) || CURRICULUM[0];

  const handleCompleteTopic = (topicId) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics(prev => [...prev, topicId]);
    }
    setMode('theory');
  };

  const handleFinishDiagnostic = (recommendedLevelId) => {
    const targetLvl = CURRICULUM.find(l => l.id === recommendedLevelId) || CURRICULUM[0];
    if (targetLvl && targetLvl.topics[0]) {
      setSelectedTopic(targetLvl.topics[0]);
    }
    setView('learn');
    setMode('theory');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: 'var(--bg-main)' }}>
      {/* Top Navbar */}
      <Navbar
        progressPercent={progressPercent}
        streak={streak}
        currentView={currentView}
        setView={setView}
      />

      {/* Main Container */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: currentView === 'learn' ? '280px 1fr' : '1fr', overflow: 'hidden' }}>
        {/* Sidebar (only in learn mode) */}
        {currentView === 'learn' && (
          <Sidebar
            selectedTopic={selectedTopic}
            setSelectedTopic={(t) => {
              setSelectedTopic(t);
              setMode('theory');
            }}
            completedTopics={completedTopics}
            currentLevelId={currentLevel.id}
          />
        )}

        {/* Content Area */}
        <main style={{ overflowY: 'auto', flex: 1, background: 'radial-gradient(ellipse at top, #111827 0%, #0B0F19 100%)' }}>
          {currentView === 'learn' && (
            <>
              {mode === 'theory' ? (
                <TheoryLesson
                  topic={selectedTopic}
                  levelInfo={currentLevel}
                  onStartPractice={() => setMode('practice')}
                />
              ) : (
                <ExercisePractice
                  topic={selectedTopic}
                  onCompleteTopic={handleCompleteTopic}
                  onBackToTheory={() => setMode('theory')}
                />
              )}
            </>
          )}

          {currentView === 'patterns' && (
            <FastPatternsView />
          )}

          {currentView === 'prerequisites' && (
            <PrerequisitesView />
          )}

          {currentView === 'diagnostic' && (
            <DiagnosticTest onFinishDiagnostic={handleFinishDiagnostic} />
          )}

          {currentView === 'exam' && (
            <ExamSimulator />
          )}
        </main>
      </div>
    </div>
  );
}
