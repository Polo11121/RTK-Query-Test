import { useState, useRef, useEffect } from "react";
import { getPlatformsIcons } from "../../helpers/functions";
import { useGetGameTrailerQuery } from "../../api/apiSlice/apiSlice";
import { Game } from "../../helpers/types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import moment from "moment";
import * as Styled from "./GamePreview.styled";

export const GamePreview = ({ game }: { game?: Game }) => {
  const [isHover, setIsHover] = useState(false);
  const [height, setHeight] = useState<null | number>(null);

  const ref = useRef<HTMLDivElement>(null);

  const { data } = useGetGameTrailerQuery(game?.slug + "trailer", {
    skip: !isHover,
  });

  useEffect(() => {
    const refHeight = ref?.current?.getBoundingClientRect().height;

    if (!height && refHeight) {
      setHeight(refHeight + 215);
      window.addEventListener("resize", () => setHeight(refHeight + 215));
    }
  }, [ref.current]);

  const showTrailer = isHover;

  return game ? (
    <Styled.Wrapper height={height}>
      <Styled.Container
        zIndex={showTrailer}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Styled.MediaContainer>
          {showTrailer && (
            <Styled.Trailer videoId={`${data?.items[0].id.videoId}`} />
          )}
          <Styled.Image visible={!showTrailer} src={game.background_image} />
        </Styled.MediaContainer>
        <Styled.InfoContainer ref={ref}>
          <Styled.Info>
            <Styled.Platforms>
              {game.platforms &&
                getPlatformsIcons(game.platforms).map((image) => (
                  <Styled.Platform key={JSON.stringify(image)} src={image} />
                ))}
            </Styled.Platforms>
            <Styled.Rating rating={game.metacritic} hidden={!game.metacritic}>
              {game.metacritic}
            </Styled.Rating>
          </Styled.Info>
          <Styled.Title>{game.name}</Styled.Title>
          <Styled.Likes>
            <Styled.Plus>+</Styled.Plus> {game.suggestions_count}
          </Styled.Likes>
          <Styled.AdditionalInfo hidden={!showTrailer}>
            <Styled.InfoRow>
              <Styled.InfoTitle>Release date:</Styled.InfoTitle>
              <Styled.InfoValue>
                {moment(game.released).format("MMM DD, YYYY")}
              </Styled.InfoValue>
            </Styled.InfoRow>
            <Styled.InfoRow>
              <Styled.InfoTitle>Genres:</Styled.InfoTitle>
              <Styled.InfoValue>
                {game.genres && game.genres.map(({ name }) => name).join(", ")}
              </Styled.InfoValue>
            </Styled.InfoRow>
            <Styled.InfoRow>
              <Styled.InfoTitle>Tags:</Styled.InfoTitle>
              <Styled.InfoValue>
                {game.tags && game.tags.map(({ name }) => name).join(", ")}
              </Styled.InfoValue>
            </Styled.InfoRow>
          </Styled.AdditionalInfo>
        </Styled.InfoContainer>
      </Styled.Container>
    </Styled.Wrapper>
  ) : (
    <SkeletonTheme baseColor="#202020" highlightColor="#444" height={285}>
      <Skeleton borderRadius="0.75rem" style={{ marginBottom: "2.5rem" }} />
    </SkeletonTheme>
  );
};
