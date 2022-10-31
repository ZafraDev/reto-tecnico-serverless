import { APIGatewayProxyEvent } from 'aws-lambda'
import { handler as grabarPelicula } from '../../src/functions/peliculas/grabarPelicula'
import { validate as validateUUID } from 'uuid'

describe('Endpoint obtenerPelicula', function () {
  it('verifies successful response', async () => {
    const dataToSave = `{
      "director": "Rodrigo Prueba 2",
      "episodio": "2",
      "titulo": "Reto Indra Prueba 2",
      "fechaLanzamiento": "1998-11-10"
  }`
    const event: APIGatewayProxyEvent = {
      body: dataToSave
    } as any
    const result = await grabarPelicula(event)
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
