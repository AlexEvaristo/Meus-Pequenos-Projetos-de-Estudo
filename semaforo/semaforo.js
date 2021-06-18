const img =  document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;


const trafficLight = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();    
}

//função para mudar o index
const nextIndex = () => {
    //ternário
    colorIndex = colorIndex < 2 ? ++colorIndex : 0;
    // if (colorIndex < 2) {
    //     colorIndex++
    // }else {
    //     colorIndex = 0;
    // }
}

//Função para trocar de cor no semáforo
const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[ colorIndex ]
    turnOn[color]();
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval (intervalId);
}
const turnOn = {
    //função literal
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    'automatic':() => intervalId = setInterval(changeColor, 1000 )
}

buttons.addEventListener('click', trafficLight);
