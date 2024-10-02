import React from "react";
import * as S from "./BonusStyle";


export default function Bonus() {

    return (
        <>
            <S.BonusContainer>
                <S.Bonuszin>
                    <h1>ADQUIRA HOJE E AUMENTE SEU PATRIMÔNIO</h1>
                    <h1>ENTRE COM SUA EMPRESA!</h1>
                </S.Bonuszin>

                <S.Bonuszin className="mt-5">
                    <h1>DIFERENCIAIS 01</h1>
                </S.Bonuszin>

                <S.BonusInfo>
                    <h5>PLATAFORMA ONLINE</h5>

                    <img className="mt-1" alt="bonus info" src="platform1.png"/>

                    <h2 className="mt-1">PLATAFORMA ONLINE DE ALTA QUALIDADE</h2>

                    <p className="mt-1">CHAT NA PLATAFORMA, AGENDAMENTO DE ATIVIDADES, MARCAR REUNIÕES, CONSULTAR ATIVOS, INVESTIMENTOS, CARTEIRA VIRTUAL.</p>

                    {/* <h6 className="mt-1">Custa R$997,00</h6> */}
                </S.BonusInfo>

                <S.Bonuszin className="mt-1">
                    <h1>DIFERENCIAIS 02</h1>
                </S.Bonuszin>


                <S.BonusInfo>
                    <h5>Aplicativo Nativo</h5>

                    <img className="mt-1" alt="bonus info" src="exemploApp.jpeg"/>

                    <h2 className="mt-1">APLICATIVO NATIVO IOS E ANDROID</h2>
                    <p className="mt-1">CHAT NA APP, NOTIFICAÇÕES, AGENDAMENTO DE ATIVIDADES, MARCAR REUNIÕES, CONSULTAR ATIVOS, INVESTIMENTOS, CARTEIRA VIRTUAL.</p>

                    {/* <h6 className="mt-1">Custa R$147,00</h6> */}
                </S.BonusInfo>

                <S.ButtonQuero><button>QUERO SER UM EMPRESÁRIO DE SUCESSO</button></S.ButtonQuero>

            </S.BonusContainer>
        </>
    )
}