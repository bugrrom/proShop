import { ValidationError } from '../index.js';

export const getDbName = () => {
    const { DB_NAME } = process.env;
    console.log(process.env.DB_NAME)
    if (!DB_NAME) {
        throw new ValidationError('Environment variable DB_NAME should be specified');
    }

    if (typeof DB_NAME !== 'string') {
        throw new ValidationError('Environment variable DB_NAME should be a string');
    }

    return DB_NAME;
};
