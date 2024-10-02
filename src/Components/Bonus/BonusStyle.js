import styled from "styled-components";


export const BonusContainer = styled.div`
    width: 100%;
    padding: 50px 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Bonuszin = styled.div`
    width: 800px;
    box-sizing: border-box;
    padding: 20px;
    filter: drop-shadow(0 0 10px rgba(255, 195, 0, 0.4));
    background: linear-gradient(to right, #a63c06, #ff7b00, rgba(255, 195, 0, 1));
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 12px;
    transition: .4s;

    h1{
        margin: 0;
        font-weight: 800;
        font-size: 38px;
        text-shadow: 0 0 10px black;
        color: white;
    }

    &:hover{
        transform: perspective(1000px) rotateY(5deg);
        filter: drop-shadow(0 0 10px rgba(255, 195, 0, 0.8));
    }

    &.mt-5{
        margin-top: 150px;
    }

    @media (max-width: 1000px){
        width: 100%;

        h1{
            font-size: 24px;
        }

        &.mt-5{
            margin-top: 50px;
        }
    }
`;

export const BonusInfo = styled.div`
    padding: 80px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 600px;
        filter: drop-shadow(0 0 10px rgba(255, 195, 0, 0.5));
    }

    h2, p, h6, h5{
        margin: 0;
        text-align: center;
    }

    h2{
        font-size: 28px;
        width: 100%;
        color: white;
        text-align: center;
        font-weight: 800;
    }

    p{
        color: white;
        font-size: 22px;
    }

    h6{
        color: red;
        font-size: 22px;
        text-decoration: line-through;
    }


    .mt-5{
        margin-top: 150px;
    }

    .mt-1{
        margin-top: 30px;
    }

    h5{
        color: rgba(255, 255, 255, 0.4);
        font-size: 28px;
        margin-top: -50px;
    }


    @media (max-width: 1000px){
      h2{
        width: 80%;
        font-size: 22px;
        text-align: center;
      }

      p{
        font-size: 22px;
        width: 60%;
        text-align: center;
      }

      img{
        width: 300px;
      }
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
        border-radius: 8px;
        filter: drop-shadow(0 0 10px rgba(255, 195, 0, 0.8));
        border: 0px solid rgba(0,0,0,0);
        background: linear-gradient(to right, #c9a227, #ffd60a);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: .3s;

        &:hover{
            transform: scale(0.97);
        }
    }
`;
// export const nome = styled.div``;

// export const nome = styled.div``;

// export const nome = styled.div``;
