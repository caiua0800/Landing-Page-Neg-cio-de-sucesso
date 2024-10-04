import React from "react";
import * as S from ".//PricePromoStyle";

export default function PricePromo() {

    return (
        <>
            <S.PriceDownHeaderContainer>
                <S.PriceModel>
                    <h6>COTA DE R$100.000,00</h6>
                    <h2>10x de</h2>
                    <h2>R$ 10.500,00</h2>
                    <span>ou R$ 100.000,00 à vista</span>
                </S.PriceModel>
                <S.PriceModel className="mt-2">
                    <h6>cota de R$50.000,00</h6>
                    {/* <span>de R$599,00 Por Apenas</span> */}
                    <h2>10x de</h2>
                    <h2>R$ 5.350,00</h2>
                    <span>ou R$ 50.000,00 à vista</span>
                </S.PriceModel>
                <S.ButtonQuero>
                    <button>SIM, QUERO ADQUIRIR AGORA</button>
                </S.ButtonQuero>
            </S.PriceDownHeaderContainer>
        </>
    )
}