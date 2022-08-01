import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 3.5rem;

  text-align: center;
`;

export const Header = styled.div`
  max-width: 580px;
  width: 90%;

  margin: 0 auto;
  padding-top: 150px;
  padding-bottom: 5rem;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;

  font-size: 3rem;

  color: #ffffff;
`;

export const StyledImg = styled.img`
  max-width: 80px;
  width: 100%;

  margin: 0 auto;
  padding: 48px;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 30px;

  width: 90%;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 380px;
  width: 100%;

  background-color: #272d37;
  border-radius: 1.5rem;

  margin: 0 auto;

  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: transparent;
  }
`;

export const CardHeader = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;

  color: #ffffff;

  padding-bottom: 1.5rem;
`;

export const CardText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;

  color: #ffffff;

  max-width: 300px;
  width: 100%;

  margin: 0 auto;
  padding-bottom: 2.5rem;
`;
