import { ValidationError } from '../index.js';

export const getDbPort = () => {
    const { DB_PORT } = process.env;

    if (!DB_PORT) {
        throw new ValidationError('Environment variable DB_PORT should be specified');
    }

    return DB_PORT;
};
