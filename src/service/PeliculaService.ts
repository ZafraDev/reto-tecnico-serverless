import { grabarPelicula, obtenerPelicula, obtenerPeliculas } from '../dal/PeliculaDAO'
import PeliculaDTO from '../dto/PeliculaDTO'

export const grabarPeliculaService = async (pelicula: PeliculaDTO): Promise<PeliculaDTO> => {
  return await grabarPelicula(pelicula)
}

export const obtenerPeliculaService = async (id: number): Promise<PeliculaDTO> => {
  return await obtenerPelicula(id)
}

export const obtenerPeliculasService = async (): Promise<PeliculaDTO[]> => {
  return await obtenerPeliculas()
}
