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
      }]
    }
  ]
}

module.exports = {
  inspections,
  survey
}