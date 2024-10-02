import React from "react"
import * as S from "./ExplicacaoStyle"


export default function Explicacao() {


    return (
        <>
            <S.ExplicacaoContainer>
                <h1>MENTORIAS OFERECIDAS PELO DANIEL</h1>

                <S.BoxOfEffect>
                    <div className="half">
                        <p className="boldaIsso">
                            MENTORIA: "MASTER CLASS EXECUTIVO DE MINÉRIOS"
                        </p>
                        <span>
                            Programa intensivo que oferece consultoria ao vivo
                            e excluisiva para os clientes, focando no mercado de
                            minérios e pedras preciosas.
                        </span>
                        <ul>
                            <li>DURAÇÃO DE 2 MESES</li>
                            <li>6 ENCONTROS ONLINE</li>
                            <li>GANHE DE 1 A 5% DE MEUS LUCROS</li>
                            <li>CONTEÚDO ABRANGENTE:
                                <ul className="internal">
                                    <li>Conhecimento do mercado</li>
                                    <li>Estratégias lucrativas</li>
                                    <li>Melhores ativos</li>
                                    <li>Criação de vendas</li> 
                                    <li>Aplicação na prática</li>
                                    <li className="uiui">Ganho de 1% dos Lucros</li>

                                </ul>
                            </li>

                            <li>
                                BENEFÍCIOS ADICIONAIS (BÔNUS) :
                                <ul className="internal">
                                    <li>Participação do grupo VIP do Daniel Mors, com dicas de análise do mercado</li>
                                </ul>
                            </li>
                        </ul>
                        <h5>POR APENAS R$10.000,00</h5>
                    </div>

                    <div className="half">
                        <img alt="imagem" src="diamante1.jpg" />
                    </div>
                </S.BoxOfEffect>

                <S.BoxOfEffect>
                    <div className="half">
                        <p className="boldaIsso">
                            MENTORIA: "Seja um Empresário Milionário"
                        </p>
                        <span>
                            Programa exclusivo de 4 meses que ajuda empreendedores a criar potencializar
                            negócios com foco em atingir grandes resultados financeiros, com a orientação
                            direta de Daniel Mors.
                        </span>
                        <ul>
                            <li>DURAÇÃO DE 4 MESES</li>
                            <li>
                                12 ENCONTROS AO LONGO DE 4 MESES,
                                SENDO OS DOIS ÚLTIMOS NO PRESENCIAIS.
                            </li>
                            <li>GANHE DE 1 A 5% DE MEUS LUCROS</li>
                            <li>CONTEÚDO ABRANGENTE:
                                <ul className="internal">
                                    <li>Análise do mercado</li>
                                    <li>Criação de produto atraente</li>
                                    <li>Montagem de estratégia,</li>
                                    <li>Uso de plataformas digitaiso</li>
                                    <li>Posicionamento da marca</li>
                                    <li>Vendas e pré lançamento</li>
                                    <li className="uiui">Ganho de 5% dos Lucros</li>

                                </ul>
                            </li>

                            <li>
                                BENEFÍCIOS ADICIONAIS (BÔNUS) :
                                <ul className="internal">
                                    <li>Participação do grupo VIP do Daniel Mors, com dicas de análise do mercado</li>
                                </ul>
                            </li>
                        </ul>

                        <h5>POR APENAS R$35.000,00</h5>

                    </div>

                    <div className="half">
                        <img alt="imagem" src="diamante1.jpg" />
                    </div>
                </S.BoxOfEffect>
            </S.ExplicacaoContainer>
        </>
    )
}