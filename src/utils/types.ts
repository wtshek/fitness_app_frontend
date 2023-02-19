export type ExerciseGroupType = {
  id: string;
  title: string;
  path: string;
  image?: string;
};

export type ExerciseType = {
  title: string;
  equipment: string[];
  exercise_groups: string;
  description: string;
  image: string;
  video: string;
  instruction: string;
};
