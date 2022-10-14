module.exports = (app) => {
    require("dotenv").config();
    const bodyParser = require('body-parser');
    const morgan = require('morgan');
    
    if (process.env.MODE === 'DEVELOP') {
        app.use(morgan('common'));    
    } else {
        app.use(morgan('tiny'));
    }
    
    app.use(bodyParser.json());
    app.disable('etag');
}