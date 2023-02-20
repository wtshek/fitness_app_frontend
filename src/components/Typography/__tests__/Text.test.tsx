import { render } from "@testing-library/react";
import { Typography } from "##/components/Typography";

describe("Typography Tests", () => {
  it("should render text", () => {
    const { container } = render(<Typography>Hi</Typography>);
    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="text-white"
  >
    Hi
  </div>
</div>
`);
  });
});
