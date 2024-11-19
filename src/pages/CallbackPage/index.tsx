import { useNavigate, useSearchParams } from "react-router-dom";
import useLogin from "@hooks/useLogin";

const CallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useLogin();

  const accessToken = searchParams.get("access");

  if (accessToken) {
    login(accessToken).then(() => {
      navigate("/");
    });
  }

  return null;
};

export default CallbackPage;
