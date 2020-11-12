import winston from 'winston';
const { createLogger, format, transports } = winston
import path from 'path';

const { combine, timestamp, printf } = format;
const logFormat = printf(({ message, timestamp }) => `${timestamp} ${message}`);
const filename = path.resolve(path.join('logs', 'not_found_errors.log'));

export const notFoundLogger = createLogger({
    level:      'error',
    format:     combine(timestamp(), logFormat),
    transports: [ new transports.File({ filename, level: 'error' }) ],
});
