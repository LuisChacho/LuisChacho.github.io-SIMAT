const bancoPreguntas = [
    {
        categoria: "Intervalos",
        pregunta: "Si A = (-2, 5] y B = [3, 8), determine el conjunto resultante de la operación A ∩ B.",
        opciones: { A: "[3, 5]", B: "(3, 5]", C: "[-2, 8)", D: "(5, 8)" },
        correcta: "A",
        explicacion: "La intersección comprende los valores comunes a ambos intervalos, los cuales inician en 3 (incluido en ambos) y terminan en 5 (incluido en ambos)."
    },
    {
        categoria: "Ecuaciones con Valor Absoluto",
        pregunta: "Determine el conjunto solución de la ecuación: |2x - 3| = 7.",
        opciones: { A: "{5, -2}", B: "{2, -5}", C: "{5, 2}", D: "{-5, -2}" },
        correcta: "A",
        explicacion: "Se plantean dos casos: 2x - 3 = 7 (da x = 5) y 2x - 3 = -7 (da x = -2)."
    },
    {
        categoria: "Ecuaciones Exponenciales",
        pregunta: "Resuelva la ecuación exponencial: 3^(x+2) = 27^(x-2).",
        opciones: { A: "x = 4", B: "x = 2", C: "x = 3", D: "x = 1" },
        correcta: "A",
        explicacion: "Expresando 27 como 3^3, la ecuación queda x + 2 = 3(x - 2). Al resolver, 2x = 8, por lo tanto x = 4."
    },
    {
        categoria: "Sistemas de Ecuaciones",
        pregunta: "Un estudiante compra 2 cuadernos y 3 lápices por $7. Al día siguiente, compra 4 cuadernos y 1 lápiz por $9. ¿Cuál es el costo de cada cuaderno?",
        opciones: { A: "$2.00", B: "$1.00", C: "$1.50", D: "$2.50" },
        correcta: "A",
        explicacion: "Planteando el sistema de ecuaciones, multiplicamos la primera por -2 y al sumarlas obtenemos que un lápiz cuesta $1 y por ende el cuaderno cuesta $2."
    },
    {
        categoria: "Funciones",
        pregunta: "Determine las coordenadas del vértice de la parábola definida por f(x) = x^2 - 4x + 7.",
        opciones: { A: "(2, 3)", B: "(-2, 19)", C: "(4, 7)", D: "(2, 7)" },
        correcta: "A",
        explicacion: "La coordenada x del vértice es h = -b/(2a) = 4/2 = 2. Evaluando f(2) obtenemos y = 4 - 8 + 7 = 3."
    },
    {
        categoria: "Operaciones con Funciones",
        pregunta: "Dadas las funciones f(x) = 2x + 3 y g(x) = x^2. Encuentre la composición (g ∘ f)(x).",
        opciones: { A: "4x^2 + 12x + 9", B: "2x^2 + 3", C: "4x^2 + 9", D: "2x^3 + 3x^2" },
        correcta: "A",
        explicacion: "(g ∘ f)(x) significa evaluar f(x) dentro de g, lo que resulta en (2x + 3)^2 = 4x^2 + 12x + 9."
    },
    {
        categoria: "Dominio y Rango",
        pregunta: "Determine el dominio de la función irracional f(x) = √(3x - 12).",
        opciones: { A: "[4, +∞)", B: "(4, +∞)", C: "(-∞, 4]", D: "[0, +∞)" },
        correcta: "A",
        explicacion: "Para funciones irracionales con índice par, la cantidad subradical debe ser mayor o igual a cero: 3x - 12 ≥ 0, lo que implica x ≥ 4."
    },
    {
        categoria: "Identidades Trigonométricas",
        pregunta: "Simplifique la expresión trigonométrica: (sec(x) * cot(x)) / csc(x).",
        opciones: { A: "1", B: "sin(x)", C: "cos(x)", D: "tan(x)" },
        correcta: "A",
        explicacion: "Sustituyendo en términos de seno y coseno: (1/cos * cos/sin) / (1/sin) = (1/sin) / (1/sin) = 1."
    },
    {
        categoria: "Distancia entre dos puntos",
        pregunta: "Calcule la distancia entre los puntos A(1, 2) y B(4, 6) en el plano cartesiano.",
        opciones: { A: "5 unidades", B: "7 unidades", C: "√7 unidades", D: "25 unidades" },
        correcta: "A",
        explicacion: "Aplicando el teorema de Pitágoras: d = √((4-1)^2 + (6-2)^2) = √(3^2 + 4^2) = √25 = 5."
    },
    {
        categoria: "Distancia de Punto a Recta",
        pregunta: "Determine la distancia mínima desde el punto P(1, 1) a la recta con ecuación 3x + 4y - 12 = 0.",
        opciones: { A: "1 unidad", B: "5 unidades", C: "2 unidades", D: "0.5 unidades" },
        correcta: "A",
        explicacion: "Aplicando d = |Ax+By+C|/√(A^2+B^2) se obtiene |3(1)+4(1)-12|/√(3^2+4^2) = |-5|/5 = 1."
    },
    {
        categoria: "Vectores",
        pregunta: "Dados los vectores u = (2, 3) y v = (-1, 4), calcule su producto escalar (u · v).",
        opciones: { A: "10", B: "14", C: "5", D: "-2" },
        correcta: "A",
        explicacion: "El producto escalar se calcula multiplicando componentes correspondientes y sumándolas: (2)(-1) + (3)(4) = -2 + 12 = 10."
    },
    {
        categoria: "Límites",
        pregunta: "Calcule el límite cuando x tiende a infinito de la función: f(x) = (4x^2 - 3) / (2x^2 + 5x).",
        opciones: { A: "2", B: "0", C: "Infinito", D: "-3/5" },
        correcta: "A",
        explicacion: "Al tender al infinito, dividimos por la mayor potencia de x (x^2). El límite se reduce a la razón de los coeficientes principales: 4/2 = 2."
    },
    {
        categoria: "Matrices",
        pregunta: "Dada la matriz A = [[1, 2], [3, 4]], calcule la operación de su transpuesta (A^T).",
        opciones: { A: "[[1, 3], [2, 4]]", B: "[[4, 2], [3, 1]]", C: "[[2, 1], [4, 3]]", D: "[[1, 2], [3, 4]]" },
        correcta: "A",
        explicacion: "La transpuesta intercambia las filas por columnas ordenadamente. La fila [1, 2] pasa a ser la primera columna."
    },
    {
        categoria: "Cónicas",
        pregunta: "Identifique el tipo de cónica que representa la ecuación general: 4x^2 - 9y^2 + 16x + 18y - 29 = 0.",
        opciones: { A: "Hipérbola", B: "Elipse", C: "Parábola", D: "Circunferencia" },
        correcta: "A",
        explicacion: "Dado que los coeficientes de los términos cuadráticos (x^2 e y^2) tienen signos opuestos (4 y -9), la ecuación representa una hipérbola."
    },
    {
        categoria: "Derivadas",
        pregunta: "Calcule la derivada de la función f(x) = 3x^3 - 5x + 2 con respecto a x.",
        opciones: { A: "9x^2 - 5", B: "9x^2", C: "3x^2 - 5", D: "9x^3 - 5" },
        correcta: "A",
        explicacion: "Aplicando la regla de la potencia: d/dx(3x^3) = 9x^2, d/dx(-5x) = -5, y la constante se vuelve 0."
    }
];

