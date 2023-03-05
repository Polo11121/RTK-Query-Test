import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import {
  useGetCollectionsQuery,
  useGetCreatorsQuery,
  useGetGamesQuery,
} from "../../api/apiSlice/apiSlice";
import { SearchHints } from "./SearchHints/SearchHints";
import { useClickOutside } from "../../helpers/useClickOutside";
import * as Styled from "./Search.styled";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { ref, isComponentVisible, setIsComponentVisible } = useClickOutside();

  const { data: games, isFetching: isGamesFetching } = useGetGamesQuery(
    {
      tag: `games-searchTerm-${searchTerm}`,
      params: {
        search: searchTerm,
        page_size: 7,
      },
    },
    { skip: !searchTerm }
  );

  const { data: creators, isFetching: isCreatorsFetching } =
    useGetCreatorsQuery(
      {
        tag: `creators-searchTerm-${searchTerm}`,
        params: {
          search: searchTerm,
          page_size: 2,
        },
      },
      { skip: !searchTerm }
    );

  const { data: collections, isFetching: isCollectionsFetching } =
    useGetCollectionsQuery(
      {
        tag: `collections-searchTerm-${searchTerm}`,
        params: {
          search: searchTerm,
          page_size: 2,
        },
      },
      { skip: !searchTerm }
    );

  const isFetching =
    isCollectionsFetching || isCreatorsFetching || isGamesFetching;

  return (
    <Styled.SearchWrapper>
      <Styled.SearchContainer ref={ref}>
        <BiSearch size={20} />
        <Styled.SearchInput
          placeholder="Search games"
          debounceTimeout={1000}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target?.value)}
          onClick={() => setIsComponentVisible(true)}
        />
        {searchTerm && (
          <Styled.CloseIcon size={16} onClick={() => setSearchTerm("")} />
        )}
      </Styled.SearchContainer>
      {(games || isFetching) && isComponentVisible && (
        <SearchHints
          games={games}
          creators={creators}
          collections={collections}
          isFetching={isFetching}
        />
      )}
    </Styled.SearchWrapper>
  );
};
