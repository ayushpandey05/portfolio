import type { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
  variant?: "glass" | "solid";
  corners?: boolean;
  as?: "div" | "article" | "aside" | "section";
};

export function Panel({
  children,
  className = "",
  variant = "solid",
  corners = false,
  as: Tag = "div",
}: PanelProps) {
  const surface =
    variant === "glass"
      ? "border-panel-border bg-panel-glass backdrop-blur-xl"
      : "border-panel-border bg-panel";

  return (
    <Tag
      className={`rounded-2xl border ${surface} ${
        corners ? "panel-corners" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
