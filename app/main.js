var React = require('react');
var Component = React.createFactory(require('./Component'));

window.renderApp = function(message) {
    React.render(
        Component({ message: message }),
        document.getElementById('root')
    );
}
