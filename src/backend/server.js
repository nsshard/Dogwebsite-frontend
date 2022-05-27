const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const fs = require('fs');
const multer = require("multer");
const mongoose = require('mongoose');

/**
 * Set port, 3000 is set as default (frontend is generally hosted at 3001)
 * 
 */

const PORT = process.env.PORT || 3000;

/**
 * Make database link to mongodb with mongoose. In this case, we're accessing petshopdb (can be swapped for petshopdbtesting for testing purpose)
 * 
 */
mongoose.connect("mongodb://0.0.0.0:27017/petshopdb", {

  useNewUrlParser: "true",
  useUnifiedTopology: "true"

})

/**
 * Make app use certain required features
 * 
 */
app.use(logger);
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Exports endpoints from the routes so features can be accessed at these places
 * 
 */
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/api/register'));
app.use('/auth', require('./routes/api/auth'));
app.use('/logout', require('./routes/api/logout'));
app.use('/dogs', require('./routes/api/dogs'));
app.use('/users', require('./routes/api/users'));
app.use('/img', require('./routes/api/imageAPI'));
app.use('/comments', require('./routes/api/comments'));

/**
 * Blockers, display 404 for nonexisting pages with JSON or text
 * 
 */
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});
app.use(errorHandler);

/**
 * Display information on console once connection is established
 * 
 */

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});