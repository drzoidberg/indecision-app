console.log('app.js is running!');


const app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer!',
    item01: 'item one',
    item02: 'item two',
    options: []
}


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    render();
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const render = () => {
    const template01 = (
        <div>
            <h1>{app.title}</h1>
            <h2>{app.subtitle}</h2>
            <p>{app.options.length > 0 ? 'Here are your options' : ''}</p>
            <p>{app.options.length}</p>
            <ol>

                {
                    app.options.map((option) => {
                        return <li id={option}>{option}</li>
                    })
                }

            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
                <button onClick={onRemoveAll}>Remove all</button>
            </form>
        </div>
    );

    ReactDOM.render(template01, appRoot);
}

const appRoot = document.getElementById('app');
render();