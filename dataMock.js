const iNSPECTION_NUMBER = 14
const SURVEY_NUMBER = 15

const status = [
    'pendiente',
    'enprogreso',
    'completo'
]
const inspections = userId => Array.from(Array(iNSPECTION_NUMBER)).map((x, index) => {
    if (userId === 1)
        return {
            id: index + 1,
            title: `${userId}, Inspeccion ${index + 1}`,
            status: status[Math.floor(Math.random() * 3)]

        }
    else
        return {
            id: index,
            title: `#${userId}, Inspección ${index * 2}`,
            status: status[Math.floor(Math.random() * 3)]

        }
})
const survey = id => Array.from(Array(SURVEY_NUMBER)).map((x, index) => {

    return {
        id: index,
        title: `Pregunta ${index + 1}`,

    }
})

const inspections2 = id=>{
    return [
        {
          "id": 1,
          "numRadicado": 81,
          "fechaSolicitud": "2020-07-02",
          "numMatriculaNave": "ak42",
          "artefactoNaval": "naval azul",
          "tipoInspeccion": "inspe555",
          "fechaProgramada": "2020-09-12",
          "ubicacion": "palo alto costa",
          "estado": "Pendiente",                     
          "numNaveOMI":"OMI o NIC 33RR",
          "propietarioNave":"Embarca propietario",
          "catalogacionNave":"cat nave"
        },
        {
          "id": 2,
          "numRadicado": 111,
          "fechaSolicitud": "2020-07-02",
          "numMatriculaNave": "92c952",
          "artefactoNaval": "nave azul",
          "tipoInspeccion": "inspetx",
          "fechaProgramada": "2020-09-12",
          "ubicacion": "cartagena puerto 2 ",
          "estado": "Pendiente",
          "numNaveOMI":"OMI o NIC 33RR",
          "propietarioNave":"Embarca propietario",
          "catalogacionNave":"cat nave"
        },
        {
          "id": 3,
          "numRadicado": 561,
          "fechaSolicitud": "2020-07-08",
          "numMatriculaNave": "c952",
          "artefactoNaval": "artefact 3",
          "tipoInspeccion": "inspeccion 2",
          "fechaProgramada": "2020-09-12",
          "ubicacion": "puerto 4",
          "estado": "enProceso",
          "numNaveOMI":"OMI o NIC 33RR",
          "propietarioNave":"Embarca propietario",
          "catalogacionNave":"cat nave"
        },
        {
          "id": 4,
          "numRadicado": 541,
          "fechaSolicitud": "2020-07-02",
          "numMatriculaNave": "num445yy6",
          "artefactoNaval": "artefact",
          "tipoInspeccion": "tipo insp6",
          "fechaProgramada": "2020-09-12",
          "ubicacion": "puerto 4",
          "estado": "enProceso",
          "numNaveOMI":"OMI o NIC 33RR",
          "propietarioNave":"Embarca propietario",
          "catalogacionNave":"cat nave"
        },
        {
          "id": 5,
          "numRadicado": 341,
          "fechaSolicitud": "2020-07-02",
          "numMatriculaNave": "1234AA",
          "artefactoNaval": "artefact333",
          "tipoInspeccion": "inspeccion22",
          "fechaProgramada": "2020-09-12",
          "ubicacion": "factory puerto",
          "estado": "Completado",
          "numNaveOMI":"OMI o NIC 33RR",
          "propietarioNave":"Embarca propietario",
          "catalogacionNave":"catalogn nave"
        },
        {
          "id": 6,
          "numRadicado": 778,
          "fechaSolicitud": "2020-07-02",
          "numMatriculaNave": "1b234AA",
          "artefactoNaval": "artefact333",
          "tipoInspeccion": "inspeccion33",
          "fechaProgramada": "2020-09-12",
          "ubicacion": "factory puerto",
          "estado": "Completado",
          "numNaveOMI":"OMI o NIC 33RR",
          "propietarioNave":"Embarca propietario",
          "catalogacionNave":"catalogo nave"
        }
    ]
}


module.exports = {
    inspections,
    inspections2,
    survey
}