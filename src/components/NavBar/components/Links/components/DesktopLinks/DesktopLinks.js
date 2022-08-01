import { DesktopWrapper } from "./styled";
import { StyledLink } from "./styled";

function DesktopLinks() {
  return (
    <DesktopWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/">Discover</StyledLink>
      <StyledLink to="/">Docs</StyledLink>
      <StyledLink to="/">Blog</StyledLink>
      <StyledLink to="/">About us</StyledLink>
      <StyledLink to="/">Contact us</StyledLink>
    </DesktopWrapper>
  );
}

export { DesktopLinks };
