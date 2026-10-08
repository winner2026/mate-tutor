// MOTOR ADAPTATIVO MVP: ESTÁNDAR 20 EJERCICIOS POR PATRÓN FING (UDELAR)
// Distribución exacta: 2 Diag + 3 Rec + 4 Ejec + 4 Var + 3 Integ + 2 Trans + 2 FING = 20 Ejercicios

export const LEVEL_THRESHOLDS = {
  0: { name: "0. Diagnóstico", targetAccuracy: 1.0, requiredPass: 2, skipAllowed: true, targetCount: 2 },
  1: { name: "1. Reconocimiento", targetAccuracy: 0.80, requiredPass: 3, label: "VER → RECONOCER", targetCount: 3 },
  2: { name: "2. Ejecución Directa", targetAccuracy: 0.85, requiredPass: 4, label: "RECONOCER → EJECUTAR", targetCount: 4 },
  3: { name: "3. Variaciones", targetAccuracy: 0.85, requiredPass: 4, label: "DESCOMPONER", targetCount: 4 },
  4: { name: "4. Integración", targetAccuracy: 0.80, requiredPass: 3, label: "INTEGRAR", targetCount: 3 },
  5: { name: "5. Transferencia", targetAccuracy: 0.80, requiredPass: 2, label: "DESCUBRIR", targetCount: 2 },
  6: { name: "6. Estilo FING", targetAccuracy: 0.75, requiredPass: 2, label: "MAESTRÍA FING", targetCount: 2 }
};

export const DIFFICULTY_DIMENSIONS = [
  { id: "D1", name: "Complejidad Simbólica", desc: "x^2 - 9 → 4x^2 - 36 → x^4 - 81" },
  { id: "D2", name: "Número de Pasos", desc: "1 paso → 2 pasos → 3+ pasos combinados" },
  { id: "D3", name: "Patrones Simultáneos", desc: "Factor común + Diferencia + Dominio" },
  { id: "D4", name: "Visibilidad del Patrón", desc: "Evidente → Oculto → Muy Oculto" },
  { id: "D5", name: "Abstracción Parámetros", desc: "Números → Parámetros a,b → Funciones f(x)" },
  { id: "D6", name: "Presión de Decisión", desc: "Sin tiempo → Con tiempo → Distractores FING" }
];

