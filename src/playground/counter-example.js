class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handlePlusOne() {
        console.log('handlePlusOne');
    }
    handleMinusOne() {
        console.log('handleMinusOne');
    }
    handleReset() {
        console.log('handleReset');
    }


    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}




ReactDOM.render(<Counter/>, document.getElementById('app'));



// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };


// const appRoot = document.getElementById('app');


// const renderCounterApp = () => {
//     const template02 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={reset}>O</button>
//             <button onClick={minusOne}>-1</button>
//         </div>
//     );

//     ReactDOM.render(template02, appRoot);
// }

// renderCounterApp();