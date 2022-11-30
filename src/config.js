const config = {
  SERVER_URL:
    process.env.NODE_ENV === "production" ? "" : "http://localhost:3701",
};

export default config;
