import styled from "styled-components";

export const Hero = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    349deg,
    rgba(2, 0, 36, 1) 37%,
    rgba(0, 1, 148, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );

  padding-bottom: 100px;

  @media (max-width: 900px) {
    padding-bottom: 50px;
  }
`;
