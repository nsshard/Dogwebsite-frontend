const allowedOrigins = require('./allowedOrigins');
/**
 * If page is not allowed by CORS, then display new error
 * 
 */

const corsOptions = {

    
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;