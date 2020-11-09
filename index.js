const express = require('express');
var cors = require('cors')
const mainBase = require('./config/base');




const app = express();
app.use(express.json());
app.use(cors())
require('dotenv').config();

mainBase();


app.use(express.json({ extended: false }));

const userRouter = require('./routes/user.reg');

app.use('/:work/user', userRouter);

app.get('/api',(req,res) => {
    const data = { 
        name: 'King',
        status: 'online',
        description: 'This is my api'
    }
    res.json(data);
});



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));