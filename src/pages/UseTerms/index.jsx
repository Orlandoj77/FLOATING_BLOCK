import React from "react";
import HeaherCommon from "../../Components/HeaherCommon";


import { Container, Content } from "./styles";

const UseTerms = () => {
  return (
    <Container>
      <HeaherCommon showDownloadButton />
      <Content>
        <h1 style={{ fontFamily: "Ubuntu", fontSize: 48, color: "#000" }}>
          Termos de uso do site{" "}
        </h1>

        <p style={{ fontFamily: "Ubuntu", marginTop: 20, color: "#000" }}>
          19 de novembro de 2020
        </p>

        <h5
          style={{
            fontFamily: "Ubuntu",
            fontSize: 40,
            marginTop: 20,
            color: "#000",
          }}>
          Termos de uso{" "}
        </h5>

        <h6
          style={{
            fontFamily: "Ubuntu",
            fontSize: 20,
            marginTop: 20,
            color: "#000",
          }}>
          1. Introdução{" "}
        </h6>

        <p
          style={{
            fontFamily: "Ubuntu",
            fontSize: 15,
            marginTop: 20,
            lineHeight: 1.3,
            color: "#000",
          }}>
          Leia todos termos deste documento ("Termos") com atenção, porque ele
          explica seus <br /> direitos e responsabilidades ao acessar os sites.
          Ao acessar ou se inscrever para receber <br /> Comunicações, você
          estará concordando com estes Termos.
        </p>

        <h6
          style={{
            fontFamily: "Ubuntu",
            fontSize: 20,
            marginTop: 20,
            color: "#000",
          }}>
          2. Registo de conta{" "}
        </h6>

        <p
          style={{
            fontFamily: "Ubuntu",
            fontSize: 15,
            marginTop: 20,
            lineHeight: 1.3,
            color: "#000",
          }}>
          Você é responsável por todas as atividades realizadas com sua conta.{" "}
          <br />
          Alguns Sites permitem que você crie um nome do usuário durante o
          registro.
        </p>

        <h6
          style={{
            fontFamily: "Ubuntu",
            fontSize: 20,
            marginTop: 20,
            color: "#000",
          }}>
          3. Modificações destes Termos{" "}
        </h6>

        <p
          style={{
            fontFamily: "Ubuntu",
            fontSize: 15,
            marginTop: 20,
            lineHeight: 1.3,
            color: "#000",
          }}>
          Poderemos atualizar estes Termos de tempos em tempos para tratar de um
          novo recurso <br /> das Comunicações ou esclarecer uma disposição. Os
          Termos atualizados serão <br /> publicados online. Caso as mudanças
          sejam substanciais, anunciaremos a atualização <br /> através do seu
          E-mail.
        </p>

        <h6
          style={{
            fontFamily: "Ubuntu",
            fontSize: 20,
            marginTop: 20,
            color: "#000",
          }}>
          4. Entre em contato{" "}
        </h6>

        <p
          style={{
            fontFamily: "Ubuntu",
            fontSize: 15,
            marginTop: 20,
            color: "#000",
            lineHeight: 1.3,
          }}>
          Floatingblock7@gmail.com <br /> Telefone: +244933530651 <br /> Fixo:
          650-903-0875
        </p>
      </Content>
    </Container>
  );
};

export default UseTerms;
