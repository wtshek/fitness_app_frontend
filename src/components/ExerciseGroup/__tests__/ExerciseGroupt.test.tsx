import { render } from "@testing-library/react";
import { ExerciseGroup } from "../ExerciseGroup";

describe("Exercise Group Test", () => {
  it("should return exercise group", () => {
    const props = { imagePath: "", name: "Triceps", path: "/triceps" };
    const { container } = render(<ExerciseGroup {...props} />);

    expect(container).toMatchInlineSnapshot(`
<div>
  <div>
    <div
      class="flex flex-col justify-center items-center"
    >
      <div
        class="flex justify-center items-center w-24 h-24 rounded-full border-solid border-2 border-gray"
      >
        <img
          alt=""
          height="48"
          src=""
          width="48"
        />
      </div>
      <div
        class="text-white mt-2"
      >
        Triceps
      </div>
    </div>
  </div>
</div>
`);
  });
});
