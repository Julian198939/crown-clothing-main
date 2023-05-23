import styled from "styled-components";
export const BaseButton = styled.button`
  min-width: 150px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px 0 25px;
  font-size: 15px;
  background-color: #832dc1;
  color: white;
  text-transform: uppercase;
  font-family: "Darumadrop One", sans-serif;
  font-weight: 500;
  border: none;
  cursor: pointer;
  display: inline-block;
  border-radius: 25px;
  transition: background-color 0.2s, box-shadow 0.2s;
  &:hover {
    background-color: white;
    color: #000;
    border: 1.5px solid black;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  }
`;
export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: #ffffff;

  &:hover {
    background-color: #4285f4;
    color: #ffffff;
    border: none;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: black;
  color: #fff;
  border: 1px solid #000;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1.5px solid black;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  }
`;
