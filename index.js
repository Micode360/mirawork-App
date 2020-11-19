const express = require('express');
const cors = require('cors');
const passport = require('passport');
const mainBase = require('./config/base');
const flash = require('connect-flash');
const cookieSession = require('cookie-session');
const userRouter = require('./routes/user.reg');
const dashboard = require('./routes/dashboard');
const passportAuth = require('./config/passportauth');

const app = express();
require('dotenv').config();

//initializing passport
passportAuth(passport)

//using inbuilt body parser middleware
app.use(express.json());
app.use(cors())

//db called
mainBase();




//connecting to the react app
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
);

//cookie 
app.use(cookieSession ({
    secret: 'secret',
    resave: true,
    saveUninitialize: true,
    keys: [process.env.KEYS]
}));


//connecting flash
app.use(flash());


//Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json({ extended: false }));

app.use('/:work/user', userRouter);
app.use('/dash', dashboard);


app.get('/',(req,res) => {
        res.sendFile(__dirname + '/client/public/index.html');
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));