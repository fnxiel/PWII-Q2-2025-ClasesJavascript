import { IActor } from "./models/IActor"
import { IPelicula } from "./models/IPelicula"
import { IPortadaPelicula } from "./models/IPortadaPelicula"
import { Pelicula } from "./models/Pelicula"

// let saludo = "Hola mundo!!!!" 

let textoNumero: string | number = "0"
textoNumero = 1

// let observacion: string | undefined
// console.log(observacion)
// observacion = "Tengo observaciones"
// console.log(observacion)

let estado: "Activo" | "Inactivo" | "No definido" = "No definido"

estado = "Activo"


const actor1: IActor = {
    id: 2,
    foto: "www.google.com",
    nombre: "David Harbour"
}

let portada : IPortadaPelicula = {
    urlImagen: "https://www.imdb.com/title/tt20969586/?ref_=fea_csegswg_em00086_1_poster_sm",
    enlace: "https://www.google.com",
    desc: "Portada de la pelicula Thunderbolts"
}

let pelicula1: IPelicula = new Pelicula(
        portada,
        "Thunderbolts",
        "In theaters Friday, May 2",
        "Please hold. The Avengers aren't available at the moment, but your call is very important to them. Instead, this summer, there will be a new superhero team-up – between Bucky Barnes, Yelena Belova, Red Guardian, Ghost, Taskmaster, and John Walker – to fight a new-to-us supervillain who hasn’t yet been established in the MCU (but who is well known to comic-book readers). The seemingly impossible mission is a death trap set by the fabulously duplicitous Valentina Allegra de Fontaine, and the trailers have us feeling emotions. This is your chance to get familiar with the group’s dynamics before they are fully integrated, alongside the Fantastic Four and the X-Men, in Avengers: Doomsday."
)

let pelicula2: IPelicula = new Pelicula(
    portada,
    "Pelicula 2",
    "Subtitulo",
    "Descripcion de la pelicula 2"
)

// let pelicula1: IPelicula = {
//     portada: {
//         urlImagen: "https://www.imdb.com/title/tt20969586/?ref_=fea_csegswg_em00086_1_poster_sm",
//         enlace: "https://www.google.com",
//         desc: "Portada de la pelicula Thunderbolts"
//     },
//     titulo: "Thunderbolts",
//     calificacion: 7.7,
//     subtitulo: "In theaters Friday, May 2",
//     descripcion: "Please hold. The Avengers aren't available at the moment, but your call is very important to them. Instead, this summer, there will be a new superhero team-up – between Bucky Barnes, Yelena Belova, Red Guardian, Ghost, Taskmaster, and John Walker – to fight a new-to-us supervillain who hasn’t yet been established in the MCU (but who is well known to comic-book readers). The seemingly impossible mission is a death trap set by the fabulously duplicitous Valentina Allegra de Fontaine, and the trailers have us feeling emotions. This is your chance to get familiar with the group’s dynamics before they are fully integrated, alongside the Fantastic Four and the X-Men, in Avengers: Doomsday.",
//     elenco: [
//         {
//             id: 1,
//             foto: "https://www.imdb.com/name/nm6073955/?ref_=fea_csegswg_em00086_1_rel_1_sm",
//             nombre: "Florence Pugh"
//         },
//         actor1
//     ],
//     // calificar(calificacion){
//     //     this.calificacion = calificacion
//     //     console.log("Calificada con", this.calificacion)
//     //     return this.calificacion
//     // },
//     // reproducir(){
//     //     console.log("Reproduciendo", this.titulo, this.subtitulo)
//     // }
// }

// let pelicula2: IPelicula = {
//     portada: {
//         urlImagen: "",
//         enlace: "",
//         desc: ""
//     },
//     titulo: "",
//     calificacion: 0,
//     subtitulo: "",
//     descripcion: "",
//     elenco: [],
//     // calificar(calificacion){
//     //     this.calificacion = calificacion
//     //     console.log("Calificada con", this.calificacion)
//     //     return this.calificacion
//     // },
//     // reproducir(){
//     //     console.log("Reproduciendo", this.titulo, this.subtitulo)
//     // }
// }


pelicula2.elenco.push(actor1)
pelicula2.elenco.push({
    id: 0,
    foto: "",
    nombre: ""
})

pelicula2.calificar(5)
pelicula2.reproducir()
pelicula2.calificar(3)