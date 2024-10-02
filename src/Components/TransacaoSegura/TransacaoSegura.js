import React from "react";
import * as S from "./TransacaoSeguraStyle";

export default function TransacaoSegura() {

    return (
        <>
            <S.TransacaSeguraContainer>
                <img alt="7dias" src="7dias.png" />

                <div className="dividindin">
                    <h3>FIQUE TRANQUILO, SUA COMPRA É SEGURA!</h3>
                    <p>
                        O código do consumidor (Art.39) garante 7
                        dias para solicitar reembolsoem casa de
                        insatisfação com o produto. <span>Nós confiamos
                            tanto em nossos estudos e pesquisas que lhe
                            garantimos 15 dias de garantia incondicional!</span>
                    </p>
                </div>
            </S.TransacaSeguraContainer>
        </>
    )
}