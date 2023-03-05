import { Creator } from "../../../../helpers/types";
import * as Styled from "./CreatorHint.styled";

export const CreatorHint = ({ creator }: { creator: Creator }) => (
  <Styled.CreatorHint>
    <Styled.Image
      src={
        creator.image ||
        "https://static.vecteezy.com/system/resources/thumbnails/003/144/506/small/dark-purple-pink-gradient-blur-texture-vector.jpg"
      }
    />
    <Styled.Info>
      <Styled.Title>{creator.name}</Styled.Title>
      <Styled.Positions>
        {creator.positions.map((position) => (
          <Styled.Position key={position.name}>{position.name}</Styled.Position>
        ))}
      </Styled.Positions>
    </Styled.Info>
  </Styled.CreatorHint>
);
