// BANCO MASIVO TOTALMENTE DISTRIBUIDO Y ROTATIVO DE 150 PREGUNTAS
const bancoPreguntas = [
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #1] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "10",
            "B": "26",
            "C": "22",
            "D": "14"
        },
        "correcta": "D",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #2] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>3</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[4, 4], [4, 9]]",
            "B": "[[4, 0], [0, 6]]",
            "C": "[[2, 0], [0, 3]]",
            "D": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>"
        },
        "correcta": "D",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #3] Halle el límite analítico: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 25</span><span>x &minus; 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #4] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>3</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; 4",
            "B": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "D": "3x &minus; ln(x)"
        },
        "correcta": "C",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #5] Resuelva la expresión logarítmica fundamental: log<sub>3</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 5",
            "B": "x = 9",
            "C": "x = 3",
            "D": "x = 4"
        },
        "correcta": "A",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #6] Determine la unión formal de los intervalos A = (&minus;&infin;, 3] y B = (1, 6].",
        "opciones": {
            "A": "(&minus;&infin;, 6]",
            "B": "[3, 6]",
            "C": "(&minus;&infin;, 1)",
            "D": "(1, 3]"
        },
        "correcta": "A",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #7] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 3) y B(5, 12).",
        "opciones": {
            "A": "m = 4",
            "B": "m = 2",
            "C": "m = 3",
            "D": "m = 1"
        },
        "correcta": "C",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #8] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "26",
            "B": "22",
            "C": "14",
            "D": "10"
        },
        "correcta": "C",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #9] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>5</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[2, 0], [0, 3]]",
            "B": "[[4, 0], [0, 6]]",
            "C": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "D": "[[4, 4], [4, 9]]"
        },
        "correcta": "C",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #10] Halle el límite analítico: lim<sub>x &rarr; 7</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 27</span><span>x &minus; 7</span></div>.",
        "opciones": {
            "A": "10",
            "B": "No existe",
            "C": "5",
            "D": "0"
        },
        "correcta": "A",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #11] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>5</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "B": "3x<sup>2</sup> &minus; 4",
            "C": "3x &minus; ln(x)",
            "D": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>"
        },
        "correcta": "D",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #12] Resuelva la expresión logarítmica fundamental: log<sub>5</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 9",
            "C": "x = 5",
            "D": "x = 4"
        },
        "correcta": "C",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #13] Determine la unión formal de los intervalos A = (&minus;&infin;, 5] y B = (1, 6].",
        "opciones": {
            "A": "[3, 6]",
            "B": "(&minus;&infin;, 6]",
            "C": "(1, 3]",
            "D": "(&minus;&infin;, 1)"
        },
        "correcta": "B",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #14] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 5) y B(7, 12).",
        "opciones": {
            "A": "m = 4",
            "B": "m = 1",
            "C": "m = 2",
            "D": "m = 3"
        },
        "correcta": "D",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #15] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>8</span><span>2</span></div><div class='matrix-row'><span>6</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "22",
            "D": "10"
        },
        "correcta": "A",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #16] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>6</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[4, 4], [4, 9]]",
            "B": "[[2, 0], [0, 3]]",
            "C": "[[4, 0], [0, 6]]",
            "D": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>"
        },
        "correcta": "D",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #17] Halle el límite analítico: lim<sub>x &rarr; 8</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 28</span><span>x &minus; 8</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #18] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>6</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; 4",
            "B": "3x &minus; ln(x)",
            "C": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "D": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>"
        },
        "correcta": "C",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #19] Resuelva la expresión logarítmica fundamental: log<sub>6</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 9",
            "C": "x = 5",
            "D": "x = 4"
        },
        "correcta": "C",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #20] Determine la unión formal de los intervalos A = (&minus;&infin;, 6] y B = (1, 6].",
        "opciones": {
            "A": "(1, 3]",
            "B": "(&minus;&infin;, 6]",
            "C": "(&minus;&infin;, 1)",
            "D": "[3, 6]"
        },
        "correcta": "B",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #21] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 6) y B(8, 12).",
        "opciones": {
            "A": "m = 3",
            "B": "m = 4",
            "C": "m = 1",
            "D": "m = 2"
        },
        "correcta": "A",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #22] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>9</span><span>2</span></div><div class='matrix-row'><span>7</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "22",
            "C": "10",
            "D": "26"
        },
        "correcta": "A",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #23] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>7</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "B": "[[4, 4], [4, 9]]",
            "C": "[[4, 0], [0, 6]]",
            "D": "[[2, 0], [0, 3]]"
        },
        "correcta": "A",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #24] Halle el límite analítico: lim<sub>x &rarr; 9</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 29</span><span>x &minus; 9</span></div>.",
        "opciones": {
            "A": "10",
            "B": "No existe",
            "C": "5",
            "D": "0"
        },
        "correcta": "A",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #25] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>7</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "B": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x<sup>2</sup> &minus; 4",
            "D": "3x &minus; ln(x)"
        },
        "correcta": "B",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #26] Resuelva la expresión logarítmica fundamental: log<sub>7</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 5",
            "B": "x = 3",
            "C": "x = 4",
            "D": "x = 9"
        },
        "correcta": "A",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #27] Determine la unión formal de los intervalos A = (&minus;&infin;, 7] y B = (1, 6].",
        "opciones": {
            "A": "[3, 6]",
            "B": "(&minus;&infin;, 1)",
            "C": "(&minus;&infin;, 6]",
            "D": "(1, 3]"
        },
        "correcta": "C",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #28] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 7) y B(9, 12).",
        "opciones": {
            "A": "m = 2",
            "B": "m = 1",
            "C": "m = 3",
            "D": "m = 4"
        },
        "correcta": "C",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #29] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>10</span><span>2</span></div><div class='matrix-row'><span>8</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "22",
            "B": "26",
            "C": "14",
            "D": "10"
        },
        "correcta": "C",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #30] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>8</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[2, 0], [0, 3]]",
            "B": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "C": "[[4, 0], [0, 6]]",
            "D": "[[4, 4], [4, 9]]"
        },
        "correcta": "B",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #31] Halle el límite analítico: lim<sub>x &rarr; 10</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 210</span><span>x &minus; 10</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "No existe",
            "D": "0"
        },
        "correcta": "A",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #32] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>8</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "B": "3x &minus; ln(x)",
            "C": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "D": "3x<sup>2</sup> &minus; 4"
        },
        "correcta": "A",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #33] Resuelva la expresión logarítmica fundamental: log<sub>8</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 5",
            "C": "x = 9",
            "D": "x = 3"
        },
        "correcta": "B",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #34] Determine la unión formal de los intervalos A = (&minus;&infin;, 8] y B = (1, 6].",
        "opciones": {
            "A": "(&minus;&infin;, 6]",
            "B": "[3, 6]",
            "C": "(1, 3]",
            "D": "(&minus;&infin;, 1)"
        },
        "correcta": "A",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #35] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 8) y B(10, 12).",
        "opciones": {
            "A": "m = 2",
            "B": "m = 4",
            "C": "m = 3",
            "D": "m = 1"
        },
        "correcta": "C",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #36] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>11</span><span>2</span></div><div class='matrix-row'><span>9</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "26",
            "B": "10",
            "C": "22",
            "D": "14"
        },
        "correcta": "D",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #37] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "B": "[[2, 0], [0, 3]]",
            "C": "[[4, 0], [0, 6]]",
            "D": "[[4, 4], [4, 9]]"
        },
        "correcta": "A",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #38] Halle el límite analítico: lim<sub>x &rarr; 11</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 211</span><span>x &minus; 11</span></div>.",
        "opciones": {
            "A": "5",
            "B": "10",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "B",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #39] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>9</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; 4",
            "B": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x &minus; ln(x)",
            "D": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>"
        },
        "correcta": "B",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #40] Resuelva la expresión logarítmica fundamental: log<sub>9</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 5",
            "C": "x = 9",
            "D": "x = 4"
        },
        "correcta": "B",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #41] Determine la unión formal de los intervalos A = (&minus;&infin;, 9] y B = (1, 6].",
        "opciones": {
            "A": "[3, 6]",
            "B": "(&minus;&infin;, 6]",
            "C": "(1, 3]",
            "D": "(&minus;&infin;, 1)"
        },
        "correcta": "B",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #42] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 9) y B(11, 12).",
        "opciones": {
            "A": "m = 4",
            "B": "m = 2",
            "C": "m = 3",
            "D": "m = 1"
        },
        "correcta": "C",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #43] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>12</span><span>2</span></div><div class='matrix-row'><span>10</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "22",
            "B": "26",
            "C": "10",
            "D": "14"
        },
        "correcta": "D",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #44] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>10</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[4, 4], [4, 9]]",
            "B": "[[2, 0], [0, 3]]",
            "C": "[[4, 0], [0, 6]]",
            "D": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>"
        },
        "correcta": "D",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #45] Halle el límite analítico: lim<sub>x &rarr; 12</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 212</span><span>x &minus; 12</span></div>.",
        "opciones": {
            "A": "0",
            "B": "5",
            "C": "No existe",
            "D": "10"
        },
        "correcta": "D",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #46] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>10</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "B": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x &minus; ln(x)",
            "D": "3x<sup>2</sup> &minus; 4"
        },
        "correcta": "B",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #47] Resuelva la expresión logarítmica fundamental: log<sub>10</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 5",
            "C": "x = 9",
            "D": "x = 4"
        },
        "correcta": "B",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #48] Determine la unión formal de los intervalos A = (&minus;&infin;, 10] y B = (1, 6].",
        "opciones": {
            "A": "(&minus;&infin;, 6]",
            "B": "(&minus;&infin;, 1)",
            "C": "(1, 3]",
            "D": "[3, 6]"
        },
        "correcta": "A",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #49] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 10) y B(12, 12).",
        "opciones": {
            "A": "m = 1",
            "B": "m = 3",
            "C": "m = 2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #50] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>111</span><span>2</span></div><div class='matrix-row'><span>11</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "26",
            "B": "10",
            "C": "22",
            "D": "14"
        },
        "correcta": "D",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #51] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>11</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[4, 4], [4, 9]]",
            "B": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "C": "[[4, 0], [0, 6]]",
            "D": "[[2, 0], [0, 3]]"
        },
        "correcta": "B",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #52] Halle el límite analítico: lim<sub>x &rarr; 111</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 2111</span><span>x &minus; 111</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #53] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>11</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "B": "3x &minus; ln(x)",
            "C": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "D": "3x<sup>2</sup> &minus; 4"
        },
        "correcta": "A",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #54] Resuelva la expresión logarítmica fundamental: log<sub>11</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 9",
            "C": "x = 3",
            "D": "x = 5"
        },
        "correcta": "D",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #55] Determine la unión formal de los intervalos A = (&minus;&infin;, 11] y B = (1, 6].",
        "opciones": {
            "A": "[3, 6]",
            "B": "(1, 3]",
            "C": "(&minus;&infin;, 1)",
            "D": "(&minus;&infin;, 6]"
        },
        "correcta": "D",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #56] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 11) y B(111, 12).",
        "opciones": {
            "A": "m = 3",
            "B": "m = 1",
            "C": "m = 2",
            "D": "m = 4"
        },
        "correcta": "A",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #57] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>14</span><span>2</span></div><div class='matrix-row'><span>12</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "10",
            "D": "22"
        },
        "correcta": "A",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #58] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>12</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "B": "[[4, 0], [0, 6]]",
            "C": "[[4, 4], [4, 9]]",
            "D": "[[2, 0], [0, 3]]"
        },
        "correcta": "A",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #59] Halle el límite analítico: lim<sub>x &rarr; 14</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 214</span><span>x &minus; 14</span></div>.",
        "opciones": {
            "A": "10",
            "B": "No existe",
            "C": "0",
            "D": "5"
        },
        "correcta": "A",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #60] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>12</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x &minus; ln(x)",
            "B": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "D": "3x<sup>2</sup> &minus; 4"
        },
        "correcta": "B",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #61] Resuelva la expresión logarítmica fundamental: log<sub>12</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 5",
            "B": "x = 9",
            "C": "x = 3",
            "D": "x = 4"
        },
        "correcta": "A",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #62] Determine la unión formal de los intervalos A = (&minus;&infin;, 12] y B = (1, 6].",
        "opciones": {
            "A": "[3, 6]",
            "B": "(&minus;&infin;, 1)",
            "C": "(1, 3]",
            "D": "(&minus;&infin;, 6]"
        },
        "correcta": "D",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #63] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 12) y B(14, 12).",
        "opciones": {
            "A": "m = 2",
            "B": "m = 1",
            "C": "m = 3",
            "D": "m = 4"
        },
        "correcta": "C",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #64] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>15</span><span>2</span></div><div class='matrix-row'><span>13</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "22",
            "D": "10"
        },
        "correcta": "A",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #65] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>13</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[4, 4], [4, 9]]",
            "B": "[[2, 0], [0, 3]]",
            "C": "[[4, 0], [0, 6]]",
            "D": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>"
        },
        "correcta": "D",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #66] Halle el límite analítico: lim<sub>x &rarr; 15</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 215</span><span>x &minus; 15</span></div>.",
        "opciones": {
            "A": "10",
            "B": "0",
            "C": "5",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #67] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>13</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; 4",
            "B": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "D": "3x &minus; ln(x)"
        },
        "correcta": "C",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #68] Resuelva la expresión logarítmica fundamental: log<sub>13</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 5",
            "C": "x = 9",
            "D": "x = 4"
        },
        "correcta": "B",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #69] Determine la unión formal de los intervalos A = (&minus;&infin;, 13] y B = (1, 6].",
        "opciones": {
            "A": "(1, 3]",
            "B": "[3, 6]",
            "C": "(&minus;&infin;, 6]",
            "D": "(&minus;&infin;, 1)"
        },
        "correcta": "C",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #70] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 13) y B(15, 12).",
        "opciones": {
            "A": "m = 2",
            "B": "m = 3",
            "C": "m = 4",
            "D": "m = 1"
        },
        "correcta": "B",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #71] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>16</span><span>2</span></div><div class='matrix-row'><span>14</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "10",
            "B": "26",
            "C": "22",
            "D": "14"
        },
        "correcta": "D",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #72] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>14</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "B": "[[4, 4], [4, 9]]",
            "C": "[[2, 0], [0, 3]]",
            "D": "[[4, 0], [0, 6]]"
        },
        "correcta": "A",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #73] Halle el límite analítico: lim<sub>x &rarr; 16</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 216</span><span>x &minus; 16</span></div>.",
        "opciones": {
            "A": "10",
            "B": "No existe",
            "C": "5",
            "D": "0"
        },
        "correcta": "A",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #74] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>14</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "B": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x &minus; ln(x)",
            "D": "3x<sup>2</sup> &minus; 4"
        },
        "correcta": "B",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #75] Resuelva la expresión logarítmica fundamental: log<sub>14</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 9"
        },
        "correcta": "C",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #76] Determine la unión formal de los intervalos A = (&minus;&infin;, 14] y B = (1, 6].",
        "opciones": {
            "A": "(&minus;&infin;, 1)",
            "B": "[3, 6]",
            "C": "(&minus;&infin;, 6]",
            "D": "(1, 3]"
        },
        "correcta": "C",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #77] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 14) y B(16, 12).",
        "opciones": {
            "A": "m = 2",
            "B": "m = 1",
            "C": "m = 4",
            "D": "m = 3"
        },
        "correcta": "D",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #78] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>17</span><span>2</span></div><div class='matrix-row'><span>15</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "26",
            "B": "10",
            "C": "22",
            "D": "14"
        },
        "correcta": "D",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #79] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>15</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[2, 0], [0, 3]]",
            "B": "[[4, 0], [0, 6]]",
            "C": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "D": "[[4, 4], [4, 9]]"
        },
        "correcta": "C",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #80] Halle el límite analítico: lim<sub>x &rarr; 17</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 217</span><span>x &minus; 17</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "No existe",
            "D": "0"
        },
        "correcta": "A",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #81] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>15</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "B": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x &minus; ln(x)",
            "D": "3x<sup>2</sup> &minus; 4"
        },
        "correcta": "B",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #82] Resuelva la expresión logarítmica fundamental: log<sub>15</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 9",
            "C": "x = 5",
            "D": "x = 3"
        },
        "correcta": "C",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #83] Determine la unión formal de los intervalos A = (&minus;&infin;, 15] y B = (1, 6].",
        "opciones": {
            "A": "(1, 3]",
            "B": "[3, 6]",
            "C": "(&minus;&infin;, 6]",
            "D": "(&minus;&infin;, 1)"
        },
        "correcta": "C",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #84] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 15) y B(17, 12).",
        "opciones": {
            "A": "m = 4",
            "B": "m = 1",
            "C": "m = 3",
            "D": "m = 2"
        },
        "correcta": "C",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #85] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>18</span><span>2</span></div><div class='matrix-row'><span>16</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "22",
            "B": "10",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #86] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>16</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "B": "[[4, 4], [4, 9]]",
            "C": "[[2, 0], [0, 3]]",
            "D": "[[4, 0], [0, 6]]"
        },
        "correcta": "A",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #87] Halle el límite analítico: lim<sub>x &rarr; 18</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 218</span><span>x &minus; 18</span></div>.",
        "opciones": {
            "A": "0",
            "B": "5",
            "C": "10",
            "D": "No existe"
        },
        "correcta": "C",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #88] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>16</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; 4",
            "B": "3x &minus; ln(x)",
            "C": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "D": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>"
        },
        "correcta": "D",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #89] Resuelva la expresión logarítmica fundamental: log<sub>16</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 9",
            "C": "x = 4",
            "D": "x = 5"
        },
        "correcta": "D",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #90] Determine la unión formal de los intervalos A = (&minus;&infin;, 16] y B = (1, 6].",
        "opciones": {
            "A": "(&minus;&infin;, 1)",
            "B": "(1, 3]",
            "C": "[3, 6]",
            "D": "(&minus;&infin;, 6]"
        },
        "correcta": "D",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #91] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 16) y B(18, 12).",
        "opciones": {
            "A": "m = 1",
            "B": "m = 3",
            "C": "m = 4",
            "D": "m = 2"
        },
        "correcta": "B",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #92] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>19</span><span>2</span></div><div class='matrix-row'><span>17</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "22",
            "B": "10",
            "C": "26",
            "D": "14"
        },
        "correcta": "D",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #93] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>17</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[4, 4], [4, 9]]",
            "B": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "C": "[[2, 0], [0, 3]]",
            "D": "[[4, 0], [0, 6]]"
        },
        "correcta": "B",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #94] Halle el límite analítico: lim<sub>x &rarr; 19</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 219</span><span>x &minus; 19</span></div>.",
        "opciones": {
            "A": "5",
            "B": "10",
            "C": "No existe",
            "D": "0"
        },
        "correcta": "B",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #95] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>17</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "B": "3x &minus; ln(x)",
            "C": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "D": "3x<sup>2</sup> &minus; 4"
        },
        "correcta": "A",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #96] Resuelva la expresión logarítmica fundamental: log<sub>17</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 3"
        },
        "correcta": "C",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #97] Determine la unión formal de los intervalos A = (&minus;&infin;, 17] y B = (1, 6].",
        "opciones": {
            "A": "(&minus;&infin;, 1)",
            "B": "[3, 6]",
            "C": "(&minus;&infin;, 6]",
            "D": "(1, 3]"
        },
        "correcta": "C",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #98] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 17) y B(19, 12).",
        "opciones": {
            "A": "m = 2",
            "B": "m = 1",
            "C": "m = 4",
            "D": "m = 3"
        },
        "correcta": "D",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #99] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>20</span><span>2</span></div><div class='matrix-row'><span>18</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "22",
            "B": "26",
            "C": "14",
            "D": "10"
        },
        "correcta": "C",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #100] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>18</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[4, 0], [0, 6]]",
            "B": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "C": "[[4, 4], [4, 9]]",
            "D": "[[2, 0], [0, 3]]"
        },
        "correcta": "B",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #101] Halle el límite analítico: lim<sub>x &rarr; 20</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 220</span><span>x &minus; 20</span></div>.",
        "opciones": {
            "A": "No existe",
            "B": "0",
            "C": "5",
            "D": "10"
        },
        "correcta": "D",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #102] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>18</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; 4",
            "B": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x &minus; ln(x)",
            "D": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>"
        },
        "correcta": "B",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #103] Resuelva la expresión logarítmica fundamental: log<sub>18</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 5",
            "B": "x = 4",
            "C": "x = 3",
            "D": "x = 9"
        },
        "correcta": "A",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #104] Determine la unión formal de los intervalos A = (&minus;&infin;, 18] y B = (1, 6].",
        "opciones": {
            "A": "(&minus;&infin;, 1)",
            "B": "(1, 3]",
            "C": "[3, 6]",
            "D": "(&minus;&infin;, 6]"
        },
        "correcta": "D",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #105] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 18) y B(20, 12).",
        "opciones": {
            "A": "m = 2",
            "B": "m = 1",
            "C": "m = 4",
            "D": "m = 3"
        },
        "correcta": "D",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #106] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>21</span><span>2</span></div><div class='matrix-row'><span>19</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "22",
            "B": "14",
            "C": "26",
            "D": "10"
        },
        "correcta": "B",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #107] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>19</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[4, 4], [4, 9]]",
            "B": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "C": "[[2, 0], [0, 3]]",
            "D": "[[4, 0], [0, 6]]"
        },
        "correcta": "B",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #108] Halle el límite analítico: lim<sub>x &rarr; 21</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 221</span><span>x &minus; 21</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #109] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>19</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x &minus; ln(x)",
            "B": "3x<sup>2</sup> &minus; 4",
            "C": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "D": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>"
        },
        "correcta": "D",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #110] Resuelva la expresión logarítmica fundamental: log<sub>19</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 5",
            "B": "x = 3",
            "C": "x = 4",
            "D": "x = 9"
        },
        "correcta": "A",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #111] Determine la unión formal de los intervalos A = (&minus;&infin;, 19] y B = (1, 6].",
        "opciones": {
            "A": "[3, 6]",
            "B": "(&minus;&infin;, 6]",
            "C": "(1, 3]",
            "D": "(&minus;&infin;, 1)"
        },
        "correcta": "B",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #112] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 19) y B(21, 12).",
        "opciones": {
            "A": "m = 3",
            "B": "m = 1",
            "C": "m = 4",
            "D": "m = 2"
        },
        "correcta": "A",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #113] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>22</span><span>2</span></div><div class='matrix-row'><span>20</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "26",
            "B": "14",
            "C": "10",
            "D": "22"
        },
        "correcta": "B",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #114] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>20</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "B": "[[4, 0], [0, 6]]",
            "C": "[[4, 4], [4, 9]]",
            "D": "[[2, 0], [0, 3]]"
        },
        "correcta": "A",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #115] Halle el límite analítico: lim<sub>x &rarr; 22</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 222</span><span>x &minus; 22</span></div>.",
        "opciones": {
            "A": "10",
            "B": "No existe",
            "C": "0",
            "D": "5"
        },
        "correcta": "A",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #116] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>20</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; 4",
            "B": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "D": "3x &minus; ln(x)"
        },
        "correcta": "C",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #117] Resuelva la expresión logarítmica fundamental: log<sub>20</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 4",
            "C": "x = 5",
            "D": "x = 9"
        },
        "correcta": "C",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #118] Determine la unión formal de los intervalos A = (&minus;&infin;, 20] y B = (1, 6].",
        "opciones": {
            "A": "(&minus;&infin;, 6]",
            "B": "[3, 6]",
            "C": "(1, 3]",
            "D": "(&minus;&infin;, 1)"
        },
        "correcta": "A",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #119] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 20) y B(22, 12).",
        "opciones": {
            "A": "m = 1",
            "B": "m = 4",
            "C": "m = 2",
            "D": "m = 3"
        },
        "correcta": "D",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #120] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>221</span><span>2</span></div><div class='matrix-row'><span>21</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "22",
            "B": "10",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #121] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>21</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[4, 0], [0, 6]]",
            "B": "[[2, 0], [0, 3]]",
            "C": "[[4, 4], [4, 9]]",
            "D": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>"
        },
        "correcta": "D",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #122] Halle el límite analítico: lim<sub>x &rarr; 221</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 2221</span><span>x &minus; 221</span></div>.",
        "opciones": {
            "A": "5",
            "B": "No existe",
            "C": "10",
            "D": "0"
        },
        "correcta": "C",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #123] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>21</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; 4",
            "B": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "D": "3x &minus; ln(x)"
        },
        "correcta": "B",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #124] Resuelva la expresión logarítmica fundamental: log<sub>21</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 5",
            "B": "x = 3",
            "C": "x = 4",
            "D": "x = 9"
        },
        "correcta": "A",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #125] Determine la unión formal de los intervalos A = (&minus;&infin;, 21] y B = (1, 6].",
        "opciones": {
            "A": "(&minus;&infin;, 1)",
            "B": "(&minus;&infin;, 6]",
            "C": "(1, 3]",
            "D": "[3, 6]"
        },
        "correcta": "B",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #126] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 21) y B(221, 12).",
        "opciones": {
            "A": "m = 4",
            "B": "m = 1",
            "C": "m = 3",
            "D": "m = 2"
        },
        "correcta": "C",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #127] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>24</span><span>2</span></div><div class='matrix-row'><span>22</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "22",
            "B": "14",
            "C": "26",
            "D": "10"
        },
        "correcta": "B",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #128] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>22</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[4, 4], [4, 9]]",
            "B": "[[4, 0], [0, 6]]",
            "C": "[[2, 0], [0, 3]]",
            "D": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>"
        },
        "correcta": "D",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #129] Halle el límite analítico: lim<sub>x &rarr; 24</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 224</span><span>x &minus; 24</span></div>.",
        "opciones": {
            "A": "5",
            "B": "10",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "B",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #130] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>22</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x &minus; ln(x)",
            "B": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x<sup>2</sup> &minus; 4",
            "D": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>"
        },
        "correcta": "D",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #131] Resuelva la expresión logarítmica fundamental: log<sub>22</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 5",
            "C": "x = 9",
            "D": "x = 3"
        },
        "correcta": "B",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #132] Determine la unión formal de los intervalos A = (&minus;&infin;, 22] y B = (1, 6].",
        "opciones": {
            "A": "(&minus;&infin;, 1)",
            "B": "(&minus;&infin;, 6]",
            "C": "[3, 6]",
            "D": "(1, 3]"
        },
        "correcta": "B",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #133] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 22) y B(24, 12).",
        "opciones": {
            "A": "m = 3",
            "B": "m = 1",
            "C": "m = 4",
            "D": "m = 2"
        },
        "correcta": "A",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #134] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>25</span><span>2</span></div><div class='matrix-row'><span>23</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "10",
            "B": "26",
            "C": "22",
            "D": "14"
        },
        "correcta": "D",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #135] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>23</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[2, 0], [0, 3]]",
            "B": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "C": "[[4, 4], [4, 9]]",
            "D": "[[4, 0], [0, 6]]"
        },
        "correcta": "B",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #136] Halle el límite analítico: lim<sub>x &rarr; 25</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 225</span><span>x &minus; 25</span></div>.",
        "opciones": {
            "A": "0",
            "B": "5",
            "C": "10",
            "D": "No existe"
        },
        "correcta": "C",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #137] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>23</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> &minus; 4",
            "B": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "C": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "D": "3x &minus; ln(x)"
        },
        "correcta": "B",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #138] Resuelva la expresión logarítmica fundamental: log<sub>23</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 5",
            "C": "x = 4",
            "D": "x = 9"
        },
        "correcta": "B",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #139] Determine la unión formal de los intervalos A = (&minus;&infin;, 23] y B = (1, 6].",
        "opciones": {
            "A": "(&minus;&infin;, 6]",
            "B": "[3, 6]",
            "C": "(&minus;&infin;, 1)",
            "D": "(1, 3]"
        },
        "correcta": "A",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #140] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 23) y B(25, 12).",
        "opciones": {
            "A": "m = 1",
            "B": "m = 3",
            "C": "m = 2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #141] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>26</span><span>2</span></div><div class='matrix-row'><span>24</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "22",
            "D": "10"
        },
        "correcta": "A",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #142] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>24</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[4, 4], [4, 9]]",
            "B": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "C": "[[4, 0], [0, 6]]",
            "D": "[[2, 0], [0, 3]]"
        },
        "correcta": "B",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #143] Halle el límite analítico: lim<sub>x &rarr; 26</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 226</span><span>x &minus; 26</span></div>.",
        "opciones": {
            "A": "5",
            "B": "0",
            "C": "No existe",
            "D": "10"
        },
        "correcta": "D",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #144] Determine la derivada de la función con exponente compuesto: f(x) = x<sup>24</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x</span></div>.",
        "opciones": {
            "A": "3x<sup>2</sup> + <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>",
            "B": "3x &minus; ln(x)",
            "C": "3x<sup>2</sup> &minus; 4",
            "D": "3x<sup>2</sup> &minus; <div class='fraction'><span class='numerator'>4</span><span>x<sup>2</sup></span></div>"
        },
        "correcta": "A",
        "explicacion": "La derivada de x<sup>3</sup> es 3x<sup>2</sup>. Reescribiendo el segundo término como &minus;4x<sup>&minus;1</sup>, su derivada es (&minus;4)(&minus;1)x<sup>&minus;2</sup> = 4/x<sup>2</sup>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #145] Resuelva la expresión logarítmica fundamental: log<sub>24</sub>(2x &minus; 1) = 2.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 3",
            "C": "x = 4",
            "D": "x = 5"
        },
        "correcta": "D",
        "explicacion": "Aplicamos la definición formal de logaritmo: 2x &minus; 1 = 3<sup>2</sup> &rArr; 2x &minus; 1 = 9 &rArr; 2x = 10 &rArr; x = 5."
    },
    {
        "categoria": "Intervalos",
        "pregunta": "[Reactivo #146] Determine la unión formal de los intervalos A = (&minus;&infin;, 24] y B = (1, 6].",
        "opciones": {
            "A": "(&minus;&infin;, 6]",
            "B": "(1, 3]",
            "C": "(&minus;&infin;, 1)",
            "D": "[3, 6]"
        },
        "correcta": "A",
        "explicacion": "La unión fusiona todos los elementos de ambos intervalos, abarcando desde el extremo inferior de A hasta el extremo superior de B."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #147] Halle la pendiente (m) de la recta tangente que cruza por los puntos coordenados A(2, 24) y B(26, 12).",
        "opciones": {
            "A": "m = 1",
            "B": "m = 3",
            "C": "m = 2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "La pendiente se calcula mediante la fórmula m = <div class='fraction'><span class='numerator'>y<sub>2</sub> &minus; y<sub>1</sub></span><span>x<sub>2</sub> &minus; x<sub>1</sub></span></div> = <div class='fraction'><span class='numerator'>12 &minus; 3</span><span>5 &minus; 2</span></div> = 3."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #148] Calcule el determinante de la matriz bidimensional <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>27</span><span>2</span></div><div class='matrix-row'><span>25</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "22",
            "B": "14",
            "C": "26",
            "D": "10"
        },
        "correcta": "B",
        "explicacion": "El determinante se obtiene mediante el producto de los elementos de la diagonal principal menos la diagonal secundaria: (5 &times; 4) &minus; (2 &times; 3) = 20 &minus; 6 = 14."
    },
    {
        "categoria": "Matrices y Determinantes",
        "pregunta": "[Reactivo #149] Dada la siguiente matriz identidad modificada <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>2</span><span>0</span></div><div class='matrix-row'><span>0</span><span>25</span></div></div></div>, halle su matriz al cuadrado.",
        "opciones": {
            "A": "[[2, 0], [0, 3]]",
            "B": "<div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>0</span></div><div class='matrix-row'><span>0</span><span>9</span></div></div></div>",
            "C": "[[4, 0], [0, 6]]",
            "D": "[[4, 4], [4, 9]]"
        },
        "correcta": "B",
        "explicacion": "Al multiplicar una matriz diagonal por sí misma, cada uno de los coeficientes de la diagonal se eleva directamente al cuadrado."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #150] Halle el límite analítico: lim<sub>x &rarr; 27</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 227</span><span>x &minus; 27</span></div>.",
        "opciones": {
            "A": "5",
            "B": "10",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "B",
        "explicacion": "Factorizamos la diferencia de cuadrados en el numerador: (x &minus; 5)(x + 5). Cancelamos el término indeterminado (x &minus; 5), lo que nos deja lim (x + 5) = 5 + 5 = 10."
    }
];

