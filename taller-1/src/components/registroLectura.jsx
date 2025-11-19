import React, { useRef, useState } from 'react'

import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Editor } from 'primereact/editor';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { FloatLabel } from "primereact/floatlabel"; 


function RegistroLectura({ingresarMedicion = () =>{}}) {
     const medidas = [
        {nombre: "Kilowatts", unidad: "kW"},
        {nombre: "Watts", unidad: "W"},
        {nombre: "Temperatura", unidad: "C"}
    ]

    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [medidor, setMedidor] = useState("01");
    const [direccion, setDireccion] = useState("");
    const [valor, setValor] = useState(1);
    const [medida, setMedida] = useState(medidas[0]);
    const listaMedidores = ["01", "02", "03", "04", "05","06","07","08","09","10"];
    const toast = useRef(null);
    const [indice, setIndice] = useState(0)

   


    const clickBoton = () =>{

        

        if(fecha != "" && hora != "" && direccion != "" ){
            const objeto = {indice, fecha:fecha.toLocaleDateString("es-CL"), hora:hora.toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit" }), medidor, direccion, valor, medida}
            ingresarMedicion(objeto)
            toast.current.show({severity:"success", summary: "Medición registrada", detail: "Medición registrada con éxito"})
            setIndice(indice+1)
            setFecha("")
            setHora("")
            setMedidor("01")
            setDireccion("")
            setValor(1)
            setMedida(medidas[0])

        }
        else{
            let listaErrores = []
            if(fecha == ""){
                listaErrores.push("-El campo fecha no puede estar vacío")
            }

            if(hora == ""){
                listaErrores.push("-El campo hora no puede estar vacío")
            }

            if(direccion == ""){
                listaErrores.push("-El campo dirección no puede estar vacío")
            }

            toast.current.show({severity:"danger", summary: "Error al registrar medición", detail: listaErrores.join("\n")})
        }

    }
    
    



    return (
        <>
            <Toast ref={toast}/>
            <Panel>
                <div className="row">
                    <div className="col mt-3 mb-3">
                        <FloatLabel>
                            <Calendar id="calendar" value={fecha} onChange={(e) => setFecha(e.value)} hourFormat="24" dateFormat="dd/mm/yy" />
                            <label htmlFor='calendar'>Fecha</label>
                        </FloatLabel>
                    </div>
                    <div className="col mt-3 mb-3">
                    <FloatLabel>
                        <Calendar id="hora" value={hora} onChange={(e) => setHora(e.value)} timeOnly />
                        <label htmlFor='hora'>Hora</label>
                    </FloatLabel>
                    </div>
                    <div className="col mt-3 mb-3">
                        <label htmlFor="" className='me-3'>Medidor </label>
                        <Dropdown value={medidor} onChange={(e) => setMedidor(e.value)} options={listaMedidores} optionLabel="medidores"/>
                        </div>
                        <Editor id="direccion" value={direccion} onTextChange={(e) => setDireccion(e.textValue.trim())} style={{ height: '320px' }} /> 
                    </div>
                <div className="row">
                    <div className="col mt-5">
                    <FloatLabel>
                        <InputNumber id="valor"  inputId="minmax-buttons" value={valor} onValueChange={(e) => setValor(e.value)} mode="decimal" showButtons min={1} max={500} />
                        <label htmlFor="valor" >Valor</label>
                    </FloatLabel>
                    </div>
                    <div className="col mt-3">
                        <label htmlFor="" className='mt-3'>Tipo de medida: </label>
                        <div className="card flex justify-content-center">
                        <div className="flex flex-column gap-3">
                            {medidas.map((m) => {
                                return (
                                    <div key={m.nombre} className="flex align-items-center mt-3">
                                        <RadioButton inputId={m.nombre} name="category" value={m} onChange={(e) => setMedida(e.value)} checked={medida.unidad === m.unidad} />
                                        <label htmlFor={m.nombre} className="ml-2">{m.nombre}</label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            </Panel>

            <Button className="mt-3" label="Registrar Medición" onClick={clickBoton}/>
        
        
        
        </>
    )
}

export default RegistroLectura
