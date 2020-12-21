import React, { Component } from "react";
import Header from "../../../Components/Header";
import landing from "../../../Assets/Avatar.png";
import {
  Container,
  Informations,
  Title,
  // ImageSide,
  Main,
  Description,
  ButtonCreateAccount,
  Image,
  BasicTitle,
  BasicDescription,
  Content,
} from "./style";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <Container>
      <Main>
        <Header />
        <Content>
          <Informations>
            <Fade right>
              <Title>Floanting block</Title>
              <Description>
                Conheça o melhor bloco para as suas <br /> anotações.
              </Description>

              <Link to="/register">
                <ButtonCreateAccount>Comece criando agora</ButtonCreateAccount>
              </Link>

              <BasicTitle>
                Partilhe com as pessoas certas <br /> as suas anotações.
              </BasicTitle>

              <BasicDescription>
                No recurso “categoria”, você pode criar o seu grupo de
                colaboradores e compartilhar publicamente com os participantes
                do seu grupo e eles te ajudarão a melhoras as suas ideias.
              </BasicDescription>
            </Fade>
          </Informations>

          {/* <ImageSide> */}
          <Fade left>
            <Image src={landing} />
          </Fade>
          {/* </ImageSide> */}
        </Content>
      </Main>
    </Container>
  );
}
