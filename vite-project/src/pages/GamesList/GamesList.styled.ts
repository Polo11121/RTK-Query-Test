import InfiniteScroll from "react-infinite-scroll-component";
import styled, { AnyStyledComponent } from "styled-components";

export const Layout = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  background-color: #151515;
`;

export const Title = styled.h1`
  font-size: 72px;
  line-height: 74px;
  font-weight: 700;
  color: white;
  text-transform: capitalize;
  margin-bottom: 24px;
`;

export const GamesListContainer = styled.div`
  flex: 1;
`;

export const GamesList = styled(
  InfiniteScroll as unknown as AnyStyledComponent
)`
  flex: 1;
  display: grid;
  grid-gap: 0 24px;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  overflow: hidden !important;
  padding-bottom: 300px;
`;

export const GamesListButton = styled.div`
  display: flex;
  margin-top: -300px;
  justify-content: center;
`;
