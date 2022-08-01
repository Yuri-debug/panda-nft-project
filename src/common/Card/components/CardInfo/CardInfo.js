import {
  LeftHeader,
  LeftText,
  Right,
  RightHeader,
  RightImg,
  RightText,
  Wrapper,
  Left,
  RightDivText,
} from "./styled";

function CardInfo(props) {
  return (
    <Wrapper>
      <Right>
        <RightImg src={props.info_img} />
        <RightDivText>
          <RightHeader>Creator</RightHeader>
          <RightText>SalvadorDali</RightText>
        </RightDivText>
      </Right>
      <Left>
        <LeftHeader>Current Bid</LeftHeader>
        <LeftText>4.89 eTH</LeftText>
      </Left>
    </Wrapper>
  );
}

export { CardInfo };
