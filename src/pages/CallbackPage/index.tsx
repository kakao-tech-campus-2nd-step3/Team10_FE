import { useSearchParams } from "react-router-dom";
import useLogin from "@hooks/useLogin";

const CallbackPage = () => {
  const [searchParams] = useSearchParams();
  const { login } = useLogin();

  const accessToken = searchParams.get("access");

  if (accessToken) {
    login(accessToken);
  }

  return null;
};

export default CallbackPage;
