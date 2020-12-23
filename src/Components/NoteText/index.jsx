import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

import {
  Container,
  Note,
  Title,
  Description,
  ContainerNotes,
  ContainerDefinition,
} from "./styles";

const NoteText = () => {
  return (
    <Container>
      <Note>
        <ContainerNotes>
          <Title>Mandioca com funge cuia</Title>

          <Description>
            Todos os dias comendo isso, não me canso nunca e continuarei comendo
            até o mundo acabar.Todos os dias comendo isso, não me canso nunca e
            continuarei comendo até o mundo acabar.
          </Description>
        </ContainerNotes>

        <ContainerDefinition>
          <Link to="development">
            <FiEdit size={24} style={{ color: "#fff", marginRight: 20 }} />
          </Link>
          <Link to="development">
            <FiTrash size={24} style={{ color: "#fff" }} />
          </Link>
        </ContainerDefinition>
      </Note>
    </Container>
  );
};


{/* component solo que pode ser importado para qaulquer lado*/ }

export default NoteText;
