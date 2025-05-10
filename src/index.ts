let saludo = "Hola mundo!!!!" 

let textoNumero: string | number = "0"
textoNumero = 1

let observacion: string | undefined
console.log(observacion)
observacion = "Tengo observaciones"
console.log(observacion)

let estado: "Activo" | "Inactivo" | "No definido" = "No definido"

estado = "Activo"

interface IPortadaPelicula{
    urlImagen: string
    enlace: string
    desc: string
}

interface IActor{
    id: number
    foto: string
    nombre: string
}

interface IPelicula{
    portada: IPortadaPelicula
    titulo: string
    calificacion: number 
    subtitulo: string
    descripcion: string
    elenco: IActor[]
}

const actor1: IActor = {
    id: 2,
    foto: "www.google.com",
    nombre: "David Harbour"
}

let pelicula1: IPelicula = {
    portada: {
        urlImagen: "https://www.imdb.com/title/tt20969586/?ref_=fea_csegswg_em00086_1_poster_sm",
        enlace: "https://www.google.com",
        desc: "Portada de la pelicula Thunderbolts"
    },
    titulo: "Thunderbolts",
    calificacion: 7.7,
    subtitulo: "In theaters Friday, May 2",
    descripcion: "Please hold. The Avengers aren't available at the moment, but your call is very important to them. Instead, this summer, there will be a new superhero team-up – between Bucky Barnes, Yelena Belova, Red Guardian, Ghost, Taskmaster, and John Walker – to fight a new-to-us supervillain who hasn’t yet been established in the MCU (but who is well known to comic-book readers). The seemingly impossible mission is a death trap set by the fabulously duplicitous Valentina Allegra de Fontaine, and the trailers have us feeling emotions. This is your chance to get familiar with the group’s dynamics before they are fully integrated, alongside the Fantastic Four and the X-Men, in Avengers: Doomsday.",
    elenco: [
        {
            id: 1,
            foto: "https://www.imdb.com/name/nm6073955/?ref_=fea_csegswg_em00086_1_rel_1_sm",
            nombre: "Florence Pugh"
        },
        actor1
    ]
}

let pelicula2: IPelicula = {
    portada: {
        urlImagen: "",
        enlace: "",
        desc: ""
    },
    titulo: "",
    calificacion: 0,
    subtitulo: "",
    descripcion: "",
    elenco: []
}


pelicula2.elenco.push(actor1)
pelicula2.elenco.push({
    id: 0,
    foto: "",
    nombre: ""
})

console.log(pelicula1)
console.log(pelicula2)


// saludo = 0
// saludo = new Date()
// saludo = false
// saludo = undefined
// saludo = null
// saludo = []
// saludo = {}

console.log(saludo)