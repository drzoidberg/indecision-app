'use strict';

console.log('app.js is running!');

var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer!',
    item01: 'item one',
    item02: 'item two',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    render();
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var render = function render() {
    var template01 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title,
            '}'
        ),
        React.createElement(
            'h2',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : ''
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            ),
            React.createElement(
                'button',
                { onClick: onRemoveAll },
                'Remove all'
            )
        )
    );

    ReactDOM.render(template01, appRoot);
};

var appRoot = document.getElementById('app');
render();
