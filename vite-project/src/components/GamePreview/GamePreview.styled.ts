import { YoutubeVideo } from "../YoutubeVideo/YoutubeVideo";
import styled from "styled-components";

export const Wrapper = styled.div<{ height: number | null }>`
  position: relative;
  width: 100%;
  margin-bottom: ${(props) => (props.height && props.height > 340 ? 2 : 1)}rem;
  height: ${(props) => props.height}px;
`;

export const Container = styled.div<{ zIndex: boolean }>`
  z-index: ${(props) => (props.zIndex ? 100 : 1)};
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  transition: all 0.3s;
  border-radius: 0.75rem;
  background-color: #202020;
  height: fit-content;
  margin-bottom: 24px;
  :hover {
    transform: scale(1.02);
  }
`;

export const ContainerSkeleton = styled.div`
  width: 100%;
  height: 100%;

  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 80%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;

export const Trailer = styled(YoutubeVideo)`
  position: absolute;
  border-radius: 0.75rem 0.75rem 0 0;
`;

export const MediaContainer = styled.div`
  position: relative;
`;

export const Image = styled.img<{ visible: boolean }>`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  border-radius: 0.75rem 0.75rem 0 0;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  max-height: 215px;
`;

export const InfoContainer = styled.div`
  padding: 16px 16px 24px;
`;

export const Info = styled.div`
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
`;

export const Platforms = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
`;

export const Platform = styled.img`
  height: 13px;
  background-color: #202020;
`;

export const Rating = styled.div<{ rating: number | null }>`
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  color: hsl(${(props) => props.rating || 0}, 100%, 50%);
  padding: 2px 0;
  height: 100%;
  font-weight: 700;
  text-align: center;
  border-radius: 4px;
  border: 1px solid;
  width: 30px;
`;

export const Title = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  padding-bottom: 2px;
  margin-bottom: 8px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
`;

export const Likes = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: hsla(0, 0%, 100%, 0.1);
  font-size: 12px;
  font-weight: 400;
  min-width: 34px;
  min-height: 24px !important;
  padding: 0 8px;
  color: hsla(0, 0%, 100%, 0.4);
  line-height: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  transition: all 0.3s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Plus = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 5px;
`;

export const AdditionalInfo = styled.div`
  margin-top: 4px;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:not(:last-of-type) {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.07);
  }

  padding: 12px 0;
`;

export const InfoTitle = styled.span`
  color: hsla(0, 0%, 100%, 0.4);
  font-size: 14px;
`;

export const InfoValue = styled.span`
  font-size: 12px;
  line-height: normal;
  font-weight: 400;
  text-align: right;
`;
