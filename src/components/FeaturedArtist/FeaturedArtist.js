import {
  Card,
  CardHeader,
  CardImg,
  CardRoundImg,
  CardText,
  CardWrapper,
  EthImg,
  EthWrapper,
  Header,
  HeaderButton,
  HeaderWrapper,
  Wrapper,
} from "./styled";

import artist_img1 from "../../assets/artist_img1.png";
import artist_img2 from "../../assets/artist_img2.png";
import artist_img3 from "../../assets/artist_img3.png";
import artist_img4 from "../../assets/artist_img4.png";

import round_img1 from "../../assets/round_img1.png";
import round_img2 from "../../assets/round_img2.png";
import round_img3 from "../../assets/round_img3.png";
import round_img4 from "../../assets/round_img4.png";

import eth_img from "../../assets/eth_img.png";

function FeaturedArtist() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Featured Artist</Header>
        <HeaderButton>View More</HeaderButton>
      </HeaderWrapper>
      <CardWrapper>
        <Card>
          <CardImg src={artist_img1} alt="img" />
          <CardRoundImg src={round_img1} alt="img" />
          <CardHeader>CryptoPunks</CardHeader>
          <EthWrapper>
            <EthImg src={eth_img} alt="img" />
            <CardText>818.7K</CardText>
          </EthWrapper>
        </Card>
        <Card>
          <CardImg src={artist_img2} alt="img" />
          <CardRoundImg src={round_img2} alt="img" />
          <CardHeader>CryptoPunks</CardHeader>
          <EthWrapper>
            <EthImg src={eth_img} alt="img" />
            <CardText>818.7K</CardText>
          </EthWrapper>
        </Card>
        <Card>
          <CardImg src={artist_img3} alt="img" />
          <CardRoundImg src={round_img3} alt="img" />
          <CardHeader>CryptoPunks</CardHeader>
          <EthWrapper>
            <EthImg src={eth_img} alt="img" />
            <CardText>818.7K</CardText>
          </EthWrapper>
        </Card>
        <Card>
          <CardImg src={artist_img4} alt="img" />
          <CardRoundImg src={round_img4} alt="img" />
          <CardHeader>CryptoPunks</CardHeader>
          <EthWrapper>
            <EthImg src={eth_img} alt="img" />
            <CardText>818.7K</CardText>
          </EthWrapper>
        </Card>
      </CardWrapper>
    </Wrapper>
  );
}

export { FeaturedArtist };
