
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default

app.get('*', function(req, res) {
  res.sendfile('./dist/index.html')
})

const path = require('path');
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile('./dist/index.html');
});

// Heroku port
app.listen(process.env.PORT || 8080);