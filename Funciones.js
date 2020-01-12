//Function Declaration
function move() { }  // de esta manera no lleva ";" después de la "}"
move();

//Function expression ó Function expression named
let movement = function move(){ }; // lleva el ";" porque cumple con la estrucutra de la declaración de variables
movement();

//Anonymus function expression
let run = function () { };  
run();

//arrow function;
let walk = () => move();
let jump = () => { };



// function saludo (){
// alert("Hola mundo");
// }
// saludo();

let x = typeof numero;
  let y = typeof x;

  console.log(x === y);

  console.log(x);
  console.log(y);

// let holaFunctions = () => {
//   let a = 5;
//   let b = 10;
//   console.log("Hola al mundo de las funcioes");
//   console.log("Soy un arrow function");
// jump();
// if (a > b){
//   console.log("El numero mayor es a")
// }
// else {
//   console.log("El numero mayor es b")
// }
// //loop
// }
// holaFunctions();



let ageCalculator = function calculator(birthDay, actualYear){
  let result = actualYear - birthDay;
  return result;
};

/// Revisar lo siguiente!!!!!

console.log("??????");
let age = ageCalculator(1988, 2020);
console.log(ageCalculator(1988,2020));


let isMayorEdad = (age) => {
    console.log("edad es", age);
    if(age >= 18)
        console.log("Es mayor de edad");
        else
        console.log("Es menor de edad");
};

isMayorEdad(age);

