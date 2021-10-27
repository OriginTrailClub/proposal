import { useRef } from "react";

import { useButton } from "@react-aria/button";
import { useId } from "@react-aria/utils";

import TelegramFillIcon from "remixicon-react/TelegramFillIcon";
import DiscordFillIcon from "remixicon-react/DiscordFillIcon";
import RedditFillIcon from "remixicon-react/RedditFillIcon";
import MediumFillIcon from "remixicon-react/MediumFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";

import VisuallyHidden from "components/VisuallyHidden";
import Tooltip from "components/Tooltip";

import { styled } from "stitches.config";

import Logo from "./Logo";

const FooterOriginTrailCommunityInfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  maxWidth: 376,
});

const FooterOriginTrailCommunityInfoContent = styled("p", {
  textStyle: "$body-secondary",
  color: "$text-subtle",
  my: "$regular"
});

const FooterOriginTrailCommunityInfoLogo = styled("div", {
  display: "inline-flex",
  height: "100%",
  height: 32,
  width: "100%",
});

function FooterOriginTrailCommunityInfo() {
  return (
    <FooterOriginTrailCommunityInfoContainer>
      <FooterOriginTrailCommunityInfoLogo>
        <Logo />
      </FooterOriginTrailCommunityInfoLogo>
      <FooterOriginTrailCommunityInfoContent>
        OriginTrail is powered by an amazing community and core developers,
        Trace Lab
      </FooterOriginTrailCommunityInfoContent>
    </FooterOriginTrailCommunityInfoContainer>
  );
}

const FooterOriginTrailCommunityLinkElement = styled("a", {
  display: "flex",
});

function FooterOriginTrailCommunityLink(props) {
  let ref = useRef();

  let { Icon, label, href } = props;

  let { buttonProps } = useButton(props, ref);

  return (
    <FooterOriginTrailCommunityLinkElement
      {...buttonProps}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
    >
      <FooterOriginTrailCommunityIcon as={Icon} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </FooterOriginTrailCommunityLinkElement>
  );
}

function FooterOriginTrailCommunitySocial(props) {
  return (
    <Tooltip.Trigger>
      <FooterOriginTrailCommunityLink {...props} />
      <Tooltip label={props.label} />
    </Tooltip.Trigger>
  );
}

const FooterOriginTrailCommunityIcon = styled("span", {
  color: "$gray-600",
  width: 24,
  height: 24,
  "&:hover": {
    color: "$gray-900",
  },
});

const FooterOriginTrailCommunityList = styled("ul", {
  display: "flex",
  listStyle: "none",
  alignItems: "flex-end",
  m: 0,
  px: 0,
  pt: '$small',
  pb: '$regular',
});

const FooterOriginTrailCommunityListItem = styled('li', {
  mx: '$x-small',
  '&:first-child': {
    ml: 0,
  },
  '&:last-child': {
    mr: 0,
  }
})

function FooterOriginTrailCommunitySocials() {
  return (
    <FooterOriginTrailCommunityList>
      <FooterOriginTrailCommunityListItem>
        <FooterOriginTrailCommunitySocial
          href="https://github.com/origintrail"
          label="Github"
          Icon={GithubFillIcon}
        />
      </FooterOriginTrailCommunityListItem>
      <FooterOriginTrailCommunityListItem>
        <FooterOriginTrailCommunitySocial
          href="https://discord.gg/k4W8Jk9T"
          label="Discord"
          Icon={DiscordFillIcon}
        />
      </FooterOriginTrailCommunityListItem>
      <FooterOriginTrailCommunityListItem>
        <FooterOriginTrailCommunitySocial
          href="https://twitter.com/origin_trail"
          label="Twitter"
          Icon={TwitterFillIcon}
        />
      </FooterOriginTrailCommunityListItem>
      <FooterOriginTrailCommunityListItem>
        <FooterOriginTrailCommunitySocial
          href="https://www.reddit.com/r/OriginTrail/"
          label="Reddit"
          Icon={RedditFillIcon}
        />
      </FooterOriginTrailCommunityListItem>
      <FooterOriginTrailCommunityListItem>
        <FooterOriginTrailCommunitySocial
          href="https://t.me/OriginTrail/"
          label="Telegram"
          Icon={TelegramFillIcon}
        />
      </FooterOriginTrailCommunityListItem>
      <FooterOriginTrailCommunityListItem>
        <FooterOriginTrailCommunitySocial
          href="https://origintrail.medium.com/"
          label="Medium"
          Icon={MediumFillIcon}
        />
      </FooterOriginTrailCommunityListItem>
    </FooterOriginTrailCommunityList>
  );
}

const FooterOriginTrailCommunityContainer = styled("aside", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  px: "$regular"
});

const FooterOriginTrailCommunityContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: 'column',
  width: "100%",
  maxWidth: 1234,

  '@bp1': {
    flexDirection: 'row',
    alignItems: "flex-end",
  }
});

