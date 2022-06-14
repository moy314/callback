import { promesaLenta,promesaMedia,promesaRapida } from './js/promesas';
import './styles.css';


// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

Promise.race([promesaLenta,promesaMedia,promesaRapida])
        .then(console.log);