import { APIGatewayProxyEvent } from 'aws-lambda'
import { handler as buscarEspecies } from '../../src/functions/especies/buscarEspecies'

describe('Endpoint buscarEspecies', function () {
  it('verifies successful response', async () => {
    const event: APIGatewayProxyEvent = {
      queryStringParameters: {
        a: 'Human'
      }
    } as any
    const result = await buscarEspecies(event)
    const data = JSON.parse(result.body)
    expect(result.statusCode).toEqual(200)
    expect(data.status).toEqual(200)
    expect(data.success).toEqual(true)
    expect(Array.isArray(data.data)).toBe(true)
    expect(data.data.length).toBeGreaterThan(0)
    expect(typeof data.data[0].nombre).toBe('string')
    expect(typeof data.data[0].clasificacion).toBe('string')
    expect(typeof data.data[0].designacion).toBe('string')
    expect(typeof data.data[0].alturaMedia).toBe('number')
    expect(typeof data.data[0].colorPiel).toBe('string')
    expect(typeof data.data[0].colorPelo).toBe('string')
    expect(typeof data.data[0].colorOjos).toBe('string')
    expect(typeof data.data[0].promedioVida).toBe('number')
    expect(typeof data.data[0].lenguaje).toBe('string')
  })
})
