import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  border-bottom: 1px solid #0dff7c;

  padding-bottom: 10px;

  width: 100%;

  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  flex: 1;

  margin: 0 auto;
`;
export const Image = styled.img`
  height: 40px;
  margin-left: 130px;
`;
export const ButtonRegister = styled(Link)`
  margin-right: 20px;
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
    color: #000;
  }
`;

export const ButtonContainer = styled.div`
  margin-right: 133px;
`;
export const LoginButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-family: Ubuntu;
  transition: 0.9s;

  &:hover {
    color: #0dff7c;
  }
`;
