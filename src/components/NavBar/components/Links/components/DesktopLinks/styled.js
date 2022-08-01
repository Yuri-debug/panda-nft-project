import styled from "styled-components";
import { Link } from "react-router-dom";

export const DesktopWrapper = styled.div`
  width: 550px;

  display: flex;
  gap: 32px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  padding-bottom: 5px;

  color: #adb9c7;

  // border: 2px solid #02050e;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;

  &:hover {
    transition: 0.3s;
    // border-bottom: 2px solid #1e50ff;
    color: #ffffff;
  }

  @media (max-width: 900px) {
    border: 2px solid #000033;
  }
`;
