import React from "react";
import Logo from "../../Assets/Logo.png";
import {
  Container,
  Wrapper,
  Image,
  ButtonRegister,
  ButtonContainer,
  LoginButton,
} from "./style";

// import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Wrapper>
        <Image src={Logo} />
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
