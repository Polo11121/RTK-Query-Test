import styled from "styled-components";

export const GameHint = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Image = styled.img`
  width: 2.25rem;
  height: 2.938rem;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.375rem;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const Title = styled.span`
  font-size: 0.875rem;
  line-height: normal;
  font-weight: 400;
  margin: 2px 0;
  font-weight: 700;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

export const Platforms = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.313rem;
`;

export const Platform = styled.img`
  height: 0.625rem;
  background-color: #202020;
`;
