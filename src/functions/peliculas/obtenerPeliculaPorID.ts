import { structure } from '../../libs/lambda'
import { APIGatewayProxyEvent } from 'aws-lambda'
import PeliculaDTO from '../../dto/PeliculaDTO'
import { obtenerPeliculaService } from '../../service/PeliculaService'

export const handler = structure(
  async (event: APIGatewayProxyEvent): Promise<PeliculaDTO> => {
    const id = event.pathParameters?.id

    if (id == null) {
      throw new Error('No se ha enviado el ID de la película')
    }

    const parseID = parseInt(id)

    if (isNaN(parseID)) {
      throw new Error('El ID de la película no es un número')
    }

    const data = await obtenerPeliculaService(parseID)
    return data
  }
)
