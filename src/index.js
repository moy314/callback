import {buscarHeroe} from './js/callbacks'
import './styles.css';

//console.log("hola mundo");

const heroeId = "capi";
const heroeId2 = "iron";


buscarHeroe(heroeId,(err,heroe)=>{
    if(err){

        console.error(err);
    }
    else{
        console.info(heroe);
    }

})


