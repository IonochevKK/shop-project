import { useLocation } from "react-router-dom";

const useGetLocationNow = () => {
  const location = useLocation();
  return { location: location.pathname };
};

export default useGetLocationNow;
