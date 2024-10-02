import React from "react";
import { useInView } from 'react-intersection-observer';
import * as S from "./PraQuemStyle";

export default function PraQuem() {
    // Configurações para o Intersection Observer
    const { ref, inView } = useInView({
        threshold: 0.1, // 10% do elemento precisa estar visível
        triggerOnce: true, // Apenas dispara uma vez
    });

    return (
        <>
            <S.PraQuemContainer>
                <h2>PRA <span>QUEM </span> É A CONSULTORIA?</h2>
                <S.BoxOfBoxes ref={ref}>
                    <S.Box className={inView ? 'visible' : ''}>
                        <h3>Pra Você…</h3>
                        <h4>
                            Que quer saber como de engajar no
                             mundo dos minérios e mudar sua vida financeira.
                        </h4>
                    </S.Box>

                    <S.Box className={inView ? 'visible' : ''}>
                        <h3>Pra Você…</h3>
                        <h4>
                            Que não sabe mais como ir pra frente com sua empresa.
                        </h4>
                    </S.Box>

                    <S.Box className={inView ? 'visible' : ''}>
                        <h3>Pra Você…</h3>
                        <h4>
                            Que quer ter um conhecimento avançado do mercado
                            que mudará a sua vida.
                        </h4>
                    </S.Box>
                </S.BoxOfBoxes>
            </S.PraQuemContainer>
        </>
    )
}
