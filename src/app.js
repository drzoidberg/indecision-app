console.log('app.js is running!');


const app = {
    title: 'Indecision',
    subtitle: 'Note-taking app!',
    item01: 'item one',
    item02: 'item two',
    options: [
        'one',
        'two'
    ]
}

const user = {
    name: 'Jorge',
    age: 34,
    location: 'Alcoi'
}


function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

function getSubtitle(subtitle) {
    if (subtitle) {
        return <p>{subtitle}</p>;
    }
}

const newTemplate01 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const newTemplate02 = (
    <div>
        <h1>{app.title}</h1>
        {/* {getSubtitle(app.subtitle)} */}
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? 'Here are your options:': 'No options'}
        <ol>
            <li>{app.item01}</li>
            <li>{app.item02}</li>
        </ol>
    </div>
);


const appRoot = document.getElementById('app');

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





