var colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass


let mensaje = "Hola"
//console.log(mensaje)

function sumar(a,b){
    return a+b
}
//console.log(sumar(1,2))

let persona = {
    nombre: "Luke",
    apellido: "Skywallker",
    edad: 21,
    direccion: "Deathstar",
    saludar: function (){
        console.log("Hola, me llamo:", this.nombre, this.apellido)
    }
}

let persona2 = {
    nombre: "Leia",
    apellido: "Organa",
    edad: 21,
    direccion: "Tatooine"
}

let persona3 = {
    nombre: "Anakin",
    apellido: "Skywalker",
    edad: 30,
    direcion: "Tatooine"
}

//console.log(persona, persona2, persona3)
