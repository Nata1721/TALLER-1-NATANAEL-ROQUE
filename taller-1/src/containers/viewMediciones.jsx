import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from 'primereact/toast';
import {React, useRef, useState} from "react";
import { Button } from 'primereact/button';
function ViewMediciones({ mediciones, borrarMedicion }) {



  const toast = useRef(null);  

  const eliminarMedicion = (medicion) =>{
    borrarMedicion(medicion)
    console.log(medicion)

  }
  const accionesBody = (medicion) =>{
    return <Button severity="danger" label="Eliminar Medición" onClick={() => eliminarMedicion(medicion)}/>

  }

  return (
    <>

      <Toast ref={toast}/>
      <DataTable value={mediciones} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: "50rem" }}>
        <Column field="fechaHora" header="Fecha"></Column>
        <Column field="fechaHora" header="Hora"></Column>
        <Column field="medidor" header="Medidor"></Column>
        <Column field="valor" header="Valor"></Column>
        <Column body={accionesBody} header="Acciones"></Column>
      </DataTable>
    </>
  );
}

export default ViewMediciones;
