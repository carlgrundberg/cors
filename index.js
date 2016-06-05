// Heroku defines the environment variable PORT, and requires the binding address to be 0.0.0.0
var host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [ 'http://localhost:63342', 'http://carlgrundberg.github.io', 'https://carlgrundberg.github.io' ]
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});