// BANCO COMPLETO CON RESPUESTAS ABSOLUTAMENTE REPARTIDAS (A, B, C, D)
const bancoPreguntas = [
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #1] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>1</span></div><div class='matrix-row'><span>2</span><span>5</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "14",
            "B": "10",
            "C": "12",
            "D": "8"
        },
        "correcta": "B",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #2] Calcule el límite indeterminado lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "3",
            "C": "6",
            "D": "9"
        },
        "correcta": "C",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #3] Halle la primera derivada de f(x) = 5x<sup>5</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10x",
            "B": "12x<sup>4</sup> &minus; 10x",
            "C": "12x<sup>3</sup> &minus; 10",
            "D": "4x<sup>3</sup> &minus; 2x"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #4] Resuelva para x: 2<sup>5x &minus; 1</sup> = 52.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #5] Determine el valor real de x en la ecuación: log<sub>5</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 3"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #6] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>6</span><span>1</span></div><div class='matrix-row'><span>2</span><span>5</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "12",
            "B": "10",
            "C": "8",
            "D": "14"
        },
        "correcta": "B",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #7] Calcule el límite indeterminado lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 5</span></div>.",
        "opciones": {
            "A": "6",
            "B": "3",
            "C": "9",
            "D": "0"
        },
        "correcta": "A",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #8] Halle la primera derivada de f(x) = 5x<sup>6</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10",
            "B": "4x<sup>3</sup> &minus; 2x",
            "C": "12x<sup>3</sup> &minus; 10x",
            "D": "12x<sup>4</sup> &minus; 10x"
        },
        "correcta": "C",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #9] Resuelva para x: 2<sup>5x &minus; 1</sup> = 52.",
        "opciones": {
            "A": "x = 1",
            "B": "x = 3",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #10] Determine el valor real de x en la ecuación: log<sub>5</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 9",
            "C": "x = 4",
            "D": "x = 1"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #11] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>7</span><span>1</span></div><div class='matrix-row'><span>2</span><span>6</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "8",
            "B": "14",
            "C": "12",
            "D": "10"
        },
        "correcta": "D",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #12] Calcule el límite indeterminado lim<sub>x &rarr; 6</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 6</span></div>.",
        "opciones": {
            "A": "6",
            "B": "9",
            "C": "0",
            "D": "3"
        },
        "correcta": "A",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #13] Halle la primera derivada de f(x) = 6x<sup>7</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "4x<sup>3</sup> &minus; 2x",
            "B": "12x<sup>3</sup> &minus; 10x",
            "C": "12x<sup>3</sup> &minus; 10",
            "D": "12x<sup>4</sup> &minus; 10x"
        },
        "correcta": "B",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #14] Resuelva para x: 2<sup>6x &minus; 1</sup> = 62.",
        "opciones": {
            "A": "x = 2",
            "B": "x = 3",
            "C": "x = 1",
            "D": "x = 4"
        },
        "correcta": "A",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #15] Determine el valor real de x en la ecuación: log<sub>6</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 4",
            "C": "x = 1",
            "D": "x = 3"
        },
        "correcta": "B",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #16] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>8</span><span>1</span></div><div class='matrix-row'><span>2</span><span>7</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "14",
            "B": "12",
            "C": "8",
            "D": "10"
        },
        "correcta": "D",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #17] Calcule el límite indeterminado lim<sub>x &rarr; 7</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 7</span></div>.",
        "opciones": {
            "A": "6",
            "B": "9",
            "C": "3",
            "D": "0"
        },
        "correcta": "A",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #18] Halle la primera derivada de f(x) = 7x<sup>8</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10x",
            "B": "12x<sup>4</sup> &minus; 10x",
            "C": "12x<sup>3</sup> &minus; 10",
            "D": "4x<sup>3</sup> &minus; 2x"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #19] Resuelva para x: 2<sup>7x &minus; 1</sup> = 72.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 3",
            "C": "x = 1",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #20] Determine el valor real de x en la ecuación: log<sub>7</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 3",
            "C": "x = 1",
            "D": "x = 9"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #21] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>9</span><span>1</span></div><div class='matrix-row'><span>2</span><span>8</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "10",
            "B": "12",
            "C": "8",
            "D": "14"
        },
        "correcta": "A",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #22] Calcule el límite indeterminado lim<sub>x &rarr; 8</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 8</span></div>.",
        "opciones": {
            "A": "3",
            "B": "9",
            "C": "0",
            "D": "6"
        },
        "correcta": "D",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #23] Halle la primera derivada de f(x) = 8x<sup>9</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>4</sup> &minus; 10x",
            "B": "4x<sup>3</sup> &minus; 2x",
            "C": "12x<sup>3</sup> &minus; 10",
            "D": "12x<sup>3</sup> &minus; 10x"
        },
        "correcta": "D",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #24] Resuelva para x: 2<sup>8x &minus; 1</sup> = 82.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 2",
            "C": "x = 1",
            "D": "x = 4"
        },
        "correcta": "B",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #25] Determine el valor real de x en la ecuación: log<sub>8</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 3",
            "C": "x = 1",
            "D": "x = 4"
        },
        "correcta": "D",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #26] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>10</span><span>1</span></div><div class='matrix-row'><span>2</span><span>9</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "8",
            "B": "10",
            "C": "12",
            "D": "14"
        },
        "correcta": "B",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #27] Calcule el límite indeterminado lim<sub>x &rarr; 9</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 9</span></div>.",
        "opciones": {
            "A": "6",
            "B": "3",
            "C": "9",
            "D": "0"
        },
        "correcta": "A",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #28] Halle la primera derivada de f(x) = 9x<sup>10</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10",
            "B": "12x<sup>4</sup> &minus; 10x",
            "C": "4x<sup>3</sup> &minus; 2x",
            "D": "12x<sup>3</sup> &minus; 10x"
        },
        "correcta": "D",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #29] Resuelva para x: 2<sup>9x &minus; 1</sup> = 92.",
        "opciones": {
            "A": "x = 1",
            "B": "x = 2",
            "C": "x = 4",
            "D": "x = 3"
        },
        "correcta": "B",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #30] Determine el valor real de x en la ecuación: log<sub>9</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 1",
            "C": "x = 3",
            "D": "x = 4"
        },
        "correcta": "D",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #31] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>11</span><span>1</span></div><div class='matrix-row'><span>2</span><span>10</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "12",
            "B": "8",
            "C": "10",
            "D": "14"
        },
        "correcta": "C",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #32] Calcule el límite indeterminado lim<sub>x &rarr; 10</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 10</span></div>.",
        "opciones": {
            "A": "9",
            "B": "3",
            "C": "0",
            "D": "6"
        },
        "correcta": "D",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #33] Halle la primera derivada de f(x) = 10x<sup>11</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10",
            "B": "4x<sup>3</sup> &minus; 2x",
            "C": "12x<sup>3</sup> &minus; 10x",
            "D": "12x<sup>4</sup> &minus; 10x"
        },
        "correcta": "C",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #34] Resuelva para x: 2<sup>10x &minus; 1</sup> = 102.",
        "opciones": {
            "A": "x = 2",
            "B": "x = 4",
            "C": "x = 1",
            "D": "x = 3"
        },
        "correcta": "A",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #35] Determine el valor real de x en la ecuación: log<sub>10</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 9",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #36] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>12</span><span>1</span></div><div class='matrix-row'><span>2</span><span>11</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "14",
            "B": "12",
            "C": "10",
            "D": "8"
        },
        "correcta": "C",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #37] Calcule el límite indeterminado lim<sub>x &rarr; 11</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 11</span></div>.",
        "opciones": {
            "A": "3",
            "B": "6",
            "C": "0",
            "D": "9"
        },
        "correcta": "B",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #38] Halle la primera derivada de f(x) = 11x<sup>12</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10",
            "B": "4x<sup>3</sup> &minus; 2x",
            "C": "12x<sup>4</sup> &minus; 10x",
            "D": "12x<sup>3</sup> &minus; 10x"
        },
        "correcta": "D",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #39] Resuelva para x: 2<sup>11x &minus; 1</sup> = 112.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 3",
            "C": "x = 1",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #40] Determine el valor real de x en la ecuación: log<sub>11</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 9",
            "C": "x = 4",
            "D": "x = 1"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #41] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>13</span><span>1</span></div><div class='matrix-row'><span>2</span><span>12</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "12",
            "B": "10",
            "C": "8",
            "D": "14"
        },
        "correcta": "B",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #42] Calcule el límite indeterminado lim<sub>x &rarr; 12</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 12</span></div>.",
        "opciones": {
            "A": "0",
            "B": "3",
            "C": "9",
            "D": "6"
        },
        "correcta": "D",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #43] Halle la primera derivada de f(x) = 12x<sup>13</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10x",
            "B": "12x<sup>4</sup> &minus; 10x",
            "C": "4x<sup>3</sup> &minus; 2x",
            "D": "12x<sup>3</sup> &minus; 10"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #44] Resuelva para x: 2<sup>12x &minus; 1</sup> = 122.",
        "opciones": {
            "A": "x = 2",
            "B": "x = 4",
            "C": "x = 1",
            "D": "x = 3"
        },
        "correcta": "A",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #45] Determine el valor real de x en la ecuación: log<sub>12</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 1",
            "C": "x = 9",
            "D": "x = 3"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #46] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>14</span><span>1</span></div><div class='matrix-row'><span>2</span><span>13</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "8",
            "B": "10",
            "C": "12",
            "D": "14"
        },
        "correcta": "B",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #47] Calcule el límite indeterminado lim<sub>x &rarr; 13</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 13</span></div>.",
        "opciones": {
            "A": "3",
            "B": "9",
            "C": "0",
            "D": "6"
        },
        "correcta": "D",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #48] Halle la primera derivada de f(x) = 13x<sup>14</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10",
            "B": "12x<sup>3</sup> &minus; 10x",
            "C": "4x<sup>3</sup> &minus; 2x",
            "D": "12x<sup>4</sup> &minus; 10x"
        },
        "correcta": "B",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #49] Resuelva para x: 2<sup>13x &minus; 1</sup> = 132.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 1",
            "C": "x = 2",
            "D": "x = 3"
        },
        "correcta": "C",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #50] Determine el valor real de x en la ecuación: log<sub>13</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 1",
            "C": "x = 3",
            "D": "x = 9"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #51] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>15</span><span>1</span></div><div class='matrix-row'><span>2</span><span>115</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "12",
            "B": "14",
            "C": "8",
            "D": "10"
        },
        "correcta": "D",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #52] Calcule el límite indeterminado lim<sub>x &rarr; 115</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 115</span></div>.",
        "opciones": {
            "A": "0",
            "B": "9",
            "C": "6",
            "D": "3"
        },
        "correcta": "C",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #53] Halle la primera derivada de f(x) = 115x<sup>15</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10x",
            "B": "12x<sup>3</sup> &minus; 10",
            "C": "12x<sup>4</sup> &minus; 10x",
            "D": "4x<sup>3</sup> &minus; 2x"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #54] Resuelva para x: 2<sup>115x &minus; 1</sup> = 1152.",
        "opciones": {
            "A": "x = 1",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 4"
        },
        "correcta": "B",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #55] Determine el valor real de x en la ecuación: log<sub>115</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 1",
            "B": "x = 4",
            "C": "x = 3",
            "D": "x = 9"
        },
        "correcta": "B",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #56] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>16</span><span>1</span></div><div class='matrix-row'><span>2</span><span>15</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "12",
            "B": "14",
            "C": "10",
            "D": "8"
        },
        "correcta": "C",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #57] Calcule el límite indeterminado lim<sub>x &rarr; 15</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 15</span></div>.",
        "opciones": {
            "A": "6",
            "B": "9",
            "C": "3",
            "D": "0"
        },
        "correcta": "A",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #58] Halle la primera derivada de f(x) = 15x<sup>16</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>4</sup> &minus; 10x",
            "B": "12x<sup>3</sup> &minus; 10",
            "C": "12x<sup>3</sup> &minus; 10x",
            "D": "4x<sup>3</sup> &minus; 2x"
        },
        "correcta": "C",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #59] Resuelva para x: 2<sup>15x &minus; 1</sup> = 152.",
        "opciones": {
            "A": "x = 2",
            "B": "x = 3",
            "C": "x = 4",
            "D": "x = 1"
        },
        "correcta": "A",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #60] Determine el valor real de x en la ecuación: log<sub>15</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 1",
            "B": "x = 9",
            "C": "x = 3",
            "D": "x = 4"
        },
        "correcta": "D",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #61] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>17</span><span>1</span></div><div class='matrix-row'><span>2</span><span>16</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "10",
            "B": "12",
            "C": "8",
            "D": "14"
        },
        "correcta": "A",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #62] Calcule el límite indeterminado lim<sub>x &rarr; 16</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 16</span></div>.",
        "opciones": {
            "A": "3",
            "B": "9",
            "C": "0",
            "D": "6"
        },
        "correcta": "D",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #63] Halle la primera derivada de f(x) = 16x<sup>17</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "4x<sup>3</sup> &minus; 2x",
            "B": "12x<sup>4</sup> &minus; 10x",
            "C": "12x<sup>3</sup> &minus; 10x",
            "D": "12x<sup>3</sup> &minus; 10"
        },
        "correcta": "C",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #64] Resuelva para x: 2<sup>16x &minus; 1</sup> = 162.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 1",
            "D": "x = 3"
        },
        "correcta": "B",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #65] Determine el valor real de x en la ecuación: log<sub>16</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 9",
            "C": "x = 1",
            "D": "x = 4"
        },
        "correcta": "D",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #66] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>18</span><span>1</span></div><div class='matrix-row'><span>2</span><span>17</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "12",
            "B": "10",
            "C": "8",
            "D": "14"
        },
        "correcta": "B",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #67] Calcule el límite indeterminado lim<sub>x &rarr; 17</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 17</span></div>.",
        "opciones": {
            "A": "0",
            "B": "3",
            "C": "6",
            "D": "9"
        },
        "correcta": "C",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #68] Halle la primera derivada de f(x) = 17x<sup>18</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>4</sup> &minus; 10x",
            "B": "4x<sup>3</sup> &minus; 2x",
            "C": "12x<sup>3</sup> &minus; 10",
            "D": "12x<sup>3</sup> &minus; 10x"
        },
        "correcta": "D",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #69] Resuelva para x: 2<sup>17x &minus; 1</sup> = 172.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 3",
            "C": "x = 2",
            "D": "x = 1"
        },
        "correcta": "C",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #70] Determine el valor real de x en la ecuación: log<sub>17</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 3",
            "C": "x = 1",
            "D": "x = 9"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #71] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>19</span><span>1</span></div><div class='matrix-row'><span>2</span><span>18</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "12",
            "B": "8",
            "C": "14",
            "D": "10"
        },
        "correcta": "D",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #72] Calcule el límite indeterminado lim<sub>x &rarr; 18</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 18</span></div>.",
        "opciones": {
            "A": "3",
            "B": "9",
            "C": "0",
            "D": "6"
        },
        "correcta": "D",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #73] Halle la primera derivada de f(x) = 18x<sup>19</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10x",
            "B": "12x<sup>3</sup> &minus; 10",
            "C": "4x<sup>3</sup> &minus; 2x",
            "D": "12x<sup>4</sup> &minus; 10x"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #74] Resuelva para x: 2<sup>18x &minus; 1</sup> = 182.",
        "opciones": {
            "A": "x = 2",
            "B": "x = 3",
            "C": "x = 4",
            "D": "x = 1"
        },
        "correcta": "A",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #75] Determine el valor real de x en la ecuación: log<sub>18</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 1",
            "B": "x = 3",
            "C": "x = 9",
            "D": "x = 4"
        },
        "correcta": "D",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #76] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>20</span><span>1</span></div><div class='matrix-row'><span>2</span><span>19</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "14",
            "B": "8",
            "C": "12",
            "D": "10"
        },
        "correcta": "D",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #77] Calcule el límite indeterminado lim<sub>x &rarr; 19</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 19</span></div>.",
        "opciones": {
            "A": "6",
            "B": "3",
            "C": "0",
            "D": "9"
        },
        "correcta": "A",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #78] Halle la primera derivada de f(x) = 19x<sup>20</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10x",
            "B": "4x<sup>3</sup> &minus; 2x",
            "C": "12x<sup>4</sup> &minus; 10x",
            "D": "12x<sup>3</sup> &minus; 10"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #79] Resuelva para x: 2<sup>19x &minus; 1</sup> = 192.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 4",
            "C": "x = 2",
            "D": "x = 1"
        },
        "correcta": "C",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #80] Determine el valor real de x en la ecuación: log<sub>19</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 3"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #81] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>21</span><span>1</span></div><div class='matrix-row'><span>2</span><span>20</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "10",
            "B": "8",
            "C": "14",
            "D": "12"
        },
        "correcta": "A",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #82] Calcule el límite indeterminado lim<sub>x &rarr; 20</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 20</span></div>.",
        "opciones": {
            "A": "0",
            "B": "9",
            "C": "6",
            "D": "3"
        },
        "correcta": "C",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #83] Halle la primera derivada de f(x) = 20x<sup>21</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "4x<sup>3</sup> &minus; 2x",
            "B": "12x<sup>3</sup> &minus; 10x",
            "C": "12x<sup>4</sup> &minus; 10x",
            "D": "12x<sup>3</sup> &minus; 10"
        },
        "correcta": "B",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #84] Resuelva para x: 2<sup>20x &minus; 1</sup> = 202.",
        "opciones": {
            "A": "x = 2",
            "B": "x = 1",
            "C": "x = 3",
            "D": "x = 4"
        },
        "correcta": "A",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #85] Determine el valor real de x en la ecuación: log<sub>20</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 3",
            "C": "x = 4",
            "D": "x = 1"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #86] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>22</span><span>1</span></div><div class='matrix-row'><span>2</span><span>21</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "14",
            "B": "8",
            "C": "12",
            "D": "10"
        },
        "correcta": "D",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #87] Calcule el límite indeterminado lim<sub>x &rarr; 21</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 21</span></div>.",
        "opciones": {
            "A": "9",
            "B": "6",
            "C": "0",
            "D": "3"
        },
        "correcta": "B",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #88] Halle la primera derivada de f(x) = 21x<sup>22</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10",
            "B": "12x<sup>3</sup> &minus; 10x",
            "C": "4x<sup>3</sup> &minus; 2x",
            "D": "12x<sup>4</sup> &minus; 10x"
        },
        "correcta": "B",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #89] Resuelva para x: 2<sup>21x &minus; 1</sup> = 212.",
        "opciones": {
            "A": "x = 1",
            "B": "x = 3",
            "C": "x = 2",
            "D": "x = 4"
        },
        "correcta": "C",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #90] Determine el valor real de x en la ecuación: log<sub>21</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 3",
            "C": "x = 4",
            "D": "x = 1"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #91] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>23</span><span>1</span></div><div class='matrix-row'><span>2</span><span>22</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "12",
            "B": "10",
            "C": "8",
            "D": "14"
        },
        "correcta": "B",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #92] Calcule el límite indeterminado lim<sub>x &rarr; 22</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 22</span></div>.",
        "opciones": {
            "A": "6",
            "B": "3",
            "C": "9",
            "D": "0"
        },
        "correcta": "A",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #93] Halle la primera derivada de f(x) = 22x<sup>23</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>4</sup> &minus; 10x",
            "B": "4x<sup>3</sup> &minus; 2x",
            "C": "12x<sup>3</sup> &minus; 10x",
            "D": "12x<sup>3</sup> &minus; 10"
        },
        "correcta": "C",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #94] Resuelva para x: 2<sup>22x &minus; 1</sup> = 222.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 4",
            "C": "x = 1",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #95] Determine el valor real de x en la ecuación: log<sub>22</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 3",
            "C": "x = 9",
            "D": "x = 1"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #96] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>24</span><span>1</span></div><div class='matrix-row'><span>2</span><span>23</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "14",
            "B": "12",
            "C": "8",
            "D": "10"
        },
        "correcta": "D",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #97] Calcule el límite indeterminado lim<sub>x &rarr; 23</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 23</span></div>.",
        "opciones": {
            "A": "9",
            "B": "0",
            "C": "6",
            "D": "3"
        },
        "correcta": "C",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #98] Halle la primera derivada de f(x) = 23x<sup>24</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "4x<sup>3</sup> &minus; 2x",
            "B": "12x<sup>3</sup> &minus; 10x",
            "C": "12x<sup>3</sup> &minus; 10",
            "D": "12x<sup>4</sup> &minus; 10x"
        },
        "correcta": "B",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #99] Resuelva para x: 2<sup>23x &minus; 1</sup> = 232.",
        "opciones": {
            "A": "x = 1",
            "B": "x = 3",
            "C": "x = 2",
            "D": "x = 4"
        },
        "correcta": "C",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #100] Determine el valor real de x en la ecuación: log<sub>23</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 1",
            "C": "x = 9",
            "D": "x = 3"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #101] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>25</span><span>1</span></div><div class='matrix-row'><span>2</span><span>225</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "14",
            "B": "10",
            "C": "12",
            "D": "8"
        },
        "correcta": "B",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #102] Calcule el límite indeterminado lim<sub>x &rarr; 225</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 225</span></div>.",
        "opciones": {
            "A": "0",
            "B": "6",
            "C": "9",
            "D": "3"
        },
        "correcta": "B",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #103] Halle la primera derivada de f(x) = 225x<sup>25</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10x",
            "B": "4x<sup>3</sup> &minus; 2x",
            "C": "12x<sup>3</sup> &minus; 10",
            "D": "12x<sup>4</sup> &minus; 10x"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #104] Resuelva para x: 2<sup>225x &minus; 1</sup> = 2252.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 3",
            "C": "x = 2",
            "D": "x = 1"
        },
        "correcta": "C",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #105] Determine el valor real de x en la ecuación: log<sub>225</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 3",
            "C": "x = 4",
            "D": "x = 1"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #106] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>26</span><span>1</span></div><div class='matrix-row'><span>2</span><span>25</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "10",
            "B": "12",
            "C": "14",
            "D": "8"
        },
        "correcta": "A",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #107] Calcule el límite indeterminado lim<sub>x &rarr; 25</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 25</span></div>.",
        "opciones": {
            "A": "6",
            "B": "9",
            "C": "0",
            "D": "3"
        },
        "correcta": "A",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #108] Halle la primera derivada de f(x) = 25x<sup>26</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "4x<sup>3</sup> &minus; 2x",
            "B": "12x<sup>3</sup> &minus; 10x",
            "C": "12x<sup>4</sup> &minus; 10x",
            "D": "12x<sup>3</sup> &minus; 10"
        },
        "correcta": "B",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #109] Resuelva para x: 2<sup>25x &minus; 1</sup> = 252.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #110] Determine el valor real de x en la ecuación: log<sub>25</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 9",
            "C": "x = 4",
            "D": "x = 1"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #111] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>27</span><span>1</span></div><div class='matrix-row'><span>2</span><span>26</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "10",
            "B": "8",
            "C": "12",
            "D": "14"
        },
        "correcta": "A",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #112] Calcule el límite indeterminado lim<sub>x &rarr; 26</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 26</span></div>.",
        "opciones": {
            "A": "0",
            "B": "6",
            "C": "9",
            "D": "3"
        },
        "correcta": "B",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #113] Halle la primera derivada de f(x) = 26x<sup>27</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10",
            "B": "12x<sup>4</sup> &minus; 10x",
            "C": "12x<sup>3</sup> &minus; 10x",
            "D": "4x<sup>3</sup> &minus; 2x"
        },
        "correcta": "C",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #114] Resuelva para x: 2<sup>26x &minus; 1</sup> = 262.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 3",
            "C": "x = 1",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #115] Determine el valor real de x en la ecuación: log<sub>26</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 1",
            "C": "x = 3",
            "D": "x = 9"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #116] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>28</span><span>1</span></div><div class='matrix-row'><span>2</span><span>27</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "14",
            "B": "12",
            "C": "8",
            "D": "10"
        },
        "correcta": "D",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #117] Calcule el límite indeterminado lim<sub>x &rarr; 27</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 27</span></div>.",
        "opciones": {
            "A": "6",
            "B": "0",
            "C": "3",
            "D": "9"
        },
        "correcta": "A",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #118] Halle la primera derivada de f(x) = 27x<sup>28</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10x",
            "B": "12x<sup>4</sup> &minus; 10x",
            "C": "12x<sup>3</sup> &minus; 10",
            "D": "4x<sup>3</sup> &minus; 2x"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #119] Resuelva para x: 2<sup>27x &minus; 1</sup> = 272.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 2",
            "C": "x = 4",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #120] Determine el valor real de x en la ecuación: log<sub>27</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 1",
            "B": "x = 4",
            "C": "x = 9",
            "D": "x = 3"
        },
        "correcta": "B",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #121] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>29</span><span>1</span></div><div class='matrix-row'><span>2</span><span>28</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "10",
            "B": "14",
            "C": "12",
            "D": "8"
        },
        "correcta": "A",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #122] Calcule el límite indeterminado lim<sub>x &rarr; 28</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 28</span></div>.",
        "opciones": {
            "A": "6",
            "B": "3",
            "C": "0",
            "D": "9"
        },
        "correcta": "A",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #123] Halle la primera derivada de f(x) = 28x<sup>29</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10x",
            "B": "12x<sup>4</sup> &minus; 10x",
            "C": "4x<sup>3</sup> &minus; 2x",
            "D": "12x<sup>3</sup> &minus; 10"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #124] Resuelva para x: 2<sup>28x &minus; 1</sup> = 282.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #125] Determine el valor real de x en la ecuación: log<sub>28</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 3",
            "C": "x = 9",
            "D": "x = 1"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #126] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>30</span><span>1</span></div><div class='matrix-row'><span>2</span><span>29</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "10",
            "B": "14",
            "C": "8",
            "D": "12"
        },
        "correcta": "A",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #127] Calcule el límite indeterminado lim<sub>x &rarr; 29</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 29</span></div>.",
        "opciones": {
            "A": "3",
            "B": "6",
            "C": "9",
            "D": "0"
        },
        "correcta": "B",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #128] Halle la primera derivada de f(x) = 29x<sup>30</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "4x<sup>3</sup> &minus; 2x",
            "B": "12x<sup>4</sup> &minus; 10x",
            "C": "12x<sup>3</sup> &minus; 10x",
            "D": "12x<sup>3</sup> &minus; 10"
        },
        "correcta": "C",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #129] Resuelva para x: 2<sup>29x &minus; 1</sup> = 292.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #130] Determine el valor real de x en la ecuación: log<sub>29</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 9",
            "D": "x = 4"
        },
        "correcta": "D",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #131] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>31</span><span>1</span></div><div class='matrix-row'><span>2</span><span>30</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "14",
            "B": "12",
            "C": "10",
            "D": "8"
        },
        "correcta": "C",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #132] Calcule el límite indeterminado lim<sub>x &rarr; 30</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 30</span></div>.",
        "opciones": {
            "A": "0",
            "B": "6",
            "C": "3",
            "D": "9"
        },
        "correcta": "B",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #133] Halle la primera derivada de f(x) = 30x<sup>31</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "4x<sup>3</sup> &minus; 2x",
            "B": "12x<sup>3</sup> &minus; 10x",
            "C": "12x<sup>3</sup> &minus; 10",
            "D": "12x<sup>4</sup> &minus; 10x"
        },
        "correcta": "B",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #134] Resuelva para x: 2<sup>30x &minus; 1</sup> = 302.",
        "opciones": {
            "A": "x = 1",
            "B": "x = 4",
            "C": "x = 2",
            "D": "x = 3"
        },
        "correcta": "C",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #135] Determine el valor real de x en la ecuación: log<sub>30</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 4",
            "C": "x = 1",
            "D": "x = 3"
        },
        "correcta": "B",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #136] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>32</span><span>1</span></div><div class='matrix-row'><span>2</span><span>31</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "10",
            "B": "8",
            "C": "12",
            "D": "14"
        },
        "correcta": "A",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #137] Calcule el límite indeterminado lim<sub>x &rarr; 31</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 31</span></div>.",
        "opciones": {
            "A": "0",
            "B": "9",
            "C": "6",
            "D": "3"
        },
        "correcta": "C",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #138] Halle la primera derivada de f(x) = 31x<sup>32</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "4x<sup>3</sup> &minus; 2x",
            "B": "12x<sup>4</sup> &minus; 10x",
            "C": "12x<sup>3</sup> &minus; 10x",
            "D": "12x<sup>3</sup> &minus; 10"
        },
        "correcta": "C",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #139] Resuelva para x: 2<sup>31x &minus; 1</sup> = 312.",
        "opciones": {
            "A": "x = 2",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 3"
        },
        "correcta": "A",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #140] Determine el valor real de x en la ecuación: log<sub>31</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 3"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #141] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>33</span><span>1</span></div><div class='matrix-row'><span>2</span><span>32</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "12",
            "B": "10",
            "C": "14",
            "D": "8"
        },
        "correcta": "B",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #142] Calcule el límite indeterminado lim<sub>x &rarr; 32</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 32</span></div>.",
        "opciones": {
            "A": "9",
            "B": "3",
            "C": "6",
            "D": "0"
        },
        "correcta": "C",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #143] Halle la primera derivada de f(x) = 32x<sup>33</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>3</sup> &minus; 10x",
            "B": "12x<sup>3</sup> &minus; 10",
            "C": "12x<sup>4</sup> &minus; 10x",
            "D": "4x<sup>3</sup> &minus; 2x"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #144] Resuelva para x: 2<sup>32x &minus; 1</sup> = 322.",
        "opciones": {
            "A": "x = 1",
            "B": "x = 3",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #145] Determine el valor real de x en la ecuación: log<sub>32</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 9",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
    },
    {
        "categoria": "Matrices",
        "pregunta": "[Reactivo #146] Dada la matriz <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>34</span><span>1</span></div><div class='matrix-row'><span>2</span><span>33</span></div></div></div>, determine su determinante.",
        "opciones": {
            "A": "14",
            "B": "8",
            "C": "12",
            "D": "10"
        },
        "correcta": "D",
        "explicacion": "El determinante es (4 &times; 3) &minus; (1 &times; 2) = 12 &minus; 2 = 10."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #147] Calcule el límite indeterminado lim<sub>x &rarr; 33</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> &minus; 9</span><span>x &minus; 33</span></div>.",
        "opciones": {
            "A": "9",
            "B": "6",
            "C": "3",
            "D": "0"
        },
        "correcta": "B",
        "explicacion": "Factorizando x<sup>2</sup>-9 como (x-3)(x+3), cancelamos (x-3) y evaluamos x+3 cuando x&rarr;3, dando 3+3=6."
    },
    {
        "categoria": "Derivadas",
        "pregunta": "[Reactivo #148] Halle la primera derivada de f(x) = 33x<sup>34</sup> &minus; 5x<sup>2</sup> + 7.",
        "opciones": {
            "A": "12x<sup>4</sup> &minus; 10x",
            "B": "4x<sup>3</sup> &minus; 2x",
            "C": "12x<sup>3</sup> &minus; 10",
            "D": "12x<sup>3</sup> &minus; 10x"
        },
        "correcta": "D",
        "explicacion": "Por regla de potencias: d/dx(3x<sup>4</sup>) = 12x<sup>3</sup> y d/dx(&minus;5x<sup>2</sup>) = &minus;10x."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #149] Resuelva para x: 2<sup>33x &minus; 1</sup> = 332.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 2",
            "C": "x = 4",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos los exponentes: 3x &minus; 1 = 5 &rArr; 3x = 6 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #150] Determine el valor real de x en la ecuación: log<sub>33</sub>(x + 5) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 1",
            "C": "x = 3",
            "D": "x = 9"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición: x + 5 = 3<sup>2</sup> &rArr; x + 5 = 9 &rArr; x = 4."
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

    // Renderizado estrictamente en el orden de claves (A, B, C, D) 
    // cuyas respuestas han sido previamente barajadas en la base de datos
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
        evalBox.innerHTML = "🏆 ¡Rendimiento Sobresaliente! Dominas el pensum de matemáticas.";
        evalBox.style.color = "var(--success)";
    } else if (puntaje >= 90) {
        evalBox.innerHTML = "👍 ¡Buen Trabajo! Tienes bases muy sólidas.";
        evalBox.style.color = "var(--secondary-color)";
    } else {
        evalBox.innerHTML = "📚 Sigue estudiando para dominar los 150 reactivos de corrido.";
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
    helpBox.innerHTML = '📞 <strong>El Tutor Académico te sugiere:</strong> "Considero firmemente que la opción correcta es la <strong>' + q.correcta + '</strong>."';
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