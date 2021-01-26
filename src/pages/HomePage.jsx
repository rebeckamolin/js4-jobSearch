import React from "react";
import { Background, Heading } from "../styles/HomePage.styles";
import SearchForm from "../components/SearchForm";
import JobList from "../components/JobList";

const HomePage = () => {
  return (
    <Background>
      <Heading>Job Search</Heading>
      <SearchForm />
      <JobList />
    </Background>
  );
};
export default HomePage;
