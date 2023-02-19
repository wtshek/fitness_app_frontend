import axios from "axios";
import { BASE_URL } from "./utils";
import { ExerciseGroupType, ExerciseType } from "##/utils/types";

export const fetchExerciseGroups = async (): Promise<ExerciseGroupType[]> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/exercise-groups`);

    return data;
  } catch (e) {
    console.error("[fetchExerciseGroups]", e);
    return [];
  }
};

export const fetExerciseListByGroup = async (
  groupName: string
): Promise<ExerciseType[]> => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/exercise-groups/${groupName}`
    );
    return data;
  } catch (e) {
    console.error("[fetchExerciseListByGroup]", e);
    return [];
  }
};
