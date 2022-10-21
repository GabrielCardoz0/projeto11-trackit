import React from "react"
// import { Link } from "react-router-dom";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HabitosHojePage from "./Pagina-Inicial/HabitosHojePage";
import HabitosPagInicial from "./Pagina-Inicial/HabitosPagInicial";
import HistoricoPage from "./Pagina-Inicial/HistoricoPage";
import LoginPage from "./Pagina-Inicial/LoginPage";
import RegistrarPage from "./Pagina-Inicial/RegistrarPage";


export default function App() {
    return(
        <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<LoginPage/>}/>
                        <Route path='/cadastro' element={<RegistrarPage/>}/>
                        <Route path="/habitos" element={<HabitosPagInicial/>}/>
                        <Route path="/hoje" element={<HabitosHojePage/>}/>
                        <Route path="/historico" element={<HistoricoPage/>}/>
                    </Routes>
        </BrowserRouter>
    )
};


