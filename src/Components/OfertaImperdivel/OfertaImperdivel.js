import React, { useEffect, useState } from "react";
import * as S from "./OfertaImperdivelStyle";

export default function OfertaImperdivel() {
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutos em segundos

    useEffect(() => {
        // Verifica se já existem dados no localStorage para reiniciar o timer
        const storedTime = localStorage.getItem("timeLeft");
        
        if (storedTime) {
            setTimeLeft(JSON.parse(storedTime));
        } else {
            localStorage.setItem("timeLeft", JSON.stringify(timeLeft));
        }

        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    localStorage.setItem("timeLeft", JSON.stringify(600)); // Reinicia o tempo
                    return 600; // Reinicia para 10 minutos
                } else {
                    localStorage.setItem("timeLeft", JSON.stringify(prevTime - 1));
                    return prevTime - 1;
                }
            });
        }, 1000); // Atualiza o timer a cada segundo

        return () => {
            clearInterval(intervalId); // Limpa intervalo no unmount
        };
    }, []);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <S.OfertaContainer>
            <h1>OFERTA IMPERDÍVEL</h1>
            <h2>PROMOÇÃO ENCERRA EM POUCOS MINUTOS</h2>

            <S.Counter>
                <div className="divisor">
                    <span className="time">{String(minutes).padStart(2, '0')}</span>
                    <p className="label">Minutos</p>
                </div>
                <div className="divisor">
                    <span className="time">{String(seconds).padStart(2, '0')}</span>
                    <p className="label">Segundos</p>
                </div>
            </S.Counter>
        </S.OfertaContainer>
    );
}
