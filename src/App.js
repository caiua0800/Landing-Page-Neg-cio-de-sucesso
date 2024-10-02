import styled from "styled-components";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import PriceDownHeader from "./Components/PriceDownHeader/PriceDownHeader";
import PraQuem from "./Components/PraQuem/PraQuem";
import Explicacao from "./Components/Explicacao/Explicacao";
import Depoimentos from "./Components/Depoimentos/Depoimentos";
import VaiAprender from "./Components/VaiAprender/VaiAprender";
import Recupere from "./Components/Recupere/Recupere";
import Carouselzin from "./Components/Carouselzin/Carouselzin";
import Bonus from "./Components/Bonus/Bonus";
import Profissional from "./Components/Profissional/Profissional";
import OfertaImperdivel from "./Components/OfertaImperdivel/OfertaImperdivel";
import PricePromo from "./Components/PricePromo/PricePromo";
import TransacaoSegura from "./Components/TransacaoSegura/TransacaoSegura";
import Duvidas from "./Components/Duvidas/Duvidas";
import "./fonts.css"


function App() {
  return (
    <AppContainer>
      <Container>
          <Header />
          {/* <PriceDownHeader /> */}
          <PraQuem />
          <Profissional />
          <Explicacao />
          <Depoimentos />
          <VaiAprender />
          {/* <Recupere /> */}
          <Carouselzin />
          <Bonus />
          <OfertaImperdivel />
          <PricePromo />
          <TransacaoSegura />
          <Duvidas />
      </Container>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
  text-align: center;
  // font-family: 'Times New Roman', Times, serif;
  font-family: Fonte1, sans-serif;
  overflow-x: hidden;
`;

export default App;

