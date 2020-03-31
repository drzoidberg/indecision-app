// const square = function (x) {
//     return x * x;
// };

// console.log('square: ', square(8));

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log('squareArrow: ', squareArrow(8));


const getFirstName = (fullName) => fullName.split(' ')[0];

function getFirstNameBasic (fullName) {
    return fullName.split(' ')[0];
}

console.log(getFirstNameBasic('Jorge Vicens'));
console.log(getFirstName('Jorge Vicens'));

