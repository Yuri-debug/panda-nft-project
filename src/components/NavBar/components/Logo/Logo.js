import { LogoImg, LogoText, LogoWrapper } from "./styled";
import PandaLogo from "../../../../assets/PandaLogo.png";

function Logo() {
  return (
    <LogoWrapper>
      <LogoImg src={PandaLogo} alt="PandaLogo" />
      <LogoText>Panda NFT</LogoText>
    </LogoWrapper>
  );
}

export { Logo };
