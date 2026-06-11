const bancoOriginal = [
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
    },
    {
        "categoria": "Simplificación Racional",
        "pregunta": "Simplifique la expresión algebraica indicada: ((2x^3 · y⁻²) / (4x⁻¹ · y³))²",
        "opcionesBase": {
            "correcta": "x¹⁰ / 4y¹⁰",
            "inc1": "x⁵ / 2y⁵",
            "inc2": "x¹⁰ / 2y⁶",
            "inc3": "x⁴ / y¹⁰"
        },
        "explicacion": "Se simplifican los exponentes internos aplicando las leyes de la potenciación y posteriormente se eleva el monomio resultante al cuadrado."
    },
    {
        "categoria": "Operaciones Radicales",
        "pregunta": "Calcule el valor numérico exacto de la expresión radical: √(54) + √18 - √8",
        "opcionesBase": {
            "correcta": "6√2",
            "inc1": "4√2",
            "inc2": "8√2",
            "inc3": "5√2"
        },
        "explicacion": "Se descomponen los radicandos en factores primos, se extraen los términos posibles de las raíces y se reducen los radicales semejantes."
    },
    {
        "categoria": "Productos Notables",
        "pregunta": "Efectúe el desarrollo formal del binomio al cubo: (2x - 5y)³",
        "opcionesBase": {
            "correcta": "8x³ - 36x²y + 54xy² - 27y³",
            "inc1": "8x³ - 27y³",
            "inc2": "8x³ + 36x²y - 27y³",
            "inc3": "4x³ - 12xy + 9y³"
        },
        "explicacion": "Se aplica el teorema del cubo de un binomio: el cubo del primer término, menos el triple del cuadrado del primero por el segundo, más el triple del primero por el cuadrado del segundo, menos el cubo del segundo."
    },
    {
        "categoria": "Factorización",
        "pregunta": "Factorice completamente el trinomio cuadrático ordinario: 6x² - 12x - 3",
        "opcionesBase": {
            "correcta": "(2x - 3)(3x + 1)",
            "inc1": "(2x + 3)(3x - 1)",
            "inc2": "(6x - 1)(x + 3)",
            "inc3": "(3x - 3)(2x + 1)"
        },
        "explicacion": "Se descompone mediante agrupación de términos utilizando los factores del producto de los extremos que acumulados igualen al coeficiente lineal."
    },
    {
        "categoria": "Fracciones Algebraicas",
        "pregunta": "Simplifique el producto de las fracciones algebraicas polinomiales: ((x² - 9)/(x + 2)) · ((x² - 4)/(x - 3))",
        "opcionesBase": {
            "correcta": "(x + 3)(x - 2)",
            "inc1": "(x - 3)(x + 2)",
            "inc2": "1",
            "inc3": "(x² - 9)"
        },
        "explicacion": "Se factorizan los numeradores por diferencia de cuadrados perfectos y se realiza la cancelación recíproca de factores idénticos en el numerador y denominador."
    },
    {
        "categoria": "Ecuaciones Absolutas",
        "pregunta": "Determine el conjunto solución para la igualdad con valor absoluto: |2x - 3| = 7",
        "opcionesBase": {
            "correcta": "x = 6 o x = -1",
            "inc1": "x = 5 o x = -2",
            "inc2": "x = 7 o x = 0",
            "inc3": "x = 6 o x = 1"
        },
        "explicacion": "La definición formal del valor absoluto desglosa la igualdad en dos ramificaciones lineales independientes (positiva y negativa) para su despeje individual."
    },
    {
        "categoria": "Inecuaciones Absolutas",
        "pregunta": "Halle el intervalo de solución de la desigualdad con valor absoluto: |x + 4| ≤ 5",
        "opcionesBase": {
            "correcta": "[-8, 2]",
            "inc1": "(-8, 2)",
            "inc2": "[-2, 8]",
            "inc3": "(-∞, 2]"
        },
        "explicacion": "La inecuación se resuelve abriendo el intervalo de forma simétrica bilateral, restando posteriormente la constante en cada miembro."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "Resuelva la ecuación exponencial mediante la homologación de bases: 3^(2x - 1) = 31",
        "opcionesBase": {
            "correcta": "x = 2",
            "inc1": "x = 1",
            "inc2": "x = 3",
            "inc3": "x = 4"
        },
        "explicacion": "Se transforma el término independiente a una potencia de base 3, lo cual permite igualar los exponentes y resolver la ecuación lineal resultante."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "Calcule la raíz real de la ecuación logarítmica aplicando propiedades: log₂(x) + log₂(x - 6) = 3",
        "opcionesBase": {
            "correcta": "x = 4",
            "inc1": "x = -2",
            "inc2": "x = 4 y x = -2",
            "inc3": "x = 3"
        },
        "explicacion": "Se aplica la propiedad del logaritmo de un producto, se convierte a su forma exponencial equivalente y se descarta la raíz que invalida el dominio real."
    },
    {
        "categoria": "Sistemas Lineales",
        "pregunta": "Determine el punto de intersección del sistema de ecuaciones: 2x + 2y = 11  y  3x - y = 0",
        "opcionesBase": {
            "correcta": "x = 1, y = 3",
            "inc1": "x = 2, y = 2",
            "inc2": "x = 3, y = 1",
            "inc3": "x = 0, y = 4"
        },
        "explicacion": "Mediante el método de sustitución algebraica elemental se aísla la variable y en la segunda ecuación para insertarla de forma directa en la primera."
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
    document.querySelectorAll('.view-panel').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function loadQuestion() {
    answered = false;
    document.getElementById('feedback-box').classList.remove('visible');
    document.getElementById('help-display').style.display = 'none';

    let q = preguntasPartida[currentIndex];
    document.getElementById('hud-progress').innerText = `Índice: ${currentIndex + 1} / ${preguntasPartida.length}`;
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
        document.getElementById('feedback-title').innerText = "Respuesta Correcta";
        document.getElementById('feedback-title').style.color = 'var(--success-border)';
    } else {
        selectedRow.classList.add('incorrect');
        correctRow.classList.add('correct');
        document.getElementById('feedback-title').innerText = "Respuesta Incorrecta";
        document.getElementById('feedback-title').style.color = 'var(--error-border)';
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
        document.getElementById('end-message').innerText = `Evaluación concluida con éxito. Rendimiento consolidado de ${score} aciertos sobre un total de ${preguntasPartida.length} reactivos analizados.`;
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
    helpDiv.innerText = `Referencia del manual: Basado en las leyes operacionales del tema, el camino de simplificación valida el literal [${q.correcta}].`;
    document.getElementById('btn-phone').disabled = true;
}

function useAudience() {
    let q = preguntasPartida[currentIndex];
    let helpDiv = document.getElementById('help-display');
    helpDiv.style.display = 'block';
    let pCorrect = 75 + Math.floor(Math.random() * 15);
    helpDiv.innerText = `Tendencia de concordancia general: Existe un ${pCorrect}% de coincidencia sobre el literal [${q.correcta}].`;
    document.getElementById('btn-audience').disabled = true;
}
