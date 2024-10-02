import React, { useState } from "react";
import * as S from "./DuvidasStyle";

export default function Duvidas() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Qual o formato do curso?",
            answer: "Você terá acesso a diversas vídeo aulas (passo a passo) + Bônus Especiais."
        },
        {
            question: "Quais as formas de pagamento?",
            answer: "Você pode pagar via cartão de crédito, boleto, entre outros."
        },
        // Adicione mais perguntas e respostas conforme necessário
    ];

    return (

        <S.HiHiHiHeHeHe>
            <S.FaqContainer>
                <S.FaqTitle>DÚVIDAS FREQUENTES</S.FaqTitle>
                {faqs.map((faq, index) => (
                    <S.FaqItem key={index}>
                        <S.FaqQuestion onClick={() => handleToggle(index)}>
                            {faq.question}
                        </S.FaqQuestion>
                        {openIndex === index && <S.FaqAnswer>{faq.answer}</S.FaqAnswer>}
                    </S.FaqItem>
                ))}
            </S.FaqContainer>
        </S.HiHiHiHeHeHe>

    );
}
