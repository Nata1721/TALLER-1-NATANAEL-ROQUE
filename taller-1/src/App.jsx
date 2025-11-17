import React, { useState } from 'react'
import RegistroLectura from '../src/components/RegistroLectura';
import { createMedicion, deleteMedicion, getMediciones } from '../src/services/medicionesServices'
import ViewMediciones from './containers/viewMediciones';



function App() {
  const [mediciones, setMediciones] = useState([])


    
    const handleMediciones=(medicion) =>{
        createMedicion(medicion)
        setMediciones(getMediciones())
    }

    const borrarMedicion = (medicion) =>{
      console.log("holaa")
      deleteMedicion(medicion)
      setMediciones(getMediciones())
    }
  return (
    <>
     <RegistroLectura ingresarMedicion={handleMediciones}/>
     <ViewMediciones mediciones={getMediciones()} borrarMedicion={borrarMedicion}/>
    </>
  )
}

export default App
