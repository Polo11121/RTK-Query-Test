import { Collection } from "../../../../helpers/types";
import * as Styled from "./CollectionHint.styled";

export const CollectionHint = ({ collection }: { collection: Collection }) => (
  <Styled.CreatorHint>
    <Styled.Images>
      {[...Array(4).keys()].map((index) =>
        collection.backgrounds[index]?.url ? (
          <Styled.Image src={collection.backgrounds[index]?.url} />
        ) : (
          <Styled.ImageDiv />
        )
      )}
    </Styled.Images>
    <Styled.Info>
      <Styled.Title>{collection.name}</Styled.Title>
      <Styled.AdditionalInfo>
        {collection.games_count} games
      </Styled.AdditionalInfo>
    </Styled.Info>
  </Styled.CreatorHint>
);
