import { APIGatewayProxyEvent } from 'aws-lambda'
import { handler as obtenerPeliculas } from '../../src/functions/peliculas/obtenerPeliculas'
import { validate as validateUUID } from 'uuid'

describe('Endpoint obtenerPelicula', function () {
  it('verifies successful response', async () => {
    const event: APIGatewayProxyEvent = {} as any
    const result = await obtenerPeliculas(event)
    console.log(result)
    const data = JSON.parse(result.body)
    expect(result.statusCode).toEqual(200)
    expect(data.status).toEqual(200)
    expect(data.success).toEqual(true)
    expect(Array.isArray(data.data)).toBe(true)
    expect(data.data.length).toBeGreaterThan(0)
    expect(validateUUID(data.data[0].id)).toBe(true)
    expect(typeof data.data[0].director).toBe('string')
    expect(typeof data.data[0].episodio).toBe('string')
    expect(typeof data.data[0].titulo).toBe('number')
    expect(new Date(data.data[0].fechaLanzamiento)).not.toBe('Invalid Date')
  })
})
