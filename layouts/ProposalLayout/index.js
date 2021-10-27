import { styled } from "stitches.config";

import BankFillIcon from "remixicon-react/BankFillIcon";

import Button from "components/Button";

import Header from "./Header";
import Footer from "./Footer";

const ProposalLayoutContainer = styled("div", {
  display: "grid",
  gridTemplateAreas: `
    "header"
    "content"
    "footer"
  `,
  gridTemplateRows: "auto 1fr auto",
  gridTemplateColumns: "1fr",
  width: "100%",
  height: "100%",
  gap: "$x-large",
});

const ProposalLayoutHeader = styled("div", {
  display: "flex",
  girdArea: "header",
  width: "100%",
  justifyContent: "center",
  px: "$regular"
});

const ProposalLayoutContent = styled("div", {
  girdArea: "content",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: "$regular"
});

const ProposalLayoutFooter = styled("div", {
  girdArea: "footer",
  width: "100%",
});

const Layout = ({ children }) => {
  return (
    <>
      <ProposalLayoutContainer>
        <ProposalLayoutHeader>
          <Header
            CallToAction={<Button label="Ape in" Icon={BankFillIcon} />}
          />
        </ProposalLayoutHeader>

        <ProposalLayoutContent>{children}</ProposalLayoutContent>

        <ProposalLayoutFooter>
          <Footer />
        </ProposalLayoutFooter>
      </ProposalLayoutContainer>
    </>
  );
};

export default Layout;
