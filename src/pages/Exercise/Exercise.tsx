import { FC } from "react";

import { ExerciseListByGroup } from "##/data/exercises";
import {
  TYPOGRAPHY_COLOR,
  TYPOGRAPHY_SIZE,
  TYPOGRAPHY_STYLE,
  Typography,
} from "##/components/Typography";

// get the exercise
// from the exercise, get the machine and muscle group photos

const mockData = ExerciseListByGroup[0];

const EXERCISE_IMAGE_WIDTH = 375;

export const Exercise: FC = () => {
  const {
    image,
    video,
    instruction,
    title,
    description,
    equipment,
    exercise_groups,
  } = mockData;
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-no-repeat bg-center bg-cover w-screen h-[300px]"
      />
      <div className="m-4">
        <Typography size={TYPOGRAPHY_SIZE.MOBILE_HEADING}>{title}</Typography>
        <Typography
          color={TYPOGRAPHY_COLOR.GRAY}
          fontStyle={TYPOGRAPHY_STYLE.ITALIC}
          className="mt-4"
        >
          Description
        </Typography>
        <Typography>{description}</Typography>
        <Typography
          color={TYPOGRAPHY_COLOR.GRAY}
          fontStyle={TYPOGRAPHY_STYLE.ITALIC}
          className="mt-4"
        >
          Instruction
        </Typography>
        <Typography>{instruction}</Typography>
      </div>
    </>
  );
};
