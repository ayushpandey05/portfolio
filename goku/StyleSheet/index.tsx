import { CSSProperties } from "react";

type StyleDefinition<T extends string> = Record<T, CSSProperties>;

function createStyles<T extends string>(
  styles: StyleDefinition<T>
): StyleDefinition<T> {
  return styles;
}

const flatten = (style: CSSProperties | CSSProperties[]) => {
  if (Array.isArray(style)) {
    let newStyle = {};
    for (let index = 0; index < style.length; index++) {
      let styleDoc = style[index];
      for (let key in styleDoc) {
        newStyle[key] = styleDoc[key];
      }
    }
    return newStyle;
  } else {
    return style;
  }
};

const StyleSheet = {
  create: createStyles,
  flatten,
};

export { StyleSheet };
