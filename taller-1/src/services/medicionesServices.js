const LOCAL_KEY = "Sanquinta_";

const createMedicion = (medicion) => {
    let mediciones = [];
    const data = localStorage.getItem(LOCAL_KEY);

    if(data != null){
        lista = JSON.parse(data)

    }

    mediciones = [...mediciones, medicion];

    localStorage.setItem(LOCAL_KEY, JSON.stringify(mediciones))



}

const getMediciones = () => {
    const data = localStorage.getItem(LOCAL_KEY);

    if(data != null){
        return JSON.parse(data);

    }

    return [];

}


export {createMedicion, getMediciones}