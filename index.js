const express = require('express');
// const parser = require('body-parser').urlencoded({ extended: false });
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    filename: (req, file, cb) => cb(null, file.originalname)
});

const upload = multer({ storage });

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
