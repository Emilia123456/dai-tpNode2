export default class Alumno { 
    constructor(nombre, dni, edad) { 
        this.nombre =nombre; 
        this.dni =dni; 
        this.edad =edad; 

    } 
    getNombre(){ 
        return this.nombre; 
    } 

    getDNI(){ 
        return this.dni; 
    } 
    
    getEdad(){ 
        return this.edad; 
    }  

    getInformacion(){ 
        return`nombre:${this.nombre},casado:${this.casado}`; 
    } 
} 

