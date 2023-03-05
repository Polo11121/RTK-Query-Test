import styled from "styled-components";

export const SectionItems = styled.ol`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 8px;
`;

export const Icon = styled.h1`
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: hsla(0, 0%, 100%, 0.1);
  transition: all 0.3s;
`;

export const SectionItem = styled.li<{ opacity?: number }>`
  opacity: ${(props) => props.opacity || 1};
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;

  &:hover ${Icon} {
    color: black;
    background-color: white;
  }
`;

export const Text = styled.h1`
  font-size: 16px;
  line-height: normal;
  font-weight: 400;
`;
