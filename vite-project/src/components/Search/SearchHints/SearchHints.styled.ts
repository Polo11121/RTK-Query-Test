import styled from "styled-components";
import { ImSpinner2 } from "react-icons/im";

export const SearchHints = styled.div`
  align-items: center;
  position: absolute;
  z-index: 999;
  border-radius: 1.156rem;
  top: 3.5rem;
  width: calc(100% - 200px);
  background-color: #000;
`;

export const SpinnerContainer = styled.div<{ margin?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.margin};
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
