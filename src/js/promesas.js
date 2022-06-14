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

export const buscarHeroe = (id)=>{

    const heroe = heroes[id];
    
    return new Promise((resolve,reject) =>{ // las promesas reciben una funcion callback

        if (heroe){

            resolve(heroe);
        }
        else{
            reject(`no existe un herore con el id ${id}`);
        }

    })

}



const promesaLenta = new Promise( (resolve,reject) => {

    setTimeout( () => resolve('promesa lenta'),2000)
})

const promesaMedia = new Promise( (resolve,reject) => {

    setTimeout( () => resolve('promesa Media'),1500)
})

const promesaRapida = new Promise( (resolve,reject) => {

    setTimeout( () => resolve('promesa Rapida'),1000)
})





export {

    promesaLenta,
    promesaMedia,
    promesaRapida
    
}