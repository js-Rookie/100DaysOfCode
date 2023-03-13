"use strict";

// The Conditional (or tertiay ) Operator

// const age = 12;
// age>=18 ? console.log('You can now opt for driving license') : console.log('wait for your opportunity');

// const bill = 430;
// const tip = bill<=300 && bill >= 50 ? bill*0.15: bill*0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill+tip}`);

// function fruitProcessor(apples,oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice=fruitProcessor(6,0);
// const orangeJuice=fruitProcessor(0,8);
// console.log(appleJuice);
// console.log(orangeJuice);

// Function declaration

// function calcAge1(birthyear){
//     return 2023-birthyear;
// }

// Function Expression

// const calcAge2 = function(birthyear){
//     return 2023-birthyear;
// }

// const Age1 = calcAge1(1999);
// console.log(`Your are ${Age1} year old`);

// const Age2 = calcAge2(2007);
// console.log(`Your are ${Age2} year old`);

// // Arrow Functions (ES-5 Syntax)

// const calcAge3 = (birthyear) => 2023-birthyear;

// const calcAge3 = (birthyear) => {
//     return 2023-birthyear;
// }

// const Age3 = calcAge3(1985);
// console.log(`Your are ${Age3} year old`);

// Function calling another function

// const cutFruitpieces = (fruit)=>fruit*4

// const fruitProcessor = (apples,oranges)=>{
//    const applePieces = cutFruitpieces(apples);
//    const orangePieces = cutFruitpieces(oranges);
//     return `Juice made with ${applePieces} apple pieces and ${orangePieces} orangepieces`
// }

// console.log(fruitProcessor(5,4));

// const calcAge = (dateofbirth)=>2023-dateofbirth;

// const yearsUntilRetirement=(firstName,birthYear)=>{
//   const age = calcAge(birthYear);
//   const retirementAge = 65-age;
//   return   retirementAge > 0 ? console.log(`${firstName} aged ${age} have ${retirementAge} years left to retire`) : console.log(`${firstName} aged ${age} is already retire`);
// }

// const yearsLeftToRetire = yearsUntilRetirement('Adwaith',1999);

// console.log(yearsLeftToRetire);

// ============ Sample Function Excercise =========

// const calcAverage=(a,b,c)=>{
//     const avg=(a+b+c)/3;
//     return avg;
//     }

// // const avgDolphins = calcAverage(44,23,71);
// // const avgKoalas = calcAverage(65,54,49);

// const avgDolphins = calcAverage(85,54,41);
// const avgKoalas = calcAverage(23,34,27);

// const checkWinner = (avgDolphins,avgKoalas) => {

//     if(avgDolphins > (avgKoalas*2)){
//         console.log(`The winner is team Dolphins with an average score of ${avgDolphins} vs  ${avgKoalas}`);
//     }
//     else if(avgKoalas >(avgDolphins*2)){
//         console.log(`The winner is team Koalas with an average score of ${avgKoalas} vs${avgDolphins}`);
//     }
//     else{
//         console.log(`No team wins`);
//     }
// }

// checkWinner(avgDolphins,avgKoalas);

// ========== Learning about objetts = ===========

// const jonas = {
//     firstName : 'jonas',
//     lastName : 'Schemedtman',
//     age : 2023-1985,
//     job: 'Teacher',
//     friends :  ['Michael','Peter','Steven']
// };

// jonas.location = 'portugal';
// jonas['twitter'] = '@jonasschidmattman';
// console.log(jonas);

// // Using Dot Notation

// // console.log(jonas.firstName);

// // Using Bracket Notation

// // console.log(jonas['job']);

// console.log(`${jonas['firstName']} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[1]}`);

// Object Methods

// const jonas = {
//     firstName : 'jonas',
//     lastName : 'Schemedtman',
//     birthyear:1991,
//     job: 'Teacher',
//     friends :  ['Michael','Peter','Steven'],
//     hasDriversLicense: true,
//     calcAge : function () {
//         this.age = 2023 - this.birthyear;
//         return this.age;
//     }
// };

// jonas.hasDriversLicense === true ?

// console.log(`${jonas['firstName']} is a ${jonas['calcAge']()} old ${jonas['job']} and he has a Driver's License`) :
// console.log(`${jonas['firstName']} is a ${jonas.calcAge()} old ${jonas['job']} and he dont have a DriversLicense`);

// const jonas = [
//     'jonas',
//     'Schemedtman',
//     1991,
//     'Teacher',
//     ['Michael','Peter','Steven'],
//     true
// ];

// const jonasTypes = [];
// for(let i=0;i< jonas.length;i++){
//      jonasTypes[i] = typeof jonas[i];
//     console.log(jonasTypes[i],jonas[i]);
// }

// const years = [1991,1998,1987,1975];
// const age = [];

// for(let i=0;i<years.length;i++){
//     age.push(2023-years[i]);
// }

// console.log(age);

// Exercise -1

const minMaxTemp = (t1, t2) => {
  const newArray = t1.concat(t2);
  let maxTemp = newArray[0];
  let minTemp = newArray[0];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > maxTemp) maxTemp = newArray[i];
    if (newArray[i] < minTemp) minTemp = newArray[i];
  }
  // return {maxTemp,minTemp}; //output will be          {maxTemp: 8, minTemp: 3}
  // return [maxTemp,minTemp];
  const tempDiff = maxTemp - minTemp;
  return { maxTemp, minTemp, tempDiff };
};

// const data = minMaxTemp([5,8,3],[7,3,6]);

// console.log(`The Maximum temparature is given by ${data.maxTemp}
// and the Minimum Temparature is given by ${data.minTemp}
// and the temparture difference is given by ${data.tempDiff}`);

const x = 5;
const adwaith = () => {
  console.log("adwaith rajesh is avery good boy");
};

adwaith();
