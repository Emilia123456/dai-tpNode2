import Alumno from "./models/alumno.js" 
import{sumar,restar,multiplicar,dividir}from"./modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js"

import express from "express";
import cors from "cors";

const app = express(); 
const port=3001; 

app.use(cors());
app.use(express.json());

//endpoints 
app.get('/', (req,res)=>{ //EndPoint"/" 
    res.send('Ya estoy respondiendo!'); 
})

app.get('/saludar/:nombre',(req,res)=>{ //EndPoint"/saludar" 
    res.send('Hola ' +  req.params.nombre); 
})

app.get('/validarfecha/:ano/:mes/:dia',(req,res)=>{ //EndPoint"/saludar" 
    let ano = req.params.ano;
    let mes = req.params.mes;
    let dia = req.params.dia; 

    let fecha = `${ano}-${mes}-${dia}`;
    let fechaReal = null;
    fechaReal = Date.parse(fecha)
    console.log(fechaReal)
    if (fechaReal != null && !isNaN(fechaReal)){
        
        res.status(200);
        res.send(fecha);
    }else {
        res.status(404);
        res.send("ERROR la fecha no es valida ");
    }
    
})

app.listen(port,()=>{ 
    console.log(`Exampleapplisteningonport${port}`) 
})