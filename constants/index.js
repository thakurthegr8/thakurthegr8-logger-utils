const LOGGER_PARAMS = {
  options: {},
  destination: "./pino-logger.log",
};

const LOGTRANSPORTER_PARAMS = {
  axiosOptions: {
    baseURL: "http://localhost:3000",
  },
  path: "/log",
  fileLocation: "./pino-logger.log",
};

module.exports = { LOGGER_PARAMS, LOGTRANSPORTER_PARAMS };
