import styled from "styled-components";
import { ImSpinner2 } from "react-icons/im";

export const Section = styled.div`
  padding: 0 16px 16px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  :last-of-type {
    border: none;
  }
`;

export const SectionTitle = styled.div`
  margin: 1rem 0 1rem;
  display: flex;
  align-items: flex-end;
  gap: 0.25rem;
  font-size: 1.125rem;
`;

export const TitleInfo = styled.div`
  font-weight: 700;
  color: #fff;
`;

export const TitleCount = styled.div`
  color: hsla(0, 0%, 100%, 0.4);
  font-weight: 400;
`;

export const Hints = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled(ImSpinner2)`
  color: white;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
