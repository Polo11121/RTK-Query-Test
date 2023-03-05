import { navbarContent } from "../../helpers/constants";
import { SectionItems } from "./SectionItems/SectionItems";
import { formatPath } from "../../helpers/functions";
import { useNavigate } from "react-router-dom";
import * as Styled from "./Navbar.styled";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Styled.Navbar>
      <Styled.NavbarSections>
        {navbarContent.map(({ title, links, hideButton }) => (
          <Styled.NavbarSection key={title}>
            <Styled.SectionTitle
              link={!links?.length || title === "Browse"}
              onClick={() =>
                navigate(title === "Home" ? "/" : `/${formatPath(title)}`)
              }
            >
              {title}
            </Styled.SectionTitle>
            {links && <SectionItems items={links} hideButton={hideButton} />}
          </Styled.NavbarSection>
        ))}
      </Styled.NavbarSections>
    </Styled.Navbar>
  );
};
