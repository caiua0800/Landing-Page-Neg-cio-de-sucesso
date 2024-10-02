import React from "react";
import * as S from "./VaiAprenderStyle";


export default function VaiAprender() {

    return (
        <>
            <S.VaiAprenderContainer>

                <h1>VEJA O QUE VOCÊ VAI APRENDER!</h1>

                <S.OqueVai>
                    <S.Box>
                        Técnicas de Aplicação.
                    </S.Box>
                    <S.Box>
                        Conhecimento sobre minérios.
                    </S.Box>
                    <S.Box>
                        Conhecimento sobre mercado e ações.
                    </S.Box>
                    <S.Box>
                        Autonomia.
                    </S.Box>
                    <S.Box>
                        Crescimento pessoal.
                    </S.Box>
                    <S.Box>
                        Técnicas de venda.
                    </S.Box>
                    <S.Box>
                        Avaliar Pedras Preciosas.
                    </S.Box>
                    <S.Box>
                        Levar sua empresa a outro nível.
                    </S.Box>
                    <S.Box>
                        Criar um negócio de sucesso do 0.
                    </S.Box>
                    <S.Box>
                        Multiplicar seu capital.
                    </S.Box>

                </S.OqueVai>

                <h1 className="mt-5">E MUITO MAIS...</h1>

                <S.ButtonQuero><button>SIM, QUERO COMEÇAR AGORA!</button></S.ButtonQuero>

                <h1 className="mt-5 menor">ESTÁ PRONTO PRA FATURAR MILHÕES?</h1>

            </S.VaiAprenderContainer>
        </>
    )
}