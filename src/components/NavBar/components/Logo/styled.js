import styled from "styled-components";

export const LogoImg = styled.img`
  width: 43px;
  height: 40px;
`;

export const LogoText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  text-transform: capitalize;

  color: #ffffff;
`;

export const LogoWrapper = styled.div`
  width: 140px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;

  @media (max-width: 900px) {
    width: 100px;

    position: fixed;
    top: 26px;

    // background-color: #000033;
  }
`;
