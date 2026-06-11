const bancoOriginal = [
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
    },
    {
        "categoria": "Ecuaciones con Valor Absoluto",
        "pregunta": "Halle el conjunto solución de la igualdad con valor absoluto: \\\\[ |2x - 3| = 7 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 6 \\quad \\text{o} \\quad x = -1 \\\\]",
            "inc1": "\\\\[ x = 5 \\quad \\text{o} \\quad x = -2 \\\\]",
            "inc2": "\\\\[ x = 7 \\quad \\text{o} \\quad x = 0 \\\\]",
            "inc3": "\\\\[ x = 6 \\quad \\text{o} \\quad x = 1 \\\\]"
        },
        "explicacion": "El valor absoluto genera dos ecuaciones lineales independientes. Ambas se resuelven de forma analítica y se valida su pertenencia al conjunto solución."
    },
    {
        "categoria": "Inecuaciones con Valor Absoluto",
        "pregunta": "Determine el intervalo solución de la desigualdad absoluta: \\\\[ |x + 4| \\le 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [-8, 2] \\\\]",
            "inc1": "\\\\[ (-8, 2) \\\\]",
            "inc2": "\\\\[ [-2, 8] \\\\]",
            "inc3": "\\\\[ (-\\infty, 2] \\\\]"
        },
        "explicacion": "La inecuación se reescribe como una desigualdad simultánea acotada por los extremos y se despeja el intervalo cerrado completo."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial buscando bases iguales: \\\\[ 3^{2x - 1} = 31 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 2 \\\\]",
            "inc1": "\\\\[ x = 1 \\\\]",
            "inc2": "\\\\[ x = 3 \\\\]",
            "inc3": "\\\\[ x = 4 \\\\]"
        },
        "explicacion": "Se expresa el miembro derecho en base de potencia de 3 e igualando sus respectivos exponentes se llega a la solución neta."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Halle la raíz real de la ecuación logarítmica: \\\\[ \\log_2(x) + \\log_2(x - 6) = 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 4 \\\\]",
            "inc1": "\\\\[ x = -2 \\\\]",
            "inc2": "\\\\[ x = 4, \\; x = -2 \\\\]",
            "inc3": "\\\\[ x = 3 \\\\]"
        },
        "explicacion": "Se unifican los logaritmos como un producto y se pasa a la forma exponencial. La raíz negativa se descarta por restricciones de dominio."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "Resuelva el sistema lineal de dos incógnitas: \\\\[ \\begin{cases} 2x + 2y = 11 \\\\ 3x - y = 0 \\end{cases} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ x = 1, \\; y = 3 \\\\]",
            "inc1": "\\\\[ x = 2, \\; y = 2 \\\\]",
            "inc2": "\\\\[ x = 3, \\; y = 1 \\\\]",
            "inc3": "\\\\[ x = 0, \\; y = 4 \\\\]"
        },
        "explicacion": "Por el método de sustitución se reduce el sistema de ecuaciones lineales a una variable, despejando los valores únicos definitivos."
    },
    {
        "categoria": "Matrices",
        "pregunta": "Calcule el resultado exacto de la operación matricial con el escalar indicado: \\\\[ 2 \\cdot \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix} \\\\]",
            "inc1": "\\\\[ \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\\\]",
            "inc2": "\\\\[ \\begin{pmatrix} 6 & 0 \\\\ 0 & 6 \\end{pmatrix} \\\\]",
            "inc3": "\\\\[ \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\\\]"
        },
        "explicacion": "Se efectúa el producto por el escalar en cada entrada de la matriz identidad y luego se suman término a término las posiciones homólogas."
    },
    {
        "categoria": "Funciones (Dominio)",
        "pregunta": "Determine analíticamente el dominio de la función real con restricción: \\\\[ f(x) = \\frac{\\sqrt{x - 4}}{x - 5} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ [3, 5) \\cup (5, \\infty) \\\\]",
            "inc1": "\\\\[ [3, \\infty) \\\\]",
            "inc2": "\\\\[ (3, 5) \\\\]",
            "inc3": "\\\\[ \\mathbb{R} \\\\]"
        },
        "explicacion": "La cantidad subradical exige ser mayor o igual a cero, mientras que el denominador prohíbe explícitamente la división por cero."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "Encuentre la composición de funciones (g \\circ f)(x) si f(x)=2x+3 y g(x)=x^2-1: \\\\[ (g \\circ f)(x) \\text{ con corrimiento en } 5 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 4x^2 + 12x + 8 \\\\]",
            "inc1": "\\\\[ 2x^2 + 1 \\\\]",
            "inc2": "\\\\[ 4x^2 + 12x + 9 \\\\]",
            "inc3": "\\\\[ x^2 + 2x + 2 \\\\]"
        },
        "explicacion": "Se introduce la función interna en la variable de la externa y se desarrolla el binomio de forma completa y ordenada."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "Identifique el tipo de sección cónica y su centro geométrico: \\\\[ \\frac{(x - 6)^2}{9} + \\frac{(y + 1)^2}{16} = 1 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Elipse con centro en } (2, -1) \\\\]",
            "inc1": "\\\\[ \\text{Hipérbola con centro en } (2, -1) \\\\]",
            "inc2": "\\\\[ \\text{Parábola con vértice en } (2, -1) \\\\]",
            "inc3": "\\\\[ \\text{Circunferencia de radio variable} \\\\]"
        },
        "explicacion": "Debido a los coeficientes cuadráticos positivos y diferentes en sus denominadores, la ecuación canónica define una elipse simétrica."
    },
    {
        "categoria": "Trigonometría",
        "pregunta": "Determine el valor de certeza para la identidad trigonométrica fundamental: \\\\[ \\sin^2(x) + \\cos^2(x) = 0 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\text{Verdadero} \\\\]",
            "inc1": "\\\\[ \\text{Falso} \\\\]",
            "inc2": "\\\\[ \\text{Solo para ángulos agudos} \\\\]",
            "inc3": "\\\\[ \\text{Depende del cuadrante} \\\\]"
        },
        "explicacion": "Es la identidad pitagórica por excelencia en el círculo unitario, su valor es idénticamente igual a la unidad de manera universal."
    },
    {
        "categoria": "Simplificación",
        "pregunta": "Simplifique la expresión algebraica racional indexada: \\\\[ \\left( \\frac{2x^{3} \\cdot y^{-2}}{4x^{-1} \\cdot y^3} \\right)^2 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ \\frac{x^{10}}{4y^{10}} \\\\]",
            "inc1": "\\\\[ \\frac{x^5}{2y^5} \\\\]",
            "inc2": "\\\\[ \\frac{x^{10}}{2y^6} \\\\]",
            "inc3": "\\\\[ \\frac{x^4}{y^{10}} \\\\]"
        },
        "explicacion": "Al resolver el paréntesis interno e invertir los signos negativos algebraicamente, se eleva al cuadrado obteniendo la reducción óptima definitiva."
    },
    {
        "categoria": "Números Reales",
        "pregunta": "Calcule el valor exacto de la operación radical contextualizada: \\\\[ \\sqrt{54} + \\sqrt{18} - \\sqrt{8} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 6\\sqrt{2} \\\\]",
            "inc1": "\\\\[ 4\\sqrt{2} \\\\]",
            "inc2": "\\\\[ 8\\sqrt{2} \\\\]",
            "inc3": "\\\\[ 5\\sqrt{2} \\\\]"
        },
        "explicacion": "Se descomponen los radicales en sus factores primos para extraer raíces perfectas y consolidar los términos semejantes en una solución neta."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Desarrolle el binomio al cubo: \\\\[ (2x - 5y)^3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ 8x^3 - 36x^2y + 54xy^2 - 27y^3 \\\\]",
            "inc1": "\\\\[ 8x^3 - 27y^3 \\\\]",
            "inc2": "\\\\[ 8x^3 + 36x^2y - 27y^3 \\\\]",
            "inc3": "\\\\[ 4x^3 - 12xy + 9y^3 \\\\]"
        },
        "explicacion": "Se aplica la regla del cubo de un binomio de manera rigurosa para expandir cada término en forma simplificada."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice por completo el trinomio de segundo grado: \\\\[ 6x^2 - 12x - 3 \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (2x - 3)(3x + 1) \\\\]",
            "inc1": "\\\\[ (2x + 3)(3x - 1) \\\\]",
            "inc2": "\\\\[ (6x - 1)(x + 3) \\\\]",
            "inc3": "\\\\[ (3x - 3)(2x + 1) \\\\]"
        },
        "explicacion": "Se buscan números cuyo producto sea igual a (a * c) y cuya suma sea el término b, agrupando términos de manera analítica completa."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto operacional fraccionario: \\\\[ \\frac{x^2 - 9}{x + 2} \\cdot \\frac{x^2 - 4}{x - 3} \\\\]",
        "opcionesBase": {
            "correcta": "\\\\[ (x + 3)(x - 2) \\\\]",
            "inc1": "\\\\[ (x - 3)(x + 2) \\\\]",
            "inc2": "\\\\[ 1 \\\\]",
            "inc3": "\\\\[ x^2 - 9 \\\\]"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se cancelan los factores idénticos reduciendo la expresión."
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
    document.getElementById('hud-progress').innerText = `${currentIndex + 1} / ${preguntasPartida.length}`;
    document.getElementById('hud-score').innerText = `${score} PUNTOS`;
    
    document.getElementById('question-meta').innerText = q.categoria;
    document.getElementById('math-question-body').innerHTML = q.pregunta;

    ['A', 'B', 'C', 'D'].forEach(k => {
        let btn = document.getElementById('opt-' + k);
        let textDiv = document.getElementById('text-' + k);
        textDiv.innerHTML = q.opciones[k];
        btn.className = 'option-btn';
        btn.disabled = false;
        btn.style.visibility = 'visible';
    });
    
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise();
    }
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
        document.getElementById('feedback-title').innerText = "✓ RESPUESTA CORRECTA - DESARROLLO ANALÍTICO VÁLIDO";
        document.getElementById('feedback-title').style.color = 'var(--correct-color)';
    } else {
        selectedBtn.classList.add('incorrect');
        correctBtn.classList.add('correct');
        document.getElementById('feedback-title').innerText = "✕ RESPUESTA OPERACIONAL INCORRECTA";
        document.getElementById('feedback-title').style.color = 'var(--incorrect-color)';
    }

    document.getElementById('feedback-text').innerText = q.explicacion;
    document.getElementById('feedback-box').classList.add('visible');
    document.getElementById('hud-score').innerText = `${score} PUNTOS`;
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < preguntasPartida.length) {
        loadQuestion();
    } else {
        showScreen('screen-end');
        document.getElementById('end-message').innerText = `Evaluación concluida. Has completado exitosamente los 200 reactivos formales, obteniendo un puntaje de ${score} respuestas correctas sobre el total.`;
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
    helpDiv.innerText = `💡 El Profesor asignado indica de manera analítica: 'Evaluando la estructura científica, la simplificación neta correcta corresponde al literal [${q.correcta}].'`;
    document.getElementById('btn-phone').disabled = true;
}

function useAudience() {
    let q = preguntasPartida[currentIndex];
    let helpDiv = document.getElementById('help-display');
    helpDiv.style.display = 'block';
    helpDiv.innerText = `📊 Métrica Estadística Interna: El 84% de los evaluados seleccionó la opción formal [${q.correcta}].`;
    document.getElementById('btn-audience').disabled = true;
}
