const pino = require("pino");

const pinoLogger = (options = {}, destination = "./pino-logger.log") =>
  pino(options, pino.destination(destination));

module.exports = pinoLogger;
