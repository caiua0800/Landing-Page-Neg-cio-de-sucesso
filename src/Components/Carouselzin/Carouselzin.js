import React, { useState } from "react";
import * as S from "./CarouselzinStyle";

const images = [
    "joia1.png",
    "joia2.png",
    "joia3.png",
    "joia4.jpg",
    "joia5.jpeg",
]; // Adicione suas URLs de imagem aqui

const Carouselzin = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 < images.length ? prevIndex + 1 : 0
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 >= 0 ? prevIndex - 1 : images.length - 1
        );
    };

    return (
        <S.CarouselzinContainer>
            <S.Carousel>
                <S.Arrow className="left" onClick={prevSlide}>
                    <img alt="seta" src="arrow-left.png" />
                </S.Arrow>
                
                {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                    <S.ItemContent
                        key={`${currentIndex}-${index}`} // Atualizamos a key para lidar melhor com animações
                        className={index === 0 ? "left" : index === 1 ? "front" : "right"}
                    >
                        <img alt="imagem" src={image} />
                    </S.ItemContent>
                ))}

                <S.Arrow className="right" onClick={nextSlide}>
                    <img alt="seta" src="arrow-left.png" />
                </S.Arrow>
            </S.Carousel>
        </S.CarouselzinContainer>
    );
};

export default Carouselzin;
