import styled from "styled-components";


export default function HabitosPagInicial() {
    return (
        <>
            <TopBar>
                <span>TrackIt</span>
                <img src='https://img.freepik.com/fotos-premium/cachorrinho-fofo-de-spitz-pomeranian-deitado-no-fundo-amarelo-brilhante_253512-22.jpg?w=2000' alt='' />
            </TopBar>

            <HomeHabitos>
                <AdicionarHabitos>
                    <span>Meus hábitos</span>
                    <button>+</button>
                </AdicionarHabitos>

                <CriarHabito>
                    <input placeholder="nome do hábito" />
                    <ul>
                        <li>D</li>
                        <li>S</li>
                        <li>T</li>
                        <li>Q</li>
                        <li>Q</li>
                        <li>S</li>
                        <li>S</li>
                    </ul>
                    <div>
                        <BotaoCancelar>Cancelar</BotaoCancelar>
                        <BotaoSalvar>Salvar</BotaoSalvar>
                    </div>
                </CriarHabito>

                <ListaHabitos>
                    <Habito>
                        <span>Titulo tarefa</span>
                        <img src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="lixeira" />
                        <ul>
                            <li>D</li>
                            <li>S</li>
                            <li>T</li>
                            <li>Q</li>
                            <li>Q</li>
                            <li>S</li>
                            <li>S</li>
                        </ul>
                    </Habito>

                </ListaHabitos>



                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </HomeHabitos>

            <BottomBar>
                <span>Hábitos</span>
                <div>Hoje</div>
                <span>Histórico</span>
            </BottomBar>
        </>
    )
};

const HomeHabitos = styled.div`
    background-color:#e5e5e5;
    width:100vw;
    height:100vh;
    margin-top:70px;
    display:flex;
    flex-direction:column;
    align-items:center;
    p{
        width:340px;
        margin-top:28px;
        font-size: 18px;
        color:#666666;
    }
`;
const AdicionarHabitos = styled.div`
    width:340px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:28px 0 20px 0;
    span{
        font-weight:400;
        font-size:23px;
        color:#126BA5;
    }
    button{
        width:40px;
        height:35px;
        background-color:#52b6ff;
        color: #fff;
        border-radius:4px;
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
const CriarHabito = styled.div`
    width:340px;
    height:180px;
    border-radius:5px;
    background-color:#FFF;
    box-sizing:border-box;
    padding:19px;
    input{
        border: 1px solid #d5d5d5;
        border-radius:5px;
        width:303px;
        height:45px;
        padding:10px;
        font-size:20px;
        box-sizing:border-box;
            ::placeholder{
            color:#d5d5d5;
        }
    }
    ul{
        display:flex;
        margin-top:10px;
        li{
            width:30px;
            height:30px;
            border: 1px solid #d5d5d5;
            border-radius:5px;
            color:#d5d5d5;
            font-size:20px;
            display:flex;
            align-items:center;
            justify-content:center;
            margin-right:4px;
        }
    }
    div{
        display:flex;
        justify-content:flex-end;
        margin-top:29px;
    }
`;
const BotaoCancelar = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width:84px;
    height:35px;
    color:#52b6ff;
    background-color:#FFF;
    border:none;
`;
const BotaoSalvar = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width:84px;
    height:35px;
    background-color:#52b6ff;
    color: #fff;
    border-radius:4px;
`;
const ListaHabitos = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const Habito = styled.div`
    width:340px;
    background-color:#FFF;
    margin-bottom:10px;
    display:flex;
    flex-direction:column;
    border-radius:5px;
    margin-top:10px;
    position:relative;
    box-sizing:border-box;
    padding:15px;
    span{
        font-size:20px;
        color:#666666;
        width:280px;
    }
    img{
        width:13px;
        height:15px;
        position:absolute;
        top:11px;
        right:10px;
    }
    ul{
        display:flex;
        margin-top:10px;
        li{
            width:30px;
            height:30px;
            border: 1px solid #d5d5d5;
            border-radius:5px;
            color:#d5d5d5;
            font-size:20px;
            display:flex;
            align-items:center;
            justify-content:center;
            margin-right:4px;
        }
    }
`;