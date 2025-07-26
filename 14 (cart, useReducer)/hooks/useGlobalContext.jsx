import { useContext } from "react";
import { AppContext } from "../context/Context";

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
