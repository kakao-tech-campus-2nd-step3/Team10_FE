import { AxiosResponse } from "axios";

const refreshTokenFetch = async (): Promise<string> =>
  new Promise(resolve => {
    setInterval(() => {
      resolve("newToken");
    }, 2000);
  });

const refrechIntercepter = async (response: AxiosResponse): Promise<AxiosResponse> => {
  if (response.status === 401) {
    const result = await refreshTokenFetch().catch(() => {
      alert("로그아웃 되었습니다. 다시 로그인해주세요.");
      window.location.href = "/";
    });
    const user = JSON.parse(localStorage.getItem("poomasi_user") || "{}");

    localStorage.setItem(
      "poomasi_user",
      JSON.stringify({
        ...user,
        token: result,
      }),
    );
  }
  return response;
};

const errorHandleIntercepter = (error: Error) => {
  if (error.message === "Network Error") {
    // show error message
  }
  return error;
};

export { refrechIntercepter, errorHandleIntercepter };
