import { Card } from "../../common";
import { Left, Wrapper } from "./components";
import card_img from "../../assets/card_img.png";
import card_info_img from "../../assets/card_info_img.png";

function Banner() {
  return (
    <Wrapper>
      <Left />
      <Card img={card_img} info_img={card_info_img} />
    </Wrapper>
  );
}

export { Banner };
