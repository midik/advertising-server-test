import moment from 'moment';
import winston from 'winston';
import daily from 'winston-daily-rotate-file';

moment.locale('en');


const transports = [

    new (daily)({
        filename: './_logs/%DATE%.txt',
        timestamp: true,
        level: 'debug',
        json: false,
        prettyPrint: true,
        prepend: true,
        datePattern: 'YYYY-MM-DD'
    }),

    new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
            winston.format.align(),
            winston.format.printf((info) => {
                const {
                    timestamp, level, message, ...args
                } = info;

                const ts = timestamp.slice(0, 19).replace('T', ' ');
                return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
            }),
        ),
        level: 'debug'
    })

    // TODO persistent transport
];

export default winston.createLogger({transports});
