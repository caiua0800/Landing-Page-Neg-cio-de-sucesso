import styled from "styled-components";

export const HiHiHiHeHeHe = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 80px 100px 80px;
    box-sizing: border-box;
`;

export const FaqContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #111;
    border: 1px solid #444;
    color: white;
    border-radius: 5px;
    overflow: hidden;
`;

export const FaqTitle = styled.div`
    background: linear-gradient(to right, #b69121, #ffc300);
    font-size: 38px;
    text-align: center;
    padding: 10px;
    color: black;

`;

export const FaqItem = styled.div`
    border-top: 1px solid #444;
`;

export const FaqQuestion = styled.div`
    background-color: #222;
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28px;
    &:hover {
        background-color: #333;
    }
`;

export const FaqAnswer = styled.div`
    background-color: #111;
    padding: 15px;
    display: block;
    font-size: 26px;

`;
