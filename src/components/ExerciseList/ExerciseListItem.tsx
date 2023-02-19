import { ExerciseType } from "##/utils/types";
import { FC } from "react";
import { Image } from "##/components/Image";
import { Text, TextGray } from "##/components/Typography";

const EXERCISE_LIST_ITEM_WIDTH = 48;
const EXERCISE_LIST_ITEM_HEIGHT = 48;

type ExerciseListITemProps = Pick<
  ExerciseType,
  "image" | "title" | "equipment"
>;

export const ExerciseListItem: FC<ExerciseListITemProps> = ({
  image,
  title,
  equipment,
}) => {
  return (
    <div className="flex mt-4 items-center">
      <Image
        imagePath={image}
        width={EXERCISE_LIST_ITEM_WIDTH}
        height={EXERCISE_LIST_ITEM_HEIGHT}
        imageClassName="rounded-full"
        containerClassName="w-12 h-12"
      />
      <div className="ml-4">
        <Text>{title}</Text>
        <TextGray>{equipment.join(" , ")}</TextGray>
      </div>
    </div>
  );
};
