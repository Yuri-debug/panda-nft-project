import styled from "styled-components";

export const StyledButton = styled.div`
  width: 145px;

  padding: 12px 16px;

  border: 2px solid #1e50ff;
  border-radius: 16px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  text-align: center;

  color: #ffffff;

  background-color: #1E50FF;

  cursor: pointer;

  &:hover{
    transition: 0.3s;
    background-color: transparent;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;
