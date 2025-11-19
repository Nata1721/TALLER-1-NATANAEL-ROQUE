import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from 'primereact/toast';
import {React, useRef, useState} from "react";
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

function ViewMediciones({ mediciones, borrarMedicion }) {
  const unidades = ["Todas", "Kilowatts", "Watts", "Temperatura"]
  const [unidad, setUnidad] = useState(unidades[0])
  const [unidadFiltro, setUnidadFiltro] = useState(unidades[0])
  const listaAux = []

  if(unidadFiltro!="Todas"){
    mediciones.forEach(objeto => {
      if(objeto.medida.nombre == unidadFiltro){
        listaAux.push(objeto)
      }
    });
  }
  else{
    mediciones.forEach(objeto=>{
      listaAux.push(objeto)

    })
  }


  const toast = useRef(null);  

  const eliminarMedicion = (medicion) =>{
    borrarMedicion(medicion)
    toast.current.show({severity:"success", summary: "Medición eliminada", detail: "La medición fue eliminada con éxito"})

  }

  const valorBody = (medicion) =>{
    
    return `${medicion.valor} ${medicion.medida.unidad}`

  }
  const accionesBody = (medicion) =>{
    return <Button severity="danger" label="Eliminar Medición" onClick={() => eliminarMedicion(medicion)}/>

  }

  return (
    <>

      <Toast ref={toast}/>
      
            <Dropdown value={unidad} onChange={(e) => setUnidad(e.value)} options={unidades} optionLabel="unidad" 
                    placeholder="Unidades de medida" className="w-full md:w-14rem mt-3 me-3 mb-3" />
            <Button className="mb-3" label="Filtrar" onClick={()=>setUnidadFiltro(unidad)}   />
      
      <DataTable value={listaAux} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: "50rem" }}>
        <Column field="fecha" sortable header="Fecha"></Column>
        <Column field="hora" header="Hora"></Column>
        <Column field="medidor" header="Medidor"></Column>
        <Column body={valorBody} header="Valor"></Column>
        <Column body={accionesBody} header="Acciones"></Column>
      </DataTable>
    </>
  )
}

export default ViewMediciones;
