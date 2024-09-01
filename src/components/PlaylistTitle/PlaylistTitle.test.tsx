import { render, screen } from "@testing-library/react";
import { PlaylistTitle } from "./PlaylistTitle";
import "@testing-library/jest-dom";

describe("PlaylistTitle", () => {
  it("render PlaylistTitle", () => {
    render(<PlaylistTitle />);
    const text = screen.getByText("Трек");
    expect(text).toBeInTheDocument();
  });
});


/* import { render, screen } from "@testing-library/react";
import { PlaylistTitle } from "@/components/PlaylistTitle/PlaylistTitle";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { initialState } from "@/store/features/tracksSlice";

describe("playlist", () => {
  const mockStore = configureStore([]);
  let store = mockStore({ playlist: initialState });
  it("render playlist", () => {
    const component = render(
      <Provider store={store}>
        <PlaylistTitle  tracks={[]}/>
      </Provider>
    );
    const textSinger = screen.getAllByText("Исполнитель");
    expect(textSinger.length).toBeGreaterThan(0);
    const textAlbum = screen.getAllByText("Альбом");
    expect(textAlbum.length).toBeGreaterThan(0);
  });
}); */