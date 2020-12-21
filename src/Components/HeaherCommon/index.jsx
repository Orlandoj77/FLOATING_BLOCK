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
            {showDownloadButton && <DownloadApp>Baixar o App</DownloadApp>}
            {showInputSearch && <InputSearch placeholder="Pesquisar" />}
            <Image src={Logo} />
          </ContainerSomething>
        </Wrapper>
      </Container>
    </>
  );
};

export default HeaherCommon;