let preguntasSeleccionadas = [];
let indicePreguntaActual = 0;
let puntaje = 0;
const totalPreguntasPorJuego = 4;

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
    const bancoMezclado = [...bancoPreguntas].sort(() => Math.random() - 0.5);
    preguntasSeleccionadas = bancoMezclado.slice(0, totalPreguntasPorJuego);
    indicePreguntaActual = 0;
    puntaje = 0;
    comodinesDisponibles = { fiftyFifty: true, deleteOne: true, phone: true, public: true };
    actualizarVisualComodines();
    cambiarPantalla(screenGame);
    mostrarPregunta();
}

function cambiarPantalla(pantallaActiva) {
    [screenHome, screenGame, screenResult].forEach(screen => screen.classList.remove('active'));
    pantallaActiva.classList.add('active');
}

function mostrarPregunta() {
    helpBox.style.display = 'none';
    feedbackDisplay.className = 'feedback-box';
    btnNext.style.display = 'none';
    scoreDisplay.textContent = puntaje;
    progressText.textContent = `Pregunta: ${indicePreguntaActual + 1}/${totalPreguntasPorJuego}`;

    const q = preguntasSeleccionadas[indicePreguntaActual];
    categoryDisplay.textContent = q.categoria;
    questionDisplay.textContent = q.pregunta;
    optionsContainer.innerHTML = '';
    
    Object.keys(q.opciones).forEach(key => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.innerHTML = `<strong>${key}:</strong> ${q.opciones[key]}`;
        btn.setAttribute('data-option', key);
        btn.setAttribute('tabindex', '0');
        btn.addEventListener('click', () => verificarRespuesta(key));
        optionsContainer.appendChild(btn);
    });
}

