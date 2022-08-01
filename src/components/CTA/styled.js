import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 90%;

  margin: 0 auto;

  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 40%,
    rgba(39, 45, 55, 1) 100%
  );
  border-radius: 1rem;

  padding: 3rem 0;
`;

export const Content = styled.div`
  max-width: 800px;
  width: 90%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Header = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;

  color: #ffffff;

  padding-bottom: 1.5rem;
`;

export const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: #ffffff;

  padding-bottom: 2rem;
`;

export const StyledButton = styled.button`
  width: 239px;
  height: 64px;

  padding: 16px;

  background-color: #1e50ff;
  color: #ffffff;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;

  border-radius: 1rem;
  border: 2px solid #1e50ff;

  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background-color: transparent;
  }
`;
