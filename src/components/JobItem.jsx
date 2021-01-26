import React from "react";
import styled from "styled-components";

const JobCardDetails = styled.div`
  padding: 7px;
  align-self: left;
`;

const JobItem = ({ job }) => {
  return (
    <JobCardDetails>
      <strong>{job.type}</strong>
      <h2>{job.title}</h2>
      <a href={job.company_url}>{job.company}</a>
      <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
      <img src={job.company_logo} alt={job.company} height="50px" />
    </JobCardDetails>
  );
};
export default JobItem;
