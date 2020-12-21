import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    65.9deg,
    #000000 -18.05%,
    rgba(26, 102, 145, 0.82) 53.32%,
    rgba(15, 255, 39, 0.06) 206.03%
  );
`;
export const ContainerRegister = styled.div`
  height: 100%;
  width: 25%;
  /* background: #fff; */
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
export const Main = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
export const ContainerListNotes = styled.div`
  display: flex;
  align-items: center;
  /* align-content: center; */
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;
export const NoteTextContainer = styled.div`
  padding: 10px;
`;
export const CreateCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 243px;
  height: 204px;
  background: linear-gradient(
    65.9deg,
    rgba(26, 102, 145, 0.82) 53.32%,
    rgba(255, 101, 132, 0.27) 99.25%
  );
  border-radius: 20px;
  font-family: Ubuntu;
`;
export const CreateNotes = styled.div`
  width: 243px;
  height: 204px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 40px;
  background: linear-gradient(
    65.9deg,
    rgba(26, 102, 145, 0.82) 53.32%,
    rgba(255, 101, 132, 0.27) 99.25%
  );
  border-radius: 20px;
  font-family: Ubuntu;
`;
export const Text = styled.h3``;
export const ConteinerIcon = styled.div`
  padding-top: 40px;
`;
