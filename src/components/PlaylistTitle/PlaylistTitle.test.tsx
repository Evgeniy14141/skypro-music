import { render, screen } from "@testing-library/react";
import { PlaylistTitle } from "./PlaylistTitle";
import '@testing-library/jest-dom'

describe("PlaylistTitle", () => {
  it("render PlaylistTitle", () => {
    render(<PlaylistTitle />);
    const text = screen.getByText("Трек");
    expect(text).toBeInTheDocument();
  });
});