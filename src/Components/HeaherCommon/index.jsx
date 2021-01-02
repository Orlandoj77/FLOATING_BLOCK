import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import {
  Container,
  Wrapper,
  Image,
  Text,
  ContainerBack,
  LeftButtom,
  ContainerSomething,
  InputSearch,
  DownloadApp,
} from "./styles";


const HeaherCommon = ({
  title,
  showInputSearch,
  navigateTo,
  showDownloadButton,
  ...children
}) => {
  return (
    <>
      <Container>
        <Wrapper>
          <ContainerBack>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to={`/${navigateTo}`}>
              <LeftButtom />
            </Link>

            <Text>{title}</Text>
          </ContainerBack>

          <ContainerSomething>
            <Link to="/development">
              {showDownloadButton && <DownloadApp>Baixar o App</DownloadApp>}
            </Link>
            {showInputSearch && <InputSearch placeholder="Pesquisar" />}
            <Link to="/">
              <Image src={Logo} /></Link>
          </ContainerSomething>
        </Wrapper>
      </Container>
    </>
  );
};

export default HeaherCommon;
