import styled from "styled-components";


export const ExplicacaoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    gap: 100px;
    padding: 0 80px;
    box-sizing: border-box;

    h1{
        margin: 0;
        font-size: 42px;
        color: white;
    }

    @media(max-width: 1000px){
        padding: 0 20px;
    }
`;

export const BoxOfEffect = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    .half{
        width: 60%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;

        h5{
            margin: 0;
            color: green;
            font-size: 48px;
            width: 100%;
            text-align start;
            display: flex;
            justify-content: start;
        }


        .boldaIsso{
            font-weight: 800;
            font-size: 32px;
            color: gold;
            margin: 0;
            text-align: start;
            width: 100%;
        }

        img{
            margin-left: -50px;
            width: 60%;
            transition: .8s;
            opacity: 0.8;

            &:hover{
                transform: scale(1.04);
                opacity: 1;
            }
        }

        span{
            font-size: 22px;
            text-align: start;
            color: white;
        }

        ul{
            color: white;
            text-align: start;
            display: flex;
            flex-direction: column;
            align-items: start;
            width: 100%;
            gap: 10px;

            li{
                font-size: 26px;
                // max-width: 300px;

                .internal{
                    display: flex;
                    gap: 5px;
                    width:300px;
                    overflow: hidden;
                    
                    li{
                        list-style-type: square; /* Estilo do marcador */
                        list-style-position: outside; /* Posição do marcador */
                        list-style-image: url('list-icon-sized.png');

                        &.uiui{
                            color: rgba(100, 255, 40, 1);
                        }
                    }
                }
            }
    
        }


    }

    @media (max-width: 1000px){
        flex-direction: column;
        align-items: center;
        padding: 0 20px;

        .half{
            flex-direction: column;
            width: 100%;


            p{
                margin: 0;
            }

            img{
                margin: 0;
            }
        }
    }
`;

export const Vantagens = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p{
        margin: 0;
        text-align: center;
        font-size: 48px;
        color: rgba(140,255, 10, 1);
        filter: drop-shadow(0 0 10px rgba(140,255, 10, 0.4));
    }

    .aiaiPapai{
        display: flex;
        gap: 50px;
        flex-wrap: wrap;
        justify-content: start;
    }

    .liManda{
        color: white;
        font-size: 28px;
        text-align: start;
    }

    .liNaoManda{
        color: rgba(255, 255, 255, 0.8);
        font-size: 22px;

    }

    .viadinll{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export const GarantiaTitle = styled.h2`
    margin: 0;
    color: white;
    font-size: 48px;
    color: gold;
    margin-bottom: -80px;
`;

export const Garantias = styled.ul`
    width: 100%;
    margin: 0;
`;

export const Garantia = styled.li`
    font-size: 38px;
    font-weight: 800;
    color: gold;
    text-align: start;
    margin: 0;

    .sub{
        color: white;
        font-size: 32px;
    }

    .sub2{
        color: rgba(255, 255, 255, 1);
        font-size: 28px;
        margin-left: 50px;
    }
`;