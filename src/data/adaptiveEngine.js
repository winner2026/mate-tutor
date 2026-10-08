// MOTOR PEDAGÓGICO ADAPTATIVO POR DOMINIO DE PATRONES FING (UDELAR)
// Arquitectura pedagógica de 6 Niveles + Diagnóstico (30 posiciones de entrenamiento por patrón)

export const LEVEL_THRESHOLDS = {
  0: { name: "0. Diagnóstico", targetAccuracy: 1.0, requiredPass: 2, skipAllowed: true },
  1: { name: "1. Reconocimiento", targetAccuracy: 0.80, requiredPass: 3, label: "VER → RECONOCER" },
  2: { name: "2. Ejecución Mecánica", targetAccuracy: 0.85, requiredPass: 4, label: "RECONOCER → EJECUTAR" },
  3: { name: "3. Variación & Descomposición", targetAccuracy: 0.85, requiredPass: 5, label: "DESCOMPONER" },
  4: { name: "4. Integración Multipatrón", targetAccuracy: 0.80, requiredPass: 5, label: "INTEGRAR" },
  5: { name: "5. Transferencia Sin Aviso", targetAccuracy: 0.80, requiredPass: 4, label: "DESCUBRIR" },
  6: { name: "6. Problema Tipo FING", targetAccuracy: 0.75, requiredPass: 3, label: "MAESTRÍA FING" }
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
    category: "Factorización & Álgebra",
    description: "Reconocimiento y ejecución del patrón $a^2 - b^2 = (a-b)(a+b)$ hasta nivel transferencia y exámenes FING.",
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
        question: "Simplifica el cociente de la expresión previa: $$\\frac{x^2 - 25}{x - 5} \\quad (x \\neq 5)$$",
        options: ["$x + 5$", "$x - 5$", "1", "$x^2 + 5$"],
        correctAnswer: 0,
        explanation: "Factorizando el numerador: $\\frac{(x-5)(x+5)}{x-5} = x+5$."
      },

      // NIVEL 1: RECONOCIMIENTO (4 ejercicios - VER -> RECONOCER)
      {
        id: "dc-1-1",
        level: 1,
        type: "recognition",
        question: "¿Qué patrón algebraico representa la expresión $x^2 - 16$?",
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
        question: "Identifica la estructura exacta de $9x^2 - 25$:",
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
        question: "Indica el patrón de la expresión invertida $49 - y^2$:",
        options: [
          "Diferencia de cuadrados con $a = 7, b = y$",
          "No es diferencia de cuadrados porque empieza por número",
          "Cuadrado de un binomio",
          "Factor común $y$"
        ],
        correctAnswer: 0,
        explanation: "$49 = 7^2$, por lo que $49 - y^2 = 7^2 - y^2 = (7-y)(7+y)$."
      },
      {
        id: "dc-1-4",
        level: 1,
        type: "recognition",
        question: "¿Es la expresión $(2x)^2 - 3^2$ una diferencia de cuadrados válida?",
        options: [
          "Sí, con $a = 2x$ y $b = 3$",
          "No, porque tiene paréntesis",
          "Solo si $x > 0$",
          "Es una suma de cuadrados"
        ],
        correctAnswer: 0,
        explanation: "Tiene la forma exacta $a^2 - b^2$ con bases $2x$ y $3$."
      },

      // NIVEL 2: EJECUCIÓN MECÁNICA (5 ejercicios)
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
        question: "Factoriza la expresión con dos variables: $a^2 - 81b^2$",
        options: ["$(a-9b)(a+9b)$", "$(a-81b)(a+81b)$", "$(a-9b)^2$", "$a(a-81b)$"],
        correctAnswer: 0,
        explanation: "$a^2 - (9b)^2 = (a-9b)(a+9b)$."
      },
      {
        id: "dc-2-5",
        level: 2,
        type: "mechanic",
        question: "Factoriza: $100x^2 - 1$",
        options: ["$(10x-1)(10x+1)$", "$(100x-1)(100x+1)$", "$(10x-1)^2$", "No es factorizable"],
        correctAnswer: 0,
        explanation: "$(10x)^2 - 1^2 = (10x-1)(10x+1)$."
      },

      // NIVEL 3: VARIACIÓN & DESCOMPOSICIÓN (6 ejercicios - factor común + diferencia o exponentes pares)
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
        explanation: "1º Extraer factor común: $4(x^2 - 9)$. 2º Diferencia de cuadrados: $4(x-3)(x+3)$."
      },
      {
        id: "dc-3-2",
        level: 3,
        type: "variation",
        question: "Factoriza totalmente la potencia superior: $x^4 - 16$",
        options: [
          "$(x-2)(x+2)(x^2+4)$",
          "$(x^2-4)(x^2+4)$ pero incompleta",
          "$(x-2)^2(x+2)^2$",
          "$(x-4)(x+4)(x^2+4)$"
        ],
        correctAnswer: 0,
        explanation: "1º $(x^2-4)(x^2+4)$. 2º Descomponer el primer factor: $(x-2)(x+2)(x^2+4)$."
      },
      {
        id: "dc-3-3",
        level: 3,
        type: "variation",
        question: "Factoriza la expresión con factor común variable: $3x^3 - 12x$",
        options: [
          "$3x(x-2)(x+2)$",
          "$3(x^2-4)x$",
          "$(3x-6)(x+2)$",
          "$3x(x-4)(x+4)$"
        ],
        correctAnswer: 0,
        explanation: "1º Factor común $3x$: $3x(x^2-4)$. 2º Diferencia de cuadrados: $3x(x-2)(x+2)$."
      },
      {
        id: "dc-3-4",
        level: 3,
        type: "variation",
        question: "Factoriza en la suma de términos compuestos: $(x+1)^2 - 9$",
        options: [
          "$(x-2)(x+4)$",
          "$(x+1-3)(x+1+3) = (x-2)(x+4)$",
          "$(x-8)(x+10)$",
          "$x^2 - 8$"
        ],
        correctAnswer: 0,
        explanation: "$((x+1)-3)((x+1)+3) = (x-2)(x+4)$."
      },
      {
        id: "dc-3-5",
        level: 3,
        type: "contrast",
        isContrast: true,
        question: "⚡ EJERCICIO DE CONTRASTE: Compara $A = x^2 - 9$ y $B = x^2 + 9$. ¿Por qué se resuelven distinto?",
        options: [
          "A es diferencia de cuadrados $(x-3)(x+3)$; B no es factorizable en los Reales $\\mathbb{R}$",
          "Ambos se factorizan igual como $(x-3)(x+3)$",
          "B se factoriza como $(x+3)^2$",
          "A es primo y B es compuesto"
        ],
        correctAnswer: 0,
        explanation: "La resta $a^2-b^2$ es factorizable en $\\mathbb{R}$, pero la suma $a^2+b^2$ carece de raíces reales."
      },
      {
        id: "dc-3-6",
        level: 3,
        type: "trap",
        isTrap: true,
        question: "⚠️ EJERCICIO TRAMPA: ¿Es correcto afirmar que $\\sqrt{x^2} = x$ para todo $x \\in \\mathbb{R}$?",
        options: [
          "Falso, la regla rigurosa en $\\mathbb{R}$ es $\\sqrt{x^2} = |x|$",
          "Verdadero, las raíces siempre cancelan cuadrados",
          "Verdadero solo si $x < 0$",
          "Falso, siempre da $-x$"
        ],
        correctAnswer: 0,
        explanation: "¡Error clásico FING! Para $x = -5$, $\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |-5|$, no $-5$."
      },

      // NIVEL 4: INTEGRACIÓN MULTIPATRÓN (6 ejercicios)
      {
        id: "dc-4-1",
        level: 4,
        type: "integration",
        question: "Simplifica al máximo la fracción algebraica: $$\\frac{x^2 - 9}{x^2 - 3x}$$",
        options: [
          "$\\frac{x + 3}{x}$",
          "$\\frac{x - 3}{x}$",
          "$\\frac{3}{x}$",
          "$\\frac{x + 3}{x - 3}$"
        ],
        correctAnswer: 0,
        explanation: "Numerador: $(x-3)(x+3)$. Denominador: $x(x-3)$. Cancelando $(x-3)$: $\\frac{x+3}{x}$."
      },
      {
        id: "dc-4-2",
        level: 4,
        type: "integration",
        question: "Simplifica la expresión con doble factorización: $$\\frac{2x^2 - 8}{x^2 - 4x + 4}$$",
        options: [
          "$\\frac{2(x + 2)}{x - 2}$",
          "$\\frac{2(x - 2)}{x + 2}$",
          "$\\frac{2}{x - 2}$",
          "$2$"
        ],
        correctAnswer: 0,
        explanation: "Numerador: $2(x-2)(x+2)$. Denominador: $(x-2)^2$. Cancelando un factor: $\\frac{2(x+2)}{x-2}$."
      },
      {
        id: "dc-4-3",
        level: 4,
        type: "integration",
        question: "Resuelve la inecuación racional previa comprobación de signos: $$\\frac{x^2 - 4}{x + 1} \\le 0$$",
        options: [
          "$(-\\infty, -2] \\cup (-1, 2]$",
          "$[-2, 2]$",
          "$(-\\infty, -2]$",
          "$[-2, -1) \\cup [2, +\\infty)$"
        ],
        correctAnswer: 0,
        explanation: "Puntos críticos en numerador $x=\\pm 2$ y denominador $x=-1$. Tabla de signos resulta en $(-\\infty, -2] \\cup (-1, 2]$."
      },
      {
        id: "dc-4-4",
        level: 4,
        type: "integration",
        question: "Calcula el dominio de la función racional $f(x) = \\frac{1}{x^2 - 16}$:",
        options: [
          "$\\mathbb{R} \\setminus \\{-4, 4\\}$",
          "$\\mathbb{R} \\setminus \\{4\\}$",
          "$(4, +\\infty)$",
          "$\\mathbb{R} \\setminus \\{16\\}$"
        ],
        correctAnswer: 0,
        explanation: "El denominador se anula en $x^2-16 = 0 \\implies x = \\pm 4$. Dominio son todos los reales excepto $\\pm 4$."
      },
      {
        id: "dc-4-5",
        level: 4,
        type: "integration",
        question: "Simplifica el producto de fracciones algebraicas: $$\\frac{x^2-1}{x+2} \\cdot \\frac{x^2-4}{x-1}$$",
        options: [
          "$(x+1)(x-2)$",
          "$(x-1)(x+2)$",
          "$\\frac{x+1}{x-2}$",
          "$x^2 - 3$"
        ],
        correctAnswer: 0,
        explanation: "$\\frac{(x-1)(x+1)}{x+2} \\cdot \\frac{(x-2)(x+2)}{x-1} = (x+1)(x-2)$."
      },
      {
        id: "dc-4-6",
        level: 4,
        type: "integration",
        question: "Simplifica la fracción con conjugado e identidades: $$\\frac{x - 9}{\\sqrt{x} - 3} \\quad (x \\ge 0, x \\neq 9)$$",
        options: [
          "$\\sqrt{x} + 3$",
          "$\\sqrt{x} - 3$",
          "$x + 3$",
          "$\\frac{1}{\\sqrt{x} + 3}$"
        ],
        correctAnswer: 0,
        explanation: "Viendo $x - 9$ como $(\\sqrt{x})^2 - 3^2 = (\\sqrt{x}-3)(\\sqrt{x}+3)$, se simplifica directamente a $\\sqrt{x}+3$."
      },

      // NIVEL 5: TRANSFERENCIA SIN AVISO (4 ejercicios - aplicación en límites/cálculo sin nombrar el patrón)
      {
        id: "dc-5-1",
        level: 5,
        type: "transfer",
        question: "Evalúa el siguiente límite indeterminado: $$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$$",
        options: ["$6$", "$0$", "$3$", "No existe"],
        correctAnswer: 0,
        explanation: "Indeterminación $\\frac{0}{0}$. Factorizando la diferencia de cuadrados: $\\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = \\lim_{x \\to 3} (x+3) = 6$."
      },
      {
        id: "dc-5-2",
        level: 5,
        type: "transfer",
        question: "Calcula el límite indeterminado en la discontinuidad: $$\\lim_{x \\to -2} \\frac{x^2 - 4}{x^2 + 2x}$$",
        options: ["$2$", "$0$", "$-2$", "$\\frac{1}{2}$"],
        correctAnswer: 0,
        explanation: "$\\frac{(x-2)(x+2)}{x(x+2)} = \\frac{x-2}{x}$. Evaluando en $x=-2$: $\\frac{-4}{-2} = 2$."
      },
      {
        id: "dc-5-3",
        level: 5,
        type: "transfer",
        question: "Determina el límite indeterminado con constante arbitraria $a \\neq 0$: $$\\lim_{x \\to a} \\frac{x^2 - a^2}{x - a}$$",
        options: ["$2a$", "$a$", "$0$", "$a^2$"],
        correctAnswer: 0,
        explanation: "$\\lim_{x \\to a} \\frac{(x-a)(x+a)}{x-a} = \\lim_{x \\to a} (x+a) = 2a$."
      },
      {
        id: "dc-5-4",
        level: 5,
        type: "transfer",
        question: "Calcula el límite indeterminado con cambio de variable $u = \\sqrt{x}$: $$\\lim_{x \\to 1} \\frac{x - 1}{\\sqrt{x} - 1}$$",
        options: ["$2$", "$1$", "$0$", "$\\frac{1}{2}$"],
        correctAnswer: 0,
        explanation: "$\\frac{(\\sqrt{x}-1)(\\sqrt{x}+1)}{\\sqrt{x}-1} = \\sqrt{x}+1 \\implies \\lim_{x \\to 1} (1+1) = 2$."
      },

      // NIVEL 6: PROBLEMAS TIPO FING (3 ejercicios - Múltiple opción, distractores, tiempo y trampas oficiales)
      {
        id: "dc-6-1",
        level: 6,
        type: "fing",
        question: "⭐ PARCIAL FING: Sea $f(x) = \\frac{x^4 - 81}{x^2 - 9}$. ¿Cuál es el valor del límite $\\lim_{x \\to 3} f(x)$?",
        options: [
          "$18$",
          "$0$",
          "$9$",
          "$36$",
          "No existe el límite"
        ],
        correctAnswer: 0,
        explanation: "Factorizando el numerador: $x^4 - 81 = (x^2-9)(x^2+9)$. Cancelando $(x^2-9)$: $f(x) = x^2+9$. Evaluando en $x=3$: $3^2+9 = 18$."
      },
      {
        id: "dc-6-2",
        level: 6,
        type: "fing",
        question: "⭐ PARCIAL FING: Considera la función $g(x) = \\frac{9 - x^2}{|x - 3|}$. ¿Cuál de las siguientes afirmaciones es CORRECTA sobre los límites laterales en $x = 3$?",
        options: [
          "$\\lim_{x \\to 3^+} g(x) = -6$ y $\\lim_{x \\to 3^-} g(x) = 6$",
          "$\\lim_{x \\to 3^+} g(x) = 6$ y $\\lim_{x \\to 3^-} g(x) = -6$",
          "El límite existe y vale 6",
          "El límite existe y vale -6",
          "La función es continua en $x=3$"
        ],
        correctAnswer: 0,
        explanation: "Para $x > 3$: $|x-3| = x-3$, $g(x) = \\frac{(3-x)(3+x)}{x-3} = -(3+x) \\to -6$. Para $x < 3$: $|x-3| = -(x-3)$, $g(x) = \\frac{(3-x)(3+x)}{-(x-3)} = 3+x \\to 6$."
      },
      {
        id: "dc-6-3",
        level: 6,
        type: "fing",
        question: "⭐ PARCIAL FING: ¿Para qué valores de $k \\in \\mathbb{R}$ es la función $h(x)$ continua en $x = 2$? $$h(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2} & \\text{si } x \\neq 2 \\\\ k^2 & \\text{si } x = 2 \\end{cases}$$",
        options: [
          "$k = \\pm 2$",
          "$k = 4$",
          "$k = 2$ únicamente",
          "$k = 0$",
          "No existe ningún valor de $k$"
        ],
        correctAnswer: 0,
        explanation: "$\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = 4$. Para continuidad se exige $h(2) = 4 \\implies k^2 = 4 \\implies k = \\pm 2$."
      }
    ]
  }
];

// Helper functions for adaptive state management
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
        masteryPercent: 0
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
      masteryPercent: 0
    };
  }

  const prog = newState.patternProgress[patternId];
  const lvl = questionObj.level;

  if (!prog.levelScores[lvl]) {
    prog.levelScores[lvl] = [];
  }
  prog.levelScores[lvl].push(isCorrect ? 1 : 0);
  prog.history.push({ questionId: questionObj.id, level: lvl, correct: isCorrect, time: new Date().toISOString() });

  // LEVEL 0 DIAGNOSTIC BRANCHING
  if (lvl === 0) {
    const diagScores = prog.levelScores[0];
    if (diagScores.length >= 2) {
      const allCorrect = diagScores.every(s => s === 1);
      if (allCorrect) {
        prog.diagnosticPassed = true;
        prog.unlockedLevel = 3; // Skip Level 1 and 2 directly to Level 3 Variation!
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

  // Calculate global mastery percentage for this pattern
  const totalLevelsUnlocked = prog.unlockedLevel;
  prog.masteryPercent = Math.min(100, Math.round((totalLevelsUnlocked / 6) * 100));

  return newState;
}
