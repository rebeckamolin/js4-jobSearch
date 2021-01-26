import React from "react";
import { mount } from "enzyme";
import JobItem from "../components/JobItem";
import PrevJobContextProvider from "../contexts/PrevJobContextProvider";

const job = {
  company: "Everest Reinsurance ",
  company_logo:
    "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBckdXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3413529e0271077c069a5bde43a52f7240c0a738/Everest_Re_Group_Logo.jpg",
  company_url: "https://www.everestre.com/",
  created_at: "Mon Jan 25 17:07:24 UTC 2021",
  description:
    "<p>Everest is a leading global reinsurance and insurance organization with extensive product and distribution capabilities, a strong balance sheet and an innovative culture. Throughout our history, Everest has maintained its discipline and focus on creating long term value through underwriting excellence and strong risk and capital management.</p>↵<p>At Everest, we believe that our future is determined by the actions we take today. Actions that go beyond business strategy and encompass the values important to our employees and the communities in which we operate. Everest’s value commitments include providing an inclusive work environment that offers employees the opportunity to further their development, supporting our communities through the donation of time and financial resources, maintaining our integrity across all aspects of the group, and being an industry innovator to solve global complex risks.</p>↵<p>Everest Reinsurance, a member of Everest Re Group, Ltd., is seeking a Senior Software Developer for its headquarters in Warren, New Jersey.</p>↵<p>The primary responsibility of this position is to perform analysis, design, development, unit testing and documentation for small-to-medium system implementations. This includes analyzing business requirements to determine optimal technical solutions. As a Senior Software Developer, you will be responsible for new initiative projects for Reinsurance applications and integrated web services modules.</p>↵<p>Responsibilities include, but are not limited to:</p>↵<p>Work in a team setting in relation to design and development activities using approved database and software development tools and methodologies.</p>↵<p>Partner with the solutions architect and development team for implementing technical solutions.</p>↵<p>Use business requirements to develop optimal technical solutions for applications in reinsurance domain specifically for underwriting, claims, accounting &amp; reporting.</p>↵<p>Perform analysis, design, development, unit testing and documentation for small-to-medium system implementations.</p>↵<p>Work on framework layout / design for the application.</p>↵<p>Design, code, test, debug, document and implement software applications according to established standards.</p>↵<p>Participate in data model design creation / implementation.</p>↵<p>Provide input for coordinated test plans and acceptance criteria.</p>↵<p>Perform root cause analysis on issues and provide effective timely technology resolutions.</p>↵<p>Provide ongoing production support (i.e. document, test, implement &amp; business user communication).</p>↵<p>Work with both onshore and offshore development team.</p>↵<p>Work Experience and Qualifications</p>↵<p>Bachelor’s degree in Computer Science or an equivalent combination of education</p>↵<p>5 – 7 years of experience in application program development.</p>↵<p>Microsoft Visual Studio, SSMS, TFS/VSO</p>↵<p>C#, ASP.NET, .NET Core, ADO.NET, Entity Framework (ORM)</p>↵<p>HTML5, Angular, Knockout, Bootstrap, JavaScript, Typescript, CSS</p>↵<p>Web API, JSON, XML, REST</p>↵<p>T-SQL, SQL Server Service, ETL, Database Modeling, Design Patterns</p>↵<p>Knowledge of Agile Methodology, SCRUM framework, SDLC, CI/CD, DevOps.</p>↵<p>Emerging technologies experience like Azure, Python, R is a plus.</p>↵<p>Previous work experience with an insurance/re-insurance/financial services company is a plus.</p>↵<p>Mathematics and Statistics background is a plus.</p>↵<p>Must have strong sense of web design and attuned to the fundamentals of the user experience.</p>↵<p>Ability to work constructively in a team environment as well as independently.</p>↵<p>Good verbal, written, interpersonal, and presentation skills.</p>↵",
  how_to_apply:
    '<p>Email your resume to <a href="mailto:ryan.nielsen@everestre.com">ryan.nielsen@everestre.com</a></p>↵',
  id: "43659ace-f912-4fc6-9d0d-a09d3b477df9",
  location: "Warren, NJ",
  title: "Senior Software Developer",
  type: "Full Time",
  url: "https://jobs.github.com/positions/43659ace-f912-4fc6-9d0d-a09d3b477df9",
};

describe("Test for JobItem", () => {
  it("render JobItem correctly", () => {
    const wrapper = mount(
      <PrevJobContextProvider>
        <JobItem job={job} />
      </PrevJobContextProvider>
    );
    expect(wrapper.find("div").exists()).toEqual(true);
  });
  it("renders job.type in strong-element", () => {
    const wrapper = mount(
      <PrevJobContextProvider>
        <JobItem job={job} />
      </PrevJobContextProvider>
    );
    expect(wrapper.find("strong").text()).toContain(job.type);
  });
  it("renders job.title in h2-element", () => {
    const wrapper = mount(
      <PrevJobContextProvider>
        <JobItem job={job} />
      </PrevJobContextProvider>
    );
    expect(wrapper.find("h2").text()).toContain(job.title);
  });
  it("renders job.company_url in a-element", () => {
    const wrapper = mount(
      <PrevJobContextProvider>
        <JobItem job={job} />
      </PrevJobContextProvider>
    );
    expect(wrapper.find("a").text()).toContain(job.company);
  });
  it("renders job.description in div-element", () => {
    const wrapper = mount(
      <PrevJobContextProvider>
        <JobItem job={job} />
      </PrevJobContextProvider>
    );
    expect(wrapper.find("div div").html()).toContain(job.description);
  });
  it("renders job.company_logo in img-element", () => {
    const wrapper = mount(
      <PrevJobContextProvider>
        <JobItem job={job} />
      </PrevJobContextProvider>
    );
    expect(wrapper.find("img").prop("src")).toBe(job.company_logo);
  });
});
