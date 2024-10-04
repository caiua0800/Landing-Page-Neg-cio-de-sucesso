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
                <h2>PRA QUEM SÃO AS COTAS</h2>
                <S.BoxOfBoxes ref={ref}>
                    <S.Box className={inView ? 'visible' : ''}>
                        <h3>Pra Você…</h3>
                        <h4>
                            Que quer sair do ninho dos bancos,
                            e colocar seu dinheiro em algo que lucre mais
                        </h4>
                    </S.Box>

                    <S.Box className={inView ? 'visible' : ''}>
                        <h3>Pra Você…</h3>
                        <h4>
                            Que quer ter uma parte dos lucros de empresas de sucesso
                        </h4>
                    </S.Box>

                    <S.Box className={inView ? 'visible' : ''}>
                        <h3>Pra Você…</h3>
                        <h4>
                            Que quer ter uma cota de mineração e triplicar seu patrimônio
                        </h4>
                    </S.Box>
                </S.BoxOfBoxes>
            </S.PraQuemContainer>
        </>
    )
}
