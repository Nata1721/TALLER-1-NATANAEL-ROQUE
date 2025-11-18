import {React, useState} from 'react'
import ViewMediciones from '../components/viewMediciones'
import NavBar from '../components/navBar'
import { getMediciones, deleteMedicion } from '../services/medicionesServices'


function MedicionesExistentes() {


    const [mediciones, setMediciones] = useState([])


    const borrarMedicion = (medicion) =>{
      console.log("holaa")
      deleteMedicion(medicion)
      setMediciones(getMediciones())
    }


    return (
        <>
            <NavBar></NavBar>
            <ViewMediciones mediciones={getMediciones()} borrarMedicion={borrarMedicion}/>
        
        </>
    )
}

export default MedicionesExistentes
