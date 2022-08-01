import hot_img1 from "./hot_nft/hot_img1.png";
import hot_img2 from "./hot_nft/hot_img2.png";
import hot_img3 from "./hot_nft/hot_img3.png";
import hot_img4 from "./hot_nft/hot_img4.png";
import hot_img5 from "./hot_nft/hot_img5.png";
import hot_img6 from "./hot_nft/hot_img6.png";
import hot_user1 from "./hot_nft/hot_user1.png";
import hot_user2 from "./hot_nft/hot_user2.png";
import hot_user3 from "./hot_nft/hot_user3.png";
import hot_user4 from "./hot_nft/hot_user4.png";
import hot_user5 from "./hot_nft/hot_user5.png";
import hot_user6 from "./hot_nft/hot_user6.png";

import Facebook from "./social_networks_imgs/Facebook.png";
import twitter from "./social_networks_imgs/twitter.png";
import instagram from "./social_networks_imgs/instagram.png";

const HOT_IMG = Object.freeze({
  hot_img1,
  hot_img2,
  hot_img3,
  hot_img4,
  hot_img5,
  hot_img6,
  hot_user1,
  hot_user2,
  hot_user3,
  hot_user4,
  hot_user5,
  hot_user6,
});

const SOCIAL_IMG = Object.freeze({
  Facebook,
  twitter,
  instagram,
});

export class SocialImages {
  static getIMG() {
    return SOCIAL_IMG;
  }
}

export class HotImages {
  static getIMG() {
    return HOT_IMG;
  }
}
