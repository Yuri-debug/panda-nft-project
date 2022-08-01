import {
  BottomButton,
  ButtonsWrapper,
  CardWrapper,
  Header,
  HeaderButton,
  HeaderWrapper,
  Wrapper,
} from "./styled";
import { HotNFTCardRow1, HotNFTCardRow2 } from "./components";
import { HotImages } from "../../assets/index";

function HotNFT() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>Hot NFTs</Header>
        <ButtonsWrapper>
          <HeaderButton>Music</HeaderButton>
          <HeaderButton>Art</HeaderButton>
          <HeaderButton>Sports</HeaderButton>
          <HeaderButton>Virtual</HeaderButton>
          <HeaderButton>Videos</HeaderButton>
          <HeaderButton>More</HeaderButton>
        </ButtonsWrapper>
      </HeaderWrapper>
      <CardWrapper>
        <HotNFTCardRow1
          img={HotImages.getIMG().hot_img1}
          info_img={HotImages.getIMG().hot_user1}
        />
        <HotNFTCardRow1
          img={HotImages.getIMG().hot_img2}
          info_img={HotImages.getIMG().hot_user2}
        />
        <HotNFTCardRow1
          img={HotImages.getIMG().hot_img3}
          info_img={HotImages.getIMG().hot_user3}
        />
        <HotNFTCardRow2
          img={HotImages.getIMG().hot_img4}
          info_img={HotImages.getIMG().hot_user4}
        />
        <HotNFTCardRow2
          img={HotImages.getIMG().hot_img5}
          info_img={HotImages.getIMG().hot_user5}
        />
        <HotNFTCardRow2
          img={HotImages.getIMG().hot_img6}
          info_img={HotImages.getIMG().hot_user6}
        />
      </CardWrapper>
      <BottomButton>View More</BottomButton>
    </Wrapper>
  );
}

export { HotNFT };
