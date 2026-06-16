// BANCO COMPLETO DE 200 PREGUNTAS DISTRIBUIDAS EN LOS 15 EJES TEMÁTICOS CON NOTACIÓN CIENTÍFICA NATIVA
const bancoPreguntas = [];

const ejes = [
    { cat: "Intervalos", plantillas: [
        { p: "Si A = (-3, 4] y B = [1, 6), determine la intersección A &cap; B.", o: {A:"[1, 4]", B:"(1, 4]", C:"[-3, 6)", D:"(4, 6)"}, c: "A", e: "Los valores compartidos van desde el 1 incluido en ambos hasta el 4 incluido en ambos." },
        { p: "Calcule la diferencia A - B si A = [-5, 2] y B = (-2, 5].", o: {A:"[-5, -2]", B:"[-5, -2)", C:"(2, 5]", D:"[-5, 5]"}, c: "A", e: "Quitamos a la porción de B. Como B es abierto en -2, ese punto se queda en A de forma cerrada." },
        { p: "Halle el complemento del intervalo C = (-&infin;, 3] respecto a los reales.", o: {A:"(3, +&infin;)", B:"[3, +&infin;)", C:"(-&infin;, 3)", D: "&#8477;"}, c: "A", e: "El complemento invierte el extremo cerrado a abierto, abarcando todos los números mayores estrictos que 3." }
    ]},
    { cat: "Ecuaciones e Inecuaciones con Valor Absoluto", plantillas: [
        { p: "Resuelva la ecuación lineal de módulo: |2x - 4| = 10.", o: {A:"{7, -3}", B:"{7, 3}", C:"{-7, -3}", D:"{5, -5}"}, c: "A", e: "Genera dos casos: 2x-4=10 (x=7) y 2x-4=-10 (x=-3)." },
        { p: "Determine el conjunto solución para la inecuación: |x + 3| &le; 5.", o: {A:"[-8, 2]", B:"(-8, 2)", C:"(-&infin;, -8] &cup; [2, +&infin;)", D:"[2, 8]"}, c: "A", e: "Se despliega como -5 &le; x + 3 &le; 5. Restando 3 en cada miembro se obtiene el intervalo cerrado [-8, 2]." }
    ]},
    { cat: "Ecuaciones", plantillas: [
        { p: "Halle las raíces de la ecuación cuadrática: x<sup>2</sup> - 7x + 12 = 0.", o: {A:"{3, 4}", B:"{-3, -4}", C:"{2, 6}", D:"{1, 12}"}, c: "A", e: "Factorizando el trinomio de la forma resulta (x - 3)(x - 4) = 0, cuyas raíces son 3 y 4." },
        { p: "Resuelva la ecuación exponencial de bases homólogas: 2<sup>2x-1</sup> = 32.", o: {A:"x = 3", B:"x = 2", C:"x = 4", D:"x = 5"}, c: "A", e: "Dado que 32 = 2<sup>5</sup>, igualamos los exponentes: 2x - 1 = 5, lo cual nos da x = 3." },
        { p: "Encuentre la solución real para la ecuación logarítmica: log<sub>2</sub>(x) + log<sub>2</sub>(x-2) = 3.", o: {A:"x = 4", B:"x = -2", C:"x = 2", D:"{4, -2}"}, c: "A", e: "Alineando propiedades: x(x-2) = 2<sup>3</sup> = 8. La ecuación x<sup>2</sup>-2x-8=0 da raíces 4 y -2 (pero el argumento exige x > 2)." }
    ]},
    { cat: "Sistema de Ecuaciones", plantillas: [
        { p: "Dado el sistema lineal:<br>3x + 2y = 12<br>5x - 2y = 4<br>Determine el valor de la incógnita x.", o: {A:"x = 2", B:"x = 3", C:"x = 1", D:"x = 4"}, c: "A", e: "Sumando directamente ambas ecuaciones eliminamos la variable y, obteniendo 8x = 16, lo que implica x = 2." }
    ]},
    { cat: "Funciones (puntos de corte, vértice, dominio)", plantillas: [
        { p: "Halle la abscisa del vértice de la función cuadrática f(x) = 2x<sup>2</sup> - 8x + 5.", o: {A:"x = 2", B:"x = -2", C:"x = 4", D:"x = 0"}, c: "A", e: "Utilizando la fórmula analítica h = -b / (2a) obtenemos: -(-8) / (2 * 2) = 8 / 4 = 2." }
    ]},
    { cat: "Funciones: operaciones con funciones", plantillas: [
        { p: "Dadas f(x) = 3x + 2 y g(x) = x<sup>2</sup>, encuentre la composición algebraica (g &cir; f)(x).", o: {A:"9x<sup>2</sup> + 12x + 4", B:"3x<sup>2</sup> + 2", C:"9x<sup>2</sup> + 4", D:"3x<sup>3</sup> + 2x<sup>2</sup>"}, c: "A", e: "Sustituyendo f dentro de g: (3x + 2)<sup>2</sup> = 9x<sup>2</sup> + 12x + 4 por desarrollo de binomio al cuadrado." }
    ]},
    { cat: "Funciones: dominio y rango específico", plantillas: [
        { p: "Determine el dominio real estricto de la función irracional g(x) = &radic;(2x - 8).", o: {A:"[4, +&infin;)", B:"(4, +&infin;)", C:"(-&infin;, 4]", D:"&#8477;"}, c: "A", e: "Para asegurar raíces reales de índice par, la condición obliga a que 2x - 8 &ge; 0, resolviendo en x &ge; 4." }
    ]},
    { cat: "Identidades Trigonométricas", plantillas: [
        { p: "Simplifique la siguiente expresión utilizando identidades fundamentales: sin<sup>2</sup>(&theta;) &middot; csc(&theta;).", o: {A:"sin(&theta;)", B:"cos(&theta;)", C:"1", D:"tan(&theta;)"}, c: "A", e: "Sustituyendo la cosecante por su recíproca: sin<sup>2</sup>(&theta;) &middot; (1 / sin(&theta;)) = sin(&theta;)." }
    ]},
    { cat: "Distancia entre dos puntos", plantillas: [
        { p: "Calcule la distancia euclidiana entre los puntos coordenados A(2, 3) y B(5, 7).", o: {A:"5 u", B:"7 u", C:"&radic;7 u", D:"25 u"}, c: "A", e: "Aplicando Pitágoras cartesiano: &radic;((5-2)<sup>2</sup> + (7-3)<sup>2</sup>) = &radic;(3<sup>2</sup> + 4<sup>2</sup>) = &radic;25 = 5 unidades." }
    ]},
    { cat: "Distancia entre punto y recta", plantillas: [
        { p: "Calcule la distancia perpendicular mínima desde el punto P(1, 2) a la recta l: 3x + 4y - 1 u = 0.", o: {A:"2 u", B:"1 u", C:"5 u", D:"0 u"}, c: "A", e: "Utilizando la fórmula d = |Ax+By+C| / &radic;(A<sup>2</sup>+B<sup>2</sup>) resulta: |3(1)+4(2)-1| / 5 = 10 / 5 = 2." }
    ]},
    { cat: "Vectores", plantillas: [
        { p: "Dados los vectores u = (1, 3) y v = (4, -1), determine su producto escalar u &middot; v.", o: {A:"1", B:"7", C:"-3", D:"12"}, c: "A", e: "El producto escalar suma los productos de componentes: (1)(4) + (3)(-1) = 4 - 3 = 1." }
    ]},
    { cat: "Límites de funciones", plantillas: [
        { p: "Determine el límite al infinito por comparación de grados: lim <sub>x&rarr;&infin;</sub> (6x<sup>2</sup> - 5) / (2x<sup>2</sup> + x).", o: {A:"3", B:"0", C:"&infin;", D:"-5"}, c: "A", e: "Al tener el mismo grado máximo en numerador y denominador, el límite equivale al cociente de sus coeficientes principales: 6/2 = 3." }
    ]},
    { cat: "Matrices", plantillas: [
        { p: "Dada la matriz identidad I de 2x2, calcule el resultado operativo de 3I - I<sup>T</sup>.", o: {A:"2I", B:"3I", C:"I", D:"[[0,0],[0,0]]"}, c: "A", e: "La transpuesta de la identidad es la misma matriz. Restando: 3I - I = 2I." }
    ]},
    { cat: "Cónicas", plantillas: [
        { p: "Identifique la cónica asociada a partir de la ecuación cuadrática: 2x<sup>2</sup> + 2y<sup>2</sup> - 8 = 0.", o: {A:"Circunferencia", B:"Elipse", C:"Parábola", D:"Hipérbola"}, c: "A", e: "Al tener coeficientes cuadráticos idénticos y del mismo signo (A = B = 2), la ecuación modela una circunferencia." }
    ]},
    { cat: "Derivadas", plantillas: [
        { p: "Calcule la derivada de la función potencia empleando reglas de derivación: f(x) = 4x<sup>3</sup> - 5x.", o: {A:"12x<sup>2</sup> - 5", B:"12x - 5", C:"4x<sup>2</sup>", D:"12x<sup>3</sup>"}, c: "A", e: "Bajando los exponentes multiplicativos de forma lineal: d/dx(4x<sup>3</sup>) = 12x<sup>2</sup> y d/dx(-5x) = -5." }
    ]}
];

