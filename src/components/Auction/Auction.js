import {
  CardWrapper,
  Header,
  HeaderButton,
  HeaderWrapper,
  Wrapper,
} from "./styled";
import { AuctionCard } from "./components";

import auction_img1 from "../../assets/auction_img1.png";
import auction_img2 from "../../assets/auction_img2.png";
import auction_img3 from "../../assets/auction_img3.png";
import auction_user_img1 from "../../assets/auction_user_img1.png";
import auction_user_img2 from "../../assets/auction_user_img2.png";
import auction_user_img3 from "../../assets/auction_user_img3.png";

function Auction() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Live Auctions</Header>
        <HeaderButton>View More</HeaderButton>
      </HeaderWrapper>
      <CardWrapper>
        <AuctionCard img={auction_img1} info_img={auction_user_img1} />
        <AuctionCard img={auction_img2} info_img={auction_user_img2} />
        <AuctionCard img={auction_img3} info_img={auction_user_img3} />
      </CardWrapper>
    </Wrapper>
  );
}

export { Auction };
