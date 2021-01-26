import React, { useState, useEffect } from "react";
import JobItem from "../components/JobItem";
import { useHistory } from "react-router-dom";
import { Background, ReturnButton } from "../styles/DetailPage.styles";

const DetailPage = (props) => {
  const [job, setJob] = useState([]);
  const id = props.match.params.id;
  const history = useHistory();

  useEffect(() => {
    getJob();
    // eslint-disable-next-line
  }, []);

  const getJob = () => {
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJob(data));
  };
  return (
    <Background>
      <h1>Job Details</h1>
      <ReturnButton onClick={() => history.goBack()}>Go Back</ReturnButton>
      <JobItem job={job} />
    </Background>
  );
};
export default DetailPage;