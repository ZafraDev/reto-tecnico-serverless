import EspecieDTO from '../dto/EspecieDTO'
import { buscarEspecieDelServicio } from '../dal/EspecieDAO'

export const buscarEspecieService = async (search = ''): Promise<EspecieDTO[]> => {
  return await buscarEspecieDelServicio(search)
}
