import { generarID } from './../libs/generarID'
import database from '../config/database'
import PeliculaDTO from '../dto/PeliculaDTO'
import { peliculaMapper } from '../mappers/PeliculaMap'

const tableName = process.env.PELICULAS_TABLE ?? ''

export const obtenerPeliculas = async (): Promise<PeliculaDTO[]> => {
  const params = {
    TableName: tableName
  }
  const { Items } = await database.scan(params).promise()
  return Items?.map((item: any) => peliculaMapper(item)) ?? []
}

export const obtenerPelicula = async (id: number): Promise<PeliculaDTO> => {
  const params = {
    TableName: tableName,
    Key: {
      id
    }
  }
  const { Item } = await database.get(params).promise()
  return peliculaMapper(Item)
}

export const grabarPelicula = async (
  pelicula: PeliculaDTO
): Promise<PeliculaDTO> => {
  const id = generarID()
  pelicula.id = id
  await database
    .put({
      TableName: tableName,
      Item: pelicula
    })
    .promise()
  return pelicula
}
