import React from "react";
import * as S from "./PriceDownHeaderStyle";

export default function PriceDownHeader() {

    return (
        <>
            <S.PriceDownHeaderContainer>
                <S.PriceModel>
                    <span>de R$599,00 Por Apenas</span>
                    <h2>12x de</h2>
                    <h2>R$ 19,86</h2>
                    <span>ou R$ 199,00 à vista</span>
                </S.PriceModel>
                <S.ButtonQuero>
                    <button>SIM, QUERO COMEÇAR AGORA</button>
                </S.ButtonQuero>
            </S.PriceDownHeaderContainer>
        </>
    )
}