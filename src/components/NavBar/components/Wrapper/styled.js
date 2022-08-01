import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  padding: 30px 20px 30px 20px;

  @media (max-width: 900px) {
    width: 100%;
    height: 40px;

    position: fixed;
    top: 0;
    left: 0;

    background-color: #000033;
    border-bottom: 2px solid #0000ff;
  }
`;

export default Wrapper;
