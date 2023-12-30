const pino = require("pino");
const { LOGGER_PARAMS } = require("../constants");

const logger = (
  options = LOGGER_PARAMS.options,
  destination = LOGGER_PARAMS.destination
) => pino(options, pino.destination(destination));

module.exports = logger;
