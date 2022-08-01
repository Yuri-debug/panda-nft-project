import styled from "styled-components";

export const Img = styled.img`
  border-radius: 24px;

  width: 352px;
  height: 352px;

  margin: 24px;

  @media (max-width: 900px) {
    max-width: 250px;
    max-height: 250px;
    width: 90%;
    height: 90%;
  }
`;

export const HoverButton = styled.button`
  display: none;

  width: 176px;
  height: 56px;

  border: 2px solid #1e50ff;
  border-radius: 1rem;

  color: #ffffff;
  background-color: #1e50ff;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;

  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background-color: transparent;
  }

  @media (max-width: 900px) {
    width: 136px;
    height: 36px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;

  border-radius: 24px;

  background-color: #272d37;

  margin-bottom: 48px;

  &:hover ${Img} {
    transition: 0.3s;
    filter: blur(2px);
  }

  &:hover ${HoverButton} {
    display: block;

    position: absolute;

    top: 450px;

    z-index: 1;
  }

  @media (max-width: 900px) {
    margin: 0 auto;

    width: 300px;
  }

  @media (max-width: 420px) {
    max-width: 250;
    width: 90%;
  }
`;

export const TextButtonWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 350px;

  @media (max-width: 900px) {
    max-width: 250px;
    width: 90%;
  }
`;

export const Text = styled.p`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;

  color: #ffffff;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const StyledButton = styled.button`
  width: 59px;
  height: 29px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;

  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #ffffff;
  background: #1e50ff;
  border-radius: 8px;
  border: 2px solid #1e50ff;

  cursor: pointer;

  &:hover {
    background-color: #272d37;
    transition: 0.3s;
  }

  @media (max-width: 500px) {
    width: 40px;
    height: 22px;

    font-size: 0.75rem;
  }
`;
