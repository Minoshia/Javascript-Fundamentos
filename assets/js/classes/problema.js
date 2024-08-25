
const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir (){
        console.log( `Nombre: ${ this.nombre } - Edad: ${ this.edad }` );
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 20,
    imprimir (){
        console.log( `Nombre: ${ this.nombre } - Edad: ${ this.edad }` );
    }
}


// fher.imprimir();

function Persona(nombre , edad) {
    console.log('Se ejecuto la función');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

const maria = new Persona('Maria', 20);
const melissa = new Persona('Melissa', 33);

maria.imprimir();
melissa.imprimir();
