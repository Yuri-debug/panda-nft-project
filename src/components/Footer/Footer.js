import {
  Content,
  FooterBlock,
  Header,
  Text,
  Wrapper,
  LogoWrapper,
  LogoImg,
  LogoText,
  ImgWrapper,
  StyledImg,
  LogoSubText,
  ContactText,
} from "./styled";
import { SocialImages } from "../../assets";
import PandaLogo from "../../assets/PandaLogo.png";

function Footer() {
  return (
    <Wrapper>
      <Content>
        <FooterBlock>
          <LogoWrapper>
            <LogoImg src={PandaLogo} alt="PandaLogo" />
            <LogoText>Panda NFT</LogoText>
          </LogoWrapper>
          <LogoSubText>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </LogoSubText>
          <Text>2021 All Right Reserved</Text>
        </FooterBlock>
        <FooterBlock>
          <Header>Resources</Header>
          <Text>Help Center</Text>
          <Text>Platform Status</Text>
          <Text>Partners</Text>
          <Text>Gas-Free Marketplace</Text>
          <Text>Blog</Text>
        </FooterBlock>
        <FooterBlock>
          <Header>Company</Header>
          <Text>Our Team</Text>
          <Text>About Us</Text>
          <Text>Contact Us</Text>
          <Text>Career</Text>
        </FooterBlock>
        <FooterBlock>
          <Header>Contact</Header>
          <ContactText>2715 Ash Dr. San Jose,</ContactText>
          <ContactText>South Dakota 83475</ContactText>
          <ImgWrapper>
            <StyledImg src={SocialImages.getIMG().Facebook} alt="" />
            <StyledImg src={SocialImages.getIMG().twitter} alt="" />
            <StyledImg src={SocialImages.getIMG().instagram} alt="" />
          </ImgWrapper>
        </FooterBlock>
      </Content>
    </Wrapper>
  );
}

export { Footer };
