import winston from 'winston';
const { createLogger, format, transports } = winston
const { combine, timestamp, label, printf } = format;

const serverFormat = printf(
    ({ level, message, label, timestamp }) => `${timestamp} [${label}] ${level}: ${message}`,
);

export const devLogger = createLogger({
    level:      'debug',
    format:     combine(label({ label: 'server' }), timestamp(), serverFormat),
    transports: [ new transports.Console() ],
});
