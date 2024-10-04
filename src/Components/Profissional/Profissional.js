import React from "react";
import * as S from "./ProfissionalStyle";
import { useInView } from 'react-intersection-observer';

export default function Profissional() {

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <S.ProfissionalContainer ref={ref} className={inView ? "visible" : ""}>
            <h1>QUEM É</h1>
            <h2>DANIEL MORS?</h2>

            <div className="profissa">
                <img alt="profissional" src="dani.png" />

                <p className={inView ? 'visible' : ''}>
                    Multi-empresário de sucesso, que já aos seus 25 anos de idade,
                     já ajudou milhares de pessoas a lucrarem com minérios e pedras preciosas.
                    Suas empresas, em três anos, já lucraram increveis 50 milhões no mercado de 
                    minérios e pedras preciosas
            
                </p>
            </div>

            <S.ButtonQuero className={inView ? 'visible' : ''}>
                <button>QUERO SER UM COTISTA!</button>
            </S.ButtonQuero>
        </S.ProfissionalContainer>
    );
}
