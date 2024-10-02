import styled from "styled-components";


export const RecupereContainer = styled.div`
    width: 100%;
    padding: 0 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;

    @media (max-width: 1000px){
        padding: 0 20px;
    }
`;

export const Box = styled.div`
    margin-top: 40px;
    width: 900px;
    height: 600px;
    border: 4px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    p{
        margin: 0;
        font-size: 28px;
        font-weight: 800;
    }

    .verde{
        max-width: 70%;
        color: rgba(100, 255, 0, 0.8);
        filter: drop-shadow(0 0 10px rgba(100, 255, 0, 0.8));
    }

    @media (max-width: 1000px){
        width: 90%;
        height: max-content;
        padding: 10px;

        p{
            font-size: 16px;
        }
    }

`;


export const OutrosTrem = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    display: flex;
    margin-top: 80px;

    @media(max-width: 1000px){
        flex-direction: column;
        margin-top: 30px;
    }
`;

export const Trem = styled.div`
    
    img{
        width: 200px;
        opacity: 0.5;
    }

    h2, h3{
        margin: 0;
        font-size: 26px;
        color: rgba(255, 255, 255, 0.6);
    }

    h2{
        font-weight: 100;
    }

    h3{
        font-weight: 800;
        margin-bottom: 40px;
    }

    .ms-2{
        margin-left: 20px;
    }

    .divisor{
        display: flex;
        flex-direction: column;
        align-items: start;
    }


    @media (max-width: 1000px){
        img{
            width: 100px;
            opacity: 0.5;
        }

        h2, h3{
            font-size: 14px;
            margin-bottom: 10px;
        }

        .divisor{
            // flex-direction: row;
            align-items: center;
        }

        .ms-2{margin: 0;}
    }
`;