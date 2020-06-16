var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//port no
const port = 3000;

//adding middleware - CORS
app.use(cors());

//body- parser
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

app.get('/', (req, res) => {
    res.send('Homee Homepage');
})

app.listen(port,()=> {
    console.log('Server started at port:' +port);
});