import React, { useState } from 'react';
import { FileText, Clock, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Zap, Flame, Award, HelpCircle, RefreshCw } from 'lucide-react';
import MathView from './MathView';
import FormattedText from './FormattedText';

const REAL_FING_QUESTIONS = [
  {
    id: "fing-ex-1",
    year: "Examen PI FING 2026",
    difficulty: "🔥 OFICIAL FING",
    topic: "Radicales y Operatoria Algebraica",
    question: "Simplifica al máximo la expresión racionalizada: $$\\frac{2}{\\sqrt{5} - 1} - \\frac{\\sqrt{5} + 1}{2}$$",
    options: [
      "$0$",
      "$\\sqrt{5}$",
      "$1$",
      "$\\frac{\\sqrt{5}}{2}$"
    ],
    correctAnswer: 0,
    solution: "1) Racionalizamos $\\frac{2}{\\sqrt{5}-1}$ multiplicando numerador y denominador por el conjugado $(\\sqrt{5}+1)$:\n$$\\frac{2(\\sqrt{5}+1)}{(\\sqrt{5})^2 - 1^2} = \\frac{2(\\sqrt{5}+1)}{5 - 1} = \\frac{2(\\sqrt{5}+1)}{4} = \\frac{\\sqrt{5}+1}{2}$$\n2) Restamos las dos expresiones idénticas:\n$$\\frac{\\sqrt{5}+1}{2} - \\frac{\\sqrt{5}+1}{2} = 0$$"
  },
  {
    id: "fing-ex-2",
    year: "Examen PI FING 2025",
    difficulty: "🔥 OFICIAL FING",
    topic: "Factorización y Regla de Ruffini",
    question: "Determina la factorización completa sobre $\\mathbb{R}$ del polinomio $P(x) = 2x^3 - 3x^2 - 8x + 12$ sabiendo que $x = 2$ es una raíz:",
    options: [
      "$(x - 2)(x + 2)(2x - 3)$",
      "$(x - 2)^2(2x + 3)$",
      "$(x - 2)(x - 3)(2x + 1)$",
      "$(x + 2)(x - 2)(x - 3)$"
    ],
    correctAnswer: 0,
    solution: "1) Aplicamos Ruffini a $P(x)$ dividiendo entre $(x - 2)$:\nCoeficientes: $[2, -3, -8, 12]$ con $x=2$ da el cociente $Q(x) = 2x^2 + x - 6$.\n2) Factorizamos el trinomio $2x^2 + x - 6$ hallando sus raíces con Baskhara: $x = \\frac{-1 \\pm \\sqrt{1 + 48}}{4} = \\frac{-1 \\pm 7}{4} \\implies x_1 = 3/2, x_2 = -2$.\n3) Así, $2x^2 + x - 6 = (x + 2)(2x - 3)$. La factorización completa es $(x - 2)(x + 2)(2x - 3)$."
  },
  {
    id: "fing-ex-3",
    year: "Examen PI FING 2025",
    difficulty: "🔥 OFICIAL FING",
    topic: "Teorema de Raíces Racionales",
    question: "¿Cuál de los siguientes conjuntos contiene TODAS las posibles raíces racionales del polinomio $P(x) = 3x^3 - 5x^2 + 2x - 4$ según el Teorema del Cero Racional?",
    options: [
      "$\\left\\{ \\pm 1, \\pm 2, \\pm 4, \\pm \\frac{1}{3}, \\pm \\frac{2}{3}, \\pm \\frac{4}{3} \\right\\}$",
      "$\\left\\{ \\pm 1, \\pm 3, \\pm \\frac{1}{2}, \\pm \\frac{1}{4} \\right\\}$",
      "$\\left\\{ \\pm 1, \\pm 2, \\pm 3, \\pm 4 \\right\\}$",
      "$\\left\\{ \\pm 1, \\pm 4, \\pm \\frac{1}{3} \\right\\}$"
    ],
    correctAnswer: 0,
    solution: "1) El término independiente es $a_0 = -4$, cuyos divisores enteros son $p \\in \\{\\pm 1, \\pm 2, \\pm 4\\}$.\n2) El coeficiente principal es $a_n = 3$, cuyos divisores son $q \\in \\{\\pm 1, \\pm 3\\}$.\n3) Las posibles raíces racionales son de la forma $\\frac{p}{q} \\in \\left\\{ \\pm 1, \\pm 2, \\pm 4, \\pm \\frac{1}{3}, \\pm \\frac{2}{3}, \\pm \\frac{4}{3} \\right\\}$."
  },
  {
    id: "fing-ex-4",
    year: "Examen PI FING 2024",
    difficulty: "🔥 OFICIAL FING",
    topic: "Conjuntos por Comprensión y Extensión",
    question: "Sea el conjunto $A = \\{ x \\in \\mathbb{Z} : |2x - 1| < 5 \\}$. Determina la suma de todos los elementos de $A$ cuando se escribe por extensión:",
    options: [
      "$2$",
      "$0$",
      "$1$",
      "$3$"
    ],
    correctAnswer: 0,
    solution: "1) Resolvemos la inecuación: $|2x - 1| < 5 \\iff -5 < 2x - 1 < 5 \\iff -4 < 2x < 6 \\iff -2 < x < 3$.\n2) Como $x \\in \\mathbb{Z}$, los elementos enteros son $A = \\{-1, 0, 1, 2\\}$.\n3) La suma es $(-1) + 0 + 1 + 2 = 2$."
  },
  {
    id: "fing-ex-5",
    year: "Examen PI FING 2024",
    difficulty: "🔥 OFICIAL FING",
    topic: "Producto Cartesiano y Regiones en R2",
    question: "Dados los intervalos reales $A = [1, 4]$ y $B = [-2, 3]$, calcula el área geométrica del producto cartesiano $A \\times B \\subset \\mathbb{R}^2$:",
    options: [
      "$15$",
      "$12$",
      "$20$",
      "$9$"
    ],
    correctAnswer: 0,
    solution: "La región $A \\times B$ es un rectángulo cerrado en el plano cartesiano $\\mathbb{R}^2$.\nAncho de la base: $\\Delta x = 4 - 1 = 3$.\nAltura del rectángulo: $\\Delta y = 3 - (-2) = 5$.\nÁrea del rectángulo $= 3 \\times 5 = 15$."
  },
  {
    id: "fing-ex-6",
    year: "Examen PI FING 2023",
    difficulty: "🔥 OFICIAL FING",
    topic: "Lógica, Implicación y Contrarrecíproca",
    question: "Dada la implicación condicional: 'Si $f(x)$ es derivable en $x_0$, entonces $f(x)$ es continua en $x_0$'. ¿Cuál es su enunciado contrarrecíproco equivalente?",
    options: [
      "Si $f(x)$ no es continua en $x_0$, entonces $f(x)$ no es derivable en $x_0$",
      "Si $f(x)$ es continua en $x_0$, entonces $f(x)$ es derivable en $x_0$",
      "Si $f(x)$ no es derivable en $x_0$, entonces $f(x)$ no es continua en $x_0$",
      "No existe equivalencia lógica"
    ],
    correctAnswer: 0,
    solution: "La contrarrecíproca lógica del condicional $p \\implies q$ es la proposición $\\neg q \\implies \\neg p$.\nPor lo tanto: 'Si $f(x)$ no es continua en $x_0$, entonces $f(x)$ no es derivable en $x_0$'."
  },
  {
    id: "fing-ex-7",
    year: "Examen PI FING 2023",
    difficulty: "🔥 OFICIAL FING",
    topic: "Cuantificadores y Contraejemplos",
    question: "¿Cuál de las siguientes afirmaciones sobre cuantificadores en el universo de $\\mathbb{R}$ es FALSAS?",
    options: [
      "$\\forall x \\in \\mathbb{R}, x^2 > x$",
      "$\\exists x \\in \\mathbb{R} : x^2 = x$",
      "$\\forall x \\in \\mathbb{R}, x^2 \\ge 0$",
      "$\\exists! x \\in \\mathbb{R} : x + 3 = 5$"
    ],
    correctAnswer: 0,
    solution: "Basta encontrar un contraejemplo para desechar $\\forall x \\in \\mathbb{R}, x^2 > x$.\nTomando $x = 1/2 \\in \\mathbb{R}$, se tiene $(1/2)^2 = 1/4 \\ngtr 1/2$. Además para $x=0$ y $x=1$ se cumple la igualdad pero no la desigualdad estricta."
  },
  {
    id: "fing-ex-8",
    year: "Examen PI FING 2023",
    difficulty: "🔥 OFICIAL FING",
    topic: "Inducción Completa en Sumatorias",
    question: "Mediante Inducción Completa, ¿a qué fórmula simplificada en función de $n$ equivale la suma de los primeros $n$ impares $S_n = \\sum_{k=1}^{n} (2k - 1) = 1 + 3 + 5 + \\dots + (2n - 1)$?",
    options: [
      "$n^2$",
      "$\\frac{n(n+1)}{2}$",
      "$n(n+1)$",
      "$2n^2 - n$"
    ],
    correctAnswer: 0,
    solution: "1) Paso Base ($n=1$): $S_1 = 1 = 1^2$.\n2) Hipótesis de Inducción ($n=h$): Asumimos $S_h = h^2$.\n3) Tesis ($n=h+1$): $S_{h+1} = S_h + (2(h+1)-1) = h^2 + 2h + 1 = (h+1)^2$. Q.E.D. La fórmula es $n^2$."
  },
  {
    id: "fing-ex-9",
    year: "Examen PI FING 2022",
    difficulty: "🔥 OFICIAL FING",
    topic: "Rectas, Pendientes y Perpendicularidad",
    question: "Halla la ecuación implícita de la recta $r_2$ perpendicular a la recta $r_1: 3x - 2y + 6 = 0$ que contiene al punto $P(2, -1)$:",
    options: [
      "$2x + 3y - 1 = 0$",
      "$3x + 2y - 4 = 0$",
      "$2x - 3y - 7 = 0$",
      "$x + 2y = 0$"
    ],
    correctAnswer: 0,
    solution: "1) Despejamos la pendiente de $r_1$: $2y = 3x + 6 \\implies m_1 = 3/2$.\n2) La pendiente de la recta perpendicular $r_2$ es $m_2 = -1/m_1 = -2/3$.\n3) Ecuación punto-pendiente en $P(2,-1)$: $y - (-1) = -\\frac{2}{3}(x - 2) \\implies y + 1 = -\\frac{2}{3}x + \\frac{4}{3} \\implies 3y + 3 = -2x + 4 \\implies 2x + 3y - 1 = 0$."
  },
  {
    id: "fing-ex-10",
    year: "Examen PI FING 2022",
    difficulty: "🔥 OFICIAL FING",
    topic: "Inecuaciones Racionales y Tabla de Signos",
    question: "Determina el conjunto solución real $S \\subset \\mathbb{R}$ de la inecuación racional: $$\\frac{x - 3}{x + 2} \\le 1$$",
    options: [
      "$(-2, +\\infty)$",
      "$(-\\infty, -2)$",
      "$[-2, 3]$",
      "$\\mathbb{R} \\setminus \\{-2\\}$"
    ],
    correctAnswer: 0,
    solution: "1) Llevamos a forma nula restando $1$:\n$$\\frac{x - 3}{x + 2} - 1 \\le 0 \\iff \\frac{x - 3 - (x + 2)}{x + 2} \\le 0 \\iff \\frac{-5}{x + 2} \\le 0$$\n2) Dado que el numerador es constante negativo ($-5 < 0$), la fracción es negativa o cero si y solo si el denominador es estrictamente positivo: $x + 2 > 0 \\iff x > -2$.\n3) Por tanto, el conjunto solución es el intervalo abierto $(-2, +\\infty)$."
  },
  {
    id: "fing-ex-11",
    year: "Examen PI FING 2021",
    difficulty: "🔥 OFICIAL FING",
    topic: "Valor Absoluto e Inecuaciones",
    question: "Resuelve en $\\mathbb{R}$ la inecuación con valor absoluto $|3x - 6| < 9$:",
    options: [
      "$(-1, 5)$",
      "$(-5, 1)$",
      "$[0, 5]$",
      "$(-\\infty, -1) \\cup (5, +\\infty)$"
    ],
    correctAnswer: 0,
    solution: "1) Por la propiedad $|u| < r \\iff -r < u < r$:\n$$-9 < 3x - 6 < 9$$\n2) Sumamos 6 a cada término: $-3 < 3x < 15$.\n3) Dividimos entre 3: $-1 < x < 5$. La solución es el intervalo abierto $(-1, 5)$."
  },
  {
    id: "fing-ex-12",
    year: "Examen PI FING 2021",
    difficulty: "🔥 OFICIAL FING",
    topic: "Dominio de Funciones Racionales y Radicales",
    question: "Halla el dominio de definición real $D_f \\subset \\mathbb{R}$ de la función $f(x) = \\sqrt{\\frac{x - 1}{x + 3}}$:",
    options: [
      "$(-\\infty, -3) \\cup [1, +\\infty)$",
      "$(-3, 1]$",
      "$[1, +\\infty)$",
      "$\\mathbb{R} \\setminus \\{-3\\}$"
    ],
    correctAnswer: 0,
    solution: "1) Condición de la raíz cuadrada: la expresión radicando debe ser no negativa: $\\frac{x - 1}{x + 3} \\ge 0$.\n2) Puntos críticos: $x = 1$ (raíz del numerador) y $x = -3$ (raíz del denominador / punto de discontinuidad).\n3) Tabla de signos para el cociente: positivo en $(-\\infty, -3)$ y en $[1, +\\infty)$. En $x = -3$ la expresión no está definida. Por tanto $D_f = (-\\infty, -3) \\cup [1, +\\infty)$."
  },
  {
    id: "fing-ex-13",
    year: "Examen PI FING 2020",
    difficulty: "🔥 OFICIAL FING",
    topic: "Inyectividad, Sobreyectividad y Función Inversa",
    question: "Sea la función biyectiva $f: \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{3\\}$ dada por $f(x) = \\frac{3x + 1}{x - 2}$. Halla su función inversa $f^{-1}(x)$:",
    options: [
      "$f^{-1}(x) = \\frac{2x + 1}{x - 3}$",
      "$f^{-1}(x) = \\frac{x - 2}{3x + 1}$",
      "$f^{-1}(x) = \\frac{3x - 1}{x + 2}$",
      "$f^{-1}(x) = \\frac{2x - 3}{x + 1}$"
    ],
    correctAnswer: 0,
    solution: "1) Escribimos $y = \\frac{3x + 1}{x - 2}$.\n2) Multiplicamos por el denominador: $y(x - 2) = 3x + 1 \\implies yx - 2y = 3x + 1$.\n3) Agrupamos los términos con $x$: $yx - 3x = 2y + 1 \\implies x(y - 3) = 2y + 1$.\n4) Despejamos $x$: $x = \\frac{2y + 1}{y - 3}$. Intercambiando variables obtenemos $f^{-1}(x) = \\frac{2x + 1}{x - 3}$."
  },
  {
    id: "fing-ex-14",
    year: "Examen PI FING 2020",
    difficulty: "🔥 OFICIAL FING",
    topic: "Composición de Funciones f(g(x))",
    question: "Dadas las funciones $f(x) = \\sqrt{x}$ y $g(x) = x^2 - 4$, halla el dominio de definición de la función compuesta $(f \\circ g)(x)$:",
    options: [
      "$(-\\infty, -2] \\cup [2, +\\infty)$",
      "$[-2, 2]$",
      "$[0, +\\infty)$",
      "$\\mathbb{R}$"
    ],
    correctAnswer: 0,
    solution: "1) $(f \\circ g)(x) = f(g(x)) = \\sqrt{x^2 - 4}$.\n2) Para que la raíz cuadrada exista en $\\mathbb{R}$, se debe cumplir la inecuación $x^2 - 4 \\ge 0$.\n3) $(x - 2)(x + 2) \\ge 0 \\iff x \\in (-\\infty, -2] \\cup [2, +\\infty)$."
  },
  {
    id: "fing-ex-15",
    year: "Examen PI FING 2019",
    difficulty: "🔥 OFICIAL FING",
    topic: "Funciones por Partes y Continuidad",
    question: "Halla el valor exacto del parámetro $a \\in \\mathbb{R}$ para que la función $g(x) = \\begin{cases} a x + 2 & \\text{si } x \\le 2 \\\\ x^2 - a & \\text{si } x > 2 \\end{cases}$ sea continua en todo $\\mathbb{R}$:",
    options: [
      "$a = \\frac{2}{3}$",
      "$a = 1$",
      "$a = 2$",
      "$a = 0$"
    ],
    correctAnswer: 0,
    solution: "1) Para la continuidad en el punto de empalme $x = 2$, se requiere $\\lim_{x \\to 2^-} g(x) = \\lim_{x \\to 2^+} g(x) = g(2)$.\n2) Límite por izquierda y valor en el punto: $g(2) = 2a + 2$.\n3) Límite por derecha: $\\lim_{x \\to 2^+} (x^2 - a) = 4 - a$.\n4) Igualamos: $2a + 2 = 4 - a \\implies 3a = 2 \\implies a = 2/3$."
  },
  {
    id: "fing-ex-16",
    year: "Examen PI FING 2019",
    difficulty: "🔥 OFICIAL FING",
    topic: "Transformaciones Gráficas de Funciones",
    question: "Dada la parábola $y = f(x)$ con vértice en el punto $V(2, 3)$, determina las coordenadas del nuevo vértice tras aplicar la transformación $g(x) = 2 f(x - 1) + 4$:",
    options: [
      "$(3, 10)$",
      "$(1, 10)$",
      "$(3, 7)$",
      "$(2, 10)$"
    ],
    correctAnswer: 0,
    solution: "1) Traslación horizontal $f(x - 1)$: desplaza la coordenada $x$ una unidad a la derecha $\\implies x_{nuevo} = 2 + 1 = 3$.\n2) Estiramiento vertical $2 \\cdot f(x)$: multiplica la coordenada $y$ por 2 $\\implies y_{interm} = 3 \\times 2 = 6$.\n3) Traslación vertical $+ 4$: suma 4 unidades $\\implies y_{nuevo} = 6 + 4 = 10$.\nLas coordenadas finales del vértice son $(3, 10)$."
  },
  {
    id: "fing-ex-17",
    year: "Examen PI FING 2018",
    difficulty: "🔥 OFICIAL FING",
    topic: "Límites Indeterminados 0/0 por Factorización",
    question: "Calcula el valor exacto del límite indeterminado: $$\\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - 5x + 6}$$",
    options: [
      "$6$",
      "$3$",
      "$0$",
      "$+\\infty$"
    ],
    correctAnswer: 0,
    solution: "1) Evaluando directamente en $x=3$ se obtiene $\\frac{0}{0}$. Factorizamos numerador y denominador:\nNumerador: $x^2 - 9 = (x - 3)(x + 3)$.\nDenominador: $x^2 - 5x + 6 = (x - 3)(x - 2)$.\n2) Simplificamos la indico-raíz $(x - 3)$ para $x \\neq 3$:\n$$\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{(x - 3)(x - 2)} = \\lim_{x \\to 3} \\frac{x + 3}{x - 2} = \\frac{3 + 3}{3 - 2} = \\frac{6}{1} = 6$$"
  },
  {
    id: "fing-ex-18",
    year: "Examen PI FING 2018",
    difficulty: "🔥 OFICIAL FING",
    topic: "Límites al Infinito y Conjugados",
    question: "Calcula el límite indeterminado $\\infty - \\infty$ al infinito: $$\\lim_{x \\to +\\infty} \\left( \\sqrt{x^2 + 4x} - x \\right)$$",
    options: [
      "$2$",
      "$0$",
      "$4$",
      "$+\\infty$"
    ],
    correctAnswer: 0,
    solution: "1) Multiplicamos y dividimos por la expresión conjugada $(\\sqrt{x^2 + 4x} + x)$:\n$$\\lim_{x \\to +\\infty} \\frac{(\\sqrt{x^2 + 4x} - x)(\\sqrt{x^2 + 4x} + x)}{\\sqrt{x^2 + 4x} + x} = \\lim_{x \\to +\\infty} \\frac{(x^2 + 4x) - x^2}{\\sqrt{x^2 + 4x} + x} = \\lim_{x \\to +\\infty} \\frac{4x}{\\sqrt{x^2 + 4x} + x}$$\n2) Dividimos numerador y denominador por $x > 0$:\n$$\\lim_{x \\to +\\infty} \\frac{4}{\\sqrt{1 + \\frac{4}{x}} + 1} = \\frac{4}{\\sqrt{1 + 0} + 1} = \\frac{4}{2} = 2$$"
  },
  {
    id: "fing-ex-19",
    year: "Examen PI FING 2018",
    difficulty: "🔥 OFICIAL FING",
    topic: "Límites Trigonométricos Notables",
    question: "Evalúa el límite trigonométrico fundamental indeterminado: $$\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$$",
    options: [
      "$\\frac{1}{2}$",
      "$0$",
      "$1$",
      "$2$"
    ],
    correctAnswer: 0,
    solution: "Multiplicamos por el conjugado trigonométrico $(1 + \\cos(x))$:\n$$\\lim_{x \\to 0} \\frac{1 - \\cos^2(x)}{x^2(1 + \\cos(x))} = \\lim_{x \\to 0} \\left( \\frac{\\sin(x)}{x} \\right)^2 \\cdot \\frac{1}{1 + \\cos(x)}$$\nDado que el límite notable $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$, resulta $1^2 \\cdot \\frac{1}{1 + 1} = \\frac{1}{2}$."
  },
  {
    id: "fing-ex-20",
    year: "Examen PI FING 2017",
    difficulty: "🔥 OFICIAL FING",
    topic: "Continuidad y Parámetros k",
    question: "Determina el valor constante de $k \\in \\mathbb{R}$ para que se cumpla la igualdad de límites notables: $$\\lim_{x \\to 0} \\frac{\\sin(k x)}{3x} = 4$$",
    options: [
      "$k = 12$",
      "$k = 4$",
      "$k = 3$",
      "$k = 7$"
    ],
    correctAnswer: 0,
    solution: "1) Reorganizamos para utilizar el límite notable $\\lim_{u \\to 0} \\frac{\\sin(u)}{u} = 1$:\n$$\\lim_{x \\to 0} \\frac{\\sin(k x)}{k x} \\cdot \\frac{k}{3} = 1 \\cdot \\frac{k}{3} = \\frac{k}{3}$$\n2) Igualamos al valor solicitado: $\\frac{k}{3} = 4 \\implies k = 12$."
  },
  {
    id: "fing-ex-21",
    year: "Examen PI FING 2017",
    difficulty: "🔥 OFICIAL FING",
    topic: "Derivada por Definición y Recta Tangente",
    question: "Determina la ecuación de la recta tangente al gráfico de $f(x) = x^2 - 3x + 5$ en el punto de abscisa $x_0 = 2$:",
    options: [
      "$y = x + 1$",
      "$y = 2x - 1$",
      "$y = x - 1$",
      "$y = 3x - 3$"
    ],
    correctAnswer: 0,
    solution: "1) Punto de contacto: $f(2) = 2^2 - 3(2) + 5 = 4 - 6 + 5 = 3$. El punto es $(2, 3)$.\n2) Pendiente de la recta tangente: $f'(x) = 2x - 3 \\implies m = f'(2) = 2(2) - 3 = 1$.\n3) Ecuación de la recta tangente: $y - 3 = 1(x - 2) \\implies y = x + 1$."
  },
  {
    id: "fing-ex-22",
    year: "Examen PI FING 2017",
    difficulty: "🔥 OFICIAL FING",
    topic: "Regla de la Cadena y Derivación Compuesta",
    question: "Dada la función $h(x) = \\ln(x^2 + 1)$, calcula el valor numérico de la derivada $h'(x)$ evaluada en $x = 1$:",
    options: [
      "$1$",
      "$\\frac{1}{2}$",
      "$2$",
      "$0$"
    ],
    correctAnswer: 0,
    solution: "1) Por la regla de la cadena para el logaritmo natural $\\frac{d}{dx}[\\ln(u(x))] = \\frac{u'(x)}{u(x)}$:\n$$h'(x) = \\frac{2x}{x^2 + 1}$$\n2) Evaluamos en $x = 1$: $h'(1) = \\frac{2(1)}{1^2 + 1} = \\frac{2}{2} = 1$."
  },
  {
    id: "fing-ex-23",
    year: "Examen PI FING 2017",
    difficulty: "🔥 OFICIAL FING",
    topic: "Ecuaciones Trigonométricas",
    question: "Encuentra el conjunto de todas las soluciones reales de la ecuación $2\\sin^2(x) - \\sin(x) - 1 = 0$ restringidas al intervalo $[0, 2\\pi)$:",
    options: [
      "$\\left\\{ \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6} \\right\\}$",
      "$\\left\\{ \\frac{\\pi}{6}, \\frac{5\\pi}{6} \\right\\}$",
      "$\\left\\{ \\frac{\\pi}{2}, \\pi \\right\\}$",
      "$\\left\\{ 0, \\pi, 2\\pi \\right\\}$"
    ],
    correctAnswer: 0,
    solution: "1) Hacemos cambio de variable $u = \\sin(x)$ de modo que $2u^2 - u - 1 = 0$.\n2) Obtenemos las soluciones $u_1 = 1$ y $u_2 = -1/2$.\n3) Para $\\sin(x) = 1$ en $[0, 2\\pi)$, $x = \\frac{\\pi}{2}$.\n4) Para $\\sin(x) = -1/2$ en $[0, 2\\pi)$, $x = \\pi + \\frac{\\pi}{6} = \\frac{7\\pi}{6}$ y $x = 2\\pi - \\frac{\\pi}{6} = \\frac{11\\pi}{6}$.\nEl conjunto solución es $\\left\\{ \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6} \\right\\}$."
  },
  {
    id: "fing-ex-24",
    year: "Examen PI FING 2017",
    difficulty: "🔥 OFICIAL FING",
    topic: "Modelización Matemática y Porcentajes Compuestos",
    question: "Un depósito hidráulico pierde el $10\\%$ de su volumen de líquido cada día por evaporación. Si al inicio del primer día cuenta con $1000\\text{ L}$, ¿cuál es el volumen exacto de agua al finalizar el tercer día?",
    options: [
      "$729\\text{ L}$",
      "$700\\text{ L}$",
      "$750\\text{ L}$",
      "$810\\text{ L}$"
    ],
    correctAnswer: 0,
    solution: "1) Al perder el $10\\%$, cada día conserva el $90\\%$ ($0.9$) de su volumen del día anterior.\n2) La fórmula del volumen en el día $t$ es $V(t) = V_0 \\cdot (0.9)^t$.\n3) Para $t = 3$: $V(3) = 1000 \\cdot (0.9)^3 = 1000 \\cdot 0.729 = 729\\text{ L}$."
  },
  {
    id: "fing-ex-25",
    year: "Grand Challenge Examen FING 2026",
    difficulty: "🔥 INTEGRADOR OFICIAL",
    topic: "Grand Challenge Integrador de Límites y Equivalencias",
    question: "Calcula el valor del límite integrador con doble indeterminación infinitesimal: $$\\lim_{x \\to 0} \\frac{e^{3x} - 1}{\\tan(2x)}$$",
    options: [
      "$\\frac{3}{2}$",
      "$1$",
      "$0$",
      "$\\frac{2}{3}$"
    ],
    correctAnswer: 0,
    solution: "1) Usamos las equivalencias infinitésimas cuando $x \\to 0$:\n$e^{3x} - 1 \\sim 3x$\n$\\tan(2x) \\sim 2x$\n2) Sustituimos ambas equivalencias en el cociente de límites:\n$$\\lim_{x \\to 0} \\frac{e^{3x} - 1}{\\tan(2x)} = \\lim_{x \\to 0} \\frac{3x}{2x} = \\frac{3}{2}$$"
  }
];

