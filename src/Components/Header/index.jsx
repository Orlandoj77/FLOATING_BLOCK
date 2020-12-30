import React from "react";
import Logo from "../../Assets/Logo.png"
import {
  Container,
  Wrapper,
  Image,
  ButtonRegister,
  ButtonContainer,
  LoginButton,
} from "./style";
import { Link } from "react-router-dom";


// import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
      <Link to="../../Home/Intro/index.jsx">  <img src={Logo} /> </Link>
        <ButtonContainer>
          <ButtonRegister to="/register"> Cadastrar-se </ButtonRegister>
          <LoginButton to="/login">Entrar</LoginButton>
        </ButtonContainer>
      </Wrapper>
      {/* <hr /> */}
    </Container>
  );
}

export default Header;
