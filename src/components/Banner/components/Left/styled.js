import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 630px;

  margin: 100px 0 100px 0;

  @media (max-width: 900px) {
    margin: 0 auto;

    width: 400px;
    align-items: center;
  }

  @media (max-width: 420px) {
    max-width: 300px;
    width: 90%;
  }
`;

export const Header = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;

  color: #ffffff;

  margin-bottom: 24px;

  @media (max-width: 500px) {
    font-size: 3rem;
  }

  @media (max-width: 360px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #adb9c7;

  margin-bottom: 40px;

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }

  @media (max-width: 360px) {
    font-size: 0.75rem;
  }
`;

export const StyledButton = styled.button`
  width: 176px;
  height: 56px;

  padding: 12px 16px;

  background: #1e50ff;
  border-radius: 16px;
  border: 2px solid #1e50ff;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  color: #ffffff;

  cursor: pointer;

  &:hover {
    background-color: transparent;
    transition: 0.3s;
  }

  @media (max-width: 900px) {
    width: 126px;
    height: 46px;

    padding: 6px 8px;

    font-size: 0.9rem;
  }
`;
