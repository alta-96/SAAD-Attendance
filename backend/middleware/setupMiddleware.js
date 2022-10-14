module.exports = (app) => {
    require("dotenv").config();
    
    configureBodyParser(app);
    configureMorgan(app);
    
    app.disable('etag'); // prevents returning 304 no-change state and returns 200 instead...
}

function configureMorgan(app) {
    const morgan = require('morgan');

    if (process.env.MODE === 'DEVELOP') {
        app.use(morgan('common'));
    } else {
        app.use(morgan('tiny'));
    }
}

function configureBodyParser(app) {
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
}