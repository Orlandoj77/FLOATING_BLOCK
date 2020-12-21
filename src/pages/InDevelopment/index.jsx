import React from "react";

import { Container, Image } from "./styles";
import logoDevelopment from "../../Assets/InDevelopment/development.png";

const InDevelopment = () => {
  return (
    <Container>
      <h1 style={{ fontFamily: "Ubuntu", color: "#000" }}>
        Em Desenvolvimento
      </h1>
      <Image src={logoDevelopment} />
    </Container>
  );
};

export default InDevelopment;
