import styled from "styled-components";

export const ProfissionalContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 0 80px;
    opacity: 0;
    transform: translateX(-50px); /* Inicializa fora da tela à esquerda */
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    h1 {
        color: white;
        margin: 0;
        font-size: 58px;
        margin-top: 50px;
    }

    h2 {
        color: #ffc300;
        margin: 0;
        font-size: 58px;
    }

    .profissa {
        max-height: max-content;
        position: relative;

        img {
            // margin-top: -200px;
            width: 600px;
        }

        p {
            margin: 0;
            font-size: 28px;
            text-align: center;
            width: 800px;
            position: absolute;
            top: 80%;
            left: 50%;
            transform: translate(-50%, 80%); /* Ajuste para centralização */
            color: white;
            transition: transform 0.6s ease-out, opacity 0.6s ease-out;
            opacity: 0;
            text-shadow: 0 0 6px black, 0 0 6px black;
        }

        p.visible {
            opacity: 1;
            transform: translate(-50%, 100%);

        }
    }


    @media (max-width: 1000px){
        h1{
            font-size: 32px;
        }

        h2{
            font-size: 28px;
        }

        .profissa{
            p{
                width: 300px;
                font-size: 16px;
                text-shadow: 0 0 5px black,
                -0 -0 5px black;
            }

            img{
                width: 350px;
            }
        }
    }
`;

export const ButtonQuero = styled.div`
    margin-top: 150px;
    display: flex;
    width: 100%;
    justify-content: center;
    padding-bottom: 40px;
    box-sizing: border-box;
    opacity: 0;
    transform: translateX(-50px);
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    button {
        width: 400px;
        height: 50px;
        border-radius: 8px;
        filter: drop-shadow(0 0 10px rgba(255, 195, 0, 0.8));
        border: 0px solid rgba(0,0,0,0);
        background: linear-gradient(to right, #c9a227, #ffd60a);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            transform: scale(0.97);
        }
    }
`;
