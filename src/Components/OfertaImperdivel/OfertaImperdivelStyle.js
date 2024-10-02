import styled from "styled-components";


export const OfertaContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    h1, h2{
        margin: 0;
        color: white;
    }

    h1{
        font-weight: 800;
        font-size: 58px;
    }

    h2{
        color: black;
        padding: 5px;
        background-color: #ffc300;
    }
`;

export const Counter = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    gap: 20px;
    justify-content: center;

    .divisor{
        width: 250px;
        height: 150px;
        border-radius: 8px;
        border: 4px solid #ffc300;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .time{
            font-size: 68px;
            font-weight: 800;
            color: white;
        }

        .label{
            color: white;
            margin: 0;
            font-weight: 600;
            font-size: 22px;
        }
    }


`;

// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;
