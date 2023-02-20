import { render } from "@testing-library/react";
import { ExerciseListItem } from "../ExerciseListItem";

describe("ExerciseListItem Tests", () => {
  it("should render the ExerciseListItem", () => {
    const exerciseListItemProps = {
      title: "Example Title",
      equipment: ["Equipment"],
      image: "http://example.com/imaeg",
    };
    const { container } = render(
      <ExerciseListItem {...exerciseListItemProps} />
    );
    expect(container).toMatchInlineSnapshot(`
<div>
  <div>
    <div
      class="flex mt-4 items-center"
    >
      <div
        class="w-12 h-12"
      >
        <img
          alt="http://example.com/imaeg"
          class="rounded-full"
          height="48"
          src="http://example.com/imaeg"
          width="48"
        />
      </div>
      <div
        class="ml-4"
      >
        <div
          class="text-white"
        >
          Example Title
        </div>
        <div
          class="text-white"
        >
          Equipment
        </div>
      </div>
    </div>
  </div>
</div>
`);
  });
});
