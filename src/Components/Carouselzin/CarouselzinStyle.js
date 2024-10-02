import styled from "styled-components";


export const CarouselzinContainer = styled.div`
    margin-top: 100px;
    width: 100%;
    padding: 0 80px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    @media (max-width: 1000px){
        padding: 0 20px;
    }
`;

export const Carousel = styled.div`
    width: 800px;
    display: flex;
    gap: 40px;
    position: relative;

    @media (max-width: 1000px){
        width: 100%;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const ItemContent = styled.div`
    width: 250px;
    height: 200px;
    border-radius: 12px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s, opacity 0.2s;
    opacity: 0.8; 
    overflow: hidden;
    filter: drop-shadow(0 0 10px rgba(255, 195, 0, 0.5));
    
    &:hover {
        transform: scale(0.97);
        opacity: 1; /* Aumenta a opacidade no hover */
    }

    &.left {
        transform: perspective(1000px) rotateY(40deg);
    }

    &.right {
        transform: perspective(1000px) rotateY(-40deg);
    }

    &.front {
        transform: scale(0.9);
    }

    img {
        width: 100%;
        height: 100%;
    }

`;


export const Arrow = styled.div`
    position: absolute;
    top: 45%;
    overflow: hidden;
    width: 60px;
    height: 60px;
    z-index: 9;
    cursor: pointer;
    transition: .3s;
    
    img{
        width: 90%;
        transition: .3s;
    }

    &.left{
        left: -100px;
    }

    &.right{
        right: -100px;
        transform: scaleX(-100%);
    }


    @media (max-width: 1300px){
        &.left{
            left: -20px;
        }

        &.right{
            right: -20px;
            transform: scaleX(-100%);
        }
    }
`;

