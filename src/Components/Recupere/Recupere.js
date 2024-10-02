import React from "react";
import * as S from "./RecupereStyle";


export default function Recupere() {

    return (
        <>
            <S.RecupereContainer>
                <S.Box>
                    <p className="verde">SEGURANÇA DO SEU CAPITAL</p>
               
                    <S.OutrosTrem>
                        <S.Trem>
                            <img alt="cachback" src="cashback.png"/>
                        </S.Trem>

                        <S.Trem>
                            <div className="divisor">
                                <h2>VALOR INVESTIDO NO CURSO</h2>
                                <h3>R$199,00</h3>
                            </div>
                            <div className="divisor ms-2">
                                <h2>VALOR MÉDIO DE 1 PROCEDIMENTO</h2>
                                <h3>R$200,00 A R$1.500,00</h3>
                            </div>
                        </S.Trem>
                    </S.OutrosTrem>
                </S.Box>
            </S.RecupereContainer>
        </>
    )
}