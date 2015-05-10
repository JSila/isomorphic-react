var React = require('react')

var Component = React.createClass({
    handleClick: function() {
        alert(this.props.message)
    },
    render: function() {
        return <button onClick={this.handleClick}>{this.props.message}</button>
    }
});

module.exports = Component;
