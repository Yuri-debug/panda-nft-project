import { Button, Links, Logo, NavBlock, Wrapper } from "./components";

function NavBar() {
  return (
    <Wrapper>
      <NavBlock>
        <Logo />
        <Links />
        <Button />
      </NavBlock>
    </Wrapper>
  );
}

export { NavBar };
