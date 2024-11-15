import { useAtom } from "jotai";
import { defaultApi } from "@api/axiosInstance";
import { userAtomWithPersistence } from "@atom/userAtom";

const useLogin = () => {
  const [user, setUser] = useAtom(userAtomWithPersistence);

  const login = (accessToken: string) => {
    defaultApi
      .get("/api/members/self", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => {
        setUser({
          userId: data.id,
          name: data.name,
          token: accessToken,
          role: data.role,
        });
      });
  };

  const logout = () => {
    setUser(null);
  };

  const loginCheck = () => user !== null;

  const sellerCheck = () => user?.role === "ROLE_FARMER";

  return { login, logout, loginCheck, sellerCheck };
};

export default useLogin;
