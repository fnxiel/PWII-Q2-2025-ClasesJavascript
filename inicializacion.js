const Persona = require('./models/Persona')

const personaC = new Persona("Luke", "Skywallker", 21, "Deathstar", new Date())
const personaC2 = new Persona("Leia", "Organa", 21, "Tatooine", new Date())
const personaC3 = new Persona("Anakin", "Skywalker", 30, "Tatooine", new Date())

module.exports = {personaC, personaC2, personaC3}