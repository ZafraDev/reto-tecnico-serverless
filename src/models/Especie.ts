import EspecieDTO from '../dto/EspecieDTO'

class Especie implements EspecieDTO {
  id?: string
  nombre: string
  clasificacion: string
  designacion: string
  alturaMedia: number
  colorPiel: string
  colorPelo: string
  colorOjos: string
  promedioVida: number
  lenguaje: string

  constructor (
    nombre: string,
    clasificacion: string,
    designacion: string,
    alturaMedia: number,
    colorPiel: string,
    colorPelo: string,
    colorOjos: string,
    promedioVida: number,
    lenguaje: string,
    id?: string
  ) {
    this.id = id
    this.nombre = nombre
    this.clasificacion = clasificacion
    this.designacion = designacion
    this.alturaMedia = alturaMedia
    this.colorPiel = colorPiel
    this.colorPelo = colorPelo
    this.colorOjos = colorOjos
    this.promedioVida = promedioVida
    this.lenguaje = lenguaje
  }
}

export default Especie
