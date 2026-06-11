const bancoOriginal = [
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 1 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 2 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 3 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 4 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 5 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 6 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 7 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 8 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 9 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 10 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 11 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 12 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 13 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 14 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 15 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 16 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 17 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 18 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 19 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 20 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 21 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 22 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 23 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 24 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 25 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 26 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 27 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 28 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 29 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 30 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 31 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 32 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 33 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 34 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 35 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 36 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 37 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 38 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 39 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 40 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 41 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 42 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 43 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 44 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 45 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 46 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 47 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 48 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 49 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 50 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 51 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 52 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 53 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 54 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 55 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 56 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 57 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 58 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 59 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 60 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 61 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 62 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 63 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 64 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 65 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 66 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 67 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 68 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 69 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 70 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 71 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 72 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 73 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 74 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 75 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 76 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 77 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 78 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 79 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 80 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 81 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 82 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 83 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 84 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 85 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 86 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 87 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 88 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 89 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 90 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 91 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 92 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 93 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 94 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 95 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 96 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 97 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 98 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 99 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 100 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 101 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 102 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 103 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 104 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 105 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 106 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 107 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 108 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 109 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 110 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 111 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 112 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 113 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 114 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 115 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 116 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 117 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 118 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 119 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 120 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 121 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 122 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 123 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 124 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 125 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 126 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 127 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 128 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 129 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 130 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 131 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 132 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 133 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 134 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 135 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 136 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 137 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 138 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 139 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 140 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 141 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 142 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 143 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 144 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 145 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 146 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 147 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 148 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 149 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 150 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 151 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 152 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 153 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 154 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 155 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 156 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 157 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 158 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 159 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 160 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 161 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 162 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 163 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 164 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 165 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 166 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 167 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 168 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 169 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 170 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 171 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 172 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 173 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 174 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 175 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 176 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 177 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 178 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 179 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 180 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 181 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 182 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 183 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 184 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 185 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Pregunta N° 186 - Halle el conjunto solución de la igualdad con valor absoluto: |2x - 3| = 7",
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
        "pregunta": "Pregunta N° 187 - Determine el intervalo solución de la desigualdad absoluta: |x + 4| ≤ 5",
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
        "pregunta": "Pregunta N° 188 - Resuelva la ecuación exponencial buscando bases iguales: 3^(2x - 1) = 31",
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
        "pregunta": "Pregunta N° 189 - Halle la raíz real de la ecuación logarítmica con propiedad de producto: log2(x) + log2(x - 6) = 3",
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
        "pregunta": "Pregunta N° 190 - Resuelva el sistema lineal de 2 incógnitas por el método algebraico de su preferencia: 2x + 2y = 11 y 3x - y = 0",
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
        "pregunta": "Pregunta N° 191 - Calcule el producto escalar y suma matricial indicada: Dada la matriz identidad I de orden 2, halle 2*I + [[3, 0], [0, 3]]",
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
        "pregunta": "Pregunta N° 192 - Determine analíticamente el dominio de la función real con restricción: f(x) = √(x - 4) / (x - 5)",
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
        "pregunta": "Pregunta N° 193 - Encuentre la composición de funciones (g ∘ f)(x) si f(x)=2x+3 y g(x)=x^2-1: (g ∘ f)(x) con corrimiento de orden 5",
        "opcionesBase": {
            "correcta": "4x^2 + 12x + 8",
            "inc1": "2x^2 + 1",
            "inc2": "4x^2 + 12x + 9",
            "inc3": "x^2 + 2x + 2"
        },
        "explicacion": "Se introduce la expresión f(x) en el lugar de la variable x de la función g(x) y se efectúan los productos notables."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Pregunta N° 194 - Identifique el tipo de sección cónica y su centro geométrico: ((x - 6)^2 / 9) + ((y + 1)^2 / 16) = 1",
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
        "pregunta": "Pregunta N° 195 - Demuestre el valor de certeza para la identidad trigonométrica fundamental Pitagórica: sen^2(x) + cos^2(x) = 0",
        "opcionesBase": {
            "correcta": "Verdadero",
            "inc1": "Falso",
            "inc2": "Solo si x es agudo",
            "inc3": "Depende del cuadrante geométrico"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Pregunta N° 196 - Simplifique la expresión algebraica racional indexada: ((2x^3 * y^-2) / (4x^-1 * y^3))^2",
        "opcionesBase": {
            "correcta": "x^10 / 4y^10",
            "inc1": "x^5 / 2y^5",
            "inc2": "x^10 / 2y^6",
            "inc3": "x^4 / y^10"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptma."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Pregunta N° 197 - Calcule el valor exacto de la operación radical contextualizada: √(54) + √(18) - √(8)",
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
        "pregunta": "Pregunta N° 198 - Desarrolle el binomio al cubo: (2x - 5y)^3",
        "opcionesBase": {
            "correcta": "8x^3 - 36x^2y + 54xy^2 - 27y^3",
            "inc1": "8x^3 - 27y^3",
            "inc2": "8x^3 + 36x^2y - 27y^3",
            "inc3": "4x^3 - 12xy + 9y^3"
        },
        "explicacion": "Se aplica rigurosamente la regla del cubo de un binomio: el cubo del primero, menos el triple del primero al cuadrado por el segundo, etc."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Pregunta N° 199 - Factorice por completo el trinomio de segundo grado de la forma ax^2+bx+c: 6x^2 - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a*c) y cuya suma sea el término lineal b, procediendo por agrupación de términos."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Pregunta N° 200 - Simplifique el producto operacional fraccionario: ((x^2 - 9)/(x + 2)) * ((x^2 - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x^2 - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos del numerador y denominador."
    }
];

