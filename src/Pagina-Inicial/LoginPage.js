
import styled from "styled-components"
import { Link } from "react-router-dom";
import LogoTrackIt from '../imagens/Group 8.png'

export default function LoginPage() {
    return(
        <FormLogin>
            <Logo><img src={LogoTrackIt} alt=""/></Logo>
            <input placeholder="email"></input>
            <input placeholder="senha"></input>
            <Link to={'/habitos'}><button>Entrar</button></Link>
            <Link to={'/cadastro'}><LinkCadastro>Não tem uma conta? Cadastre-se!</LinkCadastro></Link>
            
        </FormLogin>
    )
};

const Logo = styled.div`
    width:180px;
    height:179px;
    margin-top:68px;
`;
const FormLogin = styled.div`
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
    text-decoration-line:underline;
    margin-top:25px;
    cursor: pointer;
`;

