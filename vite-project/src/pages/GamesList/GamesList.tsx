import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gamesParams } from "../../helpers/constants";
import { Navbar } from "../../components/Navbar/Navbar";
import { useGetGamesQuery } from "../../api/apiSlice/apiSlice";
import { GamePreview } from "../../components/GamePreview/GamePreview";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton";
import * as Styled from "./GamesList.styled";

export const GamesList = () => {
  const [pageInfo, setPageInfo] = useState({ tag: "", page: 1 });
  const location = useLocation();

  const tag = location.pathname.split("/")[1] || "news-and-trending";

  const queryParams = gamesParams.find(({ path }) => path === tag)?.params;

  const title = tag.replaceAll("-", " ");

  const { data, isSuccess, isFetching } = useGetGamesQuery(
    {
      tag,
      params: {
        ...queryParams,
        page: pageInfo.page,
      },
    },
    { skip: pageInfo.tag !== tag }
  );

  useEffect(() => {
    setPageInfo({ tag, page: 1 });
  }, [tag]);

  const fetchMore = () => setPageInfo({ tag, page: pageInfo.page + 1 });

  return (
    <Styled.Layout>
      <Navbar />
      <Styled.GamesListContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.GamesList
          dataLength={data?.results.length || 40}
          next={fetchMore}
          hasMore={data?.next}
          scrollThreshold={1}
        >
          {isSuccess
            ? data?.results.map((game) => (
                <GamePreview key={game?.id} game={game} />
              ))
            : [...Array(40).keys()].map((i) => <GamePreview key={i} />)}
        </Styled.GamesList>
        <Styled.GamesListButton>
          <LoadMoreButton onClick={fetchMore} isLoading={isFetching} />
        </Styled.GamesListButton>
      </Styled.GamesListContainer>
    </Styled.Layout>
  );
};
