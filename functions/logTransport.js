const { default: axios } = require("axios");
const fs = require("fs");
import { LOGTRANSPORTER_PARAMS } from "../constants";

const logTransport = async (
  axiosOptions = LOGTRANSPORTER_PARAMS.axiosOptions,
  path = "/log",
  fileLocation = LOGTRANSPORTER_PARAMS.fileLocation
) => {
  try {
    const axiosInstance = axios.create(axiosOptions);
    const data = fs.readFileSync(fileLocation, "utf8").toString();
    const response = await axiosInstance.post(path, data);
    const responseData = await response.data;
    return { success: true, response: responseData };
  } catch (error) {
    return { success: false, response: error };
  }
};

module.exports = logTransport;
