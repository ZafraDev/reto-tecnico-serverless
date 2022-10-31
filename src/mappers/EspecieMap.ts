import EspecieDTO from '../dto/EspecieDTO'
import Especie from '../models/Especie'

export const especieMapper = ({
  name,
  classification,
  designation,
  average_height,
  skin_colors,
  hair_colors,
  eye_colors,
  average_lifespan,
  language
}: any): EspecieDTO => {
  const especie = new Especie(
    name,
    classification,
    designation,
    +average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    +average_lifespan,
    language
  )
  return especie
}
