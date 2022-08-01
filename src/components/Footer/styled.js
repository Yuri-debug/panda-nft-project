import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 90%;

  margin: 0 auto;
  padding-top: 160px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 390px;
`;

export const Header = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;

  color: #ffffff;

  padding-bottom: 1rem;
`;

export const Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: #adb9c7;

  padding: 0.5rem;

  cursor: pointer;

  &:hover {
    transition: 0.3s;
    color: #ffffff;
  }
`;

export const ContactText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: #adb9c7;

  padding: 0.5rem;
`;

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
`;

export const LogoSubText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;

  color: #adb9c7;

  padding: 0.5rem;
`;

export const ImgWrapper = styled.div`
  display: flex;
  gap: 10px;

  padding: 0.5rem;
`;

export const StyledImg = styled.img`
  width: 32px;
  height: 32px;
`;
