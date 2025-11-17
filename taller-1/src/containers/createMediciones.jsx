import React, { useState } from 'react'
import RegistroLectura from '../components/RegistroLectura'
import { createMedicion, getMediciones } from '../services/medicionesServices'

function CreateMediciones() {
    const [mediciones, setMediciones] = useState([])



    const handleMediciones=(medicion) =>{
        createMedicion(medicion)
        setMediciones(getMediciones())
    }
    return (
        <>
            <RegistroLectura ingresarMedicion={handleMediciones}></RegistroLectura>
        </>
    )
}

export default CreateMediciones
