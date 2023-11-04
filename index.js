require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const myRouter = require('./routes/router');
const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.DB_CONNECTION)
.then((res) => console.log('Connected to database'))
.then((res) => app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}))
.catch((err) => console.log(err));

app.use(cors({
    origin: '*'
}))

app.use('/route', myRouter);

app.get('/', (req, res) => { res.send('Welcome to my web server'); });