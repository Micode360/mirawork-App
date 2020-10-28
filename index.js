const express = require('express');
const mainBase = require('./config/base');

const app = express();
require('dotenv').config();

mainBase();


app.use(express.json({ extended: false }));

app.get('/', (req,res) => {
    res.send('Hello');
});



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));