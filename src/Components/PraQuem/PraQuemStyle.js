import styled from "styled-components";

export const PraQuemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    font-size: 32px;

    h2{
        margin: 0;
        color: #ffc300;
    }

    span{
        color: white;
    }
`;

export const BoxOfBoxes = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 40px;
    padding-bottom: 40px;
    flex-wrap: wrap;
`;

export const Box = styled.div`
    width: 300px;
    height: 250px;
    filter: drop-shadow(0 0 12px rgba(255, 195, 0, 0.5));
    background: black;
    display: flex;
    align-items: center;
    border-radius: 8px;
    justify-content: center;
    gap: 40px;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    transition: transform 0.6s ease-out, opacity 0.6s ease-out;
    opacity: 0;
    transform: translateX(-50px);

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    h3, h4{
        margin: 0;
        color: white;
        text-align: center;
    }

    h3{
        font-size: 24px;
    }

    h4{
        font-size: 16px;
    }
`;
