import { getPlatformsIcons } from "../../../../helpers/functions";
import { Game } from "../../../../helpers/types";
import * as Styled from "./GameHint.styled";

export const GameHint = ({ game }: { game: Game }) => (
  <Styled.GameHint>
    <Styled.Image src={game.background_image} />
    <Styled.Info>
      <Styled.Platforms>
        {getPlatformsIcons(game.platforms).map((image) => (
          <Styled.Platform key={JSON.stringify(image)} src={image} />
        ))}
      </Styled.Platforms>
      <Styled.Title>{game.name}</Styled.Title>
    </Styled.Info>
  </Styled.GameHint>
);
