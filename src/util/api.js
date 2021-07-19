import axios from "axios";
const https = require("https");

let instance = axios.create(
  {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://60dc58e9c2b6280017feb901.mockapi.io"
        : "https://60dc58e9c2b6280017feb901.mockapi.io",
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
    },
  },

  {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  }
);

// request header
instance.interceptors.request.use(
  (config) => {
    let url = config.url;

    let auth = localStorage.getItem("token");
    if (!url.includes("auth")) {
      if (auth === null) {
        return config;
      }
      config.headers = { Authorization: "Bearer " + auth };
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