function FooterOriginTrailCommunity() {
  return (
    <FooterOriginTrailCommunityContainer aria-label="Origin Trail Community">
      <FooterOriginTrailCommunityContent>
        <FooterOriginTrailCommunityInfo />
        <FooterOriginTrailCommunitySocials />
      </FooterOriginTrailCommunityContent>
    </FooterOriginTrailCommunityContainer>
  );
}

const FooterProjectContainer = styled("footer", {
  display: "flex",

  p: "$regular",

  borderWidth: 0,
  borderTopWidth: 1,
  borderStyle: "solid",
  borderTopColor: "$gray-200",

  width: "100%",

  justifyContent: "center",
});

const FooterProjectContent = styled("div", {
  display: "flex",

  maxWidth: 1234,
  width: "100%",

  '@bp1': {
    justifyContent: "flex-end",
  }
});


const FooterProjectCommunity = styled("div", {
  textStyle: "$body-compact",
  color: "$text-subtle",
  display: "inline-flex",
  alignItems: "flex-end",
});

const FooterProjectCommunityLoveContainer = styled("div", {
  display: "inline-flex",
  color: "$indigo-400",
});

function FooterProjectCommunityLove() {
  const clipPathId = useId();

  return (
    <FooterProjectCommunityLoveContainer>
      <VisuallyHidden>love</VisuallyHidden>
      <svg
        width={16}
        height={16}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath={`url(${clipPathId})`} strokeMiterlimit={10}>
          <path
            d="M16.092 28.124c-.46-.497-.828-.994-1.287-1.49C11.402 22.956 8 19.379 4.69 15.702c-2.115-2.187-2.667-4.87-1.84-7.752.828-2.782 2.667-4.472 5.242-5.068 1.839-.497 3.586-.1 5.241 1.093.92.596 1.563 1.391 2.115 2.286.276.497.736.497 1.104 0 1.287-2.087 3.034-3.28 5.333-3.478 1.931-.2 3.678.397 5.15 1.788 1.747 1.59 2.574 3.677 2.482 6.162-.092 1.789-.643 3.478-1.839 4.77-2.483 2.683-4.965 5.366-7.356 8.05-1.38 1.391-2.759 2.981-4.23 4.571z"
            fill="#DC3B62"
            stroke="#DC3B62"
            strokeWidth={5.406}
          />
          <path
            d="M16.092 5.068c.46-.497 1.103-1.093 1.655-1.59 1.195-.994 2.575-1.49 4.046-1.49 2.299-.1 4.23.695 5.885 2.385 1.655 1.69 2.483 3.776 2.483 6.26 0 1.79-.46 3.38-1.471 4.77-.46.696-1.104 1.392-1.656 1.988-2.39 2.684-4.873 5.267-7.264 7.95-1.103 1.193-2.115 2.286-3.126 3.479-.368.497-.644.497-1.104 0-1.195-1.193-2.299-2.485-3.494-3.677-2.667-2.882-5.333-5.665-8-8.646-2.023-2.385-2.759-5.267-1.84-8.547.553-2.087 1.748-3.677 3.403-4.87 1.196-.794 2.575-1.192 4.046-1.192 2.115 0 3.862.696 5.425 2.286.368.298.736.596 1.012.894zm0 22.659c1.38-1.59 2.759-3.081 4.138-4.572 2.39-2.584 4.781-5.167 7.172-7.85 1.104-1.293 1.747-2.883 1.747-4.572.092-2.385-.735-4.373-2.39-5.963-1.472-1.391-3.127-1.888-5.058-1.69-2.207.2-3.954 1.392-5.15 3.38-.275.497-.735.497-1.01 0-.553-.895-1.196-1.69-2.116-2.286-1.563-1.093-3.31-1.49-5.057-.994-2.483.596-4.322 2.286-5.058 4.97-.827 2.881-.276 5.465 1.655 7.552 3.219 3.577 6.53 7.056 9.84 10.633l1.287 1.392z"
            fill="#000"
            stroke="#000"
            strokeWidth={0.269}
          />
          <path
            d="M10.942 4.969c-3.954-.199-6.16 2.484-6.16 6.46"
            stroke="#fff"
            strokeWidth={1.081}
          />
        </g>
        <defs>
          <clipPath id={clipPathId}>
            <path fill="#fff" d="M0 0h32v32H0z" />
          </clipPath>
        </defs>
      </svg>
    </FooterProjectCommunityLoveContainer>
  );
}

function FooterProject() {
  return (
    <FooterProjectContainer>
      <FooterProjectContent>
        <FooterProjectCommunity>
          Made with&nbsp;
          <FooterProjectCommunityLove />
          &nbsp;by the community
        </FooterProjectCommunity>
      </FooterProjectContent>
    </FooterProjectContainer>
  );
}

function Footer() {
  return (
    <>
      <FooterOriginTrailCommunity />
      <FooterProject />
    </>
  );
}

export default Footer;
