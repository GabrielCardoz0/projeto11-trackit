import  ReactDOM  from "react-dom";
import App from "./App";
import React from "react"
import { AuthProvider } from "./Pagina-Inicial/auth";

ReactDOM.render(

    <AuthProvider>
        <App/>
    </AuthProvider>


, document.querySelector('.root'))