// MATRIZ MAESTRA DE PRERREQUISITOS Y REFLEJOS AUTOMÁTICOS PRE-FING (40 NIVELES + 10 META-PATRONES)

export const REFLEX_MATRIX = [
  { trigger: "Veo una diferencia de cuadrados $a^2 - b^2$", action: "Factorizo inmediatamente en $(a-b)(a+b)$." },
  { trigger: "Veo una raíz cuadrada $\\sqrt{g(x)}$", action: "Pido inmediatamente restricción de dominio $g(x) \\ge 0$ o multiplico por conjugado en límites." },
  { trigger: "Veo una variable en el denominador $\\frac{P(x)}{Q(x)}$", action: "Pido restricción $Q(x) \\neq 0$ antes de operar." },
  { trigger: "Veo valor absoluto $|x - a|$", action: "Pienso geométricamente como distancia a $a$ o divido en casos según el signo de $x - a$." },
  { trigger: "Veo un polinomio $P(x)$ con raíz $P(r) = 0$", action: "Aplico Teorema del Factor: $(x - r)$ es factor de $P(x)$ y ejecuto Ruffini." },
  { trigger: "Veo una inecuación $(x-a)(x-b) > 0$", action: "Encuentro los puntos críticos $a, b$, divido la recta real y hago tabla de signos." },
  { trigger: "Veo una función compuesta $f(g(x))$", action: "Identifico la máquina interna $g(x)$ y la externa $f(u)$ para dominio o Regla de la Cadena." },
  { trigger: "Veo un gráfico de función $y = f(x)$", action: "Extraigo dominio, ceros, signo y monotonía visualmente antes de hacer cualquier cuenta." },
  { trigger: "Veo una expresión logarítmica $\\ln(a^b)$", action: "Bajo el exponente como multiplicador: $b \\ln(a)$ para simplificar." },
  { trigger: "Veo trigonometría $\\sin^2(x) + \\cos^2(x)$", action: "Sustituyo por $1$ inmediatamente o uso el círculo trigonométrico para ángulos notables." },
  { trigger: "Veo una afirmación universal (\\forall)", action: "Busco inmediatamente un contraejemplo para refutarla si parece falsa." },
  { trigger: "Veo una expresión compleja en límites", action: "Busco un cambio de representación equivalencias: $\\sqrt{x} \\leftrightarrow x^{1/2}$, $\\frac{1}{x^2} \\leftrightarrow x^{-2}$." }
];

