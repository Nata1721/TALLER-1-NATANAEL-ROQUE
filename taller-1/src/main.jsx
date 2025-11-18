import { StrictMode } from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import './index.scss'
import App from "./App"
import CreateMediciones from './containers/createMediciones';
import MedicionesExistentes from './containers/medicionesExistentes';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateMediciones/>} /> 
          <Route path="create" element={<CreateMediciones/>}/>
          <Route path="view" element={<MedicionesExistentes/>}/>
        </Routes> 
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>,
)
