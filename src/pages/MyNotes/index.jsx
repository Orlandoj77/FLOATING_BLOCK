import React, { useState } from "react";
import HeaherCommon from "../../Components/HeaherCommon";
import NoteText from "../../Components/NoteText";
import { FiPlus } from "react-icons/fi";

import {
  Container,
  ContainerRegister,
  Main,
  ContainerListNotes,
  NoteTextContainer,
  CreateCategory,
  CreateNotes,
  Text,
  ConteinerIcon,
} from "./styles";
import { Link } from "react-router-dom";

const MyNotes = () => {
  const [openModal, setOpenModal] = useState(false);

  function toggleModal() {
    setOpenModal(!openModal);
  }

  return (
    <Container>
      <HeaherCommon
        navigateTo=""
        // showDownloadButton
        showInputSearch={true}
        title="Juste-se a nós"
      />

      <Main>
        <ContainerRegister>
          <Text
            style={{
              marginTop: -80,
              marginBottom: 100,
              fontFamily: "Ubuntu",
              fontSize: 50,
            }}>
            Suas notas
          </Text>
          <CreateCategory>
            <Text>Criar catergoria</Text>
            <ConteinerIcon>
              <Link to="/development">
                <FiPlus
                  onClick={toggleModal}
                  size={24}
                  style={{ color: "#fff" }}
                />
              </Link>
            </ConteinerIcon>
          </CreateCategory>

          <CreateNotes>
            <Text>Criar notas</Text>
            <ConteinerIcon>
              <Link to="/development">
                {" "}
                <FiPlus size={24} style={{ color: "#fff" }} />
              </Link>
            </ConteinerIcon>
          </CreateNotes>
        </ContainerRegister>
        <ContainerListNotes>
          <NoteTextContainer>
            <NoteText />
          </NoteTextContainer>

          <NoteTextContainer>
            <NoteText />
          </NoteTextContainer>
          <NoteTextContainer>
            <NoteText />
          </NoteTextContainer>

          <NoteTextContainer>
            <NoteText />
          </NoteTextContainer>

          <NoteTextContainer>
            <NoteText />
          </NoteTextContainer>

          <NoteTextContainer>
            <NoteText />
          </NoteTextContainer>
        </ContainerListNotes>
      </Main>
    </Container>
  );
};

export default MyNotes;
