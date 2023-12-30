const pino = require("pino");

const logger = (options = {}, destination = "./pino-logger.log") =>
  pino(options, pino.destination(destination));

module.exports = logger;
