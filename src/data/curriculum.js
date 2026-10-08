export const CURRICULUM = [
  {
    "id": "etapa-0",
    "title": "NIVEL 0: Fundamentos Matemáticos",
    "macroPillar": "Fundamentos",
    "badgeClass": "badge-nivel-0",
    "color": "#10B981",
    "description": "Aritmética, operatoria algebraica, potencias, raíces, fracciones algebraicas, factorización completa y Teorema de Ruffini.",
    "books": [
      "Repartido Oficial PI FING",
      "Álgebra de Baldor",
      "Precálculo Stewart Cap. 1"
    ],
    "topics": [
      {
        "id": "aritmetica-operatoria",
        "title": "0.1 & 0.2 Aritmética y Operatoria Algebraica",
        "subtitle": "Conjuntos numéricos (N, Z, Q, R), potencias, radicales y racionalización",
        "theory": {
          "concept": "Dominar la operatoria numérica y algebraica sin calculadora es obligatorio en la PI FING. Debes operar con comodidad expresiones con radicales, potencias de exponentes racionales y racionalización.",
          "formulas": [
            {
              "label": "Propiedad de Potencias",
              "latex": "a^n \\cdot a^m = a^{n+m}, \\quad (a^n)^m = a^{n \\cdot m}"
            },
            {
              "label": "Exponente Fraccionario",
              "latex": "a^{\\frac{m}{n}} = \\sqrt[n]{a^m}"
            },
            {
              "label": "Racionalización con Conjugado",
              "latex": "\\frac{1}{\\sqrt{a} - \\sqrt{b}} = \\frac{\\sqrt{a} + \\sqrt{b}}{a - b}"
            }
          ],
          "tips": "Nunca sumes raíces directamente: $\\sqrt{a} + \\sqrt{b} \\neq \\sqrt{a + b}$. Simplifica cada radical por separado extrayendo factores.",
          "pitfall": "Asumir que $\\sqrt{x^2} = x$. Lo correcto en los números reales es $\\sqrt{x^2} = |x|$."
        },
        "workedExamples": [
          {
            "problem": "Racionaliza el denominador de la expresión $\\frac{2}{\\sqrt{5} - 1}$.",
            "steps": [
              "Multiplicamos por el conjugado $(\\sqrt{5} + 1)$ arriba y abajo.",
              "Numerador: $2(\\sqrt{5} + 1)$.",
              "Denominador: $(\\sqrt{5} - 1)(\\sqrt{5} + 1) = (\\sqrt{5})^2 - 1^2 = 5 - 1 = 4$.",
              "Simplificamos entre 2: $\\frac{2(\\sqrt{5} + 1)}{4} = \\frac{\\sqrt{5} + 1}{2}$."
            ],
            "finalAnswer": "$\\frac{\\sqrt{5} + 1}{2}$"
          }
        ],
        "exercises": [
          {
            "id": "ex-0-1",
            "question": "Simplifica al máximo la expresión con radicales: $$\\frac{\\sqrt{18} + \\sqrt{50}}{\\sqrt{8}}$$",
            "type": "mcq",
            "options": [
              "4",
              "2",
              "$\\sqrt{17}$",
              "$\\frac{8}{2}$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Descompón en factores primos: $\\sqrt{18} = 3\\sqrt{2}$.",
              "Similarmente: $\\sqrt{50} = 5\\sqrt{2}$ y $\\sqrt{8} = 2\\sqrt{2}$.",
              "Suma en el numerador: $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$ y divide entre $2\\sqrt{2}$."
            ],
            "explanation": "Sumando los radicales extraídos: $\\frac{3\\sqrt{2} + 5\\sqrt{2}}{2\\sqrt{2}} = \\frac{8\\sqrt{2}}{2\\sqrt{2}} = 4$."
          }
        ]
      },
      {
        "id": "factorizacion-ruffini",
        "title": "0.3 & 0.4 Factorización Completa y Teorema de Ruffini",
        "subtitle": "Factor común, cubos, regla de Ruffini, raíces racionales y Teorema del Factor",
        "theory": {
          "concept": "Factorizar es transformar una suma en producto. Para polinomios de grado 3 o superior, el Teorema del Factor establece que si $P(a) = 0$, entonces $(x - a)$ es un factor de $P(x)$, divisible por la regla de Ruffini.",
          "formulas": [
            {
              "label": "Teorema de las Raíces Racionales",
              "latex": "\\text{Si } P(x) = a_n x^n + \\dots + a_0, \\text{ las posibles raíces son } \\frac{p}{q} \\mid p \\text{ divide a } a_0 \\land q \\text{ divide a } a_n"
            }
          ],
          "tips": "Para encontrar raíces racionales rápidamente, prueba primero con los divisores del término independiente.",
          "pitfall": "Olvidar incluir ceros en coeficientes faltantes al armar la tabla de Ruffini."
        },
        "workedExamples": [
          {
            "problem": "Factoriza el polinomio $P(x) = x^3 - 4x^2 + x + 6$.",
            "steps": [
              "Término independiente = 6. Posibles raíces: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.",
              "Probamos $x = -1$: $P(-1) = 0$.",
              "Aplicamos Ruffini por $(x+1)$: resulta $x^2 - 5x + 6 = (x-2)(x-3)$.",
              "Resultado: $P(x) = (x + 1)(x - 2)(x - 3)$."
            ],
            "finalAnswer": "$P(x) = (x + 1)(x - 2)(x - 3)$"
          }
        ],
        "exercises": [
          {
            "id": "ex-0-2",
            "question": "Factoriza totalmente el polinomio $P(x) = 2x^3 - 3x^2 - 8x + 12$. ¿Cuáles son todas sus raíces reales?",
            "type": "mcq",
            "options": [
              "$x = \\frac{3}{2}, x = 2, x = -2$",
              "$x = 3, x = -2, x = 2$",
              "$x = -\\frac{3}{2}, x = 1, x = -4$",
              "$x = 0, x = 2, x = 3$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Agrupa por pares: $x^2(2x-3) - 4(2x-3) = (2x-3)(x^2-4)$."
            ],
            "explanation": "Factorizando por agrupación resulta $(2x-3)(x-2)(x+2)$, de donde las raíces son $x = \\frac{3}{2}, 2, -2$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-1",
    "title": "NIVEL 1: Conjuntos y Lenguaje Matemático",
    "macroPillar": "Lenguaje",
    "badgeClass": "badge-nivel-0",
    "color": "#34D399",
    "description": "Inclusión, operaciones de conjuntos, producto cartesiano A x B, intervalos y representación geométrica en R^2.",
    "books": [
      "Repartido Oficial PI FING (Sección Conjuntos)"
    ],
    "topics": [
      {
        "id": "conjuntos-producto-cartesiano",
        "title": "1.1 - 1.4 Operaciones de Conjuntos, Producto Cartesiano e Intervalos",
        "subtitle": "Unión, intersección, producto cartesiano A x B e intervalos reales",
        "theory": {
          "concept": "El producto cartesiano $A \\times B = \\{ (a, b) \\mid a \\in A \\land b \\in B \\}$ define regiones rectangulares cerradas en $\\mathbb{R}^2$ que son evaluadas frecuentemente en FING.",
          "formulas": [
            {
              "label": "Producto Cartesiano",
              "latex": "A \\times B = \\{ (a, b) \\mid a \\in A \\land b \\in B \\}"
            }
          ],
          "tips": "Representa los intervalos de $A$ en el eje $X$ y los de $B$ en el eje $Y$ para visualizar la región plana.",
          "pitfall": "Confundir el producto cartesiano con la intersección de conjuntos."
        },
        "workedExamples": [
          {
            "problem": "Dado $A = [1, 4]$ y $B = [-2, 3]$, calcula el área de $A \\times B \\subset \\mathbb{R}^2$.",
            "steps": [
              "Ancho base: $\\Delta x = 4 - 1 = 3$.",
              "Altura: $\\Delta y = 3 - (-2) = 5$.",
              "Área $= 3 \\times 5 = 15$."
            ],
            "finalAnswer": "15"
          }
        ],
        "exercises": [
          {
            "id": "ex-1-1",
            "question": "Sean $A = [1, 3]$ y $B = [2, 5]$. En el plano $\\mathbb{R}^2$, ¿qué figura representa $A \\times B$?",
            "type": "mcq",
            "options": [
              "Un rectángulo lleno de base 2 y altura 3.",
              "Un segmento de recta de pendiente positiva.",
              "Un círculo de radio 3.",
              "Una región triangular."
            ],
            "correctAnswer": 0,
            "hints": ["Base en $x$: $3 - 1 = 2$. Altura en $y$: $5 - 2 = 3$."],
            "explanation": "Representa la región rectangular cerrada $[1,3] \\times [2,5]$ de lados 2 y 3."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-2",
    "title": "NIVEL 2: Lógica y Razonamiento",
    "macroPillar": "Razonamiento",
    "badgeClass": "badge-nivel-1",
    "color": "#F59E0B",
    "description": "Proposiciones, cuantificadores, implicación necesaria/suficiente, contrarrecíproca, contraejemplos e Inducción Completa.",
    "books": [
      "Repartido Oficial PI FING (Lógica e Inducción)"
    ],
    "topics": [
      {
        "id": "logica-demostraciones",
        "title": "2.1 - 2.6 Lógica, Demostraciones e Inducción Completa",
        "subtitle": "Conectores, implicación contrarrecíproca, contraejemplo e inducción completa",
        "theory": {
          "concept": "La implicación $P \\implies Q$ es lógicamente equivalente a su contrarrecíproca $\\neg Q \\implies \\neg P$. Para refutar $\\forall x, P(x)$, alcanza con un único contraejemplo.",
          "formulas": [
            {
              "label": "Equivalencia Contrarrecíproca",
              "latex": "(P \\implies Q) \\iff (\\neg Q \\implies \\neg P)"
            }
          ],
          "tips": "En inducción completa, no olvides verificar explícitamente el Paso Base ($n=1$).",
          "pitfall": "Confundir la implicación recíproca $Q \\implies P$ con la contrarrecíproca."
        },
        "workedExamples": [
          {
            "problem": "Demuestra por inducción que $\\sum_{k=1}^n (2k-1) = n^2$.",
            "steps": [
              "Paso base ($n=1$): $S_1 = 1 = 1^2$.",
              "Hipótesis ($n=h$): $S_h = h^2$.",
              "Tesis ($n=h+1$): $S_{h+1} = h^2 + (2(h+1)-1) = h^2 + 2h + 1 = (h+1)^2$."
            ],
            "finalAnswer": "$S_n = n^2$"
          }
        ],
        "exercises": [
          {
            "id": "ex-2-1",
            "question": "¿Cuál es la proposición **contrarrecíproca** a: 'Si $f$ es derivable en $x_0$, entonces $f$ es continua en $x_0$'?",
            "type": "mcq",
            "options": [
              "Si $f$ no es continua en $x_0$, entonces $f$ no es derivable en $x_0$.",
              "Si $f$ es continua en $x_0$, entonces $f$ es derivable en $x_0$.",
              "Si $f$ no es derivable en $x_0$, entonces $f$ no es continua en $x_0$.",
              "Una función es derivable si y solo si es continua."
            ],
            "correctAnswer": 0,
            "hints": ["La contrarrecíproca de $P \\implies Q$ es $\\neg Q \\implies \\neg P$."],
            "explanation": "La contrarrecíproca niega e invierte el condicional: $\\neg \\text{Continua} \\implies \\neg \\text{Derivable}$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-3",
    "title": "NIVEL 3: Álgebra y Ecuaciones",
    "macroPillar": "Modelos & Álgebra",
    "badgeClass": "badge-nivel-2",
    "color": "#6366F1",
    "description": "Ecuaciones, inecuaciones racionales, valor absoluto |x-a|<r, sistemas lineales y regiones en R^2.",
    "books": [
      "Repartido Oficial PI FING (Inecuaciones y Sistemas)"
    ],
    "topics": [
      {
        "id": "inecuaciones-valor-absoluto",
        "title": "3.1 - 3.6 Inecuaciones Racionales, Valor Absoluto y Regiones",
        "subtitle": "Tabla de signos, $|x-a|<r$, sistemas 2x2/3x3 y regiones planas",
        "theory": {
          "concept": "Para inecuaciones racionales, traslada todo a un miembro para obtener la forma $N(x)/D(x) \\le 0$ y construye la tabla de signos. Las raíces del denominador son puntos de discontinuidad que nunca pertenecen a la solución.",
          "formulas": [
            {
              "label": "Inecuaciones con Valor Absoluto",
              "latex": "|x - a| < r \\iff a - r < x < a + r"
            }
          ],
          "tips": "Multiplicar inecuaciones por expresiones con variable sin conocer su signo invalida la desigualdad.",
          "pitfall": "Incluir las raíces del denominador como corchetes cerrados en el conjunto solución."
        },
        "workedExamples": [
          {
            "problem": "Resuelve $|2x - 1| < 5$.",
            "steps": [
              "$-5 < 2x - 1 < 5$.",
              "Sumamos 1: $-4 < 2x < 6$.",
              "Dividimos entre 2: $-2 < x < 3$."
            ],
            "finalAnswer": "$(-2, 3)$"
          }
        ],
        "exercises": [
          {
            "id": "ex-3-1",
            "question": "Resuelve la inecuación racional: $$\\frac{x - 3}{x + 2} \\le 1$$",
            "type": "mcq",
            "options": [
              "$(-2, +\\infty)$",
              "$(-\\infty, -2)$",
              "$[-2, 3]$",
              "$\\mathbb{R} \\setminus \\{-2\\}$"
            ],
            "correctAnswer": 0,
            "hints": ["Resta 1: $\\frac{x - 3 - (x + 2)}{x + 2} \\le 0 \\implies \\frac{-5}{x + 2} \\le 0$."],
            "explanation": "Como el numerador es $-5 < 0$, se requiere $x + 2 > 0 \\iff x > -2$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-4",
    "title": "NIVEL 4: Funciones",
    "macroPillar": "Modelos & Álgebra",
    "badgeClass": "badge-nivel-2",
    "color": "#8B5CF6",
    "description": "Concepto de función, dominio real, composición f(g(x)), transformaciones gráficas, inyectividad e inversa f^-1(x).",
    "books": [
      "Precálculo Stewart Cap. 2 & 3"
    ],
    "topics": [
      {
        "id": "funciones-composicion-inversa",
        "title": "4.1 - 4.6 Dominio, Composición, Transformaciones e Inversa",
        "subtitle": "Dominios restrictivos, $f(g(x))$, traslaciones y función inversa",
        "theory": {
          "concept": "Una función admite inversa $f^{-1}(x)$ si y solo si es biyectiva en sus dominios restringidos. Gráficamente, $f^{-1}$ es la simetría de $f$ respecto a la recta $y = x$.",
          "formulas": [
            {
              "label": "Condición de Inversa",
              "latex": "f(f^{-1}(x)) = x \\quad \\text{y} \\quad f^{-1}(f(x)) = x"
            }
          ],
          "tips": "Para despejar la inversa $f^{-1}(y)$, despeja $x$ en función de $y$ e intercambia variables.",
          "pitfall": "Confundir la función inversa $f^{-1}(x)$ con la recíproca $\\frac{1}{f(x)}$."
        },
        "workedExamples": [
          {
            "problem": "Halla la inversa de $f(x) = \\frac{3x + 1}{x - 2}$.",
            "steps": [
              "$y(x - 2) = 3x + 1 \\implies yx - 3x = 2y + 1$.",
              "$x(y - 3) = 2y + 1 \\implies x = \\frac{2y + 1}{y - 3}$.",
              "Resultado: $f^{-1}(x) = \\frac{2x + 1}{x - 3}$."
            ],
            "finalAnswer": "$f^{-1}(x) = \\frac{2x + 1}{x - 3}$"
          }
        ],
        "exercises": [
          {
            "id": "ex-4-1",
            "question": "Dada $f(x) = \\sqrt{x}$ y $g(x) = x^2 - 4$, halla el dominio de $(f \\circ g)(x)$:",
            "type": "mcq",
            "options": [
              "$(-\\infty, -2] \\cup [2, +\\infty)$",
              "$[-2, 2]$",
              "$[0, +\\infty)$",
              "$\\mathbb{R}$"
            ],
            "correctAnswer": 0,
            "hints": ["$(f \\circ g)(x) = \\sqrt{x^2 - 4}$. Condición: $x^2 - 4 \\ge 0$."],
            "explanation": "$x^2 - 4 \\ge 0 \\iff (x-2)(x+2) \\ge 0 \\iff x \\in (-\\infty, -2] \\cup [2, +\\infty)$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-5",
    "title": "NIVEL 5: Trigonometría",
    "macroPillar": "Herramientas & Cálculo",
    "badgeClass": "badge-nivel-3",
    "color": "#06B6D4",
    "description": "Razones trigonométricas, circunferencia goniométrica, identidades fundamental y pitagórica, ecuaciones y funciones trigonométricas.",
    "books": [
      "Repartido Oficial PI FING (Trigonometría)",
      "Precálculo Stewart Cap. 5, 6 & 7"
    ],
    "topics": [
      {
        "id": "trigonometria-fundamentos",
        "title": "5.1 - 5.5 Circunferencia, Identidades y Ecuaciones Trigonométricas",
        "subtitle": "Circunferencia unitaria, $\\sin^2 x + \\cos^2 x = 1$ y ecuaciones en $[0, 2\\pi)$",
        "theory": {
          "concept": "La trigonometría es la herramienta transversal esencial para el cálculo diferencial e integral. La circunferencia goniométrica define el seno en el eje Y y el coseno en el eje X para cualquier ángulo real.",
          "formulas": [
            {
              "label": "Identidad Pitagórica Fundamental",
              "latex": "\\sin^2(x) + \\cos^2(x) = 1"
            },
            {
              "label": "Ángulo Doble",
              "latex": "\\sin(2x) = 2\\sin(x)\\cos(x), \\quad \\cos(2x) = \\cos^2(x) - \\sin^2(x)"
            }
          ],
          "tips": "Aprende los ángulos notables de memoria: $0, \\pi/6, \\pi/4, \\pi/3, \\pi/2$.",
          "pitfall": "Olvidar sumar el período $+ 2k\\pi$ o perder soluciones al simplificar funciones en ambos lados de una ecuación."
        },
        "workedExamples": [
          {
            "problem": "Resuelve $2\\sin^2(x) - \\sin(x) - 1 = 0$ en $[0, 2\\pi)$.",
            "steps": [
              "Hacemos $u = \\sin(x) \\implies 2u^2 - u - 1 = 0$.",
              "Raíces: $u_1 = 1$ y $u_2 = -1/2$.",
              "Para $\\sin(x) = 1 \\implies x = \\pi/2$.",
              "Para $\\sin(x) = -1/2 \\implies x = 7\\pi/6, 11\\pi/6$."
            ],
            "finalAnswer": "$\\{\\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\}$"
          }
        ],
        "exercises": [
          {
            "id": "ex-5-1",
            "question": "Resuelve en $[0, 2\\pi)$ la ecuación: $$2\\cos^2(x) - 1 = 0$$",
            "type": "mcq",
            "options": [
              "$x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$",
              "$x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}$",
              "$x = 0, \\pi$",
              "$x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$"
            ],
            "correctAnswer": 0,
            "hints": ["$\\cos^2(x) = 1/2 \\implies \\cos(x) = \\pm \\frac{\\sqrt{2}}{2}$."],
            "explanation": "Abarca los ángulos notables con coseno $\\pm \\sqrt{2}/2$ en los 4 cuadrantes."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-6",
    "title": "NIVEL 6: Límites",
    "macroPillar": "Herramientas & Cálculo",
    "badgeClass": "badge-nivel-3",
    "color": "#3B82F6",
    "description": "Concepto intuitivo, sustitución directa, indeterminaciones 0/0 e inf/inf, racionalización, límites infinitos y trigonométricos.",
    "books": [
      "Cálculo I FING / Stewart Cap. 2"
    ],
    "topics": [
      {
        "id": "limites-indeterminaciones",
        "title": "6.1 - 6.8 Indeterminaciones, Factorización, Racionalización y Trigonométricos",
        "subtitle": "Métodos algebraicos de resolución de límites $0/0$, $\\infty/\\infty$ y el límite $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$",
        "theory": {
          "concept": "El límite describe el comportamiento de una función en la cercanía de un punto. Para levantar una indeterminación $0/0$, se factoriza el factor indeterminado $(x - a)$ o se multiplica por la expresión conjugada.",
          "formulas": [
            {
              "label": "Límite Trigonométrico Notable",
              "latex": "\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2} = \\frac{1}{2}"
            }
          ],
          "tips": "Usa infinitésimos equivalentes cuando $x \\to 0$: $\\sin(u) \\sim u$, $\\tan(u) \\sim u$, $e^u - 1 \\sim u$.",
          "pitfall": "Dividir entre cero o asumir que $0/0 = 1$."
        },
        "workedExamples": [
          {
            "problem": "Calcula $\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$.",
            "steps": [
              "Multiplicamos por $(1 + \\cos x)$: $\\frac{1 - \\cos^2 x}{x^2(1 + \\cos x)} = \\frac{\\sin^2 x}{x^2(1 + \\cos x)}$.",
              "Como $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, resulta $1^2 \\cdot \\frac{1}{1 + 1} = \\frac{1}{2}$."
            ],
            "finalAnswer": "$\\frac{1}{2}$"
          }
        ],
        "exercises": [
          {
            "id": "ex-6-1",
            "question": "Calcula el límite indeterminado: $$\\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - 5x + 6}$$",
            "type": "mcq",
            "options": [
              "$6$",
              "$3$",
              "$0$",
              "$+\\infty$"
            ],
            "correctAnswer": 0,
            "hints": ["Factoriza: $\\frac{(x-3)(x+3)}{(x-3)(x-2)} = \\frac{x+3}{x-2}$."],
            "explanation": "Evaluando en $x=3$: $\\frac{3+3}{3-2} = 6$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-7",
    "title": "NIVEL 7: Continuidad",
    "macroPillar": "Herramientas & Cálculo",
    "badgeClass": "badge-nivel-4",
    "color": "#10B981",
    "description": "Continuidad en un punto y en un intervalo, funciones por partes, puntos de empalme, parámetros k y Teorema de Bolzano.",
    "books": [
      "Cálculo I FING Cap. 2"
    ],
    "topics": [
      {
        "id": "continuidad-empalmes",
        "title": "7.1 - 7.4 Continuidad, Funciones por Partes y Teoremas",
        "subtitle": "Puntos de empalme, parámetros $k$ de continuidad y Teorema de Bolzano",
        "theory": {
          "concept": "Una función es continua en $x_0$ si $\\lim_{x \\to x_0} f(x) = f(x_0)$. En funciones a trozos, los límites laterales por la izquierda y derecha deben coincidir exactamente con el valor de la función.",
          "formulas": [
            {
              "label": "Condición de Continuidad",
              "latex": "\\lim_{x \\to x_0^-} f(x) = \\lim_{x \\to x_0^+} f(x) = f(x_0)"
            }
          ],
          "tips": "El Teorema de Bolzano garantiza que si $f$ es continua en $[a, b]$ y $f(a) \\cdot f(b) < 0$, existe al menos una raíz en $(a, b)$.",
          "pitfall": "Olvidar verificar la existencia de $f(x_0)$ antes de declarar la continuidad."
        },
        "workedExamples": [
          {
            "problem": "Halla $a$ para que $g(x) = \\begin{cases} ax + 2 & x \\le 2 \\\\ x^2 - a & x > 2 \\end{cases}$ sea continua en $x = 2$.",
            "steps": [
              "Límite por izquierda y valor: $g(2) = 2a + 2$.",
              "Límite por derecha: $4 - a$.",
              "Igualamos: $2a + 2 = 4 - a \\implies 3a = 2 \\implies a = 2/3$."
            ],
            "finalAnswer": "$a = 2/3$"
          }
        ],
        "exercises": [
          {
            "id": "ex-7-1",
            "question": "Halla el parámetro $a$ para que $g(x) = \\begin{cases} ax + 2 & x \\le 2 \\\\ x^2 - a & x > 2 \\end{cases}$ sea continua en todo $\\mathbb{R}$:",
            "type": "mcq",
            "options": [
              "$a = \\frac{2}{3}$",
              "$a = 1$",
              "$a = 2$",
              "$a = 0$"
            ],
            "correctAnswer": 0,
            "hints": ["$2a + 2 = 4 - a \\implies 3a = 2$."],
            "explanation": "$a = 2/3$ garantiza la coincidencia de los límites laterales en $x=2$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-8",
    "title": "NIVEL 8: Derivadas",
    "macroPillar": "Herramientas & Cálculo",
    "badgeClass": "badge-nivel-4",
    "color": "#F59E0B",
    "description": "Interpretación geométrica, definición por límite, reglas de derivación, regla de la cadena, recta tangente, monotonía y extremoss.",
    "books": [
      "Cálculo I FING Cap. 3"
    ],
    "topics": [
      {
        "id": "derivadas-tangente-monotonia",
        "title": "8.1 - 8.9 Definición, Regla de la Cadena, Recta Tangente y Monotonía",
        "subtitle": "Cociente incremental, derivada de la composición $f'(g(x)) \\cdot g'(x)$ y extremos locales",
        "theory": {
          "concept": "La derivada $f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0+h) - f(x_0)}{h}$ representa la pendiente de la recta tangente a la curva en el punto $(x_0, f(x_0))$. Si $f'(x) > 0$, la función es estrictamente creciente.",
          "formulas": [
            {
              "label": "Definición de Derivada",
              "latex": "f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}"
            },
            {
              "label": "Recta Tangente",
              "latex": "y - f(x_0) = f'(x_0)(x - x_0)"
            }
          ],
          "tips": "Para derivar funciones compuestas, aplica rigurosamente la Regla de la Cadena.",
          "pitfall": "Confundir la derivada en un punto $f'(x_0)$ con la función derivada $f'(x)$."
        },
        "workedExamples": [
          {
            "problem": "Halla la recta tangente a $f(x) = x^2 - 3x + 5$ en $x_0 = 2$.",
            "steps": [
              "Punto de contacto: $f(2) = 4 - 6 + 5 = 3 \\implies (2, 3)$.",
              "Derivada: $f'(x) = 2x - 3 \\implies m = f'(2) = 1$.",
              "Ecuación: $y - 3 = 1(x - 2) \\implies y = x + 1$."
            ],
            "finalAnswer": "$y = x + 1$"
          }
        ],
        "exercises": [
          {
            "id": "ex-8-1",
            "question": "Dada la función $h(x) = \\ln(x^2 + 1)$, calcula la derivada $h'(x)$ evaluada en $x = 1$:",
            "type": "mcq",
            "options": [
              "$1$",
              "$\\frac{1}{2}$",
              "$2$",
              "$0$"
            ],
            "correctAnswer": 0,
            "hints": ["$h'(x) = \\frac{2x}{x^2 + 1}$. Evalúa en $x=1$."],
            "explanation": "$h'(1) = \\frac{2(1)}{1^2+1} = \\frac{2}{2} = 1$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-9",
    "title": "NIVEL 9: Aplicaciones y Modelización",
    "macroPillar": "Modelización Matemáticas",
    "badgeClass": "badge-nivel-5",
    "color": "#EC4899",
    "description": "Pensamiento de Ingeniería: Porcentajes y variaciones, proporcionalidad, mezclas/conservación, movimiento, optimización e interpretación de gráficos.",
    "books": [
      "Repartido Oficial PI FING (Problemas de Aplicación)",
      "Modelos Matemáticos en Ingeniería FING"
    ],
    "topics": [
      {
        "id": "modelizacion-optimizacion",
        "title": "9.1 - 9.7 Modelización Matemática y Optimización para Ingeniería",
        "subtitle": "Situación real $\\to$ Función modelo $\\to$ Resolución $\\to$ Interpretación física",
        "theory": {
          "concept": "Modelar es traducir un problema de la realidad (físico, económico o geométrico) a lenguaje matemático. Se define la variable, se construye la función objetivo, se determina el dominio admisible y se optimiza o resuelve.",
          "formulas": [
            {
              "label": "Ecuación de Conservación",
              "latex": "Masa_{inicial} = Masa_{final}, \\quad V_1 C_1 + V_2 C_2 = V_t C_t"
            },
            {
              "label": "Variación Porcentual",
              "latex": "Factor_{neto} = (1 \\pm p_1/100)(1 \\pm p_2/100)"
            }
          ],
          "tips": "Verifica siempre que la solución matemática obtenida tenga sentido físico en el contexto del problema.",
          "pitfall": "Olvidar restringir el dominio de la función modelo a valores físicamente admisibles (ej: tiempos $t \\ge 0$ o dimensiones positivas)."
        },
        "workedExamples": [
          {
            "problem": "Un depósito pierde el 10% de su líquido cada día. Si inicia con 1000 L, ¿cuánto contiene al cabo de 3 días?",
            "steps": [
              "Factor diario de retención: $1 - 0.10 = 0.90$.",
              "Modelo exponencial de volumen: $V(t) = 1000 \\cdot (0.90)^t$.",
              "Para $t = 3$: $V(3) = 1000 \\cdot (0.90)^3 = 1000 \\cdot 0.729 = 729$ L."
            ],
            "finalAnswer": "729 L"
          }
        ],
        "exercises": [
          {
            "id": "ex-9-1",
            "question": "Un artículo sube un $10\\%$ su precio y luego sufre un descuento del $10\\%$. ¿Cuál es el precio final respecto al inicial?",
            "type": "mcq",
            "options": [
              "Se reduce un $1\\%$ (precio al $99\\%$ del inicial).",
              "Permanece igual al $100\\%$.",
              "Aumenta un $1\\%$.",
              "Se reduce un $2\\%$."
            ],
            "correctAnswer": 0,
            "hints": ["Factor total: $1.10 \\times 0.90 = 0.99$."],
            "explanation": "El factor $0.99$ equivale al $99\\%$ del precio original, resultando en un descuento neto del $1\\%$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-10",
    "title": "NIVEL 10: Integración FING",
    "macroPillar": "Integración FING",
    "badgeClass": "badge-nivel-5",
    "color": "#F43F5E",
    "description": "Pensamiento de Sistema Integrado: Reconocimiento de patrones, integración multipatrón, problemas sin indicación de método, gestión de distractores, simulacros oficiales y análisis post-simulacro.",
    "books": [
      "Repartido Oficial Completo PI FING",
      "Pruebas Iniciales FING 2020-2026"
    ],
    "topics": [
      {
        "id": "entrenamiento-pi",
        "title": "10.1 - 10.6 Sistema Integrado, Simulacros y Análisis Post-Simulacro",
        "subtitle": "Integración multipatrón, gestión de tiempo real y desglose analítico de errores",
        "theory": {
          "concept": "En la facultad de ingeniería los problemas no vienen etiquetados por tema. El estudiante debe elegir autónomamente la combinación de herramientas (factorización + dominio + límite + análisis conceptual) y evitar opciones tractoras engañosas.",
          "formulas": [
            {
              "label": "Métrica de Desempeño FING",
              "latex": "Puntaje = \\frac{\\text{Respuestas Correctas} - \\text{Penalizaciones}}{\\text{Total}} \\ge 60\\%"
            }
          ],
          "tips": "Realiza un análisis post-simulacro clasificando tus fallos en: Error Algebraico, Error Conceptual o Error de Estrategia.",
          "pitfall": "Avanzar en el examen sin haber desarrollado la capacidad de descartar distractores lógicos."
        },
        "workedExamples": [
          {
            "problem": "Evalúa el límite integrador $\\lim_{x \\to 0} \\frac{e^{3x} - 1}{\\tan(2x)}$.",
            "steps": [
              "Identificamos equivalencias: $e^{3x} - 1 \\sim 3x$ y $\\tan(2x) \\sim 2x$.",
              "Sustituimos: $\\lim_{x \\to 0} \\frac{3x}{2x} = \\frac{3}{2}$."
            ],
            "finalAnswer": "$\\frac{3}{2}$"
          }
        ],
        "exercises": [
          {
            "id": "ex-10-1",
            "question": "⭐ SIMULACRO FING: Resuelve el sistema lineal sin calculadora: $$\\begin{cases} 2x - y = 5 \\\\ x + 3y = 6 \\end{cases}$$ ¿Cuánto vale la suma $x + y$?",
            "type": "mcq",
            "options": [
              "$4$",
              "$5$",
              "$3$",
              "$6$"
            ],
            "correctAnswer": 0,
            "hints": ["De $x = 6 - 3y$, sustituye en la 1ra ecuacion: $2(6-3y) - y = 5 \\implies y = 1, x = 3$."],
            "explanation": "$x = 3, y = 1 \\implies x + y = 4$."
          }
        ]
      }
    ]
  }
];

export const DIAGNOSTIC_QUESTIONS = [
  {
    "id": "diag-1",
    "question": "Simplifica la expresión con radicales: $$\\frac{\\sqrt{18} + \\sqrt{50}}{\\sqrt{8}}$$",
    "options": [
      "4",
      "2",
      "\\sqrt{17}",
      "\\frac{8}{2}"
    ],
    "correctAnswer": 0,
    "levelTarget": "etapa-0"
  },
  {
    "id": "diag-2",
    "question": "Si $A = [1, 4]$ y $B = [-2, 3]$, ¿cuál es el área del producto cartesiano $A \\times B \\subset \\mathbb{R}^2$?",
    "options": [
      "15",
      "12",
      "20",
      "9"
    ],
    "correctAnswer": 0,
    "levelTarget": "etapa-1"
  },
  {
    "id": "diag-3",
    "question": "¿Cuál es la contrarrecíproca equivalente a la implicación $P \\implies Q$?",
    "options": [
      "$\\neg Q \\implies \\neg P$",
      "$Q \\implies P$",
      "$\\neg P \\implies \\neg Q$",
      "$P \\land \\neg Q$"
    ],
    "correctAnswer": 0,
    "levelTarget": "etapa-2"
  },
  {
    "id": "diag-4",
    "question": "Evalúa el límite indeterminado: $$\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$$",
    "options": [
      "\\frac{1}{2}",
      "0",
      "1",
      "\\infty"
    ],
    "correctAnswer": 0,
    "levelTarget": "etapa-6"
  }
];
