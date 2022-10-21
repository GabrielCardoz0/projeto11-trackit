import styled from "styled-components";
import check from '../imagens/checkmark-128.png'

export default function HabitosHojePage() {
    return (
        <>
            <TopBar>
                <span>TrackIt</span>
                <img src='https://img.freepik.com/fotos-premium/cachorrinho-fofo-de-spitz-pomeranian-deitado-no-fundo-amarelo-brilhante_253512-22.jpg?w=2000' alt='' />
            </TopBar>

            <HabitosHoje>
                <div>
                    <span>Data</span>
                    <h1>Nenhum hábito concluído ainda</h1>
                </div>
                <HabitoNaoConcluido>
                    <footer>
                        <h2>Titulo habito</h2>
                        <h3>Sequência atual: 30 dias Seu recorde: 5 dias</h3>
                    </footer>
                    <img src={check} alt=""/>
                    
                </HabitoNaoConcluido>
                <HabitoConcluido>
                    <footer>
                        <h2>Titulo habito</h2>
                        <h3>Sequência atual: <strong>30 dias</strong> Seu recorde: <strong>5 dias</strong></h3>
                    </footer>
                    <img src={check} alt=""/>
                    
                </HabitoConcluido>
            </HabitosHoje>

            <BottomBar>
                <span>Hábitos</span>
                <div>Hoje</div>
                <span>Histórico</span>
            </BottomBar>
        </>
    )
};


const HabitoNaoConcluido = styled.div`
    width:340px;
    height:94px;
    background-color:#f1f1f1;
    display:flex;
    align-items:center;
    box-sizing:border-box;
    padding:15px;
    border-radius:5px;
    margin-bottom:15px;
    footer{
        width:245px;
        h2{
            font-size:20px;
            color:#666666;
            width:280px;
        }
        h3{
            font-size:13px;
            font-weight:400;
            color:#666;
            margin-top:7px;
            width:175px;
        }
    }
    img{
        background-color:#e7e7e7;
        width:69px;
        height:69px;
        padding:20px;
        box-sizing:border-box;
        border-radius:5px;
    }
`;
const HabitoConcluido = styled.div`
    width:340px;
    height:94px;
    background-color:#f1f1f1;
    display:flex;
    align-items:center;
    box-sizing:border-box;
    padding:15px;
    border-radius:5px;
    margin-bottom:15px;
    footer{
        width:245px;
        h2{
            font-size:20px;
            color:#666666;
            width:280px;
        }
        h3{
            font-size:13px;
            font-weight:400;
            color:#666;
            margin-top:7px;
            width:175px;
        }
        strong{
            color:#8fc549;
        }
    }
    img{
        background-color:#8fc549;
        width:69px;
        height:69px;
        padding:20px;
        box-sizing:border-box;
        border-radius:5px;
    }
`;
const HabitosHoje = styled.div`
    margin-top:98px;
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    div{
        width:340px;
        margin-bottom:20px;
        span{
            font-size:23px;
            color:#126ba5;
        }
        h1{
            color:#bababa;
            font-size:18px;
            margin-top:5px;
        }
    }

`;
const TopBar = styled.div`
    position:fixed;
    top:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#126ba5;
    height:70px;
    width:100vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    span{
        margin:18px;
        font-size:18px;
        color: #fff;
    }
    img{
        width:51px;
        height:51px;
        border-radius:50%;
        margin:18px;
    }
`;
const BottomBar = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:#FFFFFF;
    width:100vw;
    height:70px;
    position:fixed;
    bottom:0;
    font-size:18px;
    span{
        padding:28px;
        color:#52b6ff;
    }
    div{
        background-color:#52b6ff;
        width:91px;
        height:91px;
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-bottom:45px;
        color: #fff;
    }
`;