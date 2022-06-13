const heroes = {
   
    capi: {
    nombre:"capitan america",
    poder: "usar su escudo muy chido"
    },


    iron:{
        nombre:"iron man",
        poder:"ser millonario"
    },
    spider:{
        nombre:"spider man",
        poder:"soportar pidaduras de arañas geneticamente modificadas"
    }


}


export const buscarHeroe = (id,callback) => {

    const heroe = heroes[id];

    if(heroe){

        callback(null,heroe)//el primer argumento es un null porque enlos callback el primer argumneto siempre es un error
        //como en esta ocndicional ya sabemos que sí existe, entonces ese error será null.

    }else{

        callback(`no existe un herore con el id ${id}`);

    }


}