const useFetch = (url, setIsLoading, setTours) => {
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(`there is a problem : ${error}`);
    }
    setIsLoading(false);
  };
  return fetchTours;
};

export default useFetch;
