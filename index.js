// BANCO COMPLETO CARGADO CON ASOCIACIÓN ESTRICTA PREGUNTA-RESPUESTA
const bancoPreguntas = [
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #1] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #2] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #3] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #4] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #5] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #6] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #7] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "11",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #8] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "12e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 6x",
            "C": "e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 3x"
        },
        "correcta": "B",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #9] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #10] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #11] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 8",
            "C": "x = 10",
            "D": "x = 2"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #12] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = 1/2",
            "B": "m = 2",
            "C": "m = -2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #13] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #14] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #15] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #16] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #17] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #18] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #19] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "11",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #20] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "12e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 6x",
            "C": "e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 3x"
        },
        "correcta": "B",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #21] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #22] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #23] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 8",
            "C": "x = 10",
            "D": "x = 2"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #24] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = 1/2",
            "B": "m = 2",
            "C": "m = -2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #25] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #26] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #27] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #28] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #29] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #30] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #31] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "11",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #32] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "12e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 6x",
            "C": "e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 3x"
        },
        "correcta": "B",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #33] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #34] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #35] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 8",
            "C": "x = 10",
            "D": "x = 2"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #36] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = 1/2",
            "B": "m = 2",
            "C": "m = -2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #37] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #38] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #39] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #40] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #41] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #42] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #43] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "11",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #44] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "12e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 6x",
            "C": "e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 3x"
        },
        "correcta": "B",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #45] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #46] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #47] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 8",
            "C": "x = 10",
            "D": "x = 2"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #48] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = 1/2",
            "B": "m = 2",
            "C": "m = -2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #49] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #50] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #51] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #52] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #53] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #54] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #55] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "11",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #56] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "12e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 6x",
            "C": "e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 3x"
        },
        "correcta": "B",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #57] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #58] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #59] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 8",
            "C": "x = 10",
            "D": "x = 2"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #60] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = 1/2",
            "B": "m = 2",
            "C": "m = -2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #61] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #62] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #63] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #64] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #65] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #66] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #67] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "11",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #68] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "12e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 6x",
            "C": "e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 3x"
        },
        "correcta": "B",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #69] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #70] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #71] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 8",
            "C": "x = 10",
            "D": "x = 2"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #72] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = 1/2",
            "B": "m = 2",
            "C": "m = -2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #73] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #74] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #75] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #76] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #77] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #78] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #79] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "11",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #80] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "12e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 6x",
            "C": "e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 3x"
        },
        "correcta": "B",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #81] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #82] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #83] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 8",
            "C": "x = 10",
            "D": "x = 2"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #84] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = 1/2",
            "B": "m = 2",
            "C": "m = -2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #85] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #86] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #87] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #88] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #89] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #90] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #91] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "11",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #92] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "12e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 6x",
            "C": "e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 3x"
        },
        "correcta": "B",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #93] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #94] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #95] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 8",
            "C": "x = 10",
            "D": "x = 2"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #96] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = 1/2",
            "B": "m = 2",
            "C": "m = -2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #97] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #98] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #99] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #100] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #101] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #102] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #103] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "11",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #104] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "12e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 6x",
            "C": "e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 3x"
        },
        "correcta": "B",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #105] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #106] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #107] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 8",
            "C": "x = 10",
            "D": "x = 2"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #108] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = 1/2",
            "B": "m = 2",
            "C": "m = -2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #109] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #110] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #111] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #112] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #113] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #114] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #115] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "11",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #116] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "12e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 6x",
            "C": "e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 3x"
        },
        "correcta": "B",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #117] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #118] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #119] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 8",
            "C": "x = 10",
            "D": "x = 2"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #120] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = 1/2",
            "B": "m = 2",
            "C": "m = -2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #121] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #122] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #123] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #124] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #125] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #126] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #127] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "11",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #128] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "12e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 6x",
            "C": "e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 3x"
        },
        "correcta": "B",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #129] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #130] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #131] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 8",
            "C": "x = 10",
            "D": "x = 2"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #132] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = 1/2",
            "B": "m = 2",
            "C": "m = -2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #133] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #134] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #135] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #136] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #137] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #138] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #139] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "11",
            "C": "14",
            "D": "26"
        },
        "correcta": "C",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #140] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "12e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 6x",
            "C": "e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 3x"
        },
        "correcta": "B",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #141] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "10",
            "B": "5",
            "C": "0",
            "D": "No existe"
        },
        "correcta": "A",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #142] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 1",
            "C": "x = 4",
            "D": "x = 2"
        },
        "correcta": "D",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #143] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 8",
            "C": "x = 10",
            "D": "x = 2"
        },
        "correcta": "C",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #144] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = 1/2",
            "B": "m = 2",
            "C": "m = -2",
            "D": "m = 4"
        },
        "correcta": "B",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo #145] Calcule el determinante de la matriz de segundo orden: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "14",
            "B": "26",
            "C": "20",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "El determinante se calcula restando el producto de la diagonal secundaria del producto de la diagonal principal: det = (5 &times; 4) - (2 &times; 3) = 20 - 6 = 14."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo #146] Determine la primera derivada de la función exponencial f(x) = e<sup>4x</sup> + 3x<sup>2</sup>.",
        "opciones": {
            "A": "e<sup>4x</sup> + 6x",
            "B": "4e<sup>4x</sup> + 3x",
            "C": "12e<sup>4x</sup> + 6x",
            "D": "4e<sup>4x</sup> + 6x"
        },
        "correcta": "D",
        "explicacion": "Por la regla de la cadena, la derivada de e<sup>4x</sup> es 4e<sup>4x</sup>, y por la regla de la potencia la derivada de 3x<sup>2</sup> es 6x."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo #147] Calcule el límite indeterminado por factorización: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "0",
            "B": "No existe",
            "C": "10",
            "D": "5"
        },
        "correcta": "C",
        "explicacion": "Factorizando el numerador como una diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5). Cancelamos la indeterminación y evaluamos lim(x + 5) cuando x &rarr; 5, dando como resultado 5 + 5 = 10."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo #148] Resuelva la ecuación exponencial para hallar el valor de x: 3<sup>2x - 1</sup> = 27.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 2",
            "C": "x = 3",
            "D": "x = 1"
        },
        "correcta": "B",
        "explicacion": "Expresamos 27 en base 3 como 3<sup>3</sup>. Igualando los exponentes obtenemos: 2x - 1 = 3 &rArr; 2x = 4 &rArr; x = 2."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo #149] Determine la solución real para la ecuación logarítmica: log<sub>2</sub>(x + 6) = 4.",
        "opciones": {
            "A": "x = 10",
            "B": "x = 2",
            "C": "x = 16",
            "D": "x = 8"
        },
        "correcta": "A",
        "explicacion": "Aplicando la definición fundamental del logaritmo: x + 6 = 2<sup>4</sup> &rArr; x + 6 = 16 &rArr; x = 10."
    },
    {
        "categoria": "Geometría Analítica",
        "pregunta": "[Reactivo #150] Halle la pendiente (m) de la recta cuya ecuación general es: 4x - 2y + 8 = 0.",
        "opciones": {
            "A": "m = -2",
            "B": "m = 4",
            "C": "m = 1/2",
            "D": "m = 2"
        },
        "correcta": "D",
        "explicacion": "Despejamos la variable y para llevar la ecuación a su forma explícita (y = mx + b): -2y = -4x - 8 &rArr; y = 2x + 4. Por lo tanto, la pendiente m es igual a 2."
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

    // Renderizado formal respetando el mapeo estricto y la distribución de opciones
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
    if (puntaje >= 135) {
        evalBox.innerHTML = "🏆 ¡Excelencia Absoluta! Tienes un dominio total sobre los 150 reactivos analizados.";
        evalBox.style.color = "var(--success)";
    } else if (puntaje >= 100) {
        evalBox.innerHTML = "👍 ¡Buen desempeño! Sólidas competencias para el ingreso a carreras científicas.";
        evalBox.style.color = "var(--secondary-color)";
    } else {
        evalBox.innerHTML = "📚 Es recomendable repasar los desarrollos explicados para consolidar conceptos.";
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
    helpBox.innerHTML = '📞 <strong>El Tutor te sugiere:</strong> "Analizando con cuidado las propiedades del ejercicio, estoy seguro de que la opción correcta es la <strong>' + q.correcta + '</strong>."';
    comodinesDisponibles.phone = false;
    actualizarVisualComodines();
}

function usarPublico() {
    if(!comodinesDisponibles.public) return;
    const q = bancoPreguntas[indicePreguntaActual];
    let dist = {A:10, B:15, C:8, D:12}; dist[q.correcta] = 65;
    helpBox.style.display = 'block';
    helpBox.innerHTML = '📊 ' + q.correcta + ' <strong>Votación estadística del Auditorio Académico:</strong><br>A: ' + dist.A + '% | B: ' + dist.B + '% | C: ' + dist.C + '% | D: ' + dist.D + '%';
    comodinesDisponibles.public = false;
    actualizarVisualComodines();
}