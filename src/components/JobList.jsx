import React from "react";
import { useHistory } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import styled from "styled-components";

const TestDiv = styled.div`
  display: grid;
  grid-template-columns: 500px 500px;
  grid-template-rows: auto;
  gap: 1.5rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const JobCard = styled.div`
  background: whitesmoke;
  padding: 7px;
  align-self: left;
  border-radius: 4px;
  box-shadow: 0 0.5px 1px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const JobListStyle = styled.li`
  list-style: none;
`;

const JobList = ({ jobSearchRes }) => {
  const history = useHistory();
  return (
    <TestDiv>
      {jobSearchRes &&
        jobSearchRes.map((job) => (
          <JobCard>
            <JobListStyle
              key={job.id}
              onClick={() => history.push(`/job/${job.id}`)}
            >
              <h3>{job.title}</h3>
              <ShowMoreText lines={3} more="Show more" width={280}>
                <div
                  dangerouslySetInnerHTML={{ __html: job.description }}
                ></div>
              </ShowMoreText>
            </JobListStyle>
          </JobCard>
        ))}
    </TestDiv>
  );
};
export default JobList;
