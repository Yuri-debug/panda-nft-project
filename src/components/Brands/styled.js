import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;

  display: flex;
  justify-content: space-between;
  gap: 40px;

  margin: 0 auto;
  padding: 72px 20px 0 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;

    & img {
      max-width: 250px;
    }
  }
`;
