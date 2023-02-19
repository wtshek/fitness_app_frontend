import { FC, ReactNode, useState } from "react";
import cx from "classnames";
import { TextGray } from "##/components/Typography";

export type ImageProps = {
  imagePath: string;
  width: number;
  height: number;
  imageClassName?: string;
  containerClassName?: string;
  fallbackString?: string;
  fallbackImage?: ReactNode;
  fallbackElement?: ReactNode;
};

export const Image: FC<ImageProps> = ({
  imagePath,
  imageClassName,
  containerClassName,
  fallbackImage,
  fallbackString,
  fallbackElement,
  width,
  height,
}) => {
  const [shouldUseFallback, setShouldUseFallback] = useState(false);

  const onImageError = ({ currentTarget }: { currentTarget: any }) => {
    if (fallbackImage) {
      currentTarget.onerror = null;
      currentTarget.src = fallbackImage;
      return;
    }

    setShouldUseFallback(true);
  };

  if (shouldUseFallback && fallbackString) {
    return (
      <div className={containerClassName}>
        <TextGray>{fallbackString}</TextGray>
      </div>
    );
  }

  if (shouldUseFallback) {
    return (
      <div className={containerClassName}>
        <div className={cx("bg-gray w-full h-full", imageClassName)} />
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <img
        className={imageClassName}
        src={imagePath}
        alt={imagePath}
        onError={onImageError}
        height={height}
        width={width}
      />
    </div>
  );
};
