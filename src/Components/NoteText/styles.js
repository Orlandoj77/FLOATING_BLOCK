import styled from "styled-components";

export const Container = styled.div`
  font-family: ubuntu;
`;

export const Note = styled.div`
  padding-left: 27px;
  padding-right: 27px;
  width: 400px;

  background: linear-gradient(
    153.33deg,
    rgba(13, 255, 124, 0.27) 0.8%,
    rgba(255, 101, 132, 0.27) 99.25%
  );
  border-radius: 20px;
`;
export const Title = styled.h2`
  margin-top: 30px;
  font-family: Ubuntu;
`;
export const Description = styled.p`
  margin-top: 30px;
  font-size: 15px;
  font-family: Ubuntu;
  text-align: justify;
`;
export const ContainerNotes = styled.div`
  display: flex;
  flex-direction: column;

  height: 330px;
  /* background: #fff; */
  border-radius: 20px;
`;
export const ContainerDefinition = styled.div`
  padding: 10px;
  width: 100%;
`;
