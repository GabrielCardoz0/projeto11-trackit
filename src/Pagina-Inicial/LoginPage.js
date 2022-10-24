
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import LogoTrackIt from '../imagens/Group 8.png'
import React from "react";
import axios from "axios";
import { AuthContext } from "./auth";
import react from "react";






export default function LoginPage(e) {


    const {setUsuario} = react.useContext(AuthContext)

    

    const [email, setEmail] = React.useState('')
    const [senha, setsenha] = React.useState('')
    const navigate = useNavigate()

    function logarUsuario(e){
        e.preventDefault();
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        const user = {
            email:email,
            password:senha
        }
        const promise = axios.post(URL, user)
        promise.then((o) =>{
            setUsuario(o.data)
            navigate('/hoje')
        })
        promise.catch((err) => { console.log(err.response.data.message)})

        
    }


    return(
        <FormLogin>
            <Logo><img src={LogoTrackIt} alt=""/></Logo>
            <input placeholder="email" type='email' onChange={(e) => setEmail(e.target.value)}></input>
            <input placeholder="senha" type='password' onChange={(e) => setsenha(e.target.value)}></input>
            <button type="submit" onClick={logarUsuario}>Entrar</button>
            <Link to={'/cadastro'}><LinkCadastro>Não tem uma conta? Cadastre-se!</LinkCadastro></Link>
            
            
        </FormLogin>
    )
};

const Logo = styled.div`
    width:180px;
    height:179px;
    margin-top:68px;
`;
const FormLogin = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:20px;
    input{
        width:303px;
        height:45px;
        margin-top:6px;
        border-radius:5px;
        border:1px solid #d4d4d4;
        font-size:20px;
        color:#000;
        padding:10px;
        box-sizing:border-box;
    }
    button{
        background-color:#52b6ff;
        border-radius:5px;
        width:303px;
        height:45px;
        font-size:21px;
        color: #fff;
        margin-top:6px;
        margin-bottom:20px;
        cursor: pointer;
    }
`;
const LinkCadastro = styled.span`
    color: #52b6ff;
    font-size:14px;
    margin-top:25px;
    cursor: pointer;
`;

