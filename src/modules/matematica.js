const PI = 3.14;
var arrayNum = ["dos", "cuatro", "ocho", "diez"]

function sumar(x, y) {
    let z=x+y;
return z;
}

function restar(x, y) {
    let z=x-y;
return z;
}

const multiplicar = (a, b) => { a * b};

const dividir = (a, b) => { a / b};



// Exporto todo lo que yo quiero exponer del módulo:
export {PI, sumar, restar, multiplicar, dividir}; 
