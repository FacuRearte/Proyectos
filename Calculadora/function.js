var operandoa;
var operandob;
var operacion;
function init() {
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    // Eventos
    uno.onclick = e => {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = e => {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = e => {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = e => {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = e => {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = e => {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = e => {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = e => {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = e => {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = e => {
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = e => {
        resetear();
    }
    suma.onclick = e => {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();        
    }
    resta.onclick = e => {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();        
    }
    multiplicacion.onclick = e => {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();        
    }
    division.onclick = e => {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();        
    }
    igual.onclick = e => {
        operandob = resultado.textContent;
        resolver();
    }
}

function limpiar() {
    resultado.textContent = ""
}
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function resolver() {
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}