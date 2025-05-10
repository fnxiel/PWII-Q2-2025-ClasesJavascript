const Persona = require("./Persona")

class Empleado extends Persona{
    salarioBase
    fechaContratacion
    puesto

    constructor(nombre, apellido, edad, direccion, fechaNacimiento, salarioBase, puesto){
        super(nombre, apellido, edad, direccion, fechaNacimiento)
        this.salarioBase = salarioBase
        this.puesto = puesto
        this.fechaContratacion = new Date()
    }

    darInformacionEmpleado(){
        this.presentarse()
        console.log("Mi puesto es", this.puesto)
        console.log("Mi salario base es", this.salarioBase)
        console.log("Fui contratado el", this.fechaContratacion)
    }
}

module.exports = Empleado