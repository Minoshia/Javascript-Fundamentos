
class Singleton {
    static instancia; // Esto es undefined
    nombre = '';

    constructor( nombre = '' ) {

        // La doble ! convierte a booleano.
        if( !!Singleton.instancia ) { 
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');

console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia2 es: ${ instancia2.nombre }`);




