import * as React from "react";

import SideNav from "components/SideNav";

import { styled } from "stitches.config";

import { MDXProvider } from "@mdx-js/react";

const H1 = styled("h1", {
  textStyle: "$header-1",

  my: "$large",

  "&:first-of-type": {
    mt: "$none",
  },
});

const H2 = styled("h2", {
  textStyle: "$header-2",
  mb: "$regular",
  mt: "$large",
});

const H3 = styled("h3", {
  textStyle: "$header-3",
  mb: "$regular",
  mt: "$large",
});

const H4 = styled("h4", {
  textStyle: "$header-4",
  mb: "$regular",
  mt: "$large",
});

const P = styled("p", {
  textStyle: "$body",
  mb: "$large",
  mt: "$none",
});

const Strong = styled("strong", {
  fontWeight: "$semi-bold",
});

const Em = styled('em', {
  fontStyle: 'italic',
});

const UnorderedList = styled('ul', {
  padding: 0,
  margin: 0,
  listStyle: 'none',
})

const ListItem = styled('li', {
  textStyle: "$body",
  display: 'flex',
})

const ListStyleDisc = styled('span', {
  mr: '$small'
})

const Block = styled("div", {
  mb: "$large",
  mt: "$none",
});

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const MDXContentContainer = styled("section", {
  display: "grid",
  gridTemplateAreas: `
    "title"
    "content"
  `,
  gridGap: "$large",
  maxWidth: 1234,

  '@bp3': {
    gridTemplateAreas: `
      "title ."
      "content sidenav"
    `,
    gridTemplateColumns: "minmax(auto, 720px)",
  }
});

const MDXContentSideNav = styled("aside", {
  display: 'none',
  gridArea: "sidenav",
  flexGrow: 0,
  flexShrink: 1,
  width: "100%",
  order: 1,

  '@bp3': {
    display: 'block'
  }
});

const MDXContentSideNavSticky = styled("div", {
  position: "sticky",
  top: 20,
});

const MDXContentWrapper = styled("article", {
  gridArea: "content",
  overflowX: 'hidden',
});

const MDXContentTitle = styled("h1", {
  textStyle: "$header-1",
  gridArea: "title",
  margin: 0,
});

function Wrapper(props) {
  let { title, headings, children } = React.useMemo(() => {
    let children = React.Children.toArray(props.children);

    const headings = children
      .filter((child) => child.props.mdxType === "h2")
      .map((heading) => heading.props.children);

    let title = undefined;

    if (children?.[0]?.props.mdxType === "h1") {
      [title, ...children] = children;

      title = title.props.children;
    }

    return {
      title,
      headings,
      children,
    };
  }, [props.children]);

  return (
    <MDXContentContainer>
      <MDXContentTitle>{title}</MDXContentTitle>
      <MDXContentWrapper>
        {React.Children.map(children, (child) => {
          if (child.props.originalType === child.props.mdxType) {
            return child;
          }

          return <Block>{child}</Block>;
        })}
      </MDXContentWrapper>
      <MDXContentSideNav>
        <MDXContentSideNavSticky>
          <SideNav title="On this page">
            {headings.map((heading) => (
              <SideNav.Item
                key={heading}
                href={`#${slugify(heading)}`}
                label={heading}
              />
            ))}
          </SideNav>
        </MDXContentSideNavSticky>
      </MDXContentSideNav>
    </MDXContentContainer>
  );
}

const components = {
  wrapper: (props) => {
    return <Wrapper {...props} />;
  },
  h1: ({ children }) => {
    return <H1>{children}</H1>;
  },
  h2: ({ children }) => {
    return <H2 id={slugify(children)}>{children}</H2>;
  },
  h3: ({ children }) => {
    return <H3>{children}</H3>;
  },
  h4: ({ children }) => {
    return <H4>{children}</H4>;
  },
  p: ({ children }) => {
    return <P>{children}</P>;
  },
  strong: ({ children }) => {
    return (<Strong>{children}</Strong>)
  },
  em: ({ children }) => {
    return (<Em>{children}</Em>)
  },
  ul: ({ children }) => {
    return (
      <UnorderedList>
        {children}
      </UnorderedList>
    )
  },
  li: ({ children }) => {
    return (
      <ListItem>
        <ListStyleDisc>
          &#8226;
        </ListStyleDisc>
        {children}
      </ListItem>
    )
  }
};

function Provider({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}

function Home({ children }) {
  return <Provider>{children}</Provider>;
}

export default Home;
