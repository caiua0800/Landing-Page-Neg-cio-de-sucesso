import styled from "styled-components";


export const VaiAprenderContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 0 80px;

    h1{
        font-size: 32px;
        color: white;
        margin: 0;
        text-align: center;
        width: 100%;
    }

    .mt-5{
        margin-top: 40px;
    }

    .menor{
        max-width: 700px;
    }

    @media (max-width: 1000px){
        padding: 0 20px;

        h1{
            font-size: 24px;
        }
    }
`;

export const OqueVai = styled.div`
    width: 100%;
    box-sizing: border-box;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
`;

export const Box = styled.div`
    padding: 20px;
    box-sizing: border-box;
    width: 300px;
    display: flex;
    gap: 5px;
    border-left: 4px solid #ffc300;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 22px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.6));
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
        filter: drop-shadow(0 0 10px rgba(255, 195, 0, 0.8));
        border: 0px solid rgba(0,0,0,0);
        background: linear-gradient(to right, #c9a227, #ffd60a);
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: .3s;

        &:hover{
            transform: scale(0.97);
        }
    }
`;