export const ADAPTIVE_PATTERNS = [
  {
    id: "patron-dif-cuadrados",
    title: "Diferencia de Cuadrados $a^2 - b^2$",
    category: "Álgebra & Factorización",
    description: "Reconocimiento y ejecución del patrón $a^2 - b^2 = (a-b)(a+b)$ adaptativo.",
    targetBankSize: 20,
    bank: [
      // NIVEL 0: DIAGNÓSTICO (2 ejercicios)
      {
        id: "dc-0-1",
        level: 0,
        type: "diagnostic",
        question: "Simplifica la expresión elemental: $x^2 - 25$",
        options: ["$(x-5)(x+5)$", "$(x-5)^2$", "$(x+5)^2$", "$x(x-25)$"],
        correctAnswer: 0,
        explanation: "Es una diferencia de cuadrados directa con $a=x$ y $b=5$: $x^2-25 = (x-5)(x+5)$."
      },
      {
        id: "dc-0-2",
        level: 0,
        type: "diagnostic",
        question: "Simplifica la fracción algebraica: $$\\frac{x^2 - 25}{x - 5} \\quad (x \\neq 5)$$",
        options: ["$x + 5$", "$x - 5$", "1", "$x^2 + 5$"],
        correctAnswer: 0,
        explanation: "Factorizando el numerador: $\\frac{(x-5)(x+5)}{x-5} = x+5$."
      },

      // NIVEL 1: RECONOCIMIENTO (3 ejercicios - VER -> RECONOCER)
      {
        id: "dc-1-1",
        level: 1,
        type: "recognition",
        question: "¿Qué estructura algebraica representa la expresión $x^2 - 16$?",
        options: [
          "Factor común",
          "Diferencia de cuadrados ($a^2 - b^2$)",
          "Trinomio cuadrado perfecto",
          "Suma de cubos"
        ],
        correctAnswer: 1,
        explanation: "Es de la forma $x^2 - 4^2$, una clara diferencia de cuadrados."
      },
      {
        id: "dc-1-2",
        level: 1,
        type: "recognition",
        question: "Identifica la estructura de $9x^2 - 25$:",
        options: [
          "Diferencia de cuadrados con $a = 3x, b = 5$",
          "Diferencia de cuadrados con $a = 9x, b = 25$",
          "Trinomio no factorizable",
          "Factor común 9"
        ],
        correctAnswer: 0,
        explanation: "$9x^2 = (3x)^2$ y $25 = 5^2$, por lo que $a=3x$ y $b=5$."
      },
      {
        id: "dc-1-3",
        level: 1,
        type: "recognition",
        question: "Indica el patrón de la expresión $(2x)^2 - 3^2$:",
        options: [
          "Diferencia de cuadrados con $a = 2x$ y $b = 3$",
          "No es diferencia de cuadrados",
          "Cuadrado de un binomio",
          "Factor común"
        ],
        correctAnswer: 0,
        explanation: "Tiene la forma exacta $a^2 - b^2$ con bases $2x$ y $3$."
      },

      // NIVEL 2: EJECUCIÓN DIRECTA (4 ejercicios)
      {
        id: "dc-2-1",
        level: 2,
        type: "mechanic",
        question: "Factoriza directamente: $x^2 - 49$",
        options: ["$(x-7)(x+7)$", "$(x-7)^2$", "$(x+7)^2$", "$x(x-49)$"],
        correctAnswer: 0,
        explanation: "$x^2 - 49 = (x-7)(x+7)$."
      },
      {
        id: "dc-2-2",
        level: 2,
        type: "mechanic",
        question: "Factoriza directamente: $4x^2 - 9$",
        options: ["$(2x-3)(2x+3)$", "$(4x-3)(4x+3)$", "$(2x-9)(2x+9)$", "$(2x-3)^2$"],
        correctAnswer: 0,
        explanation: "$(2x)^2 - 3^2 = (2x-3)(2x+3)$."
      },
      {
        id: "dc-2-3",
        level: 2,
        type: "mechanic",
        question: "Factoriza directamente: $25x^2 - 16$",
        options: ["$(5x-4)(5x+4)$", "$(5x-16)(5x+16)$", "$(25x-4)(25x+4)$", "$(5x-4)^2$"],
        correctAnswer: 0,
        explanation: "$(5x)^2 - 4^2 = (5x-4)(5x+4)$."
      },
      {
        id: "dc-2-4",
        level: 2,
        type: "mechanic",
        question: "Factoriza la expresión de dos variables: $a^2 - 81b^2$",
        options: ["$(a-9b)(a+9b)$", "$(a-81b)(a+81b)$", "$(a-9b)^2$", "$a(a-81b)$"],
        correctAnswer: 0,
        explanation: "$a^2 - (9b)^2 = (a-9b)(a+9b)$."
      },

      // NIVEL 3: VARIACIONES (4 ejercicios - descomposición y factores comunes)
      {
        id: "dc-3-1",
        level: 3,
        type: "variation",
        question: "Factoriza completamente: $4x^2 - 36$",
        options: [
          "$4(x-3)(x+3)$",
          "$(2x-6)(2x+6)$ pero incompleta",
          "$4(x-9)(x+9)$",
          "$(4x-6)(4x+6)$"
        ],
        correctAnswer: 0,
        explanation: "1º Factor común: $4(x^2 - 9)$. 2º Diferencia de cuadrados: $4(x-3)(x+3)$."
      },
      {
        id: "dc-3-2",
        level: 3,
        type: "variation",
        question: "Factoriza totalmente la potencia par: $x^4 - 16$",
        options: [
          "$(x-2)(x+2)(x^2+4)$",
          "$(x^2-4)(x^2+4)$ pero incompleta",
          "$(x-2)^2(x+2)^2$",
          "$(x-4)(x+4)(x^2+4)$"
        ],
        correctAnswer: 0,
        explanation: "1º $(x^2-4)(x^2+4)$. 2º Descomponer $x^2-4 = (x-2)(x+2)$."
      },
      {
        id: "dc-3-3",
        level: 3,
        type: "contrast",
        isContrast: true,
        question: "⚡ EJERCICIO DE CONTRASTE: Compara $A = x^2 - 9$ y $B = x^2 + 9$. ¿Por qué se resuelven distinto?",
        options: [
          "A es diferencia de cuadrados $(x-3)(x+3)$; B no se factoriza en Reales $\\mathbb{R}$",
          "Ambos se factorizan igual como $(x-3)(x+3)$",
          "B se factoriza como $(x+3)^2$",
          "A es primo y B es compuesto"
        ],
        correctAnswer: 0,
        explanation: "La resta $a^2-b^2$ tiene raíces reales, mientras que la suma de cuadrados $a^2+b^2$ no es reducible en $\\mathbb{R}$."
      },
      {
        id: "dc-3-4",
        level: 3,
        type: "trap",
        isTrap: true,
        question: "⚠️ EJERCICIO TRAMPA: ¿Es verdadero que $\\sqrt{x^2} = x$ para todo $x \\in \\mathbb{R}$?",
        options: [
          "Falso, la regla rigurosa en $\\mathbb{R}$ es $\\sqrt{x^2} = |x|$",
          "Verdadero siempre",
          "Verdadero solo si $x < 0$",
          "Falso, siempre da $-x$"
        ],
        correctAnswer: 0,
        explanation: "¡Error clásico FING! Para $x = -5$, $\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |-5|$."
      },

      // NIVEL 4: INTEGRACIÓN (3 ejercicios)
      {
        id: "dc-4-1",
        level: 4,
        type: "integration",
        question: "Simplifica al máximo la fracción: $$\\frac{x^2 - 9}{x^2 - 3x}$$",
        options: ["$\\frac{x + 3}{x}$", "$\\frac{x - 3}{x}$", "$\\frac{3}{x}$", "$\\frac{x + 3}{x - 3}$"],
        correctAnswer: 0,
        explanation: "Numerador: $(x-3)(x+3)$. Denominador: $x(x-3)$. Cancelando $(x-3)$: $\\frac{x+3}{x}$."
      },
      {
        id: "dc-4-2",
        level: 4,
        type: "integration",
        question: "Calcula el dominio de $f(x) = \\frac{1}{x^2 - 16}$:",
        options: [
          "$\\mathbb{R} \\setminus \\{-4, 4\\}$",
          "$\\mathbb{R} \\setminus \\{4\\}$",
          "$(4, +\\infty)$",
          "$\\mathbb{R} \\setminus \\{16\\}$"
        ],
        correctAnswer: 0,
        explanation: "Denominador se anula en $x^2-16 = 0 \\implies x = \\pm 4$."
      },
      {
        id: "dc-4-3",
        level: 4,
        type: "integration",
        question: "Simplifica la fracción con radicales: $$\\frac{x - 9}{\\sqrt{x} - 3} \\quad (x \\ge 0, x \\neq 9)$$",
        options: ["$\\sqrt{x} + 3$", "$\\sqrt{x} - 3$", "$x + 3$", "$\\frac{1}{\\sqrt{x} + 3}$"],
        correctAnswer: 0,
        explanation: "$x - 9 = (\\sqrt{x}-3)(\\sqrt{x}+3)$, cancelando queda $\\sqrt{x}+3$."
      },

      // NIVEL 5: TRANSFERENCIA (2 ejercicios)
      {
        id: "dc-5-1",
        level: 5,
        type: "transfer",
        question: "Evalúa el límite indeterminado: $$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$$",
        options: ["$6$", "$0$", "$3$", "No existe"],
        correctAnswer: 0,
        explanation: "Indeterminación $\\frac{0}{0}$. Factorizando: $\\lim_{x \\to 3} (x+3) = 6$."
      },
      {
        id: "dc-5-2",
        level: 5,
        type: "transfer",
        question: "Calcula el límite indeterminado con constante $a \\neq 0$: $$\\lim_{x \\to a} \\frac{x^2 - a^2}{x - a}$$",
        options: ["$2a$", "$a$", "$0$", "$a^2$"],
        correctAnswer: 0,
        explanation: "$\\lim_{x \\to a} \\frac{(x-a)(x+a)}{x-a} = 2a$."
      },

      // NIVEL 6: ESTILO FING (2 ejercicios)
      {
        id: "dc-6-1",
        level: 6,
        type: "fing",
        question: "⭐ PARCIAL FING: Sea $f(x) = \\frac{x^4 - 81}{x^2 - 9}$. ¿Cuál es el valor del límite $\\lim_{x \\to 3} f(x)$?",
        options: ["$18$", "$0$", "$9$", "$36$", "No existe el límite"],
        correctAnswer: 0,
        explanation: "$x^4 - 81 = (x^2-9)(x^2+9)$. Cancelando queda $x^2+9 \\implies 3^2+9 = 18$."
      },
      {
        id: "dc-6-2",
        level: 6,
        type: "fing",
        question: "⭐ PARCIAL FING: ¿Para qué valores de $k \\in \\mathbb{R}$ es continua en $x = 2$ la función? $$h(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2} & \\text{si } x \\neq 2 \\\\ k^2 & \\text{si } x = 2 \\end{cases}$$",
        options: ["$k = \\pm 2$", "$k = 4$", "$k = 2$ únicamente", "$k = 0$", "No existe"],
        correctAnswer: 0,
        explanation: "Límite en 2 es 4. $k^2 = 4 \\implies k = \\pm 2$."
      }
    ]
  },
  {
    id: "patron-indeterminacion-cero",
    title: "Indeterminación $0/0$ por Factorización",
    category: "Límites & Cálculo",
    description: "Resolución de indeterminaciones del tipo $\\frac{0}{0}$ cancelando el factor $(x - a)$ que anula la expresión.",
    targetBankSize: 20,
    bank: [
      {
        id: "lim-0-1",
        level: 0,
        type: "diagnostic",
        question: "Al evaluar $\\lim_{x \\to 2} \\frac{x - 2}{x^2 - 4}$, ¿qué indeterminación se presenta?",
        options: ["$\\frac{0}{0}$", "$\\frac{\\infty}{\\infty}$", "$0 \\cdot \\infty$", "$1^\\infty$"],
        correctAnswer: 0,
        explanation: "En $x=2$: numerador $2-2=0$ y denominador $4-4=0$, indeterminación $\\frac{0}{0}$."
      },
      {
        id: "lim-0-2",
        level: 0,
        type: "diagnostic",
        question: "Resuelve el límite levantando la indeterminación: $$\\lim_{x \\to 2} \\frac{x - 2}{x^2 - 4}$$",
        options: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$0$", "$4$"],
        correctAnswer: 0,
        explanation: "$\\frac{x-2}{(x-2)(x+2)} = \\frac{1}{x+2} \\implies \\frac{1}{4}$."
      },
      {
        id: "lim-1-1",
        level: 1,
        type: "recognition",
        question: "En una indeterminación $\\frac{0}{0}$ cuando $x \\to a$, ¿qué factor algebraico debemos cancelar en numerador y denominador?",
        options: ["$(x - a)$", "$(x + a)$", "$x$", "$a$"],
        correctAnswer: 0,
        explanation: "Por el Teorema del Factor, la causa de anulación en $x=a$ es siempre $(x - a)$."
      },
      {
        id: "lim-2-1",
        level: 2,
        type: "mechanic",
        question: "Calcula: $$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$$",
        options: ["$2$", "$1$", "$0$", "No existe"],
        correctAnswer: 0,
        explanation: "$\\frac{(x-1)(x+1)}{x-1} = x+1 \\implies 2$."
      },
      {
        id: "lim-3-1",
        level: 3,
        type: "variation",
        question: "Calcula el límite con trinomio: $$\\lim_{x \\to 3} \\frac{x^2 - 5x + 6}{x - 3}$$",
        options: ["$1$", "$-1$", "$0$", "$6$"],
        correctAnswer: 0,
        explanation: "$\\frac{(x-3)(x-2)}{x-3} = x-2 \\implies 3-2 = 1$."
      },
      {
        id: "lim-4-1",
        level: 4,
        type: "integration",
        question: "Simplifica y calcula el límite doblemente indeterminado: $$\\lim_{x \\to 2} \\frac{x^3 - 8}{x^2 - 4}$$",
        options: ["$3$", "$\\frac{3}{2}$", "$0$", "$\\frac{12}{4} = 3$"],
        correctAnswer: 0,
        explanation: "Numerador $x^3-8 = (x-2)(x^2+2x+4)$. Denominador $(x-2)(x+2)$. Queda $\\frac{4+4+4}{4} = 3$."
      },
      {
        id: "lim-5-1",
        level: 5,
        type: "transfer",
        question: "Determina $a$ para que exista el límite finito: $$\\lim_{x \\to 1} \\frac{x^2 + ax - 3}{x - 1}$$",
        options: ["$a = 2$", "$a = 3$", "$a = -2$", "$a = 1$"],
        correctAnswer: 0,
        explanation: "Para indeterminación levantable $0/0$, el numerador en $x=1$ debe ser 0: $1^2 + a(1) - 3 = 0 \\implies a = 2$."
      },
      {
        id: "lim-6-1",
        level: 6,
        type: "fing",
        question: "⭐ PARCIAL FING: Si $\\lim_{x \\to 0} \\frac{\\sin(2x)}{x} = 2$, halla el límite: $$\\lim_{x \\to 0} \\frac{x^2 + \\sin(2x)}{3x}$$",
        options: ["$\\frac{2}{3}$", "$1$", "$\\frac{1}{3}$", "$0$", "$\\frac{3}{2}$"],
        correctAnswer: 0,
        explanation: "$\\frac{x}{3} + \\frac{\\sin(2x)}{3x} \\implies 0 + \\frac{1}{3}(2) = \\frac{2}{3}$."
      }
    ]
  }
];

