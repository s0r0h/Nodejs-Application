const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});