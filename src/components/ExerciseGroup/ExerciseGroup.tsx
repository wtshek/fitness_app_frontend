import { FC } from "react";
import { Link } from "react-router-dom";
import { Text } from "##/components/Typography";
import { Image } from "##/components/Image";

type ExerciseGroupProps = {
  name: string;
  path: string;
  imagePath?: string;
};

const EXERCISE_GROUP_IMAGE_WIDTH = 48;
const EXERCISE_GROUP_IMAGE_HEIGHT = 48;

const PATH_PREFIX = "/exercise";

export const ExerciseGroup: FC<ExerciseGroupProps> = ({
  imagePath,
  name,
  path,
}) => {
  return (
    <Link to={`${PATH_PREFIX}${path}`}>
      <div className="flex flex-col justify-center items-center">
        <Image
          imagePath={imagePath || ""}
          width={EXERCISE_GROUP_IMAGE_WIDTH}
          height={EXERCISE_GROUP_IMAGE_HEIGHT}
          containerClassName={`flex justify-center items-center w-24 h-24 rounded-full border-solid border-2 border-gray`}
          fallbackString={name}
        />
        <Text className="mt-2">{name}</Text>
      </div>
    </Link>
  );
};
