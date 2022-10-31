import { structure } from './../libs/lambda'
import { APIGatewayProxyEvent } from 'aws-lambda'
import EspecieDTO from '../dto/EspecieDTO'
import { buscarEspecieService } from '../service/EspecieService'

export const handler = structure(async (event: APIGatewayProxyEvent): Promise<EspecieDTO[]> => {
  const search = event.queryStringParameters?.search ?? ''
  const data = await buscarEspecieService(search)
  return data
})
