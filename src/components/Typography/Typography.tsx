import { FC, useMemo } from "react";
import cx from "classnames";

export enum TYPOGRAPHY_SIZE {
  MOBILE_HEADING = "mobileHeading",
  MOBILE_SMALL_TEXT = "mobileSmallText",
  TEXT = "text",
}

export enum TYPOGRAPHY_COLOR {
  WHITE = "white",
  GRAY = "gray",
}

export enum TYPOGRAPHY_STYLE {
  ITALIC = "italic",
}

type TextProps = {
  children: React.ReactNode;
  size?: TYPOGRAPHY_SIZE;
  color?: TYPOGRAPHY_COLOR;
  fontStyle?: TYPOGRAPHY_STYLE;
  className?: string;
};

export const Typography: FC<TextProps> = ({
  className,
  size = TYPOGRAPHY_SIZE.TEXT,
  color = TYPOGRAPHY_COLOR.WHITE,
  fontStyle,
  children,
}) => {
  const colorClass = useMemo(() => {
    if (color === TYPOGRAPHY_COLOR.GRAY) return "text-gray";

    return "text-white";
  }, [color]);

  const sizeClass = useMemo(() => {
    if (size === TYPOGRAPHY_SIZE.MOBILE_HEADING) return "text-xl";
  }, [size]);

  const fontWeightClass = useMemo(() => {
    if (size === TYPOGRAPHY_SIZE.MOBILE_HEADING) return "font-bold";
  }, [size]);

  const fontStyleClass = useMemo(() => {
    if (fontStyle === TYPOGRAPHY_STYLE.ITALIC) return "italic";
  }, [fontStyle]);

  return (
    <div
      className={cx(
        colorClass,
        sizeClass,
        fontWeightClass,
        fontStyleClass,
        className
      )}
    >
      {children}
    </div>
  );
};
