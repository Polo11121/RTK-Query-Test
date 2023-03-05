import { Search } from "../Search/Search";
import * as Styled from "./Header.styled";

export const Header = () => (
  <Styled.Header>
    <Styled.Logo>RAWG</Styled.Logo>
    <Search />
  </Styled.Header>
);
