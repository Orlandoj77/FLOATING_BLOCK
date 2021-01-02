import React from "react";
import HeaherCommon from "../../Components/HeaherCommon";
import {
  Container,
  Main,
  Form,
  Image,
  InputName,
  InputEmail,
  InputPassword,
  RegisterButton,
  RedirectLogin,
} from "./style";
import imgRegister from "../../Assets/Register/register.png";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

// import { InputEmail, InputName } from "../Home/Newslatter/styles";

export default function Register() {
  return (
    <Container>
      <HeaherCommon
        navigateTo="Login"
        showInputSearch={false}
        title="Juste-se a nós"
      />
      <Main>
        <Fade left>
          <Form>
            <h3
              style={{
                marginTop: -50,
                marginBottom: 50,
                fontSize: 30,
                fontFamily: "Ubuntu",
              }}>
              Cadastre-se
            </h3>
            <InputName placeholder="Nome"></InputName>
            <InputEmail placeholder="Email ou telemóvel"></InputEmail>
            <InputPassword
              type="password"
              placeholder="Palavra Passe"></InputPassword>
            <Link to="my-notes">
              <RegisterButton>Entrar</RegisterButton>
            </Link>
            <p style={{ marginTop: 60, fontFamily: "Ubuntu" }}>
              Já tem uma conta? <RedirectLogin to="/login">Login</RedirectLogin>
            </p>
          </Form>
        </Fade>

        <Fade right>
          <Image src={imgRegister} />
        </Fade>
      </Main>
    </Container>
  );
}
