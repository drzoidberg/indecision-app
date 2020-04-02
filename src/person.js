const isAdult = (age) => age >= 18 ? true : false;
const canDrink = (age) => age >= 16 ? true : false;


export default (age) => age >= 0 ? true : false;
export { isAdult, canDrink }

