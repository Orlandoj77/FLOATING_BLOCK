import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  background: linear-gradient(
    349.15deg,
    #0dff7c -52.83%,
    #0dff7c -52.82%,
    rgba(0, 0, 0, 0.35) 93.7%
  );
  /* background: #fff; */
`;

export const LineColor = styled.div`
  height: 13px;
  background: linear-gradient(90deg, #0dff7c 0%, #dd0dff 100%);
`;
export const TitleNewslatter = styled.h1`
  font-size: 57px;
  font-family: Ubuntu;
  margin-left: 133px;
`;

export const Form = styled.form`
  display: flex;
  width: 443px;
  height: 477px;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    153.33deg,
    rgba(13, 255, 124, 0.27) 0.8%,
    rgba(255, 101, 132, 0.27) 99.25%
  );
`;
export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`;

export const ContainerNewslatter = styled.div`
  margin-top: 100px;
`;

export const ContainerForm = styled.div`
  margin-top: 100px;
  margin-right: 133px;
`;
export const InputName = styled.input`
  background: transparent;
  width: 50%;
  height: 10%;
  border-radius: 20px;
  padding: 10px;
  outline: none;
  border: 1px solid #0dff7c;
  color: #fff;
  font-family: Ubuntu;
  transition: 0.9s;

  ::placeholder {
    color: #fff;
    opacity: 1;
  }
  &:focus {
    width: 70%;
  }
`;
export const InputEmail = styled.input`
  width: 50%;
  height: 10%;

  background: transparent;
  border: 1px solid #0dff7c;
  border-radius: 20px;
  padding: 10px;
  outline: none;
  margin-top: 40px;
  font-family: Ubuntu;
  color: #fff;
  transition: 0.9s;

  ::placeholder {
    color: #fff;
    opacity: 1;
  }

  &:focus {
    width: 70%;
  }

  

`;
export const SubmitButton = styled.button`
  background: transparent;
  border: 1px solid #0dff7c;
  outline: none;
  border-radius: 20px;
  width: 250%;
  height: 60%;
  transition: 0.9s;
  font-family: Ubuntu;
  font-weight: bold;
  color: #fff;
  margin-top: 40px;
  margin-left:-2em;
  &:hover {
    background: #0dff7c;
    cursor: pointer;
    color: #000;
  }
`;

export const ButtonAboutUs = styled.button`
  width: 40%;
  margin-top: 50px;
  margin-left: 133px;
  text-decoration: none;
  padding: 9px;
  font-size: 12px;
  border: 1px solid #0dff7c;

  background: transparent;

  color: #fff;
  font-family: Ubuntu;

  border-radius: 10px;
  outline: none;
  transition: 0.9s;

  &:hover {
    background: #0dff7c;
    outline: none;
    cursor: pointer;
    color: #000;
  }
`;