export default function ExamSimulator() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const q = REAL_FING_QUESTIONS[currentIdx];

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
    if (selectedOption === q.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < REAL_FING_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setSubmitted(false);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="animate-fade-in" style={{ padding: '32px 24px', maxWidth: '920px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F59E0B', fontWeight: 700, fontSize: '0.85rem', marginBottom: '4px' }}>
            <Flame size={18} fill="#F59E0B" color="#F59E0B" /> {q.difficulty}
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#F9FAFB', letterSpacing: '-0.02em' }}>
            Simulador de Exámenes FING Udelar (25 Ejercicios Oficiales)
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#FBBF24', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(245, 158, 11, 0.3)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={16} /> {q.year}
          </div>
          <div style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34D399', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(16, 185, 129, 0.3)', fontSize: '0.85rem', fontWeight: 700 }}>
            Puntaje Examen: {score}/{REAL_FING_QUESTIONS.length}
          </div>
        </div>
      </div>

      {/* Question Stepper Grid */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '4px' }}>
        {REAL_FING_QUESTIONS.map((item, idx) => (
          <div
            key={item.id}
            title={`Ejercicio ${idx + 1}: ${item.topic}`}
            onClick={() => {
              setCurrentIdx(idx);
              setSelectedOption(null);
              setSubmitted(false);
            }}
            style={{
              flex: 1,
              minWidth: '14px',
              height: '8px',
              borderRadius: '4px',
              background: idx === currentIdx ? '#F59E0B' : idx < currentIdx ? '#10B981' : 'rgba(255, 255, 255, 0.12)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

      {/* Main Question Card */}
      <div className="glass-panel" style={{ padding: '32px', marginBottom: '24px', borderLeft: '4px solid #F59E0B' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#FBBF24', fontWeight: 700, letterSpacing: '0.05em' }}>
            Ejercicio {currentIdx + 1} de {REAL_FING_QUESTIONS.length} — {q.topic}
          </span>
          <span style={{ background: 'rgba(244, 63, 94, 0.2)', color: '#FB7185', padding: '2px 8px', borderRadius: '8px', fontSize: '0.72rem', fontWeight: 700 }}>
            {q.difficulty}
          </span>
        </div>

        <div style={{ fontSize: '1.15rem', color: '#F9FAFB', lineHeight: 1.6, marginBottom: '24px', fontWeight: 600 }}>
          <FormattedText text={q.question} />
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
          {q.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            let borderStyle = '1px solid rgba(255, 255, 255, 0.1)';
            let bgStyle = 'rgba(31, 41, 55, 0.5)';

            if (isSelected) {
              borderStyle = '2px solid #F59E0B';
              bgStyle = 'rgba(245, 158, 11, 0.2)';
            }
            if (submitted) {
              if (idx === q.correctAnswer) {
                borderStyle = '2px solid #10B981';
                bgStyle = 'rgba(16, 185, 129, 0.25)';
              } else if (isSelected && idx !== q.correctAnswer) {
                borderStyle = '2px solid #F43F5E';
                bgStyle = 'rgba(244, 63, 94, 0.25)';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => !submitted && setSelectedOption(idx)}
                disabled={submitted}
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: borderStyle,
                  background: bgStyle,
                  color: '#F9FAFB',
                  textAlign: 'left',
                  cursor: submitted ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: isSelected ? '#F59E0B' : 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  {String.fromCharCode(65 + idx)}
                </div>
                <div style={{ fontSize: '1.1rem', color: '#F9FAFB', fontWeight: 500 }}>
                  <FormattedText text={opt} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Solution when submitted */}
        {submitted && (
          <div className="glass-card animate-fade-in" style={{ padding: '20px', marginBottom: '20px', borderLeft: '4px solid #10B981', background: 'rgba(16, 185, 129, 0.08)' }}>
            <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#34D399', fontWeight: 700, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#34D399" /> Solución Rigurosa de Examen FING:
            </div>
            <div style={{ fontSize: '0.95rem', color: '#E5E7EB', lineHeight: 1.6 }}>
              <FormattedText text={q.solution} />
            </div>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="btn-primary"
              style={{ padding: '12px 24px', fontSize: '1rem', opacity: selectedOption === null ? 0.5 : 1 }}
            >
              Confirmar Respuesta Examen <CheckCircle2 size={18} />
            </button>
          ) : (
            <>
              {currentIdx < REAL_FING_QUESTIONS.length - 1 ? (
                <button onClick={handleNext} className="btn-primary" style={{ padding: '12px 24px', fontSize: '1rem', background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' }}>
                  Siguiente Ejercicio ({currentIdx + 2}/25) <ArrowRight size={18} />
                </button>
              ) : (
                <button onClick={handleReset} className="btn-primary" style={{ padding: '12px 24px', fontSize: '1rem', background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}>
                  Reiniciar Examen Completo (25/25) <RefreshCw size={18} />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
