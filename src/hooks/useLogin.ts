import { useSetAtom } from "jotai";
import { userAtomWithPersistence } from "@atom/userAtom";

const useLogin = () => {
  const setUser = useSetAtom(userAtomWithPersistence);

  const login = (accessToken: string) => {
    setUser({
      userId: "1",
      name: "John Doe",
      token: accessToken,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return { login, logout };
};

export default useLogin;
