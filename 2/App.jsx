import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import useFetch from "./hooks/useFetch";

const App = () => {
  const url = "https://www.course-api.com/react-tours-project";

  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = useFetch(url, setIsLoading, setTours);

  useEffect(() => {
    fetchTours();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <div
        className="animate-bounce text-2xl text-red-500"
        onClick={() => fetchTours()}
      >
        Re-Fetch
      </div>
    );
  }
  return <Tours tours={tours} remove={removeTour} />;
};

export default App;
