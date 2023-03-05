import styled from "styled-components";

export const Navbar = styled.nav`
  color: white;
  min-width: 220px;

  margin-top: 40px;
`;

export const NavbarSections = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const NavbarSection = styled.li`
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h1<{ link: boolean }>`
  pointer-events: ${(props) => (props.link ? "auto" : "none")};
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.4;
  }
`;