let preguntasPartida = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let totalSeconds = 0;
let timerInterval = null;

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

    totalSeconds = preguntasPartida.length * 60;
    updateTimerDisplay();
    
    clearInterval(timerInterval);
    timerInterval = setInterval(decrementTimer, 1000);
    
    ['btn-5050', 'btn-remove-one', 'btn-phone', 'btn-audience'].forEach(id => {
        document.getElementById(id).disabled = false;
    });

    showScreen('screen-game');
    loadQuestion();
}

function decrementTimer() {
    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        endGameByTimeout();
        return;
    }
    totalSeconds--;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    document.getElementById('hud-timer').innerText = `Tiempo: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
    document.getElementById('hud-progress').innerText = `Pregunta: ${currentIndex + 1} / ${preguntasPartida.length}`;
    document.getElementById('hud-score').innerText = `Premio: ${score} PUNTOS`;
    document.getElementById('question-text').innerText = `[${q.categoria}] — ${q.pregunta}`;

    ['A', 'B', 'C', 'D'].forEach(k => {
        let btn = document.getElementById('opt-' + k);
        btn.innerText = `${k}) ${q.opciones[k]}`;
        btn.className = 'option-btn';
        btn.disabled = false;
        btn.style.visibility = 'visible';
    });
    
    document.getElementById('opt-A').focus();
}

function submitAnswer(letter) {
    if (answered) return;
    answered = true;

    let q = preguntasPartida[currentIndex];
    let isCorrect = (letter === q.correcta);

    ['A', 'B', 'C', 'D'].forEach(k => {
        document.getElementById('opt-' + k).disabled = true;
    });

    let selectedBtn = document.getElementById('opt-' + letter);
    let correctBtn = document.getElementById('opt-' + q.correcta);

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
        document.getElementById('feedback-title').innerText = "¡RESPUESTA CORRECTA! Excelente desarrollo analítico.";
        document.getElementById('feedback-title').style.color = 'var(--correct-color)';
    } else {
        selectedBtn.classList.add('incorrect');
        correctBtn.classList.add('correct');
        document.getElementById('feedback-title').innerText = "¡OH, INCORRECTO! Revisa la propiedad operativa.";
        document.getElementById('feedback-title').style.color = 'var(--incorrect-color)';
    }

    document.getElementById('feedback-text').innerText = q.explicacion;
    document.getElementById('feedback-box').classList.add('visible');
    document.getElementById('hud-score').innerText = `Premio: ${score} PUNTOS`;
    document.getElementById('btn-next').focus();
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < preguntasPartida.length) {
        loadQuestion();
    } else {
        clearInterval(timerInterval);
        showScreen('screen-end');
        document.getElementById('end-message').innerText = `¡Espectacular! Completaste el examen de admisión de 200 preguntas con un total de ${score} respuestas correctas.`;
    }
}

function endGameByTimeout() {
    ['A', 'B', 'C', 'D'].forEach(k => {
        document.getElementById('opt-' + k).disabled = true;
    });
    showScreen('screen-end');
    document.getElementById('end-message').innerText = `¡El tiempo límite global (200 minutos) ha expirado! Lograste consolidar ${score} puntos antes del cierre automático.`;
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
    helpDiv.innerText = `☎️ Tu profesor tutor en la línea dice: 'Analicé el problema rigurosamente y la respuesta correcta indudablemente corresponde al literal ${q.correcta}.'`;
    document.getElementById('btn-phone').disabled = true;
}

function useAudience() {
    let q = preguntasPartida[currentIndex];
    let helpDiv = document.getElementById('help-display');
    helpDiv.style.display = 'block';
    helpDiv.innerText = `📊 Consulta estadística: El 76% de la audiencia indica que la respuesta correcta es la opción [${q.correcta}].`;
    document.getElementById('btn-audience').disabled = true;
}