export const META_PATTERNS = [
  {
    id: "meta-1",
    title: "META-PATRÓN 1: EQUIVALENCIA",
    question: "¿Puedo representar la misma cosa de otra manera más conveniente?",
    examples: ["\\sqrt{x} = x^{1/2}", "x^2 - 9 = (x-3)(x+3)", "\\ln(a^2) = 2\\ln(a)"],
    benefit: "Desbloquea derivadas, integrales y simplificaciones algebraicas en segundos."
  },
  {
    id: "meta-2",
    title: "META-PATRÓN 2: FACTORIZACIÓN",
    question: "¿Puedo convertir una suma/resta en un producto de factores?",
    examples: ["6x^2 + 12x = 6x(x+2)", "x^2 - 5x + 6 = (x-2)(x-3)", "x^3 - 8 = (x-2)(x^2 + 2x + 4)"],
    benefit: "Resuelve ecuaciones, simplifica indeterminaciones 0/0 y define signos de inecuaciones."
  },
  {
    id: "meta-3",
    title: "META-PATRÓN 3: RESTRICCIÓN",
    question: "¿Qué valores están prohibidos en el dominio de la expresión?",
    examples: ["\\text{Denominador } \\neq 0", "\\text{Radicando par } \\ge 0", "\\text{Argumento de Logaritmo } > 0"],
    benefit: "Evita respuestas falsas y define dominios exactos antes de operar."
  },
  {
    id: "meta-4",
    title: "META-PATRÓN 4: CASOS",
    question: "¿El comportamiento matemático cambia según la región o tramo?",
    examples: ["|x| = x \\text{ si } x \\ge 0 \\text{ o } -x \\text{ si } x < 0", "\\text{Funciones por partes}", "\\text{Límites laterales } x \\to a^- \\text{ vs } x \\to a^+"],
    benefit: "Permite analizar funciones discontinuas o absolutas sin confundir los dominios."
  },
  {
    id: "meta-5",
    title: "META-PATRÓN 5: TRANSFORMACIÓN",
    question: "¿Puedo convertir este problema difícil en uno conocido que sí sé resolver?",
    examples: ["\\frac{\\sqrt{x}-1}{x-1} \\text{ (Multiplicar por conjugado)}", "\\sin(2x) = 2\\sin(x)\\cos(x)", "e^{x \\ln a} = a^x"],
    benefit: "Elimina barreras en límites y ecuaciones trascendentes."
  },
  {
    id: "meta-6",
    title: "META-PATRÓN 6: COMPOSICIÓN",
    question: "¿Hay una función dentro de otra función? f(g(x))",
    examples: ["f(g(x)) \\implies g(x) \\text{ interna}, f(u) \\text{ externa}", "(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)"],
    benefit: "Es la base absoluta para la Regla de la Cadena y cambio de variable en integrales."
  },
  {
    id: "meta-7",
    title: "META-PATRÓN 7: CAMBIO (TASA DE CAMBIO)",
    question: "¿Qué pasa si cambia ligeramente la variable de entrada x?",
    examples: ["\\frac{\\Delta y}{\\Delta x} = \\frac{f(b) - f(a)}{b - a} \\text{ (Tasa Media)}", "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} \\text{ (Instantánea)}"],
    benefit: "Prepara la intuición física y geométrica del cálculo diferencial."
  },
  {
    id: "meta-8",
    title: "META-PATRÓN 8: CRECIMIENTO Y MONOTONÍA",
    question: "¿La cantidad o función aumenta o disminuye al avanzar en x?",
    examples: ["f'(x) > 0 \\implies \\text{Creciente}", "f'(x) < 0 \\implies \\text{Decreciente}", "f'(x) = 0 \\implies \\text{Punto Crítico}"],
    benefit: "Permite resolver problemas de optimización y gráficos de funciones."
  },
  {
    id: "meta-9",
    title: "META-PATRÓN 9: CONSERVACIÓN",
    question: "¿Qué cantidad o propiedad permanece constante a lo largo del proceso?",
    examples: ["c_1 V_1 + c_2 V_2 = c_f (V_1 + V_2) \\text{ (Conservación de Soluto)}", "\\text{Volumen o Área encerrada}"],
    benefit: "Modelización de problemas reales en ingeniería."
  },
  {
    id: "meta-10",
    title: "META-PATRÓN 10: VERIFICACIÓN",
    question: "¿Cómo demuestro que mi resultado tiene sentido matemático?",
    examples: ["Sustitución de raíces en la ecuación original", "Estimación de magnitudes", "Análisis de unidades/dimensiones"],
    benefit: "Garantiza 0 errores tontos por signos o despejes mal hechos en exámenes sin calculadora."
  }
];

