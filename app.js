const EnvLoader = require('./envLoader');
const envLoader = new EnvLoader();

require = require('esm')(module);

envLoader.on('complete', () => {
    process.nextTick(() => {
        require('./main');
    });
});

envLoader.on('error', (error) => {
    console.log(error);
    process.exit(1);
});

envLoader.load();
