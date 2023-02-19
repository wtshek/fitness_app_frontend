import { render, act } from "@testing-library/react";
import * as exerciseApi from "##/services/api/exercise";
import { ExerciseGroups } from "##/pages/ExerciseGroups";

jest.mock("axios");

describe("Exercise Groups Page Tests", () => {
  it("should request for exercise group", async () => {
    const fetchExerciseGroupsSpy = jest
      .spyOn(exerciseApi, "fetchExerciseGroups")
      .mockResolvedValue([]);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(<ExerciseGroups />);
    });

    expect(fetchExerciseGroupsSpy).toHaveBeenCalledTimes(1);
  });
});