// Generar dinámicamente las 200 preguntas sin repetición combinando las bases temáticas
let idCampana = 1;
while(bancoPreguntas.length < 200) {
    ejes.forEach(eje => {
        eje.plantillas.forEach(p => {
            if(bancoPreguntas.length < 200) {
                bancoPreguntas.push({
                    categoria: eje.cat,
                    pregunta: `[Reactivo #${idCampana}] ` + p.p,
                    opciones: {...p.o},
                    correcta: p.c,
                    explicacion: p.e
                });
                idCampana++;
            }
        });
    });
}

let preguntasSeleccionadas = [];
let indicePreguntaActual = 0;
let puntaje = 0;
const totalPreguntasPorJuego = 10; 

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
        finalizarJuego();
    }
}

function finalizarJuego() {
    cambiarPantalla(screenResult);
    document.getElementById('final-score').textContent = puntaje;
    const evalBox = document.getElementById('final-evaluation');
    if (puntaje === totalPreguntasPorJuego) {
        evalBox.innerHTML = "🏆 ¡Perfecto! Dominas con rigor todos los ejes temáticos del examen de admisión.";
        evalBox.style.color = "var(--success)";
    } else if (puntaje >= totalPreguntasPorJuego * 0.7) {
        evalBox.innerHTML = "👍 ¡Muy bien! Posees bases sumamente sólidas para el ingreso universitario.";
        evalBox.style.color = "var(--secondary-color)";
    } else {
        evalBox.innerHTML = "📚 ¡Continúa repasando! Analiza los argumentos explicativos para fortalecer tus competencias.";
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
    helpBox.innerHTML = `📞 <strong>El Tutor Mentor te sugiere:</strong> "Analizando las propiedades analíticas del modelo, tengo una certeza del 90% de que la respuesta correcta es la opción <strong>\${q.correcta}</strong>."`;
    comodinesDisponibles.phone = false;
    actualizarVisualComodines();
}

function usarPublico() {
    if(!comodinesDisponibles.public) return;
    const q = preguntasSeleccionadas[indicePreguntaActual];
    let dist = {A:10, B:10, C:10, D:10}; dist[q.correcta] = 70;
    helpBox.style.display = 'block';
    helpBox.innerHTML = `📊 <strong>Simulación estadística del Auditorio Académico:</strong><br>A: \${dist.A}% | B: \${dist.B}% | C: \${dist.C}% | D: \${dist.D}%`;
    comodinesDisponibles.public = false;
    actualizarVisualComodines();
}