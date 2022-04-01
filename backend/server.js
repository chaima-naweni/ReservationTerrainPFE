const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
require("./config/key");
const app = express();
//app.use(urlencoded({ extended: false}));
// ki zedet el bodyParser wallet elll post tetaada w fiha required:true

const bodyParser = require('body-parser');
app.use(bodyParser.json());
//------------ Passport Configuration ------------//
require('./config/passport')(passport);

//------------ DB Configuration ------------//
const db = require('./config/key').DB;

//------------ Mongo Connection ------------//


//------------ EJS Configuration ------------//
app.use(expressLayouts);
app.use("/assets", express.static('./assets'));
app.set('view engine', 'ejs');

//------------ Bodyparser Configuration ------------//
app.use(express.urlencoded({ extended: false }))

//------------ Express session Configuration ------------//
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

//------------ Passport Middlewares ------------//
app.use(passport.initialize());
app.use(passport.session());


//------------ Connecting flash ------------//
app.use(flash());

//------------ Global variables ------------//
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
//------------ Routes ------------//
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/terrain', require('./routes/terrain'));
//get terrain avec ville
app.use('/terrain/ville',require('./routes/ville'));
//get terrain avec localisation
app.use('/terrain/localisation',require('./routes/loc'));
const PORT = process.env.PORT || 3004;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
//tasna3 awellll API
