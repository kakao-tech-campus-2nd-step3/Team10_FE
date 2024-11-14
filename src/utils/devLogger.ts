/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
const devLogger = (message: any) => {
  if (process.env.MODE === "DEV") {
    console.log(message);
  }
};

export default devLogger;
