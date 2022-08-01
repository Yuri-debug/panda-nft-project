import {
  CardWrapper,
  Header,
  Wrapper,
  Card,
  CardHeader,
  StyledImg,
  CardText,
} from "./styled";
import cardIcon from "../../assets/card_icon.png";

function InfoBlock() {
  return (
    <Wrapper>
      <Header>Create and sell your NFTs</Header>
      <CardWrapper>
        <Card>
          <StyledImg src={cardIcon} alt="img" />
          <CardHeader>Set up your wallet</CardHeader>
          <CardText>
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </CardText>
        </Card>
        <Card>
          <StyledImg src={cardIcon} alt="img" />
          <CardHeader>Add your NFTs</CardHeader>
          <CardText>
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </CardText>
        </Card>
        <Card>
          <StyledImg src={cardIcon} alt="img" />
          <CardHeader>List them for sale</CardHeader>
          <CardText>
            Once you’ve set up your wallet of choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner.
          </CardText>
        </Card>
      </CardWrapper>
    </Wrapper>
  );
}

export { InfoBlock };
