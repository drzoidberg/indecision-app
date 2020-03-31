
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};


const appRoot = document.getElementById('app');


const renderCounterApp = () => {
    const template02 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={reset}>O</button>
            <button onClick={minusOne}>-1</button>
        </div>
    );

    ReactDOM.render(template02, appRoot);
}

renderCounterApp();