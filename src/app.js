const express = require('express');
const cors = require('cors');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const app = express();

const path = require('path');

const { mongoose } = require('./config/database');

app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Routes
app.use('/', require('./routes/index.routes'));
app.use('/api/manager/employees', require('./routes/employees.routes'));
app.use('/api/manager/departments', require('./routes/departments.routes'));
app.use('/api/manager/users', require('./routes/users.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
