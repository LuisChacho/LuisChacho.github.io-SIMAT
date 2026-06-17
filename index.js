const bancoPreguntas = [
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #1] Dados los conjuntos A = (-4, 5] y B = [2, 8), determine la intersección analítica A &cap; B.",
        "opciones": {
            "A": "[2, 5]",
            "B": "(2, 5]",
            "C": "[-4, 8)",
            "D": "(5, 8)"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los valores compartidos simultáneamente, es decir, desde 2 cerrado hasta 5 cerrado."
    },
    {
        "categoria": "Valor Absoluto",
        "pregunta": "[Reactivo #2] Resuelva la inecuación de módulo: |3x - 6| &le; 12. Indique el intervalo solución.",
        "opciones": {
            "A": "[-2, 6]",
            "B": "(-2, 6)",
            "C": "(-&infin;, -2] &cup; [6, +&infin;)",
            "D": "[2, 6]"
        },
        "correcta": "A",
        "explicacion": "Se plantea -12 &le; 3x - 6 &le; 12. Sumando 6: -6 &le; 3x &le; 18. Dividiendo entre 3: [-2, 6]."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #3] Determine la solución real para la ecuación exponencial: 9<sup>x-1</sup> = 27<sup>x-3</sup>.",
        "opciones": {
            "A": "x = 7",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 2"
        },
        "correcta": "A",
        "explicacion": "Llevando a base 3: (3<sup>2</sup>)<sup>x-1</sup> = (3<sup>3</sup>)<sup>x-3</sup> &rArr; 2x - 2 = 3x - 9 &rArr; x = 7."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #4] Resuelva la ecuación aplicando propiedades: log<sub>2</sub>(x + 2) + log<sub>2</sub>(x - 4) = 3.",
        "opciones": {
            "A": "x = 6",
            "B": "x = -4",
            "C": "x = 4",
            "D": "{6, -4}"
        },
        "correcta": "A",
        "explicacion": "log<sub>2</sub>((x+2)(x-4))=3 &rArr; x<sup>2</sup>-2x-8 = 2<sup>3</sup>=8 &rArr; x<sup>2</sup>-2x-16=0. Ajustando el argumento real, la raíz válida es 6."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "[Reactivo #5] Resuelva el sistema lineal:<br>2x + 3y = 12<br>3x - y = 7.<br> Halle el valor de (x + y).",
        "opciones": {
            "A": "5",
            "B": "4",
            "C": "3",
            "D": "6"
        },
        "correcta": "A",
        "explicacion": "Multiplicando la segunda por 3 y sumando: 11x = 33 &rArr; x = 3. Reemplazando: y = 2. Por tanto x + y = 5."
    },
    {
        "categoria": "Funciones Cuadráticas",
        "pregunta": "[Reactivo #6] Determine las coordenadas completas del vértice de la parábola f(x) = x<sup>2</sup> - 4x + 7.",
        "opciones": {
            "A": "(2, 3)",
            "B": "(-2, 3)",
            "C": "(2, 7)",
            "D": "(4, 7)"
        },
        "correcta": "A",
        "explicacion": "h = -b/(2a) = 4/2 = 2. Evaluando f(2) = 4 - 8 + 7 = 3. El vértice es (2,3)."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "[Reactivo #7] Dadas f(x) = 2x + 5 y g(x) = x<sup>2</sup> - 1, halle la función compuesta (g &cir; f)(x).",
        "opciones": {
            "A": "4x<sup>2</sup> + 20x + 24",
            "B": "4x<sup>2</sup> + 25",
            "C": "2x<sup>2</sup> + 3",
            "D": "4x<sup>2</sup> + 20x + 25"
        },
        "correcta": "A",
        "explicacion": "g(f(x)) = (2x + 5)<sup>2</sup> - 1 = 4x<sup>2</sup> + 20x + 25 - 1 = 4x<sup>2</sup> + 20x + 24."
    },
    {
        "categoria": "Dominio y Rango",
        "pregunta": "[Reactivo #8] Halle el dominio real de la función racional h(x) = <div class='fraction'><span class='numerator'>2x + 1</span><span>3x - 9</span></div>.",
        "opciones": {
            "A": "&#8477; - {3}",
            "B": "&#8477; - {9}",
            "C": "(3, +&infin;)",
            "D": "&#8477; - {-1/2}"
        },
        "correcta": "A",
        "explicacion": "El denominador no puede ser cero: 3x - 9 &ne; 0 &rArr; 3x &ne; 9 &rArr; x &ne; 3."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #9] Calcule la distancia del punto P(3, 4) a la recta con ecuación general: 3x + 4y - 5 = 0.",
        "opciones": {
            "A": "4 u",
            "B": "2 u",
            "C": "5 u",
            "D": "3 u"
        },
        "correcta": "A",
        "explicacion": "d = |3(3) + 4(4) - 5| / &radic;(3<sup>2</sup>+4<sup>2</sup>) = |9+16-5|/5 = 20/5 = 4 unidades."
    },
    {
        "categoria": "Vectores",
        "pregunta": "[Reactivo #10] Determine el producto escalar de los vectores tridimensionales u = (2, -1, 3) y v = (4, 2, -1).",
        "opciones": {
            "A": "3",
            "B": "6",
            "C": "8",
            "D": "5"
        },
        "correcta": "A",
        "explicacion": "u &middot; v = (2)(4) + (-1)(2) + (3)(-1) = 8 - 2 - 3 = 3."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #11] Calcule el determinante de la matriz A = [[3, 2], [1, 4]].",
        "opciones": {
            "A": "10",
            "B": "14",
            "C": "12",
            "D": "8"
        },
        "correcta": "A",
        "explicacion": "det(A) = (3)(4) - (2)(1) = 12 - 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #12] Calcule el límite indeterminado: lim <sub>x&rarr;4</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 16</span><span>x - 4</span></div>.",
        "opciones": {
            "A": "8",
            "B": "4",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador: (x-4)(x+4)/(x-4) = x+4. Evaluando cuando x tienden a 4, resulta 4 + 4 = 8."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #13] Halle la primera derivada de la función exponencial mixta f(x) = e<sup>3x</sup> + 5x<sup>2</sup>.",
        "opciones": {
            "A": "3e<sup>3x</sup> + 10x",
            "B": "e<sup>3x</sup> + 10x",
            "C": "3e<sup>3x</sup> + 5x",
            "D": "e<sup>3x</sup> + 5x"
        },
        "correcta": "A",
        "explicacion": "Por regla de la cadena, la derivada de e<sup>3x</sup> es 3e<sup>3x</sup>, y por regla de potencias la de 5x<sup>2</sup> es 10x."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "[Reactivo #14] Determine el centro C y el radio r de la circunferencia x<sup>2</sup> + y<sup>2</sup> - 6x + 4y - 3 = 0.",
        "opciones": {
            "A": "C(3, -2), r = 4",
            "B": "C(-3, 2), r = 4",
            "C": "C(3, -2), r = 16",
            "D": "C(-3, 2), r = 2"
        },
        "correcta": "A",
        "explicacion": "Completando cuadrados: (x-3)<sup>2</sup> + (y+2)<sup>2</sup> = 3 + 9 + 4 = 16. Por ende, Centro(3, -2) y Radio = &radic;16 = 4."
    },
    {
        "categoria": "Identidades Trigonométricas",
        "pregunta": "[Reactivo #15] Simplifique la siguiente expresión trigonométrica: sec(&theta;) &middot; cot(&theta;).",
        "opciones": {
            "A": "csc(&theta;)",
            "B": "sin(&theta;)",
            "C": "cos(&theta;)",
            "D": "tan(&theta;)"
        },
        "correcta": "A",
        "explicacion": "sec(&theta;) &middot; cot(&theta;) = (1/cos(&theta;)) &middot; (cos(&theta;)/sin(&theta;)) = 1/sin(&theta;) = csc(&theta;)."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #16] Dados los conjuntos A = (-4, 5] y B = [2, 8), determine la intersección analítica A &cap; B.",
        "opciones": {
            "A": "[2, 5]",
            "B": "(2, 5]",
            "C": "[-4, 8)",
            "D": "(5, 8)"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los valores compartidos simultáneamente, es decir, desde 2 cerrado hasta 5 cerrado."
    },
    {
        "categoria": "Valor Absoluto",
        "pregunta": "[Reactivo #17] Resuelva la inecuación de módulo: |3x - 6| &le; 12. Indique el intervalo solución.",
        "opciones": {
            "A": "[-2, 6]",
            "B": "(-2, 6)",
            "C": "(-&infin;, -2] &cup; [6, +&infin;)",
            "D": "[2, 6]"
        },
        "correcta": "A",
        "explicacion": "Se plantea -12 &le; 3x - 6 &le; 12. Sumando 6: -6 &le; 3x &le; 18. Dividiendo entre 3: [-2, 6]."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #18] Determine la solución real para la ecuación exponencial: 9<sup>x-1</sup> = 27<sup>x-3</sup>.",
        "opciones": {
            "A": "x = 7",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 2"
        },
        "correcta": "A",
        "explicacion": "Llevando a base 3: (3<sup>2</sup>)<sup>x-1</sup> = (3<sup>3</sup>)<sup>x-3</sup> &rArr; 2x - 2 = 3x - 9 &rArr; x = 7."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #19] Resuelva la ecuación aplicando propiedades: log<sub>2</sub>(x + 2) + log<sub>2</sub>(x - 4) = 3.",
        "opciones": {
            "A": "x = 6",
            "B": "x = -4",
            "C": "x = 4",
            "D": "{6, -4}"
        },
        "correcta": "A",
        "explicacion": "log<sub>2</sub>((x+2)(x-4))=3 &rArr; x<sup>2</sup>-2x-8 = 2<sup>3</sup>=8 &rArr; x<sup>2</sup>-2x-16=0. Ajustando el argumento real, la raíz válida es 6."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "[Reactivo #20] Resuelva el sistema lineal:<br>2x + 3y = 12<br>3x - y = 7.<br> Halle el valor de (x + y).",
        "opciones": {
            "A": "5",
            "B": "4",
            "C": "3",
            "D": "6"
        },
        "correcta": "A",
        "explicacion": "Multiplicando la segunda por 3 y sumando: 11x = 33 &rArr; x = 3. Reemplazando: y = 2. Por tanto x + y = 5."
    },
    {
        "categoria": "Funciones Cuadráticas",
        "pregunta": "[Reactivo #21] Determine las coordenadas completas del vértice de la parábola f(x) = x<sup>2</sup> - 4x + 7.",
        "opciones": {
            "A": "(2, 3)",
            "B": "(-2, 3)",
            "C": "(2, 7)",
            "D": "(4, 7)"
        },
        "correcta": "A",
        "explicacion": "h = -b/(2a) = 4/2 = 2. Evaluando f(2) = 4 - 8 + 7 = 3. El vértice es (2,3)."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "[Reactivo #22] Dadas f(x) = 2x + 5 y g(x) = x<sup>2</sup> - 1, halle la función compuesta (g &cir; f)(x).",
        "opciones": {
            "A": "4x<sup>2</sup> + 20x + 24",
            "B": "4x<sup>2</sup> + 25",
            "C": "2x<sup>2</sup> + 3",
            "D": "4x<sup>2</sup> + 20x + 25"
        },
        "correcta": "A",
        "explicacion": "g(f(x)) = (2x + 5)<sup>2</sup> - 1 = 4x<sup>2</sup> + 20x + 25 - 1 = 4x<sup>2</sup> + 20x + 24."
    },
    {
        "categoria": "Dominio y Rango",
        "pregunta": "[Reactivo #23] Halle el dominio real de la función racional h(x) = <div class='fraction'><span class='numerator'>2x + 1</span><span>3x - 9</span></div>.",
        "opciones": {
            "A": "&#8477; - {3}",
            "B": "&#8477; - {9}",
            "C": "(3, +&infin;)",
            "D": "&#8477; - {-1/2}"
        },
        "correcta": "A",
        "explicacion": "El denominador no puede ser cero: 3x - 9 &ne; 0 &rArr; 3x &ne; 9 &rArr; x &ne; 3."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #24] Calcule la distancia del punto P(3, 4) a la recta con ecuación general: 3x + 4y - 5 = 0.",
        "opciones": {
            "A": "4 u",
            "B": "2 u",
            "C": "5 u",
            "D": "3 u"
        },
        "correcta": "A",
        "explicacion": "d = |3(3) + 4(4) - 5| / &radic;(3<sup>2</sup>+4<sup>2</sup>) = |9+16-5|/5 = 20/5 = 4 unidades."
    },
    {
        "categoria": "Vectores",
        "pregunta": "[Reactivo #25] Determine el producto escalar de los vectores tridimensionales u = (2, -1, 3) y v = (4, 2, -1).",
        "opciones": {
            "A": "3",
            "B": "6",
            "C": "8",
            "D": "5"
        },
        "correcta": "A",
        "explicacion": "u &middot; v = (2)(4) + (-1)(2) + (3)(-1) = 8 - 2 - 3 = 3."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #26] Calcule el determinante de la matriz A = [[3, 2], [1, 4]].",
        "opciones": {
            "A": "10",
            "B": "14",
            "C": "12",
            "D": "8"
        },
        "correcta": "A",
        "explicacion": "det(A) = (3)(4) - (2)(1) = 12 - 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #27] Calcule el límite indeterminado: lim <sub>x&rarr;4</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 16</span><span>x - 4</span></div>.",
        "opciones": {
            "A": "8",
            "B": "4",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador: (x-4)(x+4)/(x-4) = x+4. Evaluando cuando x tienden a 4, resulta 4 + 4 = 8."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #28] Halle la primera derivada de la función exponencial mixta f(x) = e<sup>3x</sup> + 5x<sup>2</sup>.",
        "opciones": {
            "A": "3e<sup>3x</sup> + 10x",
            "B": "e<sup>3x</sup> + 10x",
            "C": "3e<sup>3x</sup> + 5x",
            "D": "e<sup>3x</sup> + 5x"
        },
        "correcta": "A",
        "explicacion": "Por regla de la cadena, la derivada de e<sup>3x</sup> es 3e<sup>3x</sup>, y por regla de potencias la de 5x<sup>2</sup> es 10x."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "[Reactivo #29] Determine el centro C y el radio r de la circunferencia x<sup>2</sup> + y<sup>2</sup> - 6x + 4y - 3 = 0.",
        "opciones": {
            "A": "C(3, -2), r = 4",
            "B": "C(-3, 2), r = 4",
            "C": "C(3, -2), r = 16",
            "D": "C(-3, 2), r = 2"
        },
        "correcta": "A",
        "explicacion": "Completando cuadrados: (x-3)<sup>2</sup> + (y+2)<sup>2</sup> = 3 + 9 + 4 = 16. Por ende, Centro(3, -2) y Radio = &radic;16 = 4."
    },
    {
        "categoria": "Identidades Trigonométricas",
        "pregunta": "[Reactivo #30] Simplifique la siguiente expresión trigonométrica: sec(&theta;) &middot; cot(&theta;).",
        "opciones": {
            "A": "csc(&theta;)",
            "B": "sin(&theta;)",
            "C": "cos(&theta;)",
            "D": "tan(&theta;)"
        },
        "correcta": "A",
        "explicacion": "sec(&theta;) &middot; cot(&theta;) = (1/cos(&theta;)) &middot; (cos(&theta;)/sin(&theta;)) = 1/sin(&theta;) = csc(&theta;)."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #31] Dados los conjuntos A = (-4, 5] y B = [2, 8), determine la intersección analítica A &cap; B.",
        "opciones": {
            "A": "[2, 5]",
            "B": "(2, 5]",
            "C": "[-4, 8)",
            "D": "(5, 8)"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los valores compartidos simultáneamente, es decir, desde 2 cerrado hasta 5 cerrado."
    },
    {
        "categoria": "Valor Absoluto",
        "pregunta": "[Reactivo #32] Resuelva la inecuación de módulo: |3x - 6| &le; 12. Indique el intervalo solución.",
        "opciones": {
            "A": "[-2, 6]",
            "B": "(-2, 6)",
            "C": "(-&infin;, -2] &cup; [6, +&infin;)",
            "D": "[2, 6]"
        },
        "correcta": "A",
        "explicacion": "Se plantea -12 &le; 3x - 6 &le; 12. Sumando 6: -6 &le; 3x &le; 18. Dividiendo entre 3: [-2, 6]."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #33] Determine la solución real para la ecuación exponencial: 9<sup>x-1</sup> = 27<sup>x-3</sup>.",
        "opciones": {
            "A": "x = 7",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 2"
        },
        "correcta": "A",
        "explicacion": "Llevando a base 3: (3<sup>2</sup>)<sup>x-1</sup> = (3<sup>3</sup>)<sup>x-3</sup> &rArr; 2x - 2 = 3x - 9 &rArr; x = 7."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #34] Resuelva la ecuación aplicando propiedades: log<sub>2</sub>(x + 2) + log<sub>2</sub>(x - 4) = 3.",
        "opciones": {
            "A": "x = 6",
            "B": "x = -4",
            "C": "x = 4",
            "D": "{6, -4}"
        },
        "correcta": "A",
        "explicacion": "log<sub>2</sub>((x+2)(x-4))=3 &rArr; x<sup>2</sup>-2x-8 = 2<sup>3</sup>=8 &rArr; x<sup>2</sup>-2x-16=0. Ajustando el argumento real, la raíz válida es 6."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "[Reactivo #35] Resuelva el sistema lineal:<br>2x + 3y = 12<br>3x - y = 7.<br> Halle el valor de (x + y).",
        "opciones": {
            "A": "5",
            "B": "4",
            "C": "3",
            "D": "6"
        },
        "correcta": "A",
        "explicacion": "Multiplicando la segunda por 3 y sumando: 11x = 33 &rArr; x = 3. Reemplazando: y = 2. Por tanto x + y = 5."
    },
    {
        "categoria": "Funciones Cuadráticas",
        "pregunta": "[Reactivo #36] Determine las coordenadas completas del vértice de la parábola f(x) = x<sup>2</sup> - 4x + 7.",
        "opciones": {
            "A": "(2, 3)",
            "B": "(-2, 3)",
            "C": "(2, 7)",
            "D": "(4, 7)"
        },
        "correcta": "A",
        "explicacion": "h = -b/(2a) = 4/2 = 2. Evaluando f(2) = 4 - 8 + 7 = 3. El vértice es (2,3)."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "[Reactivo #37] Dadas f(x) = 2x + 5 y g(x) = x<sup>2</sup> - 1, halle la función compuesta (g &cir; f)(x).",
        "opciones": {
            "A": "4x<sup>2</sup> + 20x + 24",
            "B": "4x<sup>2</sup> + 25",
            "C": "2x<sup>2</sup> + 3",
            "D": "4x<sup>2</sup> + 20x + 25"
        },
        "correcta": "A",
        "explicacion": "g(f(x)) = (2x + 5)<sup>2</sup> - 1 = 4x<sup>2</sup> + 20x + 25 - 1 = 4x<sup>2</sup> + 20x + 24."
    },
    {
        "categoria": "Dominio y Rango",
        "pregunta": "[Reactivo #38] Halle el dominio real de la función racional h(x) = <div class='fraction'><span class='numerator'>2x + 1</span><span>3x - 9</span></div>.",
        "opciones": {
            "A": "&#8477; - {3}",
            "B": "&#8477; - {9}",
            "C": "(3, +&infin;)",
            "D": "&#8477; - {-1/2}"
        },
        "correcta": "A",
        "explicacion": "El denominador no puede ser cero: 3x - 9 &ne; 0 &rArr; 3x &ne; 9 &rArr; x &ne; 3."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #39] Calcule la distancia del punto P(3, 4) a la recta con ecuación general: 3x + 4y - 5 = 0.",
        "opciones": {
            "A": "4 u",
            "B": "2 u",
            "C": "5 u",
            "D": "3 u"
        },
        "correcta": "A",
        "explicacion": "d = |3(3) + 4(4) - 5| / &radic;(3<sup>2</sup>+4<sup>2</sup>) = |9+16-5|/5 = 20/5 = 4 unidades."
    },
    {
        "categoria": "Vectores",
        "pregunta": "[Reactivo #40] Determine el producto escalar de los vectores tridimensionales u = (2, -1, 3) y v = (4, 2, -1).",
        "opciones": {
            "A": "3",
            "B": "6",
            "C": "8",
            "D": "5"
        },
        "correcta": "A",
        "explicacion": "u &middot; v = (2)(4) + (-1)(2) + (3)(-1) = 8 - 2 - 3 = 3."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #41] Calcule el determinante de la matriz A = [[3, 2], [1, 4]].",
        "opciones": {
            "A": "10",
            "B": "14",
            "C": "12",
            "D": "8"
        },
        "correcta": "A",
        "explicacion": "det(A) = (3)(4) - (2)(1) = 12 - 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #42] Calcule el límite indeterminado: lim <sub>x&rarr;4</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 16</span><span>x - 4</span></div>.",
        "opciones": {
            "A": "8",
            "B": "4",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador: (x-4)(x+4)/(x-4) = x+4. Evaluando cuando x tienden a 4, resulta 4 + 4 = 8."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #43] Halle la primera derivada de la función exponencial mixta f(x) = e<sup>3x</sup> + 5x<sup>2</sup>.",
        "opciones": {
            "A": "3e<sup>3x</sup> + 10x",
            "B": "e<sup>3x</sup> + 10x",
            "C": "3e<sup>3x</sup> + 5x",
            "D": "e<sup>3x</sup> + 5x"
        },
        "correcta": "A",
        "explicacion": "Por regla de la cadena, la derivada de e<sup>3x</sup> es 3e<sup>3x</sup>, y por regla de potencias la de 5x<sup>2</sup> es 10x."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "[Reactivo #44] Determine el centro C y el radio r de la circunferencia x<sup>2</sup> + y<sup>2</sup> - 6x + 4y - 3 = 0.",
        "opciones": {
            "A": "C(3, -2), r = 4",
            "B": "C(-3, 2), r = 4",
            "C": "C(3, -2), r = 16",
            "D": "C(-3, 2), r = 2"
        },
        "correcta": "A",
        "explicacion": "Completando cuadrados: (x-3)<sup>2</sup> + (y+2)<sup>2</sup> = 3 + 9 + 4 = 16. Por ende, Centro(3, -2) y Radio = &radic;16 = 4."
    },
    {
        "categoria": "Identidades Trigonométricas",
        "pregunta": "[Reactivo #45] Simplifique la siguiente expresión trigonométrica: sec(&theta;) &middot; cot(&theta;).",
        "opciones": {
            "A": "csc(&theta;)",
            "B": "sin(&theta;)",
            "C": "cos(&theta;)",
            "D": "tan(&theta;)"
        },
        "correcta": "A",
        "explicacion": "sec(&theta;) &middot; cot(&theta;) = (1/cos(&theta;)) &middot; (cos(&theta;)/sin(&theta;)) = 1/sin(&theta;) = csc(&theta;)."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #46] Dados los conjuntos A = (-4, 5] y B = [2, 8), determine la intersección analítica A &cap; B.",
        "opciones": {
            "A": "[2, 5]",
            "B": "(2, 5]",
            "C": "[-4, 8)",
            "D": "(5, 8)"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los valores compartidos simultáneamente, es decir, desde 2 cerrado hasta 5 cerrado."
    },
    {
        "categoria": "Valor Absoluto",
        "pregunta": "[Reactivo #47] Resuelva la inecuación de módulo: |3x - 6| &le; 12. Indique el intervalo solución.",
        "opciones": {
            "A": "[-2, 6]",
            "B": "(-2, 6)",
            "C": "(-&infin;, -2] &cup; [6, +&infin;)",
            "D": "[2, 6]"
        },
        "correcta": "A",
        "explicacion": "Se plantea -12 &le; 3x - 6 &le; 12. Sumando 6: -6 &le; 3x &le; 18. Dividiendo entre 3: [-2, 6]."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #48] Determine la solución real para la ecuación exponencial: 9<sup>x-1</sup> = 27<sup>x-3</sup>.",
        "opciones": {
            "A": "x = 7",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 2"
        },
        "correcta": "A",
        "explicacion": "Llevando a base 3: (3<sup>2</sup>)<sup>x-1</sup> = (3<sup>3</sup>)<sup>x-3</sup> &rArr; 2x - 2 = 3x - 9 &rArr; x = 7."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #49] Resuelva la ecuación aplicando propiedades: log<sub>2</sub>(x + 2) + log<sub>2</sub>(x - 4) = 3.",
        "opciones": {
            "A": "x = 6",
            "B": "x = -4",
            "C": "x = 4",
            "D": "{6, -4}"
        },
        "correcta": "A",
        "explicacion": "log<sub>2</sub>((x+2)(x-4))=3 &rArr; x<sup>2</sup>-2x-8 = 2<sup>3</sup>=8 &rArr; x<sup>2</sup>-2x-16=0. Ajustando el argumento real, la raíz válida es 6."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "[Reactivo #50] Resuelva el sistema lineal:<br>2x + 3y = 12<br>3x - y = 7.<br> Halle el valor de (x + y).",
        "opciones": {
            "A": "5",
            "B": "4",
            "C": "3",
            "D": "6"
        },
        "correcta": "A",
        "explicacion": "Multiplicando la segunda por 3 y sumando: 11x = 33 &rArr; x = 3. Reemplazando: y = 2. Por tanto x + y = 5."
    },
    {
        "categoria": "Funciones Cuadráticas",
        "pregunta": "[Reactivo #51] Determine las coordenadas completas del vértice de la parábola f(x) = x<sup>2</sup> - 4x + 7.",
        "opciones": {
            "A": "(2, 3)",
            "B": "(-2, 3)",
            "C": "(2, 7)",
            "D": "(4, 7)"
        },
        "correcta": "A",
        "explicacion": "h = -b/(2a) = 4/2 = 2. Evaluando f(2) = 4 - 8 + 7 = 3. El vértice es (2,3)."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "[Reactivo #52] Dadas f(x) = 2x + 5 y g(x) = x<sup>2</sup> - 1, halle la función compuesta (g &cir; f)(x).",
        "opciones": {
            "A": "4x<sup>2</sup> + 20x + 24",
            "B": "4x<sup>2</sup> + 25",
            "C": "2x<sup>2</sup> + 3",
            "D": "4x<sup>2</sup> + 20x + 25"
        },
        "correcta": "A",
        "explicacion": "g(f(x)) = (2x + 5)<sup>2</sup> - 1 = 4x<sup>2</sup> + 20x + 25 - 1 = 4x<sup>2</sup> + 20x + 24."
    },
    {
        "categoria": "Dominio y Rango",
        "pregunta": "[Reactivo #53] Halle el dominio real de la función racional h(x) = <div class='fraction'><span class='numerator'>2x + 1</span><span>3x - 9</span></div>.",
        "opciones": {
            "A": "&#8477; - {3}",
            "B": "&#8477; - {9}",
            "C": "(3, +&infin;)",
            "D": "&#8477; - {-1/2}"
        },
        "correcta": "A",
        "explicacion": "El denominador no puede ser cero: 3x - 9 &ne; 0 &rArr; 3x &ne; 9 &rArr; x &ne; 3."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #54] Calcule la distancia del punto P(3, 4) a la recta con ecuación general: 3x + 4y - 5 = 0.",
        "opciones": {
            "A": "4 u",
            "B": "2 u",
            "C": "5 u",
            "D": "3 u"
        },
        "correcta": "A",
        "explicacion": "d = |3(3) + 4(4) - 5| / &radic;(3<sup>2</sup>+4<sup>2</sup>) = |9+16-5|/5 = 20/5 = 4 unidades."
    },
    {
        "categoria": "Vectores",
        "pregunta": "[Reactivo #55] Determine el producto escalar de los vectores tridimensionales u = (2, -1, 3) y v = (4, 2, -1).",
        "opciones": {
            "A": "3",
            "B": "6",
            "C": "8",
            "D": "5"
        },
        "correcta": "A",
        "explicacion": "u &middot; v = (2)(4) + (-1)(2) + (3)(-1) = 8 - 2 - 3 = 3."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #56] Calcule el determinante de la matriz A = [[3, 2], [1, 4]].",
        "opciones": {
            "A": "10",
            "B": "14",
            "C": "12",
            "D": "8"
        },
        "correcta": "A",
        "explicacion": "det(A) = (3)(4) - (2)(1) = 12 - 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #57] Calcule el límite indeterminado: lim <sub>x&rarr;4</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 16</span><span>x - 4</span></div>.",
        "opciones": {
            "A": "8",
            "B": "4",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador: (x-4)(x+4)/(x-4) = x+4. Evaluando cuando x tienden a 4, resulta 4 + 4 = 8."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #58] Halle la primera derivada de la función exponencial mixta f(x) = e<sup>3x</sup> + 5x<sup>2</sup>.",
        "opciones": {
            "A": "3e<sup>3x</sup> + 10x",
            "B": "e<sup>3x</sup> + 10x",
            "C": "3e<sup>3x</sup> + 5x",
            "D": "e<sup>3x</sup> + 5x"
        },
        "correcta": "A",
        "explicacion": "Por regla de la cadena, la derivada de e<sup>3x</sup> es 3e<sup>3x</sup>, y por regla de potencias la de 5x<sup>2</sup> es 10x."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "[Reactivo #59] Determine el centro C y el radio r de la circunferencia x<sup>2</sup> + y<sup>2</sup> - 6x + 4y - 3 = 0.",
        "opciones": {
            "A": "C(3, -2), r = 4",
            "B": "C(-3, 2), r = 4",
            "C": "C(3, -2), r = 16",
            "D": "C(-3, 2), r = 2"
        },
        "correcta": "A",
        "explicacion": "Completando cuadrados: (x-3)<sup>2</sup> + (y+2)<sup>2</sup> = 3 + 9 + 4 = 16. Por ende, Centro(3, -2) y Radio = &radic;16 = 4."
    },
    {
        "categoria": "Identidades Trigonométricas",
        "pregunta": "[Reactivo #60] Simplifique la siguiente expresión trigonométrica: sec(&theta;) &middot; cot(&theta;).",
        "opciones": {
            "A": "csc(&theta;)",
            "B": "sin(&theta;)",
            "C": "cos(&theta;)",
            "D": "tan(&theta;)"
        },
        "correcta": "A",
        "explicacion": "sec(&theta;) &middot; cot(&theta;) = (1/cos(&theta;)) &middot; (cos(&theta;)/sin(&theta;)) = 1/sin(&theta;) = csc(&theta;)."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #61] Dados los conjuntos A = (-4, 5] y B = [2, 8), determine la intersección analítica A &cap; B.",
        "opciones": {
            "A": "[2, 5]",
            "B": "(2, 5]",
            "C": "[-4, 8)",
            "D": "(5, 8)"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los valores compartidos simultáneamente, es decir, desde 2 cerrado hasta 5 cerrado."
    },
    {
        "categoria": "Valor Absoluto",
        "pregunta": "[Reactivo #62] Resuelva la inecuación de módulo: |3x - 6| &le; 12. Indique el intervalo solución.",
        "opciones": {
            "A": "[-2, 6]",
            "B": "(-2, 6)",
            "C": "(-&infin;, -2] &cup; [6, +&infin;)",
            "D": "[2, 6]"
        },
        "correcta": "A",
        "explicacion": "Se plantea -12 &le; 3x - 6 &le; 12. Sumando 6: -6 &le; 3x &le; 18. Dividiendo entre 3: [-2, 6]."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #63] Determine la solución real para la ecuación exponencial: 9<sup>x-1</sup> = 27<sup>x-3</sup>.",
        "opciones": {
            "A": "x = 7",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 2"
        },
        "correcta": "A",
        "explicacion": "Llevando a base 3: (3<sup>2</sup>)<sup>x-1</sup> = (3<sup>3</sup>)<sup>x-3</sup> &rArr; 2x - 2 = 3x - 9 &rArr; x = 7."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #64] Resuelva la ecuación aplicando propiedades: log<sub>2</sub>(x + 2) + log<sub>2</sub>(x - 4) = 3.",
        "opciones": {
            "A": "x = 6",
            "B": "x = -4",
            "C": "x = 4",
            "D": "{6, -4}"
        },
        "correcta": "A",
        "explicacion": "log<sub>2</sub>((x+2)(x-4))=3 &rArr; x<sup>2</sup>-2x-8 = 2<sup>3</sup>=8 &rArr; x<sup>2</sup>-2x-16=0. Ajustando el argumento real, la raíz válida es 6."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "[Reactivo #65] Resuelva el sistema lineal:<br>2x + 3y = 12<br>3x - y = 7.<br> Halle el valor de (x + y).",
        "opciones": {
            "A": "5",
            "B": "4",
            "C": "3",
            "D": "6"
        },
        "correcta": "A",
        "explicacion": "Multiplicando la segunda por 3 y sumando: 11x = 33 &rArr; x = 3. Reemplazando: y = 2. Por tanto x + y = 5."
    },
    {
        "categoria": "Funciones Cuadráticas",
        "pregunta": "[Reactivo #66] Determine las coordenadas completas del vértice de la parábola f(x) = x<sup>2</sup> - 4x + 7.",
        "opciones": {
            "A": "(2, 3)",
            "B": "(-2, 3)",
            "C": "(2, 7)",
            "D": "(4, 7)"
        },
        "correcta": "A",
        "explicacion": "h = -b/(2a) = 4/2 = 2. Evaluando f(2) = 4 - 8 + 7 = 3. El vértice es (2,3)."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "[Reactivo #67] Dadas f(x) = 2x + 5 y g(x) = x<sup>2</sup> - 1, halle la función compuesta (g &cir; f)(x).",
        "opciones": {
            "A": "4x<sup>2</sup> + 20x + 24",
            "B": "4x<sup>2</sup> + 25",
            "C": "2x<sup>2</sup> + 3",
            "D": "4x<sup>2</sup> + 20x + 25"
        },
        "correcta": "A",
        "explicacion": "g(f(x)) = (2x + 5)<sup>2</sup> - 1 = 4x<sup>2</sup> + 20x + 25 - 1 = 4x<sup>2</sup> + 20x + 24."
    },
    {
        "categoria": "Dominio y Rango",
        "pregunta": "[Reactivo #68] Halle el dominio real de la función racional h(x) = <div class='fraction'><span class='numerator'>2x + 1</span><span>3x - 9</span></div>.",
        "opciones": {
            "A": "&#8477; - {3}",
            "B": "&#8477; - {9}",
            "C": "(3, +&infin;)",
            "D": "&#8477; - {-1/2}"
        },
        "correcta": "A",
        "explicacion": "El denominador no puede ser cero: 3x - 9 &ne; 0 &rArr; 3x &ne; 9 &rArr; x &ne; 3."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #69] Calcule la distancia del punto P(3, 4) a la recta con ecuación general: 3x + 4y - 5 = 0.",
        "opciones": {
            "A": "4 u",
            "B": "2 u",
            "C": "5 u",
            "D": "3 u"
        },
        "correcta": "A",
        "explicacion": "d = |3(3) + 4(4) - 5| / &radic;(3<sup>2</sup>+4<sup>2</sup>) = |9+16-5|/5 = 20/5 = 4 unidades."
    },
    {
        "categoria": "Vectores",
        "pregunta": "[Reactivo #70] Determine el producto escalar de los vectores tridimensionales u = (2, -1, 3) y v = (4, 2, -1).",
        "opciones": {
            "A": "3",
            "B": "6",
            "C": "8",
            "D": "5"
        },
        "correcta": "A",
        "explicacion": "u &middot; v = (2)(4) + (-1)(2) + (3)(-1) = 8 - 2 - 3 = 3."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #71] Calcule el determinante de la matriz A = [[3, 2], [1, 4]].",
        "opciones": {
            "A": "10",
            "B": "14",
            "C": "12",
            "D": "8"
        },
        "correcta": "A",
        "explicacion": "det(A) = (3)(4) - (2)(1) = 12 - 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #72] Calcule el límite indeterminado: lim <sub>x&rarr;4</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 16</span><span>x - 4</span></div>.",
        "opciones": {
            "A": "8",
            "B": "4",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador: (x-4)(x+4)/(x-4) = x+4. Evaluando cuando x tienden a 4, resulta 4 + 4 = 8."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #73] Halle la primera derivada de la función exponencial mixta f(x) = e<sup>3x</sup> + 5x<sup>2</sup>.",
        "opciones": {
            "A": "3e<sup>3x</sup> + 10x",
            "B": "e<sup>3x</sup> + 10x",
            "C": "3e<sup>3x</sup> + 5x",
            "D": "e<sup>3x</sup> + 5x"
        },
        "correcta": "A",
        "explicacion": "Por regla de la cadena, la derivada de e<sup>3x</sup> es 3e<sup>3x</sup>, y por regla de potencias la de 5x<sup>2</sup> es 10x."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "[Reactivo #74] Determine el centro C y el radio r de la circunferencia x<sup>2</sup> + y<sup>2</sup> - 6x + 4y - 3 = 0.",
        "opciones": {
            "A": "C(3, -2), r = 4",
            "B": "C(-3, 2), r = 4",
            "C": "C(3, -2), r = 16",
            "D": "C(-3, 2), r = 2"
        },
        "correcta": "A",
        "explicacion": "Completando cuadrados: (x-3)<sup>2</sup> + (y+2)<sup>2</sup> = 3 + 9 + 4 = 16. Por ende, Centro(3, -2) y Radio = &radic;16 = 4."
    },
    {
        "categoria": "Identidades Trigonométricas",
        "pregunta": "[Reactivo #75] Simplifique la siguiente expresión trigonométrica: sec(&theta;) &middot; cot(&theta;).",
        "opciones": {
            "A": "csc(&theta;)",
            "B": "sin(&theta;)",
            "C": "cos(&theta;)",
            "D": "tan(&theta;)"
        },
        "correcta": "A",
        "explicacion": "sec(&theta;) &middot; cot(&theta;) = (1/cos(&theta;)) &middot; (cos(&theta;)/sin(&theta;)) = 1/sin(&theta;) = csc(&theta;)."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #76] Dados los conjuntos A = (-4, 5] y B = [2, 8), determine la intersección analítica A &cap; B.",
        "opciones": {
            "A": "[2, 5]",
            "B": "(2, 5]",
            "C": "[-4, 8)",
            "D": "(5, 8)"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los valores compartidos simultáneamente, es decir, desde 2 cerrado hasta 5 cerrado."
    },
    {
        "categoria": "Valor Absoluto",
        "pregunta": "[Reactivo #77] Resuelva la inecuación de módulo: |3x - 6| &le; 12. Indique el intervalo solución.",
        "opciones": {
            "A": "[-2, 6]",
            "B": "(-2, 6)",
            "C": "(-&infin;, -2] &cup; [6, +&infin;)",
            "D": "[2, 6]"
        },
        "correcta": "A",
        "explicacion": "Se plantea -12 &le; 3x - 6 &le; 12. Sumando 6: -6 &le; 3x &le; 18. Dividiendo entre 3: [-2, 6]."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #78] Determine la solución real para la ecuación exponencial: 9<sup>x-1</sup> = 27<sup>x-3</sup>.",
        "opciones": {
            "A": "x = 7",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 2"
        },
        "correcta": "A",
        "explicacion": "Llevando a base 3: (3<sup>2</sup>)<sup>x-1</sup> = (3<sup>3</sup>)<sup>x-3</sup> &rArr; 2x - 2 = 3x - 9 &rArr; x = 7."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #79] Resuelva la ecuación aplicando propiedades: log<sub>2</sub>(x + 2) + log<sub>2</sub>(x - 4) = 3.",
        "opciones": {
            "A": "x = 6",
            "B": "x = -4",
            "C": "x = 4",
            "D": "{6, -4}"
        },
        "correcta": "A",
        "explicacion": "log<sub>2</sub>((x+2)(x-4))=3 &rArr; x<sup>2</sup>-2x-8 = 2<sup>3</sup>=8 &rArr; x<sup>2</sup>-2x-16=0. Ajustando el argumento real, la raíz válida es 6."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "[Reactivo #80] Resuelva el sistema lineal:<br>2x + 3y = 12<br>3x - y = 7.<br> Halle el valor de (x + y).",
        "opciones": {
            "A": "5",
            "B": "4",
            "C": "3",
            "D": "6"
        },
        "correcta": "A",
        "explicacion": "Multiplicando la segunda por 3 y sumando: 11x = 33 &rArr; x = 3. Reemplazando: y = 2. Por tanto x + y = 5."
    },
    {
        "categoria": "Funciones Cuadráticas",
        "pregunta": "[Reactivo #81] Determine las coordenadas completas del vértice de la parábola f(x) = x<sup>2</sup> - 4x + 7.",
        "opciones": {
            "A": "(2, 3)",
            "B": "(-2, 3)",
            "C": "(2, 7)",
            "D": "(4, 7)"
        },
        "correcta": "A",
        "explicacion": "h = -b/(2a) = 4/2 = 2. Evaluando f(2) = 4 - 8 + 7 = 3. El vértice es (2,3)."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "[Reactivo #82] Dadas f(x) = 2x + 5 y g(x) = x<sup>2</sup> - 1, halle la función compuesta (g &cir; f)(x).",
        "opciones": {
            "A": "4x<sup>2</sup> + 20x + 24",
            "B": "4x<sup>2</sup> + 25",
            "C": "2x<sup>2</sup> + 3",
            "D": "4x<sup>2</sup> + 20x + 25"
        },
        "correcta": "A",
        "explicacion": "g(f(x)) = (2x + 5)<sup>2</sup> - 1 = 4x<sup>2</sup> + 20x + 25 - 1 = 4x<sup>2</sup> + 20x + 24."
    },
    {
        "categoria": "Dominio y Rango",
        "pregunta": "[Reactivo #83] Halle el dominio real de la función racional h(x) = <div class='fraction'><span class='numerator'>2x + 1</span><span>3x - 9</span></div>.",
        "opciones": {
            "A": "&#8477; - {3}",
            "B": "&#8477; - {9}",
            "C": "(3, +&infin;)",
            "D": "&#8477; - {-1/2}"
        },
        "correcta": "A",
        "explicacion": "El denominador no puede ser cero: 3x - 9 &ne; 0 &rArr; 3x &ne; 9 &rArr; x &ne; 3."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #84] Calcule la distancia del punto P(3, 4) a la recta con ecuación general: 3x + 4y - 5 = 0.",
        "opciones": {
            "A": "4 u",
            "B": "2 u",
            "C": "5 u",
            "D": "3 u"
        },
        "correcta": "A",
        "explicacion": "d = |3(3) + 4(4) - 5| / &radic;(3<sup>2</sup>+4<sup>2</sup>) = |9+16-5|/5 = 20/5 = 4 unidades."
    },
    {
        "categoria": "Vectores",
        "pregunta": "[Reactivo #85] Determine el producto escalar de los vectores tridimensionales u = (2, -1, 3) y v = (4, 2, -1).",
        "opciones": {
            "A": "3",
            "B": "6",
            "C": "8",
            "D": "5"
        },
        "correcta": "A",
        "explicacion": "u &middot; v = (2)(4) + (-1)(2) + (3)(-1) = 8 - 2 - 3 = 3."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #86] Calcule el determinante de la matriz A = [[3, 2], [1, 4]].",
        "opciones": {
            "A": "10",
            "B": "14",
            "C": "12",
            "D": "8"
        },
        "correcta": "A",
        "explicacion": "det(A) = (3)(4) - (2)(1) = 12 - 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #87] Calcule el límite indeterminado: lim <sub>x&rarr;4</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 16</span><span>x - 4</span></div>.",
        "opciones": {
            "A": "8",
            "B": "4",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador: (x-4)(x+4)/(x-4) = x+4. Evaluando cuando x tienden a 4, resulta 4 + 4 = 8."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #88] Halle la primera derivada de la función exponencial mixta f(x) = e<sup>3x</sup> + 5x<sup>2</sup>.",
        "opciones": {
            "A": "3e<sup>3x</sup> + 10x",
            "B": "e<sup>3x</sup> + 10x",
            "C": "3e<sup>3x</sup> + 5x",
            "D": "e<sup>3x</sup> + 5x"
        },
        "correcta": "A",
        "explicacion": "Por regla de la cadena, la derivada de e<sup>3x</sup> es 3e<sup>3x</sup>, y por regla de potencias la de 5x<sup>2</sup> es 10x."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "[Reactivo #89] Determine el centro C y el radio r de la circunferencia x<sup>2</sup> + y<sup>2</sup> - 6x + 4y - 3 = 0.",
        "opciones": {
            "A": "C(3, -2), r = 4",
            "B": "C(-3, 2), r = 4",
            "C": "C(3, -2), r = 16",
            "D": "C(-3, 2), r = 2"
        },
        "correcta": "A",
        "explicacion": "Completando cuadrados: (x-3)<sup>2</sup> + (y+2)<sup>2</sup> = 3 + 9 + 4 = 16. Por ende, Centro(3, -2) y Radio = &radic;16 = 4."
    },
    {
        "categoria": "Identidades Trigonométricas",
        "pregunta": "[Reactivo #90] Simplifique la siguiente expresión trigonométrica: sec(&theta;) &middot; cot(&theta;).",
        "opciones": {
            "A": "csc(&theta;)",
            "B": "sin(&theta;)",
            "C": "cos(&theta;)",
            "D": "tan(&theta;)"
        },
        "correcta": "A",
        "explicacion": "sec(&theta;) &middot; cot(&theta;) = (1/cos(&theta;)) &middot; (cos(&theta;)/sin(&theta;)) = 1/sin(&theta;) = csc(&theta;)."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #91] Dados los conjuntos A = (-4, 5] y B = [2, 8), determine la intersección analítica A &cap; B.",
        "opciones": {
            "A": "[2, 5]",
            "B": "(2, 5]",
            "C": "[-4, 8)",
            "D": "(5, 8)"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los valores compartidos simultáneamente, es decir, desde 2 cerrado hasta 5 cerrado."
    },
    {
        "categoria": "Valor Absoluto",
        "pregunta": "[Reactivo #92] Resuelva la inecuación de módulo: |3x - 6| &le; 12. Indique el intervalo solución.",
        "opciones": {
            "A": "[-2, 6]",
            "B": "(-2, 6)",
            "C": "(-&infin;, -2] &cup; [6, +&infin;)",
            "D": "[2, 6]"
        },
        "correcta": "A",
        "explicacion": "Se plantea -12 &le; 3x - 6 &le; 12. Sumando 6: -6 &le; 3x &le; 18. Dividiendo entre 3: [-2, 6]."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #93] Determine la solución real para la ecuación exponencial: 9<sup>x-1</sup> = 27<sup>x-3</sup>.",
        "opciones": {
            "A": "x = 7",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 2"
        },
        "correcta": "A",
        "explicacion": "Llevando a base 3: (3<sup>2</sup>)<sup>x-1</sup> = (3<sup>3</sup>)<sup>x-3</sup> &rArr; 2x - 2 = 3x - 9 &rArr; x = 7."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #94] Resuelva la ecuación aplicando propiedades: log<sub>2</sub>(x + 2) + log<sub>2</sub>(x - 4) = 3.",
        "opciones": {
            "A": "x = 6",
            "B": "x = -4",
            "C": "x = 4",
            "D": "{6, -4}"
        },
        "correcta": "A",
        "explicacion": "log<sub>2</sub>((x+2)(x-4))=3 &rArr; x<sup>2</sup>-2x-8 = 2<sup>3</sup>=8 &rArr; x<sup>2</sup>-2x-16=0. Ajustando el argumento real, la raíz válida es 6."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "[Reactivo #95] Resuelva el sistema lineal:<br>2x + 3y = 12<br>3x - y = 7.<br> Halle el valor de (x + y).",
        "opciones": {
            "A": "5",
            "B": "4",
            "C": "3",
            "D": "6"
        },
        "correcta": "A",
        "explicacion": "Multiplicando la segunda por 3 y sumando: 11x = 33 &rArr; x = 3. Reemplazando: y = 2. Por tanto x + y = 5."
    },
    {
        "categoria": "Funciones Cuadráticas",
        "pregunta": "[Reactivo #96] Determine las coordenadas completas del vértice de la parábola f(x) = x<sup>2</sup> - 4x + 7.",
        "opciones": {
            "A": "(2, 3)",
            "B": "(-2, 3)",
            "C": "(2, 7)",
            "D": "(4, 7)"
        },
        "correcta": "A",
        "explicacion": "h = -b/(2a) = 4/2 = 2. Evaluando f(2) = 4 - 8 + 7 = 3. El vértice es (2,3)."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "[Reactivo #97] Dadas f(x) = 2x + 5 y g(x) = x<sup>2</sup> - 1, halle la función compuesta (g &cir; f)(x).",
        "opciones": {
            "A": "4x<sup>2</sup> + 20x + 24",
            "B": "4x<sup>2</sup> + 25",
            "C": "2x<sup>2</sup> + 3",
            "D": "4x<sup>2</sup> + 20x + 25"
        },
        "correcta": "A",
        "explicacion": "g(f(x)) = (2x + 5)<sup>2</sup> - 1 = 4x<sup>2</sup> + 20x + 25 - 1 = 4x<sup>2</sup> + 20x + 24."
    },
    {
        "categoria": "Dominio y Rango",
        "pregunta": "[Reactivo #98] Halle el dominio real de la función racional h(x) = <div class='fraction'><span class='numerator'>2x + 1</span><span>3x - 9</span></div>.",
        "opciones": {
            "A": "&#8477; - {3}",
            "B": "&#8477; - {9}",
            "C": "(3, +&infin;)",
            "D": "&#8477; - {-1/2}"
        },
        "correcta": "A",
        "explicacion": "El denominador no puede ser cero: 3x - 9 &ne; 0 &rArr; 3x &ne; 9 &rArr; x &ne; 3."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #99] Calcule la distancia del punto P(3, 4) a la recta con ecuación general: 3x + 4y - 5 = 0.",
        "opciones": {
            "A": "4 u",
            "B": "2 u",
            "C": "5 u",
            "D": "3 u"
        },
        "correcta": "A",
        "explicacion": "d = |3(3) + 4(4) - 5| / &radic;(3<sup>2</sup>+4<sup>2</sup>) = |9+16-5|/5 = 20/5 = 4 unidades."
    },
    {
        "categoria": "Vectores",
        "pregunta": "[Reactivo #100] Determine el producto escalar de los vectores tridimensionales u = (2, -1, 3) y v = (4, 2, -1).",
        "opciones": {
            "A": "3",
            "B": "6",
            "C": "8",
            "D": "5"
        },
        "correcta": "A",
        "explicacion": "u &middot; v = (2)(4) + (-1)(2) + (3)(-1) = 8 - 2 - 3 = 3."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #101] Calcule el determinante de la matriz A = [[3, 2], [1, 4]].",
        "opciones": {
            "A": "10",
            "B": "14",
            "C": "12",
            "D": "8"
        },
        "correcta": "A",
        "explicacion": "det(A) = (3)(4) - (2)(1) = 12 - 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #102] Calcule el límite indeterminado: lim <sub>x&rarr;4</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 16</span><span>x - 4</span></div>.",
        "opciones": {
            "A": "8",
            "B": "4",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador: (x-4)(x+4)/(x-4) = x+4. Evaluando cuando x tienden a 4, resulta 4 + 4 = 8."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #103] Halle la primera derivada de la función exponencial mixta f(x) = e<sup>3x</sup> + 5x<sup>2</sup>.",
        "opciones": {
            "A": "3e<sup>3x</sup> + 10x",
            "B": "e<sup>3x</sup> + 10x",
            "C": "3e<sup>3x</sup> + 5x",
            "D": "e<sup>3x</sup> + 5x"
        },
        "correcta": "A",
        "explicacion": "Por regla de la cadena, la derivada de e<sup>3x</sup> es 3e<sup>3x</sup>, y por regla de potencias la de 5x<sup>2</sup> es 10x."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "[Reactivo #104] Determine el centro C y el radio r de la circunferencia x<sup>2</sup> + y<sup>2</sup> - 6x + 4y - 3 = 0.",
        "opciones": {
            "A": "C(3, -2), r = 4",
            "B": "C(-3, 2), r = 4",
            "C": "C(3, -2), r = 16",
            "D": "C(-3, 2), r = 2"
        },
        "correcta": "A",
        "explicacion": "Completando cuadrados: (x-3)<sup>2</sup> + (y+2)<sup>2</sup> = 3 + 9 + 4 = 16. Por ende, Centro(3, -2) y Radio = &radic;16 = 4."
    },
    {
        "categoria": "Identidades Trigonométricas",
        "pregunta": "[Reactivo #105] Simplifique la siguiente expresión trigonométrica: sec(&theta;) &middot; cot(&theta;).",
        "opciones": {
            "A": "csc(&theta;)",
            "B": "sin(&theta;)",
            "C": "cos(&theta;)",
            "D": "tan(&theta;)"
        },
        "correcta": "A",
        "explicacion": "sec(&theta;) &middot; cot(&theta;) = (1/cos(&theta;)) &middot; (cos(&theta;)/sin(&theta;)) = 1/sin(&theta;) = csc(&theta;)."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #106] Dados los conjuntos A = (-4, 5] y B = [2, 8), determine la intersección analítica A &cap; B.",
        "opciones": {
            "A": "[2, 5]",
            "B": "(2, 5]",
            "C": "[-4, 8)",
            "D": "(5, 8)"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los valores compartidos simultáneamente, es decir, desde 2 cerrado hasta 5 cerrado."
    },
    {
        "categoria": "Valor Absoluto",
        "pregunta": "[Reactivo #107] Resuelva la inecuación de módulo: |3x - 6| &le; 12. Indique el intervalo solución.",
        "opciones": {
            "A": "[-2, 6]",
            "B": "(-2, 6)",
            "C": "(-&infin;, -2] &cup; [6, +&infin;)",
            "D": "[2, 6]"
        },
        "correcta": "A",
        "explicacion": "Se plantea -12 &le; 3x - 6 &le; 12. Sumando 6: -6 &le; 3x &le; 18. Dividiendo entre 3: [-2, 6]."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #108] Determine la solución real para la ecuación exponencial: 9<sup>x-1</sup> = 27<sup>x-3</sup>.",
        "opciones": {
            "A": "x = 7",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 2"
        },
        "correcta": "A",
        "explicacion": "Llevando a base 3: (3<sup>2</sup>)<sup>x-1</sup> = (3<sup>3</sup>)<sup>x-3</sup> &rArr; 2x - 2 = 3x - 9 &rArr; x = 7."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #109] Resuelva la ecuación aplicando propiedades: log<sub>2</sub>(x + 2) + log<sub>2</sub>(x - 4) = 3.",
        "opciones": {
            "A": "x = 6",
            "B": "x = -4",
            "C": "x = 4",
            "D": "{6, -4}"
        },
        "correcta": "A",
        "explicacion": "log<sub>2</sub>((x+2)(x-4))=3 &rArr; x<sup>2</sup>-2x-8 = 2<sup>3</sup>=8 &rArr; x<sup>2</sup>-2x-16=0. Ajustando el argumento real, la raíz válida es 6."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "[Reactivo #110] Resuelva el sistema lineal:<br>2x + 3y = 12<br>3x - y = 7.<br> Halle el valor de (x + y).",
        "opciones": {
            "A": "5",
            "B": "4",
            "C": "3",
            "D": "6"
        },
        "correcta": "A",
        "explicacion": "Multiplicando la segunda por 3 y sumando: 11x = 33 &rArr; x = 3. Reemplazando: y = 2. Por tanto x + y = 5."
    },
    {
        "categoria": "Funciones Cuadráticas",
        "pregunta": "[Reactivo #111] Determine las coordenadas completas del vértice de la parábola f(x) = x<sup>2</sup> - 4x + 7.",
        "opciones": {
            "A": "(2, 3)",
            "B": "(-2, 3)",
            "C": "(2, 7)",
            "D": "(4, 7)"
        },
        "correcta": "A",
        "explicacion": "h = -b/(2a) = 4/2 = 2. Evaluando f(2) = 4 - 8 + 7 = 3. El vértice es (2,3)."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "[Reactivo #112] Dadas f(x) = 2x + 5 y g(x) = x<sup>2</sup> - 1, halle la función compuesta (g &cir; f)(x).",
        "opciones": {
            "A": "4x<sup>2</sup> + 20x + 24",
            "B": "4x<sup>2</sup> + 25",
            "C": "2x<sup>2</sup> + 3",
            "D": "4x<sup>2</sup> + 20x + 25"
        },
        "correcta": "A",
        "explicacion": "g(f(x)) = (2x + 5)<sup>2</sup> - 1 = 4x<sup>2</sup> + 20x + 25 - 1 = 4x<sup>2</sup> + 20x + 24."
    },
    {
        "categoria": "Dominio y Rango",
        "pregunta": "[Reactivo #113] Halle el dominio real de la función racional h(x) = <div class='fraction'><span class='numerator'>2x + 1</span><span>3x - 9</span></div>.",
        "opciones": {
            "A": "&#8477; - {3}",
            "B": "&#8477; - {9}",
            "C": "(3, +&infin;)",
            "D": "&#8477; - {-1/2}"
        },
        "correcta": "A",
        "explicacion": "El denominador no puede ser cero: 3x - 9 &ne; 0 &rArr; 3x &ne; 9 &rArr; x &ne; 3."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #114] Calcule la distancia del punto P(3, 4) a la recta con ecuación general: 3x + 4y - 5 = 0.",
        "opciones": {
            "A": "4 u",
            "B": "2 u",
            "C": "5 u",
            "D": "3 u"
        },
        "correcta": "A",
        "explicacion": "d = |3(3) + 4(4) - 5| / &radic;(3<sup>2</sup>+4<sup>2</sup>) = |9+16-5|/5 = 20/5 = 4 unidades."
    },
    {
        "categoria": "Vectores",
        "pregunta": "[Reactivo #115] Determine el producto escalar de los vectores tridimensionales u = (2, -1, 3) y v = (4, 2, -1).",
        "opciones": {
            "A": "3",
            "B": "6",
            "C": "8",
            "D": "5"
        },
        "correcta": "A",
        "explicacion": "u &middot; v = (2)(4) + (-1)(2) + (3)(-1) = 8 - 2 - 3 = 3."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #116] Calcule el determinante de la matriz A = [[3, 2], [1, 4]].",
        "opciones": {
            "A": "10",
            "B": "14",
            "C": "12",
            "D": "8"
        },
        "correcta": "A",
        "explicacion": "det(A) = (3)(4) - (2)(1) = 12 - 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #117] Calcule el límite indeterminado: lim <sub>x&rarr;4</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 16</span><span>x - 4</span></div>.",
        "opciones": {
            "A": "8",
            "B": "4",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador: (x-4)(x+4)/(x-4) = x+4. Evaluando cuando x tienden a 4, resulta 4 + 4 = 8."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #118] Halle la primera derivada de la función exponencial mixta f(x) = e<sup>3x</sup> + 5x<sup>2</sup>.",
        "opciones": {
            "A": "3e<sup>3x</sup> + 10x",
            "B": "e<sup>3x</sup> + 10x",
            "C": "3e<sup>3x</sup> + 5x",
            "D": "e<sup>3x</sup> + 5x"
        },
        "correcta": "A",
        "explicacion": "Por regla de la cadena, la derivada de e<sup>3x</sup> es 3e<sup>3x</sup>, y por regla de potencias la de 5x<sup>2</sup> es 10x."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "[Reactivo #119] Determine el centro C y el radio r de la circunferencia x<sup>2</sup> + y<sup>2</sup> - 6x + 4y - 3 = 0.",
        "opciones": {
            "A": "C(3, -2), r = 4",
            "B": "C(-3, 2), r = 4",
            "C": "C(3, -2), r = 16",
            "D": "C(-3, 2), r = 2"
        },
        "correcta": "A",
        "explicacion": "Completando cuadrados: (x-3)<sup>2</sup> + (y+2)<sup>2</sup> = 3 + 9 + 4 = 16. Por ende, Centro(3, -2) y Radio = &radic;16 = 4."
    },
    {
        "categoria": "Identidades Trigonométricas",
        "pregunta": "[Reactivo #120] Simplifique la siguiente expresión trigonométrica: sec(&theta;) &middot; cot(&theta;).",
        "opciones": {
            "A": "csc(&theta;)",
            "B": "sin(&theta;)",
            "C": "cos(&theta;)",
            "D": "tan(&theta;)"
        },
        "correcta": "A",
        "explicacion": "sec(&theta;) &middot; cot(&theta;) = (1/cos(&theta;)) &middot; (cos(&theta;)/sin(&theta;)) = 1/sin(&theta;) = csc(&theta;)."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #121] Dados los conjuntos A = (-4, 5] y B = [2, 8), determine la intersección analítica A &cap; B.",
        "opciones": {
            "A": "[2, 5]",
            "B": "(2, 5]",
            "C": "[-4, 8)",
            "D": "(5, 8)"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los valores compartidos simultáneamente, es decir, desde 2 cerrado hasta 5 cerrado."
    },
    {
        "categoria": "Valor Absoluto",
        "pregunta": "[Reactivo #122] Resuelva la inecuación de módulo: |3x - 6| &le; 12. Indique el intervalo solución.",
        "opciones": {
            "A": "[-2, 6]",
            "B": "(-2, 6)",
            "C": "(-&infin;, -2] &cup; [6, +&infin;)",
            "D": "[2, 6]"
        },
        "correcta": "A",
        "explicacion": "Se plantea -12 &le; 3x - 6 &le; 12. Sumando 6: -6 &le; 3x &le; 18. Dividiendo entre 3: [-2, 6]."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #123] Determine la solución real para la ecuación exponencial: 9<sup>x-1</sup> = 27<sup>x-3</sup>.",
        "opciones": {
            "A": "x = 7",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 2"
        },
        "correcta": "A",
        "explicacion": "Llevando a base 3: (3<sup>2</sup>)<sup>x-1</sup> = (3<sup>3</sup>)<sup>x-3</sup> &rArr; 2x - 2 = 3x - 9 &rArr; x = 7."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #124] Resuelva la ecuación aplicando propiedades: log<sub>2</sub>(x + 2) + log<sub>2</sub>(x - 4) = 3.",
        "opciones": {
            "A": "x = 6",
            "B": "x = -4",
            "C": "x = 4",
            "D": "{6, -4}"
        },
        "correcta": "A",
        "explicacion": "log<sub>2</sub>((x+2)(x-4))=3 &rArr; x<sup>2</sup>-2x-8 = 2<sup>3</sup>=8 &rArr; x<sup>2</sup>-2x-16=0. Ajustando el argumento real, la raíz válida es 6."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "[Reactivo #125] Resuelva el sistema lineal:<br>2x + 3y = 12<br>3x - y = 7.<br> Halle el valor de (x + y).",
        "opciones": {
            "A": "5",
            "B": "4",
            "C": "3",
            "D": "6"
        },
        "correcta": "A",
        "explicacion": "Multiplicando la segunda por 3 y sumando: 11x = 33 &rArr; x = 3. Reemplazando: y = 2. Por tanto x + y = 5."
    },
    {
        "categoria": "Funciones Cuadráticas",
        "pregunta": "[Reactivo #126] Determine las coordenadas completas del vértice de la parábola f(x) = x<sup>2</sup> - 4x + 7.",
        "opciones": {
            "A": "(2, 3)",
            "B": "(-2, 3)",
            "C": "(2, 7)",
            "D": "(4, 7)"
        },
        "correcta": "A",
        "explicacion": "h = -b/(2a) = 4/2 = 2. Evaluando f(2) = 4 - 8 + 7 = 3. El vértice es (2,3)."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "[Reactivo #127] Dadas f(x) = 2x + 5 y g(x) = x<sup>2</sup> - 1, halle la función compuesta (g &cir; f)(x).",
        "opciones": {
            "A": "4x<sup>2</sup> + 20x + 24",
            "B": "4x<sup>2</sup> + 25",
            "C": "2x<sup>2</sup> + 3",
            "D": "4x<sup>2</sup> + 20x + 25"
        },
        "correcta": "A",
        "explicacion": "g(f(x)) = (2x + 5)<sup>2</sup> - 1 = 4x<sup>2</sup> + 20x + 25 - 1 = 4x<sup>2</sup> + 20x + 24."
    },
    {
        "categoria": "Dominio y Rango",
        "pregunta": "[Reactivo #128] Halle el dominio real de la función racional h(x) = <div class='fraction'><span class='numerator'>2x + 1</span><span>3x - 9</span></div>.",
        "opciones": {
            "A": "&#8477; - {3}",
            "B": "&#8477; - {9}",
            "C": "(3, +&infin;)",
            "D": "&#8477; - {-1/2}"
        },
        "correcta": "A",
        "explicacion": "El denominador no puede ser cero: 3x - 9 &ne; 0 &rArr; 3x &ne; 9 &rArr; x &ne; 3."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #129] Calcule la distancia del punto P(3, 4) a la recta con ecuación general: 3x + 4y - 5 = 0.",
        "opciones": {
            "A": "4 u",
            "B": "2 u",
            "C": "5 u",
            "D": "3 u"
        },
        "correcta": "A",
        "explicacion": "d = |3(3) + 4(4) - 5| / &radic;(3<sup>2</sup>+4<sup>2</sup>) = |9+16-5|/5 = 20/5 = 4 unidades."
    },
    {
        "categoria": "Vectores",
        "pregunta": "[Reactivo #130] Determine el producto escalar de los vectores tridimensionales u = (2, -1, 3) y v = (4, 2, -1).",
        "opciones": {
            "A": "3",
            "B": "6",
            "C": "8",
            "D": "5"
        },
        "correcta": "A",
        "explicacion": "u &middot; v = (2)(4) + (-1)(2) + (3)(-1) = 8 - 2 - 3 = 3."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #131] Calcule el determinante de la matriz A = [[3, 2], [1, 4]].",
        "opciones": {
            "A": "10",
            "B": "14",
            "C": "12",
            "D": "8"
        },
        "correcta": "A",
        "explicacion": "det(A) = (3)(4) - (2)(1) = 12 - 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #132] Calcule el límite indeterminado: lim <sub>x&rarr;4</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 16</span><span>x - 4</span></div>.",
        "opciones": {
            "A": "8",
            "B": "4",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador: (x-4)(x+4)/(x-4) = x+4. Evaluando cuando x tienden a 4, resulta 4 + 4 = 8."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #133] Halle la primera derivada de la función exponencial mixta f(x) = e<sup>3x</sup> + 5x<sup>2</sup>.",
        "opciones": {
            "A": "3e<sup>3x</sup> + 10x",
            "B": "e<sup>3x</sup> + 10x",
            "C": "3e<sup>3x</sup> + 5x",
            "D": "e<sup>3x</sup> + 5x"
        },
        "correcta": "A",
        "explicacion": "Por regla de la cadena, la derivada de e<sup>3x</sup> es 3e<sup>3x</sup>, y por regla de potencias la de 5x<sup>2</sup> es 10x."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "[Reactivo #134] Determine el centro C y el radio r de la circunferencia x<sup>2</sup> + y<sup>2</sup> - 6x + 4y - 3 = 0.",
        "opciones": {
            "A": "C(3, -2), r = 4",
            "B": "C(-3, 2), r = 4",
            "C": "C(3, -2), r = 16",
            "D": "C(-3, 2), r = 2"
        },
        "correcta": "A",
        "explicacion": "Completando cuadrados: (x-3)<sup>2</sup> + (y+2)<sup>2</sup> = 3 + 9 + 4 = 16. Por ende, Centro(3, -2) y Radio = &radic;16 = 4."
    },
    {
        "categoria": "Identidades Trigonométricas",
        "pregunta": "[Reactivo #135] Simplifique la siguiente expresión trigonométrica: sec(&theta;) &middot; cot(&theta;).",
        "opciones": {
            "A": "csc(&theta;)",
            "B": "sin(&theta;)",
            "C": "cos(&theta;)",
            "D": "tan(&theta;)"
        },
        "correcta": "A",
        "explicacion": "sec(&theta;) &middot; cot(&theta;) = (1/cos(&theta;)) &middot; (cos(&theta;)/sin(&theta;)) = 1/sin(&theta;) = csc(&theta;)."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #136] Dados los conjuntos A = (-4, 5] y B = [2, 8), determine la intersección analítica A &cap; B.",
        "opciones": {
            "A": "[2, 5]",
            "B": "(2, 5]",
            "C": "[-4, 8)",
            "D": "(5, 8)"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los valores compartidos simultáneamente, es decir, desde 2 cerrado hasta 5 cerrado."
    },
    {
        "categoria": "Valor Absoluto",
        "pregunta": "[Reactivo #137] Resuelva la inecuación de módulo: |3x - 6| &le; 12. Indique el intervalo solución.",
        "opciones": {
            "A": "[-2, 6]",
            "B": "(-2, 6)",
            "C": "(-&infin;, -2] &cup; [6, +&infin;)",
            "D": "[2, 6]"
        },
        "correcta": "A",
        "explicacion": "Se plantea -12 &le; 3x - 6 &le; 12. Sumando 6: -6 &le; 3x &le; 18. Dividiendo entre 3: [-2, 6]."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #138] Determine la solución real para la ecuación exponencial: 9<sup>x-1</sup> = 27<sup>x-3</sup>.",
        "opciones": {
            "A": "x = 7",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 2"
        },
        "correcta": "A",
        "explicacion": "Llevando a base 3: (3<sup>2</sup>)<sup>x-1</sup> = (3<sup>3</sup>)<sup>x-3</sup> &rArr; 2x - 2 = 3x - 9 &rArr; x = 7."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #139] Resuelva la ecuación aplicando propiedades: log<sub>2</sub>(x + 2) + log<sub>2</sub>(x - 4) = 3.",
        "opciones": {
            "A": "x = 6",
            "B": "x = -4",
            "C": "x = 4",
            "D": "{6, -4}"
        },
        "correcta": "A",
        "explicacion": "log<sub>2</sub>((x+2)(x-4))=3 &rArr; x<sup>2</sup>-2x-8 = 2<sup>3</sup>=8 &rArr; x<sup>2</sup>-2x-16=0. Ajustando el argumento real, la raíz válida es 6."
    },
    {
        "categoria": "Sistemas de Ecuaciones",
        "pregunta": "[Reactivo #140] Resuelva el sistema lineal:<br>2x + 3y = 12<br>3x - y = 7.<br> Halle el valor de (x + y).",
        "opciones": {
            "A": "5",
            "B": "4",
            "C": "3",
            "D": "6"
        },
        "correcta": "A",
        "explicacion": "Multiplicando la segunda por 3 y sumando: 11x = 33 &rArr; x = 3. Reemplazando: y = 2. Por tanto x + y = 5."
    },
    {
        "categoria": "Funciones Cuadráticas",
        "pregunta": "[Reactivo #141] Determine las coordenadas completas del vértice de la parábola f(x) = x<sup>2</sup> - 4x + 7.",
        "opciones": {
            "A": "(2, 3)",
            "B": "(-2, 3)",
            "C": "(2, 7)",
            "D": "(4, 7)"
        },
        "correcta": "A",
        "explicacion": "h = -b/(2a) = 4/2 = 2. Evaluando f(2) = 4 - 8 + 7 = 3. El vértice es (2,3)."
    },
    {
        "categoria": "Operaciones con Funciones",
        "pregunta": "[Reactivo #142] Dadas f(x) = 2x + 5 y g(x) = x<sup>2</sup> - 1, halle la función compuesta (g &cir; f)(x).",
        "opciones": {
            "A": "4x<sup>2</sup> + 20x + 24",
            "B": "4x<sup>2</sup> + 25",
            "C": "2x<sup>2</sup> + 3",
            "D": "4x<sup>2</sup> + 20x + 25"
        },
        "correcta": "A",
        "explicacion": "g(f(x)) = (2x + 5)<sup>2</sup> - 1 = 4x<sup>2</sup> + 20x + 25 - 1 = 4x<sup>2</sup> + 20x + 24."
    },
    {
        "categoria": "Dominio y Rango",
        "pregunta": "[Reactivo #143] Halle el dominio real de la función racional h(x) = <div class='fraction'><span class='numerator'>2x + 1</span><span>3x - 9</span></div>.",
        "opciones": {
            "A": "&#8477; - {3}",
            "B": "&#8477; - {9}",
            "C": "(3, +&infin;)",
            "D": "&#8477; - {-1/2}"
        },
        "correcta": "A",
        "explicacion": "El denominador no puede ser cero: 3x - 9 &ne; 0 &rArr; 3x &ne; 9 &rArr; x &ne; 3."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #144] Calcule la distancia del punto P(3, 4) a la recta con ecuación general: 3x + 4y - 5 = 0.",
        "opciones": {
            "A": "4 u",
            "B": "2 u",
            "C": "5 u",
            "D": "3 u"
        },
        "correcta": "A",
        "explicacion": "d = |3(3) + 4(4) - 5| / &radic;(3<sup>2</sup>+4<sup>2</sup>) = |9+16-5|/5 = 20/5 = 4 unidades."
    },
    {
        "categoria": "Vectores",
        "pregunta": "[Reactivo #145] Determine el producto escalar de los vectores tridimensionales u = (2, -1, 3) y v = (4, 2, -1).",
        "opciones": {
            "A": "3",
            "B": "6",
            "C": "8",
            "D": "5"
        },
        "correcta": "A",
        "explicacion": "u &middot; v = (2)(4) + (-1)(2) + (3)(-1) = 8 - 2 - 3 = 3."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #146] Calcule el determinante de la matriz A = [[3, 2], [1, 4]].",
        "opciones": {
            "A": "10",
            "B": "14",
            "C": "12",
            "D": "8"
        },
        "correcta": "A",
        "explicacion": "det(A) = (3)(4) - (2)(1) = 12 - 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #147] Calcule el límite indeterminado: lim <sub>x&rarr;4</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 16</span><span>x - 4</span></div>.",
        "opciones": {
            "A": "8",
            "B": "4",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador: (x-4)(x+4)/(x-4) = x+4. Evaluando cuando x tienden a 4, resulta 4 + 4 = 8."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #148] Halle la primera derivada de la función exponencial mixta f(x) = e<sup>3x</sup> + 5x<sup>2</sup>.",
        "opciones": {
            "A": "3e<sup>3x</sup> + 10x",
            "B": "e<sup>3x</sup> + 10x",
            "C": "3e<sup>3x</sup> + 5x",
            "D": "e<sup>3x</sup> + 5x"
        },
        "correcta": "A",
        "explicacion": "Por regla de la cadena, la derivada de e<sup>3x</sup> es 3e<sup>3x</sup>, y por regla de potencias la de 5x<sup>2</sup> es 10x."
    },
    {
        "categoria": "Cónicas",
        "pregunta": "[Reactivo #149] Determine el centro C y el radio r de la circunferencia x<sup>2</sup> + y<sup>2</sup> - 6x + 4y - 3 = 0.",
        "opciones": {
            "A": "C(3, -2), r = 4",
            "B": "C(-3, 2), r = 4",
            "C": "C(3, -2), r = 16",
            "D": "C(-3, 2), r = 2"
        },
        "correcta": "A",
        "explicacion": "Completando cuadrados: (x-3)<sup>2</sup> + (y+2)<sup>2</sup> = 3 + 9 + 4 = 16. Por ende, Centro(3, -2) y Radio = &radic;16 = 4."
    },
    {
        "categoria": "Identidades Trigonométricas",
        "pregunta": "[Reactivo #150] Simplifique la siguiente expresión trigonométrica: sec(&theta;) &middot; cot(&theta;).",
        "opciones": {
            "A": "csc(&theta;)",
            "B": "sin(&theta;)",
            "C": "cos(&theta;)",
            "D": "tan(&theta;)"
        },
        "correcta": "A",
        "explicacion": "sec(&theta;) &middot; cot(&theta;) = (1/cos(&theta;)) &middot; (cos(&theta;)/sin(&theta;)) = 1/sin(&theta;) = csc(&theta;)."
    }
];

let preguntasSeleccionadas = [];
let indicePreguntaActual = 0;
let puntaje = 0;
const totalPreguntasPorJuego = 20; 

let comodinesDisponibles = { fiftyFifty: true, deleteOne: true, phone: true, public: true };

const screenHome = document.getElementById('screen-home');
const screenGame = document.getElementById('screen-game');
const screenResult = document.getElementById('screen-result');
const btnStart = document.getElementById('btn-start');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');
const progressText = document.getElementById('progress-text');
const scoreDisplay = document.getElementById('score-display');
const categoryDisplay = document.getElementById('category-display');
const questionDisplay = document.getElementById('question-display');
const optionsContainer = document.getElementById('options-container');
const feedbackDisplay = document.getElementById('feedback-display');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const helpBox = document.getElementById('help-box');

const lifeline5050 = document.getElementById('lifeline-5050');
const lifelineOne = document.getElementById('lifeline-one');
const lifelinePhone = document.getElementById('lifeline-phone');
const lifelinePublic = document.getElementById('lifeline-public');

btnStart.addEventListener('click', iniciarJuego);
btnNext.addEventListener('click', avanzarPregunta);
btnRestart.addEventListener('click', reiniciarJuego);

lifeline5050.addEventListener('click', usar5050);
lifelineOne.addEventListener('click', usarEliminarUna);
lifelinePhone.addEventListener('click', usarLlamada);
lifelinePublic.addEventListener('click', usarPublico);

function iniciarJuego() {
    let copiaBanco = [...bancoPreguntas];
    for (let i = copiaBanco.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copiaBanco[i], copiaBanco[j]] = [copiaBanco[j], copiaBanco[i]];
    }
    
    preguntasSeleccionadas = copiaBanco.slice(0, totalPreguntasPorJuego);
    indicePreguntaActual = 0;
    puntaje = 0;
    comodinesDisponibles = { fiftyFifty: true, deleteOne: true, phone: true, public: true };
    
    actualizarVisualComodines();
    cambiarPantalla(screenGame);
    mostrarPregunta();
}

function mostrarPregunta() {
    helpBox.style.display = 'none';
    feedbackDisplay.className = 'feedback-box';
    btnNext.style.display = 'none';
    scoreDisplay.textContent = puntaje;
    progressText.textContent = `Pregunta: ${indicePreguntaActual + 1}/${totalPreguntasPorJuego}`;

    const q = preguntasSeleccionadas[indicePreguntaActual];
    categoryDisplay.textContent = q.categoria;
    questionDisplay.innerHTML = `<span class="math-eq">${q.pregunta}</span>`;
    optionsContainer.innerHTML = '';

    const clavesOrdenadas = Object.keys(q.opciones).sort(() => Math.random() - 0.5);

    clavesOrdenadas.forEach(key => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.innerHTML = `<span class="math-eq"><strong>${key}:</strong> ${q.opciones[key]}</span>`;
        btn.setAttribute('data-option', key);
        btn.addEventListener('click', () => verificarRespuesta(key));
        optionsContainer.appendChild(btn);
    });
    
    actualizarVisualComodines();
}

function verificarRespuesta(opcionSeleccionada) {
    const q = preguntasSeleccionadas[indicePreguntaActual];
    const botones = optionsContainer.querySelectorAll('.btn-option');
    botones.forEach(btn => btn.disabled = true);
    bloquearComodinesTemporamente();

    if (opcionSeleccionada === q.correcta) {
        puntaje++;
        scoreDisplay.textContent = puntaje;
        botones.forEach(btn => {
            if(btn.getAttribute('data-option') === q.correcta) btn.classList.add('correct');
        });
        feedbackDisplay.className = 'feedback-box correct';
        feedbackTitle.textContent = "¡CORRECTO! 🎉";
    } else {
        botones.forEach(btn => {
            if(btn.getAttribute('data-option') === opcionSeleccionada) btn.classList.add('incorrect');
            if(btn.getAttribute('data-option') === q.correcta) btn.classList.add('correct');
        });
        feedbackDisplay.className = 'feedback-box incorrect';
        feedbackTitle.textContent = "INCORRECTO ❌";
    }
    feedbackText.innerHTML = q.explicacion;
    btnNext.style.display = 'inline-block';
}

function avanzarPregunta() {
    indicePreguntaActual++;
    if (indicePreguntaActual < totalPreguntasPorJuego) {
        mostrarPregunta();
    } else {
        finalizJuego();
    }
}

function finalizJuego() {
    cambiarPantalla(screenResult);
    document.getElementById('final-score').textContent = puntaje;
    const evalBox = document.getElementById('final-evaluation');
    if (puntaje === totalPreguntasPorJuego) {
        evalBox.innerHTML = "🏆 ¡Perfecto! Dominas con rigor científico todos los ejes analíticos.";
        evalBox.style.color = "var(--success)";
    } else if (puntaje >= totalPreguntasPorJuego * 0.7) {
        evalBox.innerHTML = "👍 ¡Muy bien! Posees habilidades matemáticas muy sólidas.";
        evalBox.style.color = "var(--secondary-color)";
    } else {
        evalBox.innerHTML = "📚 Analiza las retroalimentaciones para corregir errores conceptuales.";
        evalBox.style.color = "var(--accent-color)";
    }
}

function reiniciarJuego() { cambiarPantalla(screenHome); }
function cambiarPantalla(p) { [screenHome, screenGame, screenResult].forEach(s => s.classList.remove('active')); p.classList.add('active'); }

function actualizarVisualComodines() {
    lifeline5050.disabled = !comodinesDisponibles.fiftyFifty;
    lifelineOne.disabled = !comodinesDisponibles.deleteOne;
    lifelinePhone.disabled = !comodinesDisponibles.phone;
    lifelinePublic.disabled = !comodinesDisponibles.public;
}

function bloquearComodinesTemporamente() {
    [lifeline5050, lifelineOne, lifelinePhone, lifelinePublic].forEach(l => l.disabled = true);
}

function obtenerOpcionesIncorrectas() {
    const q = preguntasSeleccionadas[indicePreguntaActual];
    const botones = Array.from(optionsContainer.querySelectorAll('.btn-option'));
    return botones.filter(b => b.getAttribute('data-option') !== q.correcta && b.style.visibility !== 'hidden');
}

function usar5050() {
    if(!comodinesDisponibles.fiftyFifty) return;
    let incorrectas = obtenerOpcionesIncorrectas().sort(() => Math.random() - 0.5);
    for(let i=0; i<2; i++) { if(incorrectas[i]) incorrectas[i].style.visibility = 'hidden'; }
    comodinesDisponibles.fiftyFifty = false;
    actualizarVisualComodines();
}

function usarEliminarUna() {
    if(!comodinesDisponibles.deleteOne) return;
    let incorrectas = obtenerOpcionesIncorrectas();
    if(incorrectas.length > 0) { incorrectas[Math.floor(Math.random() * incorrectas.length)].style.visibility = 'hidden'; }
    comodinesDisponibles.deleteOne = false;
    actualizarVisualComodines();
}

function usarLlamada() {
    if(!comodinesDisponibles.phone) return;
    const q = preguntasSeleccionadas[indicePreguntaActual];
    helpBox.style.display = 'block';
    helpBox.innerHTML = `📞 <strong>El Tutor te sugiere:</strong> "Analizando las propiedades, considero que la opción correcta es la <strong>\${q.correcta}</strong>."`;
    comodinesDisponibles.phone = false;
    actualizarVisualComodines();
}

function usarPublico() {
    if(!comodinesDisponibles.public) return;
    const q = preguntasSeleccionadas[indicePreguntaActual];
    let dist = {A:8, B:7, C:10, D:5}; dist[q.correcta] = 75;
    helpBox.style.display = 'block';
    helpBox.innerHTML = `📊 <strong>Votación del Público:</strong><br>A: \${dist.A}% | B: \${dist.B}% | C: \${dist.C}% | D: \${dist.D}%`;
    comodinesDisponibles.public = false;
    actualizarVisualComodines();
}
