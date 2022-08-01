import styled from "styled-components";

const NavBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  margin: 0 auto;

  @media (max-width: 900px) {
    justify-content: space-between;

    background-color: #000033;
  }
`;

export default NavBlock
