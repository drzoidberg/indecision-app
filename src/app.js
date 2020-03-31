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


const template01 = (
    <div>
        <h1>Indecision</h1>
        <h2>Note-taking app!</h2>
        <p>Here are your options:</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
    <form>
        <input></input>
    </form>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template01, appRoot);