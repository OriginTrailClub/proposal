import * as React from "react";

import { styled } from "stitches.config";

import { useButton } from "@react-aria/button";

import PlayCircleFillIcon from "remixicon-react/PlayCircleFillIcon";
import VisuallyHidden from "components/VisuallyHidden";

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

const VideoPlayIcon = styled("div", {
  width: 48,
  height: 48,
  color: "$indigo-600",

  "@bp1": {
    width: 64,
    height: 64,
  },
});

const VideoPlaceholder = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",

  "&:hover": {
    [VideoPlayIcon]: {
      color: "$indigo-700",
    },
  },
  "&:focus": {
    [VideoPlayIcon]: {
      color: "$indigo-700",
    },
  },
});

const VideoPlaceholderImage = styled("img", {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  height: "100%",
});

const VideoFrame = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

function Video({ placeholder, label, embedId }) {
  const [isRequested, setIsRequested] = React.useState(false);

  let placeholderRef = React.useRef();
  let videoRef = React.useRef();

  React.useLayoutEffect(() => {
    if (isRequested) {
      videoRef.current.focus();
    }
  }, [isRequested]);

  const { buttonProps } = useButton(
    {
      elementType: "div",
      onPress: () => {
        setIsRequested(true);
      },
    },
    placeholderRef
  );

  return (
    <VideoContainer>
      <VideoWrapper>
        <VideoFrame>
          {isRequested ? (
            <VideoIframe
              ref={videoRef}
              src={`https://www.youtube-nocookie.com/embed/${embedId}?autoplay=1`}
              title="OriginTrail Community Hub Release Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : null}
        </VideoFrame>
        {isRequested ? null : (
          <VideoPlaceholder {...buttonProps} ref={placeholderRef}>
            <VideoPlaceholderImage alt={label} src={placeholder} />
            <VisuallyHidden>Play video</VisuallyHidden>
            <VideoPlayIcon as={PlayCircleFillIcon} />
          </VideoPlaceholder>
        )}
      </VideoWrapper>
      <VideoLabel aria-hidden="true">{label}</VideoLabel>
    </VideoContainer>
  );
}

export default Video;
