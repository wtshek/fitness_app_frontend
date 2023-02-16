import { render } from "@testing-library/react";
import { ExerciseGroup } from "../ExerciseGroup";

describe("Exercise Group Test", () => {
  it("should return exercise group", () => {
    const props = { imagePath: "", name: "Triceps", path: "/triceps" };
    render(<ExerciseGroup {...props} />);
  });
});
