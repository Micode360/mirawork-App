const express = require('express');
const mainBase = require('./config/base');

const app = express();
require('dotenv').config();

mainBase();


app.use(express.json({ extended: false }));

app.use(express.static('client/public'));

app.get('/', (req, res) =>
res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));