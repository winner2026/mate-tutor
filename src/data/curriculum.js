export const CURRICULUM = [
  {
    "id": "etapa-0",
    "title": "Etapa 0: Fundamentos Matemáticos",
    "badgeClass": "badge-nivel-0",
    "color": "#10B981",
    "description": "Aritmética, operatoria algebraica, productos notables y factorización completa (Ruffini, Teorema del Factor y Raíces Racionales).",
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
          },
          {
            "id": "ex-0-1b",
            "question": "Racionaliza el denominador de la fracción $$\\frac{6}{\\sqrt{7} - 1}$$",
            "type": "mcq",
            "options": [
              "$\\sqrt{7} + 1$",
              "$\\sqrt{7} - 1$",
              "$\\frac{\\sqrt{7} + 1}{6}$",
              "$\\frac{\\sqrt{7} + 1}{8}$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Multiplica numerador y denominador por el conjugado $(\\sqrt{7} + 1)$.",
              "En el denominador aplica $(a-b)(a+b) = a^2 - b^2$: $(\\sqrt{7})^2 - 1^2 = 7 - 1 = 6$."
            ],
            "explanation": "$\\frac{6(\\sqrt{7}+1)}{(\\sqrt{7}-1)(\\sqrt{7}+1)} = \\frac{6(\\sqrt{7}+1)}{6} = \\sqrt{7} + 1$."
          },
          {
            "id": "ex-0-1c",
            "question": "Simplifica la expresión con potencias racionales: $$(x^{-2} \\cdot x^{5/2})^{4/3} \\quad (x > 0)$$",
            "type": "mcq",
            "options": [
              "$\\sqrt[3]{x^2}$",
              "$x^2$",
              "$x^{2/3}$",
              "$x$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Suma los exponentes internos: $-2 + \\frac{5}{2} = \\frac{1}{2}$.",
              "Aplica potencia de potencia: $(\\frac{1}{2}) \\cdot (\\frac{4}{3}) = \\frac{2}{3}$."
            ],
            "explanation": "$x^{1/2 \\cdot 4/3} = x^{2/3} = \\sqrt[3]{x^2}$."
          },
          {
            "id": "ex-0-1d",
            "question": "⭐ PARCIAL FING: Simplifica la expresión exponencial: $$\\frac{2^{n+3} - 2^n}{2^{n+1}}$$ ",
            "type": "mcq",
            "options": [
              "$\\frac{7}{2}$",
              "4",
              "3",
              "$\\frac{3}{2}$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Extrae factor común $2^n$ en el numerador: $2^n(2^3 - 1) = 2^n(7)$.",
              "Escribe el denominador como $2^n \\cdot 2$ y simplifica $2^n$."
            ],
            "explanation": "$\\frac{2^n(8 - 1)}{2^n \\cdot 2} = \\frac{7}{2}$."
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
            },
            {
              "label": "Suma y Diferencia de Cubos",
              "latex": "a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)"
            }
          ],
          "tips": "Para encontrar raíces racionales rápidamente, prueba primero con los divisores del término independiente.",
          "pitfall": "Olvidar incluir los ceros en coeficientes faltantes al armar la tabla de Ruffini (ej: para $x^3 - 1$, poner coeficientes 1, 0, 0, -1)."
        },
        "workedExamples": [
          {
            "problem": "Factoriza el polinomio $P(x) = x^3 - 4x^2 + x + 6$.",
            "steps": [
              "Término independiente = $6$. Posibles raíces: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$.",
              "Probamos $x = -1$: $P(-1) = (-1)^3 - 4(-1)^2 + (-1) + 6 = -1 - 4 - 1 + 6 = 0$.",
              "Aplicamos Ruffini dividiendo por $(x + 1)$: resulta el cociente $x^2 - 5x + 6$.",
              "Factorizamos $x^2 - 5x + 6 = (x - 2)(x - 3)$.",
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
              "Agrupa por pares: $(2x^3 - 3x^2) - (8x - 12) = x^2(2x-3) - 4(2x-3)$.",
              "Extrae el factor común $(2x-3)(x^2-4) = (2x-3)(x-2)(x+2)$."
            ],
            "explanation": "Factorizando por agrupación resulta $(2x-3)(x-2)(x+2)$, de donde las raíces son $x = \\frac{3}{2}, 2, -2$."
          },
          {
            "id": "ex-0-2b",
            "question": "Aplica la Regla de Ruffini para dividir $P(x) = x^3 - 6x^2 + 11x - 6$ por $(x - 1)$. ¿Cuál es el cociente $Q(x)$?",
            "type": "mcq",
            "options": [
              "$x^2 - 5x + 6$",
              "$x^2 + 5x - 6$",
              "$x^2 - 7x + 12$",
              "$x^2 - 6x + 5$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Usa los coeficientes $1, -6, 11, -6$ y baja el 1 multiplicando por $r = 1$.",
              "Suma por columnas: $1, (-6+1=-5), (11-5=6), (-6+6=0)$."
            ],
            "explanation": "Los coeficientes del cociente son $1, -5, 6$, por lo que $Q(x) = x^2 - 5x + 6$."
          },
          {
            "id": "ex-0-2c",
            "question": "Sabiendo que $x = 2$ es raíz de $P(x) = x^3 - 3x^2 - x + 6$, calcula las raíces restantes:",
            "type": "mcq",
            "options": [
              "$x = -1$ y $x = 3$",
              "$x = 1$ y $x = -3$",
              "$x = 2$ raíz doble",
              "No tiene más raíces reales"
            ],
            "correctAnswer": 0,
            "hints": [
              "Divide $P(x)$ entre $(x - 2)$ por Ruffini para obtener el cociente $Q(x) = x^2 - x - 3$.",
              "Usa la fórmula de Bashkara $x = \\frac{1 \\pm \\sqrt{1 + 12}}{2}$."
            ],
            "explanation": "Dividiendo resulta $Q(x) = x^2 - 2x - 3 = (x+1)(x-3)$, de donde las raíces son $x = -1$ y $x = 3$."
          },
          {
            "id": "ex-0-2d",
            "question": "⭐ PARCIAL FING: Determina el valor del parámetro $a$ para que $P(x) = x^3 - ax^2 + 2x - 4$ sea divisible por $(x - 2)$:",
            "type": "mcq",
            "options": [
              "$a = 2$",
              "$a = 4$",
              "$a = -2$",
              "$a = 0$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Por Teorema del Resto, la divisibilidad por $(x - 2)$ requiere que $P(2) = 0$.",
              "Evalúa: $2^3 - a(2^2) + 2(2) - 4 = 8 - 4a + 4 - 4 = 8 - 4a = 0$."
            ],
            "explanation": "$8 - 4a = 0 \\implies 4a = 8 \\implies a = 2$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-1",
    "title": "Etapa 1: Conjuntos y Diagramas de Venn",
    "badgeClass": "badge-nivel-0",
    "color": "#34D399",
    "description": "Inclusión, unión, intersección, diferencia, producto cartesiano A x B y diagramas de Venn.",
    "books": [
      "Repartido Oficial PI FING (Ejercicios 1.1-1.3)"
    ],
    "topics": [
      {
        "id": "conjuntos-producto-cartesiano",
        "title": "1. Operaciones de Conjuntos y Producto Cartesiano",
        "subtitle": "Inclusión, conjuntos potencia, producto cartesiano A x B y Venn",
        "theory": {
          "concept": "El producto cartesiano $A \\times B$ es el conjunto de todos los pares ordenados $(a, b)$ tales que $a \\in A$ y $b \\in B$. En la FING se utiliza constantemente para definir relaciones y regiones en $\\mathbb{R}^2$.",
          "formulas": [
            {
              "label": "Producto Cartesiano",
              "latex": "A \\times B = \\{ (a, b) \\mid a \\in A \\land b \\in B \\}"
            },
            {
              "label": "Cardinal del Producto Cartesiano",
              "latex": "|A \\times B| = |A| \\cdot |B|"
            }
          ],
          "tips": "Recuerda que en pares ordenados $(a, b) \\neq (b, a)$ a menos que $a = b$.",
          "pitfall": "Confundir el producto cartesiano $A \\times B$ con la intersección $A \\cap B$."
        },
        "workedExamples": [
          {
            "problem": "Dado $A = \\{1, 2\\}$ y $B = \\{x, y, z\\}$, determina $|A \\times B|$ y escribe sus elementos.",
            "steps": [
              "El número de elementos es $|A| \\cdot |B| = 2 \\cdot 3 = 6$.",
              "Formamos los pares: $(1,x), (1,y), (1,z), (2,x), (2,y), (2,z)$."
            ],
            "finalAnswer": "$A \\times B = \\{(1,x), (1,y), (1,z), (2,x), (2,y), (2,z)\\}$"
          }
        ],
        "exercises": [
          {
            "id": "ex-1-1",
            "question": "Sean $A = \\{x \\in \\mathbb{R} \\mid 1 \\le x \\le 3\\}$ y $B = \\{y \\in \\mathbb{R} \\mid 2 \\le y \\le 5\\}$. En el plano $\\mathbb{R}^2$, ¿qué figura representa $A \\times B$?",
            "type": "mcq",
            "options": [
              "Un rectángulo lleno de base 2 y altura 3.",
              "Un segmento de recta de pendiente positiva.",
              "Un círculo de radio 3 en el origen.",
              "Una región triangular."
            ],
            "correctAnswer": 0,
            "hints": [
              "Base en $x$: $3 - 1 = 2$. Altura en $y$: $5 - 2 = 3$.",
              "El producto cartesiano comprende todas las parejas $(x,y)$ en esa región rectangular."
            ],
            "explanation": "Representa la región rectangular cerrada $[1,3] \\times [2,5]$ de lados 2 y 3."
          },
          {
            "id": "ex-1-1b",
            "question": "Dado $A = \\{1, 2, 3\\}$ y $B = \\{a, b\\}$, calcula la cardinalidad del conjunto potencia del producto cartesiano: $|\\mathcal{P}(A \\times B)|$",
            "type": "mcq",
            "options": [
              "$64$",
              "$32$",
              "$6$",
              "$12$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Calcula $|A \\times B| = |A| \\cdot |B| = 3 \\cdot 2 = 6$.",
              "El número de subconjuntos del conjunto potencia es $2^{|A \\times B|} = 2^6$."
            ],
            "explanation": "$|A \\times B| = 6 \\implies |\\mathcal{P}(A \\times B)| = 2^6 = 64$."
          },
          {
            "id": "ex-1-1c",
            "question": "⭐ PARCIAL FING: Sean $A, B$ subconjuntos del universo $U$. Simplifica la expresión de conjuntos: $$(A \\cup B) \\cap (A \\cup B^c)$$",
            "type": "mcq",
            "options": [
              "$A$",
              "$B$",
              "$A \\cap B$",
              "$U$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Aplica la propiedad distributiva de la unión respecto a la intersección: $A \\cup (B \\cap B^c)$.",
              "Dado que $B \\cap B^c = \\emptyset$, queda $A \\cup \\emptyset = A$."
            ],
            "explanation": "Por propiedad distributiva: $A \\cup (B \\cap B^c) = A \\cup \\emptyset = A$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-2",
    "title": "Etapa 2: Lógica y Métodos de Demostración",
    "badgeClass": "badge-nivel-1",
    "color": "#F59E0B",
    "description": "Proposiciones, cuantificadores, directo, recíproco, contrarrecíproco, contraejemplo e Inducción Completa.",
    "books": [
      "Repartido Oficial PI FING (Ejercicios 2.1-2.3)",
      "Programa UC MI FING"
    ],
    "topics": [
      {
        "id": "logica-demostraciones",
        "title": "2.1 Lógica, Equivalencias y Demostraciones",
        "subtitle": "Directo, recíproco, contrarrecíproco y método de contraejemplo",
        "theory": {
          "concept": "Para probar una implicación $P \\implies Q$, la **contrarrecíproca** $\\neg Q \\implies \\neg P$ es una estrategia fundamental en FING. Demostrar la contrarrecíproca es lógicamente equivalente a demostrar la implicación directa.",
          "formulas": [
            {
              "label": "Equivalencia Contrarrecíproca",
              "latex": "(P \\implies Q) \\iff (\\neg Q \\implies \\neg P)"
            },
            {
              "label": "Implicación Recíproca",
              "latex": "Q \\implies P \\quad (NO es equivalente a P \\implies Q)"
            }
          ],
          "tips": "Para REFUTAR una afirmación universal $\\forall x, P(x)$, solo necesitas mostrar UN contraejemplo donde $P(x)$ sea falso.",
          "pitfall": "Asumir que si la implicación $P \\implies Q$ es verdadera, su recíproca $Q \\implies P$ también lo es. ¡No son equivalentes!"
        },
        "workedExamples": [
          {
            "problem": "Escribe la contrarrecíproca del enunciado: 'Si $n^2$ es par, entonces $n$ es par'.",
            "steps": [
              "Identificamos $P: n^2 \\text{ es par}$, y $Q: n \\text{ es par}$.",
              "Negamos $Q: n \\text{ es impar}$.",
              "Negamos $P: n^2 \\text{ es impar}$.",
              "Formamos la implicación $\\neg Q \\implies \\neg P$."
            ],
            "finalAnswer": "'Si $n$ es impar, entonces $n^2$ es impar.'"
          }
        ],
        "exercises": [
          {
            "id": "ex-2-1",
            "question": "¿Cuál es la proposición **contrarrecíproca** a: 'Si una función $f$ es derivable en $x_0$, entonces $f$ es continua en $x_0$'?",
            "type": "mcq",
            "options": [
              "Si $f$ no es continua en $x_0$, entonces $f$ no es derivable en $x_0$.",
              "Si $f$ es continua en $x_0$, entonces $f$ es derivable en $x_0$.",
              "Si $f$ no es derivable en $x_0$, entonces $f$ no es continua en $x_0$.",
              "Una función es derivable si y solo si es continua."
            ],
            "correctAnswer": 0,
            "hints": [
              "La contrarrecíproca de $P \\implies Q$ es $\\neg Q \\implies \\neg P$.",
              "Negar $Q$ ('$f$ es continua') resulta en '$f$ no es continua'."
            ],
            "explanation": "La contrarrecíproca niega e invierte el condicional: $\\neg \\text{Continua} \\implies \\neg \\text{Derivable}$."
          },
          {
            "id": "ex-2-1b",
            "question": "Indica la **negación formal** de la proposición universal: $$\\forall x \\in \\mathbb{R}, \\quad x^2 + 1 > 0$$",
            "type": "mcq",
            "options": [
              "$\\exists x \\in \\mathbb{R} \\mid x^2 + 1 \\le 0$",
              "$\\forall x \\in \\mathbb{R}, x^2 + 1 \\le 0$",
              "$\\exists x \\in \\mathbb{R} \\mid x^2 + 1 < 0$",
              "No existe ningún número real"
            ],
            "correctAnswer": 0,
            "hints": [
              "La negación de $\\forall x, P(x)$ es $\\exists x \\mid \\neg P(x)$.",
              "La negación de $> 0$ es $\\le 0$."
            ],
            "explanation": "Al negar el cuantificador universal se convierte en existencial y la desigualdad se invierte a $\\le$."
          }
        ]
      },
      {
        "id": "induccion-completa",
        "title": "2.2 Inducción Completa (Principio de Inducción)",
        "subtitle": "Paso base, hipótesis inductiva y tesis inductiva sobre n en N",
        "theory": {
          "concept": "El Principio de Inducción Completa permite probar que una propiedad $P(n)$ se cumple para todo número natural $n \\ge n_0$. Requiere probar: 1) Paso Base: $P(n_0)$ es cierto. 2) Paso Inductivo: Asumiendo $P(k)$ cierto (Hipótesis), probar $P(k+1)$ (Tesis).",
          "formulas": [
            {
              "label": "Principio de Inducción",
              "latex": "[P(n_0) \\land (\\forall k \\ge n_0, P(k) \\implies P(k+1))] \\implies \\forall n \\ge n_0, P(n)"
            },
            {
              "label": "Suma de los Primeros n Naturales",
              "latex": "\\sum_{i=1}^n i = 1 + 2 + \\dots + n = \\frac{n(n+1)}{2}"
            }
          ],
          "tips": "En el paso inductivo, SIEMPRE debes buscar dónde usar la Hipótesis Inductiva para reemplazar la suma o propiedad previa.",
          "pitfall": "Demostrar solo el paso base u olvidar escribir explícitamente dónde usaste la hipótesis inductiva."
        },
        "workedExamples": [
          {
            "problem": "En la inducción para probar 1 + 2 + ... + n = n(n+1)/2, escribe la Tesis Inductiva P(k+1).",
            "steps": [
              "Sustituimos n por k+1 en la fórmula.",
              "Lado izquierdo: 1 + 2 + ... + k + (k+1).",
              "Lado derecho: (k+1)((k+1)+1)/2 = (k+1)(k+2)/2."
            ],
            "finalAnswer": "1 + 2 + \\dots + k + (k+1) = \\frac{(k+1)(k+2)}{2}"
          }
        ],
        "exercises": [
          {
            "id": "ex-2-2",
            "question": "Al demostrar por Inducción Completa la suma $S_n = 1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$, ¿cuál es la **hipótesis inductiva** para $n = k$?",
            "type": "mcq",
            "options": [
              "Asumir como verdadera la fórmula: $1 + 2 + \\dots + k = \\frac{k(k+1)}{2}$",
              "Probar que la fórmula vale para $n = k + 1$",
              "Demostrar que la fórmula vale para $n = 1$",
              "Asumir que $k = k + 1$"
            ],
            "correctAnswer": 0,
            "hints": [
              "La hipótesis inductiva es la suposición de que el enunciado $P(k)$ es verdadero para un entero arbitrario $k \\ge 1$."
            ],
            "explanation": "La hipótesis inductiva establece como verdadera la proposición para el término $k$."
          },
          {
            "id": "ex-2-2b",
            "question": "⭐ PARCIAL FING: Al probar por inducción que $3^n > n^2$ para $n \\ge 1$, si la hipótesis inductiva es $3^k > k^2$, ¿cuál es el lado izquierdo del paso inductivo para $n = k+1$?",
            "type": "mcq",
            "options": [
              "$3^{k+1} = 3 \\cdot 3^k$",
              "$3^{k+1} = 3^k + 3$",
              "$(k+1)^2$",
              "$3k + 3$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Expresa $3^{k+1}$ utilizando propiedades de exponentes: $3^{k+1} = 3 \\cdot 3^k$.",
              "Sustituye la hipótesis inductiva $3^k > k^2$ para acotar: $3 \\cdot 3^k > 3k^2$."
            ],
            "explanation": "$3^{k+1} = 3 \\cdot 3^k > 3k^2 > (k+1)^2$ para $k \\ge 1$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-3",
    "title": "Etapa 3: Álgebra, Ecuaciones y Regiones del Plano",
    "badgeClass": "badge-nivel-1",
    "color": "#F59E0B",
    "description": "Polinomios, ecuaciones polinómicas/exponenciales/logarítmicas, sistemas, rectas e inecuaciones en el plano.",
    "books": [
      "Repartido Oficial PI FING (Ejercicios 3.1-3.12)"
    ],
    "topics": [
      {
        "id": "rectas-regiones-plano",
        "title": "3. Rectas y Regiones del Plano R^2",
        "subtitle": "Ecuaciones de rectas, paralelismo, perpendicularidad y semiplanos",
        "theory": {
          "concept": "Una inecuación de primer grado en dos variables como $ax + by + c \\ge 0$ representa un semiplano en $\\mathbb{R}^2$. El sistema de inecuaciones define la intersección de dichos semiplanos.",
          "formulas": [
            {
              "label": "Ecuación Explícita de Recta",
              "latex": "y = mx + b \\quad (m = \\text{pendiente})"
            },
            {
              "label": "Condición de Perpendicularidad",
              "latex": "m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{m_1}"
            }
          ],
          "tips": "Para saber qué lado de la recta satisface $ax + by + c > 0$, prueba sustituyendo el punto origen $(0,0)$.",
          "pitfall": "Confundir la pendiente $m$ con la intersección con el eje $y$ ($b$)."
        },
        "workedExamples": [
          {
            "problem": "Halla la ecuación de la recta perpendicular a y = 2x + 1 que pasa por el punto P(2, 4).",
            "steps": [
              "Pendiente de la recta original: m1 = 2.",
              "Pendiente perpendicular: m2 = -1/m1 = -1/2.",
              "Ecuación punto-pendiente: y - y0 = m(x - x0) => y - 4 = (-1/2)(x - 2).",
              "Despejando: y = -1/2 x + 1 + 4 = -1/2 x + 5."
            ],
            "finalAnswer": "y = -\\frac{1}{2}x + 5"
          }
        ],
        "exercises": [
          {
            "id": "ex-3-1",
            "question": "Determina la ecuación de la recta $L_2$ perpendicular a $L_1: 2x - y + 4 = 0$ que pasa por el punto $P(2, 4)$:",
            "type": "mcq",
            "options": [
              "$y = -\\frac{1}{2}x + 5$",
              "$y = 2x$",
              "$y = -2x + 8$",
              "$y = \\frac{1}{2}x + 3$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Despeja la pendiente de $L_1$: $y = 2x + 4 \\implies m_1 = 2$.",
              "La pendiente perpendicular cumple $m_1 \\cdot m_2 = -1 \\implies m_2 = -1/2$.",
              "Usa punto-pendiente: $y - 4 = -1/2(x - 2) \\implies y = -1/2 x + 5$."
            ],
            "explanation": "Pendiente $m_2 = -1/2$. Sustituyendo $P(2,4)$: $y - 4 = -1/2(x - 2) \\implies y = -\\frac{1}{2}x + 5$."
          },
          {
            "id": "ex-3-1b",
            "question": "⭐ PARCIAL FING: ¿Qué región del plano representa el sistema de inecuaciones $x \\ge 0, y \\ge 0, x + y \\le 4$?",
            "type": "mcq",
            "options": [
              "Un triángulo cerrado en el primer cuadrante de vértices $(0,0), (4,0), (0,4)$.",
              "Un cuadrado en el primer cuadrante de lado 4.",
              "Un semiplano infinito.",
              "Un círculo de radio 4."
            ],
            "correctAnswer": 0,
            "hints": [
              "$x \\ge 0, y \\ge 0$ restringen la región al primer cuadrante.",
              "$x + y \\le 4$ representa la zona por debajo de la recta que une $(4,0)$ y $(0,4)$."
            ],
            "explanation": "Es el triángulo rectángulo lleno de vértices en $(0,0)$, $(4,0)$ y $(0,4)$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-4",
    "title": "Etapa 4: Funciones, Clasificación e Inversas",
    "badgeClass": "badge-nivel-2",
    "color": "#06B6D4",
    "description": "Inyectiva, sobreyectiva, biyectiva, composición (f o g), función inversa y transformaciones de gráficos.",
    "books": [
      "Repartido Oficial PI FING (Ejercicios 4.1-4.8)"
    ],
    "topics": [
      {
        "id": "clasificacion-inversa",
        "title": "4. Inyectividad, Sobreyectividad y Función Inversa",
        "subtitle": "Criterios formales de biyectividad y simetría gráfica de f^-1(x)",
        "theory": {
          "concept": "Una función $f: A \\to B$ es **inyectiva** si elementos distintos tienen imágenes distintas ($f(x_1) = f(x_2) \\implies x_1 = x_2$). Es **sobreyectiva** si su imagen coincide con el codominio $B$. Si es biyectiva, posee función inversa $f^{-1}: B \\to A$, cuyo gráfico es simétrico respecto a la recta $y = x$.",
          "formulas": [
            {
              "label": "Criterio de Inyectividad",
              "latex": "f(x_1) = f(x_2) \\implies x_1 = x_2"
            },
            {
              "label": "Propiedad Fundamental de Inversa",
              "latex": "(f^{-1} \\circ f)(x) = x, \\quad (f \\circ f^{-1})(y) = y"
            }
          ],
          "tips": "El test de la recta horizontal permite verificar inyectividad en un gráfico: ninguna recta horizontal debe cortar al gráfico en más de un punto.",
          "pitfall": "Confundir la función inversa $f^{-1}(x)$ con la recíproca $\\frac{1}{f(x)}$."
        },
        "workedExamples": [
          {
            "problem": "Demuestra si f: R -> R dada por f(x) = 2x^3 + 1 es inyectiva.",
            "steps": [
              "Planteamos f(x1) = f(x2): 2x1^3 + 1 = 2x2^3 + 1.",
              "Restamos 1 de ambos lados: 2x1^3 = 2x2^3.",
              "Dividimos por 2: x1^3 = x2^3.",
              "Extraemos raíz cúbica (que es función impar estricta): x1 = x2.",
              "Conclusión: Es inyectiva."
            ],
            "finalAnswer": "Es inyectiva"
          }
        ],
        "exercises": [
          {
            "id": "ex-4-1",
            "question": "Sea la función $f: \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{3\\}$ dada por $f(x) = \\frac{3x + 1}{x - 2}$. Halla su función inversa $f^{-1}(x)$:",
            "type": "mcq",
            "options": [
              "$f^{-1}(x) = \\frac{2x + 1}{x - 3}$",
              "$f^{-1}(x) = \\frac{x - 2}{3x + 1}$",
              "$f^{-1}(x) = \\frac{3x - 1}{x + 2}$",
              "$f^{-1}(x) = \\frac{2x - 3}{x + 1}$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Escribe $y = \\frac{3x + 1}{x - 2}$ y despeja $x$.",
              "$y(x - 2) = 3x + 1 \\implies yx - 2y = 3x + 1 \\implies x(y - 3) = 2y + 1 \\implies x = \\frac{2y+1}{y-3}$."
            ],
            "explanation": "Despejando la variable $x$ en función de $y$ resulta $f^{-1}(x) = \\frac{2x + 1}{x - 3}$."
          },
          {
            "id": "ex-4-1b",
            "question": "Dada $f: \\mathbb{R} \\to \\mathbb{R}$ con $f(x) = x^2 - 4x + 5$, ¿por qué $f$ NO es inyectiva?",
            "type": "mcq",
            "options": [
              "Porque el vértice es $(2,1)$ y por ejemplo $f(1) = f(3) = 2$.",
              "Porque su dominio no incluye números negativos.",
              "Porque es una parábola que no toca al eje $x$.",
              "Porque la derivada se anula."
            ],
            "correctAnswer": 0,
            "hints": [
              "Una función cuadrática no es inyectiva en $\\mathbb{R}$ porque existen pares distintos $x_1 \\neq x_2$ con la misma imagen."
            ],
            "explanation": "$f(1) = 1 - 4 + 5 = 2$ y $f(3) = 9 - 12 + 5 = 2$. Al existir dos valores de entrada con la misma imagen, no es inyectiva."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-5",
    "title": "Etapa 5: Límites e Indeterminaciones",
    "badgeClass": "badge-nivel-3",
    "color": "#6366F1",
    "description": "Concepto intuitivo y formal, límites laterales, indeterminaciones 0/0, inf/inf, infinitésimos y notable e.",
    "books": [
      "Repartido Oficial PI FING (Ejercicios 5.1-5.2)"
    ],
    "topics": [
      {
        "id": "limites-tecnicas",
        "title": "5. Álgebra de Límites e Indeterminaciones",
        "subtitle": "Límites laterales, comparación de órdenes de infinito e infinitésimos equivalentes",
        "theory": {
          "concept": "En la PI FING se evalúan tanto los límites de funciones racionales como la velocidad de crecimiento de exponenciales, polinomios y logaritmos al infinito (Órdenes de Infinito: $e^x \\gg x^n \\gg \\ln(x)$).",
          "formulas": [
            {
              "label": "Orden de Infinito",
              "latex": "\\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty, \\quad \\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x^n} = 0"
            },
            {
              "label": "Infinitésimo Trigonométrico",
              "latex": "\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2} = \\frac{1}{2}"
            }
          ],
          "tips": "Al calcular $\\lim_{x \\to \\infty}$ de un cociente de polinomios, saca factor común el término de mayor grado arriba y abajo.",
          "pitfall": "Evaluar $\\frac{\\infty}{\\infty}$ simplemente como 1 sin comparar los grados de los polinomios."
        },
        "workedExamples": [
          {
            "problem": "Calcula \\lim_{x \\to +\\infty} \\frac{3x^3 - 5x + 2}{2x^3 + 7x^2}.",
            "steps": [
              "Extraemos x^3 del numerador: x^3(3 - 5/x^2 + 2/x^3).",
              "Extraemos x^3 del denominador: x^3(2 + 7/x).",
              "Cancelamos x^3 y evaluamos al infinito (los términos con 1/x tienden a 0): (3 - 0 + 0)/(2 + 0) = 3/2."
            ],
            "finalAnswer": "\\frac{3}{2}"
          }
        ],
        "exercises": [
          {
            "id": "ex-5-1",
            "question": "Calcula el límite indeterminado al infinito: $$\\lim_{x \\to +\\infty} \\frac{3x^3 - 5x + 2}{2x^3 + 7x^2}$$",
            "type": "mcq",
            "options": [
              "$\\frac{3}{2}$",
              "$0$",
              "$+\\infty$",
              "$\\frac{5}{7}$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Dividimos numerador y denominador por la máxima potencia $x^3$.",
              "Los términos $\\frac{5}{x^2}, \\frac{2}{x^3}, \\frac{7}{x}$ tienden a 0 cuando $x \\to +\\infty$."
            ],
            "explanation": "$\\lim_{x \\to +\\infty} \\frac{3 - 5/x^2 + 2/x^3}{2 + 7/x} = \\frac{3}{2}$."
          },
          {
            "id": "ex-5-1b",
            "question": "Calcula el límite indeterminado por factor común y diferencia: $$\\lim_{x \\to 2} \\frac{x^2 - 4}{x^2 - 2x}$$",
            "type": "mcq",
            "options": [
              "$2$",
              "$0$",
              "$1$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Indeterminación $\\frac{0}{0}$. Factoriza numerador $(x-2)(x+2)$ y denominador $x(x-2)$.",
              "Simplifica $(x-2)$ y evalúa en $x=2$: $\\frac{2+2}{2} = \\frac{4}{2} = 2$."
            ],
            "explanation": "$\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x(x-2)} = \\lim_{x \\to 2} \\frac{x+2}{x} = 2$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-6",
    "title": "Etapa 6: Continuidad y Funciones por Partes",
    "badgeClass": "badge-nivel-3",
    "color": "#818CF8",
    "description": "Condiciones de continuidad, estudio de puntos de empalme en funciones a trozos y clasificación.",
    "books": [
      "Repartido Oficial PI FING (Ejercicio 5.3)"
    ],
    "topics": [
      {
        "id": "continuidad-partes",
        "title": "6. Continuidad y Puntos de Empalme",
        "subtitle": "Igualdad de límites laterales y valor de la función f(a)",
        "theory": {
          "concept": "Una función $f$ es continua en $x = a$ si y solo si existen los límites laterales en $a$, son iguales entre sí y coinciden con el valor de la función $f(a)$: $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)$.",
          "formulas": [
            {
              "label": "Condición de Continuidad en a",
              "latex": "\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)"
            }
          ],
          "tips": "Para hallar parámetros que hagan continua a una función por partes, iguala los límites laterales a izquierda y derecha en el punto de cambio de tramo.",
          "pitfall": "Verificar solo que la función esté definida en $a$ sin calcular los límites laterales."
        },
        "workedExamples": [
          {
            "problem": "Determina el valor del parámetro 'k' para que f(x) sea continua en x = 2: f(x) = kx + 1 si x <= 2, y f(x) = x^2 - 1 si x > 2.",
            "steps": [
              "Límite a la izquierda (x -> 2^-): f(2) = k(2) + 1 = 2k + 1.",
              "Límite a la derecha (x -> 2^+): 2^2 - 1 = 4 - 1 = 3.",
              "Igualamos para continuidad: 2k + 1 = 3 => 2k = 2 => k = 1."
            ],
            "finalAnswer": "k = 1"
          }
        ],
        "exercises": [
          {
            "id": "ex-5-2",
            "question": "Determina el valor del parámetro $k$ para que $f(x)$ sea continua en $x = 2$: $$f(x) = \\begin{cases} kx + 1 & \\text{si } x \\le 2 \\\\ x^2 - 1 & \\text{si } x > 2 \\end{cases}$$",
            "type": "mcq",
            "options": [
              "$k = 1$",
              "$k = 2$",
              "$k = 0$",
              "$k = -1$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Límite lateral izquierdo y valor en el punto: $f(2) = 2k + 1$.",
              "Límite lateral derecho: $\\lim_{x \\to 2^+} (x^2 - 1) = 2^2 - 1 = 3$.",
              "Igualamos para continuidad: $2k + 1 = 3 \\implies 2k = 2 \\implies k = 1$."
            ],
            "explanation": "Igualando límites laterales: $2k + 1 = 3 \\implies k = 1$."
          },
          {
            "id": "ex-5-2b",
            "question": "⭐ PARCIAL FING: Analiza la continuidad de $g(x) = \\frac{|x - 1|}{x - 1}$ en $x = 1$:",
            "type": "mcq",
            "options": [
              "Discontinuidad de salto (límites laterales $-1$ y $1$).",
              "Es continua en $x = 1$.",
              "Discontinuidad evitable.",
              "No está definida pero el límite existe."
            ],
            "correctAnswer": 0,
            "hints": [
              "Para $x > 1$, $|x-1| = x-1 \\implies g(x) = 1$.",
              "Para $x < 1$, $|x-1| = -(x-1) \\implies g(x) = -1$."
            ],
            "explanation": "Los límites laterales son distintos ($-1$ a la izquierda y $1$ a la derecha), resultando en una discontinuidad de salto finito."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-7",
    "title": "Etapa 7: Derivadas e Interpretación Geométrica",
    "badgeClass": "badge-nivel-4",
    "color": "#F43F5E",
    "description": "Definición como límite del cociente incremental, reglas de derivación y ecuación de la recta tangente.",
    "books": [
      "Repartido Oficial PI FING (Ejercicios 5.4-5.6)"
    ],
    "topics": [
      {
        "id": "derivadas-tangente",
        "title": "7. Derivada y Recta Tangente",
        "subtitle": "Interpretación como pendiente de tangente y velocidad instantánea",
        "theory": {
          "concept": "La derivada $f'(x_0)$ es la pendiente de la recta tangente a la curva $y = f(x)$ en el punto $(x_0, f(x_0))$. La ecuación de la recta tangente viene dada por $y - f(x_0) = f'(x_0)(x - x_0)$.",
          "formulas": [
            {
              "label": "Definición de Derivada",
              "latex": "f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}"
            },
            {
              "label": "Recta Tangente",
              "latex": "y = f'(x_0)(x - x_0) + f(x_0)"
            }
          ],
          "tips": "Si te piden el punto donde la tangente es horizontal, debes resolver la ecuación $f'(x) = 0$.",
          "pitfall": "Confundir la derivada $f'(x_0)$ (que es un número) con la función derivada $f'(x)$."
        },
        "workedExamples": [
          {
            "problem": "Halla la ecuación de la recta tangente a f(x) = x^2 - 3x + 5 en x = 2.",
            "steps": [
              "Punto de contacto: f(2) = 2^2 - 3(2) + 5 = 4 - 6 + 5 = 3. Punto (2, 3).",
              "Derivada: f'(x) = 2x - 3.",
              "Pendiente en x = 2: f'(2) = 2(2) - 3 = 1.",
              "Ecuación de la tangente: y - 3 = 1(x - 2) => y = x + 1."
            ],
            "finalAnswer": "y = x + 1"
          }
        ],
        "exercises": [
          {
            "id": "ex-6-1",
            "question": "Halla la ecuación de la recta tangente a la curva $f(x) = x^2 - 3x + 5$ en el punto $x = 2$:",
            "type": "mcq",
            "options": [
              "$y = x + 1$",
              "$y = 2x - 1$",
              "$y = x + 3$",
              "$y = -x + 5$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Calcula el punto de contacto: $f(2) = 4 - 6 + 5 = 3$. Punto $(2, 3)$.",
              "Calcula la derivada: $f'(x) = 2x - 3 \\implies m = f'(2) = 4 - 3 = 1$.",
              "Ecuación: $y - 3 = 1(x - 2) \\implies y = x + 1$."
            ],
            "explanation": "Punto $(2,3)$ y pendiente $m=1$. Ecuación de la recta tangente: $y = x + 1$."
          },
          {
            "id": "ex-6-1b",
            "question": "Aplica la Regla de la Cadena para calcular la derivada de $h(x) = (3x^2 + 1)^4$:",
            "type": "mcq",
            "options": [
              "$h'(x) = 24x (3x^2 + 1)^3$",
              "$h'(x) = 4 (3x^2 + 1)^3$",
              "$h'(x) = 12x (3x^2 + 1)^3$",
              "$h'(x) = 6x (3x^2 + 1)^4$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Identifica la función externa $u^4$ e interna $u = 3x^2 + 1$.",
              "Derivada: $4u^3 \\cdot u' = 4(3x^2 + 1)^3 \\cdot (6x) = 24x(3x^2 + 1)^3$."
            ],
            "explanation": "Por regla de la cadena: $4(3x^2 + 1)^3 \\cdot 6x = 24x(3x^2 + 1)^3$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-8",
    "title": "Etapa 8: Trigonometría",
    "badgeClass": "badge-nivel-5",
    "color": "#8B5CF6",
    "description": "Radianes, círculo trigonométrico, valores notables, identidades y resolución de ecuaciones en R.",
    "books": [
      "Repartido Oficial PI FING (Ejercicios 6.1-6.3)"
    ],
    "topics": [
      {
        "id": "trigonometria-avanzada",
        "title": "8. Identidades y Ecuaciones Trigonométricas",
        "subtitle": "Círculo trigonométrico, ángulos notables y conjunto solución en R",
        "theory": {
          "concept": "En el círculo unitario, los ángulos se miden en radianes ($2\\pi \\text{ rad} = 360^\\circ$). Las soluciones de ecuaciones como $\\cos(x) = a$ en $\\mathbb{R}$ involucran la periodicidad $+ 2k\\pi$ con $k \\in \\mathbb{Z}$.",
          "formulas": [
            {
              "label": "Identidad Pitagórica",
              "latex": "\\sin^2(x) + \\cos^2(x) = 1"
            },
            {
              "label": "Ecuación Fundamental Coseno",
              "latex": "\\cos(x) = \\cos(\\alpha) \\implies x = \\pm \\alpha + 2k\\pi \\quad (k \\in \\mathbb{Z})"
            }
          ],
          "tips": "Recuerda que $\\sin(x) = 0 \\implies x = k\\pi$ y $\\cos(x) = 0 \\implies x = \\frac{\\pi}{2} + k\\pi$.",
          "pitfall": "Olvidar añadir la solución periódica $+2k\\pi$ al resolver en todo $\\mathbb{R}$."
        },
        "workedExamples": [
          {
            "problem": "Resuelve en [0, 2\\pi) la ecuación 2\\cos^2(x) - 1 = 0.",
            "steps": [
              "Despejamos \\cos^2(x) = 1/2.",
              "Extraemos raíz: \\cos(x) = \\pm 1/\\sqrt{2} = \\pm \\sqrt{2}/2.",
              "Para \\cos(x) = \\sqrt{2}/2: x = \\pi/4, 7\\pi/4.",
              "Para \\cos(x) = -\\sqrt{2}/2: x = 3\\pi/4, 5\\pi/4."
            ],
            "finalAnswer": "x \\in \\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}\\}"
          }
        ],
        "exercises": [
          {
            "id": "ex-7-1",
            "question": "Resuelve en el intervalo $[0, 2\\pi)$ la ecuación trigonométrica: $$2\\cos^2(x) - 1 = 0$$",
            "type": "mcq",
            "options": [
              "$x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$",
              "$x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}$",
              "$x = 0, \\pi$",
              "$x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$"
            ],
            "correctAnswer": 0,
            "hints": [
              "Despeja $\\cos^2(x) = \\frac{1}{2} \\implies \\cos(x) = \\pm \\frac{\\sqrt{2}}{2}$.",
              "Los ángulos notables con coseno $\\pm \\frac{\\sqrt{2}}{2}$ en los 4 cuadrantes son $\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$."
            ],
            "explanation": "Las soluciones abarcan los 4 cuadrantes donde $|\\cos(x)| = \\frac{\\sqrt{2}}{2}$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-9",
    "title": "Etapa 9: Aplicaciones y Modelización",
    "badgeClass": "badge-nivel-5",
    "color": "#EC4899",
    "description": "Porcentajes, descuentos sucesivos, variación porcentual, IVA, ganancias y problemas de la vida real.",
    "books": [
      "Repartido Oficial PI FING (Ejercicios 7.1-7.3)"
    ],
    "topics": [
      {
        "id": "aplicaciones-porcentajes",
        "title": "9. Porcentajes, Descuentos e IVA",
        "subtitle": "Modelado algebraico de incrementos, variaciones e interés",
        "theory": {
          "concept": "Un incremento del $p\\%$ equivale a multiplicar por el factor $(1 + \\frac{p}{100})$. Un descuento del $d\\%$ equivale a multiplicar por $(1 - \\frac{d}{100})$. En descuentos o aumentos sucesivos, los factores se multiplican.",
          "formulas": [
            {
              "label": "Factor de Incremento",
              "latex": "F_{inc} = 1 + \\frac{p}{100}"
            },
            {
              "label": "Factor de Descuento",
              "latex": "F_{desc} = 1 - \\frac{d}{100}"
            },
            {
              "label": "Aumento Sucesivo",
              "latex": "Precio_{final} = Precio_{inicial} \\cdot (1 + \\frac{p_1}{100}) \\cdot (1 + \\frac{p_2}{100})"
            }
          ],
          "tips": "Dos descuentos sucesivos del 20% NO equivalen a un único descuento del 40%. El factor final es $0.80 \\times 0.80 = 0.64$ (descuento real del 36%).",
          "pitfall": "Sumar o restar porcentajes directamente sobre montos distintos."
        },
        "workedExamples": [
          {
            "problem": "Un producto cuesta $1000. Sufre un aumento del 10% y luego un descuento del 10%. ¿Cuál es el precio final?",
            "steps": [
              "Factor de aumento 10%: 1.10.",
              "Factor de descuento 10%: 0.90.",
              "Precio final: 1000 * 1.10 * 0.90 = 1000 * 0.99 = 990.",
              "Observa que el precio bajó un 1% respecto al original."
            ],
            "finalAnswer": "$990"
          }
        ],
        "exercises": [
          {
            "id": "ex-8-1",
            "question": "Un artículo sube un $10\\%$ su precio y luego sufre un descuento del $10\\%$. ¿Cuál es el precio final respecto al inicial?",
            "type": "mcq",
            "options": [
              "Se reduce un $1\\%$ (precio al $99\\%$ del inicial).",
              "Permanece igual al $100\\%$.",
              "Aumenta un $1\\%$.",
              "Se reduce un $2\\%$."
            ],
            "correctAnswer": 0,
            "hints": [
              "Multiplica los factores de cambio: $1.10 \\cdot 0.90 = 0.99$.",
              "Un factor $0.99$ equivale a un precio final del $99\\%$, es decir un descuento neto del $1\\%$."
            ],
            "explanation": "Factor total: $1.10 \\times 0.90 = 0.99$, lo cual implica una disminución neta del $1\\%$."
          }
        ]
      }
    ]
  },
  {
    "id": "etapa-10",
    "title": "Etapa 10: Integración y Simulacro Oficial PI",
    "badgeClass": "badge-nivel-5",
    "color": "#F43F5E",
    "description": "Simulacros de entrenamiento con cronómetro basados en el Repartido Oficial y Pruebas Iniciales de FING.",
    "books": [
      "Repartido Oficial Completo PI FING",
      "Pruebas Iniciales FING 2022-2026"
    ],
    "topics": [
      {
        "id": "entrenamiento-pi",
        "title": "10. Entrenamiento e Integración Final PI",
        "subtitle": "Clasificación de errores, resolución autónoma y simulacro oficial",
        "theory": {
          "concept": "La Prueba Inicial de la FING consta de preguntas de opción múltiple que evalúan velocidad, precisión algebraica y razonamiento lógico sin uso de calculadora.",
          "formulas": [
            {
              "label": "Puntaje de Aprobación FING",
              "latex": "\\text{Puntuación } \\ge 60\\% \\text{ para exonerar o acceder al curso directo}"
            }
          ],
          "tips": "Gestiona tu tiempo: no dediques más de 5 minutos a un solo problema en la primera pasada.",
          "pitfall": "Responder al azar sin descartar primero las opciones evidentemente erróneas."
        },
        "workedExamples": [
          {
            "problem": "Resuelve el sistema lineal 2x - y = 5, x + 3y = 6.",
            "steps": [
              "De la segunda ecuación: x = 6 - 3y.",
              "Sustituimos en la primera: 2(6 - 3y) - y = 5 => 12 - 6y - y = 5 => 12 - 7y = 5.",
              "-7y = -7 => y = 1.",
              "Sustituimos y = 1: x = 6 - 3(1) = 3."
            ],
            "finalAnswer": "x = 3, y = 1"
          }
        ],
        "exercises": [
          {
            "id": "ex-9-1",
            "question": "⭐ SIMULACRO FING: Resuelve el sistema lineal sin calculadora: $$\\begin{cases} 2x - y = 5 \\\\ x + 3y = 6 \\end{cases}$$ ¿Cuánto vale la suma $x + y$?",
            "type": "mcq",
            "options": [
              "$4$",
              "$5$",
              "$3$",
              "$6$"
            ],
            "correctAnswer": 0,
            "hints": [
              "De la segunda ecuación: $x = 6 - 3y$. Sustituye en la primera: $2(6-3y) - y = 5$.",
              "$12 - 7y = 5 \\implies -7y = -7 \\implies y = 1$. Luego $x = 6 - 3(1) = 3$.",
              "Calcula la suma $x + y = 3 + 1 = 4$."
            ],
            "explanation": "$x = 3$ e $y = 1 \\implies x + y = 4$."
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
    "question": "Si $A = \\{1, 2\\}$ y $B = \\{3, 4, 5\\}$, ¿cuántos elementos tiene el producto cartesiano $A \\times B$?",
    "options": [
      "6",
      "5",
      "2",
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
    "question": "Evalúa el límite: $$\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$$",
    "options": [
      "\\frac{1}{2}",
      "0",
      "1",
      "\\infty"
    ],
    "correctAnswer": 0,
    "levelTarget": "etapa-5"
  }
];
