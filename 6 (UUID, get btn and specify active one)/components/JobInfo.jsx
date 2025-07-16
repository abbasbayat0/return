import Duties from "./Duties";

const JobInfo = ({ jobs, current }) => {
  const { order, title, dates, duties, company } = jobs[current];

  return (
    <div>
      <p>{order}</p>
      <p>{title}</p>
      <p>{dates}</p>
      <p>{company}</p>
      <Duties duties={duties} />
    </div>
  );
};

export default JobInfo;
