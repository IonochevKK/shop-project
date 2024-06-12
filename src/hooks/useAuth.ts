import { useMemo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useAuth = () => {
  const userSessionId = useSelector((state: RootState) => state.UserSession.id);
  const [isLoading, setIsLoading] = useState(true);

  const isLogin = useMemo(() => {
    return Boolean(userSessionId);
  }, [userSessionId]);

  useEffect(() => {
    // Установим isLoading на false после первой проверки userSessionId
    setIsLoading(false);
  }, [userSessionId]);

  return { isLogin, isLoading };
};

export default useAuth;
