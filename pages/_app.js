import { SSRProvider } from "@react-aria/ssr";

import { globalCss } from "stitches.config";

const globalStyles = globalCss({
  html: {
    height: "100%",
    width: "100%",
    "fontSize": "17px",

    "@bp1": {
      fontSize: "20px",
    }
  },
  body: {
    margin: 0,
    minHeight: "100%",
    width: "100%",
    fontFamily: "$default",
    color: "$text-body",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
  "#__next": {
    minHeight: "100%",
    width: "100%",
  },
  "*": {
    boxSizing: "border-box",
    position: "relative",
  },
});

function MyApp({ Component, pageProps }) {
  globalStyles();

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
