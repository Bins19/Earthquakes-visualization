const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname.replace('backend', 'public')));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/earthquakes/index.html', ((req, res,
                                     next) => {
    const path = __dirname.replace('backend', 'views/index.html');
    res.sendFile(path);
}));

app.post('/earthquakes/map.html', ((req, res,
                         next) => {
    //console.log(req.body);
    //res.locals.x = req.body.minDate;
    res.render('map', {minDate: req.body.minDate,
                                   maxDate: req.body.maxDate,
                                   minMag: req.body.minMag,
                                   maxMag: req.body.maxMag});
    //next();
}));

/*app.use(((req, res) => {
    console.log(res.locals.x);
}));*/


module.exports = app;



