import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 94px;

  margin: 24px;

  @media (max-width: 900px) {
    max-width: 250px;
    width: 90%;

    gap: 64px;

    margin: 14px;
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 900px) {
    max-width: 100px;
    width: 90%;
    gap: 10px;
  }
`;

export const RightDivText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 16px;
`;

export const RightHeader = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  color: #8f9ca9;

  @media (max-width: 900px) {
    font-size: 0.75rem;
  }
`;

export const RightText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;

  color: #ffffff;
  
  @media (max-width: 900px) {
    font-size: 0.85rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftHeader = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  color: #8a8aa0;
  
  @media (max-width: 900px) {
    font-size: 0.75rem;
  }
`;

export const LeftText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;

  color: #ffffff;

  @media (max-width: 900px) {
    font-size: 0.75rem;
  }
`;
