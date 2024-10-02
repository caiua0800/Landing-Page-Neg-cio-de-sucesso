import styled from "styled-components";


export const TransacaSeguraContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 40px;
    box-sizing: border-box;
    padding: 0 150px;
    align-items: center;
    margin-top: 100px;
    flex-wrap: wrap;

    img{
        width: 300px;
    }

    .dividindin{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 900px;
    }

    h3{
        margin: 0;
        font-weight: 800;
        font-size: 32px;
        text-align: center;
        color: #ffc300;
    }

    p{
        margin: 0;
        font-weight: 500;
        font-size: 24px;
        color: white;
        text-align: center;

        span{
            font-weight: 800;
        }
    }

    @media(max-width: 1000px){
        padding: 0 20px;
    }
`;

// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;

