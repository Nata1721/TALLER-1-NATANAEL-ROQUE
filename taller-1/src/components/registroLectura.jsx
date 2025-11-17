import React, { useRef, useState } from 'react'

import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Editor } from 'primereact/editor';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';


function RegistroLectura({ingresarMedicion = () =>{}}) {
    const [fechaHora, setFechaHora] = useState("");
    const [medidor, setMedidor] = useState("01");
    const [direccion, setDireccion] = useState("");
    const [valor, setValor] = useState(1);
    const [medida, setMedida] = useState("Kilowatts");
    const listaMedidores = ["01", "02", "03", "04", "05","06","07","08","09","10"];
    const toast = useRef(null);
    const [indice, setIndice] = useState(0)


    const clickBoton = () =>{
        if(direccion != ""){
            const objeto = {indice,fechaHora, medidor, direccion, valor, medida}
            console.log(objeto)
            ingresarMedicion(objeto)
            toast.current.show({severity:"success", summary: "Medición registrada", detail: "Medición registrada con éxito"})
            setIndice(indice+1)
        }
    }
    
    



    return (
        <>
            <Toast ref={toast}/>
            <Calendar id="calendar-24h" value={fechaHora} onChange={(e) => setFechaHora(e.value)} showTime hourFormat="24" dateFormat="dd/mm/yy" />
            <Dropdown value={medidor} onChange={(e) => setMedidor(e.value)} options={listaMedidores} optionLabel="medidores"/>
            <Editor id="direccion" value={direccion} onTextChange={(e) => setDireccion(e.textValue.trim())} style={{ height: '320px' }} /> 
            <InputNumber inputId="minmax-buttons" value={valor} onValueChange={(e) => setValor(e.value)} mode="decimal" showButtons min={1} max={500} />
            <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                    <RadioButton inputId="medida1" name="medida" value="Kilowatts" onChange={(e) => setMedida(e.value)} checked={medida === 'Kilowatts'} />
                    <label htmlFor="medida1" className="ml-2">Kilowatts</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medida2" name="medida" value="Watts" onChange={(e) => setMedida(e.value)} checked={medida === 'Watts'} />
                    <label htmlFor="medida2" className="ml-2">Watts</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="medida3" name="medida" value="Temperatura" onChange={(e) => setMedida(e.value)} checked={medida === 'Temperatura'} />
                    <label htmlFor="medida3" className="ml-2">Temperatura</label>
                </div>
            </div>

            <Button label="Registrar Medición" onClick={clickBoton}/>
        
        
        
        </>
    )
}

export default RegistroLectura
