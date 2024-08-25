

class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin Codigo', frase = 'Sin Frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida;
    }

    get getComidaFavorita(){
        return `Mi comida favorita es ${ this.comida }`
    }
 
    quienSoy (){
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`Mi frase es: ${ this.frase }`);
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

console.log(spiderman);
console.log(ironman);

/* spiderman.quienSoy();
ironman.quienSoy();
 */

spiderman.miFrase();
ironman.miFrase();

spiderman.setComidaFavorita = 'Pastel de cerezas';
ironman.setComidaFavorita = 'Shawarma';
console.log(spiderman.comida);
console.log(ironman.comida);

console.log(spiderman.getComidaFavorita);
console.log(ironman.getComidaFavorita);

/* Persona._conteo=2; */
console.log('Conteo estático: ',Persona._conteo);
console.log(Persona.conteo);



