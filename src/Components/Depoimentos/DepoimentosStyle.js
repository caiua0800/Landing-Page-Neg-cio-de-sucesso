import styled from "styled-components";


export const DepoimentoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    box-sizing: border-box;
    padding: 0 80px;
    margin-top: 100px;

    h1{
        font-size: 38px;
        color: #ffc300;
        margin: 0;
        text-align: center;
    }

    p{
        margin: 0;
        margin-top: 60px;
        color: white;
        font-size: 28px;
    }

    @media (max-width: 1000px){
        margin-top: 50px;
        padding: 0 20px;
    }
`;


export const DepoimentosImageContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 0 80px;
    margin-top: 40px;

    .Carousel{
        width: 100%;
        gap: 80px;
        padding: 60px 0;
        overflow-x: auto;
        display: flex;
        justify-content: center;

        .item{
            width: 300px;
            height: 250px;
            padding: 10px;
            box-sizing: border-box;
            border-radius: 12px;
            position: relative;
            background: linear-gradient(-40deg, #c36f09, #c36f09, #ffc300);
            display: flex;
            flex-direction: column;
            filter: drop-shadow(0 0 12px rgba(255, 195, 0, 0.5));
            align-items: center;
            justify-content: center;
            transition: .5s;

            &:hover{
                transform: scale(0.97);
            }

            .profileImg{
                z-index: 999;
                position: absolute;
                top: -50px;
                left: -50px;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 4px solid white;
                box-sizing: border-box;

                img{
                    width: 100%;
                    border-radius: 50%;
                }
            }

            span{
                color: white;
                text-shadow: 0 0 6px black;
                font-size: 18px;
            }

        }
    }

    @media (max-width: 1000px){
        padding: 0 20px;
    }
`;