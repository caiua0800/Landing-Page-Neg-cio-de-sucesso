import React from "react";
import * as S from "./ContainerStyle"



export default function Container({ children }) {

    return (
        <>
            <S.Container>

                {children}

                <S.WhatsappIcon><img alt="Whatsapp Icon" src="whatsapp-icon.png"/></S.WhatsappIcon>
            </S.Container>
        </>
    )
}