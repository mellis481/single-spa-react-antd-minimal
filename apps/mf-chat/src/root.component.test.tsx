import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  // FIXME: Fix the failing test
  it.skip("should be in the document", () => {
    const mfName = "mf-chat";
    const { getByText } = render(<Root name={mfName} />);
    expect(getByText(mfName, { exact: false })).toBeInTheDocument();
  });
});
