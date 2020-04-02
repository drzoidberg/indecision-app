console.log('utils.js is running');


export const square = (x) =>  x * x ;
export const add = (a, b) =>  a + b ;

// const subtract= (a, b) => a - b;

// a. export { square, add , subtract as default};

// b. export { square, add };
//    export default substract;

export default (a, b) => a - b;
