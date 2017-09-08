const express = require('express');
// const parser = require('body-parser').urlencoded({ extended: false });
const upload = require('./uploadConfig');
const reload = require('reload'); // eslint-disable-line

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

const filesConfig = [{ name: 'chinh', maxCount: 1 }, { name: 'phu', maxCount: 2 }];

app.post('/signup', upload.fields(filesConfig), (req, res) => {
    res.send(req.files);
});

app.use((err, req, res, next) => {// eslint-disable-line
    res.send(err.message);
});

app.get('*', (req, res) => res.send('Cannot find this link'));

reload(app);

app.listen(3000, () => console.log('Server started'));
