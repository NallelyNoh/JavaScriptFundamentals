// Ejercicio 1: Madame zazu

let city = "Alemania";
let children = 1;
let husbands = "mi novio";
let work = "aplicando investigación de operaciones";
let award = "premio Franz Edelman";
let age = 35;

// console.log(city, children, husbands, work, award, age);
// console.log("City: ", city);
// console.log("Children: ", children);
// console.log("Husbands: ", husbands);
// console.log("Work:", work);
// console.log("Award:", award);
// console.log("Age:", age);

console.log("Madame Zazu me dijo que:")
console.log("Viviré en", city, "tendré", children, "hijo", "y estaré casada con", husbands, "en mi trabajo estaré", work , "y ganaré el", award, "a la edad de ", age)



// Calculadora de edad

let year = 1990;
const añoactual = 2020;

function persona(year){
    let edad = ""
    edad = añoactual - year;
    console.log(edad)
}
persona(year);

//Ana hizo este:

function EdadCalculator(birthYear, actualYear){
return actualYear - birthYear;
}

console.log(EdadCalculator(1988, 2020));



// let stars = "";
// for (let i=0; i <= 10; i++){
//         console.log("Stars:", i, stars);
//         stars = stars + "*";
//     }
    


// stars = "";
//  let i = 0;
// console.log("While loop");

//  while(i <= 10) {
//  console.log("stars:", i, stars);
//  stars += "*";
//  i++
//  }



// console.log("Do while loop");
// stars = "";
// let i = 0;

// do{
//       console.log("stars:", i, stars)
//       stars += "*";
//       i++
//   }
//  while(i <= 10)



//Tabla de multiplicar
 for(i = 0; i <= 10; i++){
     for(j =0; j <= 10; j++){
         console.log(i, "*", j, "=", i*j);
     }
 }
 












// Calculadora de figuras geometricas.

// Águila o Sello

// intercambiando variables 
// let a = 'red';
// let b = 'blue';

// console.log(a);
// console.log(b);