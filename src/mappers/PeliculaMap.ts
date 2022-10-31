import PeliculaDTO from '../dto/PeliculaDTO'
import Pelicula from '../models/Pelicula'

export const peliculaMapper = ({
  director,
  episodio,
  titulo,
  fechaLanzamiento,
  id
}: any): PeliculaDTO => {
  return new Pelicula(director, episodio, titulo, fechaLanzamiento, id)
}
