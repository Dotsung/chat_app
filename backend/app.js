var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, () => {
    console.log('listening on port 3000');
});

app.get('/', (req, res) => {
    res.sendfile(__dirname+'/client.html');
});

io.on('connection', (socket) => {
    socket.on('receive', (from, msg) => {
        io.emit('client.receive', from + " : " + msg );
    });
});