import op from 'object-path';
import Sequelize from 'sequelize';
import log from '../lib/log';
import models from '../models';


let modelsList = {};
export default modelsList;
export const fn = Sequelize.fn;
export const col = Sequelize.col;


export const con = new Sequelize(
    process.env.NRICH_DB_DATABASE,
    process.env.NRICH_DB_USER,
    process.env.NRICH_DB_PASS,
    {
        host: process.env.NRICH_DB_HOST,
        dialect: 'mysql',
        dialectOptions: {
            connectTimeout: process.env.NRICH_DB_TIMEOUT
        },

        logging: process.env.NRICH_DB_DEBUG ? (s) => log.debug(s) : undefined,

        pool: {
            max: 16,
            min: 0,
            idle: 500,
            timeout: process.env.NRICH_DB_TIMEOUT,
            acquire: process.env.NRICH_DB_TIMEOUT,
            connect: process.env.NRICH_DB_TIMEOUT,
            evict: process.env.NRICH_DB_TIMEOUT,
            handleDisconnects: true
        }
    });


con.sync({force: false})
    .then((engine) => {
        log.info(`Sequelize is ready: ${Object.keys(engine.models).length} models`);
    })
    .catch((e) => log.error(e));


export const connection = con;

/**
 * setting up the models
 */
for (const [modelName, model] of Object.entries(models)) {
    // log.debug(`...${modelName}`);
    op.set(modelsList, modelName, model(connection, Sequelize));
}
