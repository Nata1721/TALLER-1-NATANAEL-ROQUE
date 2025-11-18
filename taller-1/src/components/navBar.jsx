import { Menubar } from 'primereact/menubar';
import React from 'react'
import icono from "../assets/logo.png"
import { Image } from 'primereact/image';
import { useNavigate } from "react-router";
function NavBar() {

    let navigate = useNavigate();

    const items = [
        {label:"Crear", icon:"pi pi-android", command: () => {navigate("/create")}},
        {label:"Ver", icon:"pi pi-android", command: () => {navigate("/view")}}
    ]

    return (
        <>
            <Menubar model={items} start={<Image width="60px" src = {icono}/>} end={<Image width="60px" src = {icono}/>} />
        
        
        </>
    )
}

export default NavBar
