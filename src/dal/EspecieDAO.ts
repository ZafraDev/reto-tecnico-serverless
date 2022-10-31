import { get } from '../libs/request'
import { especieMapper } from '../mappers/EspecieMap'
import EspecieDTO from '../dto/EspecieDTO'

export const buscarEspecieDelServicio = async (search: string = ''): Promise<EspecieDTO[]> => {
  const url = `https://swapi.dev/api/species/?search=${search}`
  const { data } = await get(url)
  return data.results.map((especie: any) => especieMapper(especie))
}
