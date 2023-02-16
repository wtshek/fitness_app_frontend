import { FC, ReactNode, useState } from "react";
import { TextGray } from "../Typography";

export type ImageProps = {
  imagePath: string;
  width: number;
  height: number;
  fallbackString?: string;
  imageClassName?: string;
  containerClassName?: string;
  fallbackImage?: ReactNode;
};

export const Image: FC<ImageProps> = ({
  imagePath,
  imageClassName,
  containerClassName,
  fallbackImage,
  fallbackString,
  width,
  height,
}) => {
  const [shouldUseFallbackString, setShouldUseFallbackString] = useState(false);

  const onImageError = ({ currentTarget }: { currentTarget: any }) => {
    if (fallbackImage) {
      currentTarget.onerror = null;
      currentTarget.src = fallbackImage;
      return;
    }

    setShouldUseFallbackString(true);
  };

  return (
    <div className={containerClassName}>
      {shouldUseFallbackString ? (
        <TextGray>{fallbackString}</TextGray>
      ) : (
        <img
          className={imageClassName}
          src={imagePath}
          alt={imagePath}
          onError={onImageError}
          height={height}
          width={width}
        />
      )}
    </div>
  );
};
