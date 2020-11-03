const iNSPECTION_NUMBER = 14
const SURVEY_NUMBER = 15

const status = [
  'pendiente',
  'enprogreso',
  'completo'
]
const survey = id => Array.from(Array(SURVEY_NUMBER)).map((x, index) => {

  return {
    id: index,
    title: `Pregunta ${index + 1}`,

  }
})

const inspections = () => {


  return [
    {
      "id": 722,
      "numRadicado": 7999,
      "fechaSolicitud": "2020-12-09",
      "numMatriculaNave": "1b234AA",
      "artefactoNaval": "artefact333",
      "tipoInspeccion": "Inspeccion De Navios",
      "fechaProgramada": "2021-12-12",
      "ubicacion": "factory puerto",
      "estado": "completado",
      "numNaveOMI": "OMI o NIC 33RR",
      "propietarioNave": "Embarca propietario",
      "catalogacionNave": "catalogo nave",
      survey: []
    },
    {
      "id": 99,
      "numRadicado": 7999,
      "fechaSolicitud": "2020-07-06",
      "numMatriculaNave": "1b234AA",
      "artefactoNaval": "artefact333",
      "tipoInspeccion": "Inspeccion De seguridad",
      "fechaProgramada": "2020-09-12",
      "ubicacion": "factory puerto",
      "estado": "EnPausa",
      "numNaveOMI": "OMI o NIC 33RR",
      "propietarioNave": "Embarca propietario",
      "catalogacionNave": "catalogo nave",
      survey: [{
        "id": 2,
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "panel",
                "name": "panel1",
                "elements": [
                  {
                    "type": "matrixdynamic",
                    "name": "certificados_permanentes",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": [
                      {
                        "No.": "1",
                        "Certificados permanentes": "Certificado de matricula"
                      },
                      {
                        "No.": "2",
                        "Certificados permanentes": "Certificado de Arqueo - ITC 69 / Resoluciones 715/17 y 415/18"
                      },
                      {
                        "No.": "3",
                        "Certificados permanentes": "Certificado de Dotación Mónima de Seguridad. (DMS) Res. 529/18"
                      },
                      {
                        "No.": "4",
                        "Certificados permanentes": "Certificado de Nómero Móximo de Pasajeros"
                      },
                      {
                        "No.": "5",
                        "Certificados permanentes": "Certificado de motores"
                      },
                      {
                        "No.": "6",
                        "Certificados permanentes": "Certificado de Capacidad de combustible"
                      },
                      {
                        "No.": "7",
                        "Certificados permanentes": "Certificado de Francobordo"
                      },
                      {
                        "No.": "8",
                        "Certificados permanentes": "Documento de inscripción"
                      }
                    ],
                    "columns": [
                      {
                        "name": "No.",
                        "title": "No.",
                        "cellType": "expression"
                      },
                      {
                        "name": "Certificados permanentes",
                        "title": "Certificados permanentes",
                        "cellType": "expression"
                      },
                      {
                        "name": "Vigencia3",
                        "title": "Vigencia",
                        "cellType": "text",
                        "inputType": "date"
                      },
                      {
                        "name": "Fecha móxima próximo refrendo",
                        "title": "Fecha móxima próximo refrendo",
                        "cellType": "text",
                        "inputType": "date"
                      },
                      {
                        "name": "Observaciones",
                        "title": "Observaciones",
                        "cellType": "text"
                      }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 8
                  },
                  {
                    "type": "matrixdynamic",
                    "name": "certificados_definitivos",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": [
                      {
                        "No.": "9",
                        "Certificados definitivos": "Certificado de Francobordo (convenio LL/66)"
                      },
                      {
                        "No.": "10",
                        "Certificados definitivos": "Certificado de Seguridad para Artefactos Navales"
                      },
                      {
                        "No.": "11",
                        "Certificados definitivos": "Certificado de Seguridad para buques de pasaje"
                      },
                      {
                        "No.": "12",
                        "Certificados definitivos": "Certificado de Seguridad de Construcción"
                      },
                      {
                        "No.": "13",
                        "Certificados definitivos": "Certificado de Seguridad del equipo"
                      },
                      {
                        "No.": "14",
                        "Certificados definitivos": "Certificado de Seguridad Radioelóctrica"
                      },
                      {
                        "No.": "15",
                        "Certificados definitivos": "Certificado de seguridad para unidades móviles de perforación mar adentro"
                      },
                      {
                        "No.": "16",
                        "Certificados definitivos": "Certificado de Seguridad"
                      },
                      {
                        "No.": "17",
                        "Certificados definitivos": "Certificado de Gestión de la Seguridad ISM/NGS"
                      },
                      {
                        "No.": "18",
                        "Certificados definitivos": "Documento de Cumplimiento NGS/ISM (compaóóa)"
                      },
                      {
                        "No.": "19",
                        "Certificados definitivos": "Certificado  de Prevención de la Contaminación por Hidrocarburos"
                      },
                      {
                        "No.": "20",
                        "Certificados definitivos": "Certificado de Prevencion de la contaminación por SNL"
                      },
                      {
                        "No.": "21",
                        "Certificados definitivos": "Certificado de prevención de la contaminación por aguas sucias"
                      },
                      {
                        "No.": "22",
                        "Certificados definitivos": "Documento de cumplimiento  de Prevención de la contaminación por Basuras"
                      },
                      {
                        "No.": "23",
                        "Certificados definitivos": "Certificado de Cumplimiento Sistema Registrador de datos de la travesóa"
                      },
                      {
                        "No.": "24",
                        "Certificados definitivos": "Documento de Cumplimiento Gestión de Aguas de Lastre y Sedimentos"
                      },
                      {
                        "No.": "25",
                        "Certificados definitivos": "Certificado de aptitud para buques de apoyo y/o suministro mar adentro"
                      },
                      {
                        "No.": "26",
                        "Certificados definitivos": "Certificado de Aptitud para transporte de hidrocarburos, gases licuados, SNL, etc."
                      },
                      {
                        "No.": "27",
                        "Certificados definitivos": "Certificado de Seguro CLC"
                      },
                      {
                        "No.": "28",
                        "Certificados definitivos": "Certificado de protección del buque"
                      },
                      {
                        "No.": "29",
                        "Certificados definitivos": "Registro Sinóptico Continuo"
                      },
                      {
                        "No.": "30",
                        "Certificados definitivos": "Certificado Bollard Pull"
                      },
                      {
                        "No.": "31",
                        "Certificados definitivos": "Permiso de Operaciones"
                      }
                    ],
                    "columns": [
                      {
                        "name": "No.",
                        "title": "No.",
                        "cellType": "expression"
                      },
                      {
                        "name": "Certificados definitivos",
                        "title": "Certificados definitivos",
                        "cellType": "expression"
                      },
                      {
                        "name": "Vigencia",
                        "title": "Vigencia",
                        "cellType": "text",
                        "inputType": "date"
                      },
                      {
                        "name": "Fecha móxime próximo refrendo",
                        "title": "Fecha móxima próximo refrendo",
                        "cellType": "text",
                        "inputType": "date"
                      },
                      {
                        "name": "Observaciones",
                        "title": "Observaciones",
                        "cellType": "text"
                      }
                    ],
                    "allowAddRows": false,
                    "allowRemoveRows": false,
                    "rowCount": 23
                  }
                ],
                "title": "certificados"
              },
              {
                "type": "panel",
                "name": "F18",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F18_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con Número de identificación del Propietario o de la compaóóa.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "F18-Nómero de identificación del Propietario."
              },
              {
                "type": "panel",
                "name": "E1",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "E1_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un manual de formación ubicado en comedores y zonas de recreo.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El manual contempla instrucciones e informaciones fócilmente comprensibles e ilustradas relativas a los dispositivos de salvamento del buque y a los mótodos óptimos de supervivencia. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "E1_Nota1",
                    "title": "Nota 8",
                    "description": "Puede estar comprendido en el IGS/NGS.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "E1-Manual de formación y ayudas de formación a bordo"
              },
              {
                "type": "panel",
                "name": "E2",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "E2_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un plan de mantenimiento de los equipos y dispositivos de salvamento.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El manual contempla instrucciones de mantenimiento periódico y reparación, un diagrama de los puntos de lubricación con los lubricantes recomendados, un listado de piezas recambiables y una lista de proveedores de piezas de respeto.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Se registran las actividades de mantenimiento.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "E2_Nota1",
                    "title": "Nota 8",
                    "description": "Puede estar comprendido en el IGS/NGS.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "E2-Plan de mantenimiento"
              },
              {
                "type": "panel",
                "name": "A7",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A7_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La nave cuenta con procedimiento para remolque de emergencia.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se cuenta  en proa con medios fijos para remolque en caso de emergencia.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Se cuenta  en popa con medios fijos para remolque en caso de emergencia.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Se cuenta con el equipo necesario y apropiado para remolque de emergencia.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "La tripulación conoce la operación.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "El procedimiento estó contenido en el NGS.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "A7_Nota1",
                    "title": "Nota 8",
                    "description": "Puede estar comprendido en el IGS/NGS.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "A7-Procedimientos de remolque de emergencia."
              },
              {
                "type": "panel",
                "name": "F16",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F16_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta a bordo con el Manual de Gestión de Seguridad NGS / ISMM",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Contempla: Principios sobre seguridad y protección del medio ambiente",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Contempla: Instrucciones y procedimientos que garanticen la seguridad operacional del buque y la protección del medio ambiente con arreglo a la legislación internacional y del Estado de abanderamiento.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Contempla: Niveles definidos de autoridad y vóas de comunicación entre el personal de tierra y de a bordo. ",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Contempla: Procedimientos para las operaciones que se realizan a bordo con sus lista de chequeo.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Contempla: Procedimientos para notificar los accidentes y los casos de incumplimiento de las disposiciones del Código.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Contempla: Procedimientos de preparación para hacer frente a situaciones de emergencia.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Contempla: Procedimientos para el mantenimiento del buque y el equipo.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "El NGS estó aprobado por DIMAR. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "F16_Nota1",
                    "title": "Nota 10",
                    "description": "De acuerdo con lo establecido en la Resolución 499 de 2018. Naves con AB inferior a 150 se aplica la Norma Simplificada de Gestión de la Seguridad. Naves con arqueo bruto igual o superior a 150 se aplica Norma Nacional de Gestión de la Seguridad ó Norma NGS.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "F16-ISM/IGS - NGS"
              },
              {
                "type": "panel",
                "name": "D29",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "D29_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta en el puente con un sistema de ayuda para la gestión de emergencias.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Comprende planes de emergencia para: Incendio, averia del buque, contaminación, actos ilócitos que pongan en peligro la seguridad del buque, de sus pasajeros o de la tripulación; accidentes del personal, accidentes relacionados con la carga; y ayuda de emergencia a otros buques.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Los planes son claros y de fócil compresión para la toma de decisiones.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "D29-Sistema de ayuda para la  toma de decisiones por los capitanes de los buques de  Pesaje"
              },
              {
                "type": "panel",
                "name": "G3",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "G3_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta a bordo con un plan de emergencia en caso de contaminación por hidrocarburos (SOPEP).",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Estó aprobado por DIMAR.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "La tripulación conoce el plan y sus deberes.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "G3-\"Plan de emergencia de abordo en caso de contaminación por hidrocarburos (SOPEP)\""
              },
              {
                "type": "panel",
                "name": "D4",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "D4_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un manual de formación que incluye practicas de seguridad y relaciones con los peligros asociados como la acción de fumar, manejo de instalaciones elóctricas, lóquidos inflamables, y otros.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se dispone de copia del manual en lugares disponibles para la tripulacion en el idioma de trabajo del buque.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Se establecen los procedimientos para actuar y notificar un incendio, empleo de los equipos, rutas de evacuación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El personal cuenta con la instrucción y capacitacion para actuar en casos de emergincia. Poseen certificado OMI de lucha contraincendios.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "D4-Manual de formación  contraincendio"
              },
              {
                "type": "panel",
                "name": "D3",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "D3_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un plan de mantenimiento e inspecciones de los sistemas de prevención  y lucha contraincendios. ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El plan contempla bombas, alarmas, sistemas fijos,ventilación, puertas, alarma general, equipo de bombero, alumbrado de  emergencia y seóalización.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "En los buques tanque se incluye: sistema de gas inerte, sistema de espuma en cubierta, cómara de bombas, detectores de gases y humo.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "D3-Libro de instrucciones para mantenimiento e inspecciones. Equipo contraincendio"
              },
              {
                "type": "panel",
                "name": "A9",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A9_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un Manual de acceso con los procedimiento de inspección y mediciones de espesores de la estructura del buque.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se cuenta con plano de acceso a la estructura del buque.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Se registran las inspecciones y mantenimiento periodico realizado a la estructura del buque.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "A9-Manual de acceso a la Estructura del buque (Planos de medios de acceso)."
              },
              {
                "type": "panel",
                "name": "A11",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A11_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un cuadernillo de estabilidad  en el que se establece la estabilidad de la nave de acuefdo con las condiciones de carga, incluyendo la estabilidad con averóa.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El Capitón y el Primer Oficial lo saben aplicar para garantizar la seguridad de la nave.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "A11_Nota1",
                    "title": "Nota 27",
                    "description": "No aplica a naves de recreo o deportivas.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "A11-Cuadernillo de estabilidad."
              },
              {
                "type": "panel",
                "name": "A15",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A15_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con una cartilla de control de averóas aprobada por DIMAR.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Contiene información sobre compartimentos estancos.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Contiene instrucciones sobre operación de puertas estancas tanto en puerto como navegando y en caso de averóa.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Contiene procedimientos operacionales para corregir escoras y para mantener la integridad de estanqueidad.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Se cuenta con planos de control de averóas.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Son utilizados los tanques de combustible como tanques de lastre.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Se cuenta con separador de aguas aceitosas.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Esta actualizada la cartilla de control de averóas.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Conoce la tripulación la cartilla de control de averóas.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9"
                    ]
                  }
                ],
                "visible": false,
                "title": "A15-Cartilla de control de averóas"
              },
              {
                "type": "panel",
                "name": "A16",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A16_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta en el puente con planos que identifiquen claramente en cada cubierta los compartimentos estancos, sus aberturas y sistema de cierre, seóalizando las puertas en condición de mar y de puerto, y controles remotos de las puertas automóticas.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se cuenta con cuadernillos de control de averóas y estón actualizados.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "El accionamiento de puertas y aberturas estancas operan correctamente.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El accionamiento de las vólvulas de fondo opera correctamente.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Se toman todas la medidas para verificar la estanqueidad de la nave antes de hacerse a la mar.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5"
                    ]
                  }
                ],
                "visible": false,
                "title": "A16-Planos y cuadernillos de control de averóas"
              },
              {
                "type": "panel",
                "name": "G5",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "G5_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con certificación o constancia de prueba Hidrostótica de Mangueras y Tuberóas vigente (anual).",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El estado de mangueras y tuberóa de manejo de carga es bueno.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  }
                ],
                "visible": false,
                "title": "G5-Prueba Hidrostótica de Mangueras y Tuberóas"
              },
              {
                "type": "panel",
                "name": "F23",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F23_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con Libro de registro de hidrocarburos parte I (Operaciones en los espacios de móquinas). ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "\"Se registran todas las operaciones de: Lastrado o limpieza de los tanques de combustible lóquido; Descarga de lastre sucio o agua de limpieza de los tanques de combustible lóquido; Recogida y eliminación de residuos de hidrocarburos (residuos de hidrocarburos (lodos)); \tDescargas de agua de sentina que se haya acumulado en los espacios de móquinas; y abastecimiento de combustible o aceite lubricante a granel.\"",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Cada operación completada es firmada por el oficial a cargo de la operación de que se trate. ",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Cada pógina completa o grupo de anotaciones electrónicas estó firmada por el capitón del buque.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "F23-Libro registro de hidrocarburos Parte I"
              },
              {
                "type": "panel",
                "name": "G2",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "G2_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se lleva a bordo el Libro registro de hodrocarburos Parte II (Operaciones de carga y lastrado), ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se registran operaciones de cargue y descargue de hidrocarburos, trasiego entre los tanques de carga, lastrado de tanques de carga y tanques de lastre, limpieza de tanques de carga,  descargue de aguas de tanques de decantacion, cierre de valvulas para aislar tanques, eliminación de residuos.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Cada operación completada es firmada por el oficial a cargo de la operación de que se trate. ",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Cada pógina completa o grupo de anotaciones electrónicas estó firmada por el capitón del buque.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "G2-Libro registro de hidrocarburos Parte II"
              }
            ],
            "title": "III.  INSPECCIÓN DE DOCUMENTOS"
          }
        ]
      },

      {
        "id": 3,
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "panel",
                "name": "F11",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F11_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "El puente ofrece una vista de la superficie del mar a más de 500 metros hacia delante de la proa a 10° a cada lado.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Ningún sector ciego causado por la carga, los aparejos de carga u otras obstrucciones fuera del puente obstruye más de 10° la vista de la superficie del mar.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "El arco total de los sectores ciegos no excede los 20 grados.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El campo de visión horizontal desde el puente se extiende sobre un arco de no menos de 225 grados que va desde la proa hasta 22,5 grados a popa de la manga a ambos lados del buque.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El campo de visión horizontal desde el puente se extiende en un arco desde la proa hasta por lo menos 60 grados a cada lado del buque.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "El costado del buque es visible desde el ala del puente.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las ventanas no generan reflejos ni tienen cristales polarizados o ahumados. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7"
                    ]
                  }
                ],
                "visible": false,
                "title": "F11-Visibilidad en el puente de navegación"
              },
              {
                "type": "panel",
                "name": "A24",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A24_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta en el puente con información sobre la curva evolutiva del buque a diferentes velocidades y con diferente ángulo de timón.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se dispone de información sobre el tiempo de parada del buque y distancia de avance cuando navega a máxima velocidad marcha a vante.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "El capitán o personal asignado conoce sobre los tiempos de parada y caídas de proa de la nave según el número de hélices de la nave.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "A24-Características/ Maniobrabilidad del Buque/Curva Evolutiva"
              },
              {
                "type": "panel",
                "name": "A28",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A28_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "El puente de navegación y el puesto de control de la sala de máquinas cuenta con medios que indiquen el funcionamiento de los equipos del sistema de gobierno.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Los sistemas de gobierno van provistos de alarmas de sobrecargas.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las alarmas son acústicas y ópticas. Tienen sistema de prueba.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Las señales de alarma se reciben en el puente y en Maquinas.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "A28-Indicadores de funcionamiento de dispositivos del sistema de gobierno"
              },
              {
                "type": "panel",
                "name": "F3",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F3_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con indicador de ángulo del timón en el puente.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Opera correctamente.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  }
                ],
                "visible": false,
                "title": "F3-Indicador ángulo del timón"
              },
              {
                "type": "panel",
                "name": "F4",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F4_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La nave cuenta con sistema regulador de rumbo (piloto automático).",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El personal del puente conoce su operación.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Opera correctamente.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "F4-Sistema Regulador de Rumbo o derrota (Piloto Automático)"
              },
              {
                "type": "panel",
                "name": "F5",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F5_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La nave cuenta con un sistema indicador de velocidad de viraje u otro medio para determinar  y mostrar la velocidad de giro. ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El manual contempla instrucciones e informaciones fácilmente comprensibles e ilustradas relativas a los dispositivos de salvamento del buque y a los métodos óptimos de supervivencia. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "F5-Indicador de la velocidad de giro"
              },
              {
                "type": "panel",
                "name": "A27",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "question1",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con medios de comunicación entre el puente  de navegación y el servomotor.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se cuenta con medios de comunicación auxiliar independientes al principal.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Se cuenta con dos medios independientes para la transmision de ordenes desde el puente hasta el puesto de control de maquinas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Se cuenta con un sistema de telégrafos entre el puente y maquinas que indique visualmente las ordenes y respuestas entre estos.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Se cuenta con medios de comunicación oral entre el puente,  la consola de control de máquinas y la tripulación en la sala de maquinas.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cuenta con otros medios de comunicación.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "A27_Nota1",
                    "title": "Nota 37",
                    "description": "No aplica para las naves en donde sus máquinas no tengan la posibilidad de ser atendidas y su control se lleve en el puente, igualmente si por el tamaño de la nave esté cerca el cuarto de máquinas al puente. En tales casos deberá tener un sistema de intercomunicación interna entre máquinas y puente.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "A27-Sistema de comunicaciones internas (Puente-Máquinas-Servomotor)."
              },
              {
                "type": "panel",
                "name": "A29",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A29_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Las máquinas principales cuentan con mecanismos para hacerlas funcionar y gobernar eficazmente desde el puente.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las máquinas auxiliares esenciales en la operación cuentan con mecanismos para hacerlas funcionar y gobernar eficazmente desde el puente.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Los mecanismos instalados permite controlar la velocidad de la nave desde el puente.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Se cuenta con los mecanismos  para ejercer el control de las máquinas desde el puente o desde la sala de maquinas. ",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Se cuenta en el puente de navegacion y en la sala de máquinas con un mecanismo para el control de presión de aire y su alarma de baja presión.  ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "El sistema de control de máquinas cuenta con alarma sonora en caso de falla.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "La alarma funciona correctamente.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7"
                    ]
                  }
                ],
                "visible": false,
                "title": "A29-Control de las máquinas telemandadas desde el puente de navegación"
              },
              {
                "type": "panel",
                "name": "A30",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A30_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un dispositivo de parada de emergencia de las máquinas principales desde el puente.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El sistema de parada de emergencia es independiente del sistema de mando.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  }
                ],
                "visible": false,
                "title": "A30-Dispositivo de parada de emergencia de máquinas telemandadas desde el puente de navegación"
              },
              {
                "type": "panel",
                "name": "G13",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "G13_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con Pito",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se cuenta con otros medios para hacer señales acústicas",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "La nave cuenta con las luces de navegación de acuerdo con su catalogación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Las luces operan adecuadamente y su ángulo de visibilidad es correcto.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Se cuenta con otras señales visuales.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5"
                    ]
                  }
                ],
                "visible": false,
                "title": "G13-Pito, luces de navegación y demás señales visuales"
              },
              {
                "type": "panel",
                "name": "B13",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B13_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con tablero de control de luces de navegación.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se pueden controlar todas las luces de navegación y posición desde el tablero.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "La nave cuenta con las luces de navegación de acuerdo con lo establecido en el COLREG y operan correctamente.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "B13_Nota1",
                    "title": "Nota 20",
                    "description": "Se eximen las naves sin cubierta de cierre y todas las naves y artefactos navales construidos en madera.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "B13-Tablero de alarmas de luces de navegación y posición"
              },
              {
                "type": "panel",
                "name": "A19",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A19_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un sistema de detención de apertura y cierre de las puertas por encima de la cubierta de ciere y que puedan ser identificadas  y supervisadas facilmente.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El manual contempla instrucciones e informaciones fácilmente comprensibles e ilustradas relativas a los dispositivos de salvamento del buque y a los métodos óptimos de supervivencia. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "A19-Sistema de vigilancia y notificación de la apertura y cierre de puertas para buques de Pesaje"
              },
              {
                "type": "panel",
                "name": "C7",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "C7_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta  con un tripulante que en forma permanente pueda recibir una llamada de alarma de incendio.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El panel de control está previsto de un sistema a prueba de fallos. ",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "La nave cuenta  con sistema centralizado de alarmas y control de  puertas y ventilacion que indica su estado, abiertos o asegurados.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "C7-Sistema de señalización de alarmas contraincendio en buque de Pasaje"
              },
              {
                "type": "panel",
                "name": "E22",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "E22_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un sistema de alarma para la guardia de navegación en el puente.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El manual contempla instrucciones e informaciones fácilmente comprensibles e ilustradas relativas a los dispositivos de salvamento del buque y a los métodos óptimos de supervivencia. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "E22-Sistema alarma de guardia del Puente"
              },
              {
                "type": "panel",
                "name": "F20",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F20_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Cuenta la nave con Sistema de alarma de protección del buque - SSAS. (alarma por ataque de piratas - PBIP)",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El manual contempla instrucciones e informaciones fácilmente comprensibles e ilustradas relativas a los dispositivos de salvamento del buque y a los métodos óptimos de supervivencia. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "F20-Sistema de alarma de protección del buque"
              },
              {
                "type": "panel",
                "name": "E27",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "E27_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un dispositivo transmisor de rumbo debidamente ajustado que interactúe con los equipos.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El manual contempla instrucciones e informaciones fácilmente comprensibles e ilustradas relativas a los dispositivos de salvamento del buque y a los métodos óptimos de supervivencia. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "E27-Dispositivo transmisor de señal de rumbo"
              },
              {
                "type": "panel",
                "name": "E29",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "E29_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un repetidor de rumbo con brújula giroscópica, u otro medio para para proporcionar información de rumbo visualmente en el puesto de gobierno de emergencia.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El manual contempla instrucciones e informaciones fácilmente comprensibles e ilustradas relativas a los dispositivos de salvamento del buque y a los métodos óptimos de supervivencia. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "E29-Repetidor de Rumbo"
              },
              {
                "type": "panel",
                "name": "E-30",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "E30_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un repetidor de rumbo del giróscopo u otro medio para tomar marcaciones sobre un arco de horizonte de 360°.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El manual contempla instrucciones e informaciones fácilmente comprensibles e ilustradas relativas a los dispositivos de salvamento del buque y a los métodos óptimos de supervivencia. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "E30-Repetidor de Marcaciones"
              },
              {
                "type": "panel",
                "name": "F14",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F14-preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se lleva a bordo un registro de todas las actividades relacionadas con la navegación e incidentes de importancia para la seguridad de la navegación.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las anotaciones son claras y precisas, se firma, es revisado por el Capitán.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  }
                ],
                "visible": false,
                "title": "F14-Diario de navegación. Bitácora."
              },
              {
                "type": "panel",
                "name": "F15",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F15_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta en el puente a la mano del encargado de la guardia una tabla en la que se describen las señales de salvamento. ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El encargado sabe interpretar las señales. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  }
                ],
                "visible": false,
                "title": "F15-Señales de Salvamento en el Puente."
              }
            ],
            "title": "IV.  PUENTE DE GOBIERNO"
          }
        ]
      },
      {
        "id": 4,
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "panel",
                "name": "campo_sistema_cubierta",
                "elements": [
                  {
                    "type": "text",
                    "name": "no_anclas",
                    "maxWidth": "30%",
                    "title": "No. Anclas",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "tipo",
                    "maxWidth": "30%",
                    "startWithNewLine": false,
                    "title": "Tipo",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "peso",
                    "maxWidth": "30%",
                    "startWithNewLine": false,
                    "title": "Peso",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "no_cadenas",
                    "maxWidth": "30%",
                    "title": "No. Cadenas",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "longitud",
                    "maxWidth": "30%",
                    "startWithNewLine": false,
                    "title": "Longitud",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "cabrestantes",
                    "maxWidth": "30%",
                    "title": "Cabrestantes",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "capacidad_cabrestantes",
                    "maxWidth": "30%",
                    "startWithNewLine": false,
                    "title": "Capacidad",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "winches",
                    "maxWidth": "30%",
                    "title": "Winches",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "capacidad_winches",
                    "maxWidth": "30%",
                    "startWithNewLine": false,
                    "title": "Capacidad",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "gruas",
                    "maxWidth": "30%",
                    "title": "Grúas",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "capacidad_gruas",
                    "maxWidth": "30%",
                    "startWithNewLine": false,
                    "title": "Capacidad",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "pescantes",
                    "maxWidth": "30%",
                    "title": "Pescantes",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "capacidad_pescantes",
                    "maxWidth": "30%",
                    "startWithNewLine": false,
                    "title": "Capacidad",
                    "titleLocation": "left",
                    "hideNumber": true
                  },
                  {
                    "type": "text",
                    "name": "observaciones",
                    "title": "Observaciones",
                    "titleLocation": "left",
                    "hideNumber": true
                  }
                ]
              },
              {
                "type": "panel",
                "name": "A3",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A3_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Las anclas son apropiadas, se encuentran en buen estado y operan sin novedad.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las cadenas, su longitud y sus accesorio son adecuados y se encuentran en buen estado.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Los cabrestantes se encuentran en buen estado de mantenimiento y operan correctamente.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "La corona de barbotín engrana perfectamente con la cadena.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Las bandas del freno están dentro de la tolerancia de desgaste y este opera correctamente.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Si es una lancha hasta de 24 metros de eslora cumple lo establecido en la Nota 30 del anexo \"A\" de la Resolución 415 de 2014.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "A3_Nota1",
                    "title": "Nota 30",
                    "description": "Lanchas con eslora inferior o igual a 24 metros, de acuerdo con la tabla establecida en la Nota 30 del anexo  A de la Resolución 415 de 2014.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "A3-Sistema de Fondeo"
              },
              {
                "type": "panel",
                "name": "A6",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A6_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La nave cuenta con un equipo de remolque de emergencia.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El equipo se encuentra disponible para ser montado, aun sin contar con fluido eléctrico.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "El personal conoce la maniobra.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "A6-Medios de remolque de emergencia para buques tanque."
              },
              {
                "type": "panel",
                "name": "D7",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "D7_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La estructura de la cubierta de vuelo (helicubierta) es adecuada y cuenta con los medios de evacuacion principal y otro de emergencia.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Cuenta con los equipos de contraincendio como, extintores de polvo quimico seco (DOS),  Extintor de CO2, Extincion a base de espuma, equipo de bombero, herramientas.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las descargas de la cubierta van directamente al mar.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Se cuenta con los dispositivos de almecenamiento de combustible y se toman medidas para el manejo de este.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "En la  estación de la cubierta de vuelo se cuenta con el manual de operaciones con su respectiva lista de chequeo. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "La tripulación conoce los procedimientos. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ]
                  }
                ],
                "visible": false,
                "title": "D7-Instalaciones para helicópteros"
              },
              {
                "type": "panel",
                "name": "D28",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "D28_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con zona de aterrizaje y evacuación para helicópteros. ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "La zona está debidamente señalizada.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "La zona está despejada de obstáculos que pongan en riesgo la operación. ",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Cuenta con la iluminación establecida para operaciones con helicópteros.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "D28-Zonas de aterrizaje y evacuación para helicópteros en buque de  Pesaje"
              }
            ],
            "title": "VIII.  SISTEMA DE CUBIERTA"
          }
        ]
      },
      {
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "panel",
                "name": "elementos",
                "elements": [
                  {
                    "type": "matrixdynamic",
                    "name": "question1",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": [
                      {
                        "sistema_equipo": "Propulsor",
                        "marca": "Caterpillar",
                        "modelo": "xxxx",
                        "serial": "xxxxx",
                        "potencia_capacidad": "xxxxx",
                        "observaciones": "xxxxx"
                      },
                      {}
                    ],
                    "columns": [
                      {
                        "name": "sistema_equipo",
                        "title": "Sistema/Equipo"
                      },
                      {
                        "name": "marca",
                        "title": "Marca"
                      },
                      {
                        "name": "modelo",
                        "title": "Modelo"
                      },
                      {
                        "name": "serial",
                        "title": "Serial"
                      },
                      {
                        "name": "potencia_capacidad",
                        "title": "Potencia/Capacidad"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES"
                      }
                    ],
                    "choices": [
                      1,
                      2,
                      3,
                      4,
                      5
                    ],
                    "cellType": "text",
                    "confirmDelete": true,
                    "confirmDeleteText": "¿Eliminar elemento?",
                    "addRowLocation": "top",
                    "addRowText": "Agregar",
                    "removeRowText": "Eliminar"
                  }
                ]
              },
              {
                "type": "panel",
                "name": "A4",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A4_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Los motores están provistos de marcas con el número de serie y estos corresponden a los registrados en la matrícula.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "La potencia de los motores corresponde a la registrada en la matrícula.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Los motores se pueden arrancar desde el puente o puesto de control.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "A4_Nota1",
                    "title": "Nota 29 para lanchas",
                    "description": "Para lanchas que hagan navegación en Aguas Protegidas un motor y en Aguas No Protegidas o Costanera dos motores fuera de borda, los dos de igual potencia. Si la nave es construida en serie se tomarán las especificaciones de potencia establecidas por el Fabricante. En todo caso, la potencia de los motores será establecida en virtud de las formas de la nave, el peso y la velocidad, y será verificada y aprobada por la Autoridad Marítima.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "A4-Propulsión"
              },
              {
                "type": "panel",
                "name": "A22",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A22_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Los motores de combustión interna estan provistos de valvulas de seguridad contra explosiones del carter.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las válvulas de seguridad están dispuestas de modo que ofrezcan seguridad al personal o causen lesiones mínimas en el momento de actuar.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Existe control sobre su mantenimiento y pruebas periódicas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "A22-Válvulas de seguridad contra explosiones del carter (cilindro > 200 mm - vol > 0,63 m3) en motores de combustión interna"
              },
              {
                "type": "panel",
                "name": "A23",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A23_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Las motores de combustion interna y auxiliares están provistos de dispositivos de cierre automático en caso de falla.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las motores de combustión interna y auxiliares están provistos de dispositivos de cierre manual en caso de falla.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Los dispositivos de cierre se encuentran fuera del cuarto de maquinas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Se realizan pruebas de funcionamiento y quedan registradas.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "La tripulación conoce su ubicación y funcionamiento",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "El sistema garantiza la parada de inmediato del equipo.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Existen los procedimientos para actuar en caso de este tipo de emergencia. ",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7"
                    ]
                  }
                ],
                "visible": false,
                "title": "A23-Dispositivos de parada de máquinas con sistemas turboalimentados y altas revoluciones."
              },
              {
                "type": "panel",
                "name": "B1",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B1_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con caldera para calentamiento de combustible.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "La caldera cuenta con mínimo dos válvulas de seguridad.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "El sistema cuenta con dispositivos de parada de emergencia automático, remoto y manual.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "La caldera cuenta con mecanismos de seguridad que permiten el corte de suministro de combustible y dan la señal por bajo nivel de agua, falla en el suministro de aire o falla de llama. ",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "La caldera cuenta con dos bombas de alimentación  de agua y un sistema de control que permite el arranque de la otra cuanso falle la que está en servicio.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "El sistema cuenta con indicadores de presión.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "La caldera cuenta con indicadores de nivel, uno de ellos de vidrio.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Se controla la calidad de agua de suministro por medios químicos y se llevan registros.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Fecha de la ultima inspección a las válvulas, presión, registro.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9"
                    ]
                  }
                ],
                "visible": false,
                "title": "B1-Calderas de vapor y  sistemas de alimentación de calderas"
              },
              {
                "type": "panel",
                "name": "B2",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B2_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La tubería empleada para el manejo de vapor y sus presiones de trabajo es adecuada.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El sistema de vapor tiene instalados medios de purga para evitar los efectos del golpe de ariete.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Los sistemas de vapor que tienen valvulas reductoras cuentan con valvula de seguridad y manómetro de presión.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "B2-Sistemas de tuberías de vapor"
              },
              {
                "type": "panel",
                "name": "B3",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B3_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Los sistemas de aire comprimido poseen medios adecuados de alivio en lugares donde se presente sobrepresiones.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las tuberías de descarga de los compresores de  aire comprimido estan directamente conectados a los depósitos.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "La tuberia de  descarga  de los depositos de erranque de equipos es independiente a la descarga de los compresores.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Se cuenta con los dispositivos para reducir al máximo la entrada de aceite y agua a el sistema de aire comprimido.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "B3-Medios para evitar sobrepresiones en los sistemas de aire comprimido"
              },
              {
                "type": "panel",
                "name": "B4",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B4_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con la ventilación adecuada en el cuarto de máquinas, incluyendo cuando todos los equipos  se encuentren en el 100% de su operación garantizando la seguridad y confort a  la tripulación.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Todos los espacios de máquinas tienen ventilación adecuada.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Existe control sobre su mantenimiento y pruebas periódicas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  }
                ],
                "visible": false,
                "title": "B4-Sistema de ventilación de los espacios de máquinas"
              },
              {
                "type": "panel",
                "name": "B5",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B5_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un dispositivo de alarma que pueda accionarse desde la consola de control o desde la sala de máquinas y pueda ser oída en el alojamiento de la tripulación de máquinas.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las válvulas de seguridad están dispuestas de modo que ofrezcan seguridad al personal o causen lesiones mínimas en el momento de actuar.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Existe control sobre su mantenimiento y pruebas periódicas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "B5-Dispositivo de alarma para maquinistas"
              },
              {
                "type": "panel",
                "name": "B11",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B11_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con las alarmas necesarias para el control de la operación de los motores.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El tablero de control de alarmas define claramente la situación del equipo en falla.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las alarmas están conectadas al menos al camarote del Jefe de Máquinas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema produce alarmas acústicas y ópticas en el puente que le permiten tomar acción al oficial de guardia.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Se cuenta con un dispositivo adicional de alarma en caso de no ser atendida la primera señal.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5"
                    ]
                  }
                ],
                "visible": false,
                "title": "B11-Sistema de alarmas de motores: temperatura, lubricación, etc."
              },
              {
                "type": "panel",
                "name": "B14",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B14_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se utiliza el tanque del pique de proa para el almacenamiento de combustible líquido, aceite u otro hidrocarburo.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Los tanques de combustible forman parte de la estructura del buque y están situados fuera de los espacios de máquinas. ",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Cuentan con venteos apropiados y seguros.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Cuentan con tapas y empaque que sellen herméticamente.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "B14-Tanques de combustible líquido, hidrocarburos, lubricantes y otros"
              },
              {
                "type": "panel",
                "name": "B15",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B15_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con mecanismos de corte de combustible de cierre rápido y remoto para ser accionados en caso de incendio. ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Los tanques de servicio diario cuentan con mecanismo de cierre rápido.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Están debidamente marcados e identificados los mecanismos.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "La tripulación conoce su operación.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "B15_Nota1",
                    "title": "Nota 35",
                    "description": "Todo tanque fijo de combustible ubicado en el interior de la nave y con un volumen mayor a 133 galones deberá estar dotado de una válvula en el mismo tanque, susceptible de ser cerrado desde fuera del espacio que se trate en caso de incendio.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "B15-Válvulas de cierre rápido de tanques de combustible-remotas "
              },
              {
                "type": "panel",
                "name": "B16",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B16_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con medios seguros para determinar la cantidad de combustible existente en los tanques.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Los tubos de sonda están alejados de los lugares que presenten riesgo de ignición y poseen su respectivo mecanismo de cierre.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Existe control sobre su mantenimiento y pruebas periódicas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  }
                ],
                "visible": false,
                "title": "B16-Indicadores de nivel de combustible"
              },
              {
                "type": "panel",
                "name": "B17",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B17_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Las tuberías de combustible y accesorios son de acero u otro material resistente a altas temperaturas y presiones. ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las tuberías de combustible son pirorresistentes.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las valvulas instaladas en las tuberías de los tanques de combustible son de acero o hierro fundido.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "B17-Tuberías de combustible"
              },
              {
                "type": "panel",
                "name": "B18",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B18_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Las tuberías exteriores de abastecimiento de combustible a alta presión que se encuentren entre las bombas de combustible a alta presión y los inyectores están protegidas con un sistema de encamisado que pueda contener al combustible en caso de falla de la tubería a alta presión. ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El sistema de encamisado cuenta con medios para recoger las fugas. ",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "El sistema dispone de una alarma para casos de falla de la tubería de combustible.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "B18_Nota1",
                    "title": "Nota 50",
                    "description": "Exigible para motores de combustión interna con potencia superior a 150 Kw.\t\t\t\t\n"
                  }
                ],
                "visible": false,
                "title": "B18-Sistema de encamisado con colector de fugas para tuberías exteriores de abastecimiento de combustible a presión."
              },
              {
                "type": "panel",
                "name": "B19",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B19_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Las tuberías expuestas a altas temperaturas están provistas de la adecuada protección.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se toman medidas para evitar escapes de combustible o aceite y que estos caigan sobre tuberías descubiertas calientes.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Existe control sobre su mantenimiento y pruebas periódicas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "B19_Nota1",
                    "title": "Nota 44",
                    "description": "Aplicable a motores, generadores, turbinas, calderas cuyas tubería de escape deben ser protegida con material aislante que no sea asbesto. No está permitida la instalación de materiales que contengan asbesto.\t\t\t\t\n",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "B19-Protección de superficies con alta temperatura"
              },
              {
                "type": "panel",
                "name": "B20",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B20_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La nave cuenta con calentadores internos en los tanques de combustible, de servicio diario o de sedimentación.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Cuenta con los dispositivos de alarma de alta temperatura.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "La alarma opera correctamente.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "B20-Dispositivos de alarma de alta temperatura"
              },
              {
                "type": "panel",
                "name": "G4",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "G4_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Los tubos de escape de los motores de combustión interna cuentan con dispositivos atrapa chispas.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se encuentran en buen estado de mantenimiento y operan correctamente.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Existe control sobre su mantenimiento y pruebas periódicas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  }
                ],
                "visible": false,
                "title": "G4-Dispositivos atrapa chispas en tubos de escape de motores de combustión interna."
              },
              {
                "type": "panel",
                "name": "G26",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "G26_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con las herramientas necesarias para atender el mantenimiento de la maquinaria, una falla o emergencia durante la navegación.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las herramientas se encuentran protegidas y en buen estado.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Existe control sobre su mantenimiento y pruebas periódicas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "G26_Nota1",
                    "title": "Nota 43",
                    "description": "Las naves que presten el servicio de Transporte Público de Pasajeros Marítimo en Cartagena cumplirán lo establecido en la resolución 576 de 2015. Las naves de recreo o deportivas cumplirán con lo dispuesto en la resolución 575 de 2019.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "G26-Juego de herramientas"
              },
              {
                "type": "panel",
                "name": "A25",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A25_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un sistema de gobierno principal y uno auxiliar que no interfieran entre sí en caso de falla.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El sistema de gobierno principal y auxiliar operan con el fluido eléctrico auxiliar o de emergencia.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "El sistema se puede accionar desde el puente y desde el servomotor  independiente.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Antes del zarpe se efectúa prueba del sistema de gobierno y se registra.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El recorrido del timón, tanto a estribor como a babor opera correctamente.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "El sistema de gobierno permite el cambio de posición de 35° de una banda a la otra en un tiempo no mayor de 28 segundos, en condición de máxima carga y velocidad.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Los sistemas de alarmas visual y acústica de falla o pérdida de gobierno operan correctamente.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Los sistemas de comunicación entre el puente, maquinas y servomotor operan correctamente.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "La tripulación encargada de la operación del sistema de gobierno lo concoen y puedde pasar de un sistema a otro incluyendo el sistema manual.",
                        "respuesta": "N/A"
                      },
                      "10": {
                        "pregunta": "Se cuenta con un sistema de gobierno no hidráulico.",
                        "respuesta": "N/A"
                      },
                      "11": {
                        "pregunta": "Se cuenta con un cuadro de obligaciones para pérdida de gobierno.",
                        "respuesta": "N/A"
                      },
                      "12": {
                        "pregunta": "La tripulación conoce sus deberes para actuar en caso de pérdida de gobierno.",
                        "respuesta": "N/A"
                      },
                      "13": {
                        "pregunta": "El área del servomotor se encuentra limpia de aceites y despejada de elementos extraños que no correspondan al sistema de gobierno.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                      "13"
                    ]
                  }
                ],
                "visible": false,
                "title": "A25-Sistema de gobierno principal y Sistema de gobierno auxiliar"
              },
              {
                "type": "panel",
                "name": "A26",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A26_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "El sistema hidráulico del sistema de gobierno cuenta con válvulas de alivio para evitar contrapresiones.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "La tripulación conoce su operación.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "La tubería del sistema de gobierno se encuentra en buen estado.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema de control de rumbo (timón) de la nave  opera desde el puesto de control.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "El sistema hidráulico de levante de los motores opera desde el puesto de control. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cumple con el ciclo de mantenimiento de los motores establecido por el fabricante o de acuerdo con el plan de mantenimiento de la nave.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Las baterías o sistema de arranque de los motores son las adecuados.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las baterías se encuentran en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Las conexiones eléctricas son seguras",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A VERIFICAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLE",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "A26-Válvulas de desahogo del sistema hidráulico"
              }
            ],
            "title": "X.  SISTEMA DE PROPULSIÓN Y DE GOBIERNO"
          }
        ]
      },
      {
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "panel",
                "name": "elementos",
                "elements": [
                  {
                    "type": "matrixdynamic",
                    "name": "matriz_elementos",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": [
                      {
                        "sistema_equipo": "xxxxxxxxxxx",
                        "marca2": "xxxxxxxx",
                        "modelo": "xxxxxxxx",
                        "serial": "xxxxxxxx",
                        "potencia_capacidad": "xxxxxxxxx",
                        "observaciones": "xxxxxx"
                      },
                      {
                        "sistema_equipo": "xxxxxxxxxx",
                        "marca2": "xxxxxxxxx",
                        "modelo": "xxxxxxxxxxx",
                        "serial": "xxxxxxxx",
                        "potencia_capacidad": "xxxxxxxxxxx",
                        "observaciones": "xxxxxxxxx"
                      }
                    ],
                    "columns": [
                      {
                        "name": "sistema_equipo",
                        "title": "SISTEMA/EQUIPO"
                      },
                      {
                        "name": "marca2",
                        "title": "Marca"
                      },
                      {
                        "name": "modelo",
                        "title": "Modelo"
                      },
                      {
                        "name": "serial",
                        "title": "Serial"
                      },
                      {
                        "name": "potencia_capacidad",
                        "title": "Potencia/Capacidad"
                      },
                      {
                        "name": "observaciones",
                        "title": "Observaciones"
                      }
                    ],
                    "choices": [
                      1,
                      2,
                      3,
                      4,
                      5
                    ],
                    "cellType": "text",
                    "rowCount": 4,
                    "confirmDelete": true,
                    "confirmDeleteText": "¿Eliminar elemento?",
                    "addRowLocation": "top",
                    "addRowText": "Agregar",
                    "removeRowText": "Eliminar"
                  }
                ]
              },
              {
                "type": "panel",
                "name": "B6",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B6_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Las instalaciones eléctricas garantizan la operación de todos los servicios eléctricos auxiliares para mantener la nave en condiciones normales de funcionamiento y habitabilidad sin necesidad de recurrir a la fuente de energía eléctrica de emergencia. ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las instalaciones eléctricas garantizan el suministro adecuado y oportuno de energía aún durante situaciones de emergencia.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las Instalaciones eléctricas no representan peligro para los pasajeros, la tripulación y la operación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los tableros de control están plenamente identificados, cuentan con instrumentos indicadores y tienen señales de precaución. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "B6-Instalaciones eléctricas"
              },
              {
                "type": "panel",
                "name": "B7",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B7_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta al menos con dos grupos electrógenos con capacidad suficiente para alimentar todos los servicios de abordo.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "La capacidad de estos grupos electrógenos es tal que aunque uno de ellos se pare sea posible alimentar los servicios necesarios para lograr condiciones operacionales normales de propulsión y seguridad. ",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Un solo grupo electrógeno asegura las condiciones mínimas de habitabilidad, los servicios de cocina, calefacción, refrigeración de carácter doméstico, ventilación mecánica, agua para las instalaciones sanitarias y agua dulce.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Un solo grupo eletrógeno tiene la capacidad de dar arranque a la planta propulsora principal partiendo de la condición de buque apagado. ",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Se cuenta con una red de alumbrado principal que ilumina todas las partes de la nave.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "La distribución eléctrica permite que si se presenta un incendio que afecte  el sistema de distribución principal no se afecte el sistema de emergencia.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ]
                  }
                ],
                "visible": false,
                "title": "B7-Fuente de energía eléctrica principal y red de alumbrado "
              },
              {
                "type": "panel",
                "name": "B8",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B8_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Cuenta la nave con una fuente autónoma de energía eléctrica de emergencia.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El generador de emergencia cuenta con dispositivos que le permiten el arranque inmediato una vez se suspenda el fluido eléctrico principal.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "La fuente de energía eléctrica de emergencia se encuentra por encima de la cubierta corrida y es de fácil acceso.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los cicuitos de emergencia alimentan por un periodo de 36 horas los equipos de comunicaciones interiores necesario para la emergencia.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 36 horas pasillos, escalereas, accesos a puestos de desembarco y los puestos de reunión y desembarco. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 36 horas la sala de máquinas, consola de control, tablero de distribución  y puestos de escape.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 36 horas pañoles de equipos de bomberos y el servomotor.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 36 horas la bomba contraincendio  de emergencia, rociadores y bomba de achique.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 36 horas las luces de navegación.",
                        "respuesta": "N/A"
                      },
                      "10": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 36 horas la instalación radioeléctrica de ondas métricas.",
                        "respuesta": "N/A"
                      },
                      "11": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 36 horas la instalación hectometricas / decametricas.",
                        "respuesta": "N/A"
                      },
                      "12": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 36 horas los equipos de navegación.",
                        "respuesta": "N/A"
                      },
                      "13": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 36 horas los sistemas de detección de incendios y alarmas, y sistemas de retención de puertas contraincendio.",
                        "respuesta": "N/A"
                      },
                      "14": {
                        "pregunta": "Los cicuitos de emergencia alimentan por un periodo de 36 horas pasillos, escaleras y espacios de alojamiento.",
                        "respuesta": "N/A"
                      },
                      "15": {
                        "pregunta": "Se puede utilizar el generador de emergencia en circuitos que no sean de emergencia, trabajos programados.",
                        "respuesta": "N/A"
                      },
                      "16": {
                        "pregunta": "Se cuenta con un sistema de emergencia por baterías o acumuladores.",
                        "respuesta": "N/A"
                      },
                      "17": {
                        "pregunta": "El sistema de emergencia de baterías alimenta las luces de navegación, accesos, pasillos y equipos de comunicaciones básicos.",
                        "respuesta": "N/A"
                      },
                      "18": {
                        "pregunta": "La tripulación responsable conoce los procedimientos para desconectar los equipos que no son de emergencia.",
                        "respuesta": "N/A"
                      },
                      "19": {
                        "pregunta": "Se realizan pruebas a los equipos de emergencia y se registran.",
                        "respuesta": "N/A"
                      },
                      "20": {
                        "pregunta": "Nota. Si el buque realiza  viajes cortos el generador de emergencia debe garantizar la alimentación de los circuitos de emergencia por un periodo mínimo de 12 horas.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                      "13",
                      "14",
                      "15",
                      "16",
                      "17",
                      "18",
                      "19",
                      "20"
                    ]
                  }
                ],
                "visible": false,
                "title": "B8-Fuente de energía eléctrica de emergencia para buque de Pasaje"
              },
              {
                "type": "panel",
                "name": "B9",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B9_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Cuenta la nave con una fuente autónoma de energía eléctrica de emergencia.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El generador de emergencia cuenta con dispositivos que le permiten el arranque inmediato una vez se suspenda el fluido eléctrico principal.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "La fuente de energía eléctrica de emergencia se encuentra por encima de la cubierta corrida y es de fácil acceso.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 18 horas los equipos de comunicaciones interiores necesario para la emergencia.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 3 horas los puestos de reunión y desembarco. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 18 horas la sala de máquinas, consola de control, tablero de distribución  y puestos de escape.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 18 horas pañoles de equipos de bomberos y el servomotor.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 18 horas la bomba contraincendio  de emergencia, rociadores y bomba de achique.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 18 horas las luces de navegación.",
                        "respuesta": "N/A"
                      },
                      "10": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 18 horas la instalación radioeléctrica de ondas métricas.",
                        "respuesta": "N/A"
                      },
                      "11": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 18 horas la instalacion hectometricas / decametricas.",
                        "respuesta": "N/A"
                      },
                      "12": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 18 horas los equipos de navegación.",
                        "respuesta": "N/A"
                      },
                      "13": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 18 horas los sistemas de detección de incendios y alarmas, y sistemas de retención de puertas contraincendio.",
                        "respuesta": "N/A"
                      },
                      "14": {
                        "pregunta": "Los circuitos de emergencia alimentan por un periodo de 18 horas pasillos, escaleras y espacios de alojamiento.",
                        "respuesta": "N/A"
                      },
                      "15": {
                        "pregunta": "Se puede utilizar el generador de emergencia en circuitos que no sean de emergencia, trabajos programados.",
                        "respuesta": "N/A"
                      },
                      "16": {
                        "pregunta": "Se cuenta con un sistema de emergencia por baterías o acumuladores.",
                        "respuesta": "N/A"
                      },
                      "17": {
                        "pregunta": "El sistema de emergencia de baterías alimenta las luces de navegación, accesos, pasillos y equipos de comunicaciones básicos.",
                        "respuesta": "N/A"
                      },
                      "18": {
                        "pregunta": "La tripulación responsable conoce los procedimientos para desconectar los equipos que no son de emergencia.",
                        "respuesta": "N/A"
                      },
                      "19": {
                        "pregunta": "Se realizan pruebas a los equipos de emergencia y se registran.",
                        "respuesta": "N/A"
                      },
                      "20": {
                        "pregunta": "Nota. Si el buque realiza  viajes cortos el generador de emergencia debe garantizar la alimentación de los circuitos de emergencia por un periodo mínimo de 12 horas.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                      "13",
                      "14",
                      "15",
                      "16",
                      "17",
                      "18",
                      "19"
                    ]
                  }
                ],
                "visible": false,
                "title": "B9-Fuentes de energía eléctrica de emergencia en otros buques"
              },
              {
                "type": "panel",
                "name": "B10",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B10_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "El equipo electrógeno esta equipado con un sistema de arranque automático.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El equipo realiza tres arranques consecutivos.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Existe un segundo arranque manual que garantice su funcionamiento.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Se prueba el arranque y queda registrado. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "B10-Medios de arranque automático de los grupos electrógenos de emergencia "
              },
              {
                "type": "panel",
                "name": "B12",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B12_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con los mecanismos para la entrada en servicio de un generador en espera sin alterar el buen funcionamiento de los equipos.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se cuenta con los mecanismos para el caso de que se encuentren operando dos generadores en paralelo y uno de ellos salga de servicio y se pueda continuar con la operación.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Se cuenta con mecanismos de conmutación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Se cuenta con alarmas y señales de operación de conmutación.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Todos los sistemas donde se controle temperatura, presión, niveles y otros parámetros esenciales cuentan con alarmas.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cuenta en el tablero de mando con instrumentos  indicadores de falla con su respectiva alarma.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "El tablero cuenta con los mecanismos para la prueba de las alarmas.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Se cuenta con los medios necesarios para mantener la presión de aire de arranque del motor propulsor.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8"
                    ]
                  }
                ],
                "visible": false,
                "title": "B12-Prescripciones para máquinas, calderas e instalaciones eléctricas "
              }
            ],
            "title": "XI.  SISTEMA ELÉCTRICO Y DE GENERACIÓN"
          }
        ]
      },
      {
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "panel",
                "name": "elementos",
                "elements": [
                  {
                    "type": "matrixdynamic",
                    "name": "matriz_elementos",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": [
                      {
                        "sistema_equipo": "xxxxxxxxxxx",
                        "marca2": "xxxxxxxx",
                        "modelo": "xxxxxxxx",
                        "serial": "xxxxxxxx",
                        "potencia_capacidad": "xxxxxxxxx",
                        "observaciones": "xxxxxx"
                      },
                      {
                        "sistema_equipo": "xxxxxxxxxx",
                        "marca2": "xxxxxxxxx",
                        "modelo": "xxxxxxxxxxx",
                        "serial": "xxxxxxxx",
                        "potencia_capacidad": "xxxxxxxxxxx",
                        "observaciones": "xxxxxxxxx"
                      }
                    ],
                    "columns": [
                      {
                        "name": "sistema_equipo",
                        "title": "SISTEMA/EQUIPO"
                      },
                      {
                        "name": "marca2",
                        "title": "Marca"
                      },
                      {
                        "name": "modelo",
                        "title": "Modelo"
                      },
                      {
                        "name": "serial",
                        "title": "Serial"
                      },
                      {
                        "name": "potencia_capacidad",
                        "title": "Potencia/Capacidad"
                      },
                      {
                        "name": "observaciones",
                        "title": "Observaciones"
                      }
                    ],
                    "choices": [
                      1,
                      2,
                      3,
                      4,
                      5
                    ],
                    "cellType": "text",
                    "rowCount": 4,
                    "confirmDelete": true,
                    "confirmDeleteText": "¿Eliminar elemento?",
                    "addRowLocation": "top",
                    "addRowText": "Agregar",
                    "removeRowText": "Eliminar"
                  }
                ]
              },
              {
                "type": "panel",
                "name": "A5",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A5_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La nave cuenta con tanques de lastre de agua de mar.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Los tanques de lastre se encuentran protegidos con revestimiento especial. ",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Los tanques de lastre se encuentran protegidos con con ánodos de sacrificio.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Se inspeccionan con frecuencia. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "A5-Sistema de prevención de la corrosión tanques de lastre"
              },
              {
                "type": "panel",
                "name": "A8",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A8_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Los espacios de carga disponen de medios de accesos permanetes para facilitar las inspecciones generales.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Los accesos a las bodegas, cofferdams, y tanques de carga son directos desde la cubierta expuesta. ",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Los medios de acceso a los espacios de carga ofrecen seguridad para la tripulación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los accesos a los doble fondos ofrecen seguridad para la tripulación.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Los tanques cuentan con escotilla estanca y escala de acceso.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Las bodegas de carga poseen dos medios de acceso uno en proa y otro en popa en forma diagonal.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Los accesos a través de aberturas, escotillas o registros horizontales tienen las dimensiones suficentes para el ingreso de un tripulante con equipo de protección y permiten izar facilmente un lesionado",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Las accesos a traves de aberturas y registros verticales cumplen medidas de 600 mm x 800 mm, altura max de 600 mm. ",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Se cuenta con un plano de accesos a espacios de carga y otros espacios.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9"
                    ]
                  }
                ],
                "visible": false,
                "title": "A8-Medios de acceso a Espacios de carga y otros espacios"
              },
              {
                "type": "panel",
                "name": "A12",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A12_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La nave cuenta con doble fondos que le aportan segurida a la nave.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se verifican o inspeccionan periódicamente.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Se controla el acceso de agua u otro producto.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Se encuentran en buen estado de conservación y mantenimiento.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "A12-Dobles Fondos (Buques de pasaje y que no sean buques Tanque)"
              },
              {
                "type": "panel",
                "name": "A13",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A13_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "El mamparo estanco de proa y popa  cumple según el diseño de la compartimentación.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las tuberias que atraviesan los mamparos estancos poseen válvulas adecuadas.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "El cableado que atraviesa mamparos estancos lo hace a través de pasamamparos que aseguran la estanqueidad.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los mamparos no cuentan con ductos que afecten la estanqueidad.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Las escotillas instaladas en los mamparos son estancas.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Son estancos los mamparos que separan el cuarto de maquinas a proa y popa de los espacios de carga y áreas habitables.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "A13_Nota1",
                    "title": "Nota 20",
                    "description": "Se eximen las naves sin cubierta de cierre y todas las naves y artefactos navales construidos en madera.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "A13-Mamparos estancos"
              },
              {
                "type": "panel",
                "name": "A14",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "A14_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "El mamparo de colisión cumple según el diseño de compartimentación.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El mamparo es estanco hasta la cubierta de cierre y solamente lo atravieza la tubería de achique de proa.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las tubería que atraviesa el mamparo posee válvulas adecuadas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El mamparo se encuentra en buen estado de mantenimiento.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "A14_Nota1",
                    "title": "Nota 20",
                    "description": "Se eximen las naves sin cubierta de cierre y todas las naves y artefactos navales construidos en madera.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "A14-Mamparo de Colisión"
              },
              {
                "type": "panel",
                "name": "B23",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B23_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Las cámaras de bombas de carga, tanques de carga, tanques de decantacion y coferdams se encuentran a proa del cuarto de maquinas.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Los tanques de carga se encuentran separdos de la cámara de maquinas.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Los puestos principales de control de cargue se encuentran a popa de los tanques de carga.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los alojamientos y espacios de servicio se encuentran a popa de los tanques de carga.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "B23-Zonas de carga de los buque Tanque."
              },
              {
                "type": "panel",
                "name": "B24",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B24_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "El área de carga se encuentra separada de la sala de máquinas.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Cuenta con suficiente ventilación.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Está alejada de fuentes de calor, llama o chispas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Está señalizada con rótulos de NO FUMAR.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Está separada de lugares habitables y tomas de aire.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "B24_Nota1",
                    "title": "Nota 33",
                    "description": "Las naves catalogadas como de transporte mixto y los artefactos navales del subgrupo barcaza podrán transportar gas propano en cilindros debiendo estar en una área claramente señalizada (No Fumar) y apartada de los lugares habitables, alojamiento, tomas de aire, los espacios de máquinas y otras áreas de trabajo cerradas. Su disposición deberá tener en cuenta la posibilidad de que, si se producen fugas de vapores, se evite que estos penetren en los espacios de alojamiento, espacios de máquinas y demás lugares de trabajo, por las entradas u otras aberturas de los mamparos, o por los conductos de ventilación. Los buques de carga podrán llevar cilindros de gas como carga general o contenedor izada cumpliendo con lo establecido en el Código IMDG.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "B24-Zonas de carga donde se transporte gas propano"
              },
              {
                "type": "panel",
                "name": "B25",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B25_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Los sistemas de respiración de los tanques de carga están completamente independientes de los conductos de aire de otros compartimientos del buque.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El sistema de respiración está provisto de dispositivos que impiden el paso de las llamas a los tanques de carga.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Los orificios de respiración para las operaciones de carga, descarga y lastre, permite el escape libre de las mezclas de vapores. ",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los sistemas de respiración estan dispuestos de manera que la mezcla de vapores se descargue verticalmente hacia arriba",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Los medios de respiración están conectados al techo de cada tanque de carga y su purga se realiza automáticamente hacia los tanques de carga en todas las condiciones de asiento y escora del buque. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5"
                    ]
                  }
                ],
                "visible": false,
                "title": "B25-Respiración de los tanques de carga"
              },
              {
                "type": "panel",
                "name": "B26",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B26_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Las cámaras de bombas de carga cuentan con ventilación mecánica y los conductos de descarga de los ventiladores de extracción terminan en un lugar seguro de la cubierta expuesta.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Los conductos de aire están dispuestos de modo que todo el espacio quede eficazmente ventilado. ",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "La ventilación es de tipo aspirante y utiliza ventiladores que no producen chispas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los tableros de control están plenamente identificados, cuentan con instrumentos indicadores y tienen señales de precaución. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "B26-Sistema de ventilación en las cámaras de bombas de carga."
              },
              {
                "type": "panel",
                "name": "F24",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F24_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La nave cuenta como protección, con tanques de lastre separados o espacios que no sean tanques de carga o destinados a contener hidrocarburos y/o mezclas oleosas, que vayan emplazados en la sección de la eslora en que se hallen los tanques de carga.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las instalaciones eléctricas garantizan el suministro adecuado y oportuno de energía aún durante situaciones de emergencia.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las Instalaciones eléctricas no representan peligro para los pasajeros, la tripulación y la operación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los tableros de control están plenamente identificados, cuentan con instrumentos indicadores y tienen señales de precaución. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "F24-Doble casco (Resolución 022 de 2013)"
              },
              {
                "type": "panel",
                "name": "F25",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F25_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La cámara de bombas estará provista de un doble fondo.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las instalaciones eléctricas garantizan el suministro adecuado y oportuno de energía aún durante situaciones de emergencia.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las Instalaciones eléctricas no representan peligro para los pasajeros, la tripulación y la operación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los tableros de control están plenamente identificados, cuentan con instrumentos indicadores y tienen señales de precaución. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "F25-Protección del fondo de los cuartos de bombas."
              },
              {
                "type": "panel",
                "name": "B27",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B27_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se  cuenta, como mínimo, con un instrumento portátil para medir el porcentaje de oxígeno contenido en los tanques de carga.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se  cuenta, como mínimo, con un instrumento portátil para medir las concentraciones de vapores inflamables.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las Instalaciones eléctricas no representan peligro para los pasajeros, la tripulación y la operación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los tableros de control están plenamente identificados, cuentan con instrumentos indicadores y tienen señales de precaución. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  }
                ],
                "visible": false,
                "title": "B27-Medidor portátil  de oxígeno y de vapores inflamables."
              },
              {
                "type": "panel",
                "name": "B28",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B28_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se dispo de instrumentos portátiles adecuados para medir las concentraciones de oxígeno y de vapores inflamables en los espacios del doble casco y del doble fondo.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las instalaciones eléctricas garantizan el suministro adecuado y oportuno de energía aún durante situaciones de emergencia.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las Instalaciones eléctricas no representan peligro para los pasajeros, la tripulación y la operación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los tableros de control están plenamente identificados, cuentan con instrumentos indicadores y tienen señales de precaución. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "B28-Medidas relaitivas a la medición de gases en espacios del doble casco y del doble fondo."
              },
              {
                "type": "panel",
                "name": "B29",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B29_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un sistema fijo para medir las concentraciones de gases de hidrocarburos en todos los tanques de lastre y espacios vacíos de  del doble casco y del doble fondo adyacentes a los tanques de carga. ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se cuenta con sistema fijo para medir las concentraciones de gases de hidrocarburos en el tanque de pique de proa y tanques y espacios por debajo de la cubierta de cierre adyacentes a los tanques de carga. ",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las Instalaciones eléctricas no representan peligro para los pasajeros, la tripulación y la operación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los tableros de control están plenamente identificados, cuentan con instrumentos indicadores y tienen señales de precaución. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  }
                ],
                "visible": false,
                "title": "B29-Sistema y equipo fijo de detección de gases de hidrocarburos en espacios de doble casco"
              },
              {
                "type": "panel",
                "name": "B30",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "B30_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Las bombas de carga, lastre y agotamiento instaladas en las cámaras de bombas de carga y accionadas por ejes que atraviesen los mamparos de esas cámaras están dotadas de sensores de temperatura en los prensaestopas de dichos ejes, los cojinetes y los estatores de las bombas. ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se cuenta con un sistema de la alarma audible y visual continua que se activa automáticamente en la cámara de control de la carga y en el puesto de control de las bombas.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "El alumbrado de las cámaras de las bombas de carga, salvo el de emergencia, y la ventilación están acoplados de modo que ésta empiece a funcionar cuando se conecte el alumbrado.  ",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Un solo grupo eletrógeno tiene la capacidad de dar arranque a la planta propulsora principal partiendo de la condición de buque apagado. ",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Se cuenta con un sistema para vigilar de forma contínua la concentración de gases de hidrocarburos en la cámara.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cuenta con dispositivos de vigilancia del nivel de sentina con su respectiva alarma.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ]
                  }
                ],
                "visible": false,
                "title": "B30-Proteccion de las cámaras de bombas de carga en los buques tanque "
              },
              {
                "type": "panel",
                "name": "D6",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "D6_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un procedimiento de purga y/o desgasificación de los tanques de carga.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se da cumplimiento al procedimiento de desgasificación cuando se tiene sistema de gas inerte.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Si la nave no posee sistema de gas inerte la operación se hace de manera que el vapor inflamable se descargue primero por los orificios de aireación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los orificios de salida están a 2 mts como mínimo por encima del nivel de la cubierta de tanques de carga.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "D6-Procedimientos de purga y/o desgasificación de los tanques de carga"
              }
            ],
            "title": "XII.  ESPACIOS DE CARGA Y DOBLE FONDOS"
          }
        ]
      },
      {
        "pages": [
          {
            "name": "page1",
            "elements": [
              {
                "type": "panel",
                "name": "elementos",
                "elements": [
                  {
                    "type": "matrixdynamic",
                    "name": "matriz_elementos",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": [
                      {
                        "sistema_equipo": "xxxxxxxxxxx",
                        "marca2": "xxxxxxxx",
                        "modelo": "xxxxxxxx",
                        "serial": "xxxxxxxx",
                        "potencia_capacidad": "xxxxxxxxx",
                        "observaciones": "xxxxxx"
                      },
                      {
                        "sistema_equipo": "xxxxxxxxxx",
                        "marca2": "xxxxxxxxx",
                        "modelo": "xxxxxxxxxxx",
                        "serial": "xxxxxxxx",
                        "potencia_capacidad": "xxxxxxxxxxx",
                        "observaciones": "xxxxxxxxx"
                      }
                    ],
                    "columns": [
                      {
                        "name": "elemento",
                        "title": "Elemento"
                      },
                      {
                        "name": "cantidad",
                        "title": "Cantidad"
                      },
                      {
                        "name": "ubicacion_cuadernas",
                        "title": "Unicación(Cuadernas)"
                      },
                      {
                        "name": "posicion_lateral",
                        "title": "Posición Lateral"
                      },
                      {
                        "name": "capacidad_dimensiones",
                        "title": "Capacidad/Dimensiones"
                      },
                      {
                        "name": "observaciones",
                        "title": "Observaciones"
                      }
                    ],
                    "cellType": "text",
                    "rowCount": 4,
                    "confirmDelete": true,
                    "confirmDeleteText": "¿Eliminar elemento?",
                    "addRowLocation": "top",
                    "addRowText": "Agregar",
                    "removeRowText": "Eliminar"
                  }
                ]
              },
              {
                "type": "panel",
                "name": "F21",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F21_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta a bordo con un plan de manejo de aguas aceitosas.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se cuenta con un tanque de retención de aguas aceitosas de capacidad suficiente de acuerdo con la operación de la nave.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las válvulas y tuberías del sistema son del material adecuado y se encuentran en buen estado.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Las aguas aceitosas se entregan en puerto a una instalación de recepción.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Se lleva a bordo un archivo con los certificados de recepción de aguas aceitosas expedido por las instalaciones de recepción.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "La tripulación conoce el procedimiento.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "F21_Nota1",
                    "title": "Nota 24",
                    "description": "Las naves que por norma no estén obligadas a instalar equipo filtrador de hidrocarburos, deberán tener un tanque, válvulas y tuberías para retener todas las aguas aceitosas que se generen abordo durante la navegación. Las naves que por su área de navegación y tiempo de duración de cada viaje si no excede las 72 horas, podrán contar con un tanque de retención de aguas aceitosas y al término de su viaje deberán entregarlo en instalaciones de recepción debidamente certificadas, procedimiento que deberá estar en su Manual NGS. Las naves con AB superior o igual a 300 deberán cumplir con la Conexión universal para descarga a tierra.",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "F21-Sistema de manejo de aguas aceitosas: tuberías, válvulas, tanques de retención."
              },
              {
                "type": "panel",
                "name": "F22",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F22_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La nave está dotada de un equipo filtrador de aguas aceitosas calibrado para permitir descargas máximas de 15 ppm.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El equipo está provisto de dispositivos de alarmas y detención automática.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Se cuenta con un tanque de retención de aguas aceitosas de capacidad suficiente de acuerdo con la operación de la nave.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Las válvulas y tuberías del sistema son del material adecuado y se encuentran en buen estado.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Las aguas aceitosas se entregan en puerto a una instalación de recepción.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se lleva a bordo un archivo con los certificados de recepción de aguas aceitosas expedido por las instalaciones de recepción.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "La tripulación conoce el procedimiento.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7"
                    ]
                  }
                ],
                "visible": false,
                "title": "F22-Equipo filtrador de hidrocarburos"
              },
              {
                "type": "panel",
                "name": "F29",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F29_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La nave cuenta con tanque de decantación (slop) de capacidad adecuada.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Cuenta con los mecanismos para la limpieza de los tanques de carga y trasiego de estos residuos al tanque de decantación.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las tuberías que inician y acaban en los tanques de decantación no tienen conexión directa al mar. (Caso contrario se utilizan bridas ciegas).",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los tableros de control están plenamente identificados, cuentan con instrumentos indicadores y tienen señales de precaución. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "F29-Tanques de decantación"
              },
              {
                "type": "panel",
                "name": "F30",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F30_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con un colector de descarga de aguas sucias en ambos costados que puede conectarse a las instalaciones de recepción.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Las instalaciones eléctricas garantizan el suministro adecuado y oportuno de energía aún durante situaciones de emergencia.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las Instalaciones eléctricas no representan peligro para los pasajeros, la tripulación y la operación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los tableros de control están plenamente identificados, cuentan con instrumentos indicadores y tienen señales de precaución. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1"
                    ]
                  }
                ],
                "visible": false,
                "title": "F30-Colector de descarga "
              },
              {
                "type": "panel",
                "name": "F31",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "F31_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con sistema de monitoreo y control de descarga de Hidrocarburos al mar.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El sistema esta provisto de un dispositivo que proporcione un registro continuo de la descarga en litros por milla náutica y cantidad total descargada, o el contenido de hidrocarburos y la tasa de descarga.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "El sistema cuenta con los mecanismos para detener la descarga en el momento de detectar mezclas no autorizadas.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El sistema permite la operación manual en caso de falla  o avería del automático.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4"
                    ]
                  }
                ],
                "visible": false,
                "title": "F31-Sistema de monitoreo y control de descarga de Hidrocarburos al mar"
              },
              {
                "type": "panel",
                "name": "G1",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "G1_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con equipos para determinar la interfaz agua/hidrocarburos en los tanques de decantación y en otros tanques donde se realice separación de hidrocarburos y agua.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "El equipo está calibrado para que dé una alarma cuando la mezcla supera las 15 ppm. ",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las Instalaciones eléctricas no representan peligro para los pasajeros, la tripulación y la operación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los tableros de control están plenamente identificados, cuentan con instrumentos indicadores y tienen señales de precaución. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  }
                ],
                "visible": false,
                "title": "G1-Detector interfaz de agua/hidrocarburo"
              },
              {
                "type": "panel",
                "name": "G15",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "G15_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta a bordo con un pla de gestión de aguas de lastre aprobado por DIMAR.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Se lleva a bordo un Libro de Registro de Agua de Lastre.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Las Instalaciones eléctricas no representan peligro para los pasajeros, la tripulación y la operación.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los tableros de control están plenamente identificados, cuentan con instrumentos indicadores y tienen señales de precaución. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2"
                    ]
                  }
                ],
                "visible": false,
                "title": "G15-Aguas de lastre y sedimentos en buques"
              },
              {
                "type": "panel",
                "name": "G6",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "G6_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Barrera Flotante de Contención.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "Barreras Absobentes de material oleofílico (Chorizos).",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Paños absorbentes de material oleofílico.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Tela absorbente en rollos de material oleofílico.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "Material absorbente (Particulado/granulado).",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Trapos (Waipes).",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Escobas.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Cepillos con pestaña de caucho.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Palas antichispas.",
                        "respuesta": "N/A"
                      },
                      "10": {
                        "pregunta": "Traperos.",
                        "respuesta": "N/A"
                      },
                      "11": {
                        "pregunta": "Recipientas para basura (Canecas plasticas aprox 50 Gal/190Lts, con tapa).",
                        "respuesta": "N/A"
                      },
                      "12": {
                        "pregunta": "Bolsas plásitcas para basura.",
                        "respuesta": "N/A"
                      },
                      "13": {
                        "pregunta": "Guantes de PVC/Nitrilo puño largo.",
                        "respuesta": "N/A"
                      },
                      "14": {
                        "pregunta": "Jabón desengrasante biodegradable.",
                        "respuesta": "N/A"
                      },
                      "15": {
                        "pregunta": "Cabos de amarre.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                      "13",
                      "14",
                      "15"
                    ]
                  }
                ],
                "visible": false,
                "title": "G6-Elementos de control de derrames de hidrocarburos en Barcazas."
              },
              {
                "type": "panel",
                "name": "G10",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "G10_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "Se cuenta con una planta de tratamiento de aguas sucias.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "O se ccuebta con un equipo desmenuzador y desinfección de aguas sucias para poder descargar al mar.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "O se cuenta con un tanque de retención con capacidad suficiente para retener todas las aguas sucias que produzca la nave de acuerdo con el servicio que preste, número de personas a bordo y singladuras.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "El tanque de retención está dotado de medios para indicar visualmente la cantidad de su contenido. ",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "La naves cuenta con un sistema de conexión y descarga que garantice una correcta entrega a la unidad receptora y/o instalación de recepción.",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se lleva a bordo un archivo con los certificados de recepción de aguas sucias expedido por las instalaciones de recepción.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ]
                  },
                  {
                    "type": "expression",
                    "name": "G10_Nota1",
                    "title": "Nota 12",
                    "description": "Aplica a naves que transporten más de 15 personas y naves con AB superior o igual a 400.\t\t\t\t\n",
                    "hideNumber": true
                  }
                ],
                "visible": false,
                "title": "G10-Prevención de la contaminación por aguas sucias  "
              },
              {
                "type": "panel",
                "name": "G11",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "G11_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La nave cuenta con una conexión universal de descarga a tierra de residuos de hidrocarburos ",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "La descarga cumple con las medidas establecidas y condiciones de presión de trabajo.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Se tienen los elementos como bridas, tornillería y empaquetadura disponibles.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Los tableros de control están plenamente identificados, cuentan con instrumentos indicadores y tienen señales de precaución. ",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3"
                    ]
                  }
                ],
                "visible": false,
                "title": "G11-Conexión universal de descarga de residuos de hidrocarburos"
              },
              {
                "type": "panel",
                "name": "G12",
                "elements": [
                  {
                    "type": "matrixdropdown",
                    "name": "G12_preguntas",
                    "titleLocation": "hidden",
                    "hideNumber": true,
                    "defaultValue": {
                      "1": {
                        "pregunta": "La nave cuenta cuenta con un plan de gestión de basuras aprobado por DIMAR.",
                        "respuesta": "N/A"
                      },
                      "2": {
                        "pregunta": "La tripulación esta familiarizada con el plan de gestión de basuras.",
                        "respuesta": "N/A"
                      },
                      "3": {
                        "pregunta": "Se cuenta con rotulos en que se notifica a la tripulación y pasajeros sobre el manejo de basuras.",
                        "respuesta": "N/A"
                      },
                      "4": {
                        "pregunta": "Se lleva un libro de registro de basuras en el que se registran las operaciones relacionadas con la gestión de basuras a bordo.",
                        "respuesta": "N/A"
                      },
                      "5": {
                        "pregunta": "La nave está equipada con un incinerador de basuras. ",
                        "respuesta": "N/A"
                      },
                      "6": {
                        "pregunta": "Se cuenta con triturador o desmenuzador de basuras.",
                        "respuesta": "N/A"
                      },
                      "7": {
                        "pregunta": "Se cuenta con compactador de basuras.",
                        "respuesta": "N/A"
                      },
                      "8": {
                        "pregunta": "Se dispone de un compartimento con capacidad suficiente para almacenar basuras para su entrega en puerto.",
                        "respuesta": "N/A"
                      },
                      "9": {
                        "pregunta": "Se lleva a bordo un archivo con los certificados de recepción de basuras expedido por las instalaciones de recepción.",
                        "respuesta": "N/A"
                      }
                    },
                    "columns": [
                      {
                        "name": "pregunta",
                        "title": "REQUISITOS A REVISAR",
                        "cellType": "expression"
                      },
                      {
                        "name": "respuesta",
                        "title": "CUMPLEN",
                        "cellType": "radiogroup"
                      },
                      {
                        "name": "observaciones",
                        "title": "OBSERVACIOONES",
                        "cellType": "text"
                      }
                    ],
                    "choices": [
                      "SI",
                      "NO",
                      "N/A"
                    ],
                    "columnMinWidth": "240px",
                    "rows": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9"
                    ]
                  }
                ],
                "visible": false,
                "title": "G12-Prevención de la Contaminación por Basuras. Plan de gestión, libro de registro y rótulos."
              }
            ],
            "title": " XIII. SISTEMA DE PREVENCIÓN DE LA CONTAMINACIÓN"
          }
        ]
      }

      ]
    }
  ]
}

module.exports = {
  inspections,
  survey
}