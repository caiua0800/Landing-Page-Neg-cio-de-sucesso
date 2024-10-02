import React from "react";
import * as S from "./DepoimentosStyle"

const imageUrl = "dep1.png"

export default function Depoimentos() {

    return (
        <>
            <S.DepoimentoContainer>
                <h1>DEPOIMENTOS</h1>

                <p>Clientes que chegaram ao sucesso</p>

                <S.DepoimentosImageContainer>
                    <div className="Carousel">

                        <div className="item">
                            <div className="profileImg">
                                <img alt="foto cliente" src="daniel.jpeg" />
                            </div>

                            <span>
                                Depoimento cliente.
                            </span>
                        </div>

                        <div className="item">
                            <div className="profileImg">
                                <img alt="foto cliente" src="daniel.jpeg" />
                            </div>
                            <span>
                                Depoimento cliente.
                            </span>
                        </div>

                        <div className="item">
                            <div className="profileImg">
                                <img alt="foto cliente" src="daniel.jpeg" />
                            </div>
                            <span>
                                Depoimento cliente.
                            </span>
                        </div>
                    </div>
                </S.DepoimentosImageContainer>
            </S.DepoimentoContainer>
        </>
    )
}