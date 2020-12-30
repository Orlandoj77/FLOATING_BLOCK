import React from "react";
import { Link } from "react-router-dom";
import { FiArrowDownCircle } from "react-icons/fi";
import {
  Container,
  Main,
  Facebook,
  Twitter,
  Instagram,
  Github,
  DowloadApp,
} from "./styles";
import Fade from "react-reveal/Fade";

const Footer = () => {
  const links = {
    GITHUB: "https://github.com/Orlandoj77",
    TWITTER: "",
    INSTAGRAM: "",
    FACEBOOK: "",
  };

  return (
    <Container>
      <Main>
        <Fade letf>
          <DowloadApp style={{ padding: 15, marginRight: 70, width: 200 }}>
            <Link to="/terms" style={{ textDecoration: "none", color: "#000" }}>
              <span style={{ marginLeft: 50 }}> Termos de uso</span>{" "}
            </Link>
          </DowloadApp>
        </Fade>



        <Link
          to={{
            pathname: links.GITHUB,
          }}
          target="_blank">
          <Github size={24} className="icon_search" />
        </Link>

        <Link
          to={{
            pathname: links.GITHUB,
          }}
          target="_blank">
          {" "}
          <Facebook size={24} className="icon_search" />
        </Link>
        <Link
          to={{
            pathname: links.GITHUB,
          }}
          target="_blank">
          {" "}
          <Twitter size={24} className="icon_search" />
        </Link>
        <Link
          to={{
            pathname: links.GITHUB,
          }}
          target="_blank">
          <Instagram size={24} className="icon_search" />
        </Link>
        <DowloadApp>
          <Link to="/development" style={{ textDecoration: "none", color: "black" }}>
            <span to="./" style={{ marginLeft: 50 }}> Baixe o App </span>{" "}
          </Link>
          <FiArrowDownCircle
            size={24}
            style={{ color: "#fff", marginRight: 50 }}
          />{" "}
        </DowloadApp>
      </Main>
    </Container>
  );
};

export default Footer;
