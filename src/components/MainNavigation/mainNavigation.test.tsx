import { MainNavigation } from "./MainNavigation";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { initialState } from "@/store/features/userSlice";

describe("Navigation component", () => {
  const mockStore = configureStore([]);
  let store = mockStore({ user: initialState });
  it("render Navigation", () => {
    const component = render(
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
});
