// Criar um cronometro no naveador com butõas para iniciar, pausar e zerar (estilizar com CSS)

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');



let segundos = 0
let minutos = 0
let horas = 0
let timer;


function iniciarTela () {
    segundos++
    relogio.textContent = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;


    if (segundos === 60) {
        segundos = 0; // reinicia
        minutos++;
        
    };

    if (minutos === 60) {
        minutos = 0; // reinicia
        horas++;
        
    };
   




}

if (relogio) relogio.textContent = '00:00:00';

function iniciaCronometro (){
    if (!timer){
        timer = setInterval(iniciarTela, 1000);
        iniciar.disabled = true;

    }
};

function pausarCronometro (){
   if (timer) {
    clearInterval(timer);
    timer = null;
    pausar.textContent = 'Retornar';
    pausar.classList.add('alerta');
    iniciar.disabled = true;

    } else {
        timer = setInterval(iniciarTela, 1000);
        pausar.textContent = 'Pausar';
        pausar.classList.remove('alerta');
        
           }
};
function zerarCronometro (){
    clearInterval(timer);
    timer = null;
    relogio.textContent = '00:00:00';
    pausar.textContent = 'Pausar';
    pausar.classList.remove('alerta');
    iniciar.disabled = false;
    segundos = 0
    minutos = 0
    horas = 0

};

iniciar.addEventListener('click', iniciaCronometro);
pausar.addEventListener('click', pausarCronometro);
zerar.addEventListener('click', zerarCronometro);

    
