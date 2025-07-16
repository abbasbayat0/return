import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  const fetchFunc = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setJob(result);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFunc();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <BtnContainer jobs={jobs} current={current} setCurrent={setCurrent} />
      <JobInfo jobs={jobs} current={current} />
    </div>
  );
};

export default App;
