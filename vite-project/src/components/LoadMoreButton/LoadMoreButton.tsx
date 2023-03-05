import { ImSpinner2 } from "react-icons/im";
import styled from "styled-components";

export const LoadMoreButton = ({
  onClick,
  isLoading,
}: {
  onClick: () => void;
  isLoading: boolean;
}) => (
  <Button onClick={onClick}>
    {isLoading ? <Spinner size={24} /> : "Load more"}
  </Button>
);

const Button = styled.button`
  justify-content: center;
  width: 200px;
  height: 48px;
  background-color: hsla(0, 0%, 100%, 0.1);
  color: hsla(0, 0%, 100%, 0.4);
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  line-height: normal;
  font-weight: 400;
  border: none;
  margin: 32px auto 40px;

  :hover {
    background-color: #fff;
    color: #000;
  }
`;

const Spinner = styled(ImSpinner2)`
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
