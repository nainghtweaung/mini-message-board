const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const newMessageRouter = require('./routes/new');

app.use('/', indexRouter);
app.use('/new', newMessageRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
