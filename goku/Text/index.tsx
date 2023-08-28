import React, { CSSProperties, FC } from "react";
import { StyleSheet } from "../StyleSheet";
// import { getNumberOfLineStyle } from "../Utility";

const getNumberOfLineStyle = (numberOfLines: number) => {
  let ellipsesStyle = {};
  if (numberOfLines === 1) {
    ellipsesStyle = {
      display: "block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    };
  } else if (numberOfLines) {
    ellipsesStyle = {
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: numberOfLines,
    };
  }
  return ellipsesStyle;
};

interface TextProps {
  style?: CSSProperties;
  numberOfLines?: number;
  children?: string;
}

const Text: FC<TextProps> = (props) => {
  let { style = {}, numberOfLines, children = "", ...rest } = props;

  if (Array.isArray(style)) {
    style = StyleSheet.flatten(style);
  }

  let { whiteSpace, lineHeight, ...restStyle } = style;
  //   if (numberOfLines === undefined && propsNumberOfLines !== undefined) {
  //     numberOfLines = propsNumberOfLines;
  //   }
  if (numberOfLines) {
    restStyle = { ...restStyle, ...getNumberOfLineStyle(numberOfLines) };
  }
  if (whiteSpace) {
    // restStyle["whiteSpace"] = whiteSpace; //rohit bansal 20-12-18 to override whiteSpace:pre if given
  }
  if (lineHeight) {
    if (typeof lineHeight === "number") {
      lineHeight = lineHeight + "px";
    }
    // restStyle["lineHeight"] = lineHeight;
  }
  return (
    <text {...rest} style={{ fontFamily: "Roboto", ...restStyle }}>
      {children}
    </text>
  );
};

export { Text };
export type { TextProps };
