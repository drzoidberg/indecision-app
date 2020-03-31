var nameVar = 'Jorge';

let nameLet = 'nameWithLet';
nameLet = 'mamellas';

console.log('nameLet: ', nameLet);

const nameConst = 'Brady';
//nameConst = 'Brady'; //error!
console.log('nameConst:', nameConst);


function getPetName() {
    var petName = 'Thor';
    return petName;
}

getPetName();
// console.log(petName);


var fullName = 'Jorge Vicens';
let firstName;


if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