export const HIERARCHY_BLOCKS = [
  {
    id: "bloque-a",
    title: "🔴 BLOQUE A — Absolutamente Automático (Base de Hierro)",
    color: "#F43F5E",
    badge: "Indispensable sin calculadora",
    description: "Operaciones, fracciones, potencias, radicales, factorización, ecuaciones, inecuaciones y valor absoluto.",
    levels: [
      { num: "0.1", name: "Operaciones con Enteros", rule: "Automatiza signos: (-)(-)=+, (-)(+)=- sin vacilar." },
      { num: "0.2", name: "Jerarquía de Operaciones", rule: "Paréntesis -> Potencias -> Multiplicación/División -> Suma/Resta." },
      { num: "0.3", name: "Fracciones Algebraicas", rule: "Mínimo común denominador en suma; simplificación por factor común." },
      { num: "Nivel 1", name: "Potencias y Exponentes", rule: "Equivalencia x^{1/2} = \\sqrt{x} y x^{-2} = 1/x^2." },
      { num: "Nivel 2", name: "Radicales y Racionalización", rule: "Multiplicar por conjugado ante resta de raíces." },
      { num: "Nivel 3", name: "Identidades Algebraicas", rule: "(a+b)^2, a^2-b^2, a^3-b^3 aprendidos de memoria." },
      { num: "Nivel 4", name: "Factorización Completa", rule: "Factor común, trinomios, Ruffini y Teorema del Factor." },
      { num: "Nivel 5", name: "Ecuaciones", rule: "Lineales, cuadráticas, racionales y verificación de raíces extrañas." },
      { num: "Nivel 6", name: "Inecuaciones", rule: "Puntos críticos + división de recta real + tabla de signos." },
      { num: "Nivel 7", name: "Valor Absoluto", rule: "|x - a| < r representa distancia a a menor que r." }
    ]
  },
  {
    id: "bloque-b",
    title: "🟠 BLOQUE B — Estructura Algebraica y Funciones",
    color: "#F59E0B",
    badge: "Estructura Teórica",
    description: "Sistemas, dominio, intervalos, funciones como objetos, composición, partes y transformaciones.",
    levels: [
      { num: "Nivel 8", name: "Polinomios y Raíces", rule: "P(r)=0 implica que (x - r) divide a P(x)." },
      { num: "Nivel 9", name: "Sistemas de Ecuaciones", rule: "Sustitución, eliminación e interpretación geométrica." },
      { num: "Nivel 10", name: "Dominio de Funciones", rule: "Revisa denominadores, raíces pares y logaritmos antes de operar." },
      { num: "Nivel 11", name: "Funciones como Objetos", rule: "Dominio, codominio, imagen, inyectiva y sobreyectiva." },
      { num: "Nivel 12", name: "Composición (f o g)", rule: "Dominio de f(g(x)) requiere g(x) en Dom(f)." },
      { num: "Nivel 13", name: "Funciones por Partes", rule: "Determina en qué tramo estás antes de aplicar fórmulas." },
      { num: "Nivel 14", name: "Transformaciones Gráficas", rule: "f(x+a) desplaza a la izquierda; f(x)+a sube." }
    ]
  },
  {
    id: "bloque-c",
    title: "🟡 BLOQUE C — Representación y Geometría Analítica",
    color: "#EAB308",
    badge: "Visual & Geométrico",
    description: "Rectas, pendientes, parábolas, circunferencias, gráficos e interpretación de tasas.",
    levels: [
      { num: "Nivel 15", name: "Rectas y Pendiente", rule: "m = (y2 - y1)/(x2 - x1). Perpendiculares m1 * m2 = -1." },
      { num: "Nivel 16", name: "Geometría Analítica", rule: "Distancia, circunferencia (x-a)^2 + (y-b)^2 = r^2." },
      { num: "Nivel 23", name: "Lectura de Gráficos", rule: "Extraer límites, ceros y discontinuidades visualmente." },
      { num: "Nivel 25", name: "Tasas de Cambio Media", rule: "[f(b) - f(a)] / [b - a] como preparación a derivada." }
    ]
  },
  {
    id: "bloque-d",
    title: "🟢 BLOQUE D — Trigonometría & Trascendentes",
    color: "#10B981",
    badge: "Dominio Trascendente",
    description: "Círculo trigonométrico, valores notables, identidades, exponenciales y logaritmos.",
    levels: [
      { num: "Nivel 17", name: "Valores Trigonométricos Notables", rule: "Seno y coseno de 0, pi/6, pi/4, pi/3, pi/2 de memoria." },
      { num: "Nivel 18", name: "Identidades Fundamentales", rule: "sin^2(x) + cos^2(x) = 1 y ángulo doble." },
      { num: "Nivel 20", name: "Exponenciales", rule: "e^0 = 1, e^{a+b} = e^a * e^b, e^{\\ln x} = x." },
      { num: "Nivel 21", name: "Logaritmos", rule: "\\ln(ab) = \\ln a + \\ln b, \\ln(a^r) = r \\ln a." },
      { num: "Nivel 22", name: "Cambio de Representación", rule: "a^x = e^{x \\ln a}, \\log(a^x) = x \\log a." }
    ]
  },
  {
    id: "bloque-e",
    title: "🔵 BLOQUE E — Razonamiento Matemático & Examen PI",
    color: "#6366F1",
    badge: "Lógica & Examen",
    description: "Conjuntos, lógica, cuantificadores, contraejemplos, estimación y verificación.",
    levels: [
      { num: "Nivel 34", name: "Lógica y Cuantificadores", rule: "Negar (para todo) resulta en (existe un contraejemplo)." },
      { num: "Nivel 36", name: "Búsqueda de Contraejemplos", rule: "Refuta afirmaciones universales falsas con una sola instancia." },
      { num: "Nivel 37", name: "Condiciones Necesarias y Suficientes", rule: "No inviertas implicaciones (Derivable => Continua, pero no al revés)." },
      { num: "Nivel 38", name: "Estimación y Rango de Soluciones", rule: "Descarta opciones numéricamente absurdas antes de calcular." }
    ]
  }
];
