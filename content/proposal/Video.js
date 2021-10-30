import { styled } from "stitches.config";

const VideoContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const VideoLabel = styled("span", {
  textAlign: "center",
  textStyle: "$table-cell",
  py: "$regular",
});

const VideoWrapper = styled("div", {
  paddingBottom: "56.25%",
  height: 0,
  width: "100%",
});

const VideoIframe = styled("iframe", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

function Video() {
  return (
    <VideoContainer>
      <VideoWrapper>
        <VideoIframe
          src="https://www.youtube-nocookie.com/embed/x2JGAfoa3wM"
          title="OriginTrail Community Hub Release Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </VideoWrapper>
      <VideoLabel aria-hidden="true">
        OriginTrail Community Hub Release Video
      </VideoLabel>
    </VideoContainer>
  );
}

export default Video;
