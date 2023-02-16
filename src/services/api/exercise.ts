import axios from "axios";
import { BASE_URL } from "./utils";
import { ExerciseGroupType } from "##/utils/types";

export const fetchExerciseGroups = async (): Promise<ExerciseGroupType[]> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/exercise-groups`);

    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
