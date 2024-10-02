import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-y: scroll;
    // padding: 30px;
    box-sizing: border-box;
    background-color: black;
    position: relative;
  overflow-x: hidden;

`;

export const WhatsappIcon = styled.div`
    width: 80px;
    height: 80px;
    box-sizing: border-box;
    border-radius: 50%;
    overflow: hidden;
    position: fixed;
    bottom: 40px;
    right: 40px;

    img{
        width: 80%;
        cursor: pointer;
        transition: .3s;

        &:hover{
            transform: scale(0.95);
        }
    }
`;