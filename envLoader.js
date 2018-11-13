const fs = require('fs');
const consul = require('consul');
const {EventEmitter} = require('events');
const env = process.env.NODE_ENV || 'dev';
const prefix = `cactus/${env}`;

let dotenv;
try {
    dotenv = require('dotenv').parse(fs.readFileSync('../../.env'));
} catch (e) {}


class EnvLoader extends EventEmitter {

    constructor() {
        super();
    }

    async load() {
        try {
            const consulClient = consul({promisify: true}),
                consulEnv = await consulClient.kv.get({key: prefix, recurse: true});

            if (consulEnv) consulEnv.forEach(({Key, Value}) => {
                Object.assign(process.env, {[Key.split('/').pop()]: Value});
            });
            console.log(`[env] applied ${Object.keys(consulEnv).length} var(s) from consul`);
        } catch (error) {}

        if (dotenv) {
            try {
                Object.assign(process.env, dotenv);
                console.log(`[env] applied ${Object.keys(dotenv).length} var(s) from .env`);
            } catch (error) {}
        }

        this.emit('complete');
    }
}

module.exports = EnvLoader;
