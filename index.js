var express = require('express');
var hbs = require('express-handlebars');
var React = require('react');

require('node-jsx').install();

var Component = React.createFactory(require('./app/Component'));

var app = express();

app.use(express.static('public'))
app.engine('hbs', hbs({extname: 'hbs'}));
app.set('view engine', 'hbs');

function home(request, response) {
    var message = request.params.message || 'Hello';

    response.render('index', {
        component: React.renderToString(Component({ message: message })),
        message: message
    });
}

app.get('/', home);
app.get('/:message', home);

var server = app.listen(3000, function() {
    console.log('Listening on http://localhost:%s', server.address().port);
});
