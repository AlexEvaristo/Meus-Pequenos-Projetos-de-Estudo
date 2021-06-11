
const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    //const result = (peso - (peso * (peso * 0,30))).toFixed(2);

    if(nome !== "" && altura !== "" && peso !== ""){
        const valorIMC =(peso / (altura * altura)).toFixed(2);
       

        resultado.textContent = valorIMC;

        let classificacao = " ";
        if (valorIMC < 18.5){
            classificacao = "Abaixo do Peso!";
        }else if(valorIMC < 25){
            classificacao = "com peso ideal, Parabéns!"
        }else if(valorIMC < 30){
            classificacao = "levemente acima do peso!";
        }else if(valorIMC < 35){
            classificacao = "obesidade grau I";
        }else if(valorIMC < 40){
            classificacao = "obesidade grau II";
        }else{
            classificacao = "Obesidade grau III, 'Obesidad Morbida', Cuidado!!!!"
        }
        resultado.textContent = `${nome} seu IMC é: ${valorIMC} e você esta ${classificacao}`; 

    }else{
        resultado.textContent = "Preencha os campos!";
    }
}

calcular.addEventListener('click', imc);