function verificarRespuesta(opcionSeleccionada) {
    const q = preguntasSeleccionadas[indicePreguntaActual];
    const botones = optionsContainer.querySelectorAll('.btn-option');
    botones.forEach(btn => btn.disabled = true);
    bloquearComodinesTemporamente(true);

    if (opcionSeleccionada === q.correcta) {
        puntaje++;
        scoreDisplay.textContent = puntaje;
        botones.forEach(btn => { if(btn.getAttribute('data-option') === q.correcta) btn.classList.add('correct'); });
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
    feedbackText.textContent = q.explicacion;
    btnNext.style.display = 'inline-block';
    btnNext.focus();
}

function avanzarPregunta() {
    indicePreguntaActual++;
    bloquearComodinesTemporamente(false);
    actualizarVisualComodines();
    if (indicePreguntaActual < totalPreguntasPorJuego) { mostrarPregunta(); } else { finalizarJuego(); }
}

function finalizarJuego() {
    cambiarPantalla(screenResult);
    document.getElementById('final-score').textContent = puntaje;
    const evalBox = document.getElementById('final-evaluation');
    if (puntaje === totalPreguntasPorJuego) {
        evalBox.innerHTML = "🏆 ¡Perfecto! Dominas absolutamente todos los ejes del temario académico.";
        evalBox.style.color = "var(--success)";
    } else if (puntaje >= totalPreguntasPorJuego * 0.7) {
        evalBox.innerHTML = "👍 ¡Muy bien! Tienes bases muy sólidas para rendir el examen con éxito.";
        evalBox.style.color = "var(--secondary-color)";
    } else {
        evalBox.innerHTML = "📚 ¡Sigue practicando! Repasa las breves explicaciones para fortalecer tus destrezas.";
        evalBox.style.color = "var(--accent-color)";
    }
}

function reiniciarJuego() { cambiarPantalla(screenHome); btnStart.focus(); }
function actualizarVisualComodines() {
    lifeline5050.disabled = !comodinesDisponibles.fiftyFifty;
    lifelineOne.disabled = !comodinesDisponibles.deleteOne;
    lifelinePhone.disabled = !comodinesDisponibles.phone;
    lifelinePublic.disabled = !comodinesDisponibles.public;
}
function bloquearComodinesTemporamente(bloquear) {
    if (bloquear) { [lifeline5050, lifelineOne, lifelinePhone, lifelinePublic].forEach(l => l.disabled = true); }
}
function obtenerOpcionesIncorrectas() {
    const q = preguntasSeleccionadas[indicePreguntaActual];
    const botones = Array.from(optionsContainer.querySelectorAll('.btn-option:not([style*="display: none"])'));
    return botones.filter(btn => btn.getAttribute('data-option') !== q.correcta);
}
function usar5050() {
    if(!comodinesDisponibles.fiftyFifty) return;
    let incorrectas = obtenerOpcionesIncorrectas();
    incorrectas.sort(() => Math.random() - 0.5);
    for(let i = 0; i < 2; i++) { if(incorrectas[i]) incorrectas[i].style.visibility = 'hidden'; }
    comodinesDisponibles.fiftyFifty = false;
    actualizarVisualComodines();
}
function usarEliminarUna() {
    if(!comodinesDisponibles.deleteOne) return;
    let incorrectas = obtenerOpcionesIncorrectas();
    if(incorrectas.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * incorrectas.length);
        incorrectas[indiceAleatorio].style.visibility = 'hidden';
    }
    comodinesDisponibles.deleteOne = false;
    actualizarVisualComodines();
}
function usarLlamada() {
    if(!comodinesDisponibles.phone) return;
    const q = preguntasSeleccionadas[indicePreguntaActual];
    helpBox.style.display = 'block';
    helpBox.innerHTML = `📞 <strong>Tu profesor mentor te dice:</strong> "Hola, analicé el modelo y estoy un 85% seguro de que la opción correcta es la <strong>\${q.correcta}</strong> debido al planteamiento teórico del problema."`;
    comodinesDisponibles.phone = false;
    actualizarVisualComodines();
}
function usarPublico() {
    if(!comodinesDisponibles.public) return;
    const q = preguntasSeleccionadas[indicePreguntaActual];
    let datosCerrados = { A: 10, B: 10, C: 10, D: 10 };
    datosCerrados[q.correcta] = 70; 
    helpBox.style.display = 'block';
    helpBox.innerHTML = `📊 <strong>Resultado del Aula Virtual:</strong> <br> A: \${datosCerrados.A}% | B: \${datosCerrados.B}% | C: \${datosCerrados.C}% | D: \${datosCerrados.D}%`;
    comodinesDisponibles.public = false;
    actualizarVisualComodines();
}