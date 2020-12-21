import { FiGithub, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Main = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #fff; */
  padding-top: 2%;
  padding-bottom: 2%;
`;

export const Facebook = styled(FiFacebook)`
  margin-left: 10px;
  color: #fff;
  transition: 0.9s;

  &:hover {
    cursor: pointer;
    color: #0dff7c;
  }
`;

export const Twitter = styled(FiTwitter)`
  margin-left: 10px;
  color: #fff;
  transition: 0.9s;

  &:hover {
    cursor: pointer;
    color: #0dff7c;
  }
`;
export const Instagram = styled(FiInstagram)`
  margin-left: 10px;
  color: #fff;
  transition: 0.9s;

  &:hover {
    cursor: pointer;
    color: #0dff7c;
  }
`;
export const Github = styled(FiGithub)`
  margin-left: 10px;
  color: #fff;
  transition: 0.9s;

  &:hover {
    cursor: pointer;
    color: #0dff7c;
  }
`;
export const DowloadApp = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Ubuntu;
  font-weight: bold;

  width: 30%;
  /* margin-top: 50px; */
  margin-left: 100px;
  text-decoration: none;
  padding: 9px;
  font-size: 12px;
  border: 1px solid #0dff7c;

  background: #0dff7c;

  color: #000;
  font-family: Ubuntu;

  border-radius: 10px;
  outline: none;
  transition: 0.9s;

  &:hover {
    background: transparent;
    outline: none;
    cursor: pointer;
    color: #fff;
  }
`;
