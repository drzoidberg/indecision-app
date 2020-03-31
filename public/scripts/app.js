'use strict';

console.log('buildit-visible is working!');
var appRoot = document.getElementById('app');

var pVisible = true;

var onChangeVisibility = function onChangeVisibility() {
    pVisible = !pVisible;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Toggle Visible'
        ),
        React.createElement(
            'button',
            { onClick: onChangeVisibility },
            'Toggle visibility of the next paragraph'
        ),
        pVisible ? React.createElement(
            'p',
            { style: { visibility: 'visible' } },
            'This is el susodicho paragraph'
        ) : React.createElement(
            'p',
            { style: { visibility: 'hidden' } },
            'This is el susodicho paragraph'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
