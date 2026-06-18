// BANCO COMPLETO CON RESPUESTAS BALANCEADAS EQUITATIVAMENTE EN LAS CUATRO OPCIONES (A, B, C, D)
const bancoPreguntas = [
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #1] Dado el intervalo abierto A = (1, 8) y el intervalo cerrado B = [2, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "[2, 8)",
            "B": "(1, 2]",
            "C": "[1, 8]",
            "D": "[2, 8]"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 2 (cerrado) y terminar A en 8 (abierto), la zona común es [2, 8), que está ubicada en la opción <strong>A</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #2] Dado el intervalo abierto A = (1, 9) y el intervalo cerrado B = [3, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "(3, 9)",
            "B": "[3, 9)",
            "C": "[1, 9]",
            "D": "[3, 9]"
        },
        "correcta": "B",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 3 (cerrado) y terminar A en 9 (abierto), la zona común es [3, 9), que está ubicada en la opción <strong>B</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #3] Dado el intervalo abierto A = (1, 10) y el intervalo cerrado B = [4, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "(4, 10)",
            "B": "(1, 4]",
            "C": "[4, 10)",
            "D": "[4, 10]"
        },
        "correcta": "C",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 4 (cerrado) y terminar A en 10 (abierto), la zona común es [4, 10), que está ubicada en la opción <strong>C</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #4] Dado el intervalo abierto A = (1, 11) y el intervalo cerrado B = [5, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "(5, 11)",
            "B": "(1, 5]",
            "C": "[1, 11]",
            "D": "[5, 11)"
        },
        "correcta": "D",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 5 (cerrado) y terminar A en 11 (abierto), la zona común es [5, 11), que está ubicada en la opción <strong>D</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #5] Dado el intervalo abierto A = (1, 12) y el intervalo cerrado B = [6, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "[6, 12)",
            "B": "(1, 6]",
            "C": "[1, 12]",
            "D": "[6, 12]"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 6 (cerrado) y terminar A en 12 (abierto), la zona común es [6, 12), que está ubicada en la opción <strong>A</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #6] Dado el intervalo abierto A = (1, 13) y el intervalo cerrado B = [7, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "(7, 13)",
            "B": "[7, 13)",
            "C": "[1, 13]",
            "D": "[7, 13]"
        },
        "correcta": "B",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 7 (cerrado) y terminar A en 13 (abierto), la zona común es [7, 13), que está ubicada en la opción <strong>B</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #7] Dado el intervalo abierto A = (1, 14) y el intervalo cerrado B = [8, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "(8, 14)",
            "B": "(1, 8]",
            "C": "[8, 14)",
            "D": "[8, 14]"
        },
        "correcta": "C",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 8 (cerrado) y terminar A en 14 (abierto), la zona común es [8, 14), que está ubicada en la opción <strong>C</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #8] Dado el intervalo abierto A = (1, 15) y el intervalo cerrado B = [9, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "(9, 15)",
            "B": "(1, 9]",
            "C": "[1, 15]",
            "D": "[9, 15)"
        },
        "correcta": "D",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 9 (cerrado) y terminar A en 15 (abierto), la zona común es [9, 15), que está ubicada en la opción <strong>D</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #9] Dado el intervalo abierto A = (1, 16) y el intervalo cerrado B = [10, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "[10, 16)",
            "B": "(1, 10]",
            "C": "[1, 16]",
            "D": "[10, 16]"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 10 (cerrado) y terminar A en 16 (abierto), la zona común es [10, 16), que está ubicada en la opción <strong>A</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #10] Dado el intervalo abierto A = (1, 17) y el intervalo cerrado B = [11, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "(11, 17)",
            "B": "[11, 17)",
            "C": "[1, 17]",
            "D": "[11, 17]"
        },
        "correcta": "B",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 11 (cerrado) y terminar A en 17 (abierto), la zona común es [11, 17), que está ubicada en la opción <strong>B</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #11] Dado el intervalo abierto A = (1, 18) y el intervalo cerrado B = [12, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "(12, 18)",
            "B": "(1, 12]",
            "C": "[12, 18)",
            "D": "[12, 18]"
        },
        "correcta": "C",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 12 (cerrado) y terminar A en 18 (abierto), la zona común es [12, 18), que está ubicada en la opción <strong>C</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #12] Dado el intervalo abierto A = (1, 19) y el intervalo cerrado B = [13, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "(13, 19)",
            "B": "(1, 13]",
            "C": "[1, 19]",
            "D": "[13, 19)"
        },
        "correcta": "D",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 13 (cerrado) y terminar A en 19 (abierto), la zona común es [13, 19), que está ubicada en la opción <strong>D</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #13] Dado el intervalo abierto A = (1, 20) y el intervalo cerrado B = [14, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "[14, 20)",
            "B": "(1, 14]",
            "C": "[1, 20]",
            "D": "[14, 20]"
        },
        "correcta": "A",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 14 (cerrado) y terminar A en 20 (abierto), la zona común es [14, 20), que está ubicada en la opción <strong>A</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #14] Dado el intervalo abierto A = (1, 21) y el intervalo cerrado B = [15, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "(15, 21)",
            "B": "[15, 21)",
            "C": "[1, 21]",
            "D": "[15, 21]"
        },
        "correcta": "B",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 15 (cerrado) y terminar A en 21 (abierto), la zona común es [15, 21), que está ubicada en la opción <strong>B</strong>."
    },
    {
        "categoria": "Intervalos e Inecuaciones",
        "pregunta": "[Reactivo Profesional #15] Dado el intervalo abierto A = (1, 22) y el intervalo cerrado B = [16, 20], determine de forma exacta el conjunto resultante de la intersección A &cap; B.",
        "opciones": {
            "A": "(16, 22)",
            "B": "(1, 16]",
            "C": "[16, 22)",
            "D": "[16, 22]"
        },
        "correcta": "C",
        "explicacion": "La intersección comprende los elementos comunes. Al iniciar B en 16 (cerrado) y terminar A en 22 (abierto), la zona común es [16, 22), que está ubicada en la opción <strong>C</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #16] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>3</span><span>2</span></div><div class='matrix-row'><span>2</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "13",
            "B": "8",
            "C": "16",
            "D": "9"
        },
        "correcta": "B",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (3 &times; 4) - (2 &times; 2) = 8. Respuesta correcta en la opción <strong>B</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #17] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>4</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "15",
            "B": "6",
            "C": "10",
            "D": "11"
        },
        "correcta": "C",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (4 &times; 4) - (2 &times; 3) = 10. Respuesta correcta en la opción <strong>C</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #18] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>5</span><span>2</span></div><div class='matrix-row'><span>4</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "17",
            "B": "8",
            "C": "24",
            "D": "12"
        },
        "correcta": "D",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (5 &times; 4) - (2 &times; 4) = 12. Respuesta correcta en la opción <strong>D</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #19] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>6</span><span>2</span></div><div class='matrix-row'><span>2</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "20",
            "B": "16",
            "C": "40",
            "D": "21"
        },
        "correcta": "A",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (6 &times; 4) - (2 &times; 2) = 20. Respuesta correcta en la opción <strong>A</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #20] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>7</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "27",
            "B": "22",
            "C": "44",
            "D": "23"
        },
        "correcta": "B",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (7 &times; 4) - (2 &times; 3) = 22. Respuesta correcta en la opción <strong>B</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #21] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>8</span><span>2</span></div><div class='matrix-row'><span>4</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "29",
            "B": "20",
            "C": "24",
            "D": "25"
        },
        "correcta": "C",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (8 &times; 4) - (2 &times; 4) = 24. Respuesta correcta en la opción <strong>C</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #22] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>9</span><span>2</span></div><div class='matrix-row'><span>2</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "37",
            "B": "28",
            "C": "64",
            "D": "32"
        },
        "correcta": "D",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (9 &times; 4) - (2 &times; 2) = 32. Respuesta correcta en la opción <strong>D</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #23] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>10</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "34",
            "B": "30",
            "C": "68",
            "D": "35"
        },
        "correcta": "A",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (10 &times; 4) - (2 &times; 3) = 34. Respuesta correcta en la opción <strong>A</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #24] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>11</span><span>2</span></div><div class='matrix-row'><span>4</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "41",
            "B": "36",
            "C": "72",
            "D": "37"
        },
        "correcta": "B",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (11 &times; 4) - (2 &times; 4) = 36. Respuesta correcta en la opción <strong>B</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #25] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>12</span><span>2</span></div><div class='matrix-row'><span>2</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "49",
            "B": "40",
            "C": "44",
            "D": "45"
        },
        "correcta": "C",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (12 &times; 4) - (2 &times; 2) = 44. Respuesta correcta en la opción <strong>C</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #26] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>13</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "51",
            "B": "42",
            "C": "92",
            "D": "46"
        },
        "correcta": "D",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (13 &times; 4) - (2 &times; 3) = 46. Respuesta correcta en la opción <strong>D</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #27] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>14</span><span>2</span></div><div class='matrix-row'><span>4</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "48",
            "B": "44",
            "C": "96",
            "D": "49"
        },
        "correcta": "A",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (14 &times; 4) - (2 &times; 4) = 48. Respuesta correcta en la opción <strong>A</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #28] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>15</span><span>2</span></div><div class='matrix-row'><span>2</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "61",
            "B": "56",
            "C": "112",
            "D": "57"
        },
        "correcta": "B",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (15 &times; 4) - (2 &times; 2) = 56. Respuesta correcta en la opción <strong>B</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #29] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>16</span><span>2</span></div><div class='matrix-row'><span>3</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "63",
            "B": "54",
            "C": "58",
            "D": "59"
        },
        "correcta": "C",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (16 &times; 4) - (2 &times; 3) = 58. Respuesta correcta en la opción <strong>C</strong>."
    },
    {
        "categoria": "Álgebra Lineal",
        "pregunta": "[Reactivo Profesional #30] Calcule el determinante de la matriz de orden 2&times;2 dada por: <div class='matrix-container'><div class='matrix-brackets'><div class='matrix-row'><span>17</span><span>2</span></div><div class='matrix-row'><span>4</span><span>4</span></div></div></div>.",
        "opciones": {
            "A": "65",
            "B": "56",
            "C": "120",
            "D": "60"
        },
        "correcta": "D",
        "explicacion": "Se aplica la regla det = (a&middot;d) - (b&middot;c). Por lo tanto: (17 &times; 4) - (2 &times; 4) = 60. Respuesta correcta en la opción <strong>D</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #31] Determine el límite de la función racional cuando x tiende al punto 2: lim<sub>x &rarr; 2</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 4</span><span>x - 2</span></div>.",
        "opciones": {
            "A": "2",
            "B": "0",
            "C": "4",
            "D": "7"
        },
        "correcta": "C",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 2)(x + 2) / (x - 2) = x + 2. Evaluando en 2: 2 + 2 = 4. Marcada en la opción <strong>C</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #32] Determine el límite de la función racional cuando x tiende al punto 3: lim<sub>x &rarr; 3</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 9</span><span>x - 3</span></div>.",
        "opciones": {
            "A": "3",
            "B": "0",
            "C": "No existe",
            "D": "6"
        },
        "correcta": "D",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 3)(x + 3) / (x - 3) = x + 3. Evaluando en 3: 3 + 3 = 6. Marcada en la opción <strong>D</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #33] Determine el límite de la función racional cuando x tiende al punto 4: lim<sub>x &rarr; 4</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 16</span><span>x - 4</span></div>.",
        "opciones": {
            "A": "8",
            "B": "0",
            "C": "No existe",
            "D": "11"
        },
        "correcta": "A",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 4)(x + 4) / (x - 4) = x + 4. Evaluando en 4: 4 + 4 = 8. Marcada en la opción <strong>A</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #34] Determine el límite de la función racional cuando x tiende al punto 5: lim<sub>x &rarr; 5</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 25</span><span>x - 5</span></div>.",
        "opciones": {
            "A": "5",
            "B": "10",
            "C": "No existe",
            "D": "13"
        },
        "correcta": "B",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 5)(x + 5) / (x - 5) = x + 5. Evaluando en 5: 5 + 5 = 10. Marcada en la opción <strong>B</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #35] Determine el límite de la función racional cuando x tiende al punto 6: lim<sub>x &rarr; 6</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 36</span><span>x - 6</span></div>.",
        "opciones": {
            "A": "6",
            "B": "0",
            "C": "12",
            "D": "15"
        },
        "correcta": "C",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 6)(x + 6) / (x - 6) = x + 6. Evaluando en 6: 6 + 6 = 12. Marcada en la opción <strong>C</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #36] Determine el límite de la función racional cuando x tiende al punto 7: lim<sub>x &rarr; 7</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 49</span><span>x - 7</span></div>.",
        "opciones": {
            "A": "7",
            "B": "0",
            "C": "No existe",
            "D": "14"
        },
        "correcta": "D",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 7)(x + 7) / (x - 7) = x + 7. Evaluando en 7: 7 + 7 = 14. Marcada en la opción <strong>D</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #37] Determine el límite de la función racional cuando x tiende al punto 8: lim<sub>x &rarr; 8</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 64</span><span>x - 8</span></div>.",
        "opciones": {
            "A": "16",
            "B": "0",
            "C": "No existe",
            "D": "19"
        },
        "correcta": "A",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 8)(x + 8) / (x - 8) = x + 8. Evaluando en 8: 8 + 8 = 16. Marcada en la opción <strong>A</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #38] Determine el límite de la función racional cuando x tiende al punto 9: lim<sub>x &rarr; 9</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 81</span><span>x - 9</span></div>.",
        "opciones": {
            "A": "9",
            "B": "18",
            "C": "No existe",
            "D": "21"
        },
        "correcta": "B",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 9)(x + 9) / (x - 9) = x + 9. Evaluando en 9: 9 + 9 = 18. Marcada en la opción <strong>B</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #39] Determine el límite de la función racional cuando x tiende al punto 10: lim<sub>x &rarr; 10</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 100</span><span>x - 10</span></div>.",
        "opciones": {
            "A": "10",
            "B": "0",
            "C": "20",
            "D": "23"
        },
        "correcta": "C",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 10)(x + 10) / (x - 10) = x + 10. Evaluando en 10: 10 + 10 = 20. Marcada en la opción <strong>C</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #40] Determine el límite de la función racional cuando x tiende al punto 11: lim<sub>x &rarr; 11</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 121</span><span>x - 11</span></div>.",
        "opciones": {
            "A": "11",
            "B": "0",
            "C": "No existe",
            "D": "22"
        },
        "correcta": "D",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 11)(x + 11) / (x - 11) = x + 11. Evaluando en 11: 11 + 11 = 22. Marcada en la opción <strong>D</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #41] Determine el límite de la función racional cuando x tiende al punto 12: lim<sub>x &rarr; 12</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 144</span><span>x - 12</span></div>.",
        "opciones": {
            "A": "24",
            "B": "0",
            "C": "No existe",
            "D": "27"
        },
        "correcta": "A",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 12)(x + 12) / (x - 12) = x + 12. Evaluando en 12: 12 + 12 = 24. Marcada en la opción <strong>A</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #42] Determine el límite de la función racional cuando x tiende al punto 13: lim<sub>x &rarr; 13</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 169</span><span>x - 13</span></div>.",
        "opciones": {
            "A": "13",
            "B": "26",
            "C": "No existe",
            "D": "29"
        },
        "correcta": "B",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 13)(x + 13) / (x - 13) = x + 13. Evaluando en 13: 13 + 13 = 26. Marcada en la opción <strong>B</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #43] Determine el límite de la función racional cuando x tiende al punto 14: lim<sub>x &rarr; 14</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 196</span><span>x - 14</span></div>.",
        "opciones": {
            "A": "14",
            "B": "0",
            "C": "28",
            "D": "31"
        },
        "correcta": "C",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 14)(x + 14) / (x - 14) = x + 14. Evaluando en 14: 14 + 14 = 28. Marcada en la opción <strong>C</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #44] Determine el límite de la función racional cuando x tiende al punto 15: lim<sub>x &rarr; 15</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 225</span><span>x - 15</span></div>.",
        "opciones": {
            "A": "15",
            "B": "0",
            "C": "No existe",
            "D": "30"
        },
        "correcta": "D",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 15)(x + 15) / (x - 15) = x + 15. Evaluando en 15: 15 + 15 = 30. Marcada en la opción <strong>D</strong>."
    },
    {
        "categoria": "Límites",
        "pregunta": "[Reactivo Profesional #45] Determine el límite de la función racional cuando x tiende al punto 16: lim<sub>x &rarr; 16</sub> <div class='fraction'><span class='numerator'>x<sup>2</sup> - 256</span><span>x - 16</span></div>.",
        "opciones": {
            "A": "32",
            "B": "0",
            "C": "No existe",
            "D": "35"
        },
        "correcta": "A",
        "explicacion": "Factorizando la diferencia de cuadrados perfectos: (x - 16)(x + 16) / (x - 16) = x + 16. Evaluando en 16: 16 + 16 = 32. Marcada en la opción <strong>A</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #46] Calcule la primera derivada f'(x) para la función polinomial f(x) = 2x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "2x<sup>2</sup> + 7",
            "B": "6x<sup>3</sup> + 7",
            "C": "2x + 7",
            "D": "6x<sup>2</sup> + 7"
        },
        "correcta": "D",
        "explicacion": "Por regla de potencia: 3 &times; 2 = 6 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>D</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #47] Calcule la primera derivada f'(x) para la función polinomial f(x) = 3x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "9x<sup>2</sup> + 7",
            "B": "9x<sup>3</sup> + 7",
            "C": "3x + 7",
            "D": "9x + 1"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencia: 3 &times; 3 = 9 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>A</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #48] Calcule la primera derivada f'(x) para la función polinomial f(x) = 4x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "4x<sup>2</sup> + 7",
            "B": "12x<sup>2</sup> + 7",
            "C": "4x + 7",
            "D": "12x + 1"
        },
        "correcta": "B",
        "explicacion": "Por regla de potencia: 3 &times; 4 = 12 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>B</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #49] Calcule la primera derivada f'(x) para la función polinomial f(x) = 5x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "5x<sup>2</sup> + 7",
            "B": "15x<sup>3</sup> + 7",
            "C": "15x<sup>2</sup> + 7",
            "D": "15x + 1"
        },
        "correcta": "C",
        "explicacion": "Por regla de potencia: 3 &times; 5 = 15 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>C</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #50] Calcule la primera derivada f'(x) para la función polinomial f(x) = 6x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "6x<sup>2</sup> + 7",
            "B": "18x<sup>3</sup> + 7",
            "C": "6x + 7",
            "D": "18x<sup>2</sup> + 7"
        },
        "correcta": "D",
        "explicacion": "Por regla de potencia: 3 &times; 6 = 18 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>D</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #51] Calcule la primera derivada f'(x) para la función polinomial f(x) = 7x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "21x<sup>2</sup> + 7",
            "B": "21x<sup>3</sup> + 7",
            "C": "7x + 7",
            "D": "21x + 1"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencia: 3 &times; 7 = 21 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>A</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #52] Calcule la primera derivada f'(x) para la función polinomial f(x) = 8x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "8x<sup>2</sup> + 7",
            "B": "24x<sup>2</sup> + 7",
            "C": "8x + 7",
            "D": "24x + 1"
        },
        "correcta": "B",
        "explicacion": "Por regla de potencia: 3 &times; 8 = 24 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>B</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #53] Calcule la primera derivada f'(x) para la función polinomial f(x) = 9x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "9x<sup>2</sup> + 7",
            "B": "27x<sup>3</sup> + 7",
            "C": "27x<sup>2</sup> + 7",
            "D": "27x + 1"
        },
        "correcta": "C",
        "explicacion": "Por regla de potencia: 3 &times; 9 = 27 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>C</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #54] Calcule la primera derivada f'(x) para la función polinomial f(x) = 10x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "10x<sup>2</sup> + 7",
            "B": "30x<sup>3</sup> + 7",
            "C": "10x + 7",
            "D": "30x<sup>2</sup> + 7"
        },
        "correcta": "D",
        "explicacion": "Por regla de potencia: 3 &times; 10 = 30 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>D</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #55] Calcule la primera derivada f'(x) para la función polinomial f(x) = 11x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "33x<sup>2</sup> + 7",
            "B": "33x<sup>3</sup> + 7",
            "C": "11x + 7",
            "D": "33x + 1"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencia: 3 &times; 11 = 33 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>A</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #56] Calcule la primera derivada f'(x) para la función polinomial f(x) = 12x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "12x<sup>2</sup> + 7",
            "B": "36x<sup>2</sup> + 7",
            "C": "12x + 7",
            "D": "36x + 1"
        },
        "correcta": "B",
        "explicacion": "Por regla de potencia: 3 &times; 12 = 36 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>B</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #57] Calcule la primera derivada f'(x) para la función polinomial f(x) = 13x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "13x<sup>2</sup> + 7",
            "B": "39x<sup>3</sup> + 7",
            "C": "39x<sup>2</sup> + 7",
            "D": "39x + 1"
        },
        "correcta": "C",
        "explicacion": "Por regla de potencia: 3 &times; 13 = 39 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>C</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #58] Calcule la primera derivada f'(x) para la función polinomial f(x) = 14x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "14x<sup>2</sup> + 7",
            "B": "42x<sup>3</sup> + 7",
            "C": "14x + 7",
            "D": "42x<sup>2</sup> + 7"
        },
        "correcta": "D",
        "explicacion": "Por regla de potencia: 3 &times; 14 = 42 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>D</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #59] Calcule la primera derivada f'(x) para la función polinomial f(x) = 15x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "45x<sup>2</sup> + 7",
            "B": "45x<sup>3</sup> + 7",
            "C": "15x + 7",
            "D": "45x + 1"
        },
        "correcta": "A",
        "explicacion": "Por regla de potencia: 3 &times; 15 = 45 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>A</strong>."
    },
    {
        "categoria": "Cálculo Diferencial",
        "pregunta": "[Reactivo Profesional #60] Calcule la primera derivada f'(x) para la función polinomial f(x) = 16x<sup>3</sup> + 7x.",
        "opciones": {
            "A": "16x<sup>2</sup> + 7",
            "B": "48x<sup>2</sup> + 7",
            "C": "16x + 7",
            "D": "48x + 1"
        },
        "correcta": "B",
        "explicacion": "Por regla de potencia: 3 &times; 16 = 48 con exponente disminuido a 2, más la constante 7 de x. Corresponde a la opción <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #61] Resuelva para x el modelo exponencial: 2<sup>x - 2</sup> = 32.",
        "opciones": {
            "A": "x = 7",
            "B": "x = 5",
            "C": "x = 4",
            "D": "x = 3"
        },
        "correcta": "A",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 2 = 5 &rArr; x = 7. Ubicada en la opción <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #62] Resuelva para x el modelo exponencial: 2<sup>x - 3</sup> = 32.",
        "opciones": {
            "A": "x = 3",
            "B": "x = 8",
            "C": "x = 5",
            "D": "x = 4"
        },
        "correcta": "B",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 3 = 5 &rArr; x = 8. Ubicada en la opción <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #63] Resuelva para x el modelo exponencial: 2<sup>x - 4</sup> = 32.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 7",
            "C": "x = 9",
            "D": "x = 5"
        },
        "correcta": "C",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 4 = 5 &rArr; x = 9. Ubicada en la opción <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #64] Resuelva para x el modelo exponencial: 2<sup>x - 5</sup> = 32.",
        "opciones": {
            "A": "x = 5",
            "B": "x = 8",
            "C": "x = 7",
            "D": "x = 10"
        },
        "correcta": "D",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 5 = 5 &rArr; x = 10. Ubicada en la opción <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #65] Resuelva para x el modelo exponencial: 2<sup>x - 6</sup> = 32.",
        "opciones": {
            "A": "x = 11",
            "B": "x = 9",
            "C": "x = 8",
            "D": "x = 7"
        },
        "correcta": "A",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 6 = 5 &rArr; x = 11. Ubicada en la opción <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #66] Resuelva para x el modelo exponencial: 2<sup>x - 7</sup> = 32.",
        "opciones": {
            "A": "x = 7",
            "B": "x = 12",
            "C": "x = 9",
            "D": "x = 8"
        },
        "correcta": "B",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 7 = 5 &rArr; x = 12. Ubicada en la opción <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #67] Resuelva para x el modelo exponencial: 2<sup>x - 8</sup> = 32.",
        "opciones": {
            "A": "x = 8",
            "B": "x = 11",
            "C": "x = 13",
            "D": "x = 9"
        },
        "correcta": "C",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 8 = 5 &rArr; x = 13. Ubicada en la opción <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #68] Resuelva para x el modelo exponencial: 2<sup>x - 9</sup> = 32.",
        "opciones": {
            "A": "x = 9",
            "B": "x = 12",
            "C": "x = 11",
            "D": "x = 14"
        },
        "correcta": "D",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 9 = 5 &rArr; x = 14. Ubicada en la opción <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #69] Resuelva para x el modelo exponencial: 2<sup>x - 10</sup> = 32.",
        "opciones": {
            "A": "x = 15",
            "B": "x = 13",
            "C": "x = 12",
            "D": "x = 11"
        },
        "correcta": "A",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 10 = 5 &rArr; x = 15. Ubicada en la opción <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #70] Resuelva para x el modelo exponencial: 2<sup>x - 11</sup> = 32.",
        "opciones": {
            "A": "x = 11",
            "B": "x = 16",
            "C": "x = 13",
            "D": "x = 12"
        },
        "correcta": "B",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 11 = 5 &rArr; x = 16. Ubicada en la opción <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #71] Resuelva para x el modelo exponencial: 2<sup>x - 12</sup> = 32.",
        "opciones": {
            "A": "x = 12",
            "B": "x = 15",
            "C": "x = 17",
            "D": "x = 13"
        },
        "correcta": "C",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 12 = 5 &rArr; x = 17. Ubicada en la opción <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #72] Resuelva para x el modelo exponencial: 2<sup>x - 13</sup> = 32.",
        "opciones": {
            "A": "x = 13",
            "B": "x = 16",
            "C": "x = 15",
            "D": "x = 18"
        },
        "correcta": "D",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 13 = 5 &rArr; x = 18. Ubicada en la opción <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #73] Resuelva para x el modelo exponencial: 2<sup>x - 14</sup> = 32.",
        "opciones": {
            "A": "x = 19",
            "B": "x = 17",
            "C": "x = 16",
            "D": "x = 15"
        },
        "correcta": "A",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 14 = 5 &rArr; x = 19. Ubicada en la opción <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #74] Resuelva para x el modelo exponencial: 2<sup>x - 15</sup> = 32.",
        "opciones": {
            "A": "x = 15",
            "B": "x = 20",
            "C": "x = 17",
            "D": "x = 16"
        },
        "correcta": "B",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 15 = 5 &rArr; x = 20. Ubicada en la opción <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Exponenciales",
        "pregunta": "[Reactivo Profesional #75] Resuelva para x el modelo exponencial: 2<sup>x - 16</sup> = 32.",
        "opciones": {
            "A": "x = 16",
            "B": "x = 19",
            "C": "x = 21",
            "D": "x = 17"
        },
        "correcta": "C",
        "explicacion": "Como 32 = 2<sup>5</sup>, igualamos exponentes: x - 16 = 5 &rArr; x = 21. Ubicada en la opción <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #76] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 76) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 85"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 76 = 3<sup>2</sup> = 9 &rArr; x = 85. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #77] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 77) = 2.",
        "opciones": {
            "A": "x = 86",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 77 = 3<sup>2</sup> = 9 &rArr; x = 86. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #78] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 78) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 87",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 78 = 3<sup>2</sup> = 9 &rArr; x = 87. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #79] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 79) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 88",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 79 = 3<sup>2</sup> = 9 &rArr; x = 88. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #80] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 80) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 89"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 80 = 3<sup>2</sup> = 9 &rArr; x = 89. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #81] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 81) = 2.",
        "opciones": {
            "A": "x = 90",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 81 = 3<sup>2</sup> = 9 &rArr; x = 90. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #82] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 82) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 91",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 82 = 3<sup>2</sup> = 9 &rArr; x = 91. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #83] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 83) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 92",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 83 = 3<sup>2</sup> = 9 &rArr; x = 92. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #84] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 84) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 93"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 84 = 3<sup>2</sup> = 9 &rArr; x = 93. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #85] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 85) = 2.",
        "opciones": {
            "A": "x = 94",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 85 = 3<sup>2</sup> = 9 &rArr; x = 94. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #86] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 86) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 95",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 86 = 3<sup>2</sup> = 9 &rArr; x = 95. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #87] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 87) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 96",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 87 = 3<sup>2</sup> = 9 &rArr; x = 96. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #88] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 88) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 97"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 88 = 3<sup>2</sup> = 9 &rArr; x = 97. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #89] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 89) = 2.",
        "opciones": {
            "A": "x = 98",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 89 = 3<sup>2</sup> = 9 &rArr; x = 98. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #90] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 90) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 99",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 90 = 3<sup>2</sup> = 9 &rArr; x = 99. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #91] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 91) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 100",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 91 = 3<sup>2</sup> = 9 &rArr; x = 100. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #92] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 92) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 101"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 92 = 3<sup>2</sup> = 9 &rArr; x = 101. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #93] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 93) = 2.",
        "opciones": {
            "A": "x = 102",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 93 = 3<sup>2</sup> = 9 &rArr; x = 102. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #94] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 94) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 103",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 94 = 3<sup>2</sup> = 9 &rArr; x = 103. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #95] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 95) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 104",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 95 = 3<sup>2</sup> = 9 &rArr; x = 104. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #96] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 96) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 105"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 96 = 3<sup>2</sup> = 9 &rArr; x = 105. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #97] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 97) = 2.",
        "opciones": {
            "A": "x = 106",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 97 = 3<sup>2</sup> = 9 &rArr; x = 106. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #98] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 98) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 107",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 98 = 3<sup>2</sup> = 9 &rArr; x = 107. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #99] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 99) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 108",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 99 = 3<sup>2</sup> = 9 &rArr; x = 108. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #100] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 100) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 109"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 100 = 3<sup>2</sup> = 9 &rArr; x = 109. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #101] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 101) = 2.",
        "opciones": {
            "A": "x = 110",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 101 = 3<sup>2</sup> = 9 &rArr; x = 110. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #102] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 102) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 111",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 102 = 3<sup>2</sup> = 9 &rArr; x = 111. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #103] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 103) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 112",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 103 = 3<sup>2</sup> = 9 &rArr; x = 112. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #104] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 104) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 113"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 104 = 3<sup>2</sup> = 9 &rArr; x = 113. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #105] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 105) = 2.",
        "opciones": {
            "A": "x = 114",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 105 = 3<sup>2</sup> = 9 &rArr; x = 114. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #106] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 106) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 115",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 106 = 3<sup>2</sup> = 9 &rArr; x = 115. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #107] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 107) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 116",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 107 = 3<sup>2</sup> = 9 &rArr; x = 116. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #108] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 108) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 117"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 108 = 3<sup>2</sup> = 9 &rArr; x = 117. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #109] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 109) = 2.",
        "opciones": {
            "A": "x = 118",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 109 = 3<sup>2</sup> = 9 &rArr; x = 118. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #110] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 110) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 119",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 110 = 3<sup>2</sup> = 9 &rArr; x = 119. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #111] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 111) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 120",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 111 = 3<sup>2</sup> = 9 &rArr; x = 120. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #112] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 112) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 121"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 112 = 3<sup>2</sup> = 9 &rArr; x = 121. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #113] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 113) = 2.",
        "opciones": {
            "A": "x = 122",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 113 = 3<sup>2</sup> = 9 &rArr; x = 122. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #114] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 114) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 123",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 114 = 3<sup>2</sup> = 9 &rArr; x = 123. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #115] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 115) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 124",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 115 = 3<sup>2</sup> = 9 &rArr; x = 124. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #116] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 116) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 125"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 116 = 3<sup>2</sup> = 9 &rArr; x = 125. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #117] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 117) = 2.",
        "opciones": {
            "A": "x = 126",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 117 = 3<sup>2</sup> = 9 &rArr; x = 126. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #118] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 118) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 127",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 118 = 3<sup>2</sup> = 9 &rArr; x = 127. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #119] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 119) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 128",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 119 = 3<sup>2</sup> = 9 &rArr; x = 128. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #120] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 120) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 129"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 120 = 3<sup>2</sup> = 9 &rArr; x = 129. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #121] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 121) = 2.",
        "opciones": {
            "A": "x = 130",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 121 = 3<sup>2</sup> = 9 &rArr; x = 130. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #122] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 122) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 131",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 122 = 3<sup>2</sup> = 9 &rArr; x = 131. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #123] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 123) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 132",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 123 = 3<sup>2</sup> = 9 &rArr; x = 132. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #124] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 124) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 133"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 124 = 3<sup>2</sup> = 9 &rArr; x = 133. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #125] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 125) = 2.",
        "opciones": {
            "A": "x = 134",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 125 = 3<sup>2</sup> = 9 &rArr; x = 134. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #126] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 126) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 135",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 126 = 3<sup>2</sup> = 9 &rArr; x = 135. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #127] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 127) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 136",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 127 = 3<sup>2</sup> = 9 &rArr; x = 136. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #128] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 128) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 137"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 128 = 3<sup>2</sup> = 9 &rArr; x = 137. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #129] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 129) = 2.",
        "opciones": {
            "A": "x = 138",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 129 = 3<sup>2</sup> = 9 &rArr; x = 138. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #130] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 130) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 139",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 130 = 3<sup>2</sup> = 9 &rArr; x = 139. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #131] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 131) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 140",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 131 = 3<sup>2</sup> = 9 &rArr; x = 140. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #132] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 132) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 141"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 132 = 3<sup>2</sup> = 9 &rArr; x = 141. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #133] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 133) = 2.",
        "opciones": {
            "A": "x = 142",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 133 = 3<sup>2</sup> = 9 &rArr; x = 142. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #134] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 134) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 143",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 134 = 3<sup>2</sup> = 9 &rArr; x = 143. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #135] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 135) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 144",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 135 = 3<sup>2</sup> = 9 &rArr; x = 144. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #136] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 136) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 145"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 136 = 3<sup>2</sup> = 9 &rArr; x = 145. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #137] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 137) = 2.",
        "opciones": {
            "A": "x = 146",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 137 = 3<sup>2</sup> = 9 &rArr; x = 146. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #138] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 138) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 147",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 138 = 3<sup>2</sup> = 9 &rArr; x = 147. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #139] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 139) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 148",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 139 = 3<sup>2</sup> = 9 &rArr; x = 148. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #140] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 140) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 149"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 140 = 3<sup>2</sup> = 9 &rArr; x = 149. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #141] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 141) = 2.",
        "opciones": {
            "A": "x = 150",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 141 = 3<sup>2</sup> = 9 &rArr; x = 150. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #142] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 142) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 151",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 142 = 3<sup>2</sup> = 9 &rArr; x = 151. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #143] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 143) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 152",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 143 = 3<sup>2</sup> = 9 &rArr; x = 152. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #144] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 144) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 153"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 144 = 3<sup>2</sup> = 9 &rArr; x = 153. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #145] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 145) = 2.",
        "opciones": {
            "A": "x = 154",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 145 = 3<sup>2</sup> = 9 &rArr; x = 154. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #146] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 146) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 155",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 146 = 3<sup>2</sup> = 9 &rArr; x = 155. La opción correcta es la <strong>B</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #147] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 147) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 156",
            "D": "x = 0"
        },
        "correcta": "C",
        "explicacion": "Por definición de logaritmo: x - 147 = 3<sup>2</sup> = 9 &rArr; x = 156. La opción correcta es la <strong>C</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #148] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 148) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 157"
        },
        "correcta": "D",
        "explicacion": "Por definición de logaritmo: x - 148 = 3<sup>2</sup> = 9 &rArr; x = 157. La opción correcta es la <strong>D</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #149] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 149) = 2.",
        "opciones": {
            "A": "x = 158",
            "B": "x = 12",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "A",
        "explicacion": "Por definición de logaritmo: x - 149 = 3<sup>2</sup> = 9 &rArr; x = 158. La opción correcta es la <strong>A</strong>."
    },
    {
        "categoria": "Ecuaciones Logarítmicas",
        "pregunta": "[Reactivo Profesional #150] Encuentre el valor real de x en la expresión logarítmica: log<sub>3</sub>(x - 150) = 2.",
        "opciones": {
            "A": "x = 4",
            "B": "x = 159",
            "C": "x = 2",
            "D": "x = 0"
        },
        "correcta": "B",
        "explicacion": "Por definición de logaritmo: x - 150 = 3<sup>2</sup> = 9 &rArr; x = 159. La opción correcta es la <strong>B</strong>."
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

    // Mostramos las opciones en el orden natural A, B, C, D pero con la respuesta real perfectamente distribuida entre ellas.
    ["A", "B", "C", "D"].forEach(key => {
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
        evalBox.innerHTML = "🏆 ¡Excelencia Absoluta! Tienes un dominio total sobre los 150 reactivos exclusivos analizados.";
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
    helpBox.innerHTML = '📊 Votación estadística del Auditorio Académico para la opción correcta ' + q.correcta;
    comodinesDisponibles.public = false;
    actualizarVisualComodines();
}