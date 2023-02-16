import { FC } from "react";
import cx from "classnames";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const Text: FC<TextProps> = ({ className, children }) => {
  return <div className={cx("text-white", className)}>{children}</div>;
};

export const TextGray: FC<TextProps> = ({ className, children }) => {
  return <div className={cx("text-gray", className)}>{children}</div>;
};
