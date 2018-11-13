import server from './server';
import log from './lib/log';

const env = process.env.NODE_ENV || 'dev',
    port = process.env.NRICH_API_PORT || 3000;


log.info(`Node ${process.version}`);
log.info('Welcome to N.Rich API!');
log.info(`Environment: ${env}`);

server.listen(port, () => log.info(`Koa started on port ${port}`));
