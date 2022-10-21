import styled from "styled-components";
import { Link } from "react-router-dom";


export default function HistoricoPage() {
    return(
        <>
            <TopBar>
                <span>TrackIt</span>
                <img src='https://img.freepik.com/fotos-premium/cachorrinho-fofo-de-spitz-pomeranian-deitado-no-fundo-amarelo-brilhante_253512-22.jpg?w=2000' alt='' />
            </TopBar>

            <Historico>
                <div>
                    <h1>Histórico</h1>
                    <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
                </div>
            </Historico>

            <BottomBar>
                <Link to={'/habitos'}><span>Hábitos</span></Link>
                <Link to={'/hoje'}><div>Hoje</div></Link>
                <Link to={'/historico'}><span>Histórico</span></Link>
            </BottomBar>
        </>
    )
};

const Historico = styled.div`
    display:flex;
    justify-content:center;
    margin-top:80px;
    div{
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    padding:20px;
    }
    h1{
            font-size:23px;
            color:#126ba5;
        }
    h2{
            color:#bababa;
            font-size:18px;
            margin-top:17px;

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
    text-decoration:none;
    span{
        padding:28px;
        color:#52b6ff;
        cursor:pointer;
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
        cursor:pointer;
    }
`;
