import { render, screen } from "@testing-library/react";
import { Filter } from "./Filter";

describe("filter", () => {
  it("render titleFilter", () => {
    render(<Filter tracks={[]} />);
    const text = screen.getAllByText("Искать по:");
    expect(text.length).toBeGreaterThan(0);
  });
});