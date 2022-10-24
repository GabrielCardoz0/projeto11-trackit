import styled from "styled-components";
import { Link } from "react-router-dom";
import react, { useEffect } from "react";
import { AuthContext } from "./auth";
import axios from "axios";

export default function HabitosPagInicial() {
  const { usuario } = react.useContext(AuthContext);

  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const [diasSelecionados, setDiasSelecionados] = react.useState([]);
  const [arrAddHabito, setArrAddHabito] = react.useState([]);
  const [tituloHabito, setTituloHabito] = react.useState("");
  const [habitosCriados, setHabitosCriados] = react.useState([]);

  const numDiasSemana = [0, 1, 2, 3, 4, 5, 6];

  const config = {
    headers: {
      Authorization: `Bearer ${usuario.token}`,
    },
  };

  function adicionarHabito() {
    setArrAddHabito([1]);
  }

  function cancelarHabito(num) {
    const newArr = arrAddHabito.filter((n) => n !== num);
    setArrAddHabito(newArr);
    setDiasSelecionados([]);
    setTituloHabito("");
  }

  function salvarHabito() {
    const habitoAEnviar = {
      name: tituloHabito,
      days: [...diasSelecionados],
    };

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const promise = axios.post(URL, habitoAEnviar, config);

    promise.then((res) => {
      console.log(res.data);
      setHabitosCriados([...habitosCriados, res.data]);
    });

    setArrAddHabito([]);
    setDiasSelecionados([]);
    setTituloHabito("");
  }

  function retirarDia(d) {
    const newArr = diasSelecionados.filter((dia) => dia !== d);
    setDiasSelecionados(newArr);
  }

  function adicionarDia(d) {
    setDiasSelecionados([...diasSelecionados, d]);
  }

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        config
      )
      .then((res) => {
        setHabitosCriados(res.data);
        console.log(res.data);
      });
  }, []);

  function deletarHabito(i){
    console.log(i)
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i}`
    axios.delete(URL, config).then((res)=> console.log(res))

    const newArr = habitosCriados.filter((o) => o.id !==i)
    setHabitosCriados(newArr)
  }

  return (
    <>
      <TopBar>
        <span>TrackIt</span>
        <img src={usuario.image} alt="" />
      </TopBar>

      <HomeHabitos>
        <AdicionarHabitos>
          <span>Meus hábitos</span>
          <button onClick={adicionarHabito}>+</button>
        </AdicionarHabitos>

        {arrAddHabito.map((n) => {
          return (
            <CriarHabito key={n}>
              <input
                placeholder="nome do hábito"
                onChange={(e) => setTituloHabito(e.target.value)}
              />
              <ul>
                {diasSemana.map((d, i) => {
                  if (diasSelecionados.includes(i)) {
                    return (
                      <DiaSemana
                        key={i}
                        selecionado={diasSelecionados.includes(i)}
                        onClick={() => retirarDia(i)}
                      >
                        {d[0]}
                      </DiaSemana>
                    );
                  } else {
                    return (
                      <DiaSemana key={i} onClick={() => adicionarDia(i)}>
                        {d[0]}
                      </DiaSemana>
                    );
                  }
                })}
              </ul>
              <div>
                <BotaoCancelar onClick={() => cancelarHabito(n)}>
                  Cancelar
                </BotaoCancelar>
                <BotaoSalvar onClick={salvarHabito}>Salvar</BotaoSalvar>
              </div>
            </CriarHabito>
          );
        })}

        <ListaHabitos>
          {habitosCriados.map((h) => {
            return (
              <Habito key={h.id}>
                <span>{h.name}</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/54/54324.png"
                  alt="lixeira"
                  onClick={() => deletarHabito(h.id)}
                />
                <ul>
                  {numDiasSemana.map((num, ind) => {
                    if (h.days.includes(num)) {
                      return <DiaEscolhido key={ind}>{diasSemana[ind][0]}</DiaEscolhido>;
                    } else {
                      return (
                        <DiaNaoEscolhido key={ind}>{diasSemana[ind][0]}</DiaNaoEscolhido>
                      );
                    }
                  })}
                </ul>
              </Habito>
            );
          })}
        </ListaHabitos>

        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </HomeHabitos>

      <BottomBar>
        <Link to={"/habitos"}>
          <span>Hábitos</span>
        </Link>
        <Link to={"/hoje"}>
          <div>Hoje</div>
        </Link>
        <Link to={"/historico"}>
          <span>Histórico</span>
        </Link>
      </BottomBar>
    </>
  );
}

const HomeHabitos = styled.div`
  background-color: #e5e5e5;
  width: 100vw;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    width: 340px;
    margin-top: 28px;
    font-size: 18px;
    color: #666666;
    height: 80vh;
  }
`;
const AdicionarHabitos = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 28px 0 20px 0;
  span {
    font-weight: 400;
    font-size: 23px;
    color: #126ba5;
  }
  button {
    width: 40px;
    height: 35px;
    background-color: #52b6ff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
`;
const TopBar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #126ba5;
  height: 70px;
  width: 100vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;
  span {
    margin: 18px;
    font-size: 18px;
    color: #fff;
  }
  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
    margin: 18px;
  }
`;
const BottomBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  font-size: 18px;
  text-decoration: none;
  span {
    padding: 28px;
    color: #52b6ff;
    cursor: pointer;
  }
  div {
    background-color: #52b6ff;
    width: 91px;
    height: 91px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 45px;
    color: #fff;
    cursor: pointer;
  }
`;
const CriarHabito = styled.div`
  width: 340px;
  height: 180px;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 19px;
  margin-bottom: 15px;
  input {
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    padding: 10px;
    font-size: 20px;
    box-sizing: border-box;
    ::placeholder {
      color: #d5d5d5;
    }
  }
  ul {
    display: flex;
    margin-top: 10px;
  }
  div {
    display: flex;
    justify-content: flex-end;
    margin-top: 29px;
  }
`;
const BotaoCancelar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 35px;
  color: #52b6ff;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;
const BotaoSalvar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 35px;
  background-color: #52b6ff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;
const ListaHabitos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Habito = styled.div`
  width: 340px;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
  box-sizing: border-box;
  padding: 15px;
  span {
    font-size: 20px;
    color: #666666;
    width: 280px;
  }
  img {
    width: 13px;
    height: 15px;
    position: absolute;
    top: 11px;
    right: 10px;
    cursor: pointer;
  }
  ul {
    display: flex;
    margin-top: 10px;
    /* li {
      width: 30px;
      height: 30px;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      color: #d5d5d5;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 4px;
      cursor: pointer;
    } */
  }
`;
const DiaSemana = styled.li`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: ${(props) => (props.selecionado ? "#fff" : "#d5d5d5")};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  background-color: ${(props) => (props.selecionado ? "#d5d5d5" : "#fff")};
  cursor: pointer;
`;
const DiaEscolhido = styled.li`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  background-color: #d5d5d5;
  cursor: pointer;
`;
const DiaNaoEscolhido = styled.li`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: #d5d5d5;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  background-color: #fff;
  cursor: pointer;
`;
