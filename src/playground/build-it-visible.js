console.log('buildit-visible is working!');
const appRoot = document.getElementById('app');

let pVisible = true;

const onChangeVisibility = () => {
    pVisible = !pVisible
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Toggle Visible</h1>
            <button onClick={onChangeVisibility}>Toggle visibility of the next paragraph</button>

            {
                pVisible ?
                    <p style={{visibility: 'visible'}}>This is el susodicho paragraph</p>
                :
                    <p style={{visibility: 'hidden'}}>This is el susodicho paragraph</p>

            }
        </div>
    );

    ReactDOM.render(template, appRoot);
}


render();