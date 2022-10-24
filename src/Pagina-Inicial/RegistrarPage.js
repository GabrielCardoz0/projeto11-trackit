import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import LogoTrackIt from "../imagens/Group 8.png";
import react from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function RegistrarPage() {
  const [emailCadastrado, setEmailCadastrado] = react.useState("");
  const [senhaCadastrada, setSenhaCadastrada] = react.useState("");
  const [nomeUser, setNomeUser] = react.useState("");
  const [fotoUser, setFotoUser] = react.useState("");
  const navigate = useNavigate()



  function cadastrar(e) {
    e.preventDefault();

    const novoUsuario = {
      email: emailCadastrado,
      name: nomeUser,
      image: fotoUser,
      password: senhaCadastrada,
    };

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    axios.post(URL, novoUsuario).then(() => navigate('/')).catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops... há algo errado",
        text: err.response.data.message,
        footer: '<a href="">Why do I have this issue?</a>',
      });

      console.log(err.message);
    });
  }

  return (
    <PaginaRegistro>
      <Logo>
        <img src={LogoTrackIt} alt="" />
      </Logo>
      <FormRegistro onSubmit={cadastrar}>
        <input required
          type="email"
          placeholder="email"
          onChange={(e) => setEmailCadastrado(e.target.value)}
        ></input>

        <input required
          type="password"
          placeholder="senha"
          onChange={(e) => setSenhaCadastrada(e.target.value)}
        ></input>

        <input required
          placeholder="nome"
          onChange={(e) => setNomeUser(e.target.value)}
        ></input>

        <input required
          type="url"
          placeholder="foto"
          onChange={(e) => setFotoUser(e.target.value)}
        ></input>

        <button type="submit">Cadastrar</button>
        
        <Link to={"/"}>
          <LinkLogin>Já tem uma conta? Faça login!</LinkLogin>
        </Link>
      </FormRegistro>
    </PaginaRegistro>
  );
}

const PaginaRegistro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.div`
  width: 180px;
  height: 179px;
  margin-top: 68px;
`;
const FormRegistro = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  input {
    width: 303px;
    height: 45px;
    margin-top: 6px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    font-size: 20px;
    color: #000;
    padding: 10px;
    box-sizing: border-box;
  }
  button {
    background-color: #52b6ff;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    font-size: 21px;
    color: #fff;
    margin-top: 6px;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;
const LinkLogin = styled.span`
  color: #52b6ff;
  font-size: 14px;
  text-decoration-line: underline;
  margin-top: 25px;
  cursor: pointer;
`;
