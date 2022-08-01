import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 100%;
  width: 90%;

  margin: 0 auto;
  padding: 100px 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;

    gap: 30px;
  }
`;

export const Header = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;

  color: #ffffff;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 800px;
  width: 90%;
`;

export const HeaderButton = styled.button`
  width: 115px;
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

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  justify-items: center;

  padding: 56px 0;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;

    gap: 30px;
  }
`;

export const BottomButton = styled.button`
  width: 176px;
  height: 56px;

  align-self: center;

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
