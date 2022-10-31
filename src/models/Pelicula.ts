class Pelicula {
  director: string
  episodio: number
  titulo: string
  fechaLanzamiento: string
  id?: string

  constructor (director: string, episodio: number, titulo: string, fechaLanzamiento: string, id?: string) {
    this.director = director
    this.episodio = episodio
    this.titulo = titulo
    this.fechaLanzamiento = fechaLanzamiento
    this.id = id
  }
}

export default Pelicula
