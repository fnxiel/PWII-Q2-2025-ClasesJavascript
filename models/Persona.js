const moment = require('moment')

class Persona{
    //Propiedades - Atributos
    nombre
    apellido
    edad
    direccion
    horasTrabajadas
    pertenencias
    //Constructor
    constructor(nombre, apellido, edad, direccion, fechaNacimiento){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.direccion = direccion
        this.fechaCreacion = new Date()
        this.fechaNacimiento = fechaNacimiento
        this.horasTrabajadas = 0
        this.pertenencias = []
    }
    get nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
    //Metodos - Funciones
    saludar(){
        console.log("Hola, me llamo:", this.nombreCompleto)
    }
    decirEdad(){
        console.log("Tengo", this.edad, "años")
    }
    presentarse(){
        this.saludar()
        this.decirEdad()
    }
    trabajar(cantidad){
        this.horasTrabajadas = this.horasTrabajadas + cantidad
        console.log(`Acabo de trabajar ${cantidad} horas, por lo que he trabajado ${this.horasTrabajadas} horas en total.`)
    }
    imprimirFechaNacimiento(){
        console.log("Naci el", moment(this.fechaNacimiento).format("DD-MM-YYYY"))
    }

    //Arreglos
    //CRUD
    //Create
    adquirirPertenencia(nuevaPertenencia){
        console.log("Acabo de adquirir un nuevo", nuevaPertenencia.descripcion)
        this.pertenencias.push(nuevaPertenencia)
    }
    //Read
    imprimirPertenencias(){
        //Recorrer arreglos
        console.log("Estas son mis pertenencias:")
        // //for
        //     for (let index = 0; index < this.pertenencias.length; index++) {
        //         const pertenencia = this.pertenencias[index];
        //         console.log(pertenencia.id, pertenencia.descripcion)
        //     }
        //foreach
            // //bloque de funcion
            // function imprimirPertenencia(pertenencia){
            //     console.log(pertenencia.id, pertenencia.descripcion)
            // }

            // //Funcion de flecha
            // const imprimirPertenciaFF = (pertenencia) => console.log(pertenencia.id, pertenencia.descripcion)

            this.pertenencias.forEach((pertenencia) => console.log(pertenencia.id, pertenencia.descripcion))
        //map
            // const resultadoMap = this.pertenencias.map((pertenencia) => {
            //     console.log(pertenencia.id, pertenencia.descripcion)
            //     return pertenencia.categoria
            // })

            // console.log(resultadoFE, resultadoMap)
        //console.log(this.pertenencias)
    }
    buscarPertenencia(id){
        //Find
        const resultado = this.pertenencias.find((pertenencia) => pertenencia.id === id)
        if(resultado){
            console.log("Encontrada la pertenencia con id:", resultado.id, "Es un", resultado.descripcion)

        }else{
            console.log("No se encontró una pertenencia con el id", id)
        }
    }

    buscarCategoria(categoria){
        //Filter
        const resultado = this.pertenencias.filter((pertenencia) => pertenencia.categoria === categoria)
        console.log("Encontradas las pertenencias con categoria:", categoria)
        resultado.forEach(elemento => console.log(elemento.id, elemento.descripcion))
    }
    
    //Update

    //Delete
}


module.exports = Persona
