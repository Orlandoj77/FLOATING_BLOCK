import { Link } from "react-router-dom/cjs/react-router-dom.min";
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
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background-size: initial;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 443px;
  height: 618px;

  margin-right: 133px;
  border-radius: 20px;
  background: linear-gradient(
    153.33deg,
    rgba(13, 255, 124, 0.27) 0.8%,
    rgba(255, 101, 132, 0.27) 99.25%
  );
`;
export const Image = styled.img`
  margin-left: 133px;
`;

export const InputName = styled.input`
  background: transparent;
  width: 50%;
  height: 8%;
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
  &:hover {
    width: 70%;
  }
`;
export const InputEmail = styled.input`
  width: 50%;
  height: 8%;

  background: transparent;
  border: 1px solid #0dff7c;
  border-radius: 20px;
  padding: 10px;
  outline: none;
  margin-top: 30px;
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
  &:hover {
    width: 70%;
  }
`;

export const InputPassword = styled.input`
  width: 50%;
  height: 8%;

  background: transparent;
  border: 1px solid #0dff7c;
  border-radius: 20px;
  padding: 10px;
  outline: none;
  margin-top: 30px;
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
  &:hover {
    width: 70%;
  }
`;
export const RegisterButton = styled.button`
  width: 100px;
  height: 40px;
  background: transparent;
  border: 1px solid #0dff7c;
  margin-top: 40px;
  border-radius: 20px;
  outline: none;
  transition: 0.9s;
  font-family: Ubuntu;
  color: #fff;

  &:hover {
    background: #0dff7c;
    color: #000;
    cursor: pointer;
  }
`;
export const RedirectLogin = styled(Link)`
  color: #0dff7c;
  text-decoration: none;
  transition: 0.9s;

  &:hover {
    opacity: 0.5;
  }
`;
