import { FC } from "react";
import { Link } from "react-router-dom";
import { Typography } from "##/components/Typography";
import { Image } from "##/components/Image";
import { PATH } from "##/utils/constant";

type ExerciseGroupProps = {
  name: string;
  path: string;
  imagePath?: string;
};

const EXERCISE_GROUP_IMAGE_WIDTH = 48;
const EXERCISE_GROUP_IMAGE_HEIGHT = 48;

export const ExerciseGroup: FC<ExerciseGroupProps> = ({
  imagePath,
  name,
  path,
}) => {
  const pathname = PATH.EXERCISE_LIST.replace("/*", path);

  console.log(pathname);

  return (
    <Link to={pathname}>
      <div className="flex flex-col justify-center items-center">
        <Image
          imagePath={imagePath || ""}
          width={EXERCISE_GROUP_IMAGE_WIDTH}
          height={EXERCISE_GROUP_IMAGE_HEIGHT}
          containerClassName={`flex justify-center items-center w-24 h-24 rounded-full border-solid border-2 border-gray`}
          fallbackString={name}
        />
        <Typography className="mt-2">{name}</Typography>
      </div>
    </Link>
  );
};
