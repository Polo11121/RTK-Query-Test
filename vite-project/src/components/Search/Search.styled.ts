import { RxCross2 } from "react-icons/rx";
import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-right: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 44px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 400;

  padding: 0 12px 0 12px;
  line-height: 14px;
  color: hsla(0, 0%, 100%, 0.6);
  background-color: hsla(0, 0%, 100%, 0.16);

  :hover,
  :hover > input,
  :focus-within,
  :focus-within > input {
    color: #000;
    opacity: 1;
    background-color: #fff !important;
  }
`;

export const SearchInput = styled(DebounceInput<HTMLInputElement>)`
  color: hsla(0, 0%, 100%, 0.6);
  width: 100%;
  background-color: hsla(0, 0%, 20%, 0.16) !important;
  border: none;
  outline: none;
  border-radius: 24px;
  height: 100%;
`;

export const SearchWrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const CloseIcon = styled(RxCross2)`
  cursor: pointer;
`;
