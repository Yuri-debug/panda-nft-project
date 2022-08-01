import { MobileWrapper } from "./styled";
import { StyledLink } from "./styled";

function MobileLinks() {
  return (
    <MobileWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/">Discover</StyledLink>
      <StyledLink to="/">Docs</StyledLink>
      <StyledLink to="/">Blog</StyledLink>
      <StyledLink to="/">About us</StyledLink>
      <StyledLink to="/">Contact us</StyledLink>
    </MobileWrapper>
  );
}

export { MobileLinks };
