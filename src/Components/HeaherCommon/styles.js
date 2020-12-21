import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

export const Container = styled.div``;

export const Wrapper = styled.div`
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
  margin-right: 130px;
  margin-left: 50px;
`;

export const Text = styled.h1`
  font-family: Ubuntu;
  font-size: 25px;
  max-width: 124px;
`;
export const LeftButtom = styled(FiArrowLeft)`
  margin-right: 30px;
  margin-left: 35px;

  &:hover {
    cursor: pointer;
  }
`;
export const ContainerBack = styled.div`
  display: flex;
  align-items: center;
`;
export const ContainerSomething = styled.div`
  display: flex;
  align-items: center;
`;
export const InputSearch = styled.input`
  width: 40px;
  height: 40px;
  outline: none;
  padding: 15px;
  background: transparent;
  border: 1px solid #0dff7c;
  border-radius: 50px;
  color: #fff;
  font-family: Ubuntu;
  transition: 0.9s;

  &:focus {
    width: 400px;
  }
  &:hover {
    width: 400px;
  }
`;
export const DownloadApp = styled.button`
  width: 217px;
  height: 48px;
  font-family: Ubuntu;
  font-weight: bold;
  font-size: 16px;
  background: transparent;
  border: 3px solid #000;
  border-radius: 10px;
  outline: none;
  transition: 0.9s;
  margin-right: 30px;

  &:hover {
    cursor: pointer;
    background: linear-gradient(131deg, #0dff7c 0%, #b265ff 100%);
    border: none;
  }
`;
