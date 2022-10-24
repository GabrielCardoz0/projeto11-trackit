import react from "react";
import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [usuario, setUsuario] = react.useState({
        id:0,
        name:'LeoVacilao',
        image:'https://img.freepik.com/fotos-premium/cachorrinho-fofo-de-spitz-pomeranian-deitado-no-fundo-amarelo-brilhante_253512-22.jpg?w=2000',
        email:'bielzinho@email.com',
        password:'123456',
        token:'qwerty',
    })


    return(
        <AuthContext.Provider value={{usuario, setUsuario}}>
            {props.children}
        </AuthContext.Provider>
    )
}
