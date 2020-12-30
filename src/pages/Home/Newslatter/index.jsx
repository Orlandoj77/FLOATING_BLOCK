import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BasicDescription, BasicTitle } from "../Intro/style";
import "./index.css";
import {
  Container,
  LineColor,
  TitleNewslatter,
  Form,
  ContainerNewslatter,
  ContainerForm,
  Main,
  InputName,
  InputEmail,
  SubmitButton,
  ButtonAboutUs,
} from "./styles";
import Fade from "react-reveal/Fade";

const Newslatter = () => {
  function onSumbit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <LineColor></LineColor>
      <Main>
        <ContainerNewslatter>
          <Fade left>
            <TitleNewslatter>
              Subscreva-se na nossa <br /> Newslatter
            </TitleNewslatter>

            <BasicTitle style={{ marginTop: "35px" }}>
              Partilhe com  as pessoas certas <br /> as suas anotações.
            </BasicTitle>

            <BasicDescription>
              No recurso “categoria”, você pode criar o seu grupo de
              colaboradores e compartilhar p ublicamente com os participantes do
              seu grupo e eles te ajudarão a melhoras as suas ideias.
            </BasicDescription>

            <Link to="/register">
              <ButtonAboutUs>Sobre nós</ButtonAboutUs>
            </Link>
          </Fade>
        </ContainerNewslatter>

        <ContainerForm>
          <Fade right>
            <Form className="form">
              <InputName placeholder="Nome"></InputName>
              <InputEmail placeholder="Email"></InputEmail>

              <Link to="/register"> <SubmitButton > Subscrever</SubmitButton> </Link>
            </Form>
          </Fade>
        </ContainerForm>
      </Main>
    </Container>
  );
};

export default Newslatter;
