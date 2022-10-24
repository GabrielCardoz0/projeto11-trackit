import styled from "styled-components";
import check from "../imagens/checkmark-128.png";
import { Link } from "react-router-dom";
import react, { useEffect } from "react";
import { AuthContext } from "./auth";
import axios from "axios";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import dayjs from "dayjs";
import ptBr from 'dayjs/locale/pt-br'



export default function HabitosHojePage() {
  const { usuario } = react.useContext(AuthContext);
  const [listaHabitosHoje, setListaHabitosHoje] = react.useState([]);

  const arrayDeValorUnico = [1]

  const config = {
    headers: {
      Authorization: `Bearer ${usuario.token}`,
    },
  };


  const diaHoje = dayjs().locale(ptBr).format("dddd, DD/MM")

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    axios.get(URL, config).then((res) => {
      setListaHabitosHoje(res.data);
    });
  }, []);

  function marcarConcluido(i, ind) {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i}/check`;
    axios
      .post(URL, {}, config)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));

    const newArr = [...listaHabitosHoje];
    newArr[ind].done = true;
    newArr[ind].currentSequence = newArr[ind].currentSequence+1;
    newArr[ind].highestSequence =  newArr[ind].highestSequence+1;
    setListaHabitosHoje(newArr);
  }

  function desmarcarConcluido(id, ind){
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
    axios.post(URL,{}, config).catch((err) => console.log(err.response.data))

    const newArr = [...listaHabitosHoje]
    newArr[ind].done = false;
    newArr[ind].currentSequence = newArr[ind].currentSequence-1;
    newArr[ind].highestSequence = newArr[ind].highestSequence-1;
    setListaHabitosHoje(newArr)

  }

  useEffect(()=>{
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily'
    axios.get(URL, config).then((res)=> {
        console.log(res.data)
    })
  },[])


  const porcentagem = 25;




  return (
    <>
      <TopBar>
        <span>TrackIt</span>
        <img src={usuario.image} alt="" />
      </TopBar>

      <HabitosHoje>
        <div>
          <span>{diaHoje}</span>
          {arrayDeValorUnico.map(()=>{
            if(listaHabitosHoje.length===0){
                return(
                    <h1>Nenhum hábito concluído ainda</h1>
                )} else {
                    return(<h1>Hábitos concluídos: {listaHabitosHoje.length}</h1>)
                }
            })}
          
        </div>

        {listaHabitosHoje.map((h, ind) => {
          if (h.currentSequence === h.highestSequence && h.currentSequence !== 0) {
            return (
              <HabitoConcluido key={h.id}>
                <footer>
                  <h2>{h.name}</h2>
                  <h3>
                    Sequência atual: <strong>{h.currentSequence} dia(s)</strong><br></br>
                    Seu recorde: <strong>{h.highestSequence} dia(s)</strong>
                  </h3>
                </footer>
                <img onClick={() => desmarcarConcluido(h.id, ind)} src={check} alt="" />
              </HabitoConcluido>
            );
          } else if (h.done) {
            return (
              <HabitoConcluido key={h.id}>
                <footer>
                  <h2>{h.name}</h2>
                  <h3>
                    Sequência atual:<strong>{h.currentSequence} dias</strong> <br></br>Seu recorde:
                    {h.highestSequence} dias
                  </h3>
                </footer>
                <img onClick={() => desmarcarConcluido(h.id, ind)} src={check} alt="" />
              </HabitoConcluido>
            );
          } else {
            return (
              <HabitoNaoConcluido key={h.id}>
                <footer>
                  <h2>{h.name}</h2>
                  <h3>
                    Sequência atual: {h.currentSequence} dias <br></br> Seu recorde:
                    {h.highestSequence} dias
                  </h3>
                </footer>
                <img
                  onClick={() => marcarConcluido(h.id, ind)}
                  src={check}
                  alt=""
                />
              </HabitoNaoConcluido>
            );
          }
        })}

      </HabitosHoje>

      <BottomBar>
        <Link to={"/habitos"}>
          <span>Hábitos</span>
        </Link>
        <Link to={"/hoje"}>
            <div>
                <CircularProgressbarWithChildren background={true} styles={buildStyles({
                    rotation:0.5,
                    strokeLinecap:'butt',
                    textSize:'16px',
                    pathTransitionsDurantion:0.5,
                    pathColor:'#fff',
                    textColor:'#f88',
                    trailColor:"rgba(62,152,199, 80",
                    
                })} value={porcentagem}>
                    hoje
                </CircularProgressbarWithChildren>
            </div>
        </Link>
        <Link to={"/historico"}>
          <span>Histórico</span>
        </Link>
      </BottomBar>
    </>
  );
}

const HabitoNaoConcluido = styled.div`
  width: 340px;
  height: 94px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  footer {
    width: 245px;
    h2 {
      font-size: 20px;
      color: #666666;
      width: 280px;
    }
    h3 {
      font-size: 13px;
      font-weight: 400;
      color: #666;
      margin-top: 7px;
      width: 175px;
    }
  }
  img {
    background-color: #e7e7e7;
    width: 69px;
    height: 69px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
  }
`;
const HabitoConcluido = styled.div`
  width: 340px;
  height: 94px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  footer {
    width: 245px;
    h2 {
      font-size: 20px;
      color: #666666;
      width: 280px;
    }
    h3 {
      font-size: 13px;
      font-weight: 400;
      color: #666;
      margin-top: 7px;
      width: 175px;
    }
    strong {
      color: #8fc549;
    }
  }
  img {
    background-color: #8fc549;
    width: 69px;
    height: 69px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
  }
`;
const HabitosHoje = styled.div`
  margin-top: 98px;
	font-family: 'Lexend Deca', sans-serif;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 340px;
    margin-bottom: 20px;
    span {
      font-size: 23px;
      color: #126ba5;
    }
    h1 {
      color: #bababa;
      font-size: 18px;
      margin-top: 5px;
    }
  }
`;
const TopBar = styled.div`
  position: fixed;
  font-family: 'Playball', cursive;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #126ba5;
  height: 70px;
  width: 100vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  span {
    margin: 18px;
    font-size: 39px;
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
	font-family: 'Lexend Deca', sans-serif;
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
