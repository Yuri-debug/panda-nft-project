import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 90%;

  margin: 0 auto;
  padding: 100px 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const HeaderButton = styled.button`
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

export const CardImg = styled.img`
  max-width: 260px;
  width: 90%;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 56px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    gap: 30px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 280px;
  width: 90%;

  padding: 1rem;

  border-radius: 1rem;

  background-color: #272d37;

  cursor: pointer;

  &:hover ${CardImg} {
    transition: 0.3s;
    filter: blur(2px);
  }
`;

export const CardRoundImg = styled.img`
  max-width: 100px;
  width: 90%;

  position: relative;
  top: -3rem;
`;

export const CardHeader = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;

  color: #ffffff;

  position: relative;
  top: -2rem;
`;

export const EthWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 1.5rem;
`;

export const EthImg = styled.img``;

export const CardText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;

  color: 1rem;
`;
