import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const items = ["Home", "About", "Service", "My work", "Resume"];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={items} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #d4ffd3;
  display: flex;
  justify-content: space-around;
`;
