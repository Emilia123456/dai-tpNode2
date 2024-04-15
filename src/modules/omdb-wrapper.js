/*Módulo OMDBWrapper*/ 
import axios from "axios"; 
import http from "http";
const APIKEY = `6e153896`; 
const OMDBSearchByPage = async (searchText,page=1) => {
     let returnObject={ 
        respuesta :false, 
        cantidadTotal:0, 
        datos :{} 
    }; 
        const requestString=`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
        console.log(requestString);
        try{
            const responseData = await axios.get(requestString);
            returnObject.datos=responseData.data.Search;
            returnObject.respuesta=true;
            returnObject.cantidadTotal=returnObject.datos.totalResults
        } catch (error) {
            console.error("ERROR al hacer el request: ", error)
        }
        return returnObject;
}; 
        
const OMDBSearchComplete = async(searchText)=>{ 
    let returnObject={ 
        respuesta :false,
         cantidadTotal:0, 
         datos :{} 
    }; 

    const requestString=`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
    console.log(requestString);
    
    try{
        const responseData = await axios.get(requestString);
        returnObject.datos=responseData.data.Search;
        returnObject.respuesta=true;
        returnObject.cantidadTotal=returnObject.datos.totalResults
    } catch (error) {
        console.error("ERROR al hacer el request: ", error)
    }
    return returnObject;
}; 
         
const OMDBGetByImdbID=async(imdbID)=>{ 
    let returnObject={ 
        respuesta :false, 
        cantidadTotal:0, 
        datos :{} 
    }; 
    const requestString=`http://www.omdbapi.com/?apikey=${APIKEY}&s=${imdbID}`;
    console.log(requestString);
    try{
        const responseData = await axios.get(requestString);
        returnObject.datos=JSON.parse(responseData);
        returnObject.respuesta=true;
        returnObject.cantidadTotal=returnObject.datos.totalResults
    } catch (error) {
        console.error("ERROR al hacer el request: ", error)
    }
    return returnObject;
}; 


    
export{OMDBSearchByPage,OMDBSearchComplete,OMDBGetByImdbID}; 