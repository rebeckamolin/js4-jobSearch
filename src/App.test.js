import React from "react";
import { mount } from "enzyme";
import HomePage from "./pages/HomePage";
import PrevJobContextProvider from "./contexts/PrevJobContextProvider";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

describe("Test App", () => {
  it("renders HomePage correctly", () => {
    const wrapper = mount(
      <PrevJobContextProvider>
        <BrowserRouter>
          <App>
            <HomePage />
          </App>
        </BrowserRouter>
      </PrevJobContextProvider>
    );
    expect(wrapper.find(HomePage).exists()).toEqual(true);
  });

});
