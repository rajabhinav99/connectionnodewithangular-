var express = require('express');
var mongoose = require('mongoose');
var router = require('./router/router');
var cors = require('cors');



var app = new express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mydb');
mongoose.connection.on('connected', () => {
    console.log('MongoDb connected on port: 27017');
});


app.use('/api', router);

const port = 1000;
app.listen(port, function () {
    console.log('Server is running on port: ' + port);
});