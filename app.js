//const Persona = require("./models/Persona")
const Configuracion = require("./config")
const Datos = require("./inicializacion")
const Pertenencia = require("./models/Pertenencias")

const {personaC, personaC2, personaC3} = Datos

console.log("Bienvenido a", Configuracion.nombreAplicacion)

console.log(personaC3.nombreCompleto)
personaC3.nombre = "Darth Vader"
console.log(personaC3.nombreCompleto)

console.log(personaC, personaC2, personaC3)

//persona.saludar()
personaC.saludar()
personaC.decirEdad()
personaC2.saludar()
personaC3.presentarse()

personaC3.trabajar(10)
personaC3.trabajar(5)
personaC3.trabajar(20)
personaC.trabajar(10)

personaC.imprimirFechaNacimiento()

const telefono = new Pertenencia(1, "Telefono celular", "Tecnología")
const televisor = new Pertenencia(2, "Televisor", "Tecnología")
const automovil = new Pertenencia(3, "Carro del año", "Vehículo")
const telefono2 = new Pertenencia(4, "Telefono celular", "Tecnología")


telefono.descripcion
personaC.adquirirPertenencia(telefono)
personaC.adquirirPertenencia(automovil)
personaC.adquirirPertenencia(telefono2)

personaC.imprimirPertenencias()
personaC.buscarPertenencia(4)
personaC.buscarPertenencia(2)
personaC.buscarCategoria("Tecnología")