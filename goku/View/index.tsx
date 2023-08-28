import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ViewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const defaultStyle: CSSProperties = {
  alignItems: "stretch",
  borderWidth: 0,
  borderStyle: "solid",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  margin: 0,
  padding: 0,
  flexShrink: 0,
  position: "relative",
  overflow: "hidden",
};

const View: FC<ViewProps> = (props) => {
  return <div {...props} style={{ ...defaultStyle, ...props?.style }} />;
};

export { View };
