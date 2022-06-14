//import { promesaLenta,promesaMedia,promesaRapida } from './js/promesas';
import './styles.css';
import { buscarHeroe,buscarHeroeAsync } from './js/promesas';

// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta,promesaMedia,promesaRapida])
//         .then(console.log);


buscarHeroe('capi').then( heroe => console.log(heroe.nombre));
buscarHeroeAsync('iron').then( heroe => console.log(heroe.nombre));