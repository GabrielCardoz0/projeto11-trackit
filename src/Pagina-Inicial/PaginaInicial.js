import styled from "styled-components";
import LoginPage from "./LoginPage";
import RegistrarPage from "./RegistrarPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";


export default function PaginaInicial() {
    return(
        <BrowserRouter>
                <PagInicial>
                    <Routes>
                        <Route path='/' element={<LoginPage/>}/>
                        <Route path='/cadastro' element={<RegistrarPage/>}/>
                    </Routes>
                </PagInicial>
        </BrowserRouter>
        
    )
};



const PagInicial = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

`;
