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
    if (fechaReal != null && !isNaN(fechaReal)){
        
        res.status(200);
        res.send(fecha);
    }else {
        res.status(404);
        res.send("ERROR la fecha no es valida ");
    }
    
})

app.get('/matematica/sumar',(req,res)=>{ //EndPoint"/saludar" 
    res.status(200);
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    let respuesta  = sumar(n1, n2);
    console.log(respuesta);
    res.send(respuesta.toString());
})

app.get('/matematica/restar',(req,res)=>{ //EndPoint"/saludar" 
    res.status(200);
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    let respuesta  = restar(n1, n2);
    console.log(respuesta);
    res.send(respuesta.toString());
})

app.get('/matematica/multiplicar',(req,res)=>{ //EndPoint"/saludar" 
    res.status(200);
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    let respuesta  = multiplicar(n1, n2);
    console.log(respuesta);
    res.send(respuesta.toString());
})


app.get('/matematica/multiplicar',(req,res)=>{ //EndPoint"/saludar" 
    res.status(200);
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    let respuesta  = multiplicar(n1, n2);
    console.log(respuesta);
    res.send(respuesta.toString());
})

app.get('/matematica/dividir',(req,res)=>{ //EndPoint"/saludar" 
    
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    if(n2!=0){
        res.status(200);
        let respuesta  = dividir(n1, n2);
        res.send(respuesta.toString());
    }else{
        res.status(404);
        res.send("ERROR el divisor no es valido ");
    }
})

app.get('/omdb-wrapper/searchbypage', async(req,res)=>{  
    let search = req.params.texto;
    let p = req.params.pagina;
    
    let returnStatus = 400; 
    let returnResult = [];
    try{
        returnResult = await OMDBSearchByPage(search, p);
        returnStatus = 200; 
    }catch{
        
    }
    res.status(returnStatus).send(returnResult);
})


app.get('/omdb-wrapper/searchcomplete', async(req,res)=>{ 
    let searchText = req.query.texto;
    
    let returnStatus = 400; 
    let returnResult = [];
    try{
        returnResult = await OMDBSearchComplete(searchText);
        returnStatus = 200; 
    }catch{
        //res.send("ERROR no se encontro la pagina requerida");
    }
    res.status(returnStatus).send(returnResult);
})


app.get('/omdb-wrapper/getbyomdbid', async(req,res)=>{ 
    let imdbID = req.query.id;
    let returnStatus = 400; 
    let returnResult = [];
    try{
        returnResult = await OMDBGetByImdbID(imdbID);
        returnStatus = 200; 
    }catch{ 
  
    }
    res.status(returnStatus).send(returnResult);
})


const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido", "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao", "32623391", 18));


app.get('/alumnos', (req, res) => {
    res.status(200).json(alumnosArray);
});


app.get('/alumnos/:dni', (req, res) => {
    const dni = req.params.dni;
    const alumno = alumnosArray.find(alumno => alumno.dni === dni); 
    if (alumno) {                          
        res.status(200).json(alumno);
    } else {
        res.status(400).send('Alumno no encontrado');
    }
});


app.post('/alumnos', (req, res) => {
    const { username, dni, edad } = req.body;
    const alumno = new Alumno(username, dni, edad);
    alumnosArray.push(alumno);

    res.status(201).send('Alumno creado exitosamente.');
});


app.delete('/alumnos', (req, res) => {
    const { dni } = req.body;

    const index = alumnosArray.findIndex(alumno => alumno.dni === dni);
    if (index !== -1) {
        alumnosArray.splice(index, 1);
        res.status(200).send('Alumno eliminado correctamente.');
    } else {
        res.status(404).send('No se encontró ningún alumno con ese DNI.');
    }
});


app.listen(port,()=>{ 
    console.log(`Exampleapplisteningonport${port}`) 
})