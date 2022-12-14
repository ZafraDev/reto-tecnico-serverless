// this file was generated by serverless-auto-swagger
module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'RetoTecnicoIndra',
    version: '1.0.0'
  },
  servers: [
    {
      url: 'https://8ojagcyt0i.execute-api.us-east-1.amazonaws.com'
    }
  ],
  tags: [
    {
      name: 'Especies'
    },
    {
      name: 'Peliculas'
    }
  ],
  paths: {
    '/especies': {
      get: {
        tags: [
          'Especies'
        ],
        summary: 'getEspecies',
        parameters: [
          {
            name: 'search',
            in: 'query',
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            description: 'OK',
            headers: {
              Date: {
                schema: {
                  type: 'string',
                  example: 'Mon, 31 Oct 2022 05:35:12 GMT'
                }
              },
              'Content-Type': {
                schema: {
                  type: 'string',
                  example: 'application/json'
                }
              },
              'Content-Length': {
                schema: {
                  type: 'integer',
                  example: '2308'
                }
              },
              Connection: {
                schema: {
                  type: 'string',
                  example: 'keep-alive'
                }
              },
              'access-control-allow-origin': {
                schema: {
                  type: 'string',
                  example: '*'
                }
              },
              'access-control-allow-credentials': {
                schema: {
                  type: 'boolean',
                  example: 'true'
                }
              },
              'access-control-allow-headers': {
                schema: {
                  type: 'string',
                  example: 'Content-Type'
                }
              },
              'access-control-allow-methods': {
                schema: {
                  type: 'string',
                  example: 'OPTIONS,POST,GET,PUT,DELETE'
                }
              },
              'Apigw-Requestid': {
                schema: {
                  type: 'string',
                  example: 'a2u2cg87IAMEMSw='
                }
              }
            },
            content: {
              'application/json': {
                schema: {
                  type: 'object'
                },
                example: {
                  status: 200,
                  data: [
                    {
                      nombre: 'Human',
                      clasificacion: 'mammal',
                      designacion: 'sentient',
                      alturaMedia: '180',
                      colorPiel: 'caucasian, black, asian, hispanic',
                      colorPelo: 'blonde, brown, black, red',
                      colorOjos: 'brown, blue, green, hazel, grey, amber',
                      promedioVida: '120',
                      lenguaje: 'Galactic Basic'
                    },
                    {
                      nombre: 'Droid',
                      clasificacion: 'artificial',
                      designacion: 'sentient',
                      alturaMedia: 'n/a',
                      colorPiel: 'n/a',
                      colorPelo: 'n/a',
                      colorOjos: 'n/a',
                      promedioVida: 'indefinite',
                      lenguaje: 'n/a'
                    },
                    {
                      nombre: 'Wookie',
                      clasificacion: 'mammal',
                      designacion: 'sentient',
                      alturaMedia: '210',
                      colorPiel: 'gray',
                      colorPelo: 'black, brown',
                      colorOjos: 'blue, green, yellow, brown, golden, red',
                      promedioVida: '400',
                      lenguaje: 'Shyriiwook'
                    },
                    {
                      nombre: 'Rodian',
                      clasificacion: 'sentient',
                      designacion: 'reptilian',
                      alturaMedia: '170',
                      colorPiel: 'green, blue',
                      colorPelo: 'n/a',
                      colorOjos: 'black',
                      promedioVida: 'unknown',
                      lenguaje: 'Galatic Basic'
                    },
                    {
                      nombre: 'Hutt',
                      clasificacion: 'gastropod',
                      designacion: 'sentient',
                      alturaMedia: '300',
                      colorPiel: 'green, brown, tan',
                      colorPelo: 'n/a',
                      colorOjos: 'yellow, red',
                      promedioVida: '1000',
                      lenguaje: 'Huttese'
                    },
                    {
                      nombre: "Yoda's species",
                      clasificacion: 'mammal',
                      designacion: 'sentient',
                      alturaMedia: '66',
                      colorPiel: 'green, yellow',
                      colorPelo: 'brown, white',
                      colorOjos: 'brown, green, yellow',
                      promedioVida: '900',
                      lenguaje: 'Galactic basic'
                    },
                    {
                      nombre: 'Trandoshan',
                      clasificacion: 'reptile',
                      designacion: 'sentient',
                      alturaMedia: '200',
                      colorPiel: 'brown, green',
                      colorPelo: 'none',
                      colorOjos: 'yellow, orange',
                      promedioVida: 'unknown',
                      lenguaje: 'Dosh'
                    },
                    {
                      nombre: 'Mon Calamari',
                      clasificacion: 'amphibian',
                      designacion: 'sentient',
                      alturaMedia: '160',
                      colorPiel: 'red, blue, brown, magenta',
                      colorPelo: 'none',
                      colorOjos: 'yellow',
                      promedioVida: 'unknown',
                      lenguaje: 'Mon Calamarian'
                    },
                    {
                      nombre: 'Ewok',
                      clasificacion: 'mammal',
                      designacion: 'sentient',
                      alturaMedia: '100',
                      colorPiel: 'brown',
                      colorPelo: 'white, brown, black',
                      colorOjos: 'orange, brown',
                      promedioVida: 'unknown',
                      lenguaje: 'Ewokese'
                    },
                    {
                      nombre: 'Sullustan',
                      clasificacion: 'mammal',
                      designacion: 'sentient',
                      alturaMedia: '180',
                      colorPiel: 'pale',
                      colorPelo: 'none',
                      colorOjos: 'black',
                      promedioVida: 'unknown',
                      lenguaje: 'Sullutese'
                    }
                  ],
                  success: true,
                  message: 'La operaci??n se realiz?? con ??xito'
                }
              }
            }
          }
        }
      }
    },
    '/peliculas': {
      get: {
        tags: [
          'Peliculas'
        ],
        summary: 'obtenerPeliculas',
        responses: {
          200: {
            description: 'OK',
            headers: {
              Date: {
                schema: {
                  type: 'string',
                  example: 'Mon, 31 Oct 2022 05:19:27 GMT'
                }
              },
              'Content-Type': {
                schema: {
                  type: 'string',
                  example: 'application/json'
                }
              },
              'Content-Length': {
                schema: {
                  type: 'integer',
                  example: '377'
                }
              },
              Connection: {
                schema: {
                  type: 'string',
                  example: 'keep-alive'
                }
              },
              'access-control-allow-origin': {
                schema: {
                  type: 'string',
                  example: '*'
                }
              },
              'access-control-allow-credentials': {
                schema: {
                  type: 'boolean',
                  example: 'true'
                }
              },
              'access-control-allow-headers': {
                schema: {
                  type: 'string',
                  example: 'Content-Type'
                }
              },
              'access-control-allow-methods': {
                schema: {
                  type: 'string',
                  example: 'OPTIONS,POST,GET,PUT,DELETE'
                }
              },
              'Apigw-Requestid': {
                schema: {
                  type: 'string',
                  example: 'a2si4gIDoAMEMTg='
                }
              }
            },
            content: {
              'application/json': {
                schema: {
                  type: 'object'
                },
                example: {
                  status: 200,
                  data: [
                    {
                      director: 'Rodrigo',
                      episodio: '1',
                      titulo: 'Reto Indra',
                      fechaLanzamiento: '1998-11-10',
                      id: '62dfb604-af06-4b31-a49c-0c29f73b6012'
                    },
                    {
                      director: 'Rodrigo Prueba 2',
                      episodio: '2',
                      titulo: 'Reto Indra Prueba 2',
                      fechaLanzamiento: '1998-11-10',
                      id: 'f5461f3d-3013-410e-ab3f-cbef34b9ca68'
                    }
                  ],
                  success: true,
                  message: 'La operaci??n se realiz?? con ??xito'
                }
              }
            }
          }
        }
      },
      post: {
        tags: [
          'Peliculas'
        ],
        summary: 'guardarPeliculas',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                example: {
                  director: 'Rodrigo Prueba 2',
                  episodio: '2',
                  titulo: 'Reto Indra Prueba 2',
                  fechaLanzamiento: '1998-11-10'
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: 'OK',
            headers: {
              Date: {
                schema: {
                  type: 'string',
                  example: 'Mon, 31 Oct 2022 05:19:17 GMT'
                }
              },
              'Content-Type': {
                schema: {
                  type: 'string',
                  example: 'application/json'
                }
              },
              'Content-Length': {
                schema: {
                  type: 'integer',
                  example: '239'
                }
              },
              Connection: {
                schema: {
                  type: 'string',
                  example: 'keep-alive'
                }
              },
              'access-control-allow-origin': {
                schema: {
                  type: 'string',
                  example: '*'
                }
              },
              'access-control-allow-credentials': {
                schema: {
                  type: 'boolean',
                  example: 'true'
                }
              },
              'access-control-allow-headers': {
                schema: {
                  type: 'string',
                  example: 'Content-Type'
                }
              },
              'access-control-allow-methods': {
                schema: {
                  type: 'string',
                  example: 'OPTIONS,POST,GET,PUT,DELETE'
                }
              },
              'Apigw-Requestid': {
                schema: {
                  type: 'string',
                  example: 'a2shVg0poAMEMxw='
                }
              }
            },
            content: {
              'application/json': {
                schema: {
                  type: 'object'
                },
                example: {
                  status: 200,
                  data: {
                    director: 'Rodrigo Prueba 2',
                    episodio: '2',
                    titulo: 'Reto Indra Prueba 2',
                    fechaLanzamiento: '1998-11-10',
                    id: 'f5461f3d-3013-410e-ab3f-cbef34b9ca68'
                  },
                  success: true,
                  message: 'La operaci??n se realiz?? con ??xito'
                }
              }
            }
          }
        }
      }
    }
  }
}
