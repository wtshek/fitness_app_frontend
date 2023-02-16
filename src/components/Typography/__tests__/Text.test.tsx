import { render } from "@testing-library/react";
import { Text } from "##/components/Typography";

describe("Text Tests", () => {
  it("should render text", () => {
    const { container } = render(<Text>Hi</Text>);
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
