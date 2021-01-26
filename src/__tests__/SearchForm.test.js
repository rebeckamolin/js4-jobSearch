import React from "react";
import { mount } from "enzyme";
import SearchForm from "../components/SearchForm";
import PrevJobContextProvider from "../contexts/PrevJobContextProvider";

describe("Test SearchForm", () => {
  it("renders SearchForm correctly", () => {
    const wrapper = mount(
      <PrevJobContextProvider>
        <SearchForm />
      </PrevJobContextProvider>
    );
    expect(wrapper.find("form").exists()).toBe(true);
  });
  it("render input correclty", () => {
    const wrapper = mount(
      <PrevJobContextProvider>
        <SearchForm />
      </PrevJobContextProvider>
    );
    expect(wrapper.find("input").exists()).toBe(true);
  });
  it("render SearchButton correctly", () => {
    const wrapper = mount(
      <PrevJobContextProvider>
        <SearchForm />
      </PrevJobContextProvider>
    );
    expect(wrapper.find("button").exists()).toBe(true);
  });
});