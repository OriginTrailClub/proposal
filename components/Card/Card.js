import * as React from "react";

import { useButton } from "@react-aria/button";

import TelegramFillIcon from "remixicon-react/TelegramFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import YoutubeFillIcon from "remixicon-react/YoutubeFillIcon";
import GlobalLineIcon from "remixicon-react/GlobalLineIcon";

import Avatar from "components/Avatar";
import Tooltip from "components/Tooltip";
import VisuallyHidden from "components/VisuallyHidden";

import useFindElementOfType from "hooks/useFindElementOfType";

import { styled } from "stitches.config";

const CardContainer = styled("article", {
  display: "grid",
  p: "$regular",
  borderWidth: 1,
  borderColor: "$gray-200",
  borderStyle: "solid",
  flexDirection: "column",
  gridTemplateRows: "max-content 1fr max-content",
  gridGap: "$regular",
});

function CardAvatar(props) {
  return <Avatar {...props} />;
}

const CardNameHeading = styled("h3", {
  textStyle: "$header-4",
  margin: 0,
  mb: "$x-small",
});

function CardName({ label }) {
  return <CardNameHeading>{label}</CardNameHeading>;
}

const CardProfessionText = styled("span", {
  textStyle: "$body-secondary",
});

function CardProfession({ label }) {
  return <CardProfessionText>{label}</CardProfessionText>;
}

const CardSocialLinkContainer = styled("a", {
  display: "flex",
  color: "$indigo-600",
  "&:focus": {
    color: "$indigo-700",
  },
  "&:hover": {
    color: "$indigo-700",
  },
});

const CardSocialIcon = styled("span", {
  width: 24,
  height: 24,
});

function CardSocialLink(props) {
  let ref = React.useRef();

  let { Icon, label, href } = props;

  let { buttonProps } = useButton(props, ref);

  return (
    <CardSocialLinkContainer
      {...buttonProps}
      href={href}
      ref={ref}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CardSocialIcon as={Icon} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </CardSocialLinkContainer>
  );
}

const CardSocialsListItem = styled("li", {
  mx: "$x-small",
  "&:first-child": {
    ml: 0,
  },
  "&:last-child": {
    mr: 0,
  },
});

function CardSocial(props) {
  let { label } = props;

  return (
    <CardSocialsListItem>
      <Tooltip.Trigger>
        <CardSocialLink {...props} />
        <Tooltip label={label} />
      </Tooltip.Trigger>
    </CardSocialsListItem>
  );
}

function CardTwitter(props) {
  return (
    <CardSocial
      Icon={TwitterFillIcon}
      href={props.href}
      label={props.username}
    />
  );
}

function CardYoutube(props) {
  return (
    <CardSocial
      Icon={YoutubeFillIcon}
      href={props.href}
      label={props.channel}
    />
  );
}

function CardWebsite(props) {
  return (
    <CardSocial Icon={GlobalLineIcon} href={props.href} label={props.title} />
  );
}

function CardTelegram(props) {
  return (
    <CardSocial
      Icon={TelegramFillIcon}
      href={props.href}
      label={props.username}
    />
  );
}

const CardSocialsList = styled("ul", {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

function CardSocials({ children }) {
  const Twitter = useFindElementOfType(children, Card.Twitter);
  const Telegram = useFindElementOfType(children, Card.Telegram);
  const Youtube = useFindElementOfType(children, Card.Youtube);
  const Website = useFindElementOfType(children, Card.Website);

  return (
    <CardSocialsList>
      {Twitter}
      {Telegram}
      {Youtube}
      {Website}
    </CardSocialsList>
  );
}

const CardFlagContainer = styled("span", {});

function CardFlag({ emoji }) {
  return <CardFlagContainer>{emoji}</CardFlagContainer>;
}

const CardContentContainer = styled("section", {
  textStyle: "$body-secondary",
});

function CardContent({ children }) {
  return <CardContentContainer>{children}</CardContentContainer>;
}

const CardHeader = styled("div", {
  display: "flex",
});

const CardUserInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: 'center',
  ml: "$regular",
});

const CardFooter = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  pt: "$x-small",
});

function Card({ children }) {
  const Avatar = useFindElementOfType(children, Card.Avatar);
  const Name = useFindElementOfType(children, Card.Name);
  const Profession = useFindElementOfType(children, Card.Profession);
  const Content = useFindElementOfType(children, Card.Content);
  const Socials = useFindElementOfType(children, Card.Socials);
  const Flag = useFindElementOfType(children, Card.Flag);

  return (
    <CardContainer>
      <CardHeader>
        {React.cloneElement(Avatar, {
          alt: Name?.props.label ?? "",
          size: "large",
        })}
        <CardUserInfo>
          {Name}
          {Profession}
        </CardUserInfo>
      </CardHeader>
      {Content}
      <CardFooter>
        {Socials}
        {Flag}
      </CardFooter>
    </CardContainer>
  );
}

Card.Avatar = CardAvatar;
Card.Name = CardName;
Card.Profession = CardProfession;
Card.Content = CardContent;

Card.Socials = CardSocials;

Card.Twitter = CardTwitter;
Card.Telegram = CardTelegram;
Card.Youtube = CardYoutube;
Card.Website = CardWebsite;

Card.Flag = CardFlag;

export default Card;
