const LOCAL_KEY = "SANSQUINTA_"

const createMedicion = (medicion) => {
    let mediciones = [];

    const data = localStorage.getItem(LOCAL_KEY)

    if(data!=null){

        mediciones = JSON.parse(data)


    }

    mediciones = [...mediciones, medicion]

    localStorage.setItem(LOCAL_KEY,JSON.stringify(mediciones))


}

const getMediciones = () => {
    const data = localStorage.getItem(LOCAL_KEY)

    if(data!=null){
        return JSON.parse(data)

    }
    
    return []

}

const deleteMedicion = (medicion) =>{
    const mediciones = getMediciones();
    const listaMediciones = mediciones.filter(m=>m.indice != medicion.indice)
    localStorage.setItem(LOCAL_KEY, JSON.stringify(listaMediciones))

}



export {createMedicion, getMediciones, deleteMedicion}