let indicePreguntaActual = 0;
let puntaje = 0;
const totalPreguntasPorJuego = 150; 

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
    progressText.textContent = "Pregunta: " + (indicePreguntaActual + 1) + "/" + totalPreguntasPorJuego;

    const q = bancoPreguntas[indicePreguntaActual];
    categoryDisplay.textContent = q.categoria;
    questionDisplay.innerHTML = '<span class="math-eq">' + q.pregunta + '</span>';
    optionsContainer.innerHTML = '';

    Object.keys(q.opciones).forEach(key => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.innerHTML = '<span class="math-eq"><strong>' + key + ':</strong> ' + q.opciones[key] + '</span>';
        btn.setAttribute('data-option', key);
        btn.addEventListener('click', () => verificarRespuesta(key));
        optionsContainer.appendChild(btn);
    });
    
    actualizarVisualComodines();
}

function verificarRespuesta(opcionSeleccionada) {
    const q = bancoPreguntas[indicePreguntaActual];
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
        finalizarJuego();
    }
}

function finalizarJuego() {
    cambiarPantalla(screenResult);
    document.getElementById('final-score').textContent = puntaje;
    const evalBox = document.getElementById('final-evaluation');
    if (puntaje >= 130) {
        evalBox.innerHTML = "🏆 ¡Rendimiento Sobresaliente! Dominas perfectamente todo el pensum universitario de matemáticas de corrido.";
        evalBox.style.color = "var(--success)";
    } else if (puntaje >= 90) {
        evalBox.innerHTML = "👍 ¡Buen Trabajo! Tienes bases sólidas, pero revisa los reactivos fallidos.";
        evalBox.style.color = "var(--secondary-color)";
    } else {
        evalBox.innerHTML = "📚 Sigue estudiando. Realizar un examen completo de 150 preguntas requiere práctica constante.";
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
    const q = bancoPreguntas[indicePreguntaActual];
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
    const q = bancoPreguntas[indicePreguntaActual];
    helpBox.style.display = 'block';
    helpBox.innerHTML = '📞 <strong>El Tutor Académico te sugiere:</strong> "Aplicando las leyes analíticas, considero firmemente que la opción correcta es la <strong>' + q.correcta + '</strong>."';
    comodinesDisponibles.phone = false;
    actualizarVisualComodines();
}

function usarPublico() {
    if(!comodinesDisponibles.public) return;
    const q = bancoPreguntas[indicePreguntaActual];
    let dist = {A:12, B:14, C:10, D:9}; dist[q.correcta] = 65;
    helpBox.style.display = 'block';
    helpBox.innerHTML = '📊 <strong>Votación del Auditorio Universitario:</strong><br>A: ' + dist.A + '% | B: ' + dist.B + '% | C: ' + dist.C + '% | D: ' + dist.D + '%';
    comodinesDisponibles.public = false;
    actualizarVisualComodines();
}