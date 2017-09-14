const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const express = require('express');


const index = require('./routes/index');
const error = require('./routes/error');
const resultat = require('./routes/resultat');
const rapport = require('./routes/resultatrapport');

const port = 3000;

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use('/', index);
app.use('/resultat', resultat);
app.use('/resultatrapport', rapport);

io.on('connection', socket => {
    socket.on('uppdaterat', vote => {
        io.emit('uppdaterat', vote);
    });
});

app.use('/', error);
http.listen(port);