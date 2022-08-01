import styled from "styled-components";
import { Link } from "react-router-dom";

export const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    position: fixed;

    top: 0px;
    right: 0px;

    width: 100%;
    margin-top: 98px;
    padding: 20px 0 20px 20px;

    flex-direction: column;
    gap: 20px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    background-color: #000033;

    border-top: 2px solid #0000ff;
  }
`;

export const StyledLink = styled(Link)`
  padding-left: 20px;

  width: 100px;

  color: #adb9c7;

  border: 2px solid #02050e;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;

  &:hover {
    transition: 0.3s;
    color: #ffffff;
  }

  @media (max-width: 900px) {
    margin-left: 20px;
    border: none;
  }
`;
