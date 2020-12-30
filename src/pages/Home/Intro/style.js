import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  background: linear-gradient(255.69deg, #0dff7c -75.44%, #000000 100%);

  @media screen and (max-width:360px){
  
  }
  
`;








export const Informations = styled.div`
  height: 60%;
  width: 50%;
  /* background: #000; */
`;

export const Title = styled.h1`
  margin-top: 8px;
  font-size: 63px;
  color: #0dff7c;
  font-family: Ubuntu;
  margin-left: 133px;

  @media screen and (max-width:360px){
  justify-item:center;
  display:flex;
  }
`;

// export const ImageSide = styled.div`
//   height: 30%;
//   width: 20%;
//   /* background: #fff; */
// `;

export const Main = styled.div`
  flex-grow: 1;
  /* width: 100%;
  height: 100%; */
  background-size: initial;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  display: flex;
  align-items: center;
  align-content: center;
`;
export const Description = styled.div`
  font-size: 21px;
  color: #fff;
  font-family: Ubuntu;
  margin-top: 10px;

  margin-left: 133px;
`;

export const BasicTitle = styled.h1`
  font-size: 23px;
  margin-left: 133px;
  font-family: Ubuntu;
  margin-top: 100px;
  color: #fff;
`;
export const BasicDescription = styled.p`
  margin-top: 40px;
  text-align: justify;
  margin-left: 133px;
  color: #fff;
  font-size: 14px;
  font-family: Ubuntu;
  max-width: 400px;
  line-height: 20px;
  margin-bottom: 10px;
`;

export const ButtonCreateAccount = styled.button`
  margin-top: 30px;
  margin-left: 133px;
  padding: 10px;
  border: 1px solid #0dff7c;
  background: transparent;
  color: #fff;
  font-family: Ubuntu;
  border-radius: 10px;
  outline: none;
  transition: 0.9s;

  &:hover {
    background: #0dff7c;
    cursor: pointer;
    outline: none;
  }
  @media screen and (max-width:360px){
  hight:100%;
  width:100%;
  }
`;

export const Image = styled.img`
  height: 470px;

  @media screen and (max-width:360px){
    display:none;
  
  }
`;
