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
} from "./styles";
import imgRegister from "../../Assets/Login/login.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Login() {
  return (
    <Container>
      <HeaherCommon
        navigateTo=""
        showInputSearch={false}
        title="Juste-se a nós"
      />
      <Main>
        <Fade right>
          <Image src={imgRegister} />
        </Fade>

        <Fade left>
          <Form>
            <h3
              style={{
                marginTop: -50,
                marginBottom: 50,
                fontSize: 30,
                fontFamily: "Ubuntu",
              }}>
              Login
            </h3>

            <InputEmail placeholder="Email ou telemóvel"></InputEmail>
            <InputPassword
              type="password"
              placeholder="Palavra Passe"></InputPassword>
            <Link to="/my-notes">
              <RegisterButton to="my-notes">Entrar</RegisterButton>
            </Link>

            <p style={{ marginTop: 60, fontFamily: "Ubuntu" }}>
              Não tem uma conta?{""}
              <RedirectLogin to="/register">Regista-te</RedirectLogin>
            </p>
          </Form>
        </Fade>
      </Main>
    </Container>
  );
}
