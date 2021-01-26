import React, { useContext, useState } from "react";
import JobList from "../components/JobList";
import { PrevJobContext } from "../contexts/PrevJobContextProvider";
import {
  Input,
  SearchButton,
  Text,
  SearchPanel,
  Form,
} from "../styles/SearchForm.styles";

const SearchForm = () => {
  const [jobSearchRes, setJobSearchRes] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { prevJobSearches, setPrevJobSearches} = useContext(
    PrevJobContext
  );

  const getJobs = (search) => {
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobSearchRes(data);
        setPrevJobSearches({ ...prevJobSearches, [search]: data });
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);

    const search = searchTerm.replaceAll(" ", "+");

    if (!prevJobSearches.hasOwnProperty(search)) {
      getJobs(search);
      console.log("prev search not found");
    } else {
      console.log("prev search found");
      setJobSearchRes(prevJobSearches[search]);
    }
    console.log(prevJobSearches);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <SearchPanel>
        <Input
          placeholder="Enter your search term"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></Input>
        <SearchButton type="submit">Search</SearchButton>
      </SearchPanel>
      {jobSearchRes && <JobList jobSearchRes={jobSearchRes} />}
      {jobSearchRes && jobSearchRes.length === 0 && (
        <Text>No jobs found :(</Text>
      )}
    </Form>
  );
};
export default SearchForm;
