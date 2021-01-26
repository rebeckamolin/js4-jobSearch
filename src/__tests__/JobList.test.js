import React from "react";
import { mount } from "enzyme";
import PrevJobContextProvider from "../contexts/PrevJobContextProvider";
import HomePage from "../pages/HomePage";

describe("Test JobList", () => {
  it("render JobList if available", () => {
    const wrapper = mount(
      <PrevJobContextProvider>
        <HomePage />
      </PrevJobContextProvider>
    );
    expect(wrapper.find(HomePage).exists()).toEqual(true);
  });
});
