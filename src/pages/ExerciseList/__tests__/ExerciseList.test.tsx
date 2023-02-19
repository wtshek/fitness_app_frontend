import { render } from "@testing-library/react";
import * as ExerciseApi from "##/services/api/exercise";
import { ExerciseList } from "../ExerciseList";

describe("Exercise List Page Tests", () => {
  it("should render the exercise list page", () => {
    const fetchExerciseByGroupSpy = jest.spyOn(
      ExerciseApi,
      "fetExerciseListByGroup"
    );
    render(<ExerciseList />);
    expect(fetchExerciseByGroupSpy).toHaveBeenCalledTimes(1);
  });
});
