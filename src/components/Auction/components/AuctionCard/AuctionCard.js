import {
  HoverButton,
  Img,
  StyledButton,
  Text,
  TextButtonWrapper,
  Wrapper,
} from "./styled";
import { CardInfo } from "./components";

function AuctionCard(props) {
  return (
    <Wrapper>
      <HoverButton>Place A Bid</HoverButton>
      <Img src={props.img} />
      <TextButtonWrapper>
        <Text>Hamlet Contemplates</Text>
        <StyledButton>BSC</StyledButton>
      </TextButtonWrapper>
      <CardInfo info_img={props.info_img} />
    </Wrapper>
  );
}

export { AuctionCard };
