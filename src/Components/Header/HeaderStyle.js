import styled from "styled-components";


export const HeaderContainer = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    align-items: end;
    justify-content: start;
    padding: 60px 90px;
    box-sizing: border-box;
    // background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));

    background-image: url("fundo1.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    .fundin{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: linear-gradient(to bottom, transparent, transparent, transparent, transparent, transparent, transparent, rgba(0,0,0,0.6), rgba(0,0,0,1))
    }

    h2{
        margin: 0;
        width: 600px;
        font-size: 2em;
        font-weight: 800;
        color: white;
        text-align: start;
        z-index: 9;
        text-shadow: 0 0 10px black;
    }

    span{
        color: #ffc300;
    }

    @media(max-width: 1000px){
        padding: 30px 50px;

        background-position: right; 
        h2{
            text-align: center;
            font-size: 1.6em;
        }
    }
`;

