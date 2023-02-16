import { render, act, waitFor } from "@testing-library/react";
import * as exerciseApi from "##/services/api/exercise";
import { Exercise } from "##/pages/Exercise";

jest.mock("axios");

describe("Exercise Page Tests", () => {
  it("should request for exercise group", async () => {
    const fetchExerciseGroupsSpy = jest
      .spyOn(exerciseApi, "fetchExerciseGroups")
      .mockResolvedValue([]);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(<Exercise />);
    });

    expect(fetchExerciseGroupsSpy).toHaveBeenCalledTimes(1);
  });
});
