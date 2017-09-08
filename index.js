const express = require('express');
// const parser = require('body-parser').urlencoded({ extended: false });
const upload = require('./uploadConfig');
const reload = require('reload'); // eslint-disable-line

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

app.post('/signup', upload.single('profile'), (req, res) => {
    res.send(req.body);
});

reload(app);

app.listen(3000, () => console.log('Server started'));
