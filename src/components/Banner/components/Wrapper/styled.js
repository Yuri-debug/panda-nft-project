import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 150px;

  display: flex;
  gap: 188px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export default Wrapper