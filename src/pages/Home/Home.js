import {
  Container,
  NavBar,
  Banner,
  Hero,
  Brands,
  InfoBlock,
  Auction,
  FeaturedArtist,
  HotNFT,
  CTA,
  Footer,
} from "../../components";

function Home() {
  return (
    <Container>
      <Hero>
        <NavBar />
        <Banner />
        <Brands />
        <InfoBlock />
        <Auction />
        <FeaturedArtist />
        <HotNFT />
        <CTA />
        <Footer />
      </Hero>
    </Container>
  );
}

export { Home };
