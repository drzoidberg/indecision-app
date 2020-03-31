'use strict';

console.log('app.js is running!');

var app = {
    title: 'Indecision',
    subtitle: 'Note-taking app!',
    item01: 'item one',
    item02: 'item two',
    options: ['one', 'two']
};

var user = {
    name: 'Jorge',
    age: 34,
    location: 'Alcoi'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

function getSubtitle(subtitle) {
    if (subtitle) {
        return React.createElement(
            'p',
            null,
            subtitle
        );
    }
}

var newTemplate01 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var newTemplate02 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options.length > 0 ? 'Here are your options:' : 'No options',
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            app.item01
        ),
        React.createElement(
            'li',
            null,
            app.item02
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(newTemplate02, appRoot);

// JSX - Javascript and XML
// var template = (
//     <div>
//         <h1>pepino!</h1>
//         <p>This is an ordered list:</p>
//         <ol>
//             <li>pepino</li>
//             <li>sangueta</li>
//             <li>salsa romescu</li>
//         </ol>
//         <p>This is a unordered list:</p>
//         <ul>
//             <li>pepino</li>
//             <li>sangueta</li>
//             <li>salsa romescu</li>
//         </ul>
//     </div>
// );
