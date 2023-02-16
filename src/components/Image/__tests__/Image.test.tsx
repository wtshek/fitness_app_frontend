import { render } from "@testing-library/react";
import { Image } from "../Image";

describe("Image Test", () => {
  it("should render the image component", () => {
    const props = {
      imagePath: "imagePath",
    };
    render(<Image {...props} />);
  });
});
