import { IActor } from "./IActor";
import { IPelicula } from "./IPelicula";
import { IPortadaPelicula } from "./IPortadaPelicula";

export class Pelicula implements IPelicula{
    portada: IPortadaPelicula;
    titulo: string;
    calificacion: number;
    subtitulo: string;
    descripcion: string;
    elenco: IActor[];

    constructor(portada: IPortadaPelicula, titulo: string, subtitulo: string, descripcion: string){
        this.portada = portada
        this.titulo = titulo
        this.calificacion = 0
        this.subtitulo = subtitulo
        this.descripcion = descripcion
        this.elenco = []
    }
    reproducir(): void {
        console.log("Reproduciendo", this.titulo, this.subtitulo)
    }
    calificar(calificacion: 1 | 2 | 3 | 4 | 5): number {
        this.calificacion = calificacion
        console.log("Calificado con", this.calificacion)
        return this.calificacion
    }
    
}