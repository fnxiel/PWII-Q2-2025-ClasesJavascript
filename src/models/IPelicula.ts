import { IActor } from "./IActor"
import { IPortadaPelicula } from "./IPortadaPelicula"

export interface IPelicula{
    portada: IPortadaPelicula
    titulo: string
    calificacion: number 
    subtitulo: string
    descripcion: string
    elenco: IActor[]
    reproducir(): void
    calificar(calificacion: 1 | 2 | 3 | 4 | 5): number
}