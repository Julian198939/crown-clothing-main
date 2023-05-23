import styled from "styled-components";
export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 60%;
    opacity: 0.7;
    position: absolute;
    top: 80%;
    transform: translateY(-50%);
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      width: 70%;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const Name = styled.span`
  width: 90%;
  font-weight: bold;
  margin-bottom: 15px;
  margin-left: 10px;
`;

export const Price = styled.span`
  width: 10%;
`;
