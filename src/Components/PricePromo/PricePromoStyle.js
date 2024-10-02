import styled from "styled-components";


export const PriceDownHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
`;

export const PriceModel = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        margin: 0;
        color: #ffc300;
        font-size: 62px;
    }

    h6{
        color: white;
        font-size: 43px;
        margin: 0;
        text-decoration: underline;
    }

    &.mt-2{
        margin-top: 40px;
    }

    span{
        color: white;
        font-size: 22px;
    }
`;

export const ButtonQuero = styled.div`
    margin-top: 80px;
    display: flex;
    width: 100%;
    justify-content: center;
    padding-bottom: 40px;
    box-sizing: border-box;

    button{
        width: 400px;
        height: 50px;
        border-radius: 30px;
        border: 0px solid black;
        background: linear-gradient(to right, #c9a227, #ffd60a, #ffd60a);
        filter: drop-shadow(0 0 10px rgba(255, 195, 0, 0.8));
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: .3s;

        &:hover{
            transform: scale(0.97);
        }
    }
`;