const bancoOriginal = [
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes: una positiva y una negativa. Ambas deben ser despejadas."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se reescribe de manera simultánea como -5 ≤ x + 3 ≤ 5. Al restar el coeficiente se delimita el intervalo cerrado."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3. Al igualar las bases, se procede a igualar y resolver sus exponentes."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica con propiedad de producto: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Por sustitución, de la segunda ecuación deducimos que y = 3x. Al insertarlo en la primera ecuación se obtiene la solución única."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2·I + [[3, 0], [0, 3]]",
        "opcionesBase": {
            "correcta": "[[4, 0], [0, 4]]",
            "inc1": "[[2, 0], [0, 2]]",
            "inc2": "[[6, 0], [0, 6]]",
            "inc3": "[[1, 0], [0, 1]]"
        },
        "explicacion": "Se multiplica el escalar por cada componente de la matriz identidad y luego se suman término a término las posiciones correspondientes."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
        "opcionesBase": {
            "correcta": "[3, 5) ∪ (5, ∞)",
            "inc1": "[3, ∞)",
            "inc2": "(3, 5)",
            "inc3": "ℝ"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g ∘ f)(x) si f(x) = 2x + 3 y g(x) = x² - 1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x² + 12x + 8",
            "inc1": "2x² + 1",
            "inc2": "4x² + 12x + 9",
            "inc3": "x² + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)² / 9) + ((y + 1)² / 16) = 1",
        "opcionesBase": {
            "correcta": "Elipse con centro en (2, -1)",
            "inc1": "Hipérbola con centro en (2, -1)",
            "inc2": "Parábola con vértice en (2, -1)",
            "inc3": "Circunferencia con radio variable"
        },
        "explicacion": "Al poseer coeficientes cuadráticos positivos y distintos bajo fracciones, la ecuación canónica define exactamente una elipse."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen²(x) + cos²(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, más el triple del primero por el segundo al cuadrado, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado de la forma ax² + bx + c: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a·c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    }
];

let preguntasPartida = [];
let currentIndex = 0;
let score = 0;
let answered = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function prepararPreguntas() {
    let copias = JSON.parse(JSON.stringify(bancoOriginal));
    shuffle(copias);

    preguntasPartida = copias.map(q => {
        let opcionesArray = [
            { texto: q.opcionesBase.correcta, esCorrecta: true },
            { texto: q.opcionesBase.inc1, esCorrecta: false },
            { texto: q.opcionesBase.inc2, esCorrecta: false },
            { texto: q.opcionesBase.inc3, esCorrecta: false }
        ];
        shuffle(opcionesArray);

        let literales = ['A', 'B', 'C', 'D'];
        let opcionesMapeadas = {};
        let literalCorrecto = 'A';

        literales.forEach((lit, index) => {
            opcionesMapeadas[lit] = opcionesArray[index].texto;
            if (opcionesArray[index].esCorrecta) literalCorrecto = lit;
        });

        return {
            categoria: q.categoria,
            pregunta: q.pregunta,
            opciones: opcionesMapeadas,
            correcta: literalCorrecto,
            explicacion: q.explicacion
        };
    });
}

function startGame() {
    prepararPreguntas();
    currentIndex = 0;
    score = 0;
    answered = false;

    ['btn-5050', 'btn-remove-one', 'btn-phone', 'btn-audience'].forEach(id => {
        document.getElementById(id).disabled = false;
    });

    showScreen('screen-game');
    loadQuestion();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function loadQuestion() {
    answered = false;
    document.getElementById('feedback-box').classList.remove('visible');
    document.getElementById('help-display').style.display = 'none';

    let q = preguntasPartida[currentIndex];
    document.getElementById('hud-progress').innerText = `Progreso: ${currentIndex + 1} / ${preguntasPartida.length}`;
    document.getElementById('hud-score').innerText = score;
    
    document.getElementById('question-badge').innerText = q.categoria;
    document.getElementById('question-text').innerText = q.pregunta;

    ['A', 'B', 'C', 'D'].forEach(k => {
        let row = document.getElementById('opt-' + k);
        document.getElementById('txt-' + k).innerText = q.opciones[k];
        row.className = 'option-row';
        row.disabled = false;
        row.style.visibility = 'visible';
    });
}

function submitAnswer(letter) {
    if (answered) return;
    answered = true;

    let q = preguntasPartida[currentIndex];
    let isCorrect = (letter === q.correcta);

    ['A', 'B', 'C', 'D'].forEach(k => {
        document.getElementById('opt-' + k).disabled = true;
    });

    let selectedRow = document.getElementById('opt-' + letter);
    let correctRow = document.getElementById('opt-' + q.correcta);

    if (isCorrect) {
        selectedRow.classList.add('correct');
        score++;
        document.getElementById('feedback-title').innerText = "✓ Confirmación Válida";
        document.getElementById('feedback-title').style.color = 'var(--correct)';
    } else {
        selectedRow.classList.add('incorrect');
        correctRow.classList.add('correct');
        document.getElementById('feedback-title').innerText = "✕ Análisis Erróneo";
        document.getElementById('feedback-title').style.color = 'var(--incorrect)';
    }

    document.getElementById('feedback-text').innerText = q.explicacion;
    document.getElementById('feedback-box').classList.add('visible');
    document.getElementById('hud-score').innerText = score;
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < preguntasPartida.length) {
        loadQuestion();
    } else {
        showScreen('screen-end');
        document.getElementById('end-message').innerText = `Evaluación corporativa finalizada. Nivel de acierto alcanzado: ${score} reactivos correctos de un total de ${preguntasPartida.length} evaluados.`;
    }
}

function restartGame() {
    showScreen('screen-start');
}

function use5050() {
    let q = preguntasPartida[currentIndex];
    let keys = ['A', 'B', 'C', 'D'].filter(k => k !== q.correcta);
    shuffle(keys);
    document.getElementById('opt-' + keys[0]).style.visibility = 'hidden';
    document.getElementById('opt-' + keys[1]).style.visibility = 'hidden';
    document.getElementById('btn-5050').disabled = true;
}

function useRemoveOne() {
    let q = preguntasPartida[currentIndex];
    let keys = ['A', 'B', 'C', 'D'].filter(k => k !== q.correcta);
    let target = keys[Math.floor(Math.random() * keys.length)];
    document.getElementById('opt-' + target).style.visibility = 'hidden';
    document.getElementById('btn-remove-one').disabled = true;
}

function usePhone() {
    let q = preguntasPartida[currentIndex];
    let helpDiv = document.getElementById('help-display');
    helpDiv.style.display = 'block';
    helpDiv.innerText = `El manual didáctico determina que, bajo las propiedades simplificadas del modelo algebraico, la respuesta válida corresponde al literal [${q.correcta}].`;
    document.getElementById('btn-phone').disabled = true;
}

function useAudience() {
    let q = preguntasPartida[currentIndex];
    let helpDiv = document.getElementById('help-display');
    helpDiv.style.display = 'block';
    let pCorrect = 72 + Math.floor(Math.random() * 12);
    helpDiv.innerText = `Métrica de tendencia institucional: Existe un ${pCorrect}% de consistencia estadística en favor de la opción [${q.correcta}].`;
    document.getElementById('btn-audience').disabled = true;
}
