import React from "react";
import * as S from ".//PricePromoStyle";

export default function PricePromo() {

    return (
        <>
            <S.PriceDownHeaderContainer>
                <S.PriceModel>
                    <h6>MASTER CLASS EXECUTIVO DE MINÉRIOS</h6>
                    {/* <span>de R$599,00 Por Apenas</span> */}
                    <h2>12x de</h2>
                    <h2>R$ 999,99</h2>
                    <span>ou R$ 10.000,00 à vista</span>
                </S.PriceModel>
                <S.PriceModel className="mt-2">
                    <h6>Seja um Empresário Milionário</h6>
                    <span>de R$599,00 Por Apenas</span>
                    <h2>12x de</h2>
                    <h2>R$ 3099,00</h2>
                    <span>ou R$ 35.000,00 à vista</span>
                </S.PriceModel>
                <S.ButtonQuero>
                    <button>SIM, QUERO COMEÇAR AGORA</button>
                </S.ButtonQuero>
            </S.PriceDownHeaderContainer>
        </>
    )
}