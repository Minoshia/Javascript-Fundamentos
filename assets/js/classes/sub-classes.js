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
        super.quienSoy();
    }

    miFrase(){
        this.quienSoy();
        console.log(`Mi frase es: ${ this.frase }`);
    }

}

class Heroe extends Persona {
    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';

    }

}


const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();