export function getInitialUserState() {
  return {
    completedPatterns: {},
    patternProgress: {
      "patron-dif-cuadrados": {
        currentLevel: 0,
        diagnosticPassed: false,
        levelScores: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] },
        unlockedLevel: 0,
        history: [],
        masteryPercent: 0,
        totalCorrect: 0
      },
      "patron-indeterminacion-cero": {
        currentLevel: 0,
        diagnosticPassed: false,
        levelScores: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] },
        unlockedLevel: 0,
        history: [],
        masteryPercent: 0,
        totalCorrect: 0
      }
    }
  };
}

export function processAnswer(userState, patternId, questionObj, isCorrect) {
  const newState = JSON.parse(JSON.stringify(userState));
  if (!newState.patternProgress[patternId]) {
    newState.patternProgress[patternId] = {
      currentLevel: 0,
      diagnosticPassed: false,
      levelScores: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] },
      unlockedLevel: 0,
      history: [],
      masteryPercent: 0,
      totalCorrect: 0
    };
  }

  const prog = newState.patternProgress[patternId];
  const lvl = questionObj.level;

  if (!prog.levelScores[lvl]) {
    prog.levelScores[lvl] = [];
  }
  prog.levelScores[lvl].push(isCorrect ? 1 : 0);
  if (isCorrect) prog.totalCorrect = (prog.totalCorrect || 0) + 1;

  prog.history.push({ questionId: questionObj.id, level: lvl, correct: isCorrect, time: new Date().toISOString() });

  // LEVEL 0 DIAGNOSTIC BRANCHING
  if (lvl === 0) {
    const diagScores = prog.levelScores[0];
    if (diagScores.length >= 2) {
      const allCorrect = diagScores.every(s => s === 1);
      if (allCorrect) {
        prog.diagnosticPassed = true;
        prog.unlockedLevel = 3; // Jump directly to Level 3
        prog.currentLevel = 3;
      } else {
        prog.diagnosticPassed = false;
        prog.unlockedLevel = 1;
        prog.currentLevel = 1;
      }
    }
  } else {
    // Check level progression for Levels 1 to 6
    const scores = prog.levelScores[lvl];
    const correctCount = scores.filter(s => s === 1).length;
    const accuracy = correctCount / scores.length;
    const thresh = LEVEL_THRESHOLDS[lvl];

    if (scores.length >= thresh.requiredPass && accuracy >= thresh.targetAccuracy) {
      if (prog.unlockedLevel <= lvl && lvl < 6) {
        prog.unlockedLevel = lvl + 1;
        prog.currentLevel = lvl + 1;
      }
    }
  }

  // EARLY STOP MASTERY RULE:
  // If student correctly answers >= 8 exercises with unlockedLevel >= 5, pattern is 100% Mastered!
  if (prog.totalCorrect >= 8 && prog.unlockedLevel >= 5) {
    prog.masteryPercent = 100;
  } else {
    prog.masteryPercent = Math.min(100, Math.round((prog.unlockedLevel / 6) * 100));
  }

  return newState;
}
