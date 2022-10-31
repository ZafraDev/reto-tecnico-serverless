import { peliculaMapper } from './../mappers/PeliculaMap'
import { structure } from './../libs/lambda'
import { APIGatewayProxyEvent } from 'aws-lambda'
import PeliculaDTO from '../dto/PeliculaDTO'
import { grabarPeliculaService } from '../service/PeliculaService'

export const handler = structure(
  async (event: APIGatewayProxyEvent): Promise<PeliculaDTO> => {
    const pelicula = peliculaMapper(event.body)
    const data = await grabarPeliculaService(pelicula)
    return data
  }
)
