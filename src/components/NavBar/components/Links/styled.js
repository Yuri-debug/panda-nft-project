import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

export const StyledFiMenu = styled(FiMenu)`
  display: none;

  width: 30px;
  height: 30px;
  color: #adb9c7;

  cursor: pointer;

  &:hover {
    transition: 0.3s;
    color: #ffffff;
  }

  @media (max-width: 900px) {
    display: flex;

    position: fixed;
    top: 30px;
    right: 30px;

    width: 30px;
    height: 30px;

    color: #adb9c7;

    cursor: pointer;

    &:hover {
      transition: 0.3s;
      color: #ffffff;
    }
  }
`;

export const StyledChromeClose = styled(VscChromeClose)`
  display: none;

  width: 30px;
  height: 30px;
  color: #adb9c7;

  cursor: pointer;

  &:hover {
    transition: 0.3s;
    color: #ffffff;
  }

  @media (max-width: 900px) {
    display: flex;

    position: fixed;
    top: 30px;
    right: 30px;

    width: 30px;
    height: 30px;

    color: #adb9c7;

    cursor: pointer;

    &:hover {
      transition: 0.3s;
      color: #ffffff;
    }
  }
`;
