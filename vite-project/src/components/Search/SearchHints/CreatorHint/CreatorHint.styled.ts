import styled from "styled-components";

export const CreatorHint = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Image = styled.img`
  width: 36px !important;
  height: 36px !important;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.375rem;
  cursor: pointer;
  border-radius: 50%;

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
  font-weight: 700;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

export const Positions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.313rem;
`;

export const Position = styled.span`
  font-size: 12px;
  line-height: normal;
  font-weight: 400;
  opacity: 0.4;
`;
