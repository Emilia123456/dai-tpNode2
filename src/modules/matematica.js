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

function multiplicar(a, b) {
    let z=  a * b;
    return z;
    
};


function dividir(a, b) {
    let z=  a / b;
    return z;
    
};



// Exporto todo lo que yo quiero exponer del módulo:
export {PI, sumar, restar, multiplicar, dividir}; 
