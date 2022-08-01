import {
  HoverButtonRow1,
  HoverButtonRow2,
  Img,
  StyledButton,
  Text,
  TextButtonWrapper,
  Wrapper,
} from "./styled";
import { CardInfo } from "./components";

function HotNFTCardRow1(props) {
  return (
    <Wrapper>
      <HoverButtonRow1>Place A Bid</HoverButtonRow1>
      <Img src={props.img} />
      <TextButtonWrapper>
        <Text>Hamlet Contemplates</Text>
        <StyledButton>BSC</StyledButton>
      </TextButtonWrapper>
      <CardInfo info_img={props.info_img} />
    </Wrapper>
  );
}

function HotNFTCardRow2(props) {
  return (
    <Wrapper>
      <HoverButtonRow2>Place A Bid</HoverButtonRow2>
      <Img src={props.img} />
      <TextButtonWrapper>
        <Text>Hamlet Contemplates</Text>
        <StyledButton>BSC</StyledButton>
      </TextButtonWrapper>
      <CardInfo info_img={props.info_img} />
    </Wrapper>
  );
}

export { HotNFTCardRow1, HotNFTCardRow2 };
