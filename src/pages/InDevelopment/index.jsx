import React from "react";

import { Container, Dev, Image } from "./styles";
import logoDevelopment from "../../Assets/InDevelopment/development.png";

const InDevelopment = () => {
  return (
    <Container>
      <h1 style={{ fontFamily: "Ubuntu", color: "#000" }}>
        Em Desenvolvimento
      </h1>

      <Image src={logoDevelopment} />
      <Dev>Dev_77</Dev>
    </Container>
  );
};

export default InDevelopment;
