import * as Styled from "./HintsSection.styled";

interface HintsSectionProps {
  title: string;
  count?: number;
  isFetching: boolean;
  children: React.ReactNode;
}

export const HintsSection = ({
  title,
  count,
  isFetching,
  children,
}: HintsSectionProps) => (
  <Styled.Section>
    <Styled.SectionTitle>
      <Styled.TitleInfo>{title}</Styled.TitleInfo>
      <Styled.TitleCount>{isFetching ? 0 : count}</Styled.TitleCount>
    </Styled.SectionTitle>
    <Styled.Hints>
      {isFetching ? (
        <Styled.SpinnerContainer>
          <Styled.Spinner size={36} />
        </Styled.SpinnerContainer>
      ) : (
        children
      )}
    </Styled.Hints>
  </Styled.Section>
);
