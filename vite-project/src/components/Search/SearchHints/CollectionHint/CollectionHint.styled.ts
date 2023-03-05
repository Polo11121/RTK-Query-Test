import styled from "styled-components";

export const CreatorHint = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Image = styled.img`
  width: 17px;
  height: 17px;
  border: none;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.375rem;
  background: hsla(0, 0%, 100%, 0.04) no-repeat 50%;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

export const ImageDiv = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 0.375rem;
  background: hsla(0, 0%, 100%, 0.04) no-repeat 50%;
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
  font-weight: 700;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

export const AdditionalInfo = styled.div`
  font-size: 12px;
  line-height: normal;
  font-weight: 400;
  opacity: 0.4;
`;
