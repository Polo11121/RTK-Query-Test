import styled from "styled-components";

export const YoutubeVideo = ({
  className,
  videoId,
}: {
  videoId: string;
  className?: string;
}) => (
  <Iframe
    className={className}
    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&start=30&modestbranding=1&autohide=1&showinfo=0&controls=0`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  />
);

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;
