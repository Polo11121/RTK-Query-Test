import {
  CollectionsList,
  CreatorsList,
  GamesList,
} from "../../../helpers/types";
import { CollectionHint } from "./CollectionHint/CollectionHint";
import { CreatorHint } from "./CreatorHint/CreatorHint";
import { GameHint } from "./GameHint/GameHint";
import { HintsSection } from "./HintsSection/HintsSection";
import * as Styled from "./SearchHints.styled";

interface SearchHintsProps {
  games?: GamesList;
  creators?: CreatorsList;
  collections?: CollectionsList;
  isFetching: boolean;
}

export const SearchHints = ({
  games,
  creators,
  collections,
  isFetching,
}: SearchHintsProps) => (
  <Styled.SearchHints>
    {isFetching ? (
      <Styled.SpinnerContainer margin="2rem 0">
        <Styled.Spinner size={36} />
      </Styled.SpinnerContainer>
    ) : (
      <div>
        <HintsSection
          title="Games"
          count={games?.count}
          isFetching={isFetching}
        >
          <>
            {games?.results.map((game) => (
              <GameHint game={game} />
            ))}
          </>
        </HintsSection>
        <HintsSection
          title="Creators"
          count={creators?.count}
          isFetching={isFetching}
        >
          <>
            {creators?.results.map((creator) => (
              <CreatorHint creator={creator} />
            ))}
          </>
        </HintsSection>
        <HintsSection
          title="Collections"
          count={collections?.count}
          isFetching={isFetching}
        >
          <>
            {collections?.results.map((collection) => (
              <CollectionHint collection={collection} />
            ))}
          </>
        </HintsSection>
      </div>
    )}
  </Styled.SearchHints>
);
