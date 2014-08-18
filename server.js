var express  = require('express');
var methodOverride = require('method-override'); 


var app = express();
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

// application -------------------------------------------------------------
    app.get('/', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

app.listen(8080);
console.log("App listening on port 8080");