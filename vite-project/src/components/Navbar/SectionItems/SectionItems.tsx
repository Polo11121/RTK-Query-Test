import { useState } from "react";
import { IconType } from "react-icons";
import { formatPath } from "../../../helpers/functions";
import { useNavigate } from "react-router-dom";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import * as Styled from "./SectionItems.styled";

export const SectionItems = ({
  items,
  hideButton,
}: {
  items: { link: string; Icon: IconType }[];
  hideButton?: boolean;
}) => {
  const [showAll, setShowAll] = useState(false);

  const navigate = useNavigate();

  return (
    <Styled.SectionItems>
      {items
        ?.slice(0, !showAll && hideButton ? 3 : items.length)
        ?.map(({ link, Icon }) => (
          <Styled.SectionItem
            key={link}
            onClick={() => navigate(`/${formatPath(link)}`)}
          >
            <Styled.Icon>
              <Icon size="24px" />
            </Styled.Icon>
            <Styled.Text>{link}</Styled.Text>
          </Styled.SectionItem>
        ))}
      {hideButton && (
        <Styled.SectionItem
          opacity={0.4}
          onClick={() => setShowAll((prevState) => !prevState)}
        >
          <Styled.Icon>
            {showAll ? (
              <MdOutlineExpandLess size="24px" />
            ) : (
              <MdOutlineExpandMore size="24px" />
            )}
          </Styled.Icon>
          <Styled.Text> {showAll ? "Hide" : "Show all"}</Styled.Text>
        </Styled.SectionItem>
      )}
    </Styled.SectionItems>
  );
};
