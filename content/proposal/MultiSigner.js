import { styled } from "stitches.config";

const MultiSignerWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

const MultiSignerAvatar = styled("div", {
  display: "flex",
  mr: "$small",
});

function Multisigner({ Avatar, label }) {
  return (
    <MultiSignerWrapper>
      <MultiSignerAvatar>{Avatar}</MultiSignerAvatar>
      <span>{label}</span>
    </MultiSignerWrapper>
  );
}

export default Multisigner;
