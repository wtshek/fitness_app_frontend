import { render } from "@testing-library/react";
import { BottomNavBar } from "../BottomNavBar";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }: { children: JSX.Element }) => <div>{children}</div>,
  useLocation: () => "/",
}));

describe("BottomNavBar Test", () => {
  it("should render bottom nav bar", () => {
    const { container } = render(<BottomNavBar />);
    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="fixed bottom-0 flex flex-row justify-between w-screen bg-transparent backdrop-blur-md"
  >
    <button
      class="text-white w-1/2 py-4 font-bold"
    >
      <div>
        Workout
      </div>
    </button>
    <button
      class="text-white w-1/2 py-4 font-bold"
    >
      <div>
        Exercises
      </div>
    </button>
  </div>
</div>
`);
  });
});
