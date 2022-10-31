import { structure } from '../../libs/lambda'
import PeliculaDTO from '../../dto/PeliculaDTO'
import { obtenerPeliculasService } from '../../service/PeliculaService'

export const handler = structure(
  async (): Promise<PeliculaDTO[]> => {
    const data = await obtenerPeliculasService()
    return data
  }
)
